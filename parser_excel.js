import {
    createDynamicArrayObjects,
    createWorkbook,
    writerJsonFile,
} from './other_functions/functions.js';
import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';

config();

// const directoryPath = path.join(__dirname, process.env.PATH_UPLOAD_EXCEL);
// console.log(process.env.PATH_UPLOAD_EXCEL);
const firstFileUploads = async () => {
    const object = {};
    await fs.readdir(process.env.PATH_UPLOAD_EXCEL, (err, files) => {
        if (err) {
            object.err = true;
            object.info = 'Невозможно просканировать каталог: ' + err;
        }

        if (files.length === 0) {
            object.err = true;
            object.info = 'В каталоге не найдено ни одного файла';
        }

        let latestFile;
        let latestMTime = 0;

        files.forEach(file => {
            const filePath = path.join(process.env.PATH_UPLOAD_EXCEL, file);
            const stats = fs.statSync(filePath);

            if (stats.isFile()) {
                // Проверка даты последнего изменения файла
                if (stats.mtimeMs > latestMTime) {
                    latestMTime = stats.mtimeMs;
                    latestFile = file;
                }
            }
        });

        if (latestFile) {
            console.log(`Самый последний созданный файл: ${latestFile}`);
            object.file = latestFile;
            object.info = `Самый последний созданный файл: ${latestFile}`;
            object.err = false;
        } else {
            console.log('В каталоге не найдено ни одного файла');
            object.info = 'В каталоге не найдено ни одного файла';
            object.err = true;
        }
    });
    return object;
};

firstFileUploads().then(d => console.log(d));

export const parserExcel = async (pathFile) => {
    try {
        if (pathFile.err) {
            console.log('Ошибка чтения файла!');
            return;
        }
        const path = './uploads' + pathFile.file;

        const testForFrontend = {
            'имя': 0,
            'вес': 1,
            'цена': 3,
        };

        await writerJsonFile(
            './files_parse_excel_to_json/data22.json',
            createDynamicArrayObjects(createWorkbook({
                path,
                list: 'Лист1',
            }), testForFrontend, 'категория'),
        );

        console.log('Этап 1 Выполнен. Данные успешной извлечены из файла Excel!');

    } catch (e) {
        console.log(e);
    }
};



