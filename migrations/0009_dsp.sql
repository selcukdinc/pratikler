-- DSP Pratik (Faz 3): MatStudio'da hesaba kaydedilen pencere düzenleri ve ayarlar.
-- Düzenler kişiye aittir (bütün pratiklerde aynı MatStudio).
ALTER TABLE users ADD COLUMN lab_duzenleri TEXT;

INSERT OR IGNORE INTO settings (key, value) VALUES ('dsp:current_week', '9');
INSERT OR IGNORE INTO settings (key, value) VALUES ('dsp:show_original', '1');
INSERT OR IGNORE INTO settings (key, value) VALUES ('dsp:announcement', '');
