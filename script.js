/* ===========================================
   EcoSouira — Interactive JavaScript
   =========================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initCountUp();
  initSmoothScroll();
  initVideoPlayer();
  initFlashcards();
  initLanguageSwitcher();
});

/* ========================================
   TRANSLATIONS DICTIONARY
   ======================================== */
const translations = {
  fr: {
    nav_about: "C'est quoi ?",
    nav_video: "Vidéo",
    nav_participate: "Participer",
    nav_join: "Rejoindre",
    hero_badge: "Pour la communauté d'Essaouira",
    hero_title: 'L\'Écotourisme :<br/><span class="gradient-text">L\'avenir d\'Essaouira</span><br/>est entre vos mains.',
    hero_subtitle: "Découvrez comment le tourisme peut profiter directement à notre communauté tout en protégeant notre nature.",
    hero_cta_video: "Voir la vidéo",
    hero_cta_learn: "En savoir plus",
    stat_1: "des habitants ne connaissent pas l'écotourisme",
    stat_2: "des revenus touristiques quittent la ville",
    stat_3: "formations locales disponibles",
    eco_tag: "Comprendre",
    eco_title: "C'est quoi l'Écotourisme ?",
    eco_desc: 'L\'écotourisme, c\'est un tourisme <strong>responsable</strong>. Au lieu que l\'argent des touristes parte ailleurs, il reste ici, chez nous à Essaouira. On protège notre nature, on valorise notre culture, et tout le monde en profite.',
    pillar_env_title: "Environnement",
    pillar_env_desc: "Protéger nos plages, nos forêts d'arganiers, et la beauté naturelle de notre ville pour nos enfants.",
    pillar_env_tag: "🌿 Nature",
    pillar_soc_title: "Social",
    pillar_soc_desc: "Valoriser notre culture Souirie, notre artisanat local, nos traditions et notre savoir-faire ancestral.",
    pillar_soc_tag: "🤝 Communauté",
    pillar_eco_title: "Économique",
    pillar_eco_desc: "Garder les revenus du tourisme ici, pour les habitants d'Essaouira. Chaque dirham compte.",
    pillar_eco_tag: "💰 Revenus locaux",
    video_tag: "Apprendre",
    video_title: "Regardez cette vidéo pour tout comprendre",
    video_desc: "En quelques minutes, découvrez comment l'écotourisme peut transformer Essaouira et la vie de ses habitants.",
    video_click: "▶ Cliquez pour regarder",
    video_feat_lang: "En Darija",
    video_feat_audience: "Pour tous",
    part_tag: "Agir",
    part_title: "Comment je peux participer ?",
    part_desc: "Peu importe qui vous êtes, vous avez un rôle à jouer dans le futur d'Essaouira. Choisissez votre parcours.",
    part_artisan_title: "Je suis Artisan",
    part_artisan_desc: 'Vendez directement vos produits aux visiteurs, <strong>sans intermédiaire</strong>. Fixez vos prix, racontez votre histoire.',
    part_artisan_b1: "Vente directe",
    part_artisan_b2: "Visibilité en ligne",
    part_artisan_b3: "Formation gratuite",
    part_cta: "Commencer →",
    part_popular: "Le plus populaire",
    part_habitant_title: "Je suis Habitant",
    part_habitant_desc: "Proposez une expérience authentique : un repas chez vous, une balade guidée, ou un hébergement local.",
    part_habitant_b1: "Revenu complémentaire",
    part_habitant_b2: "Échange culturel",
    part_habitant_b3: "Accompagnement complet",
    part_student_title: "Je suis Étudiant",
    part_student_desc: "Formez-vous aux métiers du tourisme durable et devenez un acteur du changement dans votre ville.",
    part_student_b1: "Formations gratuites",
    part_student_b2: "Certificats reconnus",
    part_student_b3: "Opportunités d'emploi",
    join_tag: "Gratuit",
    join_title: "Rejoignez la communauté EcoSouira",
    join_desc: 'Recevez des <strong>formations gratuites</strong>, des conseils pratiques et des opportunités exclusives pour transformer Essaouira ensemble.',
    join_members: "+120 membres déjà inscrits",
    form_name_label: "Votre nom",
    form_name_placeholder: "Ex: Fatima, Youssef...",
    form_contact_label: "Email ou WhatsApp",
    form_contact_placeholder: "email@exemple.com ou 06XXXXXXXX",
    form_role_label: "Vous êtes :",
    form_role_1: "Habitant(e)",
    form_role_2: "Artisan(e)",
    form_role_3: "Étudiant(e)",
    form_role_4: "Autre",
    form_submit: "Rejoindre gratuitement",
    form_note: "🔒 Vos données restent privées. Aucun spam, promis.",
    footer_brand: "Ensemble, faisons d'Essaouira un modèle d'écotourisme communautaire au Maroc.",
    footer_nav_title: "Navigation",
    footer_nav_1: "C'est quoi l'écotourisme ?",
    footer_nav_2: "Vidéo éducative",
    footer_nav_3: "Comment participer",
    footer_nav_4: "Nous rejoindre",
    footer_contact_title: "Contact",
    footer_location: "Essaouira, Maroc 🇲🇦",
    footer_copy: "© 2026 EcoSouira — Fait avec ❤️ pour Essaouira",
    footer_mission: "Un projet pour le développement durable de notre communauté",
    modal_title: "Bienvenue dans la communauté !",
    modal_desc: "Merci de nous avoir rejoint. Vous recevrez bientôt des informations sur les prochaines formations.",
    modal_cta: "C'est parti !",
    form_sending: "Envoi en cours...",
    under_development: "EN DÉVELOPPEMENT",
    nav_flashcards: "Quiz",
    flash_tag: "Apprendre",
    flash_title: "Testez vos connaissances",
    flash_desc: "Cliquez sur chaque carte pour découvrir la réponse. Apprenez les faits clés sur l'écotourisme à Essaouira.",
    flash_hint: "Cliquez pour retourner",
    flash_q1: "Quel pourcentage des revenus touristiques quitte Essaouira ?",
    flash_a1: "Environ 70% des revenus touristiques quittent la ville vers les grandes chaînes hôtelières et les tour-opérateurs étrangers.",
    flash_q2: "Quel rôle joue l'huile d'argan dans l'écotourisme ?",
    flash_a2: "L'arganier est endémique de la région. Les coopératives féminines produisent l'huile d'argan, créant des emplois locaux et préservant la forêt.",
    flash_q3: "Combien d'espèces d'oiseaux migrateurs visitent Essaouira ?",
    flash_a3: "Plus de 200 espèces d'oiseaux migrateurs passent par l'île de Mogador et les zones humides autour d'Essaouira chaque année.",
    flash_q4: "Qu'est-ce que le tourisme communautaire ?",
    flash_a4: "C'est un modèle où les habitants gèrent directement l'accueil des visiteurs : hébergement, repas, visites guidées — sans intermédiaire.",
    flash_q5: "Comment l'écotourisme aide les artisans ?",
    flash_a5: "Il permet aux artisans de vendre directement aux visiteurs, de fixer leurs propres prix et de valoriser leur savoir-faire ancestral.",
    flash_q6: "Quelles menaces environnementales pèsent sur Essaouira ?",
    flash_a6: "Érosion côtière, surpêche, déforestation des arganiers et pollution plastique menacent l'écosystème fragile de la région."
  },

  en: {
    nav_about: "What is it?",
    nav_video: "Video",
    nav_participate: "Participate",
    nav_join: "Join",
    hero_badge: "For the community of Essaouira",
    hero_title: 'Ecotourism:<br/><span class="gradient-text">The future of Essaouira</span><br/>is in your hands.',
    hero_subtitle: "Discover how tourism can directly benefit our community while protecting our nature.",
    hero_cta_video: "Watch the video",
    hero_cta_learn: "Learn more",
    stat_1: "of residents don't know about ecotourism",
    stat_2: "of tourism revenue leaves the city",
    stat_3: "local training programs available",
    eco_tag: "Understand",
    eco_title: "What is Ecotourism?",
    eco_desc: 'Ecotourism is <strong>responsible</strong> tourism. Instead of tourist money going elsewhere, it stays here, with us in Essaouira. We protect our nature, we value our culture, and everyone benefits.',
    pillar_env_title: "Environment",
    pillar_env_desc: "Protect our beaches, our argan forests, and the natural beauty of our city for our children.",
    pillar_env_tag: "🌿 Nature",
    pillar_soc_title: "Social",
    pillar_soc_desc: "Value our Souiri culture, our local craftsmanship, our traditions, and our ancestral know-how.",
    pillar_soc_tag: "🤝 Community",
    pillar_eco_title: "Economic",
    pillar_eco_desc: "Keep tourism revenue here, for the people of Essaouira. Every dirham counts.",
    pillar_eco_tag: "💰 Local Revenue",
    video_tag: "Learn",
    video_title: "Watch this video to understand everything",
    video_desc: "In just a few minutes, discover how ecotourism can transform Essaouira and the lives of its people.",
    video_click: "▶ Click to watch",
    video_feat_lang: "In Darija",
    video_feat_audience: "For everyone",
    part_tag: "Act",
    part_title: "How can I participate?",
    part_desc: "No matter who you are, you have a role to play in the future of Essaouira. Choose your path.",
    part_artisan_title: "I'm an Artisan",
    part_artisan_desc: 'Sell your products directly to visitors, <strong>without middlemen</strong>. Set your prices, tell your story.',
    part_artisan_b1: "Direct sales",
    part_artisan_b2: "Online visibility",
    part_artisan_b3: "Free training",
    part_cta: "Get started →",
    part_popular: "Most popular",
    part_habitant_title: "I'm a Resident",
    part_habitant_desc: "Offer an authentic experience: a meal at your home, a guided walk, or local accommodation.",
    part_habitant_b1: "Extra income",
    part_habitant_b2: "Cultural exchange",
    part_habitant_b3: "Full support",
    part_student_title: "I'm a Student",
    part_student_desc: "Train in sustainable tourism professions and become an agent of change in your city.",
    part_student_b1: "Free training",
    part_student_b2: "Recognized certificates",
    part_student_b3: "Job opportunities",
    join_tag: "Free",
    join_title: "Join the EcoSouira community",
    join_desc: 'Receive <strong>free training</strong>, practical advice, and exclusive opportunities to transform Essaouira together.',
    join_members: "+120 members already registered",
    form_name_label: "Your name",
    form_name_placeholder: "Ex: Fatima, Youssef...",
    form_contact_label: "Email or WhatsApp",
    form_contact_placeholder: "email@example.com or 06XXXXXXXX",
    form_role_label: "You are:",
    form_role_1: "Resident",
    form_role_2: "Artisan",
    form_role_3: "Student",
    form_role_4: "Other",
    form_submit: "Join for free",
    form_note: "🔒 Your data stays private. No spam, we promise.",
    footer_brand: "Together, let's make Essaouira a model of community ecotourism in Morocco.",
    footer_nav_title: "Navigation",
    footer_nav_1: "What is ecotourism?",
    footer_nav_2: "Educational video",
    footer_nav_3: "How to participate",
    footer_nav_4: "Join us",
    footer_contact_title: "Contact",
    footer_location: "Essaouira, Morocco 🇲🇦",
    footer_copy: "© 2026 EcoSouira — Made with ❤️ for Essaouira",
    footer_mission: "A project for the sustainable development of our community",
    modal_title: "Welcome to the community!",
    modal_desc: "Thank you for joining us. You will soon receive information about upcoming training sessions.",
    modal_cta: "Let's go!",
    form_sending: "Sending...",
    under_development: "UNDER DEVELOPMENT",
    nav_flashcards: "Quiz",
    flash_tag: "Learn",
    flash_title: "Test your knowledge",
    flash_desc: "Click each card to discover the answer. Learn key facts about ecotourism in Essaouira.",
    flash_hint: "Click to flip",
    flash_q1: "What percentage of tourism revenue leaves Essaouira?",
    flash_a1: "About 70% of tourism revenue leaves the city to large hotel chains and foreign tour operators.",
    flash_q2: "What role does argan oil play in ecotourism?",
    flash_a2: "The argan tree is endemic to the region. Women's cooperatives produce argan oil, creating local jobs and preserving the forest.",
    flash_q3: "How many migratory bird species visit Essaouira?",
    flash_a3: "More than 200 migratory bird species pass through Mogador Island and the wetlands around Essaouira each year.",
    flash_q4: "What is community-based tourism?",
    flash_a4: "It's a model where residents directly manage visitor hosting: accommodation, meals, guided tours — without middlemen.",
    flash_q5: "How does ecotourism help artisans?",
    flash_a5: "It allows artisans to sell directly to visitors, set their own prices, and showcase their ancestral craftsmanship.",
    flash_q6: "What environmental threats does Essaouira face?",
    flash_a6: "Coastal erosion, overfishing, argan tree deforestation, and plastic pollution threaten the region's fragile ecosystem."
  },

  ar: {
    nav_about: "ما هو؟",
    nav_video: "فيديو",
    nav_participate: "شارك",
    nav_join: "انضم",
    hero_badge: "من أجل مجتمع الصويرة",
    hero_title: 'السياحة البيئية:<br/><span class="gradient-text">مستقبل الصويرة</span><br/>بين أيديكم.',
    hero_subtitle: "اكتشفوا كيف يمكن للسياحة أن تنفع مجتمعنا مباشرة مع حماية طبيعتنا.",
    hero_cta_video: "شاهد الفيديو",
    hero_cta_learn: "اعرف المزيد",
    stat_1: "من السكان لا يعرفون السياحة البيئية",
    stat_2: "من مداخيل السياحة تخرج من المدينة",
    stat_3: "تكوينات محلية متاحة",
    eco_tag: "فهم",
    eco_title: "ما هي السياحة البيئية؟",
    eco_desc: 'السياحة البيئية هي سياحة <strong>مسؤولة</strong>. بدل ما تمشي فلوس السياح لبلاصات أخرى، تبقى هنا فالصويرة. نحمي الطبيعة ديالنا، نقدّrو الثقافة ديالنا، والكل يستافد.',
    pillar_env_title: "البيئة",
    pillar_env_desc: "حماية الشواطئ ديالنا، غابات الأركان، والجمال الطبيعي ديال مدينتنا لأولادنا.",
    pillar_env_tag: "🌿 الطبيعة",
    pillar_soc_title: "اجتماعي",
    pillar_soc_desc: "تقدير الثقافة الصويرية، الصناعة التقليدية المحلية، التقاليد والمعرفة ديال جدودنا.",
    pillar_soc_tag: "🤝 المجتمع",
    pillar_eco_title: "اقتصادي",
    pillar_eco_desc: "نخلّيو مداخيل السياحة هنا، لسكان الصويرة. كل درهم كيحسب.",
    pillar_eco_tag: "💰 مداخيل محلية",
    video_tag: "تعلّم",
    video_title: "شاهد هاد الفيديو باش تفهم كل شيء",
    video_desc: "في دقائق قليلة، اكتشف كيفاش السياحة البيئية تقدر تغيّر الصويرة وحياة سكانها.",
    video_click: "▶ اضغط للمشاهدة",
    video_feat_lang: "بالدارجة",
    video_feat_audience: "للجميع",
    part_tag: "شارك",
    part_title: "كيفاش نقدر نشارك؟",
    part_desc: "مهما كنتي شكون، عندك دور تلعبو في مستقبل الصويرة. اختار المسار ديالك.",
    part_artisan_title: "أنا صانع تقليدي",
    part_artisan_desc: 'بيع المنتجات ديالك مباشرة للزوار، <strong>بلا وسيط</strong>. حدد الأثمان ديالك، واحكي قصتك.',
    part_artisan_b1: "بيع مباشر",
    part_artisan_b2: "ظهور على الإنترنت",
    part_artisan_b3: "تكوين مجاني",
    part_cta: "ابدأ ←",
    part_popular: "الأكثر شعبية",
    part_habitant_title: "أنا ساكن",
    part_habitant_desc: "قدّم تجربة أصيلة: وجبة فدارك، جولة موجّهة، أو سكن محلي.",
    part_habitant_b1: "دخل إضافي",
    part_habitant_b2: "تبادل ثقافي",
    part_habitant_b3: "مرافقة كاملة",
    part_student_title: "أنا طالب",
    part_student_desc: "تكوّن في مهن السياحة المستدامة وولّي فاعل في التغيير فمدينتك.",
    part_student_b1: "تكوينات مجانية",
    part_student_b2: "شهادات معترف بها",
    part_student_b3: "فرص عمل",
    join_tag: "مجاني",
    join_title: "انضم لمجتمع إيكوصويرة",
    join_desc: 'توصّل بـ<strong>تكوينات مجانية</strong>، نصائح عملية وفرص حصرية باش نحوّلو الصويرة مع بعض.',
    join_members: "+120 عضو مسجّل",
    form_name_label: "الاسم ديالك",
    form_name_placeholder: "مثلا: فاطمة، يوسف...",
    form_contact_label: "الإيميل أو واتساب",
    form_contact_placeholder: "email@exemple.com أو 06XXXXXXXX",
    form_role_label: "أنت:",
    form_role_1: "ساكن(ة)",
    form_role_2: "صانع(ة) تقليدي(ة)",
    form_role_3: "طالب(ة)",
    form_role_4: "آخر",
    form_submit: "انضم مجاناً",
    form_note: "🔒 المعلومات ديالك محمية. ما كاين حتى سبام.",
    footer_brand: "مع بعض، نخلّيو الصويرة نموذج للسياحة البيئية المجتمعية في المغرب.",
    footer_nav_title: "التنقل",
    footer_nav_1: "ما هي السياحة البيئية؟",
    footer_nav_2: "فيديو تعليمي",
    footer_nav_3: "كيفاش نشارك",
    footer_nav_4: "انضم لينا",
    footer_contact_title: "الاتصال",
    footer_location: "الصويرة، المغرب 🇲🇦",
    footer_copy: "© 2026 إيكوصويرة — مصنوع بـ ❤️ للصويرة",
    footer_mission: "مشروع من أجل التنمية المستدامة لمجتمعنا",
    modal_title: "مرحبا بك في المجتمع!",
    modal_desc: "شكرا على الانضمام. غادي توصلك معلومات على التكوينات القادمة قريبا.",
    modal_cta: "يالله نبداو!",
    form_sending: "كيتسيفط...",
    under_development: "تحت التطوير",
    nav_flashcards: "اختبار",
    flash_tag: "تعلّم",
    flash_title: "اختبر معلوماتك",
    flash_desc: "اضغط على كل بطاقة باش تكتشف الجواب. تعلّم المعلومات الأساسية على السياحة البيئية فالصويرة.",
    flash_hint: "اضغط للقلب",
    flash_q1: "شحال من المائة من مداخيل السياحة كتخرج من الصويرة؟",
    flash_a1: "تقريبا 70% من مداخيل السياحة كتخرج من المدينة لصالح سلاسل الفنادق الكبرى ومنظمي الرحلات الأجانب.",
    flash_q2: "شنو هو دور زيت الأركان فالسياحة البيئية؟",
    flash_a2: "شجرة الأركان موجودة غير فهاد المنطقة. التعاونيات النسائية كتنتج زيت الأركان، كتخلق فرص شغل محلية وكتحافظ على الغابة.",
    flash_q3: "شحال من نوع ديال الطيور المهاجرة كتزور الصويرة؟",
    flash_a3: "كتر من 200 نوع ديال الطيور المهاجرة كتدوز من جزيرة موكادور والمناطق الرطبة حوالين الصويرة كل عام.",
    flash_q4: "شنو هي السياحة المجتمعية؟",
    flash_a4: "هو نموذج فين السكان كيديرو استقبال الزوار مباشرة: سكن، ماكلة، جولات — بلا وسيط.",
    flash_q5: "كيفاش السياحة البيئية كتساعد الصناع التقليديين؟",
    flash_a5: "كتمكنهم من البيع مباشرة للزوار، تحديد الأثمان ديالهم، وتقدير الصنعة التقليدية ديال جدودهم.",
    flash_q6: "شنو هي التهديدات البيئية لي كتواجه الصويرة؟",
    flash_a6: "التآكل الساحلي، الصيد المفرط، إزالة غابات الأركان، والتلوث البلاستيكي كيهددو النظام البيئي الهش ديال المنطقة."
  }
};

/* ========================================
   LANGUAGE SWITCHER
   ======================================== */
let currentLang = 'fr';

function initLanguageSwitcher() {
  const btnFr = document.getElementById('langFr');
  const btnEn = document.getElementById('langEn');
  const btnAr = document.getElementById('langAr');

  if (btnFr) btnFr.addEventListener('click', () => setLanguage('fr'));
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
  if (btnAr) btnAr.addEventListener('click', () => setLanguage('ar'));

  // Check localStorage for saved preference
  const saved = localStorage.getItem('ecosouira_lang');
  if (saved && translations[saved]) {
    setLanguage(saved);
  }
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('ecosouira_lang', lang);

  const dict = translations[lang];
  const html = document.documentElement;

  // Set lang attribute and direction
  html.setAttribute('lang', lang === 'ar' ? 'ar' : lang === 'en' ? 'en' : 'fr');
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.body.classList.toggle('rtl', lang === 'ar');

  // Update page title
  if (lang === 'ar') {
    document.title = 'إيكوصويرة — السياحة البيئية للصويرة';
  } else if (lang === 'en') {
    document.title = 'EcoSouira — Ecotourism for Essaouira';
  } else {
    document.title = "EcoSouira — L'écotourisme pour Essaouira";
  }

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update all [data-i18n-placeholder] elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(
    lang === 'ar' ? 'langAr' : lang === 'en' ? 'langEn' : 'langFr'
  );
  if (activeBtn) activeBtn.classList.add('active');
}

/* ---------- Video Player ---------- */
function initVideoPlayer() {
  const video = document.getElementById('ecoVideo');
  const overlay = document.getElementById('videoOverlay');
  const playBtn = document.getElementById('videoPlayBtn');

  if (!video || !overlay) return;

  // Click overlay to play
  overlay.addEventListener('click', () => {
    video.play();
    overlay.classList.add('hidden');
  });

  // Click video to pause/play
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      overlay.classList.add('hidden');
    } else {
      video.pause();
      overlay.classList.remove('hidden');
    }
  });

  // Show overlay when video ends
  video.addEventListener('ended', () => {
    overlay.classList.remove('hidden');
  });
}

/* ---------- Navbar scroll effect ---------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ---------- Mobile menu ---------- */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  // Close on link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('active');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!links.contains(e.target) && !toggle.contains(e.target)) {
      links.classList.remove('open');
      toggle.classList.remove('active');
    }
  });
}

/* ---------- Scroll-triggered animations ---------- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ---------- Count-up animation ---------- */
function initCountUp() {
  const counters = document.querySelectorAll('[data-count]');
  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          counters.forEach((counter) => {
            const target = parseInt(counter.dataset.count);
            const duration = 2000;
            const start = performance.now();

            function update(now) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              counter.textContent = Math.round(target * eased);

              if (progress < 1) {
                requestAnimationFrame(update);
              }
            }

            requestAnimationFrame(update);
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) observer.observe(statsSection);
}

/* ---------- Smooth scroll ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ---------- Flashcards ---------- */
function initFlashcards() {
  const toggle = (card) => {
    card.classList.toggle('flipped');
    card.setAttribute('aria-expanded', card.classList.contains('flipped') ? 'true' : 'false');
  };

  document.querySelectorAll('.flashcard').forEach(card => {
    // Accessibility: behave like a button + expose expanded state
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', card.classList.contains('flipped') ? 'true' : 'false');

    card.addEventListener('click', () => toggle(card));

    card.addEventListener('keydown', (e) => {
      // Activate on keyboard like a native button
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle(card);
      }
    });
  });
}

/* ---------- Form submission ---------- */
function handleSubmit(e) {
  e.preventDefault();

  const btn = document.getElementById('submitBtn');
  const originalHTML = btn.innerHTML;
  const dict = translations[currentLang] || translations.fr;

  // Loading state
  btn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
      <path d="M21 12a9 9 0 11-6.219-8.56"/>
    </svg>
    ${dict.form_sending}
  `;
  btn.disabled = true;
  btn.style.opacity = '0.7';

  // Simulate submission
  setTimeout(() => {
    btn.innerHTML = originalHTML;
    btn.disabled = false;
    btn.style.opacity = '1';

    // Show success modal
    document.getElementById('successModal').classList.add('active');

    // Reset form
    document.getElementById('joinForm').reset();
  }, 1500);

  return false;
}

function closeModal() {
  document.getElementById('successModal').classList.remove('active');
}

// Close modal on overlay click
document.getElementById('successModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Add spin animation for loading
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  .spin {
    animation: spin 1s linear infinite;
  }
`;
document.head.appendChild(style);
