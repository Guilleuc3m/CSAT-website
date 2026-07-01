/* =========================================================================
   CSAT — Global behaviour
   Theme toggle (persisted), language toggle (persisted), mobile menu,
   dropdown handling, sticky-header state and scroll-reveal animations.
   Depends on i18n.js (window.CSAT_I18N) being loaded first.
   ========================================================================= */
(function () {
  "use strict";

  var STORAGE_THEME = "csat-theme";
  var STORAGE_LANG = "csat-lang";
  var root = document.documentElement;

  /* ---- Theme -------------------------------------------------------------
     The initial theme is set by an inline <head> script to avoid flashing.
     Here we only wire the toggle button. */
  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }
  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem(STORAGE_THEME, theme); } catch (e) {}
  }

  /* ---- Language ---------------------------------------------------------- */
  function getLang() {
    try {
      var saved = localStorage.getItem(STORAGE_LANG);
      if (saved) return saved;
    } catch (e) {}
    return (window.CSAT_I18N && window.CSAT_I18N.DEFAULT_LANG) || "en";
  }
  function setLang(lang) {
    try { localStorage.setItem(STORAGE_LANG, lang); } catch (e) {}
    if (window.CSAT_I18N) window.CSAT_I18N.apply(lang);
    document.dispatchEvent(new CustomEvent("csat:langchange", { detail: { lang: lang } }));
  }

  /* ---- Boot -------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    // Apply saved language on load
    setLang(getLang());

    // Theme toggle button(s)
    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setTheme(currentTheme() === "dark" ? "light" : "dark");
      });
    });

    // Language toggle button(s) — flip between the two available languages
    document.querySelectorAll(".lang-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(getLang() === "en" ? "es" : "en");
      });
    });

    // Mobile hamburger
    var navToggle = document.querySelector(".nav-toggle");
    if (navToggle) {
      navToggle.addEventListener("click", function () {
        document.body.classList.toggle("nav-open");
      });
    }

    // Dropdowns: hover on desktop (CSS), click/tap toggle on mobile
    document.querySelectorAll(".nav-item.has-dropdown > .nav-link").forEach(function (link) {
      link.addEventListener("click", function (e) {
        if (window.matchMedia("(max-width: 820px)").matches) {
          e.preventDefault();
          link.parentElement.classList.toggle("open");
        }
      });
    });

    // Close mobile menu when a real link is tapped
    document.querySelectorAll(".nav a[href]").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
      });
    });

    // Sticky header shadow on scroll
    var header = document.querySelector(".site-header");
    if (header) {
      var onScroll = function () {
        header.classList.toggle("scrolled", window.scrollY > 8);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    // Highlight the active nav item using <body data-page="...">
    var page = document.body.getAttribute("data-page");
    if (page) {
      var activeEl = document.querySelector('.nav-item[data-nav="' + page + '"]');
      if (activeEl) activeEl.classList.add("active");
    }

    // Scroll reveal
    var reveals = document.querySelectorAll(".reveal");
    if (reveals.length && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("in"); });
    }
  });
})();
