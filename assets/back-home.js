/**
 * Floating glass "Back Home" button for all Topping HTML documents.
 * Auto-detects depth and links to dashboard index.html.
 * Maintainer: Amir — include before </body> in any document page.
 */
(function () {
  if (document.getElementById("tc-home-btn")) return;

  /* Don't show on main dashboard */
  var path = location.pathname.split("/").filter(Boolean);
  var file = path[path.length - 1] || "";
  if (file === "index.html" && path.length <= 1) return;

  var depth = path.length - 1;
  var homeHref = depth > 0 ? "../".repeat(depth) + "index.html" : "./index.html";

  var style = document.createElement("style");
  style.textContent = [
    "#tc-home-btn{",
    "position:fixed;bottom:24px;left:24px;z-index:99999;",
    "display:inline-flex;align-items:center;gap:8px;",
    "padding:12px 18px;border-radius:999px;",
    "background:rgba(255,255,255,.72);",
    "backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);",
    "border:1px solid rgba(255,255,255,.55);",
    "box-shadow:0 8px 32px rgba(15,76,129,.12), inset 0 1px 0 rgba(255,255,255,.8);",
    "color:#0f4c81;font-family:system-ui,Tahoma,sans-serif;",
    "font-size:14px;font-weight:700;text-decoration:none;",
    "transition:transform .2s,box-shadow .2s,background .2s;",
    "}",
    "#tc-home-btn:hover{",
    "transform:translateY(-2px) scale(1.02);",
    "background:rgba(255,255,255,.88);",
    "box-shadow:0 12px 40px rgba(15,76,129,.18);",
    "}",
    "#tc-home-btn .ico{font-size:18px;line-height:1}",
    "@media(max-width:560px){#tc-home-btn{bottom:16px;left:16px;padding:10px 14px;font-size:13px}}"
  ].join("");
  document.head.appendChild(style);

  var btn = document.createElement("a");
  btn.id = "tc-home-btn";
  btn.href = homeHref;
  btn.title = "بازگشت به داشبورد";
  btn.innerHTML = '<span class="ico">🏠</span><span>بازگشت</span>';
  document.body.appendChild(btn);
})();
