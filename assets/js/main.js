(function () {
  "use strict";

  var DATA = window.SITE_DATA || { services: [], products: [], towns: [], gallery: [] };
  var I18N = window.I18N;
  var PHONE_WA = "359886086029";
  var EMAIL = "ndelitklima@gmail.com";
  var PAGE = 12;

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
  };

  /* ---------- Language ---------- */
  var lang = (function () {
    var q = (location.search.match(/[?&]lang=(bg|en|ru)\b/) || [])[1];
    var s = store.get("lang");
    return q || (I18N.langs.indexOf(s) > -1 ? s : "bg");
  })();
  var t = function (key) { var e = I18N.T[key]; return e ? (e[lang] || e.bg) : key; };
  var L = function (v) { return v && typeof v === "object" ? (v[lang] || v.bg || "") : (v || ""); };
  var fmtBtu = function (n) { return Number(n).toLocaleString("bg-BG").replace(/\s/g, " ") + " BTU"; };
  var areaText = function (p) { return typeof p.area === "number" ? t("unit.area").replace("{n}", p.area) : L(p.area); };

  function applyStatic() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-ph")); });
    $$("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    $$(".lang__btn").forEach(function (b) {
      var on = b.dataset.lang === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    var wa = $("#hotelsWa");
    if (wa) wa.href = "https://wa.me/" + PHONE_WA + "?text=" + encodeURIComponent(t("hotels.waText"));
  }

  function setLang(l) {
    lang = l;
    store.set("lang", l);
    applyStatic();
    renderAll();
  }
  $$(".lang__btn").forEach(function (b) {
    b.addEventListener("click", function () { if (b.dataset.lang !== lang) setLang(b.dataset.lang); });
  });

  /* ---------- Icons ---------- */
  var ICONS = {
    install: '<path d="M22 6.5 17.5 2 14 5.5l1.6 1.6L8 14.7l-1.6-1.6L2 17.5 6.5 22l4.4-4.4-1.6-1.6 7.6-7.6 1.6 1.6z"/>',
    clean: '<path d="M19 2 9 12l3 3L22 5zM8 13l-5 5c-.6.6 0 3 3 3h3l4-4zm-2 6.5-1.5-1.5L7 15.5 8.5 17z"/>',
    repair: '<path d="M22.7 19 13.6 9.9a6 6 0 0 0-7.7-7.7l4 4-2.8 2.8-4-4a6 6 0 0 0 7.7 7.7l9.1 9.1a1 1 0 0 0 1.4 0l1.4-1.4a1 1 0 0 0 0-1.4z"/>',
    freon: '<path d="M12 2s-7 7.6-7 12.5a7 7 0 0 0 14 0C19 9.6 12 2 12 2zm0 17.5a4.5 4.5 0 0 1-4.5-4.5h2a2.5 2.5 0 0 0 2.5 2.5z"/>',
    remove: '<path d="M3 6h18v2H3zm2 3h14l-1.2 12.1a1 1 0 0 1-1 .9H7.2a1 1 0 0 1-1-.9zm4-7h6l1 2H8z"/>',
    hotel: '<path d="M7 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4z"/>',
    snow: '<path d="M11 2h2v4.2l2.6-2.6 1.4 1.4-4 4V11h2l4-4 1.4 1.4-2.6 2.6H22v2h-4.2l2.6 2.6L19 17l-4-4h-2v2l4 4-1.4 1.4-2.6-2.6V22h-2v-4.2l-2.6 2.6L7 19l4-4v-2H9l-4 4-1.4-1.4L6.2 13H2v-2h4.2L3.6 8.4 5 7l4 4h2V9L7 5l1.4-1.4L11 6.2z"/>',
    zoom: '<path d="M10 2a8 8 0 0 1 6.3 12.9l5.4 5.4-1.4 1.4-5.4-5.4A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-1 2h2v3h3v2h-3v3H9v-3H6V9h3z"/>'
  };
  var svg = function (name) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.snow) + "</svg>"; };

  /* ---------- Services ---------- */
  function renderServices() {
    var grid = $("#servicesGrid");
    if (!grid) return;
    grid.innerHTML = DATA.services.map(function (s) {
      return '<article class="service reveal is-visible">' +
        '<div class="service__ico">' + svg(s.icon) + "</div>" +
        "<h3>" + esc(L(s.title)) + "</h3>" +
        "<p>" + esc(L(s.text)) + "</p>" +
        '<div class="service__foot"><span class="service__price">' + t("price.ask") + "</span>" +
        '<button type="button" class="service__link" data-lead="consult" data-model="' + esc(L(s.title)) + '">' + t("services.request") + " &rarr;</button></div>" +
        "</article>";
    }).join("");
  }

  /* ---------- Catalog ---------- */
  var state = { type: "", brand: "", btu: "", q: "", sort: "default", limit: PAGE };
  var byId = {};
  DATA.products.forEach(function (p) { byId[p.id] = p; });

  // „Препоръчани“: първо featured, после марките се редуват
  var recommended = (function () {
    var featured = DATA.products.filter(function (p) { return p.featured; });
    var byBrand = {}, order = [], rest = DATA.products.filter(function (p) { return !p.featured; });
    rest.forEach(function (p) {
      if (!byBrand[p.brand]) { byBrand[p.brand] = []; order.push(p.brand); }
      byBrand[p.brand].push(p);
    });
    var out = featured.slice();
    while (out.length < DATA.products.length) {
      order.forEach(function (b) { if (byBrand[b].length) out.push(byBrand[b].shift()); });
    }
    return out;
  })();

  var uniq = function (arr) { return arr.filter(function (v, i) { return arr.indexOf(v) === i; }); };
  var TYPES = ["wall", "floor", "multi", "cassette", "duct", "column", "mobile"].filter(function (tp) {
    return DATA.products.some(function (p) { return p.type === tp; });
  });

  function renderFilters() {
    var chips = $("#typeChips");
    if (chips) {
      chips.innerHTML = [""].concat(TYPES).map(function (tp) {
        return '<button type="button" class="chip' + (state.type === tp ? " is-active" : "") + '" data-type="' + tp + '">' +
          (tp ? t("type." + tp) : t("catalog.all")) + "</button>";
      }).join("");
    }
    var fill = function (el, first, values, label) {
      if (!el) return;
      var cur = el.value;
      el.innerHTML = '<option value="">' + first + "</option>" + values.map(function (v) {
        return '<option value="' + esc(v) + '">' + esc(label ? label(v) : v) + "</option>";
      }).join("");
      el.value = cur;
    };
    fill($("#brandFilter"), t("catalog.allBrands"), uniq(DATA.products.map(function (p) { return p.brand; })).sort());
    fill($("#btuFilter"), t("catalog.anyBtu"), uniq(DATA.products.map(function (p) { return p.btu; })).sort(function (a, b) { return a - b; }), fmtBtu);
  }

  $("#typeChips").addEventListener("click", function (e) {
    var b = e.target.closest(".chip");
    if (!b) return;
    state.type = b.dataset.type;
    state.limit = PAGE;
    $$(".chip", this).forEach(function (c) { c.classList.toggle("is-active", c === b); });
    renderProducts();
  });

  function badgeHtml(b) {
    var key = "badge." + b, known = !!I18N.T[key];
    var cls = { leader: "badge--gold", hyper: "badge--blue", "new": "badge--red", install: "badge--green" }[b] || "badge--gold";
    return '<span class="badge ' + cls + '">' + esc(known ? t(key) : b) + "</span>";
  }

  /* Prices are not published: every model is "price on request". */
  function priceHtml() {
    return '<small>' + t("price.label") + '</small><b class="product__ask">' + t("price.ask") + "</b>";
  }

  function productCard(p) {
    var img = p.image
      ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy" width="400" height="300">'
      : '<div class="product__placeholder">' + svg("snow") + "<span>" + t("photoSoon") + "</span></div>";
    return '<article class="product' + (p.featured ? " product--featured" : "") + '">' +
      '<button type="button" class="product__media" data-open="' + esc(p.id) + '" aria-label="' + t("btn.details") + ": " + esc(p.name) + '">' +
        img + '<div class="product__badges">' + (p.badges || []).slice(0, 2).map(badgeHtml).join("") + "</div>" +
        (p.energy ? '<span class="product__energy">' + esc(p.energy) + "</span>" : "") +
      "</button>" +
      '<div class="product__body">' +
        '<span class="product__brand">' + esc(p.brand) + " · " + t("type." + p.type) + "</span>" +
        '<h3 class="product__name"><button type="button" data-open="' + esc(p.id) + '">' + esc(p.name) + "</button></h3>" +
        '<ul class="product__specs">' +
          "<li><small>" + t("spec.power") + "</small>" + fmtBtu(p.btu) + "</li>" +
          "<li><small>" + t("spec.area") + "</small>" + esc(areaText(p)) + "</li>" +
          "<li><small>Wi-Fi</small>" + (p.wifi ? t("yes") : t("no")) + "</li>" +
        "</ul>" +
        '<div class="product__foot">' +
          '<div class="product__price">' + priceHtml(p) + "</div>" +
          '<div class="product__btns">' +
            '<button type="button" class="btn btn--green btn--sm" data-lead="price" data-model="' + esc(p.name) + '">' + t("btn.price") + "</button>" +
            '<button type="button" class="btn btn--outline btn--sm" data-lead="consult" data-model="' + esc(p.name) + '">' + t("btn.consult") + "</button>" +
          "</div>" +
        "</div>" +
      "</div>" +
    "</article>";
  }

  function renderProducts() {
    var grid = $("#productsGrid");
    if (!grid) return;
    var q = state.q.trim().toLowerCase();
    var list = recommended.filter(function (p) {
      if (state.type && p.type !== state.type) return false;
      if (state.brand && p.brand !== state.brand) return false;
      if (state.btu && String(p.btu) !== state.btu) return false;
      if (q && (p.brand + " " + p.name).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
    if (state.sort === "btu") list.sort(function (a, b) { return a.btu - b.btu; });

    grid.innerHTML = list.slice(0, state.limit).map(productCard).join("");
    $("#productsEmpty").hidden = list.length > 0;
    var more = $("#showMore");
    more.hidden = list.length <= state.limit;
    more.textContent = t("catalog.more") + " (" + Math.max(0, list.length - state.limit) + ")";
    $("#productsCount").textContent = list.length ? t("catalog.found") + list.length : "";
  }

  var bindFilter = function (key, el, ev) {
    if (el) el.addEventListener(ev, function () { state[key] = el.value; state.limit = PAGE; renderProducts(); });
  };
  bindFilter("q", $("#search"), "input");
  bindFilter("btu", $("#btuFilter"), "change");
  bindFilter("brand", $("#brandFilter"), "change");
  bindFilter("sort", $("#sort"), "change");
  $("#showMore").addEventListener("click", function () { state.limit += PAGE; renderProducts(); });

  /* ---------- Dialogs ---------- */
  function openDialog(d) {
    if (!d) return;
    if (typeof d.showModal === "function") d.showModal(); else d.setAttribute("open", "");
  }
  $$("dialog").forEach(function (d) {
    d.addEventListener("click", function (e) {
      if (e.target === d || e.target.closest("[data-close]")) d.close();
    });
  });

  /* ---------- Product details ---------- */
  var productModal = $("#productModal");
  function openProduct(id) {
    var p = byId[id];
    if (!p) return;
    var s = p.specs || {};
    var img = p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '">' : '<div class="product__placeholder">' + svg("snow") + "</div>";
    var rows = [
      [t("spec.power"), fmtBtu(p.btu)],
      [t("spec.areaLong"), areaText(p)],
      [t("spec.wifi"), p.wifi ? t("yes") : t("no")]
    ];
    if (p.energy) rows.splice(2, 0, [t("spec.energy"), p.energy + (s.scopClass ? " / " + s.scopClass : "")]);
    if (s.refrigerant) rows.push([t("spec.refrigerant"), s.refrigerant]);
    if (s.noise) rows.push([t("spec.noise"), s.noise + " dB"]);
    if (s.heatMin != null) rows.push([t("spec.heat"), s.heatMin + "°C"]);
    if (s.seer) rows.push([t("spec.seer"), s.seer + (s.scop ? " / " + s.scop : "")]);
    if (s.warranty) rows.push([t("spec.warranty"), s.warranty + " " + t("unit.months")]);
    var desc = p.description ? L(p.description) : I18N.describe(p, lang);

    $("#modalBody").innerHTML =
      '<div class="modal__media">' + img + "</div>" +
      '<div class="modal__info">' +
        '<div class="product__badges product__badges--inline">' + (p.badges || []).map(badgeHtml).join("") + "</div>" +
        '<span class="product__brand">' + esc(p.brand) + " · " + t("type." + p.type) + "</span>" +
        '<h3 id="modalTitle">' + esc(p.name) + "</h3>" +
        '<table class="spec-table">' + rows.map(function (r) { return "<tr><th>" + esc(r[0]) + "</th><td>" + esc(r[1]) + "</td></tr>"; }).join("") + "</table>" +
        '<p class="modal__desc">' + esc(desc) + "</p>" +
        '<div class="modal__price product__price">' + priceHtml(p) + "</div>" +
        '<div class="form-actions">' +
          '<button type="button" class="btn btn--green" data-lead="price" data-model="' + esc(p.name) + '">' + t("btn.price") + "</button>" +
          '<button type="button" class="btn btn--outline" data-lead="consult" data-model="' + esc(p.name) + '">' + t("btn.consultLong") + "</button>" +
        "</div>" +
        '<p class="modal__note">' + t("catalog.note") + "</p>" +
      "</div>";
    openDialog(productModal);
  }

  /* ---------- Request form (price / consultation) ---------- */
  var leadModal = $("#leadModal"), leadForm = $("#leadForm");
  function openLead(type, model) {
    leadForm.elements.type.value = type === "price" ? "price" : "consult";
    leadForm.elements.model.value = model || "";
    $(".lead-form__model", leadForm).hidden = !model;
    $("#leadTitle").textContent = t(type === "price" ? "lead.title.price" : "lead.title.consult");
    $(".form-error", leadForm).hidden = true;
    if (productModal.open) productModal.close();
    openDialog(leadModal);
    setTimeout(function () { leadForm.elements.name.focus(); }, 50);
  }

  document.addEventListener("click", function (e) {
    var o = e.target.closest("[data-open]");
    if (o) { openProduct(o.dataset.open); return; }
    var l = e.target.closest("[data-lead]");
    if (l) openLead(l.dataset.lead, l.dataset.model);
  });

  function sendForm(form, via) {
    var f = form.elements;
    var name = (f.name.value || "").trim(), phone = (f.phone.value || "").trim();
    var err = $(".form-error", form);
    if (!name || !phone) { err.hidden = false; (name ? f.phone : f.name).focus(); return; }
    err.hidden = true;
    var lines = [t("msg.hello")];
    if (f.type) lines.push(t("form.type") + ": " + t("form.type." + f.type.value));
    if (f.model && f.model.value) lines.push(t("form.model") + ": " + f.model.value);
    lines.push(t("form.name") + ": " + name, t("form.phone") + ": " + phone);
    if (f.town && f.town.value) lines.push(t("form.town") + ": " + f.town.value);
    if (f.service && f.service.value) lines.push(t("form.service") + ": " + f.service.value);
    if (f.message && f.message.value.trim()) lines.push(t("form.msg") + ": " + f.message.value.trim());
    var text = lines.join("\n");
    if (via === "mail") {
      location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(t("msg.subject") + " – " + name) + "&body=" + encodeURIComponent(text);
    } else {
      window.open("https://wa.me/" + PHONE_WA + "?text=" + encodeURIComponent(text), "_blank", "noopener");
    }
  }
  $$(".lead-form").forEach(function (form) {
    var via = "wa";
    $$("[data-via]", form).forEach(function (b) { b.addEventListener("click", function () { via = b.dataset.via; }); });
    form.addEventListener("submit", function (e) { e.preventDefault(); sendForm(form, via); });
  });

  function renderFormSelects() {
    $$(".js-towns").forEach(function (el) {
      var cur = el.value;
      el.innerHTML = '<option value="">' + t("form.choose") + "</option>" + DATA.towns.map(function (tw) {
        return '<option value="' + esc(tw) + '">' + esc(I18N.town(tw, lang)) + "</option>";
      }).join("") + '<option value="' + t("form.other") + '">' + t("form.other") + "</option>";
      el.value = cur;
    });
    $$(".js-services").forEach(function (el) {
      var cur = el.selectedIndex;
      el.innerHTML = '<option value="">' + t("form.choose") + "</option>" + DATA.services.map(function (s) {
        return "<option>" + esc(L(s.title)) + "</option>";
      }).join("") + "<option>" + t("form.buyAc") + "</option>";
      el.selectedIndex = Math.max(0, cur);
    });
  }

  /* ---------- Calculator ---------- */
  var STANDARD = [9000, 12000, 18000, 24000];
  var recBtu = 9000;
  function calc() {
    var v = function (id) { return Math.max(0, parseFloat($(id).value) || 0); };
    var area = v("#cLen") * v("#cWid");
    var watts = area * 100 * ((parseFloat($("#cHei").value) || 2.7) / 2.7);
    if ($("#cSun").checked) watts *= 1.15;
    if ($("#cPeople").checked) watts *= 1.1;
    recBtu = STANDARD.filter(function (s) { return s >= watts * 3.412; })[0] || 0;
    $("#rArea").textContent = (Math.round(area * 10) / 10).toLocaleString("bg-BG") + (lang === "en" ? " m²" : " м²");
    $("#rBtu").textContent = recBtu ? fmtBtu(recBtu) : t("calc.over");
  }
  ["input", "change"].forEach(function (ev) { $("#calcForm").addEventListener(ev, calc); });
  $("#calcShow").addEventListener("click", function () {
    state.btu = recBtu ? String(recBtu) : "";
    $("#btuFilter").value = state.btu;
    state.limit = PAGE;
    renderProducts();
    $("#catalog").scrollIntoView({ behavior: "smooth" });
  });

  /* ---------- Gallery ---------- */
  var gallery = DATA.gallery || [];
  function renderGallery() {
    var grid = $("#galleryGrid");
    $("#galleryEmpty").hidden = gallery.length > 0;
    grid.hidden = !gallery.length;
    grid.innerHTML = gallery.map(function (g, i) {
      var title = L(g.title), place = g.place ? I18N.town(g.place, lang) : "";
      return '<button type="button" class="gallery__item" data-gallery="' + i + '">' +
        '<img src="' + esc(g.image) + '" alt="' + esc(title + (place ? " – " + place : "")) + '" loading="lazy">' +
        '<span class="gallery__cap"><b>' + esc(title) + "</b>" + (place ? "<small>" + esc(place) + "</small>" : "") + "</span>" +
        '<span class="gallery__zoom">' + svg("zoom") + "</span>" +
      "</button>";
    }).join("");
  }
  $("#galleryGrid").addEventListener("click", function (e) {
    var b = e.target.closest("[data-gallery]");
    if (!b) return;
    var g = gallery[+b.dataset.gallery];
    $("#lightboxImg").src = g.image;
    $("#lightboxImg").alt = L(g.title);
    $("#lightboxCap").textContent = L(g.title) + (g.place ? " · " + I18N.town(g.place, lang) : "");
    openDialog($("#lightbox"));
  });

  /* ---------- Towns ---------- */
  function renderTowns() {
    $("#towns").innerHTML = DATA.towns.map(function (tw) {
      return '<li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>' + esc(I18N.town(tw, lang)) + "</li>";
    }).join("");
  }

  function renderAll() {
    renderServices();
    renderFilters();
    renderProducts();
    renderFormSelects();
    renderGallery();
    renderTowns();
    calc();
    if (productModal.open) productModal.close();
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

  /* ---------- Init ---------- */
  applyStatic();
  renderAll();

  /* ---------- Reveal on scroll ---------- */
  var els = $$(".reveal:not(.is-visible)");
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

  $("#year").textContent = new Date().getFullYear();
})();
