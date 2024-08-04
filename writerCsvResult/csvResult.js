import fs from 'fs';
import { writeCSV } from '../other_functions/functions.js';

const filePath = '../parser_csv/source_files_price_list/file.json';

const data = JSON.parse(fs.readFileSync(filePath));

const records = data.map((item) => {
    return {
        'ID': item['ID'],
        'Тип': item['Тип'],
        'Артикул': item['Артикул'],
        'Имя': item['Имя'],
        'Опубликован': item['Опубликован'],
        'Рекомендуемый?': item['Рекомендуемый?'],
        'Видимость в каталоге': item['Видимость в каталоге'],
        'Краткое описание': item['Краткое описание'],
        'Описание': item['Описание'],
        'Дата начала действия скидки': item['Дата начала действия скидки'],
        'Дата окончания действия скидки': item['Дата окончания действия скидки'],
        'Статус налога': item['Статус налога'],
        'Налоговый класс': item['Налоговый класс'],
        'Наличие': item['Наличие'],
        'Запасы': item['Запасы'],
        'Величина малых запасов': item['Величина малых запасов'],
        'Возможен ли предзаказ?': item['Возможен ли предзаказ?'],
        'Продано индивидуально?': item['Продано индивидуально?'],
        'Вес (кг)': item['Вес (кг)'],
        'Длина (см)': item['Длина (см)'],
        'Ширина (см)': item['Ширина (см)'],
        'Высота (см)': item['Высота (см)'],
        'Разрешить отзывы от клиентов?': item['Разрешить отзывы от клиентов?'],
        'Примечание к покупке': item['Примечание к покупке'],
        'Акционная цена': item['Акционная цена'],
        'Базовая цена': item['Базовая цена'],
        'Категории': item['Категории'],
        'Метки': item['Метки'],
        'Класс доставки': item['Класс доставки'],
        'Изображения': item['Изображения'],
        'Лимит загрузок': item['Лимит загрузок'],
        'Дней срока загрузки': item['Дней срока загрузки'],
        'Родительский': item['Родительский'],
        'Сгруппированные товары': item['Сгруппированные товары'],
        'Апсэлы': item['Апсэлы'],
        'Кросселы': item['Кросселы'],
        'Внешний URL': item['Внешний URL'],
        'Текст кнопки': item['Текст кнопки'],
        'Позиция': item['Позиция'],
        'Мета: _input_qty': item['Мета: _input_qty'],
        'Мета: _step_qty': item['Мета: _step_qty'],
        'Мета: rs_page_bg_color': item['Мета: rs_page_bg_color'],
        'Мета: _yoast_wpseo_primary_product_cat': item['Мета: _yoast_wpseo_primary_product_cat'],
        'Мета: _yoast_wpseo_metadesc': item['Мета: _yoast_wpseo_metadesc'],
        'Мета: _yoast_wpseo_content_score': item['Мета: _yoast_wpseo_content_score'],
        'Мета: _yoast_wpseo_estimated-reading-time-minutes': item['Мета: _yoast_wpseo_estimated-reading-time-minutes'],
        'Мета: _yoast_wpseo_wordproof_timestamp': item['Мета: _yoast_wpseo_wordproof_timestamp'],
    };
});

writeCSV('./result.csv', records)
    .then(() => {
        console.log('Файл CSV создан для заагрузки на сайт!');
    })
    .catch((err) => {
        console.log(err);
    });
