-- Kimya pratiğinin ayarları (Faz 3 taşıması). Değerler taşıma aracıyla eski
-- sitedeki ayarlardan güncellenir (npm run tasi); burada yalnızca varsayılanlar.
INSERT OR IGNORE INTO settings (key, value) VALUES
  ('kimya:current_week', '9'), ('kimya:show_original', '1'), ('kimya:announcement', '');
