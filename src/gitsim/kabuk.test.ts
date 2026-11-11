// Sanal kabuğun ayrıştırması ve ortamın değişmezliği (geri alma için)
import { describe, expect, it } from "vitest";
import { belirtecle } from "./kabuk";
import { calistir, kur, yeniOrtam } from "./index";

const GLOBAL = { "user.name": "Ayse", "user.email": "ayse@example.com", "init.defaultbranch": "main" };

describe("kabuk", () => {
  it("tırnakları, &&, ; ve yönlendirmeyi ayırır", () => {
    expect(belirtecle(`git commit -m "İlk commit" && echo 'a b' >> f.txt; ls`).map((b) => b.deger)).toEqual(["git", "commit", "-m", "İlk commit", "&&", "echo", "a b", ">>", "f.txt", ";", "ls"]);
  });

  it("calistir ortamı değiştirmez, yeni ortam döndürür", () => {
    const o = yeniOrtam({ globalConfig: GLOBAL });
    const r = calistir(o, "git init");
    expect(o.depo).toBeNull();
    expect(r.ortam.depo).not.toBeNull();
    expect(r.sonuc.cikti).toBe("Initialized empty Git repository in /proje/.git/");
  });

  it("&& başarısız komuttan sonra durur, ; devam eder", () => {
    let o = kur(yeniOrtam({ globalConfig: GLOBAL }), ["git init"]);
    o = calistir(o, "git commit -m x && echo olmadı > a.txt").ortam;
    expect(o.dosyalar["a.txt"]).toBeUndefined();
    o = calistir(o, "git commit -m x ; echo oldu > a.txt").ortam;
    expect(o.dosyalar["a.txt"]).toBe("oldu\n");
  });

  it("cd, mkdir, pwd ve göreli yollar", () => {
    const o = kur(yeniOrtam({ globalConfig: GLOBAL }), ["git init", "mkdir src", "cd src", "echo x > app.js", "git add app.js"]);
    expect(o.depo!.index["src/app.js"]).toBeTruthy();
    expect(calistir(o, "pwd").sonuc.cikti).toBe("/proje/src");
    expect(calistir(o, "git status -s").sonuc.cikti).toBe("A  app.js");
  });

  it("bilinmeyen komutta yakın öneriyi verir", () => {
    const o = kur(yeniOrtam({ globalConfig: GLOBAL }), ["git init"]);
    expect(calistir(o, "git stauts").sonuc.cikti).toContain("\tstatus");
    expect(calistir(o, "gti status").sonuc.kod).toBe(127);
  });

  it("editör komutu arayüze dosyayı açtırır", () => {
    const r = calistir(yeniOrtam(), "nano notlar.md");
    expect(r.sonuc.editor).toBe("notlar.md");
    expect(r.ortam.dosyalar["notlar.md"]).toBe("");
  });

  it("depo dışında git komutu hata verir", () => {
    expect(calistir(yeniOrtam(), "git status").sonuc.cikti).toBe("fatal: not a git repository (or any of the parent directories): .git");
  });
});
