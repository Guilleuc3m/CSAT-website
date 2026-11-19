/* ST3LLARsat1 pages — behaviour specific to the mission section:
   keeps the current section tab in view on narrow screens, and drives the
   search / filter boxes and the folding report list of the documents page.
   Everything degrades to a plain, fully visible page without JavaScript. */
(function () {
  "use strict";

  var I18N = window.CSAT_I18N;
  function lang() {
    try { return localStorage.getItem("csat-lang") || "en"; } catch (e) { return "en"; }
  }
  function t(key) { return (I18N && I18N.t) ? I18N.t(key, lang()) : key; }

  function initFilter(scope) {
    var input = scope.querySelector('input[type="search"]');
    var items = scope.querySelectorAll(".pub, .rep");
    var chips = scope.querySelectorAll(".chip-btn[data-group]");
    var groups = scope.querySelectorAll("details.year-group");
    var courses = scope.querySelectorAll(".course");
    var heads = scope.querySelectorAll(".list-sub");
    var countEl = scope.querySelector("[data-count]");
    var noRes = scope.querySelector(".no-results");
    var toggle = scope.querySelector("[data-toggle-all]");
    var active = {};
    var lastShown = items.length, filtered = false;

    function setCount() {
      if (!countEl) return;
      countEl.textContent = filtered
        ? t("s1d.count").replace("{n}", lastShown).replace("{t}", items.length)
        : "";
    }

    function apply() {
      var q = input ? input.value.trim().toLowerCase() : "";
      var shown = 0, anyChip = false;
      Object.keys(active).forEach(function (g) { if (active[g].length) anyChip = true; });
      filtered = !!q || anyChip;

      Array.prototype.forEach.call(items, function (it) {
        var ok = !q || it.textContent.toLowerCase().indexOf(q) !== -1;
        if (ok) {
          Object.keys(active).forEach(function (g) {
            if (active[g].length && active[g].indexOf(it.getAttribute("data-" + g)) === -1) ok = false;
          });
        }
        it.hidden = !ok;
        if (ok) shown++;
      });

      // fold away whatever has nothing left to show
      Array.prototype.forEach.call(courses, function (c) {
        c.hidden = !c.querySelector(".rep:not([hidden])");
      });
      Array.prototype.forEach.call(groups, function (g) {
        var has = !!g.querySelector(".rep:not([hidden])");
        g.hidden = !has;
        if (q && has) g.open = true;
      });
      Array.prototype.forEach.call(heads, function (h) {
        var list = h.nextElementSibling;
        h.hidden = !!(list && !list.querySelector(".pub:not([hidden])"));
      });

      lastShown = shown;
      setCount();
      if (noRes) noRes.hidden = shown !== 0;
      setToggleLabel();
    }

    function setToggleLabel() {
      if (!toggle) return;
      var anyClosed = Array.prototype.some.call(groups, function (g) { return !g.hidden && !g.open; });
      toggle.setAttribute("data-state", anyClosed ? "expand" : "collapse");
      toggle.textContent = t(anyClosed ? "s1d.expand" : "s1d.collapse");
    }

    if (input) input.addEventListener("input", apply);

    Array.prototype.forEach.call(chips, function (chip) {
      chip.addEventListener("click", function () {
        var g = chip.getAttribute("data-group"), v = chip.getAttribute("data-value");
        var list = active[g] || (active[g] = []);
        var i = list.indexOf(v);
        if (i === -1) list.push(v); else list.splice(i, 1);
        chip.setAttribute("aria-pressed", i === -1 ? "true" : "false");
        apply();
      });
    });

    if (toggle) {
      toggle.addEventListener("click", function () {
        var open = toggle.getAttribute("data-state") === "expand";
        Array.prototype.forEach.call(groups, function (g) { g.open = open; });
        setToggleLabel();
      });
      Array.prototype.forEach.call(groups, function (g) {
        g.addEventListener("toggle", setToggleLabel);
      });
      setToggleLabel();
    }

    // The language switch rewrites the button text; put the right label back.
    document.addEventListener("csat:langchange", function () { setCount(); setToggleLabel(); });
    setCount();
  }

  document.addEventListener("DOMContentLoaded", function () {
    // On a phone the six tabs scroll sideways: bring the current one into view.
    var cur = document.querySelector('.mission-tabs a[aria-current="page"]');
    var list = document.querySelector(".mission-tabs__list");
    if (cur && list && list.scrollWidth > list.clientWidth) {
      list.scrollLeft = cur.offsetLeft - (list.clientWidth - cur.offsetWidth) / 2;
    }

    Array.prototype.forEach.call(document.querySelectorAll("[data-filterable]"), initFilter);
  });
})();
