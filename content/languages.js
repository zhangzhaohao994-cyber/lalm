// Display copy follows the source order EN, ZH, JA, KO, FR. LALM is a proper name in every language.
const languages = ['en', 'zh', 'ja', 'ko', 'fr'];
const translations = {
  about: ['About', '关于', '概要', '소개', 'À propos'],
  participants: ['Participants', '参与机构', '参加団体', '참여 단체', 'Participants'],
  index: ['Participant index', '参会机构索引', '参加団体一覧', '참여 단체 목록', 'Répertoire des participants'],
  motto: ['Turning local experience into shared knowledge.', '让地域经验成为共生智识。', '各地の経験を、共に育む知へ。', '각 지역의 경험을 함께 나누는 지식으로.', 'Faire des expériences locales un savoir partagé.'],
  intro: ['An artist-run network connecting live art spaces, collectives and projects across borders.', '一个由艺术家自主组织的现场艺术网络，连接各地的空间、团体与项目。', 'アーティストが運営し、国や地域を越えてライブアートのスペース、団体、プロジェクトを結ぶネットワーク。', '예술가들이 직접 운영하며 여러 지역의 라이브 아트 공간과 단체, 프로젝트를 잇는 네트워크입니다.', 'Un réseau animé par des artistes, qui relie des lieux, des collectifs et des projets d’art vivant par-delà les frontières.'],
  edition: ['We Know · Hangzhou, 2026', '我们知道 · 杭州，2026', 'We Know · 杭州、2026年', 'We Know · 항저우, 2026', 'We Know · Hangzhou, 2026'],
  indexNote: ['In the pinyin order of the exhibition poster.', '依展览海报的中文拼音顺序排列。', '展覧会ポスターと同じ中国語のピンイン順。', '전시 포스터와 같은 중국어 병음 순서입니다.', 'Selon l’ordre du pinyin de l’affiche d’exposition.'],
  all: ['All', '全部', 'すべて', '전체', 'Tous'],
  initials: ['Filter by pinyin initial', '按拼音首字母筛选', 'ピンインの頭文字で絞り込む', '병음 첫 글자로 필터링', 'Filtrer par initiale du pinyin'],
  profile: ['Participant', '参会空间／项目', '参加団体・プロジェクト', '참여 공간·프로젝트', 'Participant'],
  representative: ['Represented in Hangzhou by', '杭州活动参会者', '杭州での参加者', '항저우 행사 참여자', 'À Hangzhou avec'],
  more: ['Projects & activities', '项目与活动', 'プロジェクトと活動', '프로젝트 및 활동', 'Projets et activités'],
  event: ['Event', '活动', 'イベント', '행사', 'Événement'],
  project: ['Project', '项目', 'プロジェクト', '프로젝트', 'Projet'],
  publication: ['Publication', '出版物', '出版物', '출판물', 'Publication'],
  video: ['Video', '影像', '映像', '영상', 'Vidéo'],
  archive: ['Archive', '档案', 'アーカイブ', '아카이브', 'Archives'],
  programme: ['Programme', '活动安排', 'プログラム', '프로그램', 'Programme'],
  aboutTitle: ['About LALM', '关于 LALM', 'LALM について', 'LALM 소개', 'À propos de LALM'],
  founding: ['Artist Lyu Desheng initiated Live Art Live Meet in 2025. Artists and art workers organise the network together, sharing how live art takes shape in different places.', '吕德生于 2025 年发起 LALM（Live Art Live Meet）。艺术家和艺术工作者共同组织这个网络，交流现场艺术如何在各自的地方发生。', '2025年、アーティストのリュイ・ドーション（吕德生）が Live Art Live Meet を呼びかけました。アーティストとアートワーカーが自主的に運営し、各地でライブアートが生まれる過程を共有しています。', '2025년 예술가 뤼더성(吕德生)이 Live Art Live Meet를 제안했습니다. 예술가와 예술 현장의 동료들이 함께 운영하며 각 지역에서 라이브 아트가 이루어지는 과정을 나눕니다.', 'L’artiste Lyu Desheng a lancé Live Art Live Meet en 2025. Artistes et professionnels de l’art animent ensemble ce réseau et y partagent la manière dont l’art vivant prend forme dans leurs régions.'],
  concept: ["Organizers start with the questions they face at home, sharing experience and resources across regions. LALM works without a central authority so that live art practitioners in different cultures can stay in conversation.", "各地的组织从工作中遇到的具体问题谈起，交换经验与资源。LALM 以去中心化的方式协作，为不同文化中的现场艺术实践留出持续对话的空间。", "各地の主催者は、日々の活動で直面する問いを持ち寄り、経験や資源を分かち合います。特定の中心を置かず、文化を越えて対話を続けられる場をつくっています。", "각 지역의 기획자들은 현장에서 마주하는 문제를 꺼내고 경험과 자원을 나눕니다. LALM은 하나의 중심을 두지 않고 서로 다른 문화권의 라이브 아트 실천가들이 대화를 이어갈 자리를 만듭니다.", "Les organisateurs partagent les questions qu’ils rencontrent sur le terrain, leurs expériences et leurs ressources. Sans autorité centrale, LALM entretient un dialogue entre des pratiques issues de cultures différentes."],
  meetings: ['Meetings', '现场聚会', '集まり', '모임', 'Rencontres'],
  weKnow: ['We Know', '我们知道', 'We Know（私たちは知っている）', 'We Know (우리는 알고 있다)', 'We Know (Nous savons)'],
  when: ['19–21 November 2026', '2026 年 11 月 19–21 日', '2026年11月19日〜21日', '2026년 11월 19–21일', '19–21 novembre 2026'],
  venue: ['Shang Art Museum, Hangzhou', '杭州 · 丄美术馆', '杭州・丄美術館', '항저우 · 丄미술관', 'Shang Art Museum, Hangzhou'],
  eventBody: ['The Hangzhou exhibition brought together posters, images and other material from live art initiatives. Its programme paired an exhibition tour with “We Don’t Know”, an open session for participating artists to shape together.', '杭州的这次展览汇集了各地现场艺术活动的海报、影像与文献。特别活动包括展览导览，以及由参会艺术家共同构想的「我们不知道」开放现场。', '杭州での展覧会には各地のライブアート活動のポスター、映像、資料が集まりました。特別プログラムには展示ツアーと、参加アーティストが共に考えるオープンセッション「We Don’t Know」が組まれました。', '항저우 전시는 각지 라이브 아트 활동의 포스터와 영상, 자료를 한자리에 모았습니다. 전시 해설과 함께 참여 예술가들이 공동으로 구상하는 열린 현장 ‘We Don’t Know’가 기획되었습니다.', 'À Hangzhou, l’exposition réunissait affiches, images et documents issus de différentes initiatives d’art vivant. Le programme associait une visite guidée à « We Don’t Know », une session ouverte conçue en commun par les artistes participants.'],
  organiser: ['Organised by CementPark, with Shang Art Museum and Fu Art Coliving as co-organisers.', '水泥公园主办，丄美术馆、孵创作者社区协办。', '主催は CementPark、共催は丄美術館と Fu Art Coliving。', '시멘트파크가 주최하고 丄미술관과 Fu Art Coliving이 공동 주관했습니다.', 'Une rencontre organisée par CementPark, avec le Shang Art Museum et Fu Art Coliving comme coorganisateurs.'],
  tour: ['Exhibition tour', '展览导览', '展示ツアー', '전시 해설', 'Visite guidée'],
  openSession: ['We Don’t Know · Open session', '我们不知道 · 开放现场', 'We Don’t Know · オープンセッション', 'We Don’t Know · 열린 현장', 'We Don’t Know · Session ouverte'],
  saturday: ['21 November', '11 月 21 日', '11月21日', '11월 21일', '21 novembre'],
  poster: ['Exhibition poster', '展览海报', '展覧会ポスター', '전시 포스터', 'Affiche de l’exposition'],
  visit: ['Open resource', '查看原资料', '資料を見る', '자료 보기', 'Consulter la ressource'],
  home: ['Home', '首页', 'ホーム', '홈', 'Accueil'],
  night: ['Switch to dark mode', '切换为深色模式', 'ダークモードに切り替える', '다크 모드로 전환', 'Passer en mode sombre'],
  day: ['Switch to light mode', '切换为浅色模式', 'ライトモードに切り替える', '라이트 모드로 전환', 'Passer en mode clair'],
  auto: ['Use automatic day/night mode', '恢复自动日夜模式', '昼夜の自動切替に戻す', '자동 주야간 모드 사용', 'Rétablir le mode jour/nuit automatique'],
  nav: ['Navigation', '导航', 'ナビゲーション', '탐색', 'Navigation'],
  lang: ['Language', '语言', '言語', '언어', 'Langue'],
  skip: ['Skip to content', '跳到正文', '本文へ移動', '본문으로 이동', 'Aller au contenu'],
  notFound: ['Page not found', '找不到此页面', 'ページが見つかりません', '페이지를 찾을 수 없습니다', 'Page introuvable']
};
Object.assign(translations, {
  submitted: ['Full introduction', '完整来稿', '紹介文の原文', '소개글 원문', 'Présentation intégrale'],
  sourceLabel: ['Exhibition archive by Highest', '最高的展览档案', '最高の展覧会アーカイブ', 'Highest의 전시 아카이브', 'Archives de l’exposition par Highest'],
  workspace: ['LALM workspace', 'LALM 工作站', 'LALM ワークスペース', 'LALM 워크스페이스', 'Espace de travail LALM'],
  projection: ['Alkali’s LALM presentation', '强碱的 LALM 现场放映', 'LALM での Alkali の発表', 'LALM에서의 알칼리 발표', 'Présentation d’Alkali pour LALM'],
  talk: ['Presentation', '发言', '発表', '발표', 'Intervention'],
  image: ['Image', '图片', '画像', '이미지', 'Image']
});
Object.assign(translations, {
  document: ['Open document', '打开文档', '資料を開く', '문서 열기', 'Ouvrir le document'],
  aboutSource: ['Read LALM’s introduction', '阅读 LALM 的组织介绍', 'LALM の紹介文を読む', 'LALM의 소개글 읽기', 'Lire la présentation de LALM']
});
Object.assign(translations, {
  gravityIntro: ['About the collective', '机构介绍', '団体紹介', '단체 소개', 'Présentation du collectif'],
  gravityPeople: ['People', '人物', '人物', '인물', 'Personnes'],
  gravityTimeline: ['Festival timeline', '活动年表', '活動年表', '활동 연보', 'Chronologie du festival'],
  gravityBackground: ['On the change of name', '关于更名', '改称について', '명칭 변경', 'Le changement de nom'],
  gravityReview: ['Festival report', '活动回顾', '開催記録', '행사 기록', 'Compte rendu'],
  gravityOriginal: ['Read the original on WeChat', '阅读微信原文', 'WeChat で原文を読む', '위챗에서 원문 읽기', 'Lire l’article original sur WeChat'],
  gravityVideo: ['Watch on WeChat', '在微信原文中观看', 'WeChat の原文で映像を見る', '위챗 원문에서 영상 보기', 'Voir la vidéo sur WeChat'],
  gravityLoading: ['Loading the archive…', '正在载入档案…', 'アーカイブを読み込み中…', '아카이브를 불러오는 중…', 'Chargement des archives…'],
  gravityLoadFailed: ['The archive could not be loaded.', '档案暂时无法载入。', 'アーカイブを読み込めませんでした。', '아카이브를 불러오지 못했습니다.', 'Impossible de charger les archives.'],
  gravityRetry: ['Try again', '重试', '再読み込み', '다시 시도', 'Réessayer'],
  gravityBack: ['Back to the collective', '返回机构档案', '団体のアーカイブに戻る', '단체 아카이브로 돌아가기', 'Retour aux archives du collectif'],
  gravityImage: ['Article image', '原文图片', '記事の画像', '원문 이미지', 'Illustration de l’article'],
  gravityPublished: ['Published', '刊发日期', '公開日', '발행일', 'Publication']
});
translations.gravityContents = ['Contents', '文章目录', '目次', '목차', 'Sommaire'];
translations.gravityTranscript = ['Text in this image', '图片中的文字', '画像内のテキスト', '이미지 속 글', 'Texte de l’image'];
translations.gravityListen = ['Listen on WeChat', '在微信原文中收听', 'WeChat の原文で聴く', '위챗 원문에서 듣기', 'Écouter sur WeChat'];
translations.gravityMediaInfo = ['Media details', '媒体说明', 'メディアの詳細', '미디어 정보', 'Informations sur le média'];
translations.gravitySubmitted = ['View the collective’s Chinese and English original', '查看机构提供的中英原稿', '団体提供の中国語・英語原稿を見る', '단체가 제공한 중·영문 원고 보기', 'Voir le document chinois et anglais fourni par le collectif'];
