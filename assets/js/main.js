(function () {
  "use strict";

  var DATA = window.SITE_DATA || { services: [], products: [], towns: [], productTypes: {} };
  var PHONE_WA = "359886086029";
  var EMAIL = "ndelitklima@gmail.com";

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var fmtBtu = function (n) { return Number(n).toLocaleString("bg-BG").replace(/\s/g, " ") + " BTU"; };
  var fmtPrice = function (n) { return Number(n).toLocaleString("bg-BG", { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + " €"; };

  /* ---------- Icons ---------- */
  var ICONS = {
    install: '<path d="M22 6.5 17.5 2 14 5.5l1.6 1.6L8 14.7l-1.6-1.6L2 17.5 6.5 22l4.4-4.4-1.6-1.6 7.6-7.6 1.6 1.6z"/>',
    clean: '<path d="M19 2 9 12l3 3L22 5zM8 13l-5 5c-.6.6 0 3 3 3h3l4-4zm-2 6.5-1.5-1.5L7 15.5 8.5 17z"/>',
    repair: '<path d="M22.7 19 13.6 9.9a6 6 0 0 0-7.7-7.7l4 4-2.8 2.8-4-4a6 6 0 0 0 7.7 7.7l9.1 9.1a1 1 0 0 0 1.4 0l1.4-1.4a1 1 0 0 0 0-1.4z"/>',
    freon: '<path d="M12 2s-7 7.6-7 12.5a7 7 0 0 0 14 0C19 9.6 12 2 12 2zm0 17.5a4.5 4.5 0 0 1-4.5-4.5h2a2.5 2.5 0 0 0 2.5 2.5z"/>',
    remove: '<path d="M3 6h18v2H3zm2 3h14l-1.2 12.1a1 1 0 0 1-1 .9H7.2a1 1 0 0 1-1-.9zm4-7h6l1 2H8z"/>',
    hotel: '<path d="M7 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4z"/>',
    snow: '<path d="M11 2h2v4.2l2.6-2.6 1.4 1.4-4 4V11h2l4-4 1.4 1.4-2.6 2.6H22v2h-4.2l2.6 2.6L19 17l-4-4h-2v2l4 4-1.4 1.4-2.6-2.6V22h-2v-4.2l-2.6 2.6L7 19l4-4v-2H9l-4 4-1.4-1.4L6.2 13H2v-2h4.2L3.6 8.4 5 7l4 4h2V9L7 5l1.4-1.4L11 6.2z"/>'
  };
  var svg = function (name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.snow) + "</svg>";
  };

  /* ---------- Services ---------- */
  var servicesGrid = $("#servicesGrid");
  if (servicesGrid) {
    servicesGrid.innerHTML = DATA.services.map(function (s) {
      return '<article class="service reveal">' +
        '<div class="service__ico">' + svg(s.icon) + "</div>" +
        "<h3>" + esc(s.title) + "</h3>" +
        "<p>" + esc(s.text) + "</p>" +
        '<div class="service__foot"><span class="service__price">' + esc(s.price) + "</span>" +
        '<a href="#contacts" class="service__link" data-service="' + esc(s.title) + '">Заявка &rarr;</a></div>' +
        "</article>";
    }).join("");
  }

  /* ---------- Catalog ---------- */
  var state = { type: "", btu: "", q: "", sort: "default" };
  var grid = $("#productsGrid");
  var empty = $("#productsEmpty");
  var chips = $("#typeChips");

  var usedTypes = DATA.products.reduce(function (acc, p) {
    if (acc.indexOf(p.type) < 0) acc.push(p.type);
    return acc;
  }, []);

  if (chips) {
    var chipHtml = '<button class="chip is-active" data-type="">Всички</button>';
    usedTypes.forEach(function (t) {
      chipHtml += '<button class="chip" data-type="' + esc(t) + '">' + esc(DATA.productTypes[t] || t) + "</button>";
    });
    chips.innerHTML = chipHtml;
    chips.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b) return;
      chips.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
      b.classList.add("is-active");
      state.type = b.dataset.type;
      renderProducts();
    });
  }

  function badgeClass(b) {
    var k = b.toLowerCase();
    if (k.indexOf("промо") > -1) return "badge--red";
    if (k.indexOf("монтаж") > -1) return "badge--green";
    if (k.indexOf("ново") > -1) return "badge--blue";
    return "badge--gold";
  }

  function productCard(p) {
    var img = p.image
      ? '<img src="' + esc(p.image) + '" alt="' + esc(p.brand + " " + p.name) + '" loading="lazy">'
      : '<div class="product__placeholder">' + svg("snow") + "<span>Снимка скоро</span></div>";
    var badges = (p.badges || []).map(function (b) {
      return '<span class="badge ' + badgeClass(b) + '">' + esc(b) + "</span>";
    }).join("");
    var price = p.price != null
      ? (p.oldPrice ? '<s>' + fmtPrice(p.oldPrice) + "</s>" : "") + "<b>" + fmtPrice(p.price) + "</b>"
      : '<b class="product__ask">Цена при запитване</b>';

    return '<article class="product reveal is-visible">' +
      '<button class="product__media" data-open="' + esc(p.id) + '" aria-label="Детайли за ' + esc(p.name) + '">' +
        img + '<div class="product__badges">' + badges + "</div>" +
        '<span class="product__energy">' + esc(p.energy) + "</span>" +
      "</button>" +
      '<div class="product__body">' +
        '<span class="product__brand">' + esc(p.brand) + " · " + esc(DATA.productTypes[p.type] || "") + "</span>" +
        '<h3 class="product__name">' + esc(p.name) + "</h3>" +
        '<ul class="product__specs">' +
          "<li><small>Мощност</small>" + fmtBtu(p.btu) + "</li>" +
          "<li><small>Площ</small>" + esc(p.area) + "</li>" +
          "<li><small>Wi-Fi</small>" + (p.wifi ? "Да" : "Не") + "</li>" +
        "</ul>" +
        '<div class="product__foot">' +
          '<div class="product__price">' + price + "</div>" +
          '<div class="product__btns">' +
            '<button class="btn btn--outline btn--sm" data-open="' + esc(p.id) + '">Детайли</button>' +
            '<a class="btn btn--green btn--sm" target="_blank" rel="noopener" href="' + waLink(p) + '">Запитване</a>' +
          "</div>" +
        "</div>" +
      "</div>" +
    "</article>";
  }

  function waLink(p) {
    var msg = "Здравейте! Интересувам се от: " + p.brand + " " + p.name + " (" + fmtBtu(p.btu) + ").";
    return "https://wa.me/" + PHONE_WA + "?text=" + encodeURIComponent(msg);
  }

  function renderProducts() {
    if (!grid) return;
    var q = state.q.trim().toLowerCase();
    var list = DATA.products.filter(function (p) {
      if (state.type && p.type !== state.type) return false;
      if (state.btu && String(p.btu) !== state.btu) return false;
      if (q && (p.brand + " " + p.name).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
    var priceOf = function (p) { return p.price == null ? Infinity : p.price; };
    if (state.sort === "price-asc") list.sort(function (a, b) { return priceOf(a) - priceOf(b); });
    if (state.sort === "price-desc") list.sort(function (a, b) { return (b.price || 0) - (a.price || 0); });
    if (state.sort === "btu") list.sort(function (a, b) { return a.btu - b.btu; });

    grid.innerHTML = list.map(productCard).join("");
    empty.hidden = list.length > 0;
  }

  var searchEl = $("#search"), btuEl = $("#btuFilter"), sortEl = $("#sort");
  if (searchEl) searchEl.addEventListener("input", function () { state.q = searchEl.value; renderProducts(); });
  if (btuEl) btuEl.addEventListener("change", function () { state.btu = btuEl.value; renderProducts(); });
  if (sortEl) sortEl.addEventListener("change", function () { state.sort = sortEl.value; renderProducts(); });
  renderProducts();

  /* ---------- Product modal ---------- */
  var modal = $("#productModal"), modalBody = $("#modalBody");

  function openProduct(id) {
    var p = DATA.products.filter(function (x) { return x.id === id; })[0];
    if (!p || !modal) return;
    var img = p.image
      ? '<img src="' + esc(p.image) + '" alt="">'
      : '<div class="product__placeholder">' + svg("snow") + "</div>";
    var feats = (p.features || []).map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("");
    var price = p.price != null
      ? (p.oldPrice ? "<s>" + fmtPrice(p.oldPrice) + "</s> " : "") + "<b>" + fmtPrice(p.price) + "</b>"
      : "<b>Цена при запитване</b>";
    modalBody.innerHTML =
      '<div class="modal__media">' + img + "</div>" +
      '<div class="modal__info">' +
        '<span class="product__brand">' + esc(p.brand) + " · " + esc(DATA.productTypes[p.type] || "") + "</span>" +
        '<h3 id="modalTitle">' + esc(p.name) + "</h3>" +
        '<table class="spec-table">' +
          "<tr><th>Мощност</th><td>" + fmtBtu(p.btu) + "</td></tr>" +
          "<tr><th>Препоръчана площ</th><td>" + esc(p.area) + "</td></tr>" +
          "<tr><th>Енергиен клас</th><td>" + esc(p.energy) + "</td></tr>" +
          "<tr><th>Wi-Fi управление</th><td>" + (p.wifi ? "Да" : "Не") + "</td></tr>" +
        "</table>" +
        (feats ? '<ul class="checklist">' + feats + "</ul>" : "") +
        '<div class="modal__price">' + price + "</div>" +
        '<div class="form-actions">' +
          '<a class="btn btn--green" target="_blank" rel="noopener" href="' + waLink(p) + '">Запитване в WhatsApp</a>' +
          '<a class="btn btn--outline" href="tel:+359886086029">Обадете се</a>' +
        "</div>" +
      "</div>";
    modal.showModal();
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-open]");
    if (t) openProduct(t.dataset.open);
  });
  if (modal) {
    $("#modalClose").addEventListener("click", function () { modal.close(); });
    modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });
  }

  /* ---------- Calculator ---------- */
  var cLen = $("#cLen"), cWid = $("#cWid"), cHei = $("#cHei"), cSun = $("#cSun"), cPeople = $("#cPeople");
  var STANDARD = [9000, 12000, 18000, 24000];
  var recommended = 9000;

  function calc() {
    if (!cLen) return;
    var area = Math.max(0, parseFloat(cLen.value) || 0) * Math.max(0, parseFloat(cWid.value) || 0);
    var h = parseFloat(cHei.value) || 2.7;
    var watts = area * 100 * (h / 2.7);
    if (cSun.checked) watts *= 1.15;
    if (cPeople.checked) watts *= 1.1;
    var btu = watts * 3.412;
    recommended = STANDARD.filter(function (s) { return s >= btu; })[0] || 0;
    $("#rArea").textContent = (Math.round(area * 10) / 10).toLocaleString("bg-BG") + " м²";
    $("#rBtu").textContent = recommended ? fmtBtu(recommended) : "над 24 000 BTU";
  }
  ["input", "change"].forEach(function (ev) {
    var f = $("#calcForm");
    if (f) f.addEventListener(ev, calc);
  });
  calc();

  var calcShow = $("#calcShow");
  if (calcShow) calcShow.addEventListener("click", function () {
    state.btu = recommended ? String(recommended) : "";
    btuEl.value = state.btu;
    renderProducts();
    $("#catalog").scrollIntoView({ behavior: "smooth" });
  });

  /* ---------- Towns ---------- */
  var towns = $("#towns"), townSelect = $("#townSelect"), serviceSelect = $("#serviceSelect");
  if (towns) towns.innerHTML = DATA.towns.map(function (t) {
    return '<li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>' + esc(t) + "</li>";
  }).join("");
  if (townSelect) townSelect.innerHTML += DATA.towns.map(function (t) {
    return '<option>' + esc(t) + "</option>";
  }).join("") + "<option>Друго</option>";
  if (serviceSelect) serviceSelect.innerHTML += DATA.services.map(function (s) {
    return "<option>" + esc(s.title) + "</option>";
  }).join("") + "<option>Покупка на климатик</option>";

  document.addEventListener("click", function (e) {
    var l = e.target.closest("[data-service]");
    if (l && serviceSelect) serviceSelect.value = l.dataset.service;
  });

  /* ---------- Contact form ---------- */
  var form = $("#contactForm");
  if (form) {
    var via = "wa";
    form.querySelectorAll("[data-via]").forEach(function (b) {
      b.addEventListener("click", function () { via = b.dataset.via; });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var name = (fd.get("name") || "").trim(), phone = (fd.get("phone") || "").trim();
      var err = $("#formError");
      if (!name || !phone) {
        err.hidden = false;
        form.elements[name ? "phone" : "name"].focus();
        return;
      }
      err.hidden = true;
      var lines = [
        "Здравейте! Запитване от сайта:",
        "Име: " + name,
        "Телефон: " + phone
      ];
      if (fd.get("town")) lines.push("Населено място: " + fd.get("town"));
      if (fd.get("service")) lines.push("Услуга: " + fd.get("service"));
      if ((fd.get("message") || "").trim()) lines.push("Съобщение: " + fd.get("message").trim());
      var text = lines.join("\n");
      if (via === "mail") {
        location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Запитване от сайта – " + name) + "&body=" + encodeURIComponent(text);
      } else {
        window.open("https://wa.me/" + PHONE_WA + "?text=" + encodeURIComponent(text), "_blank", "noopener");
      }
    });
  }

  /* ---------- Header / nav ---------- */
  var header = $("#header"), burger = $("#burger"), nav = $("#nav");
  var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 10); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    if (open) nav.style.top = header.getBoundingClientRect().bottom + "px";
    nav.classList.toggle("is-open", open);
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  }
  burger.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* ---------- Reveal on scroll ---------- */
  var els = document.querySelectorAll(".reveal:not(.is-visible)");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("is-visible"); });
  }

  var y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
})();
