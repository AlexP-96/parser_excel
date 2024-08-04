import csv from 'csv-parser';
import fs from 'fs';

export function csvParser(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => {
                results.push(data);
            })
            .on('end', () => {
                resolve(results);
            })
            .on('error', (err) => {
                reject(err);
            });
    });
}

export async function createFileCsvForSite(pathLastCsv, pathFirstCsv) {
    try {
        const arrLastSite = await csvParser(pathLastCsv);

        function trimKeysInArray(array) {
            return array.map(obj => {
                const newObject = {};
                for (let key in obj) {
                    newObject[key.trim()] = obj[key];
                }
                return newObject;
            });
        }

        const arrayOne = trimKeysInArray(arrLastSite);
        const arrayTwo = await csvParser(pathFirstCsv);

        fs.writeFile('./source_files_price_list/file.json', JSON.stringify(syncArrays(arrayOne, arrayTwo)), e => {
            console.log(e);
        });

    } catch (err) {
        console.error('Error parsing CSV file:', err);
    }
}

createFileCsvForSite(
    './source_files_price_list/wc-product-export-14-7-2024-1720948835831.csv',
    '../files_writes_csv/file.csv',
)
    .then(res => {
        console.log(res);
    });

function syncArrays(arr1, arr2) {

    const arr1Map = new Map(arr1.map(item => [
        item['Имя'],
        item,
    ]));
    const result = [];

    arr2.forEach(item2 => {
        const item1 = arr1Map.get(item2['Имя']);
        if (item1) {
            // Если name совпадает, добавляем элемент с правильным id
            result.push({
                ...item2,
                'ID': item1['ID'],
                'Изображения': item1['Изображения'],

            });
        } else {
            // Если name не найден, добавляем элемент с пустым id
            result.push({ 'ID': undefined, ...item2 });
        }
    });

    return result;

}


