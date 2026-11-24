/* =====================================================================
   ДАННИ НА САЙТА – редактирайте само този файл.
   Текстовете могат да са низ (еднакъв за всички езици) или обект
   { bg: "...", en: "...", ru: "..." }.

   ПРОДУКТИ (products) – по един ред на модел:
     id        – уникален идентификатор (латиница, без интервали)
     brand     – марка
     name      – модел / заглавие
     type      – "wall" | "floor" | "multi" | "cassette" | "duct" | "column" | "mobile"
     btu       – мощност в BTU
     area      – препоръчана площ в м² (число)
     energy    – енергиен клас при охлаждане, напр. "A++"
     wifi      – true / false
     image     – "assets/img/products/<id>.webp" или "" → икона
     badges    – етикети: "leader" (лидер на продажбите), "hyper" (хиперинвертор),
                 "new" (ново), "install" (монтаж включен) или произволен текст
     featured  – true → показва се първи в каталога
     specs     – { refrigerant, noise (dB), heatMin (°C), seer, scop, warranty (месеци) }
     description – (по желание) собствен текст; иначе се генерира от specs

   ГАЛЕРИЯ (gallery) – снимки от изпълнени обекти:
     { image: "assets/img/gallery/obekt-1.jpg",
       title: { bg: "Монтаж на стенен климатик", en: "...", ru: "..." },
       place: "гр. Несебър" }
   ===================================================================== */

window.SITE_DATA = {
  services: [
    {
      "icon": "install",
      "title": {
        "bg": "Монтаж на климатици",
        "en": "Air conditioner installation",
        "ru": "Монтаж кондиционеров"
      },
      "text": {
        "bg": "Професионален монтаж на стенни, подови, касетъчни и мултисплит системи с гаранция.",
        "en": "Professional installation of wall, floor, cassette and multi-split systems with warranty.",
        "ru": "Профессиональный монтаж настенных, напольных, кассетных и мульти-сплит систем с гарантией."
      }
    },
    {
      "icon": "clean",
      "title": {
        "bg": "Профилактика и почистване",
        "en": "Maintenance and cleaning",
        "ru": "Профилактика и чистка"
      },
      "text": {
        "bg": "Дълбоко почистване, дезинфекция на вътрешно и външно тяло, проверка на налягането.",
        "en": "Deep cleaning and disinfection of indoor and outdoor units, pressure check.",
        "ru": "Глубокая чистка и дезинфекция внутреннего и внешнего блока, проверка давления."
      }
    },
    {
      "icon": "repair",
      "title": {
        "bg": "Диагностика и ремонт",
        "en": "Diagnostics and repair",
        "ru": "Диагностика и ремонт"
      },
      "text": {
        "bg": "Откриваме и отстраняваме повреди бързо. Работим с всички масови марки.",
        "en": "We find and fix faults quickly. We service all major brands.",
        "ru": "Быстро находим и устраняем неисправности. Работаем со всеми популярными марками."
      }
    },
    {
      "icon": "freon",
      "title": {
        "bg": "Зареждане с фреон",
        "en": "Refrigerant recharge",
        "ru": "Заправка фреоном"
      },
      "text": {
        "bg": "Проверка за течове и дозареждане с хладилен агент R32 / R410A.",
        "en": "Leak check and recharge with R32 / R410A refrigerant.",
        "ru": "Проверка на утечки и дозаправка хладагентом R32 / R410A."
      }
    },
    {
      "icon": "remove",
      "title": {
        "bg": "Демонтаж и преместване",
        "en": "Removal and relocation",
        "ru": "Демонтаж и перенос"
      },
      "text": {
        "bg": "Внимателен демонтаж и повторен монтаж на климатика на ново място.",
        "en": "Careful removal and reinstallation of your unit in a new place.",
        "ru": "Аккуратный демонтаж и повторный монтаж кондиционера на новом месте."
      }
    },
    {
      "icon": "hotel",
      "title": {
        "bg": "Обслужване на хотели",
        "en": "Hotel maintenance",
        "ru": "Обслуживание отелей"
      },
      "text": {
        "bg": "Абонаментна поддръжка и приоритетна реакция за хотели, апартаменти и заведения.",
        "en": "Contract maintenance and priority response for hotels, apartments and restaurants.",
        "ru": "Абонентское обслуживание и приоритетный выезд для отелей, апартаментов и заведений."
      }
    }
  ],

  gallery: [],

  products: [
    {"id": "hyundai-winterpack-12", "brand": "Hyundai", "name": "Hyundai Winterpack 12 000 BTU", "type": "wall", "btu": 12000, "area": 35, "wifi": false, "image": "assets/img/products/hyundai-winterpack-12.webp", "badges": ["leader", "hyper"], "featured": true, "specs": {"heatMin": -20, "warranty": 60}},
    {"id": "alpin-asw-25afa-alpha", "brand": "Alpin", "name": "Alpin ASW-25AFA ALPHA", "type": "wall", "btu": 9000, "area": 25, "energy": "A++", "wifi": false, "image": "assets/img/products/alpin-asw-25afa-alpha.webp", "badges": ["hyper"], "specs": {"noise": 27, "heatMin": -32, "seer": 6.5, "scop": 4.0}},
    {"id": "alpin-asw-35ktn-nordic", "brand": "Alpin", "name": "Alpin ASW-35KTN Nordic", "type": "wall", "btu": 12000, "area": 25, "energy": "A+++", "wifi": true, "image": "assets/img/products/alpin-asw-35ktn-nordic.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 22, "heatMin": -25, "seer": 8.5, "scop": 4.6, "warranty": 36}},
    {"id": "alpin-asw-35ete", "brand": "Alpin", "name": "Alpin ASW-35ETE", "type": "wall", "btu": 12000, "area": 25, "energy": "A++", "wifi": true, "image": "assets/img/products/alpin-asw-35ete.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 22, "heatMin": -25, "seer": 6.1, "scop": 4.0, "warranty": 36}},
    {"id": "alpin-asw-50pam-comfort", "brand": "Alpin", "name": "Alpin ASW-50PAM Comfort", "type": "wall", "btu": 18000, "area": 50, "energy": "A+++", "wifi": true, "image": "assets/img/products/alpin-asw-50pam-comfort.webp", "badges": ["hyper"], "specs": {"noise": 24, "heatMin": -25, "seer": 8.7, "scop": 4.6}},
    {"id": "daikin-emura-3-ftxj20ab-rxj20a", "brand": "Daikin", "name": "Daikin Emura 3 FTXJ20AB + RXJ20A", "type": "wall", "btu": 7000, "area": 15, "energy": "A+++", "wifi": false, "image": "assets/img/products/daikin-emura-3-ftxj20ab-rxj20a.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -20, "seer": 8.75, "scop": 5.15, "warranty": 36}},
    {"id": "daikin-ftxa25aw-rxa25a-white-stylish", "brand": "Daikin", "name": "Daikin FTXA25AW/RXA25A WHITE STYLISH", "type": "wall", "btu": 9000, "area": 20, "energy": "A+++", "wifi": false, "image": "assets/img/products/daikin-ftxa25aw-rxa25a-white-stylish.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -15, "seer": 8.74, "scop": 5.15, "warranty": 36}},
    {"id": "daikin-ftxc25e-rxc25e-sensira-2025-wifi", "brand": "Daikin", "name": "Daikin FTXC25E/RXC25E SENSIRA 2025 WiFi", "type": "wall", "btu": 9000, "area": 20, "energy": "A++", "wifi": true, "image": "assets/img/products/daikin-ftxc25e-rxc25e-sensira-2025-wifi.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 21, "heatMin": -15, "seer": 6.84, "scop": 4.45, "warranty": 36}},
    {"id": "daikin-ftxa35bb-rxa35a-black-stylish", "brand": "Daikin", "name": "Daikin FTXA35BB/RXA35A BLACK STYLISH", "type": "wall", "btu": 12000, "area": 30, "energy": "A+++", "wifi": false, "image": "assets/img/products/daikin-ftxa35bb-rxa35a-black-stylish.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -15, "seer": 8.73, "scop": 5.15, "warranty": 36}},
    {"id": "daikin-ftxa35bt-rxa35a-blackwood-stylish", "brand": "Daikin", "name": "Daikin FTXA35BT/RXA35A BLACKWOOD STYLISH", "type": "wall", "btu": 12000, "area": 30, "energy": "A+++", "wifi": false, "image": "assets/img/products/daikin-ftxa35bt-rxa35a-blackwood-stylish.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -15, "seer": 8.73, "scop": 5.15, "warranty": 36}},
    {"id": "daikin-sensira-ftxf35e-rxf35e", "brand": "Daikin", "name": "Daikin Sensira FTXF35E + RXF35E", "type": "wall", "btu": 12000, "area": 35, "energy": "A++", "wifi": false, "image": "assets/img/products/daikin-sensira-ftxf35e-rxf35e.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 21, "heatMin": -15, "seer": 6.5, "scop": 4.2}},
    {"id": "daikin-ftxa50bs-rxa50b-silver-stylish", "brand": "Daikin", "name": "Daikin FTXA50BS/RXA50B SILVER STYLISH", "type": "wall", "btu": 18000, "area": 40, "energy": "A++", "wifi": false, "image": "assets/img/products/daikin-ftxa50bs-rxa50b-silver-stylish.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 24, "heatMin": -15, "seer": 7.33, "scop": 4.6, "warranty": 36}},
    {"id": "daikin-sensira-ftxf50f-rxf50f", "brand": "Daikin", "name": "Daikin Sensira FTXF50F + RXF50F", "type": "wall", "btu": 18000, "area": 37, "energy": "A++", "wifi": false, "image": "assets/img/products/daikin-sensira-ftxf50f-rxf50f.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 31, "heatMin": -15, "seer": 6.21, "scop": 4.06, "warranty": 36}},
    {"id": "daikin-sensira-ftxc71e-rxc71e", "brand": "Daikin", "name": "Daikin Sensira FTXC71E + RXC71E", "type": "wall", "btu": 24000, "area": 50, "energy": "A", "wifi": false, "image": "assets/img/products/daikin-sensira-ftxc71e-rxc71e.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 31, "heatMin": -15, "seer": 5.3, "scop": 3.81, "warranty": 36}},
    {"id": "fuji-electric-rsg09kete-b-rog09keta", "brand": "Fuji Electric", "name": "Fuji Electric RSG09KETE-B/ROG09KETA", "type": "wall", "btu": 9000, "area": 25, "energy": "A++", "wifi": false, "image": "assets/img/products/fuji-electric-rsg09kete-b-rog09keta.webp", "badges": [], "specs": {"refrigerant": "R32", "heatMin": -15, "seer": 7.4, "scop": 4.1}},
    {"id": "fuji-electric-rsg12kmcen-rog12kmcen-nordic", "brand": "Fuji Electric", "name": "Fuji Electric RSG12KMCEN/ROG12KMCEN Nordic", "type": "wall", "btu": 12000, "area": 35, "energy": "A++", "wifi": false, "image": "assets/img/products/fuji-electric-rsg12kmcen-rog12kmcen-nordic.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 20, "heatMin": -25, "seer": 7.5, "scop": 4.6}},
    {"id": "fujitsu-airstage-aseh09kjcal-aoeh09kjca", "brand": "Fujitsu", "name": "Fujitsu Airstage ASEH09KJCAL/AOEH09KJCA", "type": "wall", "btu": 9000, "area": 25, "energy": "A++", "wifi": false, "image": "assets/img/products/fujitsu-airstage-aseh09kjcal-aoeh09kjca.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "heatMin": -20, "seer": 9.2, "scop": 5.11}},
    {"id": "fujitsu-airstage-aseh09knca", "brand": "Fujitsu", "name": "Fujitsu Airstage ASEH09KNCA", "type": "wall", "btu": 9000, "area": 25, "energy": "A++", "wifi": true, "image": "assets/img/products/fujitsu-airstage-aseh09knca.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 20, "heatMin": -15, "seer": 7.4, "scop": 4.4}},
    {"id": "fujitsu-aseh12kgtg-aoeh12kgcg", "brand": "Fujitsu", "name": "Fujitsu ASEH12KGTG/AOEH12KGCG", "type": "wall", "btu": 12000, "area": 35, "energy": "A+++", "wifi": false, "image": "assets/img/products/fujitsu-aseh12kgtg-aoeh12kgcg.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -15, "seer": 8.8, "scop": 5.2}},
    {"id": "fujitsu-general-ashg12kete-b-aohg12keta", "brand": "Fujitsu", "name": "Fujitsu General ASHG12KETE-B/AOHG12KETA", "type": "wall", "btu": 12000, "area": 25, "energy": "A++", "wifi": false, "image": "assets/img/products/fujitsu-general-ashg12kete-b-aohg12keta.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 20, "heatMin": -15, "seer": 7.3, "scop": 4.4, "warranty": 36}},
    {"id": "fujitsu-airstage-aseg18kmte-aoeg18kmta", "brand": "Fujitsu", "name": "Fujitsu Airstage ASEG18KMTE/AOEG18KMTA", "type": "wall", "btu": 18000, "area": 50, "energy": "A++", "wifi": false, "image": "assets/img/products/fujitsu-airstage-aseg18kmte-aoeg18kmta.webp", "badges": [], "specs": {"refrigerant": "R32", "heatMin": -15, "seer": 7.77, "scop": 4.6}},
    {"id": "fujitsu-airstage-aseh24kmtgl-aoeh24kmtg", "brand": "Fujitsu", "name": "Fujitsu Airstage ASEH24KMTGL/AOEH24KMTG", "type": "wall", "btu": 24000, "area": 65, "energy": "A++", "wifi": false, "image": "assets/img/products/fujitsu-airstage-aseh24kmtgl-aoeh24kmtg.webp", "badges": [], "specs": {"refrigerant": "R32", "heatMin": -15, "seer": 7.3, "scop": 4.3}},
    {"id": "gree-gwh09aucxb-k6dna2a-i-gwh09aucxb-k6dna1a-o-c", "brand": "Gree", "name": "Gree GWH09AUCXB-K6DNA2A-I – GWH09AUCXB-K6DNA1A-O CLIVIA WiFi", "type": "wall", "btu": 9000, "area": 15, "energy": "A+++", "wifi": true, "image": "assets/img/products/gree-gwh09aucxb-k6dna2a-i-gwh09aucxb-k6dna1a-o-c.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 22, "heatMin": -25, "seer": 8.5, "scop": 4.6, "warranty": 60}},
    {"id": "gree-gwh09yd-s6dba1-i-gwh09yd-s6dba1-o-amber-nor", "brand": "Gree", "name": "Gree GWH09YD-S6DBA1-I/GWH09YD-S6DBA1-O AMBER NORDIC WiFi", "type": "wall", "btu": 9000, "area": 25, "energy": "A+++", "wifi": true, "image": "assets/img/products/gree-gwh09yd-s6dba1-i-gwh09yd-s6dba1-o-amber-nor.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 18, "heatMin": -30, "seer": 8.5, "scop": 5.1, "warranty": 60}},
    {"id": "gree-airy-gwh12avcxd-k6dna1a", "brand": "Gree", "name": "Gree AIRY GWH12AVCXD-K6DNA1A", "type": "wall", "btu": 12000, "area": 24, "energy": "A+++", "wifi": true, "image": "assets/img/products/gree-airy-gwh12avcxd-k6dna1a.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -25, "seer": 8.5, "scop": 4.6, "warranty": 24}},
    {"id": "gree-gwh12akcxd-k6dna1a-i-gwh12akcxd-k6dna1a-o-s", "brand": "Gree", "name": "Gree GWH12AKCXD-K6DNA1A-I/GWH12AKCXD-K6DNA1A-O SOYAL II", "type": "wall", "btu": 12000, "area": 30, "energy": "A+++", "wifi": false, "image": "assets/img/products/gree-gwh12akcxd-k6dna1a-i-gwh12akcxd-k6dna1a-o-s.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 22, "heatMin": -25, "seer": 9.0, "scop": 5.1, "warranty": 60}},
    {"id": "gree-gwh12aacxb-k6dna2a-i-gwh12agcxb-k6dna1a-o-i", "brand": "Gree", "name": "Gree GWH12AACXB-K6DNA2A-I/GWH12AGCXB-K6DNA1A-O INFINITY II WiFi", "type": "wall", "btu": 12000, "area": 25, "energy": "A++", "wifi": true, "image": "assets/img/products/gree-gwh12aacxb-k6dna2a-i-gwh12agcxb-k6dna1a-o-i.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 23, "heatMin": -15, "seer": 6.5, "scop": 4.1, "warranty": 60}},
    {"id": "gree-airy-gwh18avdxe-k6dna1a", "brand": "Gree", "name": "Gree AIRY GWH18AVDXE-K6DNA1A", "type": "wall", "btu": 18000, "area": 35, "energy": "A+++", "wifi": true, "image": "assets/img/products/gree-airy-gwh18avdxe-k6dna1a.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 28, "heatMin": -25, "seer": 8.0, "scop": 4.6, "warranty": 24}},
    {"id": "gree-gwh18ye-s6dba1-i-gwh18ye-s6dba1-o-amber-nor", "brand": "Gree", "name": "Gree GWH18YE-S6DBA1-I/GWH18YE-S6DBA1-O AMBER NORDIC WiFi", "type": "wall", "btu": 18000, "area": 45, "energy": "A++", "wifi": true, "image": "assets/img/products/gree-gwh18ye-s6dba1-i-gwh18ye-s6dba1-o-amber-nor.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 33, "heatMin": -30, "seer": 6.6, "scop": 4.4, "warranty": 60}},
    {"id": "gree-airy-gwh24avexf-k6dna1a", "brand": "Gree", "name": "Gree AIRY GWH24AVEXF-K6DNA1A", "type": "wall", "btu": 24000, "area": 48, "energy": "A+++", "wifi": true, "image": "assets/img/products/gree-airy-gwh24avexf-k6dna1a.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 37, "heatMin": -25, "seer": 8.5, "scop": 4.6, "warranty": 24}},
    {"id": "hisense-easy-smart-ca25yr03g", "brand": "Hisense", "name": "Hisense Easy Smart CA25YR03G", "type": "wall", "btu": 9000, "area": 25, "energy": "A++", "wifi": true, "image": "assets/img/products/hisense-easy-smart-ca25yr03g.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "heatMin": -20, "seer": 6.1, "scop": 4.0}},
    {"id": "hisense-energy-pro-qe35xv0eg", "brand": "Hisense", "name": "Hisense Energy Pro QE35XV0EG", "type": "wall", "btu": 12000, "area": 35, "energy": "A+++", "wifi": true, "image": "assets/img/products/hisense-energy-pro-qe35xv0eg.webp", "badges": [], "specs": {"refrigerant": "R32", "seer": 8.5, "scop": 5.601}},
    {"id": "kaisai-eco-kex-9ktgi-kex-9ktgo", "brand": "Kaisai", "name": "KAISAI ECO KEX-9KTGI/KEX-9KTGO", "type": "wall", "btu": 9000, "area": 15, "energy": "A++", "wifi": false, "image": "assets/img/products/kaisai-eco-kex-9ktgi-kex-9ktgo.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 21, "heatMin": -25, "seer": 6.2, "scop": 4.0, "warranty": 24}},
    {"id": "miota-raw-ar25a-rxs-ar25a-arctic2r", "brand": "MIOTA", "name": "MIOTA RAW-AR25A / RXS-AR25A ARCTIC2R", "type": "wall", "btu": 9000, "area": 25, "energy": "A+++", "wifi": true, "image": "assets/img/products/miota-raw-ar25a-rxs-ar25a-arctic2r.webp", "badges": ["hyper"], "specs": {"noise": 18, "heatMin": -30, "seer": 8.5, "scop": 5.1}},
    {"id": "midea-msepbu-09hrfn8-qrd6gw-mox330-09hfn8-qrd6gw", "brand": "Midea", "name": "Midea MSEPBU-09HRFN8-QRD6GW/MOX330-09HFN8-QRD6GW All Easy Pro Nordic", "type": "wall", "btu": 9000, "area": 15, "energy": "A+++", "wifi": false, "image": "assets/img/products/midea-msepbu-09hrfn8-qrd6gw-mox330-09hfn8-qrd6gw.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 21, "heatMin": -25, "seer": 8.6, "scop": 4.6, "warranty": 36}},
    {"id": "midea-ma3-09hrdn8-qrd0gw-ma3-09hfn8-qr-prime-2", "brand": "Midea", "name": "Midea MA3-09HRDN8-QRD0GW/MA3-09HFN8-QR Prime 2", "type": "wall", "btu": 9000, "area": 15, "energy": "A++", "wifi": false, "image": "assets/img/products/midea-ma3-09hrdn8-qrd0gw-ma3-09hfn8-qr-prime-2.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 26, "heatMin": -15, "seer": 6.5, "scop": 4.6, "warranty": 36}},
    {"id": "midea-ag2eco-12nxd0-i-b-ag2eco-12n8d0-o-b-xtreme", "brand": "Midea", "name": "Midea AG2Eco-12NXD0-I(B)/AG2Eco-12N8D0-O(B) Xtreme Eco", "type": "wall", "btu": 12000, "area": 25, "energy": "A++", "wifi": false, "image": "assets/img/products/midea-ag2eco-12nxd0-i-b-ag2eco-12n8d0-o-b-xtreme.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 21, "heatMin": -15, "seer": 7.0, "scop": 4.2, "warranty": 36}},
    {"id": "midea-gaia-12hrfn8-i-gaia-12hrfn8-o-gaia", "brand": "Midea", "name": "Midea GAIA-12HRFN8-I/GAIA-12HRFN8-O GAIA", "type": "wall", "btu": 12000, "area": 25, "energy": "A+++", "wifi": false, "image": "assets/img/products/midea-gaia-12hrfn8-i-gaia-12hrfn8-o-gaia.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 21, "heatMin": -15, "seer": 8.5, "scop": 4.6, "warranty": 36}},
    {"id": "midea-msab-12nxd0-xi-msab-12n8d0-xo-aurora", "brand": "Midea", "name": "Midea MSAB-12NXD0-XI/MSAB-12N8D0-XO Aurora", "type": "wall", "btu": 12000, "area": 25, "energy": "A++", "wifi": false, "image": "assets/img/products/midea-msab-12nxd0-xi-msab-12n8d0-xo-aurora.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 23, "heatMin": -15, "seer": 7.0, "scop": 4.1, "warranty": 36}},
    {"id": "midea-msepcu-18hrfn8-qrd0gw-mox430-18hfn8-qrd0gw", "brand": "Midea", "name": "Midea MSEPCU-18HRFN8-QRD0GW/MOX430-18HFN8-QRD0GW All Easy Pro Nordic", "type": "wall", "btu": 18000, "area": 40, "energy": "A+++", "wifi": false, "image": "assets/img/products/midea-msepcu-18hrfn8-qrd0gw-mox430-18hfn8-qrd0gw.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 22, "heatMin": -25, "seer": 8.5, "scop": 4.3, "warranty": 36}},
    {"id": "midea-msepdu-24hrfn8-qrd0gw-mox430-24hfn8-qrd0gw", "brand": "Midea", "name": "Midea MSEPDU-24HRFN8-QRD0GW/MOX430-24HFN8-QRD0GW All Easy Pro Nordic", "type": "wall", "btu": 24000, "area": 50, "energy": "A+++", "wifi": false, "image": "assets/img/products/midea-msepdu-24hrfn8-qrd0gw-mox430-24hfn8-qrd0gw.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 21, "heatMin": -25, "seer": 8.5, "scop": 4.2, "warranty": 36}},
    {"id": "mitsubishi-electric-msz-ef25vgkb-muz-ef25vg-kiri", "brand": "Mitsubishi Electric", "name": "Mitsubishi Electric MSZ-EF25VGKB/MUZ-EF25VG KIRIGAMINE ZEN", "type": "wall", "btu": 9000, "area": 20, "energy": "A+++", "wifi": false, "image": "assets/img/products/mitsubishi-electric-msz-ef25vgkb-muz-ef25vg-kiri.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -15, "seer": 9.1, "scop": 4.7, "warranty": 36}},
    {"id": "mitsubishi-electric-msz-fh25ve-muz-fh25vehz", "brand": "Mitsubishi Electric", "name": "Mitsubishi Electric MSZ-FH25VE + MUZ-FH25VEHZ", "type": "wall", "btu": 9000, "area": 20, "energy": "A+++", "wifi": false, "image": "assets/img/products/mitsubishi-electric-msz-fh25ve-muz-fh25vehz.webp", "badges": ["hyper"], "specs": {"refrigerant": "R410A", "noise": 20, "heatMin": -25, "seer": 9.1, "scop": 4.9, "warranty": 36}},
    {"id": "mitsubishi-electric-msz-ln25vgb-muz-ln25vghz-oni", "brand": "Mitsubishi Electric", "name": "Mitsubishi Electric MSZ-LN25VGB/MUZ-LN25VGHZ ONIX BLACK ZUBADAN", "type": "wall", "btu": 9000, "area": 25, "energy": "A+++", "wifi": false, "image": "assets/img/products/mitsubishi-electric-msz-ln25vgb-muz-ln25vghz-oni.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -25, "seer": 10.5, "scop": 5.2, "warranty": 36}},
    {"id": "mitsubishi-electric-msz-ln35vgb-muz-ln35vghz-oni", "brand": "Mitsubishi Electric", "name": "Mitsubishi Electric MSZ-LN35VGB/MUZ-LN35VGHZ ONIX BLACK ZUBADAN", "type": "wall", "btu": 12000, "area": 35, "energy": "A+++", "wifi": false, "image": "assets/img/products/mitsubishi-electric-msz-ln35vgb-muz-ln35vghz-oni.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -25, "seer": 9.4, "scop": 5.1, "warranty": 36}},
    {"id": "mitsubishi-electric-msz-ft35vgk-muz-ft35vghz-nin", "brand": "Mitsubishi Electric", "name": "Mitsubishi Electric MSZ-FT35VGK/MUZ-FT35VGHZ NINJA", "type": "wall", "btu": 12000, "area": 35, "energy": "A+++", "wifi": false, "image": "assets/img/products/mitsubishi-electric-msz-ft35vgk-muz-ft35vghz-nin.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -25, "seer": 8.6, "scop": 4.6, "warranty": 36}},
    {"id": "mitsubishi-electric-msz-hr35vf-muz-hr35vf", "brand": "Mitsubishi Electric", "name": "Mitsubishi Electric MSZ-HR35VF + MUZ-HR35VF", "type": "wall", "btu": 12000, "area": 23, "energy": "A++", "wifi": false, "image": "assets/img/products/mitsubishi-electric-msz-hr35vf-muz-hr35vf.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 21, "heatMin": -10, "seer": 6.0, "scop": 4.3, "warranty": 36}},
    {"id": "mitsubishi-electric-msz-ef35vgkb-muz-ef35vg-kiri", "brand": "Mitsubishi Electric", "name": "Mitsubishi Electric MSZ-EF35VGKB/MUZ-EF35VG KIRIGAMINE ZEN", "type": "wall", "btu": 12000, "area": 30, "energy": "A+++", "wifi": false, "image": "assets/img/products/mitsubishi-electric-msz-ef35vgkb-muz-ef35vg-kiri.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 21, "heatMin": -15, "seer": 8.8, "scop": 4.6, "warranty": 36}},
    {"id": "mitsubishi-electric-msz-ay50vgk-muz-ay50vg-wifi", "brand": "Mitsubishi Electric", "name": "Mitsubishi Electric MSZ-AY50VGK/MUZ-AY50VG WiFi", "type": "wall", "btu": 18000, "area": 45, "energy": "A++", "wifi": true, "image": "assets/img/products/mitsubishi-electric-msz-ay50vgk-muz-ay50vg-wifi.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 28, "heatMin": -20, "seer": 7.5, "scop": 4.7, "warranty": 36}},
    {"id": "mitsubishi-electric-msz-hr50vf-muz-hr50vf", "brand": "Mitsubishi Electric", "name": "Mitsubishi Electric MSZ‑HR50VF + MUZ‑HR50VF", "type": "wall", "btu": 18000, "area": 35, "energy": "A++", "wifi": false, "image": "assets/img/products/mitsubishi-electric-msz-hr50vf-muz-hr50vf.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 27, "heatMin": -10, "seer": 6.5, "scop": 4.3, "warranty": 36}},
    {"id": "mitsubishi-electric-msz-ap71vgk-muz-ap71vg-wifi", "brand": "Mitsubishi Electric", "name": "Mitsubishi Electric MSZ-AP71VGK/MUZ-AP71VG WiFi", "type": "wall", "btu": 24000, "area": 60, "energy": "A++", "wifi": true, "image": "assets/img/products/mitsubishi-electric-msz-ap71vgk-muz-ap71vg-wifi.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 30, "heatMin": -15, "seer": 7.2, "scop": 4.4, "warranty": 36}},
    {"id": "mitsubishi-heavy-industries-srk25zsx-wf-src25zsx", "brand": "Mitsubishi Heavy Industries", "name": "Mitsubishi Heavy SRK25ZSX-WF + SRC25ZSX-W", "type": "wall", "btu": 9000, "area": 20, "energy": "A+++", "wifi": true, "image": "assets/img/products/mitsubishi-heavy-industries-srk25zsx-wf-src25zsx.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -20, "seer": 10.3, "scop": 5.2, "warranty": 36}},
    {"id": "mitsubishi-heavy-industries-srk25ztl-w-src25ztl-", "brand": "Mitsubishi Heavy Industries", "name": "Mitsubishi Heavy SRK25ZTL-W + SRC25ZTL-W", "type": "wall", "btu": 9000, "area": 20, "energy": "A++", "wifi": false, "image": "assets/img/products/mitsubishi-heavy-industries-srk25ztl-w-src25ztl-.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 22, "heatMin": -15, "seer": 6.9, "scop": 4.7, "warranty": 36}},
    {"id": "mitsubishi-heavy-industries-dxk12z6-w-dxc12z6-w", "brand": "Mitsubishi Heavy Industries", "name": "Mitsubishi Heavy DXK12Z6-W/DXC12Z6-W", "type": "wall", "btu": 12000, "area": 25, "energy": "A++", "wifi": false, "image": "assets/img/products/mitsubishi-heavy-industries-dxk12z6-w-dxc12z6-w.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 23, "heatMin": -15, "seer": 7.3, "scop": 4.4, "warranty": 36}},
    {"id": "mitsubishi-heavy-industries-srk35zs-w-src35zs-w", "brand": "Mitsubishi Heavy Industries", "name": "Mitsubishi Heavy SRK35ZS-W + SRC35ZS-W", "type": "wall", "btu": 12000, "area": 25, "energy": "A++", "wifi": false, "image": "assets/img/products/mitsubishi-heavy-industries-srk35zs-w-src35zs-w.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -15, "seer": 8.4, "scop": 4.7, "warranty": 36}},
    {"id": "mitsubishi-heavy-industries-srk50zsp-w-src50zsp-", "brand": "Mitsubishi Heavy Industries", "name": "Mitsubishi Heavy SRK50ZSP-W + SRC50ZSP-W", "type": "wall", "btu": 18000, "area": 35, "energy": "A++", "wifi": false, "image": "assets/img/products/mitsubishi-heavy-industries-srk50zsp-w-src50zsp-.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 24, "heatMin": -15, "seer": 6.3, "scop": 4.2, "warranty": 36}},
    {"id": "mitsubishi-heavy-industries-srk71zr-w-src71zr-w-", "brand": "Mitsubishi Heavy Industries", "name": "Mitsubishi Heavy SRK71ZR-W/SRC71ZR-W DIAMOND", "type": "wall", "btu": 24000, "area": 65, "energy": "A++", "wifi": false, "image": "assets/img/products/mitsubishi-heavy-industries-srk71zr-w-src71zr-w-.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 25, "heatMin": -15, "seer": 7.4, "scop": 4.5, "warranty": 36}},
    {"id": "panasonic-cs-vz9ske-cu-vz9ske-heatcharge", "brand": "Panasonic", "name": "Panasonic CS-VZ9SKE/CU-VZ9SKE HEATCHARGE", "type": "wall", "btu": 9000, "area": 30, "energy": "A+++", "wifi": false, "image": "assets/img/products/panasonic-cs-vz9ske-cu-vz9ske-heatcharge.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 18, "heatMin": -30, "seer": 10.5, "scop": 6.2, "warranty": 24}},
    {"id": "panasonic-cs-z35xkew-cu-z35xke-etherea", "brand": "Panasonic", "name": "Panasonic CS-Z35XKEW/CU-Z35XKE ETHEREA", "type": "wall", "btu": 12000, "area": 30, "energy": "A+++", "wifi": false, "image": "assets/img/products/panasonic-cs-z35xkew-cu-z35xke-etherea.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -15, "seer": 9.5, "scop": 5.2, "warranty": 24}},
    {"id": "tcl-tac-09chsd-ug11v3ahb-breeze-in-2", "brand": "TCL", "name": "TCL TAC-09CHSD / UG11V3AHB BREEZE IN 2", "type": "wall", "btu": 9000, "area": 25, "energy": "A+++", "wifi": true, "image": "assets/img/products/tcl-tac-09chsd-ug11v3ahb-breeze-in-2.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -25, "seer": 8.5, "scop": 4.6}},
    {"id": "tcl-tac-12chsd-fbi-freshin", "brand": "TCL", "name": "TCL TAC-12CHSD/FBI FreshIN", "type": "wall", "btu": 12000, "area": 35, "energy": "A+++", "wifi": false, "image": "assets/img/products/tcl-tac-12chsd-fbi-freshin.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 29, "heatMin": -25, "seer": 8.5, "scop": 4.5}},
    {"id": "tcl-tac-18chsd-ug11v3ahb-breeze-in-2", "brand": "TCL", "name": "TCL TAC-18CHSD / UG11V3AHB BREEZE IN 2", "type": "wall", "btu": 18000, "area": 50, "energy": "A+++", "wifi": true, "image": "assets/img/products/tcl-tac-18chsd-ug11v3ahb-breeze-in-2.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 23, "heatMin": -20, "seer": 8.5, "scop": 4.6}},
    {"id": "toshiba-ras-25e2kvg-nd-ras-25e2avg-nd-yukai-nord", "brand": "Toshiba", "name": "Toshiba RAS-25E2KVG-ND/RAS-25E2AVG-ND YUKAI NORDIC", "type": "wall", "btu": 9000, "area": 25, "energy": "A++", "wifi": false, "image": "assets/img/products/toshiba-ras-25e2kvg-nd-ras-25e2avg-nd-yukai-nord.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -25, "seer": 6.5, "scop": 4.6, "warranty": 60}},
    {"id": "toshiba-ras-b10e2kvg-e-ras-10e2avg-e-yukai", "brand": "Toshiba", "name": "Toshiba RAS-B10E2KVG-E/RAS-10E2AVG-E YUKAI", "type": "wall", "btu": 10000, "area": 15, "energy": "A++", "wifi": false, "image": "assets/img/products/toshiba-ras-b10e2kvg-e-ras-10e2avg-e-yukai.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -15, "seer": 7.0, "scop": 4.6, "warranty": 60}},
    {"id": "toshiba-ras-35g3kvsg-nd-ras-35j2avsg-nd1-edge-no", "brand": "Toshiba", "name": "Toshiba RAS-35G3KVSG-ND/RAS-35J2AVSG-ND1 EDGE NORDIC", "type": "wall", "btu": 12000, "area": 30, "energy": "A+++", "wifi": false, "image": "assets/img/products/toshiba-ras-35g3kvsg-nd-ras-35j2avsg-nd1-edge-no.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 19, "heatMin": -25, "seer": 7.3, "scop": 5.1, "warranty": 60}},
    {"id": "toshiba-ras-13pkvpg-e-ras-13pavpg-e", "brand": "Toshiba", "name": "Toshiba RAS-13PKVPG-E/RAS-13PAVPG-E", "type": "wall", "btu": 13000, "area": 30, "energy": "A+++", "wifi": false, "image": "assets/img/products/toshiba-ras-13pkvpg-e-ras-13pavpg-e.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 20, "heatMin": -15, "seer": 9.5, "scop": 5.1, "warranty": 60}},
    {"id": "toshiba-ras-18j2kvsg-e-ras-18j2avsg-e-edge", "brand": "Toshiba", "name": "Toshiba RAS-18J2KVSG-E/RAS-18J2AVSG-E EDGE", "type": "wall", "btu": 18000, "area": 45, "energy": "A++", "wifi": false, "image": "assets/img/products/toshiba-ras-18j2kvsg-e-ras-18j2avsg-e-edge.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 26, "heatMin": -15, "seer": 7.8, "scop": 4.6, "warranty": 60}},
    {"id": "toshiba-ras-b24j2kvsg-e-ras-24j2avsg-e-edge", "brand": "Toshiba", "name": "Toshiba RAS-B24J2KVSG-E/RAS-24J2AVSG-E EDGE", "type": "wall", "btu": 24000, "area": 65, "energy": "A++", "wifi": false, "image": "assets/img/products/toshiba-ras-b24j2kvsg-e-ras-24j2avsg-e-edge.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 28, "heatMin": -15, "seer": 6.3, "scop": 4.1, "warranty": 60}},
    {"id": "alpin-yuka-asv-35ytzi", "brand": "Alpin", "name": "Alpin Yuka ASV-35YTZI", "type": "floor", "btu": 12000, "area": 35, "energy": "A++", "wifi": true, "image": "assets/img/products/alpin-yuka-asv-35ytzi.webp", "badges": [], "specs": {"noise": 23, "heatMin": -15, "seer": 6.1, "scop": 4.0}},
    {"id": "daikin-fvxm35a-b-rxm35a-perfera-2024-wifi", "brand": "Daikin", "name": "Daikin FVXM35A(B)/RXM35A PERFERA 2024 WiFi", "type": "floor", "btu": 12000, "area": 30, "energy": "A++", "wifi": true, "image": "assets/img/products/daikin-fvxm35a-b-rxm35a-perfera-2024-wifi.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 20, "heatMin": -15, "seer": 8.11, "scop": 4.63, "warranty": 36}},
    {"id": "fujitsu-general-aghg12kvca-aohg12kvca", "brand": "Fujitsu", "name": "Fujitsu General AGHG12KVCA/AOHG12KVCA", "type": "floor", "btu": 12000, "area": 30, "energy": "A++", "wifi": false, "image": "assets/img/products/fujitsu-general-aghg12kvca-aohg12kvca.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 22, "heatMin": -15, "seer": 8.2, "scop": 4.1, "warranty": 36}},
    {"id": "gree-geh12aaxd-k6dna1a-geh-ii", "brand": "Gree", "name": "Gree GEH12AAXD-K6DNA1A GEH II", "type": "floor", "btu": 12000, "area": 23, "energy": "A++", "wifi": true, "image": "assets/img/products/gree-geh12aaxd-k6dna1a-geh-ii.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 25, "heatMin": -22, "seer": 7.2, "scop": 4.1, "warranty": 24}},
    {"id": "hitachi-raf35rxe-rac35fxe-shirokuma", "brand": "Hitachi", "name": "Hitachi RAF35RXE/RAC35FXE SHIROKUMA", "type": "floor", "btu": 12000, "area": 35, "energy": "A++", "wifi": false, "image": "assets/img/products/hitachi-raf35rxe-rac35fxe-shirokuma.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 20, "heatMin": -20, "seer": 8.2, "scop": 4.6, "warranty": 36}},
    {"id": "miota-rac-sf35a-rxs-pe35a", "brand": "MIOTA", "name": "MIOTA RAC-SF35A / RXS-PE35A", "type": "floor", "btu": 12000, "area": 35, "energy": "A+++", "wifi": true, "image": "assets/img/products/miota-rac-sf35a-rxs-pe35a.webp", "badges": ["hyper"], "specs": {"noise": 20, "heatMin": -30, "seer": 8.5, "scop": 4.6}},
    {"id": "midea-mfa2u-12hrfnx", "brand": "Midea", "name": "Midea MFA2U-12HRFNX", "type": "floor", "btu": 12000, "area": 35, "energy": "A++", "wifi": true, "image": "assets/img/products/midea-mfa2u-12hrfnx.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 54, "heatMin": -15, "seer": 7.3, "scop": 4.0, "warranty": 60}},
    {"id": "midea-mue-36hrfnx-qrd0w-mod30u-36hfn8-qrd0w", "brand": "Midea", "name": "Midea MUE-36HRFNX-QRD0W/MOD30U-36HFN8-QRD0W", "type": "floor", "btu": 36000, "area": 70, "energy": "A++", "wifi": false, "image": "assets/img/products/midea-mue-36hrfnx-qrd0w-mod30u-36hfn8-qrd0w.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 45, "heatMin": -15, "seer": 6.2, "scop": 4.1, "warranty": 36}},
    {"id": "mitsubishi-electric-mfz-kt50vg-suz-m50va", "brand": "Mitsubishi Electric", "name": "Mitsubishi Electric MFZ-KT50VG/SUZ-M50VA", "type": "floor", "btu": 18000, "area": 45, "energy": "A++", "wifi": false, "image": "assets/img/products/mitsubishi-electric-mfz-kt50vg-suz-m50va.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 28, "heatMin": -15, "seer": 6.8, "scop": 4.2, "warranty": 36}},
    {"id": "mitsubishi-heavy-industries-srf35zs-w-src35zs-w", "brand": "Mitsubishi Heavy Industries", "name": "Mitsubishi Heavy SRF35ZS-W + SRC35ZS-W - подово тяло", "type": "floor", "btu": 12000, "area": 28, "energy": "A++", "wifi": false, "image": "assets/img/products/mitsubishi-heavy-industries-srf35zs-w-src35zs-w.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 50, "heatMin": -15, "seer": 8.1, "scop": 4.7, "warranty": 36}},
    {"id": "alpin-3fmo80hd", "brand": "Alpin", "name": "Alpin 3FMO80HD", "type": "multi", "btu": 27000, "area": 85, "energy": "A+++", "wifi": false, "image": "assets/img/products/alpin-3fmo80hd.webp", "badges": ["hyper"], "specs": {"refrigerant": "ALPIN", "noise": 67, "heatMin": -25, "seer": 8.5, "scop": 4.6}},
    {"id": "alpin-4fmo90hd", "brand": "Alpin", "name": "Alpin 4FMO90HD", "type": "multi", "btu": 30000, "area": 85, "energy": "A+++", "wifi": false, "image": "assets/img/products/alpin-4fmo90hd.webp", "badges": ["hyper"], "specs": {"refrigerant": "ALPIN", "noise": 70, "heatMin": -25, "seer": 8.5, "scop": 4.6}},
    {"id": "gree-gwhd", "brand": "Gree", "name": "Gree GWHD", "type": "multi", "btu": 36000, "area": 100, "energy": "A++", "wifi": false, "image": "assets/img/products/gree-gwhd.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 57, "heatMin": -20, "seer": 7.2, "scop": 4.0}},
    {"id": "gree-gwhd-82", "brand": "Gree", "name": "Gree GWHD", "type": "multi", "btu": 42000, "area": 120, "energy": "A", "wifi": false, "image": "assets/img/products/gree-gwhd-82.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 55, "heatMin": -20, "seer": 7.2, "scop": 4.2}},
    {"id": "midea-m4oe-28hfn8-q", "brand": "Midea", "name": "Midea M4OE-28HFN8-Q", "type": "multi", "btu": 28000, "area": 85, "energy": "A++", "wifi": false, "image": "assets/img/products/midea-m4oe-28hfn8-q.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 61, "heatMin": -15, "seer": 6.1, "scop": 3.8}},
    {"id": "mitsubishi-heavy-industries-scm60zs-w", "brand": "Mitsubishi Heavy Industries", "name": "Mitsubishi Heavy SCM60ZS-W (външно тяло)", "type": "multi", "btu": 21000, "area": 60, "energy": "A+++", "wifi": false, "image": "assets/img/products/mitsubishi-heavy-industries-scm60zs-w.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 50, "heatMin": -15}},
    {"id": "mitsubishi-heavy-industries-scm71zs-w", "brand": "Mitsubishi Heavy Industries", "name": "Mitsubishi Heavy SCM71ZS-W", "type": "multi", "btu": 24000, "area": 70, "energy": "A++", "wifi": false, "image": "assets/img/products/mitsubishi-heavy-industries-scm71zs-w.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 52, "heatMin": -15}},
    {"id": "daikin-ffa35a9-rxm35a9", "brand": "Daikin", "name": "Daikin FFA35A9 + RXM35A9", "type": "cassette", "btu": 12000, "area": 26, "energy": "A++", "wifi": false, "image": "assets/img/products/daikin-ffa35a9-rxm35a9.webp", "badges": [], "specs": {"refrigerant": "R410A", "noise": 25, "heatMin": -15, "seer": 6.32, "scop": 4.1, "warranty": 36}},
    {"id": "gree-gud71t1-gud71w1-nha-s", "brand": "Gree", "name": "Gree GUD71T1 + GUD71W1/NhA-S", "type": "cassette", "btu": 24000, "area": 49, "energy": "A++", "wifi": false, "image": "assets/img/products/gree-gud71t1-gud71w1-nha-s.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 34, "heatMin": -20, "seer": 6.7, "scop": 4.3, "warranty": 24}},
    {"id": "lg-ct12f-nr0-uua1-ul0", "brand": "LG", "name": "LG CT12F.NR0 + UUA1.UL0", "type": "cassette", "btu": 12000, "area": 25, "energy": "A++", "wifi": false, "image": "assets/img/products/lg-ct12f-nr0-uua1-ul0.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 32, "heatMin": -20, "seer": 6.7, "scop": 4.0, "warranty": 36}},
    {"id": "mitsubishi-electric-slz-m25fa-suz-m25va", "brand": "Mitsubishi Electric", "name": "Mitsubishi Electric SLZ-M25FA + SUZ-M25VA", "type": "cassette", "btu": 9000, "area": 20, "energy": "A++", "wifi": false, "image": "assets/img/products/mitsubishi-electric-slz-m25fa-suz-m25va.webp", "badges": [], "specs": {"refrigerant": "R410A", "noise": 25, "heatMin": -15, "seer": 6.3, "scop": 4.3, "warranty": 36}},
    {"id": "nippon-ncd-36hrfnx-q-nod30u-36hfn8-q", "brand": "Nippon", "name": "Nippon NCD-36HRFNX-Q + NOD30U-36HFN8-Q", "type": "cassette", "btu": 36000, "area": 70, "energy": "A++", "wifi": false, "image": "assets/img/products/nippon-ncd-36hrfnx-q-nod30u-36hfn8-q.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 46, "heatMin": -15, "seer": 6.1, "scop": 4.0, "warranty": 36}},
    {"id": "toshiba-rav-hm561utp-e-rav-gm561atp-e", "brand": "Toshiba", "name": "Toshiba RAV-HM561UTP-E + RAV-GM561ATP-E", "type": "cassette", "btu": 18000, "area": 33, "energy": "A++", "wifi": false, "image": "assets/img/products/toshiba-rav-hm561utp-e-rav-gm561atp-e.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 28, "heatMin": -15, "seer": 6.34, "scop": 4.6, "warranty": 36}},
    {"id": "daikin-fba71a9-rzasg71mv1", "brand": "Daikin", "name": "Daikin FBA71A9 + RZASG71MV1", "type": "duct", "btu": 24000, "area": 46, "energy": "A+", "wifi": false, "image": "assets/img/products/daikin-fba71a9-rzasg71mv1.webp", "badges": [], "specs": {"refrigerant": "R410A", "noise": 25, "heatMin": -15, "seer": 5.84, "scop": 4.1, "warranty": 36}},
    {"id": "gree-gud100ph1-gud100w1-nha-s", "brand": "Gree", "name": "Gree GUD100PH1 + GUD100W1/NhA-S", "type": "duct", "btu": 34000, "area": 74, "energy": "A++", "wifi": false, "image": "assets/img/products/gree-gud100ph1-gud100w1-nha-s.webp", "badges": ["hyper"], "specs": {"refrigerant": "R32", "noise": 36, "heatMin": -20, "seer": 6.4, "scop": 4.2, "warranty": 24}},
    {"id": "mitsubishi-electric-sez-m25da-suz-m25va", "brand": "Mitsubishi Electric", "name": "Mitsubishi Electric SEZ-M25DA + SUZ-M25VA", "type": "duct", "btu": 9000, "area": 20, "energy": "A", "wifi": false, "image": "assets/img/products/mitsubishi-electric-sez-m25da-suz-m25va.webp", "badges": [], "specs": {"refrigerant": "R410A", "noise": 22, "heatMin": -10, "seer": 5.3, "scop": 3.8, "warranty": 36}},
    {"id": "nippon-ntiu-12hwfnx-q-nob30u-12hfn8-q", "brand": "Nippon", "name": "Nippon NTIU-12HWFNX-Q + NOB30U-12HFN8-Q", "type": "duct", "btu": 12000, "area": 25, "energy": "A++", "wifi": false, "image": "assets/img/products/nippon-ntiu-12hwfnx-q-nob30u-12hfn8-q.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 26, "heatMin": -15, "seer": 6.5, "scop": 4.0, "warranty": 36}},
    {"id": "toshiba-rav-hm561btp-e-rav-gm561atp-e", "brand": "Toshiba", "name": "Toshiba RAV-HM561BTP-E + RAV-GM561ATP-E", "type": "duct", "btu": 18000, "area": 33, "energy": "A", "wifi": false, "image": "assets/img/products/toshiba-rav-hm561btp-e-rav-gm561atp-e.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 25, "heatMin": -15, "seer": 5.28, "scop": 4.08, "warranty": 36}},
    {"id": "alpin-asf-110ch5", "brand": "Alpin", "name": "Alpin ASF-110CH5", "type": "column", "btu": 36000, "area": 100, "energy": "A++", "wifi": true, "image": "assets/img/products/alpin-asf-110ch5.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 47, "heatMin": -15, "seer": 7.0, "scop": 4.0}},
    {"id": "gree-t-fresh-gvh48alxk-m6dnc7a", "brand": "Gree", "name": "Gree T-FRESH GVH48ALXK-M6DNC7A", "type": "column", "btu": 48000, "area": 140, "energy": "A++", "wifi": true, "image": "assets/img/products/gree-t-fresh-gvh48alxk-m6dnc7a.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 51, "heatMin": -15, "seer": 6.1, "scop": 4.0}},
    {"id": "midea-mfya400-24hrfn8-qrd0w", "brand": "Midea", "name": "Midea MFYA400-24HRFN8-QRD0W", "type": "column", "btu": 24000, "area": 70, "energy": "A++", "wifi": true, "image": "assets/img/products/midea-mfya400-24hrfn8-qrd0w.webp", "badges": [], "specs": {"refrigerant": "R32", "seer": 6.5, "scop": 4.2}},
    {"id": "midea-mfga-55fn1rd0-mou-55fn1-rd0", "brand": "Midea", "name": "Midea MFGA-55FN1RD0 – MOU-55FN1-RD0", "type": "column", "btu": 55000, "area": 105, "energy": "A+", "wifi": false, "image": "assets/img/products/midea-mfga-55fn1rd0-mou-55fn1-rd0.webp", "badges": [], "specs": {"refrigerant": "R410A", "noise": 47, "heatMin": -15, "seer": 5.6, "scop": 4.0, "warranty": 36}},
    {"id": "tcl-tcl-tac-12chpb-mz", "brand": "TCL", "name": "TCL TAC-12CHPB/MZ", "type": "mobile", "btu": 12000, "area": 35, "energy": "A+", "wifi": false, "image": "assets/img/products/tcl-tcl-tac-12chpb-mz.webp", "badges": [], "specs": {"refrigerant": "R32", "noise": 65, "seer": 2.8, "scop": 2.6}}
  ],

  towns: [
    "гр. Обзор",
    "с. Баня",
    "с. Емона",
    "к.к. Елените",
    "гр. Свети Влас",
    "к.к. Слънчев бряг",
    "гр. Несебър",
    "с. Равда",
    "гр. Ахелой",
    "гр. Поморие",
    "гр. Каблешково",
    "с. Кошарица",
    "с. Тънково",
    "с. Оризаре",
    "с. Гюльовца",
    "с. Горица",
    "с. Паницово",
    "с. Раковсково",
    "с. Козница",
    "с. Медово",
    "с. Каменар",
    "с. Александрово",
    "с. Порой",
    "с. Гълъбец",
    "с. Страцин"
  ]
};
