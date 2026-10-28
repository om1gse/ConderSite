# Elit Klima – Нашият дом

Сайт компании «Нашият дом – ЕлитКлима ЕООД»: продажа, монтаж и обслуживание кондиционеров по Южному Черноморью.

Чистый HTML/CSS/JS — без сборки. Открыть `index.html` в браузере или включить GitHub Pages (Settings → Pages → Branch: `main`, папка `/root`).

## Структура

```
index.html            – разметка всех секций
assets/css/style.css  – стили (цвета логотипа в :root)
assets/js/data.js     – ДАННЫЕ: услуги, товары, населённые пункты
assets/js/main.js     – логика (каталог, фильтры, калькулятор, формы, меню)
assets/img/           – логотип, флаер; сюда же кладите фото товаров
```

## Как добавить / изменить товар

Откройте `assets/js/data.js` → массив `products`. Каждый товар — объект:

```js
{
  id: "daikin-ftxm25",                 // уникальный id
  brand: "Daikin",
  name: "Perfera FTXM25R",
  type: "wall",                        // wall | multi | floor | cassette
  btu: 9000,
  area: "до 25 м²",
  energy: "A+++",
  wifi: true,
  price: 899,                          // null → «Цена при запитване»
  oldPrice: 999,                       // null, если нет акции
  image: "assets/img/products/daikin-ftxm25.jpg",  // "" → иконка-заглушка
  badges: ["Промо", "Безплатен монтаж"],
  features: ["Тих режим 19 dB", "Wi-Fi управление"]
}
```

Цвет бейджа выбирается автоматически: «Промо» — красный, «…монтаж» — зелёный, «Ново» — синий, остальные — золотые.

Услуги (`services`) и населённые пункты (`towns`) редактируются там же.

## Контакты на сайте

- Телефон / Viber / WhatsApp: +359 886 086 029
- E-mail: ndelitklima@gmail.com
- TikTok: @elit_klima

Форма запроса не требует сервера: она открывает WhatsApp или почтовый клиент с готовым сообщением.
