<div align="center">

# 🌾 كرّار الميساني — الموقع الشخصي

**الموقع الشخصي لمطوّر ويب متكامل من محافظة ميسان، العراق**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-gdgbmaysan.web.app-4285F4?style=for-the-badge)](https://gdgbmaysan.web.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![RTL](https://img.shields.io/badge/اتجاه-RTL_العربي-009688?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Glossary/BiDi)

</div>

---

## 📋 نظرة عامة

موقع Portfolio شخصي مكتوب بالكامل بـ **HTML + CSS + Vanilla JavaScript** بدون أي أطر عمل (Frameworks) أو مكتبات خارجية. مصمم خصيصاً للمستخدم العربي مع دعم كامل لاتجاه RTL وخط Tajawal الاحترافي، ويعرض مسيرة المطوّر **كرّار الميساني** من محافظة ميسان، العراق.

---

## ✨ المميزات

| الميزة | التفاصيل |
|--------|----------|
| 🌙 **الوضع الداكن** | تبديل تلقائي حسب تفضيل النظام مع حفظ الاختيار |
| 📱 **تصميم متجاوب** | يعمل بسلاسة من 375px (موبايل) إلى 1440px (سطح مكتب) |
| ⚡ **أداء فائق** | كود خفيف بدون اعتماديات، درجات 95+ على Lighthouse |
| 🌐 **RTL أولاً** | مبني من الأساس للعربية مع خط Tajawal من Google Fonts |
| 🔒 **Semantic HTML5** | هيكل دلالي كامل لتحسين SEO وإمكانية الوصول (a11y) |
| 📊 **Meta Tags كاملة** | Open Graph وTwitter Cards لمشاركة احترافية على المنصات |
| 💬 **زر واتساب ثابت** | تواصل فوري على الموبايل في أي وقت |
| 🎨 **هوية GDG** | اللون الأزرق `#4285F4` بهوية Google Developer Groups |

---

## 🗂️ هيكل المشروع

```
new-website/
│
├── index.html          # الصفحة الرئيسية (HTML كامل بـ RTL وArabic SEO)
├── style.css           # التنسيق الكامل + الوضع الداكن + الأنيميشن
├── script.js           # التفاعل، الأنيميشن، التحقق من النماذج
├── og-image.png        # صورة المشاركة على المنصات (1200×630)
├── .gitignore          # قواعد تجاهل Git
└── README.md           # هذا الملف
```

---

## 📑 أقسام الموقع

```
الصفحة الرئيسية (Hero)
    └─ اسم المطوّر، وصف موجز، إحصائيات سريعة، أزرار CTA

نبذة شخصية (About)
    └─ قصة المطوّر، معلومات الاتصال، 4 ميزات تقنية

المهارات والتقنيات (Skills)
    └─ Front-End (HTML, CSS, JS, Responsive/RTL)
    └─ Back-End (Node.js, PHP, MySQL, MongoDB, RESTful APIs)
    └─ الأدوات (Git, Figma, SEO, PWA, Web Security, بوابات الدفع)

معرض الأعمال (Projects)
    └─ 🌿 منصة «هور ميسان» للسياحة البيئية
    └─ 🛒 سوق «دجلة» للتجارة والتوصيل السريع
    └─ 🏥 منظومة «عمارة كير» لإدارة العيادات

تواصل معي (Contact)
    └─ بيانات الاتصال + شبكات اجتماعية + نموذج تفاعلي
```

---

## 🛠️ التقنيات المستخدمة

### الواجهة الأمامية
- **HTML5** — هيكل دلالي (Semantic) كامل، اتجاه RTL، دعم لغوي `lang="ar"`
- **CSS3** — متغيرات CSS، Flexbox، Grid، Animations، Dark Mode via `data-theme`
- **JavaScript (ES6+)** — Vanilla JS، Intersection Observer، Local Storage، DOM API

### الخطوط والأيقونات
- **[Tajawal](https://fonts.google.com/specimen/Tajawal)** — خط عربي احترافي من Google Fonts
- **SVG Icons** — أيقونات مضمّنة مباشرة بدون مكتبات خارجية

### تحسينات الأداء
- لا يوجد JavaScript bundle — كود نقي مباشر
- صور بتنسيق PNG محسّن لبطاقات المشاركة
- `preconnect` لتحميل الخطوط قبل التصيير
- منع وميض المظهر (FOUC Prevention) بسكريبت مضمّن في `<head>`

---

## 🚀 التشغيل المحلي

لا يتطلب المشروع أي خطوات بناء (Build). افتح الملف مباشرة في المتصفح:

```bash
# الطريقة الأولى: مباشرة
open index.html

# الطريقة الثانية: عبر خادم محلي (مثلاً Live Server أو XAMPP)
# افتح http://localhost/new-website/
```

> **ملاحظة:** بعض الميزات (مثل LocalStorage) تتطلب بروتوكول `http://` وليس فتح الملف مباشرة كـ `file://`.

---

## 📐 اختبار التجاوب

الموقع مختبر على العروض التالية:

| الجهاز | العرض | الحالة |
|--------|-------|--------|
| موبايل صغير | 375px | ✅ |
| موبايل كبير | 428px | ✅ |
| تابلت | 768px | ✅ |
| لابتوب | 1024px | ✅ |
| سطح مكتب | 1440px | ✅ |

---

## 🎨 نظام الألوان

```css
/* الألوان الأساسية */
--color-primary:    #4285F4;  /* GDG Blue — الأزرق الرئيسي */
--color-secondary:  #0d9488;  /* Teal — الأخضر المائي */
--color-accent:     #f59e0b;  /* Amber — الذهبي للتمييز */

/* الوضع الفاتح */
--bg-primary:       #ffffff;
--text-primary:     #0f172a;

/* الوضع الداكن */
--bg-primary:       #0f172a;
--text-primary:     #f1f5f9;
```

---

## 📬 التواصل

<div align="center">

| الوسيلة | الرابط |
|---------|--------|
| 📧 البريد الإلكتروني | karrar.maysan.dev@gmail.com |
| 💬 واتساب | +964 770 000 0000 |
| 🌍 الموقع المباشر | [gdgbmaysan.web.app](https://gdgbmaysan.web.app/) |

</div>

---

## 📄 الرخصة

هذا المشروع مفتوح للإلهام والتعلم. يُرجى الإشارة إلى المؤلف عند الاستخدام.

---

<div align="center">

صُنع بـ ❤️ من **ميسان، العراق** 🇮🇶

</div>

