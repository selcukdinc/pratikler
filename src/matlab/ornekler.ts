// MatStudio'daki hazır örnekler. Hepsi src/matlab/ornekler.test.ts'te
// hatasız çalıştırılır.

export interface Ornek {
  ad: string;
  baslik: string;
  aciklama: string;
  kod: string;
}

export const ORNEKLER: Ornek[] = [
  {
    ad: "temel.m",
    baslik: "Temel yapılar",
    aciklama: "Vektör, matris, indeksleme, döngü ve koşul",
    kod: `% Temel yapılar: satır sonunda ; yoksa sonuç komut penceresine yazılır
x = [4 8 15 16 23 42]        % satır vektörü
n = length(x)
ilk = x(1)                    % indisler 1'den başlar
son = x(end)
ciftler = x(mod(x, 2) == 0)   % mantıksal indeksleme

A = [1 2; 3 4]                % 2x2 matris
At = A'                       % devrik
B = A .* A                    % eleman bazında çarpım
C = A * A                     % matris çarpımı

toplam = 0;
for k = 1:n
    if x(k) > 10
        toplam = toplam + x(k);
    end
end
fprintf('10''dan büyüklerin toplamı: %d\\n', toplam)
`,
  },
  {
    ad: "sinus.m",
    baslik: "Sinüs çizimi",
    aciklama: "plot, eksen adları, ızgara ve iki eğri",
    kod: `% 5 Hz'lik sinüs ve kosinüs, 1 kHz örnekleme
fs = 1000;              % örnekleme frekansı (Hz)
t = 0:1/fs:0.5;         % 0,5 saniyelik zaman ekseni
x = sin(2*pi*5*t);
y = 0.5*cos(2*pi*5*t);

plot(t, x)
hold on
plot(t, y, 'r--')
hold off
grid on
xlabel('t (s)')
ylabel('Genlik')
title('5 Hz sinüs ve kosinüs')
legend('sin', '0.5 cos')
`,
  },
  {
    ad: "histogram.m",
    baslik: "Gürültü ve histogram",
    aciklama: "randn, ortalama, standart sapma, histogram",
    kod: `% Gaussian gürültü: ortalama 2, standart sapma 0.5
rng(1)                   % her çalıştırmada aynı sayılar
N = 2000;
x = 2 + 0.5*randn(1, N);

mu = mean(x)
sigma = std(x)
etkin = rms(x)

subplot(2, 1, 1)
plot(x(1:200))
title('İlk 200 örnek')
grid on

subplot(2, 1, 2)
histogram(x, 30, 'Normalization', 'pdf')
title('Histogram (olasılık yoğunluğu)')
xlabel('Değer')
`,
  },
  {
    ad: "ornekleme.m",
    baslik: "Örnekleme ve örtüşme",
    aciklama: "Sürekli sinyal ve örnekleri; düşük fs'de örtüşme",
    kod: `% 9 Hz'lik sinüsü 10 Hz ile örneklersek 1 Hz'lik gibi görünür
f = 9;
t = 0:0.001:1;                 % "sürekli" zaman
x = sin(2*pi*f*t);

fs = 10;                       % yetersiz örnekleme (fs < 2f)
n = 0:fs;
xn = sin(2*pi*f*n/fs);

plot(t, x)
hold on
stem(n/fs, xn, 'r', 'filled')
plot(t, -sin(2*pi*1*t), 'k--')   % örtüşen 1 Hz'lik görüntü
hold off
title('fs = 10 Hz ile örneklenen 9 Hz sinüs')
xlabel('t (s)')
legend('9 Hz', 'örnekler', '1 Hz görüntü')
`,
  },
  {
    ad: "konvolusyon.m",
    baslik: "Konvolüsyon",
    aciklama: "İki dizinin konvolüsyonu ve stem çizimi",
    kod: `% x[n] ile h[n]'nin konvolüsyonu
x = [1 2 3 1];
h = [1 1 1];
y = conv(x, h)

% Uzunluk: length(x) + length(h) - 1
fprintf('Çıkış uzunluğu: %d\\n', length(y))

subplot(3, 1, 1), stem(0:length(x)-1, x, 'filled'), title('x[n]')
subplot(3, 1, 2), stem(0:length(h)-1, h, 'filled'), title('h[n]')
subplot(3, 1, 3), stem(0:length(y)-1, y, 'filled'), title('y[n] = x[n] * h[n]')
`,
  },
  {
    ad: "hareketli_ortalama.m",
    baslik: "Hareketli ortalama",
    aciklama: "Gürültülü sinyali filter ile yumuşatma",
    kod: `% M noktalı hareketli ortalama filtresi
rng(3)
n = 0:199;
temiz = sin(2*pi*0.01*n);
x = temiz + 0.4*randn(size(n));

M = 9;
b = ones(1, M) / M;      % h[n] = 1/M, n = 0..M-1
y = filter(b, 1, x);

plot(n, x, 'Color', [0.7 0.7 0.7])
hold on
plot(n, y, 'LineWidth', 2)
plot(n, temiz, 'k--')
hold off
legend('gürültülü', 'filtrelenmiş', 'temiz')
title(sprintf('%d noktalı hareketli ortalama', M))
`,
  },
  {
    ad: "kare_dalga.m",
    baslik: "Fourier serisiyle kare dalga",
    aciklama: "Tek harmoniklerin toplamı kare dalgaya yaklaşır",
    kod: `% Kare dalga: (4/pi) * sum sin(k w t) / k, k = 1, 3, 5, ...
t = linspace(0, 2, 1000);
f0 = 1;
x = zeros(size(t));
for k = 1:2:15
    x = x + (4/pi) * sin(2*pi*k*f0*t) / k;
end
plot(t, x, 'LineWidth', 1.5)
hold on
plot(t, square(2*pi*f0*t), 'k--')
hold off
grid on
title('İlk 8 tek harmonik')
xlabel('t (s)')
`,
  },
  {
    ad: "spektrum.m",
    baslik: "FFT ile spektrum",
    aciklama: "İki sinüsün toplamının genlik spektrumu",
    kod: `% 50 Hz ve 120 Hz'lik iki sinüsün spektrumu
fs = 1000;
N = 1000;
t = (0:N-1) / fs;
x = 0.7*sin(2*pi*50*t) + sin(2*pi*120*t);

X = fft(x);
P = abs(X) / N;           % iki taraflı genlik
P1 = P(1:N/2+1);
P1(2:end-1) = 2*P1(2:end-1);  % tek taraflı
f = fs*(0:N/2) / N;

subplot(2, 1, 1)
plot(t(1:200), x(1:200)), title('x(t)'), xlabel('t (s)')
subplot(2, 1, 2)
plot(f, P1), title('Tek taraflı genlik spektrumu'), xlabel('f (Hz)')
grid on
`,
  },
  {
    ad: "frekans_yaniti.m",
    baslik: "Frekans yanıtı",
    aciklama: "freqz ile bir filtrenin genlik ve faz yanıtı",
    kod: `% 5 noktalı hareketli ortalamanın frekans yanıtı
b = ones(1, 5) / 5;
[H, w] = freqz(b, 1, 512);

subplot(2, 1, 1)
plot(w/pi, 20*log10(abs(H)))
ylim([-50 5]), grid on
title('Genlik (dB)'), xlabel('\\omega / \\pi')
subplot(2, 1, 2)
plot(w/pi, angle(H))
grid on
title('Faz (radyan)'), xlabel('\\omega / \\pi')
`,
  },
  {
    ad: "fonksiyon.m",
    baslik: "Kendi fonksiyonun",
    aciklama: "Betiğin sonunda yerel fonksiyon tanımlama",
    kod: `% Yerel fonksiyonlar betiğin sonuna yazılır
x = [3 1 4 1 5 9 2 6];
[mu, s] = istatistik(x)
e = enerji(x)

function [m, s] = istatistik(v)
    m = sum(v) / length(v);
    s = sqrt(sum((v - m).^2) / (length(v) - 1));
end

function E = enerji(v)
    E = sum(abs(v).^2);
end
`,
  },
];
