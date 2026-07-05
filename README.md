# Topping Tech HTML Dashboard

Repository مرکزی برای نگهداری، سازماندهی و انتشار اسناد HTML مربوط به **Topping Courier / Topping Tech**.

## هدف پروژه

این پروژه یک **کتابخانه اسناد HTML** است که:

- Playbook، Business Plan، Sales، Funding و Proposal را در یک ساختار منظم نگه می‌دارد
- از طریق `index.html` یک داشبورد فارسی RTL با جستجو و فیلتر ارائه می‌دهد
- فایل‌های تکراری و قدیمی را **حذف نمی‌کند** — فقط به `archive/` منتقل می‌کند
- برای انتشار در **GitHub Pages** آماده است

## سیستم دوزبانه FA / EN

هر سند فارسی **دست‌نخورده** مانده و نسخه انگلیسی جدا (`-en.html`) ساخته شده:

| FA (اصلی) | EN (ترجمه) |
|-----------|------------|
| `playbook/roadmap.html` | `playbook/roadmap-en.html` |
| `sales/sales-strategy.html` | `sales/sales-strategy-en.html` |
| ... | ... |

**دکمه تعویض زبان:** روی هر سند دکمه شناور `🇬🇧 English` / `🇮🇷 فارسی` (پایین چپ)  
**فایل‌های سیستم:**
- `assets/i18n-pairs.js` — جفت FA/EN
- `assets/tc-nav.js` — دکمه بازگشت + تعویض زبان
- `assets/files-catalog.js` — فهرست داشبورد

**افزودن سند دوزبانه جدید:**
1. FA را در فولدر مناسب بگذار (محتوا را تغییر نده)
2. نسخه `-en.html` بساز
3. جفت را در `i18n-pairs.js` و `files-catalog.js` اضافه کن
4. قبل از `</body>` هر دو فایل:
```html
<script src="../assets/i18n-pairs.js"></script>
<script src="../assets/tc-nav.js"></script>
```

## ساختار فولدرها

```text
topping-github-dashboard/
├── index.html                          # داشبورد اصلی
├── README.md                           # این فایل
├── CLEANUP_REPORT.md                   # گزارش پاکسازی و deduplication
│
├── playbook/
│   ├── index.html                      # فهرست Playbook
│   ├── roadmap.html                    # VELOXA Founder Bible & PRD
│   └── strategic-marketing.html        # استراتژی جذب لید
│
├── funding/
│   └── topping-funding-sop-2026.html   # SOP تأمین مالی
│
├── sales/
│   ├── sales-strategy.html             # استراتژی B2B (نسخه کامل 43KB)
│   ├── sales-candidate-package-fa.html # بسته متقاضی — فارسی
│   ├── sales-candidate-package-en.html # بسته متقاضی — English
│   └── credit-system.html              # سیستم Credit & Bonus
│
├── business-plan/
│   ├── business-plan-2026.html         # بیزنس پلن ۲۰۲۶
│   ├── center-method.html              # Center Method
│   └── center-negotiation.html         # استراتژی مذاکره
│
├── proposals/
│   └── b2b-proposal-template-fa.html   # قالب پیشنهاد B2B
│
└── archive/
    ├── duplicates/                     # کپی‌های byte-identical
    └── old-versions/                   # نسخه‌های قدیمی / نامشخص
```

## فایل‌های فعال (۱۱ سند)

| فایل | دسته | زبان | حجم |
|------|------|------|-----|
| `playbook/roadmap.html` | Playbook | FA | 28.3 KB |
| `playbook/strategic-marketing.html` | Playbook | FA | 40.1 KB |
| `funding/topping-funding-sop-2026.html` | Funding | FA | 27.6 KB |
| `sales/sales-strategy.html` | Sales | FA | 42.8 KB |
| `sales/sales-candidate-package-fa.html` | Sales | FA | 56.1 KB |
| `sales/sales-candidate-package-en.html` | Sales | EN | 49.1 KB |
| `sales/credit-system.html` | Sales | Mixed | 13.8 KB |
| `business-plan/business-plan-2026.html` | Business Plan | FA | 27.5 KB |
| `business-plan/center-method.html` | Business Plan | FA | 19.6 KB |
| `business-plan/center-negotiation.html` | Business Plan | FA | 50.1 KB |
| `proposals/b2b-proposal-template-fa.html` | Proposals | FA | 28.8 KB |

## قوانین نام‌گذاری

```text
topic-descriptor[-language].html
```

| قانون | مثال |
|-------|------|
| kebab-case انگلیسی | `sales-strategy.html` |
| پسوند زبان برای FA/EN | `b2b-proposal-template-fa.html` |
| سال در انتها (در صورت نیاز) | `topping-funding-sop-2026.html` |
| بدون فاصله، پرانتز یا `(1)` | ❌ `file (1).html` → ✅ `file.html` |

## افزودن فایل HTML جدید

1. فایل را در فولدر مناسب قرار دهید (`playbook/`, `sales/`, …)
2. نام را طبق قوانین بالا انتخاب کنید
3. برای فارسی: `lang="fa"` و `dir="rtl"` در `<html>` تنظیم کنید
4. در `index.html` آرایه `files` در بخش `<script>` یک entry جدید اضافه کنید:

```javascript
{
  title: "عنوان نمایشی",
  htmlTitle: "عنوان داخل تگ title",
  category: "Sales",        // Playbook | Funding | Sales | Business Plan | Proposals
  language: "fa",           // fa | en | mixed
  file: "sales/my-doc.html",
  size: 12345,              // bytes
  status: "Active",
  description: "توضیح کوتاه"
}
```

5. اگر Playbook است، لینک را در `playbook/index.html` هم اضافه کنید

## انتشار با GitHub Pages

1. Repository را در GitHub بسازید (مثلاً `topping-dashboard`)
2. همه فایل‌ها را push کنید
3. **Settings → Pages → Source:** Deploy from branch
4. Branch: `main` / Folder: `/ (root)`
5. داشبورد در آدرس زیر در دسترس است:

```text
https://<username>.github.io/<repo-name>/
```

## نکات امنیتی

هرگز در این Repository ذخیره نکنید:

- Password، API Key، Server token
- اطلاعات بانکی یا قراردادهای محرمانه
- داده‌های شخصی مشتریان

## Owner

**Hamid Barzin** — Topping Courier Inc. / Topping Tech  
**Maintainer:** Amir
