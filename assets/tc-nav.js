/**
 * Topping Tech floating nav: Back Home + FA/EN language switch
 * Works on local server AND GitHub Pages (e.g. topping-tech.github.io/playbook/)
 */
(function () {
  if (document.getElementById("tc-nav-bar")) return;

  /** GitHub Pages project sites: /REPO/... — strip repo prefix for pair lookup */
  function parsePath() {
    var pathParts = location.pathname.split("/").filter(Boolean);
    var fileName = pathParts[pathParts.length - 1] || "index.html";

    /* github.io/playbook/sales/x.html → base /playbook/, relKey sales/x.html */
    if (location.hostname.indexOf("github.io") !== -1 && pathParts.length >= 1) {
      var repo = pathParts[0];
      var inside = pathParts.slice(1);
      var folderParts = inside.slice(0, -1);
      var relKey = folderParts.length
        ? folderParts.join("/") + "/" + fileName
        : fileName;
      return {
        base: "/" + repo + "/",
        fileName: fileName,
        folderParts: folderParts,
        relKey: relKey,
        isDashboard: inside.length <= 1 && (fileName === "index.html" || fileName === "index-en.html")
      };
    }

    /* Local: /sales/x.html */
    var folderParts = pathParts.slice(0, -1);
    var relKey = folderParts.length
      ? folderParts.join("/") + "/" + fileName
      : fileName;
    return {
      base: "/",
      fileName: fileName,
      folderParts: folderParts,
      relKey: relKey,
      isDashboard: pathParts.length <= 1 && (fileName === "index.html" || fileName === "index-en.html")
    };
  }

  var p = parsePath();
  var homeHref = p.base + "index.html";

  function resolveAltHref() {
    var pairs = window.TC_I18N_PAIRS || {};
    var alt = pairs[p.relKey];
    if (!alt) return null;
    return p.base + alt;
  }

  var isEn = /-en\.html$/.test(p.fileName) ||
    p.fileName === "index-en.html" ||
    p.fileName === "sales-candidate-package-en.html";

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

  if (!p.isDashboard) {
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
