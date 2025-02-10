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

const firstFileUploads = () => {
    return new Promise((resolve, reject) => {
        fs.readdir(process.env.SOURCE_PATH_EXCEL, (err, files) => {
            const object = {};

            if (err) {
                object.err = true;
                object.info = `Невозможно просканировать каталог: ${err}`;
                reject(object);
            }

            if (files.length === 0) {
                object.err = true;
                object.info = 'В каталоге не найдено ни одного файла';
                reject(object);
            }

            let latestFile;
            let latestMTime = 0;

            files.forEach(file => {
                const filePath = path.join(process.env.SOURCE_PATH_EXCEL, file);
                const stats = fs.statSync(filePath);

                if (stats.isFile()) {
                    if (stats.mtimeMs > latestMTime) {
                        latestMTime = stats.mtimeMs;
                        latestFile = file;
                    }
                }
            });

            if (latestFile) {
                object.file = latestFile;
                object.info = `Самый последний созданный файл: ${latestFile}`;
                object.err = false;
                resolve(object);
            } else {
                object.info = 'В каталоге не найдено ни одного файла';
                object.err = true;
                reject(object);
            }
        });
    });
};

export const parserExcel = async (pathFile) => {
    try {
        if (pathFile.err) {
            console.log('Ошибка чтения файла!');
            return;
        }

        const path = `${process.env.SOURCE_PATH_EXCEL}/${pathFile.file}`;

        const testForFrontend = {
            'имя': 0,
            'вес': 1,
            'цена': 3,
        };

        await writerJsonFile(
            `./files_parse_excel_to_json/${new Date}.json`,
            createDynamicArrayObjects(
                createWorkbook({
                    path,
                    list: 'Лист1',
                }),
                testForFrontend,
                'категория',
            ),
        );

        console.log('Этап 1 Выполнен. Данные успешной извлечены из файла Excel!');
    } catch (e) {
        console.log(e);
    }
};

firstFileUploads()
    .then(async (data) => {
        await parserExcel({
            file: data.file,
            err: data.err,
        });
        console.log('data', data);
    })
    .catch(e => {
        console.log('e', e);
    });


