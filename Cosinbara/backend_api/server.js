import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";
import { db } from "./config_db/db.js";

const app = express();
app.use(express.json());
app.use(cors());

// pastikan folder upload ada
["gambar", "sertif"].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
});

// login
const user = { username: 'admin', password: 'admin123' };

app.post('/data', (req, res) => {
  const { nama, password } = req.body;
  if (nama === user.username && password === user.password) {
    res.json({ success: true, token: 'abc123' });
  } else {
    res.status(401).json({ success: false, message: 'Login gagal' });
  }
});

app.get('/dashboard', (req, res) => {
  const token = req.headers.authorization;
  if (!token || token !== 'abc123') return res.status(401).send('Unauthorized');
  res.send('Selamat datang di dashboard!');
});

// konfigurasi multer untuk kegiatan
const penyimpanan = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "gambar/"),
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  }
});
const upload = multer({ storage: penyimpanan });
app.use('/gambar', express.static(path.join(process.cwd(), 'gambar')));

// tambah kegiatan
app.post("/kirim", upload.single("gambar"), (req, res) => {
  if (!req.file) return res.status(400).json({ message:"gambar tidak ditemukan" });

  const data = {
    judul: req.body.judul,
    kegiatan: req.body.kegiatan,
    status: req.body.status,
    link: req.body.link,
    tgl: req.body.tgl,
    keterangan: req.body.Keterangan,
    gambar: req.file.filename
  };

  const sql = `INSERT INTO kegiatan (judul, kegiatan, status, link, tgl, keterangan, gambar) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [data.judul, data.kegiatan, data.status, data.link, data.tgl, data.keterangan, data.gambar], (err) => {
    if (err) return res.status(500).json({ message: "Gagal menyimpan ke DB", error: err });
    res.json({ message: "Berhasil disimpan", data });
  });
});

// data kegiatan
app.get('/kegiatan', (req, res) => {
  db.query('SELECT * FROM kegiatan', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// konfigurasi multer untuk daftar
const penyimpanan1 = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "sertif/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname))
});
const upload1 = multer({ storage: penyimpanan1 });
app.use('/sertif', express.static(path.join(process.cwd(), 'sertif')));

// tambah daftar
app.post("/daftar", upload1.fields([{ name: 'gambar', maxCount: 1 }, { name: 'gambar1', maxCount: 1 }]), (req, res) => {
  if (!req.files || !req.files['gambar'] || !req.files['gambar1'])
    return res.status(400).json({ message:"Gambar tidak ditemukan" });

  const data = {
    nama: req.body.fullName,
    NIM: req.body.NIM,
    tlp: req.body.tlp,
    ttl: req.body.ttl,
    alamat: req.body.alamat,
    jabatan: req.body.jabatan,
    alasan: req.body.alasan,
    gambar: req.files['gambar'][0].filename,
    gambar1: req.files['gambar1'][0].filename
  };

  const sql = `INSERT INTO mahasiswa (nama, NIM, tlp, ttl, alamat, jabatan, alasan, gambar, gambar1) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [data.nama, data.NIM, data.tlp, data.ttl, data.alamat, data.jabatan, data.alasan, data.gambar, data.gambar1], (err) => {
    if (err) return res.status(500).json({ message: "Gagal menyimpan ke DB", error: err });
    res.json({ message: "Berhasil disimpan", data });
  });
});

// data anggota
app.get('/anggota', (req, res) => {
  db.query('SELECT * FROM mahasiswa', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server berjalan di port", PORT));
