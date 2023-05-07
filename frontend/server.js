import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// const express = require('express');
// const path = require('path');

const app = express();

// __dirnameは、現在のディレクトリを表す
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 静的ファイルをホストする
app.use('/src', express.static(path.join(__dirname, 'src')));

// HTMLファイルを返す
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5500, () => {
  console.log('Server is running on port 5500');
});
