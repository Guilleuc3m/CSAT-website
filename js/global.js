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

  /* ===== CONFIG =============================================================
     St3llarsat external site. When the project gets its own website, put the
     URL here and the "Project website" menu item starts working automatically.
     Leave it empty ("") until then and the link stays inert. */
  var STELLARSAT_URL = "";
  /* ========================================================================= */

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
        if (window.matchMedia("(max-width: 1024px)").matches) {
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

    // St3llarsat external link: activate it only once STELLARSAT_URL is set
    var stellarLink = document.getElementById("stellarsat-external");
    if (stellarLink) {
      if (STELLARSAT_URL) {
        stellarLink.setAttribute("href", STELLARSAT_URL);
      } else {
        stellarLink.classList.add("is-disabled");
        stellarLink.setAttribute("aria-disabled", "true");
        stellarLink.addEventListener("click", function (e) { e.preventDefault(); });
      }
    }

    // Inactive links (e.g. team email icons): keep the hover/press animation
    // but don't navigate anywhere for now.
    document.querySelectorAll("a.is-inactive").forEach(function (a) {
      a.addEventListener("click", function (e) { e.preventDefault(); });
    });

    // Deep-link centering: when the page loads with a #hash pointing at an
    // element (e.g. location.html#leganes), center that section in the viewport.
    // Done instantly (not smooth) once everything has laid out, so it's reliable.
    var centerHash = function () {
      if (location.hash.length <= 1) return;
      var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (!el) return;
      var prev = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      // Centring suits a short target (the location.html campus rows), but a
      // tall one, e.g. ST3LLARsat.html#team, would leave its heading far above
      // the viewport. Those align to the top instead, where the section's own
      // scroll-margin-top clears the sticky header.
      var fits = el.getBoundingClientRect().height < window.innerHeight * 0.8;
      el.scrollIntoView({ block: fits ? "center" : "start" });
      root.style.scrollBehavior = prev;
    };
    if (location.hash.length > 1) {
      window.addEventListener("load", function () { setTimeout(centerHash, 40); });
      // also try soon after DOM ready in case load already fired
      setTimeout(centerHash, 120);
    }

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

    // Back-to-top button. Injected from here rather than written into all 11
    // pages, and it only reveals itself once you are far enough down that
    // scrolling back is a chore — so on short pages it never appears at all.
    var toTopLabel = function () {
      var i18n = window.CSAT_I18N;
      return (i18n && i18n.t) ? i18n.t("toTop.label", getLang()) : "Back to top";
    };
    var toTop = document.createElement("button");
    toTop.className = "to-top";
    toTop.type = "button";
    toTop.setAttribute("aria-label", toTopLabel());
    toTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>';
    document.body.appendChild(toTop);

    var toTopOnScroll = function () {
      toTop.classList.toggle("show", window.scrollY > 600);
    };
    toTopOnScroll();
    window.addEventListener("scroll", toTopOnScroll, { passive: true });
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.addEventListener("csat:langchange", function () {
      toTop.setAttribute("aria-label", toTopLabel());
    });

    // Lightbox: click any content image inside <main> to enlarge it.
    // Opt out with class "no-zoom" on the <img>.
    var main = document.querySelector("main");
    if (main) {
      var lb = document.createElement("div");
      lb.className = "lightbox";
      lb.setAttribute("role", "dialog");
      lb.setAttribute("aria-modal", "true");
      lb.innerHTML = '<button class="lightbox__close" type="button" aria-label="Close">×</button><img alt="">';
      document.body.appendChild(lb);
      var lbImg = lb.querySelector("img");

      var openLb = function (src, alt) {
        lbImg.src = src;
        lbImg.alt = alt || "";
        lb.classList.add("open");
        document.body.style.overflow = "hidden";
      };
      var closeLb = function () {
        lb.classList.remove("open");
        document.body.style.overflow = "";
        lbImg.src = "";
      };

      main.addEventListener("click", function (e) {
        var t = e.target;
        if (t && t.tagName === "IMG" && !t.classList.contains("no-zoom")) {
          openLb(t.currentSrc || t.src, t.alt);
        }
      });
      lb.addEventListener("click", closeLb); // click anywhere (incl. image/close) dismisses
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && lb.classList.contains("open")) closeLb();
      });
    }

    // On-this-page index. Built at runtime from the elements a page tags with
    // data-toc, so the labels are the headings themselves: they follow the
    // EN/ES switch with no second list to keep in sync. Wide screens get a
    // rail parked in the left margin — it is fixed to the viewport, not part
    // of the layout, so the content stays exactly where it was. Narrow ones
    // get a sticky strip of pills under the header instead.
    var tocMain = document.querySelector("main");
    var tocTargets = tocMain ? tocMain.querySelectorAll("[data-toc][id]") : [];
    if (tocTargets.length > 2) {
      var toc = document.createElement("nav");
      toc.className = "toc";
      var tocLabel = function () {
        var i18n = window.CSAT_I18N;
        return (i18n && i18n.t) ? i18n.t("toc.label", getLang()) : "On this page";
      };
      toc.setAttribute("aria-label", tocLabel());
      var list = document.createElement("ul");
      list.className = "toc__list";

      var links = [];
      Array.prototype.forEach.call(tocTargets, function (target) {
        var tag = target.tagName;
        var heading = (tag === "H2" || tag === "H3") ? target : target.querySelector("h2, h3");
        if (!heading) return;
        var li = document.createElement("li");
        li.className = "toc__item" + (target.getAttribute("data-toc") === "sub" ? " toc__item--sub" : "");
        var a = document.createElement("a");
        a.className = "toc__link";
        a.href = "#" + target.id;
        a.innerHTML = '<span class="toc__tick" aria-hidden="true"></span><span class="toc__text"></span>';
        a.querySelector(".toc__text").textContent = heading.textContent.trim();
        li.appendChild(a);
        list.appendChild(li);
        links.push({ a: a, target: target, heading: heading });
      });
      if (links.length > 2) {
        var tocHead = document.createElement("p");
        tocHead.className = "toc__label";
        tocHead.textContent = tocLabel();
        toc.appendChild(tocHead);
        toc.appendChild(list);
        // Dropped in after the page hero, so the narrow-screen pill strip
        // starts below the title block instead of on top of it.
        var tocHero = tocMain.querySelector(".page-hero");
        tocMain.insertBefore(toc, tocHero ? tocHero.nextSibling : tocMain.firstChild);
        document.body.classList.add("has-toc");

        // Re-read the headings after a language switch.
        document.addEventListener("csat:langchange", function () {
          toc.setAttribute("aria-label", tocLabel());
          tocHead.textContent = tocLabel();
          links.forEach(function (l) {
            l.a.querySelector(".toc__text").textContent = l.heading.textContent.trim();
          });
        });

        // Clicking scrolls with the sticky header accounted for, and keeps the
        // pill strip from jumping by writing the hash without a second jump.
        links.forEach(function (l) {
          l.a.addEventListener("click", function (e) {
            e.preventDefault();
            var offset = parseInt(getComputedStyle(document.documentElement)
              .getPropertyValue("--header-h"), 10) || 68;
            var y = l.target.getBoundingClientRect().top + window.scrollY - offset - 18;
            window.scrollTo({ top: y, behavior: "smooth" });
            history.replaceState(null, "", "#" + l.target.id);
          });
        });

        // Scroll spy: the active entry is the last one whose top has passed
        // just under the header.
        var ticking = false;
        var markActive = function () {
          ticking = false;
          var headerH = parseInt(getComputedStyle(document.documentElement)
            .getPropertyValue("--header-h"), 10) || 68;
          // The margin panel only appears once the hero is out of the way.
          toc.classList.toggle("is-visible",
            !tocHero || tocHero.getBoundingClientRect().bottom <= headerH + 18);
          var line = window.scrollY + headerH + 90;
          var current = links[0];
          links.forEach(function (l) {
            if (l.target.getBoundingClientRect().top + window.scrollY <= line) current = l;
          });
          // At the very bottom the last entry wins, even if its top is above.
          if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
            current = links[links.length - 1];
          }
          links.forEach(function (l) {
            l.a.classList.toggle("is-active", l === current);
          });
          var activeEl = current && current.a;
          if (activeEl && toc.scrollWidth > toc.clientWidth) {
            // keep the active pill in view on the narrow strip
            var ar = activeEl.getBoundingClientRect(), tr = toc.getBoundingClientRect();
            if (ar.left < tr.left + 8 || ar.right > tr.right - 8) {
              toc.scrollLeft += ar.left - tr.left - 16;
            }
          }
        };
        markActive();
        window.addEventListener("scroll", function () {
          if (!ticking) { ticking = true; requestAnimationFrame(markActive); }
        }, { passive: true });
        window.addEventListener("resize", markActive);
      }
    }
  });
})();
