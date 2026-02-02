/**
 * Activate Page - Form Validation & Interaction
 * Based on Design Document: 03-功能模块设计.md
 */

// ==========================================================================
// Order Number Validation Patterns (Section 3.1.2)
// ==========================================================================

const ORDER_PATTERNS = {
  // Amazon - All regions use similar format: XXX-XXXXXXX-XXXXXXX
  amazon_jp: {
    pattern: /^\d{3}-\d{7}-\d{7}$/,
    placeholder: '250-1234567-1234567',
    hint: '格式: XXX-XXXXXXX-XXXXXXX (例: 250-1234567-1234567)'
  },
  amazon_us: {
    pattern: /^\d{3}-\d{7}-\d{7}$/,
    placeholder: '111-1234567-1234567',
    hint: '格式: XXX-XXXXXXX-XXXXXXX (例: 111-1234567-1234567)'
  },
  amazon_de: {
    pattern: /^\d{3}-\d{7}-\d{7}$/,
    placeholder: '302-1234567-1234567',
    hint: '格式: XXX-XXXXXXX-XXXXXXX (例: 302-1234567-1234567)'
  },
  amazon_uk: {
    pattern: /^\d{3}-\d{7}-\d{7}$/,
    placeholder: '202-1234567-1234567',
    hint: '格式: XXX-XXXXXXX-XXXXXXX (例: 202-1234567-1234567)'
  },
  // Rakuten - Japan marketplace
  rakuten: {
    pattern: /^\d{6}-\d{8}-\d{4}$/,
    placeholder: '123456-20240101-1234',
    hint: '格式: XXXXXX-XXXXXXXX-XXXX (例: 123456-20240101-1234)'
  },
  // Yahoo Japan Shopping
  yahoo: {
    pattern: /^[a-z]{3}\d{8}$/,
    placeholder: 'abc12345678',
    hint: '格式: 3个小写字母 + 8位数字 (例: abc12345678)'
  },
  // eBay - Format: XX-XXXXX-XXXXX
  ebay: {
    pattern: /^\d{2}-\d{5}-\d{5}$/,
    placeholder: '12-34567-89012',
    hint: '格式: XX-XXXXX-XXXXX (例: 12-34567-89012)'
  },
  // AliExpress - 16 digit order number
  aliexpress: {
    pattern: /^\d{16,20}$/,
    placeholder: '8012345678901234',
    hint: '格式: 16-20位数字 (例: 8012345678901234)'
  },
  // Shopee - Date prefix + alphanumeric
  shopee: {
    pattern: /^[0-9]{6,8}[A-Z0-9]{6,10}$/i,
    placeholder: '2401011234ABCDEF',
    hint: '格式: 日期 + 订单码 (例: 2401011234ABCDEF)'
  },
  // Lazada - 15 digit order number
  lazada: {
    pattern: /^\d{12,18}$/,
    placeholder: '123456789012345',
    hint: '格式: 12-18位数字 (例: 123456789012345)'
  },
  // Mercari - m + 11 digits
  mercari: {
    pattern: /^m\d{11}$/,
    placeholder: 'm12345678901',
    hint: '格式: m + 11位数字 (例: m12345678901)'
  },
  // Qoo10 - 9 digit order number
  qoo10: {
    pattern: /^\d{9,12}$/,
    placeholder: '123456789',
    hint: '格式: 9-12位数字 (例: 123456789)'
  },
  // Coupang - Korea - 13 digit order number
  coupang: {
    pattern: /^\d{13}$/,
    placeholder: '1234567890123',
    hint: '格式: 13位数字 (例: 1234567890123)'
  },
  // JD.com - 12 digit order number
  jd: {
    pattern: /^\d{12,15}$/,
    placeholder: '123456789012',
    hint: '格式: 12-15位数字 (例: 123456789012)'
  },
  // Taobao - 18-19 digit order number
  taobao: {
    pattern: /^\d{18,20}$/,
    placeholder: '1234567890123456789',
    hint: '格式: 18-20位数字 (例: 1234567890123456789)'
  },
  // Tmall - Same as Taobao (Alibaba platform)
  tmall: {
    pattern: /^\d{18,20}$/,
    placeholder: '1234567890123456789',
    hint: '格式: 18-20位数字 (例: 1234567890123456789)'
  },
  // Other platforms - flexible validation
  other: {
    pattern: /^.{5,50}$/,
    placeholder: '请输入完整订单号',
    hint: '格式: 请输入5-50位订单号'
  }
};

// ==========================================================================
// Internationalization (i18n)
// ==========================================================================

const translations = {
  zh: {
    lang: '中文',
    breadcrumbHome: '首页',
    breadcrumbActivate: '激活售后服务',
    formTitle: '激活售后服务',
    formSubtitle: '填写以下信息以激活您的产品保修和专属支持服务。<br>请确保信息与您的订单一致。',
    stepInfo: '填写信息',
    stepVerify: '安全验证',
    stepComplete: '完成注册',
    labelName: '姓名',
    labelEmail: '邮件地址',
    labelCountry: '国家/地区',
    labelPlatform: '购买平台',
    labelOrder: '订单号码',
    placeholderName: '请输入您的姓名',
    placeholderEmail: 'example@email.com',
    placeholderCountry: '请选择国家/地区',
    placeholderOrderSelect: '请先选择购买平台',
    hintName: '2-50个字符，支持中文、日文、韩文、英文',
    hintEmail: '我们将通过此邮箱发送保修确认和服务通知',
    errorName: '请输入有效的姓名 (2-50个字符)',
    errorEmail: '请输入有效的邮箱地址',
    errorCountry: '请选择您所在的国家/地区',
    errorPlatform: '请选择购买平台',
    errorOrder: '订单号格式不正确',
    btnNext: '下一步',
    btnPrev: '上一步',
    btnSubmit: '提交注册',
    btnBackHome: '返回首页',
    captchaLabel: '请完成安全验证',
    captchaText: '我不是机器人',
    captchaNote: '验证用于防止恶意提交，保护您的数据安全',
    successTitle: '注册成功!',
    successMessage: '您的产品已成功激活售后服务。<br>确认邮件已发送至您的邮箱，请注意查收。',
    detailOrderLabel: '订单号',
    detailEmailLabel: '确认邮件',
    detailWarrantyLabel: '保修期限',
    detailWarrantyValue: '自购买日起 12 个月',
    helpText: '遇到问题?',
    helpLink: '联系客服',
    footerPrivacy: '隐私政策',
    footerTerms: '使用条款',
    platformOther: '其他平台',
    platformOtherFormat: '请输入完整订单号'
  },
  en: {
    lang: 'English',
    breadcrumbHome: 'Home',
    breadcrumbActivate: 'Activate Service',
    formTitle: 'Activate After-Sales Service',
    formSubtitle: 'Fill in the information below to activate your product warranty and exclusive support.<br>Please ensure the information matches your order.',
    stepInfo: 'Information',
    stepVerify: 'Verification',
    stepComplete: 'Complete',
    labelName: 'Name',
    labelEmail: 'Email Address',
    labelCountry: 'Country/Region',
    labelPlatform: 'Purchase Platform',
    labelOrder: 'Order Number',
    placeholderName: 'Enter your name',
    placeholderEmail: 'example@email.com',
    placeholderCountry: 'Select country/region',
    placeholderOrderSelect: 'Please select platform first',
    hintName: '2-50 characters, supports Chinese, Japanese, Korean, English',
    hintEmail: 'We will send warranty confirmation and service notifications to this email',
    errorName: 'Please enter a valid name (2-50 characters)',
    errorEmail: 'Please enter a valid email address',
    errorCountry: 'Please select your country/region',
    errorPlatform: 'Please select purchase platform',
    errorOrder: 'Invalid order number format',
    btnNext: 'Next',
    btnPrev: 'Back',
    btnSubmit: 'Submit',
    btnBackHome: 'Back to Home',
    captchaLabel: 'Complete security verification',
    captchaText: "I'm not a robot",
    captchaNote: 'Verification protects against malicious submissions',
    successTitle: 'Registration Successful!',
    successMessage: 'Your product warranty has been activated.<br>A confirmation email has been sent to your inbox.',
    detailOrderLabel: 'Order Number',
    detailEmailLabel: 'Confirmation Email',
    detailWarrantyLabel: 'Warranty Period',
    detailWarrantyValue: '12 months from purchase date',
    helpText: 'Need help?',
    helpLink: 'Contact Support',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',
    platformOther: 'Other Platform',
    platformOtherFormat: 'Enter full order number'
  },
  ja: {
    lang: '日本語',
    breadcrumbHome: 'ホーム',
    breadcrumbActivate: 'サービス有効化',
    formTitle: 'アフターサービスを有効化',
    formSubtitle: '以下の情報を入力して、製品保証と専用サポートを有効にしてください。<br>注文内容と一致する情報をご入力ください。',
    stepInfo: '情報入力',
    stepVerify: '認証',
    stepComplete: '完了',
    labelName: 'お名前',
    labelEmail: 'メールアドレス',
    labelCountry: '国/地域',
    labelPlatform: '購入プラットフォーム',
    labelOrder: '注文番号',
    placeholderName: 'お名前を入力してください',
    placeholderEmail: 'example@email.com',
    placeholderCountry: '国/地域を選択',
    placeholderOrderSelect: 'まずプラットフォームを選択してください',
    hintName: '2-50文字、日本語・中国語・韓国語・英語対応',
    hintEmail: '保証確認とサービス通知をこのメールに送信します',
    errorName: '有効な名前を入力してください (2-50文字)',
    errorEmail: '有効なメールアドレスを入力してください',
    errorCountry: '国/地域を選択してください',
    errorPlatform: '購入プラットフォームを選択してください',
    errorOrder: '注文番号の形式が正しくありません',
    btnNext: '次へ',
    btnPrev: '戻る',
    btnSubmit: '登録する',
    btnBackHome: 'ホームに戻る',
    captchaLabel: 'セキュリティ認証を完了してください',
    captchaText: '私はロボットではありません',
    captchaNote: '悪意のある送信からデータを保護するための認証です',
    successTitle: '登録完了!',
    successMessage: '製品のアフターサービスが有効になりました。<br>確認メールを送信しました。ご確認ください。',
    detailOrderLabel: '注文番号',
    detailEmailLabel: '確認メール',
    detailWarrantyLabel: '保証期間',
    detailWarrantyValue: '購入日から12ヶ月',
    helpText: 'お困りですか?',
    helpLink: 'サポートに連絡',
    footerPrivacy: 'プライバシーポリシー',
    footerTerms: '利用規約',
    platformOther: 'その他',
    platformOtherFormat: '注文番号を入力'
  },
  ko: {
    lang: '한국어',
    breadcrumbHome: '홈',
    breadcrumbActivate: '서비스 활성화',
    formTitle: 'A/S 서비스 활성화',
    formSubtitle: '아래 정보를 입력하여 제품 보증 및 전용 지원을 활성화하세요.<br>주문 정보와 일치하는지 확인해 주세요.',
    stepInfo: '정보 입력',
    stepVerify: '인증',
    stepComplete: '완료',
    labelName: '이름',
    labelEmail: '이메일 주소',
    labelCountry: '국가/지역',
    labelPlatform: '구매 플랫폼',
    labelOrder: '주문 번호',
    placeholderName: '이름을 입력하세요',
    placeholderEmail: 'example@email.com',
    placeholderCountry: '국가/지역 선택',
    placeholderOrderSelect: '먼저 플랫폼을 선택하세요',
    hintName: '2-50자, 한국어/중국어/일본어/영어 지원',
    hintEmail: '보증 확인 및 서비스 알림을 이 이메일로 보내드립니다',
    errorName: '유효한 이름을 입력하세요 (2-50자)',
    errorEmail: '유효한 이메일 주소를 입력하세요',
    errorCountry: '국가/지역을 선택하세요',
    errorPlatform: '구매 플랫폼을 선택하세요',
    errorOrder: '주문 번호 형식이 올바르지 않습니다',
    btnNext: '다음',
    btnPrev: '이전',
    btnSubmit: '등록하기',
    btnBackHome: '홈으로 돌아가기',
    captchaLabel: '보안 인증을 완료하세요',
    captchaText: '저는 로봇이 아닙니다',
    captchaNote: '악의적인 제출로부터 데이터를 보호하기 위한 인증입니다',
    successTitle: '등록 완료!',
    successMessage: '제품의 A/S 서비스가 활성화되었습니다.<br>확인 이메일이 발송되었습니다.',
    detailOrderLabel: '주문 번호',
    detailEmailLabel: '확인 이메일',
    detailWarrantyLabel: '보증 기간',
    detailWarrantyValue: '구매일로부터 12개월',
    helpText: '도움이 필요하신가요?',
    helpLink: '고객센터 문의',
    footerPrivacy: '개인정보 처리방침',
    footerTerms: '이용약관',
    platformOther: '기타 플랫폼',
    platformOtherFormat: '주문 번호 입력'
  },
  de: {
    lang: 'Deutsch',
    breadcrumbHome: 'Startseite',
    breadcrumbActivate: 'Service aktivieren',
    formTitle: 'Kundendienst aktivieren',
    formSubtitle: 'Füllen Sie die folgenden Informationen aus, um Ihre Produktgarantie und den exklusiven Support zu aktivieren.',
    stepInfo: 'Information',
    stepVerify: 'Verifizierung',
    stepComplete: 'Fertig',
    labelName: 'Name',
    labelEmail: 'E-Mail-Adresse',
    labelCountry: 'Land/Region',
    labelPlatform: 'Kaufplattform',
    labelOrder: 'Bestellnummer',
    placeholderName: 'Geben Sie Ihren Namen ein',
    placeholderEmail: 'beispiel@email.com',
    placeholderCountry: 'Land/Region auswählen',
    placeholderOrderSelect: 'Bitte zuerst Plattform auswählen',
    hintName: '2-50 Zeichen',
    hintEmail: 'Wir senden Garantiebestätigung und Service-Benachrichtigungen an diese E-Mail',
    errorName: 'Bitte geben Sie einen gültigen Namen ein',
    errorEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    errorCountry: 'Bitte wählen Sie Ihr Land/Region',
    errorPlatform: 'Bitte wählen Sie die Kaufplattform',
    errorOrder: 'Ungültiges Bestellnummernformat',
    btnNext: 'Weiter',
    btnPrev: 'Zurück',
    btnSubmit: 'Absenden',
    btnBackHome: 'Zur Startseite',
    captchaLabel: 'Sicherheitsüberprüfung abschließen',
    captchaText: 'Ich bin kein Roboter',
    captchaNote: 'Verifizierung schützt vor böswilligen Eingaben',
    successTitle: 'Registrierung erfolgreich!',
    successMessage: 'Ihre Produktgarantie wurde aktiviert.<br>Eine Bestätigungs-E-Mail wurde gesendet.',
    detailOrderLabel: 'Bestellnummer',
    detailEmailLabel: 'Bestätigungs-E-Mail',
    detailWarrantyLabel: 'Garantiezeitraum',
    detailWarrantyValue: '12 Monate ab Kaufdatum',
    helpText: 'Brauchen Sie Hilfe?',
    helpLink: 'Support kontaktieren',
    footerPrivacy: 'Datenschutz',
    footerTerms: 'Nutzungsbedingungen',
    platformOther: 'Andere Plattform',
    platformOtherFormat: 'Bestellnummer eingeben'
  },
  fr: {
    lang: 'Français',
    breadcrumbHome: 'Accueil',
    breadcrumbActivate: 'Activer le service',
    formTitle: 'Activer le service après-vente',
    formSubtitle: 'Remplissez les informations ci-dessous pour activer la garantie et le support exclusif de votre produit.',
    stepInfo: 'Informations',
    stepVerify: 'Vérification',
    stepComplete: 'Terminé',
    labelName: 'Nom',
    labelEmail: 'Adresse e-mail',
    labelCountry: 'Pays/Région',
    labelPlatform: 'Plateforme d\'achat',
    labelOrder: 'Numéro de commande',
    placeholderName: 'Entrez votre nom',
    placeholderEmail: 'exemple@email.com',
    placeholderCountry: 'Sélectionner pays/région',
    placeholderOrderSelect: 'Veuillez d\'abord sélectionner la plateforme',
    hintName: '2-50 caractères',
    hintEmail: 'Nous enverrons la confirmation de garantie à cet e-mail',
    errorName: 'Veuillez entrer un nom valide',
    errorEmail: 'Veuillez entrer une adresse e-mail valide',
    errorCountry: 'Veuillez sélectionner votre pays/région',
    errorPlatform: 'Veuillez sélectionner la plateforme d\'achat',
    errorOrder: 'Format de numéro de commande invalide',
    btnNext: 'Suivant',
    btnPrev: 'Retour',
    btnSubmit: 'Soumettre',
    btnBackHome: 'Retour à l\'accueil',
    captchaLabel: 'Complétez la vérification de sécurité',
    captchaText: 'Je ne suis pas un robot',
    captchaNote: 'La vérification protège contre les soumissions malveillantes',
    successTitle: 'Inscription réussie!',
    successMessage: 'La garantie de votre produit a été activée.<br>Un e-mail de confirmation a été envoyé.',
    detailOrderLabel: 'N° de commande',
    detailEmailLabel: 'E-mail de confirmation',
    detailWarrantyLabel: 'Période de garantie',
    detailWarrantyValue: '12 mois à compter de la date d\'achat',
    helpText: 'Besoin d\'aide?',
    helpLink: 'Contacter le support',
    footerPrivacy: 'Politique de confidentialité',
    footerTerms: 'Conditions d\'utilisation',
    platformOther: 'Autre plateforme',
    platformOtherFormat: 'Entrez le numéro de commande'
  },
  es: {
    lang: 'Español',
    breadcrumbHome: 'Inicio',
    breadcrumbActivate: 'Activar servicio',
    formTitle: 'Activar servicio postventa',
    formSubtitle: 'Complete la información a continuación para activar la garantía y el soporte exclusivo de su producto.',
    stepInfo: 'Información',
    stepVerify: 'Verificación',
    stepComplete: 'Completado',
    labelName: 'Nombre',
    labelEmail: 'Correo electrónico',
    labelCountry: 'País/Región',
    labelPlatform: 'Plataforma de compra',
    labelOrder: 'Número de pedido',
    placeholderName: 'Ingrese su nombre',
    placeholderEmail: 'ejemplo@email.com',
    placeholderCountry: 'Seleccionar país/región',
    placeholderOrderSelect: 'Primero seleccione la plataforma',
    hintName: '2-50 caracteres',
    hintEmail: 'Enviaremos la confirmación de garantía a este correo',
    errorName: 'Por favor ingrese un nombre válido',
    errorEmail: 'Por favor ingrese un correo electrónico válido',
    errorCountry: 'Por favor seleccione su país/región',
    errorPlatform: 'Por favor seleccione la plataforma de compra',
    errorOrder: 'Formato de número de pedido inválido',
    btnNext: 'Siguiente',
    btnPrev: 'Atrás',
    btnSubmit: 'Enviar',
    btnBackHome: 'Volver al inicio',
    captchaLabel: 'Complete la verificación de seguridad',
    captchaText: 'No soy un robot',
    captchaNote: 'La verificación protege contra envíos maliciosos',
    successTitle: '¡Registro exitoso!',
    successMessage: 'La garantía de su producto ha sido activada.<br>Se ha enviado un correo de confirmación.',
    detailOrderLabel: 'N° de pedido',
    detailEmailLabel: 'Correo de confirmación',
    detailWarrantyLabel: 'Período de garantía',
    detailWarrantyValue: '12 meses desde la fecha de compra',
    helpText: '¿Necesita ayuda?',
    helpLink: 'Contactar soporte',
    footerPrivacy: 'Política de privacidad',
    footerTerms: 'Términos de uso',
    platformOther: 'Otra plataforma',
    platformOtherFormat: 'Ingrese número de pedido'
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

  // Update order format hint if platform is selected
  updateOrderHint();

  // Save preference
  localStorage.setItem('preferredLanguage', lang);
}

// ==========================================================================
// Form State
// ==========================================================================

let currentStep = 1;
let formData = {
  name: '',
  email: '',
  country: '',
  platform: '',
  orderNumber: ''
};

// ==========================================================================
// DOM Elements
// ==========================================================================

const form = document.getElementById('activationForm');
const steps = document.querySelectorAll('.step');
const stepLines = document.querySelectorAll('.step-line');
const formSteps = document.querySelectorAll('.form-step');
const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');
const btnSubmit = document.getElementById('btnSubmit');
const captchaCheck = document.getElementById('captchaCheck');

// Input elements
const nameInput = document.getElementById('customerName');
const emailInput = document.getElementById('customerEmail');
const countrySelect = document.getElementById('customerCountry');
const platformInputs = document.querySelectorAll('input[name="platform"]');
const orderInput = document.getElementById('orderNumber');

// ==========================================================================
// Validation Functions
// ==========================================================================

function validateName(value) {
  const pattern = /^[\u4e00-\u9fa5\u3040-\u309f\u30a0-\u30ff\uac00-\ud7afa-zA-Z\s]{2,50}$/;
  return pattern.test(value.trim());
}

function validateEmail(value) {
  // RFC5322 simplified pattern
  const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return pattern.test(value.trim());
}

function validateOrderNumber(value, platform) {
  if (!platform || !ORDER_PATTERNS[platform]) return false;
  return ORDER_PATTERNS[platform].pattern.test(value.trim());
}

function validateField(input, validator, ...args) {
  const value = input.value;
  const isValid = validator(value, ...args);
  const formGroup = input.closest('.form-group');

  formGroup.classList.remove('error', 'success');

  if (value.trim() === '') {
    return false;
  }

  if (isValid) {
    formGroup.classList.add('success');
  } else {
    formGroup.classList.add('error');
  }

  return isValid;
}

function validateStep1() {
  const selectedPlatform = document.querySelector('input[name="platform"]:checked');

  const isNameValid = validateField(nameInput, validateName);
  const isEmailValid = validateField(emailInput, validateEmail);
  const isCountryValid = countrySelect.value !== '';
  const isPlatformValid = selectedPlatform !== null;
  const isOrderValid = selectedPlatform
    ? validateField(orderInput, validateOrderNumber, selectedPlatform.value)
    : false;

  // Show error states for empty required fields
  if (!isCountryValid) {
    countrySelect.closest('.form-group').classList.add('error');
  }

  if (!isPlatformValid) {
    document.querySelector('.platform-options').closest('.form-group').classList.add('error');
  }

  return isNameValid && isEmailValid && isCountryValid && isPlatformValid && isOrderValid;
}

// ==========================================================================
// Step Navigation
// ==========================================================================

function updateProgress() {
  steps.forEach((step, index) => {
    const stepNum = index + 1;
    step.classList.remove('active', 'completed');

    if (stepNum < currentStep) {
      step.classList.add('completed');
    } else if (stepNum === currentStep) {
      step.classList.add('active');
    }
  });

  stepLines.forEach((line, index) => {
    line.classList.toggle('completed', index < currentStep - 1);
  });

  formSteps.forEach((formStep, index) => {
    formStep.classList.toggle('active', index + 1 === currentStep);
  });
}

function goToStep(step) {
  currentStep = step;
  updateProgress();

  // Scroll to top of form
  document.querySelector('.form-container').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// ==========================================================================
// Order Number Input Handling
// ==========================================================================

function updateOrderHint() {
  const selectedPlatform = document.querySelector('input[name="platform"]:checked');
  const hintEl = document.querySelector('.order-format-hint span');

  if (selectedPlatform && ORDER_PATTERNS[selectedPlatform.value]) {
    const platformConfig = ORDER_PATTERNS[selectedPlatform.value];
    orderInput.disabled = false;
    orderInput.placeholder = platformConfig.placeholder;
    hintEl.textContent = platformConfig.hint;
  } else {
    orderInput.disabled = true;
    orderInput.placeholder = translations[currentLang]?.placeholderOrderSelect || '请先选择购买平台';
    hintEl.textContent = translations[currentLang]?.hintOrderFormat || '请选择购买平台后输入订单号';
  }
}

// ==========================================================================
// Event Listeners
// ==========================================================================

function initEventListeners() {
  // Language Switcher
  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
      setLanguage(option.dataset.lang);
    });
  });

  // Platform selection
  platformInputs.forEach(input => {
    input.addEventListener('change', () => {
      updateOrderHint();
      // Clear previous order validation
      orderInput.value = '';
      orderInput.closest('.form-group').classList.remove('error', 'success');
      // Remove platform error
      document.querySelector('.platform-options').closest('.form-group').classList.remove('error');
    });
  });

  // Real-time validation
  nameInput.addEventListener('blur', () => validateField(nameInput, validateName));
  emailInput.addEventListener('blur', () => validateField(emailInput, validateEmail));
  countrySelect.addEventListener('change', () => {
    countrySelect.closest('.form-group').classList.remove('error');
  });
  orderInput.addEventListener('blur', () => {
    const selectedPlatform = document.querySelector('input[name="platform"]:checked');
    if (selectedPlatform) {
      validateField(orderInput, validateOrderNumber, selectedPlatform.value);
    }
  });

  // Next button
  btnNext.addEventListener('click', () => {
    if (validateStep1()) {
      // Save form data
      formData = {
        name: nameInput.value,
        email: emailInput.value,
        country: countrySelect.value,
        platform: document.querySelector('input[name="platform"]:checked').value,
        orderNumber: orderInput.value
      };
      goToStep(2);
    } else {
      // Shake effect on error
      form.classList.add('shake');
      setTimeout(() => form.classList.remove('shake'), 500);
    }
  });

  // Previous button
  btnPrev.addEventListener('click', () => {
    goToStep(1);
  });

  // CAPTCHA checkbox
  captchaCheck.addEventListener('change', () => {
    btnSubmit.disabled = !captchaCheck.checked;
  });

  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!captchaCheck.checked) return;

    // Show loading state
    btnSubmit.classList.add('loading');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success
    btnSubmit.classList.remove('loading');
    document.getElementById('successOrderNumber').textContent = formData.orderNumber;
    document.getElementById('successEmail').textContent = formData.email;
    goToStep(3);
  });
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
  });

  // High contrast toggle
  highContrastBtn?.addEventListener('click', () => {
    const isEnabled = document.body.classList.toggle('high-contrast');
    highContrastBtn.setAttribute('aria-pressed', isEnabled);
    localStorage.setItem('highContrast', isEnabled);
  });
}

// ==========================================================================
// Initialize
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Load saved language preference
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
  } else {
    // Auto-detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
      setLanguage(browserLang);
    }
  }

  initEventListeners();
  updateProgress();
  initAccessibilityControls();
});
