/**
 * ServiceHub - After-Sales Service Center
 * JavaScript Functionality
 */

// ==========================================================================
// Internationalization (i18n)
// ==========================================================================

const translations = {
  zh: {
    lang: '中文',
    heroTitle: '售后服务中心',
    heroSubtitle: '我们致力于为您提供专业、高效的售后支持。<br>查找您的产品，获取激活指南、操作手册和常见问题解答。',
    searchPlaceholder: '输入产品名称或型号...',
    searchBtn: '搜索产品',
    popularSearch: '热门搜索：',
    productsTitle: '选择您的产品',
    productsSubtitle: '点击下方产品卡片，获取对应的售后服务支持',
    activateTitle: '激活售后服务',
    activateDesc: '注册产品，激活保修和专属支持',
    manualTitle: '操作手册与视频',
    manualDesc: '下载使用指南和教学视频',
    faqTitle: '常见问题',
    faqDesc: '快速找到问题的解决方案',
    footerDesc: '专业的售后服务平台，为您提供全方位的产品支持。',
    footerSupport: '支持',
    footerContact: '联系我们',
    footerWarranty: '保修政策',
    footerReturn: '退换货说明',
    footerCompany: '公司',
    footerAbout: '关于我们',
    footerCareers: '加入我们',
    footerNews: '新闻中心',
    footerLegal: '法律',
    footerPrivacy: '隐私政策',
    footerTerms: '使用条款',
    footerCookie: 'Cookie 设置'
  },
  en: {
    lang: 'English',
    heroTitle: 'After-Sales Service Center',
    heroSubtitle: 'We are dedicated to providing you with professional and efficient support.<br>Find your product to access activation guides, manuals, and FAQs.',
    searchPlaceholder: 'Enter product name or model...',
    searchBtn: 'Search Products',
    popularSearch: 'Popular:',
    productsTitle: 'Select Your Product',
    productsSubtitle: 'Click on a product card below to access after-sales support',
    activateTitle: 'Activate Service',
    activateDesc: 'Register your product to activate warranty',
    manualTitle: 'Manuals & Videos',
    manualDesc: 'Download user guides and tutorials',
    faqTitle: 'FAQ',
    faqDesc: 'Find quick answers to common questions',
    footerDesc: 'Professional after-sales service platform providing comprehensive product support.',
    footerSupport: 'Support',
    footerContact: 'Contact Us',
    footerWarranty: 'Warranty Policy',
    footerReturn: 'Return Policy',
    footerCompany: 'Company',
    footerAbout: 'About Us',
    footerCareers: 'Careers',
    footerNews: 'News',
    footerLegal: 'Legal',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',
    footerCookie: 'Cookie Settings'
  },
  ja: {
    lang: '日本語',
    heroTitle: 'アフターサービスセンター',
    heroSubtitle: 'お客様に専門的で効率的なサポートを提供いたします。<br>製品を検索して、アクティベーションガイド、マニュアル、FAQをご覧ください。',
    searchPlaceholder: '製品名または型番を入力...',
    searchBtn: '製品を検索',
    popularSearch: '人気の検索：',
    productsTitle: '製品を選択',
    productsSubtitle: '以下の製品カードをクリックして、アフターサービスをご利用ください',
    activateTitle: 'サービスを有効化',
    activateDesc: '製品を登録して保証を有効にする',
    manualTitle: 'マニュアル・動画',
    manualDesc: '取扱説明書とチュートリアルをダウンロード',
    faqTitle: 'よくある質問',
    faqDesc: 'よくある質問の回答を素早く検索',
    footerDesc: '総合的な製品サポートを提供するプロフェッショナルなアフターサービスプラットフォーム。',
    footerSupport: 'サポート',
    footerContact: 'お問い合わせ',
    footerWarranty: '保証ポリシー',
    footerReturn: '返品について',
    footerCompany: '会社情報',
    footerAbout: '会社概要',
    footerCareers: '採用情報',
    footerNews: 'ニュース',
    footerLegal: '法的情報',
    footerPrivacy: 'プライバシーポリシー',
    footerTerms: '利用規約',
    footerCookie: 'Cookie設定'
  },
  ko: {
    lang: '한국어',
    heroTitle: 'A/S 서비스 센터',
    heroSubtitle: '전문적이고 효율적인 지원을 제공하기 위해 최선을 다합니다.<br>제품을 검색하여 활성화 가이드, 매뉴얼, FAQ를 확인하세요.',
    searchPlaceholder: '제품명 또는 모델명 입력...',
    searchBtn: '제품 검색',
    popularSearch: '인기 검색:',
    productsTitle: '제품 선택',
    productsSubtitle: '아래 제품 카드를 클릭하여 A/S 서비스를 이용하세요',
    activateTitle: '서비스 활성화',
    activateDesc: '제품을 등록하여 보증을 활성화하세요',
    manualTitle: '매뉴얼 & 동영상',
    manualDesc: '사용 설명서 및 튜토리얼 다운로드',
    faqTitle: '자주 묻는 질문',
    faqDesc: '일반적인 질문에 대한 빠른 답변 찾기',
    footerDesc: '종합적인 제품 지원을 제공하는 전문 A/S 서비스 플랫폼입니다.',
    footerSupport: '지원',
    footerContact: '문의하기',
    footerWarranty: '보증 정책',
    footerReturn: '반품 정책',
    footerCompany: '회사',
    footerAbout: '회사 소개',
    footerCareers: '채용',
    footerNews: '뉴스',
    footerLegal: '법적 고지',
    footerPrivacy: '개인정보 처리방침',
    footerTerms: '이용약관',
    footerCookie: '쿠키 설정'
  }
};

let currentLang = 'zh';

function setLanguage(lang) {
  if (!translations[lang]) return;

  currentLang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update active state in dropdown
  document.querySelectorAll('.lang-option').forEach(option => {
    option.classList.toggle('active', option.dataset.lang === lang);
  });

  // Save preference
  localStorage.setItem('preferredLanguage', lang);
}

// ==========================================================================
// Search Functionality
// ==========================================================================

function initSearch() {
  const searchInput = document.getElementById('productSearch');
  const searchBtn = document.querySelector('.search-btn');
  const hintTags = document.querySelectorAll('.hint-tag');
  const productGroups = document.querySelectorAll('.product-group');

  function performSearch(query) {
    const searchTerm = query.toLowerCase().trim();

    if (!searchTerm) {
      productGroups.forEach(group => {
        group.style.display = '';
        group.style.order = '';
      });
      return;
    }

    productGroups.forEach(group => {
      const productName = group.querySelector('.product-name').textContent.toLowerCase();
      const productModel = group.querySelector('.product-model').textContent.toLowerCase();

      if (productName.includes(searchTerm) || productModel.includes(searchTerm)) {
        group.style.display = '';
        group.style.order = '-1';
        // Add highlight animation
        group.classList.add('search-highlight');
        setTimeout(() => group.classList.remove('search-highlight'), 1000);
      } else {
        group.style.display = 'none';
      }
    });
  }

  // Search on button click
  searchBtn?.addEventListener('click', () => {
    performSearch(searchInput.value);
  });

  // Search on Enter key
  searchInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch(searchInput.value);
    }
  });

  // Hint tag click
  hintTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const searchTerm = tag.dataset.search;
      searchInput.value = searchTerm;
      performSearch(searchTerm);

      // Smooth scroll to products section
      document.querySelector('.products-section')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // Reset search when input is cleared
  searchInput?.addEventListener('input', (e) => {
    if (e.target.value === '') {
      performSearch('');
    }
  });
}

// ==========================================================================
// Language Switcher with Keyboard Support
// ==========================================================================

function initLanguageSwitcher() {
  const langSwitcher = document.querySelector('.language-switcher');
  const langBtn = document.getElementById('langToggle');
  const langDropdown = document.querySelector('.lang-dropdown');
  const langOptions = document.querySelectorAll('.lang-option');

  let isOpen = false;

  // Toggle dropdown
  function toggleDropdown(open) {
    isOpen = open;
    langBtn.setAttribute('aria-expanded', open);
    if (open) {
      langDropdown.style.opacity = '1';
      langDropdown.style.visibility = 'visible';
      langDropdown.style.transform = 'translateY(0)';
      // Focus first option
      langOptions[0]?.focus();
    } else {
      langDropdown.style.opacity = '0';
      langDropdown.style.visibility = 'hidden';
      langDropdown.style.transform = 'translateY(-8px)';
    }
  }

  // Keyboard support for language button
  langBtn?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown(!isOpen);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      toggleDropdown(true);
    } else if (e.key === 'Escape') {
      toggleDropdown(false);
      langBtn.focus();
    }
  });

  // Click to toggle
  langBtn?.addEventListener('click', () => {
    toggleDropdown(!isOpen);
  });

  // Keyboard navigation in dropdown
  langOptions.forEach((option, index) => {
    option.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        langOptions[Math.min(index + 1, langOptions.length - 1)]?.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (index === 0) {
          langBtn?.focus();
          toggleDropdown(false);
        } else {
          langOptions[index - 1]?.focus();
        }
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setLanguage(option.dataset.lang);
        toggleDropdown(false);
        langBtn?.focus();
      } else if (e.key === 'Escape') {
        toggleDropdown(false);
        langBtn?.focus();
      } else if (e.key === 'Tab') {
        toggleDropdown(false);
      }
    });

    option.addEventListener('click', () => {
      setLanguage(option.dataset.lang);
      toggleDropdown(false);
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!langSwitcher?.contains(e.target)) {
      toggleDropdown(false);
    }
  });

  // Load saved preference
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
  }
}

// ==========================================================================
// Accessibility Controls
// ==========================================================================

function initAccessibilityControls() {
  const largeTextBtn = document.getElementById('toggleLargeText');
  const highContrastBtn = document.getElementById('toggleHighContrast');

  // Load saved preferences
  const largeTextEnabled = localStorage.getItem('largeText') === 'true';
  const highContrastEnabled = localStorage.getItem('highContrast') === 'true';

  // Apply saved preferences
  if (largeTextEnabled) {
    document.body.classList.add('large-text');
    largeTextBtn?.setAttribute('aria-pressed', 'true');
  }

  if (highContrastEnabled) {
    document.body.classList.add('high-contrast');
    highContrastBtn?.setAttribute('aria-pressed', 'true');
  }

  // Large text toggle
  largeTextBtn?.addEventListener('click', () => {
    const isEnabled = document.body.classList.toggle('large-text');
    largeTextBtn.setAttribute('aria-pressed', isEnabled);
    localStorage.setItem('largeText', isEnabled);

    // Announce change to screen readers
    announceToScreenReader(isEnabled ? '已启用大字体模式' : '已关闭大字体模式');
  });

  // High contrast toggle
  highContrastBtn?.addEventListener('click', () => {
    const isEnabled = document.body.classList.toggle('high-contrast');
    highContrastBtn.setAttribute('aria-pressed', isEnabled);
    localStorage.setItem('highContrast', isEnabled);

    // Announce change to screen readers
    announceToScreenReader(isEnabled ? '已启用高对比度模式' : '已关闭高对比度模式');
  });
}

// Screen reader announcement helper
function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);

  setTimeout(() => announcement.remove(), 1000);
}

// ==========================================================================
// Scroll Animations
// ==========================================================================

function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe product groups
  document.querySelectorAll('.product-group').forEach(group => {
    observer.observe(group);
  });
}

// ==========================================================================
// Navbar Scroll Effect
// ==========================================================================

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}

// ==========================================================================
// Service Card Hover Effects
// ==========================================================================

function initCardEffects() {
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Add ripple effect on hover
      card.style.setProperty('--ripple-x', '50%');
      card.style.setProperty('--ripple-y', '50%');
    });
  });
}

// ==========================================================================
// Initialize
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initSearch();
  initScrollAnimations();
  initNavbarScroll();
  initCardEffects();
  initAccessibilityControls();
});

// Add CSS for search highlight animation
const style = document.createElement('style');
style.textContent = `
  .search-highlight {
    animation: highlightPulse 0.6s ease-out;
  }

  @keyframes highlightPulse {
    0% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
    }
    50% {
      box-shadow: 0 0 0 8px rgba(0, 0, 0, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }

  .navbar-scrolled {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  }

  .is-visible {
    animation: fadeInUp 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);
