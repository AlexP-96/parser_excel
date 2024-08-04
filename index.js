import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Папка для хранения файлов
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname); // Имя файла
    },
});

const upload = multer({ storage: storage });

if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

app.post('/api/download_excel', upload.single('file'), (req, res, next) => {

    res.send('Файл был загружен успешно!');
});

// POST запрос для добавления нового item
app.post('/items', (req, res) => {
    const newItem = req.body;

    if (newItem && newItem.name) {
        items.push(newItem);
        res.status(201).json(newItem);
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});