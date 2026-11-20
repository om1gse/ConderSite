/* =====================================================================
   ПРЕВОДИ – български (основен), английски, руски.
   Ключовете се използват в index.html (data-i18n="ключ") и в main.js.
   ===================================================================== */
(function () {
  "use strict";

  var T = {
    /* ---- Top bar / header ---- */
    "top.region": { bg: "Южното Черноморие", en: "Southern Black Sea coast", ru: "Южное Черноморье" },
    "top.hours": { bg: "Пон – Съб: 08:00 – 20:00", en: "Mon – Sat: 08:00 – 20:00", ru: "Пн – Сб: 08:00 – 20:00" },
    "nav.services": { bg: "Услуги", en: "Services", ru: "Услуги" },
    "nav.catalog": { bg: "Каталог", en: "Catalog", ru: "Каталог" },
    "nav.calc": { bg: "Калкулатор", en: "Calculator", ru: "Калькулятор" },
    "nav.gallery": { bg: "Галерия", en: "Gallery", ru: "Галерея" },
    "nav.hotels": { bg: "За хотели", en: "For hotels", ru: "Для отелей" },
    "nav.area": { bg: "Райони", en: "Areas", ru: "Районы" },
    "nav.faq": { bg: "Въпроси", en: "FAQ", ru: "Вопросы" },
    "nav.contacts": { bg: "Контакти", en: "Contacts", ru: "Контакты" },
    "nav.call": { bg: "Обадете се", en: "Call us", ru: "Позвонить" },
    "aria.menu": { bg: "Меню", en: "Menu", ru: "Меню" },
    "aria.close": { bg: "Затвори", en: "Close", ru: "Закрыть" },
    "aria.lang": { bg: "Език", en: "Language", ru: "Язык" },

    /* ---- Hero ---- */
    "hero.eyebrow": { bg: "Климатична техника · Монтаж · Сервиз", en: "Climate equipment · Installation · Service", ru: "Климатическая техника · Монтаж · Сервис" },
    "hero.title": { bg: "Ваш <em>надежден</em><br>партньор", en: "Your <em>reliable</em><br>partner", ru: "Ваш <em>надёжный</em><br>партнёр" },
    "hero.lead": {
      bg: "Климатици от водещи марки с професионален монтаж, профилактика и сервиз по Южното Черноморие. Работим с домове, офиси и хотели.",
      en: "Air conditioners from leading brands with professional installation, maintenance and service on the Southern Black Sea coast. We work with homes, offices and hotels.",
      ru: "Кондиционеры ведущих марок с профессиональным монтажом, профилактикой и сервисом на Южном Черноморье. Работаем с домами, офисами и отелями."
    },
    "hero.btnCatalog": { bg: "Разгледай каталога", en: "Browse the catalog", ru: "Смотреть каталог" },
    "hero.btnConsult": { bg: "Заявка за консултация", en: "Request a consultation", ru: "Заказать консультацию" },
    "hero.stat1": { bg: "населени места", en: "towns served", ru: "населённых пунктов" },
    "hero.stat2": { bg: "отговор на запитване", en: "response to requests", ru: "ответ на заявку" },
    "hero.stat3": { bg: "гаранция за монтажа", en: "installation warranty", ru: "гарантия на монтаж" },

    /* ---- Sales leader ---- */
    "leader.ribbon": { bg: "Лидер на продажбите", en: "Best seller", ru: "Лидер продаж" },
    "leader.heat": { bg: "Отопление до −20°C", en: "Heating down to −20°C", ru: "Обогрев до −20°C" },
    "leader.warranty": { bg: "5 години гаранция", en: "5-year warranty", ru: "5 лет гарантии" },

    /* ---- Benefits ---- */
    "b1.t": { bg: "Гаранция", en: "Warranty", ru: "Гарантия" },
    "b1.p": { bg: "Официална гаранция за техниката и за монтажа", en: "Official warranty on equipment and installation", ru: "Официальная гарантия на технику и монтаж" },
    "b2.t": { bg: "Бърз монтаж", en: "Fast installation", ru: "Быстрый монтаж" },
    "b2.p": { bg: "Оглед и монтаж в удобен за вас ден и час", en: "Site visit and installation at a time that suits you", ru: "Осмотр и монтаж в удобный для вас день и час" },
    "b3.t": { bg: "Честни цени", en: "Fair prices", ru: "Честные цены" },
    "b3.p": { bg: "Ясна оферта без скрити такси и изненади", en: "A clear quote with no hidden fees", ru: "Понятное предложение без скрытых платежей" },
    "b4.t": { bg: "Винаги на линия", en: "Always available", ru: "Всегда на связи" },
    "b4.p": { bg: "Viber и WhatsApp – пишете ни по всяко време", en: "Viber and WhatsApp – message us any time", ru: "Viber и WhatsApp – пишите в любое время" },

    /* ---- Services ---- */
    "services.eyebrow": { bg: "Какво правим", en: "What we do", ru: "Что мы делаем" },
    "services.title": { bg: "Нашите услуги", en: "Our services", ru: "Наши услуги" },
    "services.lead": {
      bg: "Пълен цикъл грижа за вашия климатик – от избора до дългогодишната поддръжка.",
      en: "Complete care for your air conditioner – from choosing the right unit to years of maintenance.",
      ru: "Полный цикл заботы о вашем кондиционере – от выбора до многолетнего обслуживания."
    },
    "services.request": { bg: "Заявка", en: "Request", ru: "Заявка" },

    /* ---- Catalog ---- */
    "catalog.eyebrow": { bg: "Каталог", en: "Catalog", ru: "Каталог" },
    "catalog.title": { bg: "Каталог климатици", en: "Air conditioner catalog", ru: "Каталог кондиционеров" },
    "catalog.lead": {
      bg: "Изберете модел и изпратете запитване – ще ви консултираме и ще изготвим оферта с монтаж.",
      en: "Choose a model and send a request – we will advise you and prepare a quote including installation.",
      ru: "Выберите модель и отправьте заявку – мы проконсультируем и подготовим предложение с монтажом."
    },
    "catalog.search": { bg: "Търсене по марка или модел", en: "Search by brand or model", ru: "Поиск по марке или модели" },
    "catalog.allBrands": { bg: "Всички марки", en: "All brands", ru: "Все марки" },
    "catalog.anyBtu": { bg: "Всяка мощност", en: "Any capacity", ru: "Любая мощность" },
    "catalog.all": { bg: "Всички", en: "All", ru: "Все" },
    "catalog.found": { bg: "Намерени модели: ", en: "Models found: ", ru: "Найдено моделей: " },
    "catalog.more": { bg: "Покажи още", en: "Show more", ru: "Показать ещё" },
    "catalog.empty": {
      bg: "Няма намерени модели по тези критерии. <a href=\"#contacts\">Попитайте ни</a> – ще намерим подходящ.",
      en: "No models match these filters. <a href=\"#contacts\">Ask us</a> – we will find the right one.",
      ru: "По этим критериям моделей не найдено. <a href=\"#contacts\">Спросите нас</a> – подберём подходящую."
    },
    "catalog.note": {
      bg: "Цените са ориентировъчни и не представляват търговско предложение. Окончателната цена с монтаж се договаря след консултация.",
      en: "Prices are indicative and do not constitute a commercial offer. The final price including installation is agreed after a consultation.",
      ru: "Цены ориентировочные и не являются коммерческим предложением. Окончательная цена с монтажом согласуется после консультации."
    },
    "sort.default": { bg: "Препоръчани", en: "Recommended", ru: "Рекомендуемые" },
    "sort.priceAsc": { bg: "Цена: възходяща", en: "Price: low to high", ru: "Цена: по возрастанию" },
    "sort.priceDesc": { bg: "Цена: низходяща", en: "Price: high to low", ru: "Цена: по убыванию" },
    "sort.btu": { bg: "По мощност", en: "By capacity", ru: "По мощности" },

    "spec.power": { bg: "Мощност", en: "Capacity", ru: "Мощность" },
    "spec.area": { bg: "Площ", en: "Area", ru: "Площадь" },
    "spec.areaLong": { bg: "Препоръчана площ", en: "Recommended room size", ru: "Рекомендуемая площадь" },
    "spec.energy": { bg: "Енергиен клас", en: "Energy class", ru: "Класс энергоэффективности" },
    "spec.wifi": { bg: "Wi-Fi управление", en: "Wi-Fi control", ru: "Управление по Wi-Fi" },
    "spec.refrigerant": { bg: "Хладилен агент", en: "Refrigerant", ru: "Хладагент" },
    "spec.noise": { bg: "Ниво на шум (вътр. тяло)", en: "Noise level (indoor unit)", ru: "Уровень шума (внутр. блок)" },
    "spec.heat": { bg: "Отопление до", en: "Heating down to", ru: "Обогрев до" },
    "spec.seer": { bg: "SEER / SCOP", en: "SEER / SCOP", ru: "SEER / SCOP" },
    "spec.warranty": { bg: "Гаранция", en: "Warranty", ru: "Гарантия" },
    "unit.months": { bg: "месеца", en: "months", ru: "мес." },
    "unit.area": { bg: "до {n} м²", en: "up to {n} m²", ru: "до {n} м²" },
    "yes": { bg: "Да", en: "Yes", ru: "Да" },
    "no": { bg: "Не", en: "No", ru: "Нет" },

    "price.ask": { bg: "Цена при запитване", en: "Price on request", ru: "Цена по запросу" },
    "price.label": { bg: "Ориентировъчна цена", en: "Indicative price", ru: "Ориентировочная цена" },
    "btn.price": { bg: "Запитване за цена", en: "Request price", ru: "Запросить цену" },
    "btn.consult": { bg: "Консултация", en: "Consultation", ru: "Консультация" },
    "btn.consultLong": { bg: "Заявка за консултация", en: "Request a consultation", ru: "Заказать консультацию" },
    "btn.details": { bg: "Детайли", en: "Details", ru: "Подробнее" },
    "btn.call": { bg: "Обадете се", en: "Call us", ru: "Позвонить" },
    "photoSoon": { bg: "Снимка скоро", en: "Photo coming soon", ru: "Фото скоро" },

    "type.wall": { bg: "Стенни", en: "Wall-mounted", ru: "Настенные" },
    "type.floor": { bg: "Подови", en: "Floor", ru: "Напольные" },
    "type.multi": { bg: "Мултисплит", en: "Multi-split", ru: "Мульти-сплит" },
    "type.cassette": { bg: "Касетъчни", en: "Cassette", ru: "Кассетные" },
    "type.duct": { bg: "Канални", en: "Ducted", ru: "Канальные" },
    "type.column": { bg: "Колонни", en: "Floor-standing", ru: "Колонные" },
    "type.mobile": { bg: "Мобилни", en: "Portable", ru: "Мобильные" },

    "badge.leader": { bg: "Лидер на продажбите", en: "Best seller", ru: "Лидер продаж" },
    "badge.hyper": { bg: "Хиперинвертор", en: "Hyper inverter", ru: "Гиперинвертор" },
    "badge.new": { bg: "Ново", en: "New", ru: "Новинка" },
    "badge.install": { bg: "Монтаж включен", en: "Installation included", ru: "Монтаж включён" },

    /* ---- Calculator ---- */
    "calc.eyebrow": { bg: "Помощ при избора", en: "Help choosing", ru: "Помощь в выборе" },
    "calc.title": { bg: "Каква мощност ви трябва?", en: "What capacity do you need?", ru: "Какая мощность вам нужна?" },
    "calc.lead": {
      bg: "Въведете размерите на помещението и ще ви подскажем ориентировъчната мощност на климатика. За точна оценка правим безплатен оглед.",
      en: "Enter the room dimensions and we will suggest an approximate capacity. For an exact assessment we offer a free site visit.",
      ru: "Введите размеры помещения, и мы подскажем ориентировочную мощность кондиционера. Для точной оценки проводим бесплатный осмотр."
    },
    "calc.li1": { bg: "Отчитаме височината на тавана", en: "We account for ceiling height", ru: "Учитываем высоту потолка" },
    "calc.li2": { bg: "Слънчева страна и големи прозорци", en: "Sunny side and large windows", ru: "Солнечная сторона и большие окна" },
    "calc.li3": { bg: "Брой хора в помещението", en: "Number of people in the room", ru: "Количество людей в помещении" },
    "calc.len": { bg: "Дължина, м", en: "Length, m", ru: "Длина, м" },
    "calc.wid": { bg: "Ширина, м", en: "Width, m", ru: "Ширина, м" },
    "calc.hei": { bg: "Височина, м", en: "Height, m", ru: "Высота, м" },
    "calc.sun": { bg: "Слънчева страна / големи прозорци", en: "Sunny side / large windows", ru: "Солнечная сторона / большие окна" },
    "calc.people": { bg: "Повече от 2 души постоянно", en: "More than 2 people regularly", ru: "Постоянно больше 2 человек" },
    "calc.area": { bg: "Площ", en: "Area", ru: "Площадь" },
    "calc.rec": { bg: "Препоръчана мощност", en: "Recommended capacity", ru: "Рекомендуемая мощность" },
    "calc.show": { bg: "Покажи подходящи модели", en: "Show suitable models", ru: "Показать подходящие модели" },
    "calc.over": { bg: "над 24 000 BTU", en: "over 24,000 BTU", ru: "более 24 000 BTU" },

    /* ---- Gallery ---- */
    "gallery.eyebrow": { bg: "Нашата работа", en: "Our work", ru: "Наши работы" },
    "gallery.title": { bg: "Галерия на изпълнени обекти", en: "Completed projects", ru: "Галерея выполненных работ" },
    "gallery.lead": { bg: "Реални обекти, които сме оборудвали и обслужваме.", en: "Real projects we have equipped and maintain.", ru: "Реальные объекты, которые мы оснастили и обслуживаем." },
    "gallery.empty": {
      bg: "Галерията се попълва. Междувременно вижте видеа от наши обекти в TikTok.",
      en: "The gallery is being updated. Meanwhile, watch videos of our projects on TikTok.",
      ru: "Галерея пополняется. А пока смотрите видео с наших объектов в TikTok."
    },
    "gallery.tiktok": { bg: "Към TikTok", en: "Open TikTok", ru: "Открыть TikTok" },

    /* ---- Hotels ---- */
    "hotels.eyebrow": { bg: "B2B партньорство", en: "B2B partnership", ru: "B2B партнёрство" },
    "hotels.title": { bg: "Дългосрочно бизнес сътрудничество", en: "Long-term business partnership", ru: "Долгосрочное бизнес-сотрудничество" },
    "hotels.lead": { bg: "За собственици и управители на хотелски бизнес", en: "For hotel owners and managers", ru: "Для владельцев и управляющих гостиничным бизнесом" },
    "hotels.li1": { bg: "<b>Абонаментна поддръжка</b> – планирана профилактика преди и след сезона", en: "<b>Maintenance contracts</b> – scheduled servicing before and after the season", ru: "<b>Абонентское обслуживание</b> – плановая профилактика до и после сезона" },
    "hotels.li2": { bg: "<b>Приоритетно обслужване</b> – бърза реакция при авария в разгара на сезона", en: "<b>Priority service</b> – fast response to breakdowns in peak season", ru: "<b>Приоритетное обслуживание</b> – быстрый выезд при аварии в разгар сезона" },
    "hotels.li3": { bg: "<b>Доставка и монтаж на обекти</b> – от няколко стаи до цели комплекси", en: "<b>Supply and installation</b> – from a few rooms to entire complexes", ru: "<b>Поставка и монтаж на объектах</b> – от нескольких номеров до целых комплексов" },
    "hotels.li4": { bg: "<b>Преференциални цени</b> за техника, консумативи и труд", en: "<b>Preferential prices</b> for equipment, consumables and labour", ru: "<b>Льготные цены</b> на технику, расходники и работу" },
    "hotels.btn": { bg: "Поискайте оферта", en: "Request a proposal", ru: "Запросить предложение" },
    "hotels.wa": { bg: "Пишете в WhatsApp", en: "Message on WhatsApp", ru: "Написать в WhatsApp" },
    "hotels.waText": { bg: "Здравейте! Интересувам се от обслужване на хотел.", en: "Hello! I am interested in hotel air conditioning service.", ru: "Здравствуйте! Интересует обслуживание отеля." },

    /* ---- Steps ---- */
    "steps.eyebrow": { bg: "Как работим", en: "How we work", ru: "Как мы работаем" },
    "steps.title": { bg: "4 лесни стъпки", en: "4 easy steps", ru: "4 простых шага" },
    "s1.t": { bg: "Запитване", en: "Request", ru: "Заявка" },
    "s1.p": { bg: "Изберете модел или ни пишете във Viber / WhatsApp.", en: "Choose a model or message us on Viber / WhatsApp.", ru: "Выберите модель или напишите нам в Viber / WhatsApp." },
    "s2.t": { bg: "Консултация и оглед", en: "Consultation & visit", ru: "Консультация и осмотр" },
    "s2.p": { bg: "Съветваме ви, идваме на място и даваме точна оферта.", en: "We advise you, visit the site and give an exact quote.", ru: "Консультируем, выезжаем на объект и даём точное предложение." },
    "s3.t": { bg: "Доставка и монтаж", en: "Delivery & installation", ru: "Поставка и монтаж" },
    "s3.p": { bg: "Чист и прецизен монтаж в договорения ден.", en: "Clean, precise installation on the agreed day.", ru: "Чистый и аккуратный монтаж в согласованный день." },
    "s4.t": { bg: "Поддръжка", en: "Maintenance", ru: "Обслуживание" },
    "s4.p": { bg: "Напомняме за профилактика и сме насреща при нужда.", en: "We remind you about servicing and are here when you need us.", ru: "Напоминаем о профилактике и всегда на связи." },

    /* ---- Area ---- */
    "area.eyebrow": { bg: "Регион на обслужване", en: "Service area", ru: "Регион обслуживания" },
    "area.title": { bg: "Южното Черноморие", en: "Southern Black Sea coast", ru: "Южное Черноморье" },
    "area.lead": {
      bg: "Обслужваме клиенти по Южното Черноморие и в близките населени места.",
      en: "We serve clients along the Southern Black Sea coast and nearby towns and villages.",
      ru: "Обслуживаем клиентов на Южном Черноморье и в близлежащих населённых пунктах."
    },

    /* ---- FAQ ---- */
    "faq.eyebrow": { bg: "Полезно", en: "Useful", ru: "Полезно" },
    "faq.title": { bg: "Често задавани въпроси", en: "Frequently asked questions", ru: "Частые вопросы" },
    "faq.q1": { bg: "Мога ли да поръчам климатик онлайн?", en: "Can I order an air conditioner online?", ru: "Можно ли заказать кондиционер онлайн?" },
    "faq.a1": {
      bg: "Сайтът е каталог: изберете модел и изпратете запитване за цена или консултация. Ще се свържем с вас, ще уточним детайлите и ще изготвим оферта. Плащания през сайта не се извършват.",
      en: "This website is a catalog: choose a model and send a price or consultation request. We will contact you, clarify the details and prepare a quote. No payments are made through the website.",
      ru: "Сайт – это каталог: выберите модель и отправьте запрос цены или консультации. Мы свяжемся с вами, уточним детали и подготовим предложение. Оплата через сайт не производится."
    },
    "faq.q2": { bg: "Колко време отнема монтажът на климатик?", en: "How long does installation take?", ru: "Сколько времени занимает монтаж?" },
    "faq.a2": {
      bg: "Стандартният монтаж на стенен климатик отнема обикновено 2–4 часа, в зависимост от трасето и достъпа до външното тяло.",
      en: "A standard wall unit installation usually takes 2–4 hours, depending on the pipe route and access to the outdoor unit.",
      ru: "Стандартный монтаж настенного кондиционера обычно занимает 2–4 часа – в зависимости от трассы и доступа к внешнему блоку."
    },
    "faq.q3": { bg: "Колко често трябва да се прави профилактика?", en: "How often should the unit be serviced?", ru: "Как часто нужна профилактика?" },
    "faq.a3": {
      bg: "Препоръчваме профилактика поне веднъж годишно, а при интензивна употреба (хотели, заведения) – преди и след летния сезон.",
      en: "We recommend servicing at least once a year, and for intensive use (hotels, restaurants) – before and after the summer season.",
      ru: "Рекомендуем профилактику минимум раз в год, а при интенсивном использовании (отели, заведения) – до и после летнего сезона."
    },
    "faq.q4": { bg: "Правите ли безплатен оглед?", en: "Do you offer a free site visit?", ru: "Делаете ли вы бесплатный осмотр?" },
    "faq.a4": {
      bg: "Да, при покупка на климатик с монтаж огледът е безплатен. Свържете се с нас, за да уговорим удобен час.",
      en: "Yes, the site visit is free when you buy an air conditioner with installation. Contact us to arrange a convenient time.",
      ru: "Да, при покупке кондиционера с монтажом осмотр бесплатный. Свяжитесь с нами, чтобы договориться об удобном времени."
    },
    "faq.q5": { bg: "Работите ли с хотели и фирми?", en: "Do you work with hotels and companies?", ru: "Работаете ли вы с отелями и компаниями?" },
    "faq.a5": {
      bg: "Да. Предлагаме дългосрочни договори за поддръжка, приоритетно обслужване и преференциални цени за бизнес клиенти.",
      en: "Yes. We offer long-term maintenance contracts, priority service and preferential prices for business clients.",
      ru: "Да. Предлагаем долгосрочные договоры обслуживания, приоритетный сервис и льготные цены для бизнес-клиентов."
    },

    /* ---- Contacts ---- */
    "contacts.eyebrow": { bg: "Свържете се с нас", en: "Get in touch", ru: "Свяжитесь с нами" },
    "contacts.title": { bg: "Контакти", en: "Contacts", ru: "Контакты" },
    "contacts.lead": {
      bg: "Обадете се, пишете ни или оставете заявка – ще се свържем с вас до 24 часа.",
      en: "Call us, message us or leave a request – we will get back to you within 24 hours.",
      ru: "Позвоните, напишите или оставьте заявку – мы свяжемся с вами в течение 24 часов."
    },
    "contacts.legal": { bg: "Юридическо наименование", en: "Company name", ru: "Юридическое название" },
    "contacts.phone": { bg: "Телефон за клиенти", en: "Customer phone", ru: "Телефон для клиентов" },
    "contacts.email": { bg: "Електронна поща", en: "E-mail", ru: "Электронная почта" },
    "contacts.hours": { bg: "Работно време", en: "Working hours", ru: "Время работы" },
    "contacts.hoursVal": { bg: "Понеделник – Събота", en: "Monday – Saturday", ru: "Понедельник – Суббота" },
    "contacts.region": { bg: "Регион на обслужване", en: "Service area", ru: "Регион обслуживания" },
    "contacts.regionSub": {
      bg: "Обзор · Несебър · Слънчев бряг · Поморие · Бургаска обл.",
      en: "Obzor · Nesebar · Sunny Beach · Pomorie · Burgas region",
      ru: "Обзор · Несебр · Солнечный Берег · Поморие · Бургасская обл."
    },

    /* ---- Forms ---- */
    "form.title": { bg: "Изпратете запитване", en: "Send a request", ru: "Отправить заявку" },
    "form.hint": {
      bg: "Попълнете формата – тя ще отвори WhatsApp или имейл с готово съобщение.",
      en: "Fill in the form – it will open WhatsApp or e-mail with a ready-made message.",
      ru: "Заполните форму – откроется WhatsApp или почта с готовым сообщением."
    },
    "form.type": { bg: "Вид запитване", en: "Request type", ru: "Тип заявки" },
    "form.type.price": { bg: "Запитване за цена", en: "Price request", ru: "Запрос цены" },
    "form.type.consult": { bg: "Консултация", en: "Consultation", ru: "Консультация" },
    "form.type.visit": { bg: "Оглед на място", en: "On-site visit", ru: "Выезд на осмотр" },
    "form.type.service": { bg: "Сервиз / профилактика", en: "Service / maintenance", ru: "Сервис / профилактика" },
    "form.model": { bg: "Модел", en: "Model", ru: "Модель" },
    "form.name": { bg: "Име", en: "Name", ru: "Имя" },
    "form.namePh": { bg: "Вашето име", en: "Your name", ru: "Ваше имя" },
    "form.phone": { bg: "Телефон", en: "Phone", ru: "Телефон" },
    "form.town": { bg: "Населено място", en: "Town / village", ru: "Населённый пункт" },
    "form.service": { bg: "Услуга", en: "Service", ru: "Услуга" },
    "form.choose": { bg: "Изберете", en: "Choose", ru: "Выберите" },
    "form.other": { bg: "Друго", en: "Other", ru: "Другое" },
    "form.buyAc": { bg: "Избор на климатик", en: "Choosing an air conditioner", ru: "Подбор кондиционера" },
    "form.msg": { bg: "Съобщение", en: "Message", ru: "Сообщение" },
    "form.msgPh": { bg: "Опишете накратко какво ви е нужно", en: "Briefly describe what you need", ru: "Кратко опишите, что вам нужно" },
    "form.wa": { bg: "Изпрати в WhatsApp", en: "Send via WhatsApp", ru: "Отправить в WhatsApp" },
    "form.mail": { bg: "Изпрати по имейл", en: "Send by e-mail", ru: "Отправить по e-mail" },
    "form.err": { bg: "Моля, попълнете име и телефон.", en: "Please enter your name and phone.", ru: "Пожалуйста, укажите имя и телефон." },
    "form.consent": {
      bg: "Данните ви се използват само за отговор на това запитване. Изпращането не е поръчка и не ви задължава.",
      en: "Your details are used only to reply to this request. Sending it is not an order and creates no obligation.",
      ru: "Ваши данные используются только для ответа на эту заявку. Отправка не является заказом и ни к чему не обязывает."
    },
    "lead.title.price": { bg: "Запитване за цена", en: "Price request", ru: "Запрос цены" },
    "lead.title.consult": { bg: "Заявка за консултация", en: "Consultation request", ru: "Заявка на консультацию" },
    "lead.hint": {
      bg: "Оставете телефон – ще ви се обадим с цена и съвет за монтажа.",
      en: "Leave your phone number – we will call you with a price and installation advice.",
      ru: "Оставьте телефон – мы перезвоним с ценой и советом по монтажу."
    },
    "msg.hello": { bg: "Здравейте! Запитване от сайта:", en: "Hello! Request from the website:", ru: "Здравствуйте! Заявка с сайта:" },
    "msg.subject": { bg: "Запитване от сайта", en: "Website request", ru: "Заявка с сайта" },
    "msg.interest": { bg: "Здравейте! Интересувам се от", en: "Hello! I am interested in", ru: "Здравствуйте! Интересует" },

    /* ---- Footer ---- */
    "footer.rights": { bg: "Всички права запазени.", en: "All rights reserved.", ru: "Все права защищены." },
    "footer.note": {
      bg: "Сайтът е каталог на климатична техника и услуги. Цените са ориентировъчни и не представляват търговско предложение. Онлайн продажби и плащания не се извършват.",
      en: "This website is a catalog of climate equipment and services. Prices are indicative and do not constitute a commercial offer. No online sales or payments are made.",
      ru: "Сайт является каталогом климатической техники и услуг. Цены ориентировочные и не являются коммерческим предложением. Онлайн-продажи и оплата не производятся."
    }
  };

  /* Описания на продуктите – генерират се от характеристиките */
  var TYPE_ONE = {
    wall: { bg: "Стенен инверторен климатик", en: "Wall-mounted inverter air conditioner", ru: "Настенный инверторный кондиционер" },
    floor: { bg: "Подов климатик", en: "Floor air conditioner", ru: "Напольный кондиционер" },
    multi: { bg: "Мултисплит система", en: "Multi-split system", ru: "Мульти-сплит система" },
    column: { bg: "Колонен климатик", en: "Floor-standing air conditioner", ru: "Колонный кондиционер" },
    cassette: { bg: "Касетъчен климатик", en: "Cassette air conditioner", ru: "Кассетный кондиционер" },
    duct: { bg: "Канален климатик", en: "Ducted air conditioner", ru: "Канальный кондиционер" },
    mobile: { bg: "Мобилен климатик", en: "Portable air conditioner", ru: "Мобильный кондиционер" }
  };
  var TYPE_USE = {
    wall: { bg: "подходящ за спални, детски стаи и хол", en: "ideal for bedrooms, children's rooms and living rooms", ru: "подходит для спален, детских и гостиных" },
    floor: { bg: "монтира се ниско на стената или под прозорец – отличен за отопление", en: "mounted low on the wall or under a window – excellent for heating", ru: "монтируется низко на стене или под окном – отлично подходит для обогрева" },
    multi: { bg: "за няколко помещения с едно външно тяло", en: "for several rooms with a single outdoor unit", ru: "для нескольких помещений с одним внешним блоком" },
    column: { bg: "за големи пространства – магазини, ресторанти и зали", en: "for large spaces – shops, restaurants and halls", ru: "для больших пространств – магазинов, ресторанов и залов" },
    cassette: { bg: "вгражда се в окачен таван – подходящ за офиси, заведения и хотели", en: "built into a suspended ceiling – suitable for offices, restaurants and hotels", ru: "встраивается в подвесной потолок – для офисов, заведений и отелей" },
    duct: { bg: "за скрит монтаж с разпределение на въздуха по въздуховоди", en: "for concealed installation with air distribution through ducts", ru: "для скрытого монтажа с распределением воздуха по воздуховодам" },
    mobile: { bg: "не изисква монтаж и се мести от стая в стая", en: "needs no installation and moves from room to room", ru: "не требует монтажа и переносится из комнаты в комнату" }
  };

  function fmt(n) { return Number(n).toLocaleString("bg-BG").replace(/\s/g, " "); }

  function describe(p, lang) {
    var s = p.specs || {};
    var L = function (o) { return o[lang] || o.bg; };
    var parts = [];
    var cap = { bg: " с мощност ", en: " with a capacity of ", ru: " мощностью " }[lang];
    parts.push(L(TYPE_ONE[p.type] || TYPE_ONE.wall) + " " + p.brand + cap + fmt(p.btu) + " BTU – " + L(TYPE_USE[p.type] || TYPE_USE.wall) + ".");
    var eff = [];
    if (p.energy && p.energy !== "—") eff.push({ bg: "енергиен клас " + p.energy + " при охлаждане", en: "energy class " + p.energy + " in cooling", ru: "класс " + p.energy + " в режиме охлаждения" }[lang]);
    if (s.seer) eff.push("SEER " + s.seer);
    if (s.scop) eff.push("SCOP " + s.scop);
    if (eff.length) parts.push({ bg: "Висока ефективност: ", en: "High efficiency: ", ru: "Высокая эффективность: " }[lang] + eff.join(", ") + ".");
    if (s.heatMin != null && s.heatMin <= -15) parts.push({
      bg: "Отоплява надеждно и при ниски външни температури – до " + s.heatMin + "°C.",
      en: "Heats reliably even in cold weather – down to " + s.heatMin + "°C outside.",
      ru: "Надёжно обогревает даже в мороз – до " + s.heatMin + "°C на улице."
    }[lang]);
    if (s.noise) parts.push({
      bg: "Тиха работа – вътрешното тяло работи от " + s.noise + " dB.",
      en: "Quiet operation – the indoor unit runs from " + s.noise + " dB.",
      ru: "Тихая работа – внутренний блок от " + s.noise + " дБ."
    }[lang]);
    if (p.wifi) parts.push({
      bg: "Управление от телефона чрез Wi-Fi.",
      en: "Control from your phone via Wi-Fi.",
      ru: "Управление со смартфона по Wi-Fi."
    }[lang]);
    parts.push({
      bg: "Предлагаме консултация, доставка, професионален монтаж и гаранционно обслужване по Южното Черноморие.",
      en: "We offer consultation, delivery, professional installation and warranty service on the Southern Black Sea coast.",
      ru: "Предлагаем консультацию, доставку, профессиональный монтаж и гарантийное обслуживание на Южном Черноморье."
    }[lang]);
    return parts.join(" ");
  }

  /* Населени места: латиница за EN, руски изписвания за RU */
  var TR = { "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ж": "zh", "з": "z", "и": "i", "й": "y", "к": "k", "л": "l", "м": "m", "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u", "ф": "f", "х": "h", "ц": "ts", "ч": "ch", "ш": "sh", "щ": "sht", "ъ": "a", "ь": "y", "ю": "yu", "я": "ya" };
  var RU_TOWNS = { "Слънчев бряг": "Солнечный Берег", "Свети Влас": "Святой Влас", "Несебър": "Несебр", "Гълъбец": "Галабец", "Тънково": "Тынково", "Гюльовца": "Гюлёвца", "Раковсково": "Раковсково" };
  var EN_TOWNS = { "Слънчев бряг": "Sunny Beach", "Несебър": "Nesebar", "Свети Влас": "Sveti Vlas", "Елените": "Elenite" };

  function town(name, lang) {
    if (lang === "bg") return name;
    var m = name.match(/^(гр\.|с\.|к\.к\.)\s*(.+)$/);
    var pre = m ? m[1] : "", base = m ? m[2] : name;
    if (lang === "ru") return ({ "гр.": "г. ", "с.": "с. ", "к.к.": "к.к. " }[pre] || "") + (RU_TOWNS[base] || base);
    var lat = EN_TOWNS[base] || base.replace(/[а-яА-Я]/g, function (c) {
      var low = c.toLowerCase(), r = TR[low] || c;
      return c === low ? r : r.charAt(0).toUpperCase() + r.slice(1);
    });
    return lat + (pre === "к.к." ? " resort" : "");
  }

  window.I18N = { T: T, describe: describe, town: town, langs: ["bg", "en", "ru"] };
})();
