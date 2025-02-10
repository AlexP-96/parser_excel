import { createObjectCsvWriter } from 'csv-writer';
import fs from 'fs';
import XLSX from 'xlsx';

export const descriptionProduct = (words) => {
    return `Приобретайте качественный ${words.category} ${words.product} в Красноуфимске, Первоуральске и Новоуральске у надежного поставщика металлопроката! \\n\\n В поисках надежного и долговечного решения для ваших производственных и конструкционных нужд? "ООО СтальГрад" предлагает высококачественный лист ${words.category} ${words.product}, который соответствует всем стандартам качества и промышленным требованиям. Будь вы представителем организации или частным лицом, наш широкий ассортимент металлопроката удовлетворит любые потребности проекта.\\n\\n ${words.category} ${words.product}: идеальный выбор для различных применений \\n\\n ${words.category} ${words.product} благодаря своей коррозионной стойкости и прочности идеально подходит для использования в самых разных сферах - от строительства до изготовления бытовой техники и автомобильных компонентов. Мы гарантируем, что получаете продукт высшего качества по конкурентоспособным ценам. \\n\\n ${words.category} ${words.product} в Красноуфимске, Первоуральске, Новоуральске? \\n\\n Наши металлобазы в указанных городах обеспечивают удобный доступ к покупке необходимых вам материалов. Ознакомьтесь с нашим каталогом онлайн или посетите наше представительство для консультации и оформления заказа. Мы предлагаем различные варианты ${words.category.toLowerCase()} для удовлетворения любых потребностей вашего проекта, а также гибкие условия доставки.`;
};

export const writeCSV = (pathToWriteCsv, data) => {
    return createObjectCsvWriter({
        path: pathToWriteCsv,
        header: [
            {
                id: 'ID',
                title: 'ID',
            },
            {
                id: 'Тип',
                title: 'Тип',
            },
            {
                id: 'Артикул',
                title: 'Артикул',
            },
            {
                id: 'Имя',
                title: 'Имя',
            },
            {
                id: 'Опубликован',
                title: 'Опубликован',
            },
            {
                id: 'Рекомендуемый?',
                title: 'Рекомендуемый?',
            },
            {
                id: 'Видимость в каталоге',
                title: 'Видимость в каталоге',
            },
            {
                id: 'Краткое описание',
                title: 'Краткое описание',
            },
            {
                id: 'Описание',
                title: 'Описание',
            },
            {
                id: 'Дата начала действия скидки',
                title: 'Дата начала действия скидки',
            },
            {
                id: 'Дата окончания действия скидки',
                title: 'Дата окончания действия скидки',
            },
            {
                id: 'Статус налога',
                title: 'Статус налога',
            },
            {
                id: 'Налоговый класс',
                title: 'Налоговый класс',
            },
            {
                id: 'Наличие',
                title: 'Наличие',
            },
            {
                id: 'Запасы',
                title: 'Запасы',
            },
            {
                id: 'Величина малых запасов',
                title: 'Величина малых запасов',
            },
            {
                id: 'Возможен ли предзаказ?',
                title: 'Возможен ли предзаказ?',
            },
            {
                id: 'Продано индивидуально?',
                title: 'Продано индивидуально?',
            },
            {
                id: 'Вес (кг)',
                title: 'Вес (кг)',
            },
            {
                id: 'Длина (см)',
                title: 'Длина (см)',
            },
            {
                id: 'Ширина (см)',
                title: 'Ширина (см)',
            },
            {
                id: 'Высота (см)',
                title: 'Высота (см)',
            },
            {
                id: 'Разрешить отзывы от клиентов?',
                title: 'Разрешить отзывы от клиентов?',
            },
            {
                id: 'Примечание к покупке',
                title: 'Примечание к покупке',
            },
            {
                id: 'Акционная цена',
                title: 'Акционная цена',
            },
            {
                id: 'Базовая цена',
                title: 'Базовая цена',
            },
            {
                id: 'Категории',
                title: 'Категории',
            },
            {
                id: 'Метки',
                title: 'Метки',
            },
            {
                id: 'Класс доставки',
                title: 'Класс доставки',
            },
            {
                id: 'Изображения',
                title: 'Изображения',
            },
            {
                id: 'Лимит загрузок',
                title: 'Лимит загрузок',
            },
            {
                id: 'Дней срока загрузки',
                title: 'Дней срока загрузки',
            },
            {
                id: 'Родительский',
                title: 'Родительский',
            },
            {
                id: 'Сгруппированные товары',
                title: 'Сгруппированные товары',
            },
            {
                id: 'Апсэлы',
                title: 'Апсэлы',
            },
            {
                id: 'Кросселы',
                title: 'Кросселы',
            },
            {
                id: 'Внешний URL',
                title: 'Внешний URL',
            },
            {
                id: 'Текст кнопки',
                title: 'Текст кнопки',
            },
            {
                id: 'Позиция',
                title: 'Позиция',
            },
            {
                id: 'Мета: _input_qty',
                title: 'Мета: _input_qty',
            },
            {
                id: 'Мета: _step_qty',
                title: 'Мета: _step_qty',
            },
            {
                id: 'Мета: rs_page_bg_color',
                title: 'Мета: rs_page_bg_color',
            },
            {
                id: 'Мета: _yoast_wpseo_primary_product_cat',
                title: 'Мета: _yoast_wpseo_primary_product_cat',
            },
            {
                id: 'Мета: _yoast_wpseo_metadesc',
                title: 'Мета: _yoast_wpseo_metadesc',
            },
            {
                id: 'Мета: _yoast_wpseo_content_score',
                title: 'Мета: _yoast_wpseo_content_score',
            },
            {
                id: 'Мета: _yoast_wpseo_estimated-reading-time-minutes',
                title: 'Мета: _yoast_wpseo_estimated-reading-time-minutes',
            },
            {
                id: 'Мета: _yoast_wpseo_wordproof_timestamp',
                title: 'Мета: _yoast_wpseo_wordproof_timestamp',
            },
        ],
    }).writeRecords(data);
};

export const createDynamicArrayObjects = (sheet, keysMap, categoryName) => {
    let category = '';
    return sheet.reduce((acc, curr) => {
        if (curr.length === 1) {
            category = curr[0]?.w.trim();
            return acc;
        }

        const obj = Object.entries(keysMap).reduce((obj, [key, index]) => {
            obj[key] = curr[index]?.w.trim();
            return obj;
        }, {});

        obj[categoryName] = category;

        return [
            ...acc,
            obj,
        ];
    }, []);
};

export const writerJsonFile = (path, func) => {
    fs.writeFile(
        path,
        JSON.stringify(func),
        e => {
            console.log(e);
        },
    );
};

export const createWorkbook = (obj) => {
    const workbook = XLSX.readFile(obj.path, {
        dense: true,
    });

    return workbook.Sheets[obj.list];
};