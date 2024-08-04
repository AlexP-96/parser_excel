import * as fs from 'fs';
import {
    descriptionProduct,
    writeCSV,
} from './other_functions/functions.js';

const resultJSON = JSON.parse(fs.readFileSync('./files_parse_excel_to_json/data.json'));

const records = resultJSON.map(item => {
    return {
        'ID': '',
        'Тип': 'simple',
        'Артикул': '',
        'Имя': item.category + ' ' + item.name,
        'Опубликован': 1,
        'Видимость в каталоге': 'visible',
        'Краткое описание': 'Цена указана за единицу листа/метра.\\n\\n\\n\\nЦена указана при оплате наличными/картой[sc name="price_metalloprokat"][/sc]',
        'Описание': descriptionProduct({
            category: item.category,
            product: item.name,
        }),
        'Наличие': 1,
        'Вес (кг)': item.weight,
        'Базовая цена': String(item.price).replace(/[^0-9]/gim, ''),
        'Категории': `Металлопрокат > ${item.category}`,
        'Метки': item.category,
        'Изображения': '',
        'Мета: _yoast_wpseo_metadesc': `Купить ${item.category.toLowerCase()} ${item.name} в Первоуральске, Красноуфимске, Новоуральске по доступным ценам.`,
    };
});

writeCSV('files_writes_csv/file1.csv', records)
    .then(() => {
        console.log('Этап 2 выполнен. CSV файл с новыми данными создан!');
    })
    .catch((error) => {
        console.log(error);
    });
