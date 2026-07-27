/* Contact form handling.
   Submits to a static-hosting-friendly form service (Web3Forms by default).
   Replace WEB3FORMS_KEY below with your real access key from
   https://web3forms.com (free). Until then the form shows a friendly notice.
   Messages are localised through i18n keys already applied to the DOM. */
(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  // ▼▼▼ REPLACE THIS with your Web3Forms access key ▼▼▼
  var WEB3FORMS_KEY = "611d79b9-b1df-4828-8717-59c330f1b1ce";
  // ▲▲▲ ------------------------------------------- ▲▲▲

  var statusEl = document.getElementById("form-status");
  var submitBtn = form.querySelector('button[type="submit"]');
  var I18N = window.CSAT_I18N;

  function msg(key, fallback) {
    var lang = document.documentElement.getAttribute("lang") || "en";
    return (I18N && I18N.t) ? I18N.t(key, lang) : fallback;
  }

  // Required fields, in visual order, each paired with the i18n key of its label
  // so validation messages can name exactly what is missing (localised).
  var REQUIRED = [
    { name: "name", labelKey: "contact.form.name", fallback: "Name" },
    { name: "email", labelKey: "contact.form.email", fallback: "Email" },
    { name: "subject", labelKey: "contact.form.subject", fallback: "Subject" },
    { name: "message", labelKey: "contact.form.message", fallback: "Message" }
  ];

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    statusEl.className = "form-status";
    statusEl.textContent = "";

    // ---- Validation: every required field must be filled, email well-formed ----
    var missing = [];
    var firstInvalid = null;
    REQUIRED.forEach(function (f) {
      var field = form.elements[f.name];
      if (!field || !field.value.trim()) {
        missing.push(msg(f.labelKey, f.fallback));
        if (!firstInvalid) firstInvalid = field;
      }
    });

    if (missing.length) {
      statusEl.className = "form-status error";
      statusEl.textContent =
        msg("contact.form.required_prefix", "Please complete the required fields:") +
        " " + missing.join(", ") + ".";
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    var emailField = form.elements["email"];
    if (!isValidEmail(emailField.value.trim())) {
      statusEl.className = "form-status error";
      statusEl.textContent = msg("contact.form.invalid_email", "Please enter a valid email address.");
      emailField.focus();
      return;
    }

    if (!WEB3FORMS_KEY || WEB3FORMS_KEY === "YOUR_ACCESS_KEY_HERE") {
      statusEl.className = "form-status error";
      statusEl.textContent =
        "Form not configured yet — add a Web3Forms access key in js/pages/contact.js.";
      return;
    }

    var data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);

    var original = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = msg("contact.form.sending", "Sending…");

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data
    })
      .then(function (r) { return r.json(); })
      .then(function (json) {
        if (json.success) {
          statusEl.className = "form-status success";
          statusEl.textContent = msg("contact.form.success", "Thanks! Your message has been sent.");
          form.reset();
        } else {
          throw new Error(json.message || "error");
        }
      })
      .catch(function () {
        statusEl.className = "form-status error";
        statusEl.textContent = msg("contact.form.error", "Something went wrong. Please try again.");
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = original;
      });
  });
})();
