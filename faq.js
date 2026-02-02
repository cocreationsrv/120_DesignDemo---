/**
 * FAQ Page
 * JavaScript Functionality
 */

// ==========================================================================
// Internationalization (i18n)
// ==========================================================================

const translations = {
  zh: {
    lang: '中文',
    breadcrumbHome: '首页',
    breadcrumbFaq: '常见问题',
    faqHeroTitle: '常见问题',
    faqHeroSubtitle: '快速找到您需要的答案，解决常见问题',
    searchPlaceholder: '搜索问题...',
    categoryAll: '全部问题',
    categoryActivation: '产品激活',
    categoryWarranty: '保修服务',
    categoryUsage: '使用指南',
    q1: '如何激活我的产品保修服务？',
    a1: '<p>激活产品保修服务非常简单，只需按以下步骤操作：</p><ol><li>访问我们的售后服务中心首页</li><li>找到您的产品并点击"激活售后服务"</li><li>填写您的姓名、邮箱、国家和订单号码</li><li>提交表单后，您将收到确认邮件</li></ol><p>激活成功后，您的产品将享受完整的保修服务。</p>',
    q2: '在哪里可以找到我的订单号码？',
    a2: '<p>订单号码可以在以下位置找到：</p><ul><li><strong>购买确认邮件</strong> - 查看购买时收到的确认邮件</li><li><strong>电商平台订单页面</strong> - 登录您的Amazon、乐天或Yahoo账户，在订单历史中查找</li><li><strong>发货单</strong> - 随产品一起寄送的发货单上会标注订单号</li></ul><p>不同平台的订单号格式略有不同，请确保输入完整的订单号。</p>',
    q3: '产品的保修期是多长时间？',
    a3: '<p>我们提供以下保修服务：</p><ul><li><strong>标准保修</strong> - 自购买之日起12个月</li><li><strong>延长保修</strong> - 激活售后服务可额外获得6个月延保</li><li><strong>电池保修</strong> - 6个月（适用于含电池产品）</li></ul><p>保修范围包括制造缺陷和非人为损坏的故障。人为损坏、进水、未经授权的维修不在保修范围内。</p>',
    q4: '如何申请产品维修或更换？',
    a4: '<p>申请维修或更换的步骤：</p><ol><li>联系我们的客服团队，描述产品问题</li><li>提供订单号和产品激活信息</li><li>根据客服指引，寄送产品或提供故障证明</li><li>我们将在收到产品后5-7个工作日内完成检测</li><li>确认保修范围后，进行维修或更换</li></ol><p>在保修期内的符合条件的维修是免费的。</p>',
    q5: '如何下载产品的用户手册？',
    a5: '<p>下载用户手册的方法：</p><ol><li>在首页找到您的产品</li><li>点击"操作手册与视频"卡片</li><li>在"User Manuals"部分找到需要的文档</li><li>点击"预览"在线查看，或点击"下载"保存到本地</li></ol><p>我们提供PDF格式的完整用户手册和快速入门指南。</p>',
    q6: '如何更新产品固件？',
    a6: '<p>固件更新步骤：</p><ol><li>在产品页面的"Software & Firmware"部分下载最新固件</li><li>确保产品电量充足（建议50%以上）</li><li>将固件文件传输到产品或通过App推送更新</li><li>等待更新完成，期间请勿断电或关机</li></ol><p>更新固件可以修复已知问题并带来新功能。建议保持固件为最新版本。</p>',
    q7: '产品无法开机怎么办？',
    a7: '<p>请尝试以下故障排除步骤：</p><ol><li><strong>检查电源</strong> - 确保电源适配器正常连接，指示灯亮起</li><li><strong>长按电源键</strong> - 按住电源键10秒以上尝试强制开机</li><li><strong>更换电源</strong> - 尝试使用其他兼容的电源适配器</li><li><strong>等待充电</strong> - 如电池完全耗尽，充电30分钟后再尝试开机</li></ol><p>如以上步骤无法解决问题，请联系客服获取进一步支持。</p>',
    q8: '可以退货或换货吗？',
    a8: '<p>我们的退换货政策：</p><ul><li><strong>7天无理由退货</strong> - 产品未拆封、未使用可全额退款</li><li><strong>15天换货</strong> - 产品存在质量问题可申请换货</li><li><strong>退货条件</strong> - 产品需保持原包装完好，配件齐全</li></ul><p>请注意：通过电商平台购买的产品，退换货需遵循相应平台的政策。建议先联系购买平台的客服处理。</p>',
    q9: '激活时提示订单号无效怎么办？',
    a9: '<p>订单号无效的可能原因及解决方法：</p><ul><li><strong>格式错误</strong> - 请检查订单号格式是否正确，包括连字符位置</li><li><strong>输入错误</strong> - 仔细核对是否有数字或字母输入错误</li><li><strong>平台不匹配</strong> - 确认选择了正确的购买平台</li><li><strong>订单未完成</strong> - 确认订单已支付并发货</li></ul><p>如仍无法解决，请联系客服并提供订单截图，我们将协助您完成激活。</p>',
    q10: '如何联系客服获取帮助？',
    a10: '<p>您可以通过以下方式联系我们的客服团队：</p><ul><li><strong>在线客服</strong> - 点击页面右下角的客服图标，工作时间内即时响应</li><li><strong>邮件支持</strong> - 发送邮件至 support@servicehub.com</li><li><strong>电话热线</strong> - 400-XXX-XXXX（工作日 9:00-18:00）</li></ul><p>我们的客服团队支持中文、英语和日语服务。通常会在24小时内回复您的咨询。</p>',
    noResultsTitle: '未找到相关问题',
    noResultsDesc: '请尝试其他关键词，或联系客服获取帮助',
    ctaTitle: '没有找到您需要的答案？',
    ctaDesc: '我们的客服团队随时准备为您提供帮助',
    ctaBtnChat: '在线咨询',
    ctaBtnEmail: '发送邮件',
    footerDesc: '专业的售后服务平台，为您提供全方位的产品支持。'
  },
  en: {
    lang: 'English',
    breadcrumbHome: 'Home',
    breadcrumbFaq: 'FAQ',
    faqHeroTitle: 'Frequently Asked Questions',
    faqHeroSubtitle: 'Find quick answers to common questions',
    searchPlaceholder: 'Search questions...',
    categoryAll: 'All Questions',
    categoryActivation: 'Activation',
    categoryWarranty: 'Warranty',
    categoryUsage: 'Usage Guide',
    q1: 'How do I activate my product warranty?',
    a1: '<p>Activating your product warranty is simple:</p><ol><li>Visit our After-Sales Service Center homepage</li><li>Find your product and click "Activate Service"</li><li>Fill in your name, email, country, and order number</li><li>After submission, you will receive a confirmation email</li></ol><p>Once activated, your product will enjoy full warranty coverage.</p>',
    q2: 'Where can I find my order number?',
    a2: '<p>You can find your order number in these locations:</p><ul><li><strong>Purchase confirmation email</strong> - Check the email you received when purchasing</li><li><strong>E-commerce platform order page</strong> - Log into your Amazon, Rakuten, or Yahoo account and check order history</li><li><strong>Packing slip</strong> - The order number is printed on the packing slip shipped with your product</li></ul><p>Order number formats vary by platform. Please ensure you enter the complete order number.</p>',
    q3: 'How long is the warranty period?',
    a3: '<p>We offer the following warranty services:</p><ul><li><strong>Standard warranty</strong> - 12 months from date of purchase</li><li><strong>Extended warranty</strong> - Additional 6 months when you activate after-sales service</li><li><strong>Battery warranty</strong> - 6 months (for products with batteries)</li></ul><p>Warranty covers manufacturing defects and non-human-caused failures. Physical damage, water damage, and unauthorized repairs are not covered.</p>',
    q4: 'How do I request repair or replacement?',
    a4: '<p>Steps to request repair or replacement:</p><ol><li>Contact our customer service team and describe the issue</li><li>Provide your order number and product activation information</li><li>Follow instructions to ship the product or provide proof of defect</li><li>We will complete inspection within 5-7 business days of receiving the product</li><li>After confirming warranty coverage, repair or replacement will proceed</li></ol><p>Eligible repairs within the warranty period are free of charge.</p>',
    q5: 'How do I download the user manual?',
    a5: '<p>To download the user manual:</p><ol><li>Find your product on the homepage</li><li>Click the "Manuals & Videos" card</li><li>Find the document you need in the "User Manuals" section</li><li>Click "Preview" to view online, or "Download" to save locally</li></ol><p>We provide complete user manuals and quick start guides in PDF format.</p>',
    q6: 'How do I update the product firmware?',
    a6: '<p>Firmware update steps:</p><ol><li>Download the latest firmware from the "Software & Firmware" section</li><li>Ensure the product has sufficient battery (50% or more recommended)</li><li>Transfer the firmware file to the product or push update via the app</li><li>Wait for the update to complete; do not disconnect power or turn off</li></ol><p>Updating firmware fixes known issues and brings new features. We recommend keeping firmware up to date.</p>',
    q7: 'What if my product won\'t turn on?',
    a7: '<p>Try these troubleshooting steps:</p><ol><li><strong>Check power</strong> - Ensure the power adapter is properly connected and the indicator light is on</li><li><strong>Long press power button</strong> - Hold the power button for 10+ seconds to force power on</li><li><strong>Try different power source</strong> - Use another compatible power adapter</li><li><strong>Wait and charge</strong> - If battery is completely drained, charge for 30 minutes before trying again</li></ol><p>If these steps don\'t resolve the issue, please contact customer service for further support.</p>',
    q8: 'Can I return or exchange my product?',
    a8: '<p>Our return and exchange policy:</p><ul><li><strong>7-day no-questions-asked return</strong> - Full refund for unopened, unused products</li><li><strong>15-day exchange</strong> - Exchange available for products with quality issues</li><li><strong>Return conditions</strong> - Product must be in original packaging with all accessories</li></ul><p>Note: For products purchased through e-commerce platforms, returns and exchanges must follow the respective platform\'s policies. We recommend contacting the platform\'s customer service first.</p>',
    q9: 'What if my order number is invalid during activation?',
    a9: '<p>Possible reasons and solutions for invalid order numbers:</p><ul><li><strong>Format error</strong> - Check if the order number format is correct, including hyphen positions</li><li><strong>Input error</strong> - Carefully verify for any digit or letter typos</li><li><strong>Platform mismatch</strong> - Confirm you selected the correct purchase platform</li><li><strong>Incomplete order</strong> - Verify the order has been paid and shipped</li></ul><p>If the issue persists, please contact customer service with an order screenshot, and we will help you complete activation.</p>',
    q10: 'How can I contact customer service for help?',
    a10: '<p>You can contact our customer service team through:</p><ul><li><strong>Live chat</strong> - Click the chat icon at the bottom right of the page for instant response during business hours</li><li><strong>Email support</strong> - Send an email to support@servicehub.com</li><li><strong>Phone hotline</strong> - 400-XXX-XXXX (Weekdays 9:00-18:00)</li></ul><p>Our customer service team supports Chinese, English, and Japanese. We typically respond within 24 hours.</p>',
    noResultsTitle: 'No matching questions found',
    noResultsDesc: 'Try different keywords or contact customer service for help',
    ctaTitle: 'Didn\'t find what you\'re looking for?',
    ctaDesc: 'Our customer service team is ready to help you',
    ctaBtnChat: 'Live Chat',
    ctaBtnEmail: 'Send Email',
    footerDesc: 'Professional after-sales service platform providing comprehensive product support.'
  },
  ja: {
    lang: '日本語',
    breadcrumbHome: 'ホーム',
    breadcrumbFaq: 'よくある質問',
    faqHeroTitle: 'よくある質問',
    faqHeroSubtitle: 'お探しの答えをすぐに見つけましょう',
    searchPlaceholder: '質問を検索...',
    categoryAll: 'すべての質問',
    categoryActivation: '製品登録',
    categoryWarranty: '保証サービス',
    categoryUsage: '使い方ガイド',
    q1: '製品保証をアクティベートするには？',
    a1: '<p>製品保証のアクティベートは簡単です：</p><ol><li>アフターサービスセンターのホームページにアクセス</li><li>製品を見つけて「サービスを有効化」をクリック</li><li>名前、メール、国、注文番号を入力</li><li>送信後、確認メールが届きます</li></ol><p>アクティベート完了後、製品は完全な保証サービスを受けられます。</p>',
    q2: '注文番号はどこで確認できますか？',
    a2: '<p>注文番号は以下の場所で確認できます：</p><ul><li><strong>購入確認メール</strong> - 購入時に届いたメールを確認</li><li><strong>ECサイトの注文ページ</strong> - Amazon、楽天、Yahooアカウントにログインして注文履歴を確認</li><li><strong>納品書</strong> - 製品と一緒に届いた納品書に記載</li></ul><p>プラットフォームによって注文番号の形式が異なります。完全な注文番号を入力してください。</p>',
    q3: '保証期間はどのくらいですか？',
    a3: '<p>以下の保証サービスを提供しています：</p><ul><li><strong>標準保証</strong> - 購入日から12ヶ月</li><li><strong>延長保証</strong> - アフターサービス登録で追加6ヶ月</li><li><strong>バッテリー保証</strong> - 6ヶ月（バッテリー搭載製品）</li></ul><p>保証範囲は製造上の欠陥と非人為的な故障です。物理的損傷、水没、無許可の修理は対象外です。</p>',
    q4: '修理または交換を申請するには？',
    a4: '<p>修理・交換の申請手順：</p><ol><li>カスタマーサービスに連絡し、問題を説明</li><li>注文番号と製品登録情報を提供</li><li>案内に従って製品を発送または故障証明を提供</li><li>製品受領後5-7営業日以内に検査完了</li><li>保証範囲確認後、修理または交換を実施</li></ol><p>保証期間内の対象修理は無料です。</p>',
    q5: 'ユーザーマニュアルをダウンロードするには？',
    a5: '<p>ユーザーマニュアルのダウンロード方法：</p><ol><li>ホームページで製品を見つける</li><li>「マニュアル・動画」カードをクリック</li><li>「User Manuals」セクションで必要なドキュメントを見つける</li><li>「プレビュー」でオンライン閲覧、「ダウンロード」で保存</li></ol><p>PDF形式の完全なユーザーマニュアルとクイックスタートガイドを提供しています。</p>',
    q6: 'ファームウェアを更新するには？',
    a6: '<p>ファームウェア更新手順：</p><ol><li>「Software & Firmware」セクションから最新ファームウェアをダウンロード</li><li>製品の充電が十分か確認（50%以上推奨）</li><li>ファームウェアファイルを製品に転送するか、アプリで更新</li><li>更新完了を待つ（電源を切らないでください）</li></ol><p>ファームウェア更新で既知の問題が修正され、新機能が追加されます。最新版の維持をお勧めします。</p>',
    q7: '製品が起動しない場合は？',
    a7: '<p>以下のトラブルシューティングをお試しください：</p><ol><li><strong>電源を確認</strong> - 電源アダプターが正しく接続され、インジケーターが点灯しているか確認</li><li><strong>電源ボタン長押し</strong> - 電源ボタンを10秒以上押して強制起動を試す</li><li><strong>別の電源を試す</strong> - 互換性のある別の電源アダプターを使用</li><li><strong>充電して待つ</strong> - バッテリーが完全に消耗している場合、30分充電してから再試行</li></ol><p>これらの手順で解決しない場合は、カスタマーサービスにお問い合わせください。</p>',
    q8: '返品・交換はできますか？',
    a8: '<p>返品・交換ポリシー：</p><ul><li><strong>7日間返品</strong> - 未開封・未使用品は全額返金</li><li><strong>15日間交換</strong> - 品質に問題がある場合は交換可能</li><li><strong>返品条件</strong> - 元のパッケージと付属品が揃っていること</li></ul><p>注意：ECサイトで購入した製品の返品・交換は、各プラットフォームのポリシーに従ってください。まずは購入先のカスタマーサービスにご連絡ください。</p>',
    q9: '注文番号が無効と表示される場合は？',
    a9: '<p>注文番号が無効な理由と解決方法：</p><ul><li><strong>形式エラー</strong> - ハイフンの位置を含め、注文番号の形式を確認</li><li><strong>入力ミス</strong> - 数字や文字の入力ミスがないか確認</li><li><strong>プラットフォーム不一致</strong> - 正しい購入プラットフォームを選択しているか確認</li><li><strong>注文未完了</strong> - 注文が支払い・発送済みか確認</li></ul><p>解決しない場合は、注文のスクリーンショットを添えてカスタマーサービスにお問い合わせください。</p>',
    q10: 'カスタマーサービスに連絡するには？',
    a10: '<p>カスタマーサービスへの連絡方法：</p><ul><li><strong>ライブチャット</strong> - ページ右下のチャットアイコンをクリック（営業時間内即時対応）</li><li><strong>メールサポート</strong> - support@servicehub.com</li><li><strong>電話</strong> - 400-XXX-XXXX（平日 9:00-18:00）</li></ul><p>日本語、英語、中国語でサポートいたします。通常24時間以内に返信いたします。</p>',
    noResultsTitle: '該当する質問が見つかりません',
    noResultsDesc: '別のキーワードを試すか、カスタマーサービスにお問い合わせください',
    ctaTitle: 'お探しの答えが見つかりませんか？',
    ctaDesc: 'カスタマーサービスがお手伝いいたします',
    ctaBtnChat: 'チャットで相談',
    ctaBtnEmail: 'メールを送る',
    footerDesc: 'プロフェッショナルなアフターサービスプラットフォーム。'
  }
};

// Current language
let currentLang = 'zh';

// Apply translations
function applyTranslations(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

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

  langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
    langToggle.classList.toggle('active');
  });

  langOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyTranslations(lang);
      langDropdown.classList.remove('active');
      langToggle.classList.remove('active');
    });
  });

  document.addEventListener('click', () => {
    langDropdown.classList.remove('active');
    langToggle.classList.remove('active');
  });
}

// ==========================================================================
// FAQ Accordion
// ==========================================================================

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      item.classList.toggle('active', !isActive);
      question.setAttribute('aria-expanded', !isActive);
    });
  });
}

// ==========================================================================
// Category Filter
// ==========================================================================

function initCategoryFilter() {
  const categoryTabs = document.querySelectorAll('.category-tab');
  const faqItems = document.querySelectorAll('.faq-item');
  const noResults = document.getElementById('noResults');

  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-category');

      // Update active tab
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Filter items
      let visibleCount = 0;
      faqItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        const shouldShow = category === 'all' || itemCategory === category;
        item.style.display = shouldShow ? 'block' : 'none';
        if (shouldShow) visibleCount++;
      });

      // Show/hide no results
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';

      // Clear search
      document.getElementById('faqSearch').value = '';
    });
  });
}

// ==========================================================================
// Search Functionality
// ==========================================================================

function initSearch() {
  const searchInput = document.getElementById('faqSearch');
  const faqItems = document.querySelectorAll('.faq-item');
  const noResults = document.getElementById('noResults');
  const categoryTabs = document.querySelectorAll('.category-tab');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    // Reset category to "all" when searching
    categoryTabs.forEach(t => t.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');

    let visibleCount = 0;

    faqItems.forEach(item => {
      const questionText = item.querySelector('.question-text').textContent.toLowerCase();
      const answerText = item.querySelector('.answer-content').textContent.toLowerCase();
      const shouldShow = query === '' || questionText.includes(query) || answerText.includes(query);

      item.style.display = shouldShow ? 'block' : 'none';
      if (shouldShow) visibleCount++;
    });

    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
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
  initFaqAccordion();
  initCategoryFilter();
  initSearch();
});
