// const express = require('express')
// const cors = require('cors')
import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { db } from "./config_db/db.js";

const app = express()
app.use(express.json())

// ✅ Izinkan akses dari semua origin (termasuk localhost:5173)
app.use(cors())


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



// kegiatan add
// konfig penyimpanan kegiatan
const penyimpanan = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "gambar/")
  },
  filename: (req, file, cb) => {
    const unique = Date.now()+"-" + Math.round(Math.random()* 1e9)
    cb(null, unique + path.extname(file.originalname))
  }
})

const upload = multer({ storage:penyimpanan })

// membuat folder uplod bisa diakses

app.use('/gambar', express.static(path.join(process.cwd(), 'gambar')))

app.post("/kirim", upload.single("gambar"), (req, res) => {
  if (!req.file){
    return res.status(400).json({ massage:"gambar tidak  ditemukan"})
  }

  const data = {
    judul: req.body.judul,
    kegiatan: req.body.kegiatan,
    status: req.body.status,
    link: req.body.link,
    Tgl: req.body.Tgl,
    Keterangan: req.body.Keterangan,
    gambar: req.file.filename // simpan nama file ke DB
  };

  const sql = `
    INSERT INTO kegiatan (judul, kegiatan, status, link, tgl, keterangan, gambar)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      data.judul,
      data.kegiatan,
      data.status,
      data.link,
      data.Tgl,
      data.Keterangan,
      data.gambar
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Gagal menyimpan ke DB" });
      }

      res.json({
        message: "Berhasil disimpan",
        data: data
      });
    }
  );

  console.log("Data diterima:", data);
})

// kirim data ke kegiatan
app.get('/kegiatan', (req, res) => {
  db.query('SELECT * FROM kegiatan', (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// daftar
// konfig penyimpanan daftar
const penyimpanan1 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "sertif/");  // semua file akan ke folder sertif/
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  }
});

const upload1 = multer({ storage: penyimpanan1 });

// folder bisa diakses dari url
app.use('/sertif', express.static(path.join(process.cwd(), 'sertif')));

// upload.fields() untuk beberapa file
app.post("/daftar", upload1.fields([
  { name: 'gambar', maxCount: 1 },
  { name: 'gambar1', maxCount: 1 }
]), (req, res) => {

  if (!req.files || !req.files['gambar'] || !req.files['gambar1']){
    return res.status(400).json({ message:"Gambar tidak ditemukan" });
  }

  const data = {
    nama: req.body.fullName,
    NIM: req.body.NIM,
    tlp: req.body.tlp,
    ttl: req.body.ttl,
    alamat: req.body.alamat,
    jabatan: req.body.jabatan,
    alasan: req.body.alamat,

    gambar: req.files['gambar'][0].filename,
    gambar1: req.files['gambar1'][0].filename
  };

  const sql = `
    INSERT INTO mahasiswa 
      (nama, NIM, tlp, ttl, alamat, jabatan, alasan, gambar, gambar1)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      data.nama,
      data.NIM,
      data.tlp,
      data.ttl,
      data.alamat,
      data.jabatan,
      data.alasan,
      data.gambar,
      data.gambar1
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Gagal menyimpan ke DB" });
      }

      res.json({
        message: "Berhasil disimpan",
        data: data
      });
    }
  );

  console.log("Data diterima:", data);
});

// kirim anggota baru
app.get('/anggota', (req, res) => {
  db.query('SELECT * FROM mahasiswa', (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000')
})
