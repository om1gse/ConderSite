/* =====================================================================
   ДАННИ НА САЙТА – редактирайте само този файл, за да промените
   услугите, климатиците и населените места.

   ПРОДУКТИ – полета:
     id        – уникален идентификатор (латиница, без интервали)
     brand     – марка, напр. "Daikin"
     name      – модел / заглавие
     type      – "wall" (стенен), "floor" (подов), "multi" (мултисплит),
                 "cassette" (касетъчен), "duct" (канален),
                 "column" (колонен), "mobile" (мобилен)
     btu       – мощност в BTU: 9000, 12000, 18000, 24000 ...
     area      – препоръчана площ, напр. "до 25 м²"
     energy    – енергиен клас, напр. "A++"
     wifi      – true / false
     price     – цена в EUR (число) или null → "Цена при запитване"
     oldPrice  – стара цена (за промоция) или null
     image     – път до снимка, напр. "assets/img/products/daikin.jpg"
                 или "" → показва се икона
     badges    – масив етикети: ["Промо", "Безплатен монтаж", "Wi-Fi", "Ново"]
     description – описание (показва се в детайлите)
     features  – кратки предимства (показват се в детайлите)
   ===================================================================== */

window.SITE_DATA = {
  services: [
    {
      icon: "install",
      title: "Монтаж на климатици",
      text: "Професионален монтаж на стенни, подови, касетъчни и мултисплит системи с гаранция.",
      price: "от 120 €"
    },
    {
      icon: "clean",
      title: "Профилактика и почистване",
      text: "Дълбоко почистване, дезинфекция на вътрешно и външно тяло, проверка на налягането.",
      price: "от 40 €"
    },
    {
      icon: "repair",
      title: "Диагностика и ремонт",
      text: "Откриваме и отстраняваме повреди бързо. Работим с всички масови марки.",
      price: "по оглед"
    },
    {
      icon: "freon",
      title: "Зареждане с фреон",
      text: "Проверка за течове и дозареждане с хладилен агент R32 / R410A.",
      price: "от 50 €"
    },
    {
      icon: "remove",
      title: "Демонтаж и преместване",
      text: "Внимателен демонтаж и повторен монтаж на климатика на ново място.",
      price: "от 60 €"
    },
    {
      icon: "hotel",
      title: "Обслужване на хотели",
      text: "Абонаментна поддръжка и приоритетна реакция за хотели, апартаменти и заведения.",
      price: "договаряне"
    }
  ],

  productTypes: {
    wall: "Стенни",
    floor: "Подови",
    multi: "Мултисплит",
    cassette: "Касетъчни",
    duct: "Канални",
    column: "Колонни",
    mobile: "Мобилни"
  },

  products: [
    {
      "id": "alpin-asw-25afa-alpha",
      "brand": "Alpin",
      "name": "Alpin ASW-25AFA ALPHA",
      "type": "wall",
      "btu": 9000,
      "area": "до 25 м²",
      "energy": "A++",
      "wifi": false,
      "price": 509.0,
      "oldPrice": 659.0,
      "image": "assets/img/products/alpin-asw-25afa-alpha.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Alpin ASW-25AFA ALPHA с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.5, SCOP 4. Отоплява надеждно и при ниски външни температури – до -32°C. Тиха работа – вътрешното тяло работи от 27 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Ниво на шум от 27 dB",
        "Отопление до -32°C навън",
        "SEER 6.5 / SCOP 4"
      ]
    },
    {
      "id": "alpin-asw-35ktn-nordic",
      "brand": "Alpin",
      "name": "Alpin ASW-35KTN Nordic",
      "type": "wall",
      "btu": 12000,
      "area": "до 25 м²",
      "energy": "A+++",
      "wifi": true,
      "price": 749.0,
      "oldPrice": 939.0,
      "image": "assets/img/products/alpin-asw-35ktn-nordic.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Alpin ASW-35KTN Nordic с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 22 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 22 dB",
        "Отопление до -25°C навън",
        "SEER 8.5 / SCOP 4.6",
        "Гаранция 36 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "alpin-asw-35ete",
      "brand": "Alpin",
      "name": "Alpin ASW-35ETE",
      "type": "wall",
      "btu": 12000,
      "area": "до 25 м²",
      "energy": "A++",
      "wifi": true,
      "price": 587.0,
      "oldPrice": 599.0,
      "image": "assets/img/products/alpin-asw-35ete.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Alpin ASW-35ETE с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.1, SCOP 4. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 22 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 22 dB",
        "Отопление до -25°C навън",
        "SEER 6.1 / SCOP 4",
        "Гаранция 36 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "alpin-asw-50pam-comfort",
      "brand": "Alpin",
      "name": "Alpin ASW-50PAM Comfort",
      "type": "wall",
      "btu": 18000,
      "area": "до 50 м²",
      "energy": "A+++",
      "wifi": true,
      "price": 1049.0,
      "oldPrice": 1319.0,
      "image": "assets/img/products/alpin-asw-50pam-comfort.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Alpin ASW-50PAM Comfort с мощност 18 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.7, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 24 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Ниво на шум от 24 dB",
        "Отопление до -25°C навън",
        "SEER 8.7 / SCOP 4.6",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "daikin-emura-3-ftxj20ab-rxj20a",
      "brand": "Daikin",
      "name": "Daikin Emura 3 FTXJ20AB + RXJ20A",
      "type": "wall",
      "btu": 7000,
      "area": "до 15 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 2086.0,
      "oldPrice": null,
      "image": "assets/img/products/daikin-emura-3-ftxj20ab-rxj20a.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Daikin Emura 3 FTXJ20AB + RXJ20A с мощност 7 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.75, SCOP 5.15. Отоплява надеждно и при ниски външни температури – до -20°C. Тиха работа – вътрешното тяло работи от 19 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -20°C навън",
        "SEER 8.75 / SCOP 5.15",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "daikin-ftxa25aw-rxa25a-white-stylish",
      "brand": "Daikin",
      "name": "Daikin FTXA25AW/RXA25A WHITE STYLISH",
      "type": "wall",
      "btu": 9000,
      "area": "до 20 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1993.0,
      "oldPrice": null,
      "image": "assets/img/products/daikin-ftxa25aw-rxa25a-white-stylish.webp",
      "badges": [],
      "description": "Стенен инверторен климатик Daikin FTXA25AW/RXA25A WHITE STYLISH с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.74, SCOP 5.15. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 19 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -15°C навън",
        "SEER 8.74 / SCOP 5.15",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "daikin-ftxc25e-rxc25e-sensira-2025-wifi",
      "brand": "Daikin",
      "name": "Daikin FTXC25E/RXC25E SENSIRA 2025 WiFi",
      "type": "wall",
      "btu": 9000,
      "area": "до 20 м²",
      "energy": "A++",
      "wifi": true,
      "price": 746.0,
      "oldPrice": 766.0,
      "image": "assets/img/products/daikin-ftxc25e-rxc25e-sensira-2025-wifi.webp",
      "badges": [
        "Промо",
        "Wi-Fi"
      ],
      "description": "Стенен инверторен климатик Daikin FTXC25E/RXC25E SENSIRA 2025 WiFi с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.84, SCOP 4.45. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 21 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 21 dB",
        "Отопление до -15°C навън",
        "SEER 6.84 / SCOP 4.45",
        "Гаранция 36 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "daikin-ftxa35bb-rxa35a-black-stylish",
      "brand": "Daikin",
      "name": "Daikin FTXA35BB/RXA35A BLACK STYLISH",
      "type": "wall",
      "btu": 12000,
      "area": "до 30 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 2330.0,
      "oldPrice": null,
      "image": "assets/img/products/daikin-ftxa35bb-rxa35a-black-stylish.webp",
      "badges": [],
      "description": "Стенен инверторен климатик Daikin FTXA35BB/RXA35A BLACK STYLISH с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.73, SCOP 5.15. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 19 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -15°C навън",
        "SEER 8.73 / SCOP 5.15",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "daikin-ftxa35bt-rxa35a-blackwood-stylish",
      "brand": "Daikin",
      "name": "Daikin FTXA35BT/RXA35A BLACKWOOD STYLISH",
      "type": "wall",
      "btu": 12000,
      "area": "до 30 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 2330.0,
      "oldPrice": null,
      "image": "assets/img/products/daikin-ftxa35bt-rxa35a-blackwood-stylish.webp",
      "badges": [],
      "description": "Стенен инверторен климатик Daikin FTXA35BT/RXA35A BLACKWOOD STYLISH с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.73, SCOP 5.15. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 19 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -15°C навън",
        "SEER 8.73 / SCOP 5.15",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "daikin-sensira-ftxf35e-rxf35e",
      "brand": "Daikin",
      "name": "Daikin Sensira FTXF35E + RXF35E",
      "type": "wall",
      "btu": 12000,
      "area": "до 35 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1089.0,
      "oldPrice": 1259.0,
      "image": "assets/img/products/daikin-sensira-ftxf35e-rxf35e.webp",
      "badges": [
        "Промо"
      ],
      "description": "Стенен инверторен климатик Daikin Sensira FTXF35E + RXF35E с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.5, SCOP 4.2. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 21 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 21 dB",
        "Отопление до -15°C навън",
        "SEER 6.5 / SCOP 4.2"
      ]
    },
    {
      "id": "daikin-ftxa50bs-rxa50b-silver-stylish",
      "brand": "Daikin",
      "name": "Daikin FTXA50BS/RXA50B SILVER STYLISH",
      "type": "wall",
      "btu": 18000,
      "area": "до 40 м²",
      "energy": "A++",
      "wifi": false,
      "price": 3067.0,
      "oldPrice": null,
      "image": "assets/img/products/daikin-ftxa50bs-rxa50b-silver-stylish.webp",
      "badges": [],
      "description": "Стенен инверторен климатик Daikin FTXA50BS/RXA50B SILVER STYLISH с мощност 18 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7.33, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 24 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 24 dB",
        "Отопление до -15°C навън",
        "SEER 7.33 / SCOP 4.6",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "daikin-sensira-ftxf50f-rxf50f",
      "brand": "Daikin",
      "name": "Daikin Sensira FTXF50F + RXF50F",
      "type": "wall",
      "btu": 18000,
      "area": "до 37 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1629.0,
      "oldPrice": 1785.0,
      "image": "assets/img/products/daikin-sensira-ftxf50f-rxf50f.webp",
      "badges": [
        "Промо"
      ],
      "description": "Стенен инверторен климатик Daikin Sensira FTXF50F + RXF50F с мощност 18 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.21, SCOP 4.06. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 31 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 31 dB",
        "Отопление до -15°C навън",
        "SEER 6.21 / SCOP 4.06",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "daikin-sensira-ftxc71e-rxc71e",
      "brand": "Daikin",
      "name": "Daikin Sensira FTXC71E + RXC71E",
      "type": "wall",
      "btu": 24000,
      "area": "до 50 м²",
      "energy": "A",
      "wifi": false,
      "price": 1912.0,
      "oldPrice": null,
      "image": "assets/img/products/daikin-sensira-ftxc71e-rxc71e.webp",
      "badges": [],
      "description": "Стенен инверторен климатик Daikin Sensira FTXC71E + RXC71E с мощност 24 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A при охлаждане, SEER 5.3, SCOP 3.81. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 31 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 31 dB",
        "Отопление до -15°C навън",
        "SEER 5.3 / SCOP 3.81",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "fuji-electric-rsg09kete-b-rog09keta",
      "brand": "Fuji Electric",
      "name": "Fuji Electric RSG09KETE-B/ROG09KETA",
      "type": "wall",
      "btu": 9000,
      "area": "до 25 м²",
      "energy": "A++",
      "wifi": false,
      "price": 889.0,
      "oldPrice": 1069.0,
      "image": "assets/img/products/fuji-electric-rsg09kete-b-rog09keta.webp",
      "badges": [
        "Промо"
      ],
      "description": "Стенен инверторен климатик Fuji Electric RSG09KETE-B/ROG09KETA с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7.4, SCOP 4.1. Отоплява надеждно и при ниски външни температури – до -15°C. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Отопление до -15°C навън",
        "SEER 7.4 / SCOP 4.1"
      ]
    },
    {
      "id": "fuji-electric-rsg12kmcen-rog12kmcen-nordic",
      "brand": "Fuji Electric",
      "name": "Fuji Electric RSG12KMCEN/ROG12KMCEN Nordic",
      "type": "wall",
      "btu": 12000,
      "area": "до 35 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1445.0,
      "oldPrice": 1493.0,
      "image": "assets/img/products/fuji-electric-rsg12kmcen-rog12kmcen-nordic.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Fuji Electric RSG12KMCEN/ROG12KMCEN Nordic с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7.5, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 20 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 20 dB",
        "Отопление до -25°C навън",
        "SEER 7.5 / SCOP 4.6"
      ]
    },
    {
      "id": "fujitsu-airstage-aseh09kjcal-aoeh09kjca",
      "brand": "Fujitsu",
      "name": "Fujitsu Airstage ASEH09KJCAL/AOEH09KJCA",
      "type": "wall",
      "btu": 9000,
      "area": "до 25 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1189.0,
      "oldPrice": 1329.0,
      "image": "assets/img/products/fujitsu-airstage-aseh09kjcal-aoeh09kjca.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Fujitsu Airstage ASEH09KJCAL/AOEH09KJCA с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 9.2, SCOP 5.11. Отоплява надеждно и при ниски външни температури – до -20°C. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Отопление до -20°C навън",
        "SEER 9.2 / SCOP 5.11"
      ]
    },
    {
      "id": "fujitsu-airstage-aseh09knca",
      "brand": "Fujitsu",
      "name": "Fujitsu Airstage ASEH09KNCA",
      "type": "wall",
      "btu": 9000,
      "area": "до 25 м²",
      "energy": "A++",
      "wifi": true,
      "price": 909.0,
      "oldPrice": 999.0,
      "image": "assets/img/products/fujitsu-airstage-aseh09knca.webp",
      "badges": [
        "Промо",
        "Wi-Fi"
      ],
      "description": "Стенен инверторен климатик Fujitsu Airstage ASEH09KNCA с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7.4, SCOP 4.4. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 20 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 20 dB",
        "Отопление до -15°C навън",
        "SEER 7.4 / SCOP 4.4",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "fujitsu-aseh12kgtg-aoeh12kgcg",
      "brand": "Fujitsu",
      "name": "Fujitsu ASEH12KGTG/AOEH12KGCG",
      "type": "wall",
      "btu": 12000,
      "area": "до 35 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1279.0,
      "oldPrice": 1449.0,
      "image": "assets/img/products/fujitsu-aseh12kgtg-aoeh12kgcg.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Fujitsu ASEH12KGTG/AOEH12KGCG с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.8, SCOP 5.2. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 19 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -15°C навън",
        "SEER 8.8 / SCOP 5.2"
      ]
    },
    {
      "id": "fujitsu-general-ashg12kete-b-aohg12keta",
      "brand": "Fujitsu",
      "name": "Fujitsu General ASHG12KETE-B/AOHG12KETA",
      "type": "wall",
      "btu": 12000,
      "area": "до 25 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1129.0,
      "oldPrice": null,
      "image": "assets/img/products/fujitsu-general-ashg12kete-b-aohg12keta.webp",
      "badges": [],
      "description": "Стенен инверторен климатик Fujitsu General ASHG12KETE-B/AOHG12KETA с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7.3, SCOP 4.4. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 20 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 20 dB",
        "Отопление до -15°C навън",
        "SEER 7.3 / SCOP 4.4",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "fujitsu-airstage-aseg18kmte-aoeg18kmta",
      "brand": "Fujitsu",
      "name": "Fujitsu Airstage ASEG18KMTE/AOEG18KMTA",
      "type": "wall",
      "btu": 18000,
      "area": "до 50 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1549.0,
      "oldPrice": 1699.0,
      "image": "assets/img/products/fujitsu-airstage-aseg18kmte-aoeg18kmta.webp",
      "badges": [
        "Промо"
      ],
      "description": "Стенен инверторен климатик Fujitsu Airstage ASEG18KMTE/AOEG18KMTA с мощност 18 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7.77, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -15°C. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Отопление до -15°C навън",
        "SEER 7.77 / SCOP 4.6"
      ]
    },
    {
      "id": "fujitsu-airstage-aseh24kmtgl-aoeh24kmtg",
      "brand": "Fujitsu",
      "name": "Fujitsu Airstage ASEH24KMTGL/AOEH24KMTG",
      "type": "wall",
      "btu": 24000,
      "area": "до 65 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1969.0,
      "oldPrice": 2169.0,
      "image": "assets/img/products/fujitsu-airstage-aseh24kmtgl-aoeh24kmtg.webp",
      "badges": [
        "Промо"
      ],
      "description": "Стенен инверторен климатик Fujitsu Airstage ASEH24KMTGL/AOEH24KMTG с мощност 24 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7.3, SCOP 4.3. Отоплява надеждно и при ниски външни температури – до -15°C. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Отопление до -15°C навън",
        "SEER 7.3 / SCOP 4.3"
      ]
    },
    {
      "id": "gree-gwh09aucxb-k6dna2a-i-gwh09aucxb-k6dna1a-o-c",
      "brand": "Gree",
      "name": "Gree GWH09AUCXB-K6DNA2A-I – GWH09AUCXB-K6DNA1A-O CLIVIA WiFi",
      "type": "wall",
      "btu": 9000,
      "area": "до 15 м²",
      "energy": "A+++",
      "wifi": true,
      "price": 766.0,
      "oldPrice": null,
      "image": "assets/img/products/gree-gwh09aucxb-k6dna2a-i-gwh09aucxb-k6dna1a-o-c.webp",
      "badges": [
        "Хиперинвертор",
        "Wi-Fi"
      ],
      "description": "Стенен инверторен климатик Gree GWH09AUCXB-K6DNA2A-I – GWH09AUCXB-K6DNA1A-O CLIVIA WiFi с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 22 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 22 dB",
        "Отопление до -25°C навън",
        "SEER 8.5 / SCOP 4.6",
        "Гаранция 60 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "gree-gwh09yd-s6dba1-i-gwh09yd-s6dba1-o-amber-nor",
      "brand": "Gree",
      "name": "Gree GWH09YD-S6DBA1-I/GWH09YD-S6DBA1-O AMBER NORDIC WiFi",
      "type": "wall",
      "btu": 9000,
      "area": "до 25 м²",
      "energy": "A+++",
      "wifi": true,
      "price": 1108.0,
      "oldPrice": null,
      "image": "assets/img/products/gree-gwh09yd-s6dba1-i-gwh09yd-s6dba1-o-amber-nor.webp",
      "badges": [
        "Хиперинвертор",
        "Wi-Fi"
      ],
      "description": "Стенен инверторен климатик Gree GWH09YD-S6DBA1-I/GWH09YD-S6DBA1-O AMBER NORDIC WiFi с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 5.1. Отоплява надеждно и при ниски външни температури – до -30°C. Тиха работа – вътрешното тяло работи от 18 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 18 dB",
        "Отопление до -30°C навън",
        "SEER 8.5 / SCOP 5.1",
        "Гаранция 60 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "gree-airy-gwh12avcxd-k6dna1a",
      "brand": "Gree",
      "name": "Gree AIRY GWH12AVCXD-K6DNA1A",
      "type": "wall",
      "btu": 12000,
      "area": "до 24 м²",
      "energy": "A+++",
      "wifi": true,
      "price": 959.0,
      "oldPrice": 1059.0,
      "image": "assets/img/products/gree-airy-gwh12avcxd-k6dna1a.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Gree AIRY GWH12AVCXD-K6DNA1A с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 19 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -25°C навън",
        "SEER 8.5 / SCOP 4.6",
        "Гаранция 24 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "gree-gwh12akcxd-k6dna1a-i-gwh12akcxd-k6dna1a-o-s",
      "brand": "Gree",
      "name": "Gree GWH12AKCXD-K6DNA1A-I/GWH12AKCXD-K6DNA1A-O SOYAL II",
      "type": "wall",
      "btu": 12000,
      "area": "до 30 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1259.0,
      "oldPrice": null,
      "image": "assets/img/products/gree-gwh12akcxd-k6dna1a-i-gwh12akcxd-k6dna1a-o-s.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Gree GWH12AKCXD-K6DNA1A-I/GWH12AKCXD-K6DNA1A-O SOYAL II с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 9, SCOP 5.1. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 22 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 22 dB",
        "Отопление до -25°C навън",
        "SEER 9 / SCOP 5.1",
        "Гаранция 60 месеца"
      ]
    },
    {
      "id": "gree-gwh12aacxb-k6dna2a-i-gwh12agcxb-k6dna1a-o-i",
      "brand": "Gree",
      "name": "Gree GWH12AACXB-K6DNA2A-I/GWH12AGCXB-K6DNA1A-O INFINITY II WiFi",
      "type": "wall",
      "btu": 12000,
      "area": "до 25 м²",
      "energy": "A++",
      "wifi": true,
      "price": 689.0,
      "oldPrice": 715.0,
      "image": "assets/img/products/gree-gwh12aacxb-k6dna2a-i-gwh12agcxb-k6dna1a-o-i.webp",
      "badges": [
        "Промо",
        "Wi-Fi"
      ],
      "description": "Стенен инверторен климатик Gree GWH12AACXB-K6DNA2A-I/GWH12AGCXB-K6DNA1A-O INFINITY II WiFi с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.5, SCOP 4.1. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 23 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 23 dB",
        "Отопление до -15°C навън",
        "SEER 6.5 / SCOP 4.1",
        "Гаранция 60 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "gree-airy-gwh18avdxe-k6dna1a",
      "brand": "Gree",
      "name": "Gree AIRY GWH18AVDXE-K6DNA1A",
      "type": "wall",
      "btu": 18000,
      "area": "до 35 м²",
      "energy": "A+++",
      "wifi": true,
      "price": 1249.0,
      "oldPrice": 1489.0,
      "image": "assets/img/products/gree-airy-gwh18avdxe-k6dna1a.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Gree AIRY GWH18AVDXE-K6DNA1A с мощност 18 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 28 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 28 dB",
        "Отопление до -25°C навън",
        "SEER 8 / SCOP 4.6",
        "Гаранция 24 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "gree-gwh18ye-s6dba1-i-gwh18ye-s6dba1-o-amber-nor",
      "brand": "Gree",
      "name": "Gree GWH18YE-S6DBA1-I/GWH18YE-S6DBA1-O AMBER NORDIC WiFi",
      "type": "wall",
      "btu": 18000,
      "area": "до 45 м²",
      "energy": "A++",
      "wifi": true,
      "price": 1461.0,
      "oldPrice": null,
      "image": "assets/img/products/gree-gwh18ye-s6dba1-i-gwh18ye-s6dba1-o-amber-nor.webp",
      "badges": [
        "Хиперинвертор",
        "Wi-Fi"
      ],
      "description": "Стенен инверторен климатик Gree GWH18YE-S6DBA1-I/GWH18YE-S6DBA1-O AMBER NORDIC WiFi с мощност 18 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.6, SCOP 4.4. Отоплява надеждно и при ниски външни температури – до -30°C. Тиха работа – вътрешното тяло работи от 33 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 33 dB",
        "Отопление до -30°C навън",
        "SEER 6.6 / SCOP 4.4",
        "Гаранция 60 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "gree-airy-gwh24avexf-k6dna1a",
      "brand": "Gree",
      "name": "Gree AIRY GWH24AVEXF-K6DNA1A",
      "type": "wall",
      "btu": 24000,
      "area": "до 48 м²",
      "energy": "A+++",
      "wifi": true,
      "price": 1499.0,
      "oldPrice": 1789.0,
      "image": "assets/img/products/gree-airy-gwh24avexf-k6dna1a.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Gree AIRY GWH24AVEXF-K6DNA1A с мощност 24 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 37 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 37 dB",
        "Отопление до -25°C навън",
        "SEER 8.5 / SCOP 4.6",
        "Гаранция 24 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "hisense-easy-smart-ca25yr03g",
      "brand": "Hisense",
      "name": "Hisense Easy Smart CA25YR03G",
      "type": "wall",
      "btu": 9000,
      "area": "до 25 м²",
      "energy": "A++",
      "wifi": true,
      "price": 537.0,
      "oldPrice": 620.0,
      "image": "assets/img/products/hisense-easy-smart-ca25yr03g.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Hisense Easy Smart CA25YR03G с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.1, SCOP 4. Отоплява надеждно и при ниски външни температури – до -20°C. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Отопление до -20°C навън",
        "SEER 6.1 / SCOP 4",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "hisense-energy-pro-qe35xv0eg",
      "brand": "Hisense",
      "name": "Hisense Energy Pro QE35XV0EG",
      "type": "wall",
      "btu": 12000,
      "area": "до 35 м²",
      "energy": "A+++",
      "wifi": true,
      "price": 895.0,
      "oldPrice": 996.5,
      "image": "assets/img/products/hisense-energy-pro-qe35xv0eg.webp",
      "badges": [
        "Промо",
        "Wi-Fi"
      ],
      "description": "Стенен инверторен климатик Hisense Energy Pro QE35XV0EG с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 5.601. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "SEER 8.5 / SCOP 5.601",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "kaisai-eco-kex-9ktgi-kex-9ktgo",
      "brand": "Kaisai",
      "name": "KAISAI ECO KEX-9KTGI/KEX-9KTGO",
      "type": "wall",
      "btu": 9000,
      "area": "до 15 м²",
      "energy": "A++",
      "wifi": false,
      "price": 597.0,
      "oldPrice": null,
      "image": "assets/img/products/kaisai-eco-kex-9ktgi-kex-9ktgo.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Kaisai ECO KEX-9KTGI/KEX-9KTGO с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.2, SCOP 4. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 21 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 21 dB",
        "Отопление до -25°C навън",
        "SEER 6.2 / SCOP 4",
        "Гаранция 24 месеца"
      ]
    },
    {
      "id": "miota-raw-ar25a-rxs-ar25a-arctic2r",
      "brand": "MIOTA",
      "name": "MIOTA RAW-AR25A / RXS-AR25A ARCTIC2R",
      "type": "wall",
      "btu": 9000,
      "area": "до 25 м²",
      "energy": "A+++",
      "wifi": true,
      "price": 1019.0,
      "oldPrice": 1149.0,
      "image": "assets/img/products/miota-raw-ar25a-rxs-ar25a-arctic2r.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик MIOTA RAW-AR25A / RXS-AR25A ARCTIC2R с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 5.1. Отоплява надеждно и при ниски външни температури – до -30°C. Тиха работа – вътрешното тяло работи от 18 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Ниво на шум от 18 dB",
        "Отопление до -30°C навън",
        "SEER 8.5 / SCOP 5.1",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "midea-msepbu-09hrfn8-qrd6gw-mox330-09hfn8-qrd6gw",
      "brand": "Midea",
      "name": "Midea MSEPBU-09HRFN8-QRD6GW/MOX330-09HFN8-QRD6GW All Easy Pro Nordic",
      "type": "wall",
      "btu": 9000,
      "area": "до 15 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 849.0,
      "oldPrice": null,
      "image": "assets/img/products/midea-msepbu-09hrfn8-qrd6gw-mox330-09hfn8-qrd6gw.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Midea MSEPBU-09HRFN8-QRD6GW/MOX330-09HFN8-QRD6GW All Easy Pro Nordic с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.6, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 21 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 21 dB",
        "Отопление до -25°C навън",
        "SEER 8.6 / SCOP 4.6",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "midea-ma3-09hrdn8-qrd0gw-ma3-09hfn8-qr-prime-2",
      "brand": "Midea",
      "name": "Midea MA3-09HRDN8-QRD0GW/MA3-09HFN8-QR Prime 2",
      "type": "wall",
      "btu": 9000,
      "area": "до 15 м²",
      "energy": "A++",
      "wifi": false,
      "price": 629.0,
      "oldPrice": null,
      "image": "assets/img/products/midea-ma3-09hrdn8-qrd0gw-ma3-09hfn8-qr-prime-2.webp",
      "badges": [],
      "description": "Стенен инверторен климатик Midea MA3-09HRDN8-QRD0GW/MA3-09HFN8-QR Prime 2 с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.5, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 26 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 26 dB",
        "Отопление до -15°C навън",
        "SEER 6.5 / SCOP 4.6",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "midea-ag2eco-12nxd0-i-b-ag2eco-12n8d0-o-b-xtreme",
      "brand": "Midea",
      "name": "Midea AG2Eco-12NXD0-I(B)/AG2Eco-12N8D0-O(B) Xtreme Eco",
      "type": "wall",
      "btu": 12000,
      "area": "до 25 м²",
      "energy": "A++",
      "wifi": false,
      "price": 715.0,
      "oldPrice": null,
      "image": "assets/img/products/midea-ag2eco-12nxd0-i-b-ag2eco-12n8d0-o-b-xtreme.webp",
      "badges": [],
      "description": "Стенен инверторен климатик Midea AG2Eco-12NXD0-I(B)/AG2Eco-12N8D0-O(B) Xtreme Eco с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7, SCOP 4.2. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 21 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 21 dB",
        "Отопление до -15°C навън",
        "SEER 7 / SCOP 4.2",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "midea-gaia-12hrfn8-i-gaia-12hrfn8-o-gaia",
      "brand": "Midea",
      "name": "Midea GAIA-12HRFN8-I/GAIA-12HRFN8-O GAIA",
      "type": "wall",
      "btu": 12000,
      "area": "до 25 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1185.0,
      "oldPrice": null,
      "image": "assets/img/products/midea-gaia-12hrfn8-i-gaia-12hrfn8-o-gaia.webp",
      "badges": [],
      "description": "Стенен инверторен климатик Midea GAIA-12HRFN8-I/GAIA-12HRFN8-O GAIA с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 21 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 21 dB",
        "Отопление до -15°C навън",
        "SEER 8.5 / SCOP 4.6",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "midea-msab-12nxd0-xi-msab-12n8d0-xo-aurora",
      "brand": "Midea",
      "name": "Midea MSAB-12NXD0-XI/MSAB-12N8D0-XO Aurora",
      "type": "wall",
      "btu": 12000,
      "area": "до 25 м²",
      "energy": "A++",
      "wifi": false,
      "price": 740.0,
      "oldPrice": null,
      "image": "assets/img/products/midea-msab-12nxd0-xi-msab-12n8d0-xo-aurora.webp",
      "badges": [],
      "description": "Стенен инверторен климатик Midea MSAB-12NXD0-XI/MSAB-12N8D0-XO Aurora с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7, SCOP 4.1. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 23 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 23 dB",
        "Отопление до -15°C навън",
        "SEER 7 / SCOP 4.1",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "midea-msepcu-18hrfn8-qrd0gw-mox430-18hfn8-qrd0gw",
      "brand": "Midea",
      "name": "Midea MSEPCU-18HRFN8-QRD0GW/MOX430-18HFN8-QRD0GW All Easy Pro Nordic",
      "type": "wall",
      "btu": 18000,
      "area": "до 40 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1155.0,
      "oldPrice": null,
      "image": "assets/img/products/midea-msepcu-18hrfn8-qrd0gw-mox430-18hfn8-qrd0gw.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Midea MSEPCU-18HRFN8-QRD0GW/MOX430-18HFN8-QRD0GW All Easy Pro Nordic с мощност 18 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 4.3. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 22 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 22 dB",
        "Отопление до -25°C навън",
        "SEER 8.5 / SCOP 4.3",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "midea-msepdu-24hrfn8-qrd0gw-mox430-24hfn8-qrd0gw",
      "brand": "Midea",
      "name": "Midea MSEPDU-24HRFN8-QRD0GW/MOX430-24HFN8-QRD0GW All Easy Pro Nordic",
      "type": "wall",
      "btu": 24000,
      "area": "до 50 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1359.0,
      "oldPrice": null,
      "image": "assets/img/products/midea-msepdu-24hrfn8-qrd0gw-mox430-24hfn8-qrd0gw.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Midea MSEPDU-24HRFN8-QRD0GW/MOX430-24HFN8-QRD0GW All Easy Pro Nordic с мощност 24 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 4.2. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 21 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 21 dB",
        "Отопление до -25°C навън",
        "SEER 8.5 / SCOP 4.2",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-electric-msz-ef25vgkb-muz-ef25vg-kiri",
      "brand": "Mitsubishi Electric",
      "name": "Mitsubishi Electric MSZ-EF25VGKB/MUZ-EF25VG KIRIGAMINE ZEN",
      "type": "wall",
      "btu": 9000,
      "area": "до 20 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1399.0,
      "oldPrice": 1503.0,
      "image": "assets/img/products/mitsubishi-electric-msz-ef25vgkb-muz-ef25vg-kiri.webp",
      "badges": [
        "Промо"
      ],
      "description": "Стенен инверторен климатик Mitsubishi Electric MSZ-EF25VGKB/MUZ-EF25VG KIRIGAMINE ZEN с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 9.1, SCOP 4.7. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 19 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -15°C навън",
        "SEER 9.1 / SCOP 4.7",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-electric-msz-fh25ve-muz-fh25vehz",
      "brand": "Mitsubishi Electric",
      "name": "Mitsubishi Electric MSZ-FH25VE + MUZ-FH25VEHZ",
      "type": "wall",
      "btu": 9000,
      "area": "до 20 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1579.0,
      "oldPrice": 1687.8,
      "image": "assets/img/products/mitsubishi-electric-msz-fh25ve-muz-fh25vehz.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Mitsubishi Electric MSZ-FH25VE + MUZ-FH25VEHZ с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 9.1, SCOP 4.9. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 20 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R410A",
        "Ниво на шум от 20 dB",
        "Отопление до -25°C навън",
        "SEER 9.1 / SCOP 4.9",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-electric-msz-ln25vgb-muz-ln25vghz-oni",
      "brand": "Mitsubishi Electric",
      "name": "Mitsubishi Electric MSZ-LN25VGB/MUZ-LN25VGHZ ONIX BLACK ZUBADAN",
      "type": "wall",
      "btu": 9000,
      "area": "до 25 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1840.0,
      "oldPrice": null,
      "image": "assets/img/products/mitsubishi-electric-msz-ln25vgb-muz-ln25vghz-oni.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Mitsubishi Electric MSZ-LN25VGB/MUZ-LN25VGHZ ONIX BLACK ZUBADAN с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 10.5, SCOP 5.2. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 19 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -25°C навън",
        "SEER 10.5 / SCOP 5.2",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-electric-msz-ln35vgb-muz-ln35vghz-oni",
      "brand": "Mitsubishi Electric",
      "name": "Mitsubishi Electric MSZ-LN35VGB/MUZ-LN35VGHZ ONIX BLACK ZUBADAN",
      "type": "wall",
      "btu": 12000,
      "area": "до 35 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 2279.0,
      "oldPrice": null,
      "image": "assets/img/products/mitsubishi-electric-msz-ln35vgb-muz-ln35vghz-oni.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Mitsubishi Electric MSZ-LN35VGB/MUZ-LN35VGHZ ONIX BLACK ZUBADAN с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 9.4, SCOP 5.1. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 19 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -25°C навън",
        "SEER 9.4 / SCOP 5.1",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-electric-msz-ft35vgk-muz-ft35vghz-nin",
      "brand": "Mitsubishi Electric",
      "name": "Mitsubishi Electric MSZ-FT35VGK/MUZ-FT35VGHZ NINJA",
      "type": "wall",
      "btu": 12000,
      "area": "до 35 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1899.0,
      "oldPrice": null,
      "image": "assets/img/products/mitsubishi-electric-msz-ft35vgk-muz-ft35vghz-nin.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Mitsubishi Electric MSZ-FT35VGK/MUZ-FT35VGHZ NINJA с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.6, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 19 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -25°C навън",
        "SEER 8.6 / SCOP 4.6",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-electric-msz-hr35vf-muz-hr35vf",
      "brand": "Mitsubishi Electric",
      "name": "Mitsubishi Electric MSZ-HR35VF + MUZ-HR35VF",
      "type": "wall",
      "btu": 12000,
      "area": "до 23 м²",
      "energy": "A++",
      "wifi": false,
      "price": 899.0,
      "oldPrice": 1023.12,
      "image": "assets/img/products/mitsubishi-electric-msz-hr35vf-muz-hr35vf.webp",
      "badges": [
        "Промо"
      ],
      "description": "Стенен инверторен климатик Mitsubishi Electric MSZ-HR35VF + MUZ-HR35VF с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6, SCOP 4.3. Тиха работа – вътрешното тяло работи от 21 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 21 dB",
        "Отопление до -10°C навън",
        "SEER 6 / SCOP 4.3",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-electric-msz-ef35vgkb-muz-ef35vg-kiri",
      "brand": "Mitsubishi Electric",
      "name": "Mitsubishi Electric MSZ-EF35VGKB/MUZ-EF35VG KIRIGAMINE ZEN",
      "type": "wall",
      "btu": 12000,
      "area": "до 30 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1699.0,
      "oldPrice": 1800.0,
      "image": "assets/img/products/mitsubishi-electric-msz-ef35vgkb-muz-ef35vg-kiri.webp",
      "badges": [
        "Промо"
      ],
      "description": "Стенен инверторен климатик Mitsubishi Electric MSZ-EF35VGKB/MUZ-EF35VG KIRIGAMINE ZEN с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.8, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 21 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 21 dB",
        "Отопление до -15°C навън",
        "SEER 8.8 / SCOP 4.6",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-electric-msz-ay50vgk-muz-ay50vg-wifi",
      "brand": "Mitsubishi Electric",
      "name": "Mitsubishi Electric MSZ-AY50VGK/MUZ-AY50VG WiFi",
      "type": "wall",
      "btu": 18000,
      "area": "до 45 м²",
      "energy": "A++",
      "wifi": true,
      "price": 1739.0,
      "oldPrice": 1799.0,
      "image": "assets/img/products/mitsubishi-electric-msz-ay50vgk-muz-ay50vg-wifi.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Mitsubishi Electric MSZ-AY50VGK/MUZ-AY50VG WiFi с мощност 18 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7.5, SCOP 4.7. Отоплява надеждно и при ниски външни температури – до -20°C. Тиха работа – вътрешното тяло работи от 28 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 28 dB",
        "Отопление до -20°C навън",
        "SEER 7.5 / SCOP 4.7",
        "Гаранция 36 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "mitsubishi-electric-msz-hr50vf-muz-hr50vf",
      "brand": "Mitsubishi Electric",
      "name": "Mitsubishi Electric MSZ‑HR50VF + MUZ‑HR50VF",
      "type": "wall",
      "btu": 18000,
      "area": "до 35 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1249.0,
      "oldPrice": 1447.0,
      "image": "assets/img/products/mitsubishi-electric-msz-hr50vf-muz-hr50vf.webp",
      "badges": [
        "Промо"
      ],
      "description": "Стенен инверторен климатик Mitsubishi Electric MSZ‑HR50VF + MUZ‑HR50VF с мощност 18 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.5, SCOP 4.3. Тиха работа – вътрешното тяло работи от 27 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 27 dB",
        "Отопление до -10°C навън",
        "SEER 6.5 / SCOP 4.3",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-electric-msz-ap71vgk-muz-ap71vg-wifi",
      "brand": "Mitsubishi Electric",
      "name": "Mitsubishi Electric MSZ-AP71VGK/MUZ-AP71VG WiFi",
      "type": "wall",
      "btu": 24000,
      "area": "до 60 м²",
      "energy": "A++",
      "wifi": true,
      "price": 2499.0,
      "oldPrice": null,
      "image": "assets/img/products/mitsubishi-electric-msz-ap71vgk-muz-ap71vg-wifi.webp",
      "badges": [
        "Wi-Fi"
      ],
      "description": "Стенен инверторен климатик Mitsubishi Electric MSZ-AP71VGK/MUZ-AP71VG WiFi с мощност 24 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7.2, SCOP 4.4. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 30 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 30 dB",
        "Отопление до -15°C навън",
        "SEER 7.2 / SCOP 4.4",
        "Гаранция 36 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "mitsubishi-heavy-industries-srk25zsx-wf-src25zsx",
      "brand": "Mitsubishi Heavy Industries",
      "name": "Mitsubishi Heavy SRK25ZSX-WF + SRC25ZSX-W",
      "type": "wall",
      "btu": 9000,
      "area": "до 20 м²",
      "energy": "A+++",
      "wifi": true,
      "price": 1765.01,
      "oldPrice": null,
      "image": "assets/img/products/mitsubishi-heavy-industries-srk25zsx-wf-src25zsx.webp",
      "badges": [
        "Хиперинвертор",
        "Wi-Fi"
      ],
      "description": "Стенен инверторен климатик Mitsubishi Heavy Industries SRK25ZSX-WF + SRC25ZSX-W с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 10.3, SCOP 5.2. Отоплява надеждно и при ниски външни температури – до -20°C. Тиха работа – вътрешното тяло работи от 19 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -20°C навън",
        "SEER 10.3 / SCOP 5.2",
        "Гаранция 36 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "mitsubishi-heavy-industries-srk25ztl-w-src25ztl-",
      "brand": "Mitsubishi Heavy Industries",
      "name": "Mitsubishi Heavy SRK25ZTL-W + SRC25ZTL-W",
      "type": "wall",
      "btu": 9000,
      "area": "до 20 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1079.0,
      "oldPrice": 1299.0,
      "image": "assets/img/products/mitsubishi-heavy-industries-srk25ztl-w-src25ztl-.webp",
      "badges": [
        "Промо"
      ],
      "description": "Стенен инверторен климатик Mitsubishi Heavy Industries SRK25ZTL-W + SRC25ZTL-W с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.9, SCOP 4.7. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 22 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 22 dB",
        "Отопление до -15°C навън",
        "SEER 6.9 / SCOP 4.7",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-heavy-industries-dxk12z6-w-dxc12z6-w",
      "brand": "Mitsubishi Heavy Industries",
      "name": "Mitsubishi Heavy DXK12Z6-W/DXC12Z6-W",
      "type": "wall",
      "btu": 12000,
      "area": "до 25 м²",
      "energy": "A++",
      "wifi": false,
      "price": 868.0,
      "oldPrice": 919.0,
      "image": "assets/img/products/mitsubishi-heavy-industries-dxk12z6-w-dxc12z6-w.webp",
      "badges": [
        "Промо"
      ],
      "description": "Стенен инверторен климатик Mitsubishi Heavy Industries DXK12Z6-W/DXC12Z6-W с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7.3, SCOP 4.4. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 23 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 23 dB",
        "Отопление до -15°C навън",
        "SEER 7.3 / SCOP 4.4",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-heavy-industries-srk35zs-w-src35zs-w",
      "brand": "Mitsubishi Heavy Industries",
      "name": "Mitsubishi Heavy SRK35ZS-W + SRC35ZS-W",
      "type": "wall",
      "btu": 12000,
      "area": "до 25 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1219.0,
      "oldPrice": null,
      "image": "assets/img/products/mitsubishi-heavy-industries-srk35zs-w-src35zs-w.webp",
      "badges": [],
      "description": "Стенен инверторен климатик Mitsubishi Heavy Industries SRK35ZS-W + SRC35ZS-W с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 8.4, SCOP 4.7. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 19 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -15°C навън",
        "SEER 8.4 / SCOP 4.7",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-heavy-industries-srk50zsp-w-src50zsp-",
      "brand": "Mitsubishi Heavy Industries",
      "name": "Mitsubishi Heavy SRK50ZSP-W + SRC50ZSP-W",
      "type": "wall",
      "btu": 18000,
      "area": "до 35 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1389.0,
      "oldPrice": 1509.0,
      "image": "assets/img/products/mitsubishi-heavy-industries-srk50zsp-w-src50zsp-.webp",
      "badges": [
        "Промо"
      ],
      "description": "Стенен инверторен климатик Mitsubishi Heavy Industries SRK50ZSP-W + SRC50ZSP-W с мощност 18 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.3, SCOP 4.2. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 24 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 24 dB",
        "Отопление до -15°C навън",
        "SEER 6.3 / SCOP 4.2",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-heavy-industries-srk71zr-w-src71zr-w-",
      "brand": "Mitsubishi Heavy Industries",
      "name": "Mitsubishi Heavy SRK71ZR-W/SRC71ZR-W DIAMOND",
      "type": "wall",
      "btu": 24000,
      "area": "до 65 м²",
      "energy": "A++",
      "wifi": false,
      "price": 2429.0,
      "oldPrice": null,
      "image": "assets/img/products/mitsubishi-heavy-industries-srk71zr-w-src71zr-w-.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Mitsubishi Heavy Industries SRK71ZR-W/SRC71ZR-W DIAMOND с мощност 24 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7.4, SCOP 4.5. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 25 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 25 dB",
        "Отопление до -15°C навън",
        "SEER 7.4 / SCOP 4.5",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "panasonic-cs-vz9ske-cu-vz9ske-heatcharge",
      "brand": "Panasonic",
      "name": "Panasonic CS-VZ9SKE/CU-VZ9SKE HEATCHARGE",
      "type": "wall",
      "btu": 9000,
      "area": "до 30 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 2811.0,
      "oldPrice": null,
      "image": "assets/img/products/panasonic-cs-vz9ske-cu-vz9ske-heatcharge.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Panasonic CS-VZ9SKE/CU-VZ9SKE HEATCHARGE с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 10.5, SCOP 6.2. Отоплява надеждно и при ниски външни температури – до -30°C. Тиха работа – вътрешното тяло работи от 18 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 18 dB",
        "Отопление до -30°C навън",
        "SEER 10.5 / SCOP 6.2",
        "Гаранция 24 месеца"
      ]
    },
    {
      "id": "panasonic-cs-z35xkew-cu-z35xke-etherea",
      "brand": "Panasonic",
      "name": "Panasonic CS-Z35XKEW/CU-Z35XKE ETHEREA",
      "type": "wall",
      "btu": 12000,
      "area": "до 30 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1124.0,
      "oldPrice": null,
      "image": "assets/img/products/panasonic-cs-z35xkew-cu-z35xke-etherea.webp",
      "badges": [],
      "description": "Стенен инверторен климатик Panasonic CS-Z35XKEW/CU-Z35XKE ETHEREA с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 9.5, SCOP 5.2. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 19 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -15°C навън",
        "SEER 9.5 / SCOP 5.2",
        "Гаранция 24 месеца"
      ]
    },
    {
      "id": "tcl-tac-09chsd-ug11v3ahb-breeze-in-2",
      "brand": "TCL",
      "name": "TCL TAC-09CHSD / UG11V3AHB BREEZE IN 2",
      "type": "wall",
      "btu": 9000,
      "area": "до 25 м²",
      "energy": "A+++",
      "wifi": true,
      "price": 699.0,
      "oldPrice": 789.0,
      "image": "assets/img/products/tcl-tac-09chsd-ug11v3ahb-breeze-in-2.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик TCL TAC-09CHSD / UG11V3AHB BREEZE IN 2 с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 19 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -25°C навън",
        "SEER 8.5 / SCOP 4.6",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "tcl-tac-12chsd-fbi-freshin",
      "brand": "TCL",
      "name": "TCL TAC-12CHSD/FBI FreshIN",
      "type": "wall",
      "btu": 12000,
      "area": "до 35 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 849.0,
      "oldPrice": 1169.0,
      "image": "assets/img/products/tcl-tac-12chsd-fbi-freshin.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик TCL TAC-12CHSD/FBI FreshIN с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 4.5. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 29 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 29 dB",
        "Отопление до -25°C навън",
        "SEER 8.5 / SCOP 4.5"
      ]
    },
    {
      "id": "tcl-tac-18chsd-ug11v3ahb-breeze-in-2",
      "brand": "TCL",
      "name": "TCL TAC-18CHSD / UG11V3AHB BREEZE IN 2",
      "type": "wall",
      "btu": 18000,
      "area": "до 50 м²",
      "energy": "A+++",
      "wifi": true,
      "price": 1099.0,
      "oldPrice": 1299.0,
      "image": "assets/img/products/tcl-tac-18chsd-ug11v3ahb-breeze-in-2.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик TCL TAC-18CHSD / UG11V3AHB BREEZE IN 2 с мощност 18 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -20°C. Тиха работа – вътрешното тяло работи от 23 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 23 dB",
        "Отопление до -20°C навън",
        "SEER 8.5 / SCOP 4.6",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "toshiba-ras-25e2kvg-nd-ras-25e2avg-nd-yukai-nord",
      "brand": "Toshiba",
      "name": "Toshiba RAS-25E2KVG-ND/RAS-25E2AVG-ND YUKAI NORDIC",
      "type": "wall",
      "btu": 9000,
      "area": "до 25 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1252.0,
      "oldPrice": null,
      "image": "assets/img/products/toshiba-ras-25e2kvg-nd-ras-25e2avg-nd-yukai-nord.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Toshiba RAS-25E2KVG-ND/RAS-25E2AVG-ND YUKAI NORDIC с мощност 9 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.5, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 19 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -25°C навън",
        "SEER 6.5 / SCOP 4.6",
        "Гаранция 60 месеца"
      ]
    },
    {
      "id": "toshiba-ras-b10e2kvg-e-ras-10e2avg-e-yukai",
      "brand": "Toshiba",
      "name": "Toshiba RAS-B10E2KVG-E/RAS-10E2AVG-E YUKAI",
      "type": "wall",
      "btu": 10000,
      "area": "до 15 м²",
      "energy": "A++",
      "wifi": false,
      "price": 845.0,
      "oldPrice": null,
      "image": "assets/img/products/toshiba-ras-b10e2kvg-e-ras-10e2avg-e-yukai.webp",
      "badges": [],
      "description": "Стенен инверторен климатик Toshiba RAS-B10E2KVG-E/RAS-10E2AVG-E YUKAI с мощност 10 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 19 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -15°C навън",
        "SEER 7 / SCOP 4.6",
        "Гаранция 60 месеца"
      ]
    },
    {
      "id": "toshiba-ras-35g3kvsg-nd-ras-35j2avsg-nd1-edge-no",
      "brand": "Toshiba",
      "name": "Toshiba RAS-35G3KVSG-ND/RAS-35J2AVSG-ND1 EDGE NORDIC",
      "type": "wall",
      "btu": 12000,
      "area": "до 30 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1916.0,
      "oldPrice": null,
      "image": "assets/img/products/toshiba-ras-35g3kvsg-nd-ras-35j2avsg-nd1-edge-no.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Toshiba RAS-35G3KVSG-ND/RAS-35J2AVSG-ND1 EDGE NORDIC с мощност 12 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 7.3, SCOP 5.1. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 19 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 19 dB",
        "Отопление до -25°C навън",
        "SEER 7.3 / SCOP 5.1",
        "Гаранция 60 месеца"
      ]
    },
    {
      "id": "toshiba-ras-13pkvpg-e-ras-13pavpg-e",
      "brand": "Toshiba",
      "name": "Toshiba RAS-13PKVPG-E/RAS-13PAVPG-E",
      "type": "wall",
      "btu": 13000,
      "area": "до 30 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1763.0,
      "oldPrice": null,
      "image": "assets/img/products/toshiba-ras-13pkvpg-e-ras-13pavpg-e.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Toshiba RAS-13PKVPG-E/RAS-13PAVPG-E с мощност 13 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 9.5, SCOP 5.1. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 20 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 20 dB",
        "Отопление до -15°C навън",
        "SEER 9.5 / SCOP 5.1",
        "Гаранция 60 месеца"
      ]
    },
    {
      "id": "toshiba-ras-18j2kvsg-e-ras-18j2avsg-e-edge",
      "brand": "Toshiba",
      "name": "Toshiba RAS-18J2KVSG-E/RAS-18J2AVSG-E EDGE",
      "type": "wall",
      "btu": 18000,
      "area": "до 45 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1533.0,
      "oldPrice": null,
      "image": "assets/img/products/toshiba-ras-18j2kvsg-e-ras-18j2avsg-e-edge.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Toshiba RAS-18J2KVSG-E/RAS-18J2AVSG-E EDGE с мощност 18 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7.8, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 26 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 26 dB",
        "Отопление до -15°C навън",
        "SEER 7.8 / SCOP 4.6",
        "Гаранция 60 месеца"
      ]
    },
    {
      "id": "toshiba-ras-b24j2kvsg-e-ras-24j2avsg-e-edge",
      "brand": "Toshiba",
      "name": "Toshiba RAS-B24J2KVSG-E/RAS-24J2AVSG-E EDGE",
      "type": "wall",
      "btu": 24000,
      "area": "до 65 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1763.0,
      "oldPrice": null,
      "image": "assets/img/products/toshiba-ras-b24j2kvsg-e-ras-24j2avsg-e-edge.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Стенен инверторен климатик Toshiba RAS-B24J2KVSG-E/RAS-24J2AVSG-E EDGE с мощност 24 000 BTU, за спални, детски стаи и хол. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.3, SCOP 4.1. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 28 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 28 dB",
        "Отопление до -15°C навън",
        "SEER 6.3 / SCOP 4.1",
        "Гаранция 60 месеца"
      ]
    },
    {
      "id": "alpin-yuka-asv-35ytzi",
      "brand": "Alpin",
      "name": "Alpin Yuka ASV-35YTZI",
      "type": "floor",
      "btu": 12000,
      "area": "до 35 м²",
      "energy": "A++",
      "wifi": true,
      "price": 949.0,
      "oldPrice": 1189.0,
      "image": "assets/img/products/alpin-yuka-asv-35ytzi.webp",
      "badges": [
        "Промо",
        "Wi-Fi"
      ],
      "description": "Подов климатик Alpin Yuka ASV-35YTZI с мощност 12 000 BTU, за монтаж ниско на стената или под прозорец – идеален за отопление. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.1, SCOP 4. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 23 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Ниво на шум от 23 dB",
        "Отопление до -15°C навън",
        "SEER 6.1 / SCOP 4",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "daikin-fvxm35a-b-rxm35a-perfera-2024-wifi",
      "brand": "Daikin",
      "name": "Daikin FVXM35A(B)/RXM35A PERFERA 2024 WiFi",
      "type": "floor",
      "btu": 12000,
      "area": "до 30 м²",
      "energy": "A++",
      "wifi": true,
      "price": 1789.0,
      "oldPrice": 1840.0,
      "image": "assets/img/products/daikin-fvxm35a-b-rxm35a-perfera-2024-wifi.webp",
      "badges": [
        "Промо",
        "Wi-Fi"
      ],
      "description": "Подов климатик Daikin FVXM35A(B)/RXM35A PERFERA 2024 WiFi с мощност 12 000 BTU, за монтаж ниско на стената или под прозорец – идеален за отопление. Висока ефективност: енергиен клас A++ при охлаждане, SEER 8.11, SCOP 4.63. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 20 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 20 dB",
        "Отопление до -15°C навън",
        "SEER 8.11 / SCOP 4.63",
        "Гаранция 36 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "fujitsu-general-aghg12kvca-aohg12kvca",
      "brand": "Fujitsu",
      "name": "Fujitsu General AGHG12KVCA/AOHG12KVCA",
      "type": "floor",
      "btu": 12000,
      "area": "до 30 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1789.0,
      "oldPrice": null,
      "image": "assets/img/products/fujitsu-general-aghg12kvca-aohg12kvca.webp",
      "badges": [],
      "description": "Подов климатик Fujitsu General AGHG12KVCA/AOHG12KVCA с мощност 12 000 BTU, за монтаж ниско на стената или под прозорец – идеален за отопление. Висока ефективност: енергиен клас A++ при охлаждане, SEER 8.2, SCOP 4.1. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 22 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 22 dB",
        "Отопление до -15°C навън",
        "SEER 8.2 / SCOP 4.1",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "gree-geh12aaxd-k6dna1a-geh-ii",
      "brand": "Gree",
      "name": "Gree GEH12AAXD-K6DNA1A GEH II",
      "type": "floor",
      "btu": 12000,
      "area": "до 23 м²",
      "energy": "A++",
      "wifi": true,
      "price": 1169.0,
      "oldPrice": 1269.0,
      "image": "assets/img/products/gree-geh12aaxd-k6dna1a-geh-ii.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Подов климатик Gree GEH12AAXD-K6DNA1A GEH II с мощност 12 000 BTU, за монтаж ниско на стената или под прозорец – идеален за отопление. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7.2, SCOP 4.1. Отоплява надеждно и при ниски външни температури – до -22°C. Тиха работа – вътрешното тяло работи от 25 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 25 dB",
        "Отопление до -22°C навън",
        "SEER 7.2 / SCOP 4.1",
        "Гаранция 24 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "hitachi-raf35rxe-rac35fxe-shirokuma",
      "brand": "Hitachi",
      "name": "Hitachi RAF35RXE/RAC35FXE SHIROKUMA",
      "type": "floor",
      "btu": 12000,
      "area": "до 35 м²",
      "energy": "A++",
      "wifi": false,
      "price": 2300.0,
      "oldPrice": null,
      "image": "assets/img/products/hitachi-raf35rxe-rac35fxe-shirokuma.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Подов климатик Hitachi RAF35RXE/RAC35FXE SHIROKUMA с мощност 12 000 BTU, за монтаж ниско на стената или под прозорец – идеален за отопление. Висока ефективност: енергиен клас A++ при охлаждане, SEER 8.2, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -20°C. Тиха работа – вътрешното тяло работи от 20 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 20 dB",
        "Отопление до -20°C навън",
        "SEER 8.2 / SCOP 4.6",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "miota-rac-sf35a-rxs-pe35a",
      "brand": "MIOTA",
      "name": "MIOTA RAC-SF35A / RXS-PE35A",
      "type": "floor",
      "btu": 12000,
      "area": "до 35 м²",
      "energy": "A+++",
      "wifi": true,
      "price": 1199.0,
      "oldPrice": 1330.0,
      "image": "assets/img/products/miota-rac-sf35a-rxs-pe35a.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Подов климатик MIOTA RAC-SF35A / RXS-PE35A с мощност 12 000 BTU, за монтаж ниско на стената или под прозорец – идеален за отопление. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -30°C. Тиха работа – вътрешното тяло работи от 20 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Ниво на шум от 20 dB",
        "Отопление до -30°C навън",
        "SEER 8.5 / SCOP 4.6",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "midea-mfa2u-12hrfnx",
      "brand": "Midea",
      "name": "Midea MFA2U-12HRFNX",
      "type": "floor",
      "btu": 12000,
      "area": "до 35 м²",
      "energy": "A++",
      "wifi": true,
      "price": 1229.0,
      "oldPrice": 1399.0,
      "image": "assets/img/products/midea-mfa2u-12hrfnx.webp",
      "badges": [
        "Промо",
        "Wi-Fi"
      ],
      "description": "Подов климатик Midea MFA2U-12HRFNX с мощност 12 000 BTU, за монтаж ниско на стената или под прозорец – идеален за отопление. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7.3, SCOP 4. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 54 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 54 dB",
        "Отопление до -15°C навън",
        "SEER 7.3 / SCOP 4",
        "Гаранция 60 месеца",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "midea-mue-36hrfnx-qrd0w-mod30u-36hfn8-qrd0w",
      "brand": "Midea",
      "name": "Midea MUE-36HRFNX-QRD0W/MOD30U-36HFN8-QRD0W",
      "type": "floor",
      "btu": 36000,
      "area": "до 70 м²",
      "energy": "A++",
      "wifi": false,
      "price": 2428.0,
      "oldPrice": null,
      "image": "assets/img/products/midea-mue-36hrfnx-qrd0w-mod30u-36hfn8-qrd0w.webp",
      "badges": [],
      "description": "Подов климатик Midea MUE-36HRFNX-QRD0W/MOD30U-36HFN8-QRD0W с мощност 36 000 BTU, за монтаж ниско на стената или под прозорец – идеален за отопление. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.2, SCOP 4.1. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 45 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 45 dB",
        "Отопление до -15°C навън",
        "SEER 6.2 / SCOP 4.1",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-electric-mfz-kt50vg-suz-m50va",
      "brand": "Mitsubishi Electric",
      "name": "Mitsubishi Electric MFZ-KT50VG/SUZ-M50VA",
      "type": "floor",
      "btu": 18000,
      "area": "до 45 м²",
      "energy": "A++",
      "wifi": false,
      "price": 3599.0,
      "oldPrice": null,
      "image": "assets/img/products/mitsubishi-electric-mfz-kt50vg-suz-m50va.webp",
      "badges": [],
      "description": "Подов климатик Mitsubishi Electric MFZ-KT50VG/SUZ-M50VA с мощност 18 000 BTU, за монтаж ниско на стената или под прозорец – идеален за отопление. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.8, SCOP 4.2. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 28 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 28 dB",
        "Отопление до -15°C навън",
        "SEER 6.8 / SCOP 4.2",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-heavy-industries-srf35zs-w-src35zs-w",
      "brand": "Mitsubishi Heavy Industries",
      "name": "Mitsubishi Heavy SRF35ZS-W + SRC35ZS-W - подово тяло",
      "type": "floor",
      "btu": 12000,
      "area": "до 28 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1599.0,
      "oldPrice": 1899.0,
      "image": "assets/img/products/mitsubishi-heavy-industries-srf35zs-w-src35zs-w.webp",
      "badges": [
        "Промо"
      ],
      "description": "Подов климатик Mitsubishi Heavy Industries SRF35ZS-W + SRC35ZS-W - подово тяло с мощност 12 000 BTU, за монтаж ниско на стената или под прозорец – идеален за отопление. Висока ефективност: енергиен клас A++ при охлаждане, SEER 8.1, SCOP 4.7. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 50 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 50 dB",
        "Отопление до -15°C навън",
        "SEER 8.1 / SCOP 4.7",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "alpin-3fmo80hd",
      "brand": "Alpin",
      "name": "Alpin 3FMO80HD",
      "type": "multi",
      "btu": 27000,
      "area": "до 85 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 839.0,
      "oldPrice": 979.0,
      "image": "assets/img/products/alpin-3fmo80hd.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Мултисплит система Alpin 3FMO80HD с мощност 27 000 BTU, за няколко помещения с едно външно тяло – по-малко тела по фасадата. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 67 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент ALPIN 2FMO52HD РАБОТИ С ХЛАДИЛЕН АГЕНТ R32, КОЙТО СЕ ИЗПОЛЗВА ШИРОКО ПРИ СЪВРЕМЕННИТЕ КЛИМАТИЧНИ СИСТЕМИ. ТОЙ ПОДПОМАГА ЕФЕКТИВНАТА РАБОТА НА СИСТЕМАТА И Е ПОСЪВРЕМЕННО РЕШЕНИЕ СПРЯМО ПОСТАРИТЕ ХЛАДИЛНИ АГЕНТИ.",
        "Ниво на шум от 67 dB",
        "Отопление до -25°C навън",
        "SEER 8.5 / SCOP 4.6"
      ]
    },
    {
      "id": "alpin-4fmo90hd",
      "brand": "Alpin",
      "name": "Alpin 4FMO90HD",
      "type": "multi",
      "btu": 30000,
      "area": "до 85 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1369.0,
      "oldPrice": 1609.0,
      "image": "assets/img/products/alpin-4fmo90hd.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Мултисплит система Alpin 4FMO90HD с мощност 30 000 BTU, за няколко помещения с едно външно тяло – по-малко тела по фасадата. Висока ефективност: енергиен клас A+++ при охлаждане, SEER 8.5, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -25°C. Тиха работа – вътрешното тяло работи от 70 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент ALPIN 4FMO90HD РАБОТИ С ХЛАДИЛЕН АГЕНТ R32, КОЙТО СЕ ИЗПОЛЗВА ШИРОКО ПРИ СЪВРЕМЕННИТЕ КЛИМАТИЧНИ СИСТЕМИ. ТОЙ ПОДПОМАГА ЕФЕКТИВНАТА РАБОТА НА СИСТЕМАТА И Е ПОСЪВРЕМЕННО РЕШЕНИЕ СПРЯМО ПОСТАРИТЕ ХЛАДИЛНИ АГЕНТИ.",
        "Ниво на шум от 70 dB",
        "Отопление до -25°C навън",
        "SEER 8.5 / SCOP 4.6"
      ]
    },
    {
      "id": "gree-gwhd",
      "brand": "Gree",
      "name": "Gree GWHD",
      "type": "multi",
      "btu": 36000,
      "area": "до 100 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1859.0,
      "oldPrice": 1974.0,
      "image": "assets/img/products/gree-gwhd.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Мултисплит система Gree GWHD с мощност 36 000 BTU, за няколко помещения с едно външно тяло – по-малко тела по фасадата. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7.2, SCOP 4. Отоплява надеждно и при ниски външни температури – до -20°C. Тиха работа – вътрешното тяло работи от 57 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 57 dB",
        "Отопление до -20°C навън",
        "SEER 7.2 / SCOP 4"
      ]
    },
    {
      "id": "gree-gwhd-82",
      "brand": "Gree",
      "name": "Gree GWHD",
      "type": "multi",
      "btu": 42000,
      "area": "до 120 м²",
      "energy": "A",
      "wifi": false,
      "price": 1949.0,
      "oldPrice": 2076.0,
      "image": "assets/img/products/gree-gwhd-82.webp",
      "badges": [
        "Промо",
        "Хиперинвертор"
      ],
      "description": "Мултисплит система Gree GWHD с мощност 42 000 BTU, за няколко помещения с едно външно тяло – по-малко тела по фасадата. Висока ефективност: енергиен клас A при охлаждане, SEER 7.2, SCOP 4.2. Отоплява надеждно и при ниски външни температури – до -20°C. Тиха работа – вътрешното тяло работи от 55 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 55 dB",
        "Отопление до -20°C навън",
        "SEER 7.2 / SCOP 4.2"
      ]
    },
    {
      "id": "midea-m4oe-28hfn8-q",
      "brand": "Midea",
      "name": "Midea M4OE-28HFN8-Q",
      "type": "multi",
      "btu": 28000,
      "area": "до 85 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1299.0,
      "oldPrice": null,
      "image": "assets/img/products/midea-m4oe-28hfn8-q.webp",
      "badges": [],
      "description": "Мултисплит система Midea M4OE-28HFN8-Q с мощност 28 000 BTU, за няколко помещения с едно външно тяло – по-малко тела по фасадата. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.1, SCOP 3.8. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 61 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 61 dB",
        "Отопление до -15°C навън",
        "SEER 6.1 / SCOP 3.8"
      ]
    },
    {
      "id": "mitsubishi-heavy-industries-scm60zs-w",
      "brand": "Mitsubishi Heavy Industries",
      "name": "Mitsubishi Heavy SCM60ZS-W (външно тяло)",
      "type": "multi",
      "btu": 21000,
      "area": "до 60 м²",
      "energy": "A+++",
      "wifi": false,
      "price": 1949.0,
      "oldPrice": null,
      "image": "assets/img/products/mitsubishi-heavy-industries-scm60zs-w.webp",
      "badges": [],
      "description": "Мултисплит система Mitsubishi Heavy Industries SCM60ZS-W (външно тяло) с мощност 21 000 BTU, за няколко помещения с едно външно тяло – по-малко тела по фасадата. Висока ефективност: енергиен клас A+++ при охлаждане. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 50 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 50 dB",
        "Отопление до -15°C навън"
      ]
    },
    {
      "id": "mitsubishi-heavy-industries-scm71zs-w",
      "brand": "Mitsubishi Heavy Industries",
      "name": "Mitsubishi Heavy SCM71ZS-W",
      "type": "multi",
      "btu": 24000,
      "area": "до 70 м²",
      "energy": "A++",
      "wifi": false,
      "price": 2309.0,
      "oldPrice": null,
      "image": "assets/img/products/mitsubishi-heavy-industries-scm71zs-w.webp",
      "badges": [],
      "description": "Мултисплит система Mitsubishi Heavy Industries SCM71ZS-W с мощност 24 000 BTU, за няколко помещения с едно външно тяло – по-малко тела по фасадата. Висока ефективност: енергиен клас A++ при охлаждане. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 52 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 52 dB",
        "Отопление до -15°C навън"
      ]
    },
    {
      "id": "daikin-ffa35a9-rxm35a9",
      "brand": "Daikin",
      "name": "Daikin FFA35A9 + RXM35A9",
      "type": "cassette",
      "btu": 12000,
      "area": "до 26 м²",
      "energy": "A++",
      "wifi": false,
      "price": null,
      "oldPrice": null,
      "image": "assets/img/products/daikin-ffa35a9-rxm35a9.webp",
      "badges": [],
      "description": "Касетъчен климатик Daikin FFA35A9 + RXM35A9 с мощност 12 000 BTU, за вграждане в окачен таван – подходящ за офиси, заведения и хотели. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.32, SCOP 4.1. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 25 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R410A / R32",
        "Ниво на шум от 25 dB",
        "Отопление до -15°C навън",
        "SEER 6.32 / SCOP 4.1",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "gree-gud71t1-gud71w1-nha-s",
      "brand": "Gree",
      "name": "Gree GUD71T1 + GUD71W1/NhA-S",
      "type": "cassette",
      "btu": 24000,
      "area": "до 49 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1686.0,
      "oldPrice": null,
      "image": "assets/img/products/gree-gud71t1-gud71w1-nha-s.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Касетъчен климатик Gree GUD71T1 + GUD71W1/NhA-S с мощност 24 000 BTU, за вграждане в окачен таван – подходящ за офиси, заведения и хотели. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.7, SCOP 4.3. Отоплява надеждно и при ниски външни температури – до -20°C. Тиха работа – вътрешното тяло работи от 34 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 34 dB",
        "Отопление до -20°C навън",
        "SEER 6.7 / SCOP 4.3",
        "Гаранция 24 месеца"
      ]
    },
    {
      "id": "lg-ct12f-nr0-uua1-ul0",
      "brand": "LG",
      "name": "LG CT12F.NR0 + UUA1.UL0",
      "type": "cassette",
      "btu": 12000,
      "area": "до 25 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1646.68,
      "oldPrice": null,
      "image": "assets/img/products/lg-ct12f-nr0-uua1-ul0.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Касетъчен климатик LG CT12F.NR0 + UUA1.UL0 с мощност 12 000 BTU, за вграждане в окачен таван – подходящ за офиси, заведения и хотели. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.7, SCOP 4. Отоплява надеждно и при ниски външни температури – до -20°C. Тиха работа – вътрешното тяло работи от 32 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 32 dB",
        "Отопление до -20°C навън",
        "SEER 6.7 / SCOP 4",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "mitsubishi-electric-slz-m25fa-suz-m25va",
      "brand": "Mitsubishi Electric",
      "name": "Mitsubishi Electric SLZ-M25FA + SUZ-M25VA",
      "type": "cassette",
      "btu": 9000,
      "area": "до 20 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1819.0,
      "oldPrice": null,
      "image": "assets/img/products/mitsubishi-electric-slz-m25fa-suz-m25va.webp",
      "badges": [],
      "description": "Касетъчен климатик Mitsubishi Electric SLZ-M25FA + SUZ-M25VA с мощност 9 000 BTU, за вграждане в окачен таван – подходящ за офиси, заведения и хотели. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.3, SCOP 4.3. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 25 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R410A",
        "Ниво на шум от 25 dB",
        "Отопление до -15°C навън",
        "SEER 6.3 / SCOP 4.3",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "nippon-ncd-36hrfnx-q-nod30u-36hfn8-q",
      "brand": "Nippon",
      "name": "Nippon NCD-36HRFNX-Q + NOD30U-36HFN8-Q",
      "type": "cassette",
      "btu": 36000,
      "area": "до 70 м²",
      "energy": "A++",
      "wifi": false,
      "price": 1885.51,
      "oldPrice": null,
      "image": "assets/img/products/nippon-ncd-36hrfnx-q-nod30u-36hfn8-q.webp",
      "badges": [],
      "description": "Касетъчен климатик Nippon NCD-36HRFNX-Q + NOD30U-36HFN8-Q с мощност 36 000 BTU, за вграждане в окачен таван – подходящ за офиси, заведения и хотели. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.1, SCOP 4. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 46 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 46 dB",
        "Отопление до -15°C навън",
        "SEER 6.1 / SCOP 4",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "toshiba-rav-hm561utp-e-rav-gm561atp-e",
      "brand": "Toshiba",
      "name": "Toshiba RAV-HM561UTP-E + RAV-GM561ATP-E",
      "type": "cassette",
      "btu": 18000,
      "area": "до 33 м²",
      "energy": "A++",
      "wifi": false,
      "price": 2556.46,
      "oldPrice": null,
      "image": "assets/img/products/toshiba-rav-hm561utp-e-rav-gm561atp-e.webp",
      "badges": [],
      "description": "Касетъчен климатик Toshiba RAV-HM561UTP-E + RAV-GM561ATP-E с мощност 18 000 BTU, за вграждане в окачен таван – подходящ за офиси, заведения и хотели. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.34, SCOP 4.6. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 28 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 28 dB",
        "Отопление до -15°C навън",
        "SEER 6.34 / SCOP 4.6",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "daikin-fba71a9-rzasg71mv1",
      "brand": "Daikin",
      "name": "Daikin FBA71A9 + RZASG71MV1",
      "type": "duct",
      "btu": 24000,
      "area": "до 46 м²",
      "energy": "A+",
      "wifi": false,
      "price": null,
      "oldPrice": null,
      "image": "assets/img/products/daikin-fba71a9-rzasg71mv1.webp",
      "badges": [],
      "description": "Канален климатик Daikin FBA71A9 + RZASG71MV1 с мощност 24 000 BTU, за скрит монтаж в окачен таван с разпределение по въздуховоди. Висока ефективност: енергиен клас A+ при охлаждане, SEER 5.84, SCOP 4.1. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 25 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R410A / R32",
        "Ниво на шум от 25 dB",
        "Отопление до -15°C навън",
        "SEER 5.84 / SCOP 4.1",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "gree-gud100ph1-gud100w1-nha-s",
      "brand": "Gree",
      "name": "Gree GUD100PH1 + GUD100W1/NhA-S",
      "type": "duct",
      "btu": 34000,
      "area": "до 74 м²",
      "energy": "A++",
      "wifi": false,
      "price": 2154.01,
      "oldPrice": null,
      "image": "assets/img/products/gree-gud100ph1-gud100w1-nha-s.webp",
      "badges": [
        "Хиперинвертор"
      ],
      "description": "Канален климатик Gree GUD100PH1 + GUD100W1/NhA-S с мощност 34 000 BTU, за скрит монтаж в окачен таван с разпределение по въздуховоди. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.4, SCOP 4.2. Отоплява надеждно и при ниски външни температури – до -20°C. Тиха работа – вътрешното тяло работи от 36 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 36 dB",
        "Отопление до -20°C навън",
        "SEER 6.4 / SCOP 4.2",
        "Гаранция 24 месеца"
      ]
    },
    {
      "id": "mitsubishi-electric-sez-m25da-suz-m25va",
      "brand": "Mitsubishi Electric",
      "name": "Mitsubishi Electric SEZ-M25DA + SUZ-M25VA",
      "type": "duct",
      "btu": 9000,
      "area": "до 20 м²",
      "energy": "A",
      "wifi": false,
      "price": 1789.0,
      "oldPrice": null,
      "image": "assets/img/products/mitsubishi-electric-sez-m25da-suz-m25va.webp",
      "badges": [],
      "description": "Канален климатик Mitsubishi Electric SEZ-M25DA + SUZ-M25VA с мощност 9 000 BTU, за скрит монтаж в окачен таван с разпределение по въздуховоди. Висока ефективност: енергиен клас A при охлаждане, SEER 5.3, SCOP 3.8. Тиха работа – вътрешното тяло работи от 22 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R410A",
        "Ниво на шум от 22 dB",
        "Отопление до -10°C навън",
        "SEER 5.3 / SCOP 3.8",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "nippon-ntiu-12hwfnx-q-nob30u-12hfn8-q",
      "brand": "Nippon",
      "name": "Nippon NTIU-12HWFNX-Q + NOB30U-12HFN8-Q",
      "type": "duct",
      "btu": 12000,
      "area": "до 25 м²",
      "energy": "A++",
      "wifi": false,
      "price": 985.0,
      "oldPrice": null,
      "image": "assets/img/products/nippon-ntiu-12hwfnx-q-nob30u-12hfn8-q.webp",
      "badges": [],
      "description": "Канален климатик Nippon NTIU-12HWFNX-Q + NOB30U-12HFN8-Q с мощност 12 000 BTU, за скрит монтаж в окачен таван с разпределение по въздуховоди. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.5, SCOP 4. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 26 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 26 dB",
        "Отопление до -15°C навън",
        "SEER 6.5 / SCOP 4",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "toshiba-rav-hm561btp-e-rav-gm561atp-e",
      "brand": "Toshiba",
      "name": "Toshiba RAV-HM561BTP-E + RAV-GM561ATP-E",
      "type": "duct",
      "btu": 18000,
      "area": "до 33 м²",
      "energy": "A",
      "wifi": false,
      "price": 2505.33,
      "oldPrice": null,
      "image": "assets/img/products/toshiba-rav-hm561btp-e-rav-gm561atp-e.webp",
      "badges": [],
      "description": "Канален климатик Toshiba RAV-HM561BTP-E + RAV-GM561ATP-E с мощност 18 000 BTU, за скрит монтаж в окачен таван с разпределение по въздуховоди. Висока ефективност: енергиен клас A при охлаждане, SEER 5.28, SCOP 4.08. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 25 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 25 dB",
        "Отопление до -15°C навън",
        "SEER 5.28 / SCOP 4.08",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "alpin-asf-110ch5",
      "brand": "Alpin",
      "name": "Alpin ASF-110CH5",
      "type": "column",
      "btu": 36000,
      "area": "до 100 м²",
      "energy": "A++",
      "wifi": true,
      "price": 1699.0,
      "oldPrice": 1889.0,
      "image": "assets/img/products/alpin-asf-110ch5.webp",
      "badges": [
        "Промо",
        "Wi-Fi"
      ],
      "description": "Колонен климатик Alpin ASF-110CH5 с мощност 36 000 BTU, за големи пространства – магазини, ресторанти, фоайета и зали. Висока ефективност: енергиен клас A++ при охлаждане, SEER 7, SCOP 4. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 47 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 47 dB",
        "Отопление до -15°C навън",
        "SEER 7 / SCOP 4",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "gree-t-fresh-gvh48alxk-m6dnc7a",
      "brand": "Gree",
      "name": "Gree T-FRESH GVH48ALXK-M6DNC7A",
      "type": "column",
      "btu": 48000,
      "area": "до 140 м²",
      "energy": "A++",
      "wifi": true,
      "price": 2849.0,
      "oldPrice": 3239.0,
      "image": "assets/img/products/gree-t-fresh-gvh48alxk-m6dnc7a.webp",
      "badges": [
        "Промо",
        "Wi-Fi"
      ],
      "description": "Колонен климатик Gree T-FRESH GVH48ALXK-M6DNC7A с мощност 48 000 BTU, за големи пространства – магазини, ресторанти, фоайета и зали. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.1, SCOP 4. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 51 dB. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 51 dB",
        "Отопление до -15°C навън",
        "SEER 6.1 / SCOP 4",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "midea-mfya400-24hrfn8-qrd0w",
      "brand": "Midea",
      "name": "Midea MFYA400-24HRFN8-QRD0W",
      "type": "column",
      "btu": 24000,
      "area": "до 70 м²",
      "energy": "A++",
      "wifi": true,
      "price": 1759.0,
      "oldPrice": 1969.0,
      "image": "assets/img/products/midea-mfya400-24hrfn8-qrd0w.webp",
      "badges": [
        "Промо",
        "Wi-Fi"
      ],
      "description": "Колонен климатик Midea MFYA400-24HRFN8-QRD0W с мощност 24 000 BTU, за големи пространства – магазини, ресторанти, фоайета и зали. Висока ефективност: енергиен клас A++ при охлаждане, SEER 6.5, SCOP 4.2. Управление от телефона чрез Wi-Fi – включвате климатика още преди да се приберете. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "SEER 6.5 / SCOP 4.2",
        "Wi-Fi управление"
      ]
    },
    {
      "id": "midea-mfga-55fn1rd0-mou-55fn1-rd0",
      "brand": "Midea",
      "name": "Midea MFGA-55FN1RD0 – MOU-55FN1-RD0",
      "type": "column",
      "btu": 55000,
      "area": "до 105 м²",
      "energy": "A+",
      "wifi": false,
      "price": 3425.0,
      "oldPrice": null,
      "image": "assets/img/products/midea-mfga-55fn1rd0-mou-55fn1-rd0.webp",
      "badges": [],
      "description": "Колонен климатик Midea MFGA-55FN1RD0 – MOU-55FN1-RD0 с мощност 55 000 BTU, за големи пространства – магазини, ресторанти, фоайета и зали. Висока ефективност: енергиен клас A+ при охлаждане, SEER 5.6, SCOP 4. Отоплява надеждно и при ниски външни температури – до -15°C. Тиха работа – вътрешното тяло работи от 47 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R410A",
        "Ниво на шум от 47 dB",
        "Отопление до -15°C навън",
        "SEER 5.6 / SCOP 4",
        "Гаранция 36 месеца"
      ]
    },
    {
      "id": "tcl-tcl-tac-12chpb-mz",
      "brand": "TCL",
      "name": "TCL TAC-12CHPB/MZ",
      "type": "mobile",
      "btu": 12000,
      "area": "до 35 м²",
      "energy": "A+",
      "wifi": false,
      "price": 459.0,
      "oldPrice": 510.0,
      "image": "assets/img/products/tcl-tcl-tac-12chpb-mz.webp",
      "badges": [
        "Промо"
      ],
      "description": "Мобилен климатик TCL Мобилен климатик TCL TAC-12CHPB/MZ с мощност 12 000 BTU, без монтаж – просто го включвате и местите от стая в стая. Висока ефективност: енергиен клас A+ при охлаждане, SEER 2.8, SCOP 2.6. Тиха работа – вътрешното тяло работи от 65 dB. Предлагаме доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      "features": [
        "Хладилен агент R32",
        "Ниво на шум от 65 dB",
        "SEER 2.8 / SCOP 2.6"
      ]
    }
  ],

  towns: [
    "гр. Обзор", "с. Баня", "с. Емона", "к.к. Елените", "гр. Свети Влас",
    "к.к. Слънчев бряг", "гр. Несебър", "с. Равда", "гр. Ахелой", "гр. Поморие",
    "гр. Каблешково", "с. Кошарица", "с. Тънково", "с. Оризаре", "с. Гюльовца",
    "с. Горица", "с. Паницово", "с. Раковсково", "с. Козница", "с. Медово",
    "с. Каменар", "с. Александрово", "с. Порой", "с. Гълъбец", "с. Страцин"
  ]
};
