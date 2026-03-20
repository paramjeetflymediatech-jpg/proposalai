import pool from "../app/lib/db.js"; // ← must have .js extension

async function migrate() {
  const connection = await pool.getConnection();

  try {
    console.log("🚀 Running migrations...");
    await connection.beginTransaction();

    await connection.execute(`
      CREATE TABLE IF NOT EXISTS demo_requests (
        id         INT AUTO_INCREMENT PRIMARY KEY,
        name       VARCHAR(100)  NOT NULL,
        email      VARCHAR(150)  NOT NULL,
        company    VARCHAR(150)  NOT NULL,
        role       VARCHAR(100)  DEFAULT NULL,
        message    TEXT          DEFAULT NULL,
        created_at DATETIME      NOT NULL,
        INDEX idx_email      (email),
        INDEX idx_created_at (created_at)
      )
    `);
    console.log("✅ Table 'demo_requests' ready.");

    await connection.commit();
    console.log("✅ All migrations completed successfully.");

  } catch (error) {
    await connection.rollback();
    console.error("❌ Migration failed:", error.message);
    process.exit(1);
  } finally {
    connection.release();
    process.exit(0);
  }
}

migrate();