// E-posta gönderimi Resend HTTP API'siyle yapılır. RESEND_API_KEY tanımlı
// değilse gönderim kapalıdır; yerel geliştirmede EPOSTA_KONSOL=1 ile kod
// konsola yazılır. Anahtar `wrangler secret put RESEND_API_KEY` ile eklenir.

export interface EpostaEnv {
  RESEND_API_KEY?: string;
  MAIL_FROM?: string;
  EPOSTA_KONSOL?: string;
  // Kullanıcı mesajları ve soru önerileri bu adrese iletilir; tanımlı değilse iletim kapalıdır
  YONETICI_EPOSTA?: string;
}

export const epostaAcik = (env: EpostaEnv) => !!env.RESEND_API_KEY || env.EPOSTA_KONSOL === "1";

const GONDEREN = "Pratikler <pratikler@mail.selcukdinc.dev>";

const AMAC = {
  kayit: { konu: "Kayıt kodun", cumle: "Pratikler hesabını açmak için bu kodu gir" },
  reset: { konu: "Parola sıfırlama kodun", cumle: "Parolanı sıfırlamak için bu kodu gir" },
  email: { konu: "E-posta doğrulama kodun", cumle: "Yeni e-posta adresini doğrulamak için bu kodu gir" },
} as const;

export async function kodGonder(env: EpostaEnv, alici: string, kod: string, amac: keyof typeof AMAC): Promise<void> {
  const { konu, cumle } = AMAC[amac];
  const metin =
    `${cumle}: ${kod}\n\nKod 15 dakika geçerli. Bu isteği sen yapmadıysan bu e-postayı yok sayabilirsin.\n\n` +
    "pratikler.selcukdinc.dev";

  if (!env.RESEND_API_KEY) {
    if (env.EPOSTA_KONSOL === "1") {
      console.log(`[eposta] ${alici} · ${konu} · ${kod}`);
      return;
    }
    throw new Error("e-posta gönderimi kapalı");
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.MAIL_FROM || GONDEREN,
      to: [alici],
      subject: `${konu}: ${kod}`,
      text: metin,
      html:
        `<p>${cumle}:</p><p style="font:600 28px/1.2 ui-monospace,Menlo,monospace;letter-spacing:6px">${kod}</p>` +
        "<p>Kod 15 dakika geçerli. Bu isteği sen yapmadıysan bu e-postayı yok sayabilirsin.</p>" +
        '<p style="color:#666">pratikler.selcukdinc.dev</p>',
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 200)}`);
}

export function dortHaneliKod(): string {
  // 10.000'e bölümden gelen kayma ihmal edilebilir (2^32 % 10^4 küçük)
  return String(crypto.getRandomValues(new Uint32Array(1))[0]! % 10_000).padStart(4, "0");
}

// Bilgilendirme e-postası (ör. yöneticinin cevabı). Gönderim kapalıysa sessizce geçilir.
export async function bildirimGonder(env: EpostaEnv, alici: string, konu: string, metin: string): Promise<void> {
  if (!env.RESEND_API_KEY) {
    if (env.EPOSTA_KONSOL === "1") console.log(`[eposta] ${alici} · ${konu}`);
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: env.MAIL_FROM || GONDEREN, to: [alici], subject: konu, text: metin }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 200)}`);
}

// Kullanıcıdan yöneticiye gelen bir mesajın (yazışma, cevap, soru önerisi) e-posta kopyası.
// reply_to kullanıcının adresidir: e-postada "Yanıtla" doğrudan kullanıcıya gider.
export interface YoneticiIletisi {
  konu: string;
  // Kim, hangi pratikten, ne yazdı; düz metin
  metin: string;
  // Paneldeki ilgili sayfa
  baglanti: string;
  yanitla?: string | null;
}

export function yoneticiIletisiGovdesi(env: EpostaEnv, i: YoneticiIletisi) {
  return {
    from: env.MAIL_FROM || GONDEREN,
    to: [env.YONETICI_EPOSTA!],
    subject: i.konu,
    text: `${i.metin}\n\nPanelde aç: ${i.baglanti}`,
    ...(i.yanitla ? { reply_to: i.yanitla } : {}),
  };
}

export async function yoneticiyeIlet(env: EpostaEnv, i: YoneticiIletisi): Promise<void> {
  if (!env.YONETICI_EPOSTA) return;
  if (!env.RESEND_API_KEY) {
    if (env.EPOSTA_KONSOL === "1") console.log(`[eposta] ${env.YONETICI_EPOSTA} · ${i.konu}`);
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(yoneticiIletisiGovdesi(env, i)),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 200)}`);
}
