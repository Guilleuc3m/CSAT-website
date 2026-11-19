/* Outreach page — behaviour:
   - filters the activity list by type and year (chips),
   - recomputes the two headline figures (activities, participants reached) from
     the list itself, so they follow the list when it is edited. Every activity
     listed counts, including those scheduled up to 29/11/2026.
   Without JavaScript the page is still complete: every activity is visible and
   the figures keep the values written in the HTML. */
(function () {
  "use strict";

  var I18N = window.CSAT_I18N;
  function lang() {
    try { return localStorage.getItem("csat-lang") || "en"; } catch (e) { return "en"; }
  }
  function t(key) { return (I18N && I18N.t) ? I18N.t(key, lang()) : key; }

  document.addEventListener("DOMContentLoaded", function () {
    var items = Array.prototype.slice.call(document.querySelectorAll(".ou-act"));

    /* ------------------------------------------------ headline figures */
    var held = items.length, people = 0;
    items.forEach(function (li) {
      var p = li.querySelector("[data-people]");
      if (p) people += parseInt(p.getAttribute("data-people"), 10) || 0;
    });
    var elAct = document.querySelector('[data-stat="activities"]');
    var elPeople = document.querySelector('[data-stat="people"]');
    if (elAct && items.length) elAct.textContent = String(held);
    // Rounded down to tens ("504" -> "500+"): the figures are approximate.
    if (elPeople && items.length) elPeople.textContent = (Math.floor(people / 10) * 10) + "+";

    /* ----------------------------------------------------------- filters */
    var chips = document.querySelectorAll(".ou-chip[data-group]");
    var countEl = document.querySelector("[data-count]");
    var emptyEl = document.querySelector(".ou-empty");
    var active = {};
    var shown = items.length, filtered = false;

    function setCount() {
      if (!countEl) return;
      countEl.textContent = filtered
        ? t("out.count").replace("{n}", shown).replace("{t}", items.length)
        : "";
    }

    function apply() {
      filtered = false;
      Object.keys(active).forEach(function (g) { if (active[g].length) filtered = true; });
      shown = 0;
      items.forEach(function (li) {
        var ok = true;
        Object.keys(active).forEach(function (g) {
          if (active[g].length && active[g].indexOf(li.getAttribute("data-" + g)) === -1) ok = false;
        });
        li.hidden = !ok;
        if (ok) shown++;
      });
      if (emptyEl) emptyEl.hidden = shown !== 0;
      setCount();
    }

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

    document.addEventListener("csat:langchange", setCount);
    setCount();
  });
})();
