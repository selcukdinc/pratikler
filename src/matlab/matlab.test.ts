import { describe, expect, it } from "vitest";
import { Yorumlayici } from "./yorumla";
import { sozcukle } from "./sozcuk";
import type { Matris } from "./deger";

function calis(kod: string) {
  const y = new Yorumlayici({ tohum: 1 });
  const s = y.calistir(kod);
  return { y, hata: s.hata, cikti: y.cikti, d: (ad: string) => y.degiskenler.get(ad) as Matris };
}
const deger = (kod: string, ad = "x") => {
  const r = calis(kod);
  if (r.hata) throw new Error(`${r.hata.mesaj} (satır ${r.hata.satir})`);
  return r.d(ad);
};
const dizi = (kod: string, ad = "x") => deger(kod, ad).re;

describe("sözcükleyici", () => {
  it("köşeli parantezde boşluk eleman ayırır, işaretli sayıyı ayırır", () => {
    const v = (s: string) => sozcukle(s).map((z) => z.v).join(" ").trim();
    expect(v("[1 -2 3]")).toBe("[ 1 , - 2 , 3 ]");
    expect(v("[1 - 2]")).toBe("[ 1 - 2 ]");
    expect(v("[a' b']")).toBe("[ a ' , b ' ]");
  });
  it("1./x içinde nokta sayıya katılmaz, 'abc' metindir, x' devriktir", () => {
    expect(sozcukle("1./x").map((z) => z.v)).toEqual(["1", "./", "x", ""]);
    expect(sozcukle("s = 'it''s'")[2]).toMatchObject({ t: "metin", v: "it's" });
    expect(sozcukle("y = x'")[3]).toMatchObject({ t: "op", v: "'" });
  });
});

describe("yorumlayıcı: temel yapılar", () => {
  it("aralık, eleman bazında işlemler ve indeksleme", () => {
    expect(dizi("x = 0:2:8;")).toEqual([0, 2, 4, 6, 8]);
    expect(dizi("n = 1:4; x = n.^2;")).toEqual([1, 4, 9, 16]);
    expect(dizi("v = 10:10:50; x = v(2:end);")).toEqual([20, 30, 40, 50]);
    expect(dizi("v = 10:10:50; x = v(end:-1:1);")).toEqual([50, 40, 30, 20, 10]);
    expect(dizi("v = [3 8 1 9]; x = v(v > 2);")).toEqual([3, 8, 9]);
    expect(dizi("A = [1 2; 3 4]; x = A(:, 2);")).toEqual([2, 4]);
    expect(dizi("A = [1 2; 3 4]; x = A';")).toEqual([1, 2, 3, 4]);
    expect(dizi("A = [1 2; 3 4]; x = A * [1; 1];")).toEqual([3, 7]);
    expect(dizi("x = 2^-1 + -2^2;")).toEqual([-3.5]);
  });
  it("indisli atama diziyi büyütür, [] siler", () => {
    expect(dizi("x(3) = 5;")).toEqual([0, 0, 5]);
    expect(dizi("x = 1:5; x(2) = [];")).toEqual([1, 3, 4, 5]);
    expect(dizi("x = zeros(2); x(2, :) = [7 8];")).toEqual([0, 7, 0, 8]);
    expect(dizi("x = []; for k = 1:3, x(end+1) = k*k; end")).toEqual([1, 4, 9]);
  });
  it("kontrol akışı: if, for, while, switch, break", () => {
    expect(dizi("x = 0; for k = 1:10, if mod(k, 2) == 0, continue; end, x = x + k; end")).toEqual([25]);
    expect(dizi("x = 1; while x < 100, x = x * 3; end")).toEqual([243]);
    expect(dizi("x = 0; for k = 1:10, if k > 3, break; end, x = k; end")).toEqual([3]);
    expect(dizi("s = 'b'; switch s, case 'a', x = 1; case 'b', x = 2; otherwise, x = 3; end")).toEqual([2]);
  });
  it("fonksiyonlar, anonim fonksiyonlar ve çoklu çıktı", () => {
    expect(dizi("x = kare(4);\nfunction y = kare(a)\n  y = a^2;\nend")).toEqual([16]);
    expect(dizi("f = @(t) 2*t + 1; x = f([1 2]);")).toEqual([3, 5]);
    expect(dizi("[m, x] = max([4 9 2]);")).toEqual([2]);
    expect(dizi("[r, x] = size(ones(2, 3));")).toEqual([3]);
  });
  it("karmaşık sayılar: exp(j*w), abs, angle", () => {
    const x = deger("x = exp(1j*pi/2);");
    expect(x.re[0]).toBeCloseTo(0);
    expect(x.im![0]).toBeCloseTo(1);
    expect(dizi("x = abs(3 + 4i);")).toEqual([5]);
    expect(dizi("x = angle(-1);")[0]).toBeCloseTo(Math.PI);
    expect(dizi("x = sqrt(-4);")).toEqual([0]);
    expect(deger("x = sqrt(-4);").im).toEqual([2]);
  });
});

describe("yorumlayıcı: sinyal işleme fonksiyonları", () => {
  it("conv, filter, sum, mean, std", () => {
    expect(dizi("x = conv([1 2 3], [1 1]);")).toEqual([1, 3, 5, 3]);
    expect(dizi("x = filter(1, [1 -0.5], [1 0 0]);")).toEqual([1, 0.5, 0.25]);
    expect(dizi("x = mean([2 4 6 8]);")).toEqual([5]);
    expect(dizi("x = std([2 4 4 4 5 5 7 9]);")[0]).toBeCloseTo(2.138, 3);
    expect(dizi("x = sum([1 2; 3 4]);")).toEqual([4, 6]);
  });
  it("'all' seçeneği, ağırlık ve boyut; corrcoef, cat, vertcat, randperm", () => {
    const A = "A = [0 1 1; 2 3 2; 1 3 2; 4 2 2];";
    expect(dizi(`${A} x = mean(A, 'all');`)[0]).toBeCloseTo(1.9167, 4);
    expect(dizi(`${A} x = std(A, 1, 'all');`)[0]).toBeCloseTo(1.0375, 4);
    expect(dizi(`${A} x = var(A, 1, 2);`).map((v) => +v.toFixed(4))).toEqual([0.2222, 0.2222, 0.6667, 0.8889]);
    expect(dizi(`${A} x = median(A, 'all');`)).toEqual([2]);
    expect(dizi(`${A} x = sum(A, 'all');`)).toEqual([23]);
    expect(dizi(`${A} B = [1 5 7; 2 4 3; 4 3 5; 4 0 2]; R = corrcoef(A, B); x = R(1, 2);`)[0]).toBeCloseTo(0.0145, 4);
    expect(dizi(`${A} R = corrcoef(A); x = R(2, 3);`)[0]).toBeCloseTo(0.8704, 4);
    expect(deger("x = cat(1, ones(2), zeros(2));")).toMatchObject({ r: 4, c: 2 });
    expect(dizi("x = vertcat([1 2], [3 4]);")).toEqual([1, 3, 2, 4]);
    expect([...dizi("x = randperm(6);")].sort()).toEqual([1, 2, 3, 4, 5, 6]);
    expect(dizi("x = randperm(6, 4);")).toHaveLength(4);
    expect(calis("a = 1; bb = 2;\nwho").cikti).toContain("a  bb");
  });
  it("fft ve ifft (2'nin kuvveti ve değil)", () => {
    const X = deger("x = fft([1 0 0 0]);");
    expect(X.re).toEqual([1, 1, 1, 1]);
    const Y = deger("x = fft([1 2 3]);");
    expect(Y.re[0]).toBeCloseTo(6);
    expect(Y.re[1]).toBeCloseTo(-1.5);
    expect(Y.im![1]).toBeCloseTo(0.866, 3);
    const g = dizi("x = ifft(fft([1 2 3 4 5]));");
    g.forEach((v, k) => expect(v).toBeCloseTo(k + 1));
  });
  it("histogram ve plot şekil modeline seri ekler", () => {
    const r = calis("rng(0); x = randn(1, 1000); subplot(2,1,1); plot(x); title('Gürültü'); subplot(2,1,2); histogram(x, 20);");
    expect(r.hata).toBeNull();
    const s = r.y.cizim.sekiller[0]!;
    expect(s.eksenler).toHaveLength(2);
    expect(s.eksenler[0]!.baslik).toBe("Gürültü");
    expect(s.eksenler[1]!.seriler[0]!.kenarlar).toHaveLength(21);
    expect(s.eksenler[1]!.seriler[0]!.y.reduce((a, b) => a + b, 0)).toBe(1000);
  });
  it("hold on ile seriler birikir, hold off ile yenilenir", () => {
    const r = calis("plot(1:3); hold on; plot(3:-1:1, 'r--'); stem(1:3);");
    expect(r.y.cizim.sekiller[0]!.eksenler[0]!.seriler.map((s) => s.tur)).toEqual(["plot", "plot", "stem"]);
    const r2 = calis("plot(1:3); plot(3:-1:1);");
    expect(r2.y.cizim.sekiller[0]!.eksenler[0]!.seriler).toHaveLength(1);
  });
});

describe("yorumlayıcı: çıktı ve hatalar", () => {
  it("noktalı virgülsüz komut değeri yazar", () => {
    expect(calis("x = 5").cikti).toBe("x = 5\n");
    expect(calis("x = pi").cikti).toBe("x = 3.1416\n");
    expect(calis("x = [1 2 3]").cikti).toBe("x =\n\n     1     2     3\n\n");
    expect(calis("3 + 4").cikti).toBe("ans = 7\n");
    expect(calis("disp('merhaba')").cikti).toBe("merhaba\n");
    expect(calis("fprintf('%d-%d\\n', [1 2 3 4])").cikti).toBe("1-2\n3-4\n");
    expect(calis("fprintf('Ortalama: %.2f\\n', 2.345)").cikti).toBe("Ortalama: 2.35\n");
  });
  it("anlaşılır Türkçe hata mesajı ve satır numarası verir", () => {
    const r = calis("x = 1:5;\ny = x(0);");
    expect(r.hata?.satir).toBe(2);
    expect(r.hata?.mesaj).toMatch(/1'den başlar/);
    expect(calis("a = [1 2 3] .* [1 2];").hata?.mesaj).toMatch(/Boyutlar uyuşmuyor/);
    expect(calis("y = tanimsiz + 1;").hata?.mesaj).toMatch(/'tanimsiz' tanımlı değil/);
    expect(calis("y = Sin(1);").hata?.mesaj).toMatch(/'sin' mi demek istedin/);
  });
  it("sonsuz döngü süre sınırında durur", () => {
    const y = new Yorumlayici({ sure: 200 });
    expect(y.calistir("while true\n  x = 1;\nend").hata?.mesaj).toMatch(/sonsuz/i);
  });
  it("komut sözdizimi: hold on, grid on, close all, clc", () => {
    const r = calis("plot(1:3)\nhold on\ngrid on\nclose all\nclc");
    expect(r.hata).toBeNull();
    expect(r.y.cizim.sekiller).toHaveLength(0);
  });
});
