import mysql from "mysql2";

// Gunakan pool agar koneksi lebih stabil
export const db = mysql.createPool({
  host: "localhost",
  user: "zsmihzra_hima",
  password: "himacosinbara12#",
  database: "zsmihzra_himacosinbara_db",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10, // maksimal koneksi bersamaan
  queueLimit: 0
});

// Test koneksi sekali saja
db.getConnection((err, connection) => {
  if (err) {
    console.error("Koneksi MySQL gagal:", err);
    return;
  }
  console.log("MySQL Connected!");
  connection.release(); // jangan lupa release koneksi
});
