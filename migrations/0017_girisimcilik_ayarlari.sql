-- Girişimcilik (Faz 3): pratik ayarları. Eski sitedeki değerler veri taşımasıyla
-- (npm run tasi) üzerine yazılır.
INSERT OR IGNORE INTO settings (key, value) VALUES
  ('girisimcilik:current_week', '8'), ('girisimcilik:show_original', '1'), ('girisimcilik:announcement', '');
