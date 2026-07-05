/**
 * Topping Tech floating nav: Back Home + FA/EN language switch
 * Load AFTER i18n-pairs.js:
 *   <script src="../assets/i18n-pairs.js"></script>
 *   <script src="../assets/tc-nav.js"></script>
 */
(function () {
  if (document.getElementById("tc-nav-bar")) return;

  var pathParts = location.pathname.split("/").filter(Boolean);
  var fileName = pathParts[pathParts.length - 1] || "index.html";
  var folderParts = pathParts.slice(0, -1);
  var relKey = folderParts.length ? folderParts.join("/") + "/" + fileName : fileName;
  var depth = folderParts.length;
  var homeHref = depth > 0 ? "../".repeat(depth) + "index.html" : "./index.html";

  function resolveAltHref() {
    var pairs = window.TC_I18N_PAIRS || {};
    var alt = pairs[relKey];
    if (!alt) return null;
    var altParts = alt.split("/");
    var altFile = altParts[altParts.length - 1];
    var altFolder = altParts.slice(0, -1).join("/");
    var curFolder = folderParts.join("/");
    if (altFolder === curFolder) return altFile;
    if (depth === 0) return alt;
    return "../".repeat(depth) + alt;
  }

  var isEn = /-en\.html$/.test(fileName) || fileName === "index-en.html" ||
    fileName === "sales-candidate-package-en.html";

  var style = document.createElement("style");
  style.textContent = [
    "#tc-nav-bar{position:fixed;bottom:24px;left:24px;z-index:99999;display:flex;flex-direction:column;gap:8px}",
    ".tc-nav-btn{display:inline-flex;align-items:center;gap:8px;padding:11px 16px;border-radius:999px;",
    "background:rgba(255,255,255,.75);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);",
    "border:1px solid rgba(255,255,255,.55);box-shadow:0 8px 32px rgba(15,76,129,.12);",
    "color:#0f4c81;font-family:system-ui,Tahoma,sans-serif;font-size:13px;font-weight:700;",
    "text-decoration:none;cursor:pointer;transition:transform .2s,box-shadow .2s;white-space:nowrap}",
    ".tc-nav-btn:hover{transform:translateY(-2px);background:rgba(255,255,255,.92);box-shadow:0 12px 40px rgba(15,76,129,.18)}",
    ".tc-nav-btn .ico{font-size:16px;line-height:1}",
    "@media(max-width:560px){#tc-nav-bar{bottom:16px;left:16px}.tc-nav-btn{padding:9px 13px;font-size:12px}}"
  ].join("");
  document.head.appendChild(style);

  var bar = document.createElement("div");
  bar.id = "tc-nav-bar";

  var altHref = resolveAltHref();
  if (altHref) {
    var langBtn = document.createElement("a");
    langBtn.className = "tc-nav-btn";
    langBtn.href = altHref;
    langBtn.title = isEn ? "Switch to Persian" : "تبدیل به English";
    langBtn.innerHTML = isEn
      ? '<span class="ico">🇮🇷</span><span>فارسی</span>'
      : '<span class="ico">🇬🇧</span><span>English</span>';
    bar.appendChild(langBtn);
  }

  var isRootDash = (fileName === "index.html" || fileName === "index-en.html") && depth <= 1;
  if (!isRootDash) {
    var homeBtn = document.createElement("a");
    homeBtn.className = "tc-nav-btn";
    homeBtn.href = homeHref;
    homeBtn.title = isEn ? "Back to dashboard" : "بازگشت به داشبورد";
    homeBtn.innerHTML = isEn
      ? '<span class="ico">🏠</span><span>Home</span>'
      : '<span class="ico">🏠</span><span>بازگشت</span>';
    bar.appendChild(homeBtn);
  }

  if (bar.children.length) document.body.appendChild(bar);
})();
