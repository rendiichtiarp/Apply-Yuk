-- Buat database jika belum ada
CREATE DATABASE IF NOT EXISTS applyyuk;

-- Gunakan database
USE applyyuk;

-- Buat tabel shared_cvs
CREATE TABLE IF NOT EXISTS shared_cvs (
    id VARCHAR(36) PRIMARY KEY,
    cv_data JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP + INTERVAL 30 DAY),
    INDEX idx_expires (expires_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tambahkan index untuk performa query
CREATE INDEX IF NOT EXISTS idx_created ON shared_cvs(created_at);

-- Berikan hak akses (sesuaikan username dan password)
GRANT ALL PRIVILEGES ON applyyuk.* TO 'root'@'localhost';
FLUSH PRIVILEGES; 