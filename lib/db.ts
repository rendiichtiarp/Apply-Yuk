import mysql from 'mysql2/promise'

// Buat pool koneksi
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'applyyuk',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

export async function executeQuery({ query, values }: { query: string; values?: any[] }) {
  try {
    const [results] = await pool.execute(query, values)
    return results
  } catch (error) {
    console.error('Database Error:', error)
    throw error
  }
}

// SQL untuk membuat tabel
export const CREATE_SHARED_CV_TABLE = `
CREATE TABLE IF NOT EXISTS shared_cvs (
  id VARCHAR(36) PRIMARY KEY,
  cv_data JSON NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP + INTERVAL 30 DAY)
)
`

// Inisialisasi tabel saat startup
export async function initDatabase() {
  try {
    await executeQuery({ query: CREATE_SHARED_CV_TABLE })
    console.log('Database initialized successfully')
  } catch (error) {
    console.error('Failed to initialize database:', error)
  }
} 