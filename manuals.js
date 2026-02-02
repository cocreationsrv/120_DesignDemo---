/**
 * Manuals & Videos Page
 * JavaScript Functionality
 */

// ==========================================================================
// Internationalization (i18n)
// ==========================================================================

const translations = {
  zh: {
    lang: '中文',
    breadcrumbHome: '首页',
    breadcrumbManuals: '操作手册与视频',
    productBadge: '产品支持',
    productDesc: '查看产品手册、下载最新固件，观看使用教程视频',
    manualsTitle: 'User Manuals',
    manualsDesc: '下载产品使用手册和快速入门指南',
    manual1Name: '用户操作手册',
    manual1Version: 'V2.1',
    manual1Date: '2024-01',
    manual1Desc: '完整的产品使用说明，包含安装、配置和故障排除指南',
    manual2Name: '快速入门指南',
    manual2Version: 'V1.0',
    manual2Date: '2024-01',
    manual2Desc: '快速了解产品基本功能，10分钟完成首次设置',
    previewBtn: '预览',
    downloadBtn: '下载',
    firmwareTitle: 'Software & Firmware',
    firmwareDesc: '下载最新的软件和固件升级包',
    firmwareName: '固件升级包',
    latestBadge: '最新',
    firmwareDate: '发布日期: 2024-01-15',
    changelogTitle: '更新内容:',
    changelog1: '修复蓝牙连接稳定性问题',
    changelog2: '新增语音助手快捷指令',
    changelog3: '优化音频输出质量',
    downloadFirmware: '下载固件',
    videosTitle: 'Video Tutorials',
    videosDesc: '观看产品使用教程视频',
    videoTitle: '产品开箱与首次设置教程',
    videoDesc: '从开箱到完成配置，详细演示每一个步骤',
    videoDate: '2024-01-10',
    watchBtn: '点击观看',
    helpTitle: '需要更多帮助?',
    helpDesc: '如果您有任何问题，请联系我们的客服团队',
    contactBtn: '联系客服',
    footerDesc: '专业的售后服务平台，为您提供全方位的产品支持。'
  },
  en: {
    lang: 'English',
    breadcrumbHome: 'Home',
    breadcrumbManuals: 'Manuals & Videos',
    productBadge: 'Product Support',
    productDesc: 'View product manuals, download firmware, and watch tutorial videos',
    manualsTitle: 'User Manuals',
    manualsDesc: 'Download product user manuals and quick start guides',
    manual1Name: 'User Manual',
    manual1Version: 'V2.1',
    manual1Date: 'Jan 2024',
    manual1Desc: 'Complete product instructions including installation, configuration, and troubleshooting',
    manual2Name: 'Quick Start Guide',
    manual2Version: 'V1.0',
    manual2Date: 'Jan 2024',
    manual2Desc: 'Get started quickly with basic features in 10 minutes',
    previewBtn: 'Preview',
    downloadBtn: 'Download',
    firmwareTitle: 'Software & Firmware',
    firmwareDesc: 'Download the latest software and firmware updates',
    firmwareName: 'Firmware Update',
    latestBadge: 'Latest',
    firmwareDate: 'Released: Jan 15, 2024',
    changelogTitle: 'What\'s new:',
    changelog1: 'Fixed Bluetooth connection stability issues',
    changelog2: 'Added voice assistant quick commands',
    changelog3: 'Improved audio output quality',
    downloadFirmware: 'Download Firmware',
    videosTitle: 'Video Tutorials',
    videosDesc: 'Watch product tutorial videos',
    videoTitle: 'Unboxing & First-time Setup Tutorial',
    videoDesc: 'Step-by-step guide from unboxing to completing setup',
    videoDate: 'Jan 10, 2024',
    watchBtn: 'Watch Now',
    helpTitle: 'Need More Help?',
    helpDesc: 'If you have any questions, please contact our support team',
    contactBtn: 'Contact Support',
    footerDesc: 'Professional after-sales service platform providing comprehensive product support.'
  },
  ja: {
    lang: '日本語',
    breadcrumbHome: 'ホーム',
    breadcrumbManuals: 'マニュアル・動画',
    productBadge: '製品サポート',
    productDesc: '製品マニュアルの閲覧、ファームウェアのダウンロード、チュートリアル動画の視聴',
    manualsTitle: 'User Manuals',
    manualsDesc: '製品マニュアルとクイックスタートガイドをダウンロード',
    manual1Name: 'ユーザーマニュアル',
    manual1Version: 'V2.1',
    manual1Date: '2024年1月',
    manual1Desc: 'インストール、設定、トラブルシューティングを含む完全な製品説明書',
    manual2Name: 'クイックスタートガイド',
    manual2Version: 'V1.0',
    manual2Date: '2024年1月',
    manual2Desc: '10分で基本機能を理解し、初期設定を完了',
    previewBtn: 'プレビュー',
    downloadBtn: 'ダウンロード',
    firmwareTitle: 'Software & Firmware',
    firmwareDesc: '最新のソフトウェアとファームウェアをダウンロード',
    firmwareName: 'ファームウェア',
    latestBadge: '最新',
    firmwareDate: 'リリース日: 2024年1月15日',
    changelogTitle: '更新内容:',
    changelog1: 'Bluetooth接続の安定性を改善',
    changelog2: '音声アシスタントのクイックコマンドを追加',
    changelog3: 'オーディオ出力品質を最適化',
    downloadFirmware: 'ダウンロード',
    videosTitle: 'Video Tutorials',
    videosDesc: '製品チュートリアル動画を視聴',
    videoTitle: '開封と初期設定チュートリアル',
    videoDesc: '開封から設定完了まで、すべてのステップを詳しく説明',
    videoDate: '2024年1月10日',
    watchBtn: '動画を見る',
    helpTitle: 'さらにサポートが必要ですか？',
    helpDesc: 'ご質問がある場合は、サポートチームにお問い合わせください',
    contactBtn: 'サポートに連絡',
    footerDesc: 'プロフェッショナルなアフターサービスプラットフォーム。'
  }
};

// Current language
let currentLang = 'zh';

// Apply translations
function applyTranslations(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  // Update active language button
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Save preference
  localStorage.setItem('preferred-lang', lang);
}

// ==========================================================================
// Language Switcher
// ==========================================================================

function initLanguageSwitcher() {
  const langToggle = document.getElementById('langToggle');
  const langDropdown = document.querySelector('.lang-dropdown');
  const langOptions = document.querySelectorAll('.lang-option');

  if (!langToggle || !langDropdown) return;

  // Toggle dropdown
  langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
    langToggle.classList.toggle('active');
  });

  // Language selection
  langOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyTranslations(lang);
      langDropdown.classList.remove('active');
      langToggle.classList.remove('active');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    langDropdown.classList.remove('active');
    langToggle.classList.remove('active');
  });
}

// ==========================================================================
// Video Player Modal (placeholder functionality)
// ==========================================================================

function initVideoPlayer() {
  const playBtns = document.querySelectorAll('.video-play-btn, .watch-btn');

  playBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Placeholder: Show alert or open video modal
      alert(currentLang === 'zh' ? '视频播放功能即将上线' :
            currentLang === 'ja' ? '動画再生機能は近日公開予定' :
            'Video playback coming soon');
    });
  });
}

// ==========================================================================
// Download Button Handlers
// ==========================================================================

function initDownloadButtons() {
  const downloadBtns = document.querySelectorAll('.download-btn');

  downloadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Add download animation
      btn.classList.add('downloading');

      // Simulate download start
      setTimeout(() => {
        btn.classList.remove('downloading');
        // Placeholder: Actual download logic would go here
        alert(currentLang === 'zh' ? '下载已开始' :
              currentLang === 'ja' ? 'ダウンロードを開始しました' :
              'Download started');
      }, 500);
    });
  });
}

// ==========================================================================
// Preview Button Handlers
// ==========================================================================

function initPreviewButtons() {
  const previewBtns = document.querySelectorAll('.preview-btn');

  previewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Placeholder: Open PDF preview modal or new tab
      alert(currentLang === 'zh' ? '正在打开文档预览...' :
            currentLang === 'ja' ? 'ドキュメントプレビューを開いています...' :
            'Opening document preview...');
    });
  });
}

// ==========================================================================
// Scroll Animations
// ==========================================================================

function initScrollAnimations() {
  const sections = document.querySelectorAll('.content-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  sections.forEach(section => {
    observer.observe(section);
  });
}

// ==========================================================================
// Initialize
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Load saved language preference
  const savedLang = localStorage.getItem('preferred-lang');
  if (savedLang && translations[savedLang]) {
    applyTranslations(savedLang);
  }

  initLanguageSwitcher();
  initVideoPlayer();
  initPreviewButtons();
  initDownloadButtons();
  initScrollAnimations();
});
