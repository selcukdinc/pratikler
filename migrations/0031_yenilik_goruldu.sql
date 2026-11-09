-- Yenilikler sayfasında en son görülen kayıt (PR numarası). Hesapta saklanır; bütün
-- pratiklerde ve cihazlarda ortaktır (bir pratikte okunan yenilik ötekinde "Yeni" görünmez).
ALTER TABLE users ADD COLUMN yenilik_goruldu INTEGER;
