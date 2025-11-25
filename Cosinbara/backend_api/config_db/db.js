
import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_kegiatan",
  
});


db.connect(err => {
    if (err) {
        console.error("Koneksi MySQL gagal:", err);
        return;
    }
    console.log("MySQL Connected!");
});


