/**
 * الموقع الشخصي - كرّار الميساني
 * JavaScript نقي وبدون أطر عمل (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. إدارة الوضع الداكن (Dark Mode)
  initTheme();

  // 2. إدارة قائمة الموبايل المتجاوبة (Mobile Menu)
  initMobileMenu();

  // 3. تمييز الرابط النشط والتمرير السلس
  initScrollSpy();

  // 4. زر الرجوع إلى الأعلى (Back to Top)
  initBackToTop();

  // 5. التحقق من نموذج المراسلة وإرساله
  initContactForm();

  // 6. زر تحميل السيرة الذاتية (CV)
  initCvDownload();

  // 7. سنة حقوق النشر الحالية
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

/* ==========================================================================
   1. إدارة المظهر (الوضع الداكن / الفاتح)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const urlParams = new URLSearchParams(window.location.search);
  const paramTheme = urlParams.get('theme');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // تحديد المظهر الأولي (من الرابط، أو التخزين المحلي، أو تفضيلات النظام)
  const currentTheme = paramTheme || storedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // الاستماع لتغييرات النظام في حال لم يختر المستخدم يدوياً
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });
}

/* ==========================================================================
   2. قائمة الموبايل المتجاوبة
   ========================================================================== */
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!mobileBtn || !navMenu) return;

  function toggleMenu() {
    const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
    mobileBtn.setAttribute('aria-expanded', !isExpanded);
    mobileBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  }

  function closeMenu() {
    mobileBtn.setAttribute('aria-expanded', 'false');
    mobileBtn.classList.remove('active');
    navMenu.classList.remove('active');
  }

  mobileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // إغلاق القائمة عند النقر على أي رابط تنقل
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // إغلاق القائمة عند النقر خارجها
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
      closeMenu();
    }
  });

  // إغلاق القائمة عند الضغط على زر Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   3. تمييز الرابط النشط عند التمرير (ScrollSpy)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = document.getElementById('header')?.offsetHeight || 74;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - headerHeight - 80;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
}

/* ==========================================================================
   4. زر الرجوع إلى الأعلى
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   5. إدارة نموذج المراسلة والتحقق من المدخلات
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('userName');
  const emailInput = document.getElementById('userEmail');
  const subjectInput = document.getElementById('userSubject');
  const messageInput = document.getElementById('userMessage');
  const submitBtn = document.getElementById('submitBtn');
  const formFeedback = document.getElementById('formFeedback');

  // دوال التحقق المساعدة
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function setFieldError(input, errorElementId, message) {
    input.classList.add('error');
    const errEl = document.getElementById(errorElementId);
    if (errEl) errEl.textContent = message;
  }

  function clearFieldError(input, errorElementId) {
    input.classList.remove('error');
    const errEl = document.getElementById(errorElementId);
    if (errEl) errEl.textContent = '';
  }

  // إزالة رسائل الخطأ عند الكتابة
  [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
    if (!input) return;
    input.addEventListener('input', () => {
      const errorId = input.name + 'Error';
      clearFieldError(input, errorId);
      formFeedback.style.display = 'none';
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // فحص الاسم
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      setFieldError(nameInput, 'nameError', 'يرجى إدخال اسم صحيح لا يقل عن حرفين');
      isValid = false;
    } else {
      clearFieldError(nameInput, 'nameError');
    }

    // فحص البريد الإلكتروني
    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      setFieldError(emailInput, 'emailError', 'يرجى كتابة عنوان بريد إلكتروني صحيح');
      isValid = false;
    } else {
      clearFieldError(emailInput, 'emailError');
    }

    // فحص الموضوع
    if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
      setFieldError(subjectInput, 'subjectError', 'يرجى كتابة موضوع لرسالتك');
      isValid = false;
    } else {
      clearFieldError(subjectInput, 'subjectError');
    }

    // فحص الرسالة
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      setFieldError(messageInput, 'messageError', 'يرجى كتابة تفاصيل لا تقل عن 10 أحرف');
      isValid = false;
    } else {
      clearFieldError(messageInput, 'messageError');
    }

    if (!isValid) return;

    // محاكاة إرسال الرسالة بسلاسة
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;

      formFeedback.className = 'form-feedback success';
      formFeedback.innerHTML = `✨ شكراً لتواصلك يا <strong>${escapeHtml(nameInput.value.trim())}</strong>! تم استلام رسالتك بنجاح، وسأعاود الرد عليك خلال ساعات قليلة.`;
      formFeedback.style.display = 'block';

      form.reset();
    }, 900);
  });
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}

/* ==========================================================================
   6. زر تحميل السيرة الذاتية
   ========================================================================== */
function initCvDownload() {
  const cvBtn = document.getElementById('cvDownloadBtn');
  if (!cvBtn) return;

  cvBtn.addEventListener('click', () => {
    const cvContent = `=====================================================
سيرة ذاتية مختصرة - كرّار الميساني
مطوّر ويب متكامل وتطبيقات سريعة (Full-Stack Web Developer)
الموقع: محافظة ميسان - العمارة، العراق
البريد الإلكتروني: karrar.maysan.dev@gmail.com
=====================================================

الملف التعريفي:
مطوّر ويب شغوف بتقديم حلول رقمية عالية الأداء للمستخدم العربي
مع إتقان تام لمعايير الويب الحديثة، والاتجاه من اليمين لليسار (RTL).

المهارات الأساسية:
- تطوير الواجهات: HTML5, CSS3/Grid/Flexbox, JavaScript ES6+
- الخوادم والبيانات: Node.js, Express, PHP, MySQL, REST APIs
- الأدوات: Git, GitHub, Figma, SEO, Web Performance Optimization

أبرز المشاريع:
1. منصة هور ميسان للسياحة البيئية
2. متجر سوق دجلة للتجارة الإلكترونية والدفع المحلي
3. منظومة عمارة كير لإدارة العيادات الطبية

صُنع بكل فخر في ميسان 🌾
=====================================================`;

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV-Karrar-Maysani.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}

/* ==========================================================================
   7. النافذة المنبثقة لتفاصيل المشاريع (Modal)
   ========================================================================== */
window.openDemoModal = function(title, description) {
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');

  if (!modal || !modalTitle || !modalDesc) return;

  modalTitle.textContent = title;
  modalDesc.textContent = description;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

// إغلاق النافذة عند الضغط على زر الإغلاق أو الخلفية
document.addEventListener('DOMContentLoaded', () => {
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modal = document.getElementById('projectModal');

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', window.closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeModal();
    }
  });
});
