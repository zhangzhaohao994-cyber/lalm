// Page copy and layouts for the Ta Academy participant archive.
const taPages = (() => {
  const words = (en, zh, ja, ko, fr) => ({ en, zh, ja, ko, fr });
  const sections = {
    amo: {
      title: words('Amo', '阿莫', '阿莫（アモ）', '아모', 'Amo'),
      label: words('Amo · Profile', '阿莫 · 个人介绍', '阿莫のプロフィール', '아모 소개', 'Portrait d’Amo'),
      cover: 'amo-teaching'
    },
    learning: {
      title: words('Learning together', '课程与共学', '講座と学び合い', '수업과 공동 학습', 'Cours et études en groupe'),
      cover: 'linxi-study-group'
    },
    events: {
      title: words('Events & collaborations', '活动与合作', '活動とコラボレーション', '행사와 협업', 'Événements et collaborations'),
      cover: 'rsaf01'
    },
    exhibitions: {
      title: words('Exhibitions', '院内展览', '塔院での展覧会', '공간에서 열린 전시', 'Expositions à Ta Academy'),
      cover: 'cenacle'
    }
  };
  const count = words(
    'As of 26 November 2026, Ta Academy has held 146 events and 18 exhibitions.',
    '截至目前（*2026/11/26），塔院已经举办了146场活动，18场展览。',
    '2026年11月26日時点で、塔院は146件のイベントと18件の展覧会を開催した。',
    '2026년 11월 26일 기준, 타아카데미는 행사 146회와 전시 18회를 열었다.',
    'Au 26 novembre 2026, Ta Academy a organisé 146 événements et 18 expositions.'
  );
  const contact = words(
    'To arrange a class or follow new events, search WeChat Official Accounts for “塔院”.',
    '约课和近期活动消息，可在微信公众账号中搜索「塔院」。',
    '授業の相談や最新の催しについては、WeChatの公式アカウントで「塔院」を検索してください。',
    '수업 문의와 새 행사 소식은 위챗 공식 계정에서 ‘塔院’을 검색해 확인할 수 있다.',
    'Pour convenir d’un cours ou suivre les prochains événements, recherchez « 塔院 » parmi les comptes officiels WeChat.'
  );
  const fullIntro = words('Full introduction', '完整来稿', '塔院からの紹介文', '타아카데미의 소개글', 'Présentation intégrale');
  const inPrint = words('Exhibition programme', '展览记录', '展覧会の記録', '전시 기록', 'Programme des expositions');
  const photoHeading = words('Installation views', '展览现场', '展示風景', '전시 전경', 'Vues d’exposition');
  const founder = words(
    'Amo started Ta Academy with Cheng Yiren and Zhu Hongyu in late 2022. Ta Academy opened a space in Chengdu in July 2023. Amo now runs the space and coordinates its programme.',
    '2022年末，阿莫与程一人、朱宏宇共同发起塔院。2023年7月，塔院的实体空间在成都落地。现在由阿莫负责塔院的日常经营和项目推进。',
    '阿莫は2022年末、程一人、朱宏宇とともに塔院を立ち上げた。2023年7月には成都に活動拠点を開いた。現在は阿莫が日々の運営と企画の進行を担う。',
    '아모는 2022년 말 청이런, 주훙위와 함께 타아카데미를 시작했다. 2023년 7월 청두에 공간을 열었고, 지금은 아모가 일상 운영과 프로그램 진행을 맡고 있다.',
    'Amo a fondé Ta Academy avec Cheng Yiren et Zhu Hongyu à la fin de 2022. Le lieu a ouvert à Chengdu en juillet 2023. Amo en assure aujourd’hui le fonctionnement au quotidien et coordonne les projets.'
  );
  const bioPractice = words(
    'Amo teaches three introductory courses at the space. One photograph from 2023 shows a lesson on how to compose a picture. In 2025, Amo and Luo Su invited people to make a seven-minute film in seven days and come together to watch the results.',
    '阿莫在塔院负责三门常驻的入门课。2023年留下的一张课堂照片里，阿莫正在给学员讲画面构图。2025年，阿莫与罗素在塔院发起「7天7分钟」，邀请大家用七天完成一部七分钟的影像，再聚在一起放映。',
    '塔院で三つの入門講座を担当している。2023年の授業写真には、受講者に画面の構図を説明する姿が残っている。2025年には羅素と「7日間・7分間」を始めた。参加者が一週間で7分の映像を完成させ、集まって上映する企画だ。',
    '아모는 타아카데미의 입문 강좌 세 가지를 맡고 있다. 2023년 수업 사진에는 수강생에게 화면 구도를 설명하는 모습이 담겼다. 2025년에는 뤄쑤와 함께 ‘7일 7분’을 시작했다. 참가자들은 일주일 동안 7분짜리 영상을 완성하고 한자리에 모여 작품을 봤다.',
    'Amo anime trois cours d’initiation au sein du lieu. Une photographie prise en 2023 montre un cours sur la composition d’une image. En 2025, Amo et Luo Su ont lancé un projet invitant chacun à réaliser un film de sept minutes en sept jours, puis à se retrouver pour la projection.'
  );
  const sharedWork = words(
    'Members help pay for the space and their living costs by selling their own work or taking other jobs. Friends also bring their own teaching projects to Ta Academy.',
    '成员们靠出售自己的作品或做其他工作，负担空间运营和生活开支。朋友们也会把自己的教学项目带到塔院。',
    'メンバーは自作の販売やほかの仕事で、場所の運営費と生活費をまかなっている。仲間が自分の授業の企画を持ち込むこともある。',
    '구성원들은 자신의 작품을 팔거나 다른 일을 하며 공간 운영비와 생활비를 마련한다. 친구들이 직접 수업을 기획해 타아카데미에서 열기도 한다.',
    'Les membres financent le lieu et leur vie quotidienne par la vente de leurs œuvres ou par d’autres emplois. Des amis y proposent aussi leurs propres projets d’enseignement.'
  );
  const seriesPhotos = {
    linxi: ['linxi-study-group'],
    upon: ['black-market-international'],
    'street-and-studio': ['mina-luosu', 'alex-conway'],
    rsaf: ['rsaf01'],
    'golden-dragon': ['golden-dragon-cup'],
    'seven-by-seven': ['seven-days-seven-minutes'],
    chengdu: ['collaborations']
  };

  function render(entry, section, { lang, html, tx, local, crumb, row, orgUrl }) {
    const root = orgUrl(entry);
    const orgName = local(entry.name);
    const text = value => html(local(value));
    const title = key => text(sections[key].label || sections[key].title);
    const link = key => root + '/' + key;
    const photoSrc = key => 'assets/ta-academy/' + key + '.webp';
    const picture = (key, lazy = true) => {
      const image = taPhotos[key];
      return `<figure class="ta-photo"><img src="${photoSrc(key)}" width="${image.width}" height="${image.height}" alt="${text(image.caption)}" ${lazy ? 'loading="lazy"' : ''} decoding="async"><figcaption>${text(image.caption)}</figcaption></figure>`;
    };
    const nav = () => `<nav class="ta-section-nav" aria-label="${html(tx('nav'))}">
      <a href="${root}">${html(orgName)}</a>
      ${Object.keys(sections).map(key => `<a href="${link(key)}" ${key === section ? 'aria-current="page"' : ''}>${title(key)}</a>`).join('')}
    </nav>`;
    const meetings = () => `<section class="records"><h2 class="subhead">${html(tx('meetings'))}</h2><div class="record-list">
      ${entry.items.map(item => row(link(item.id), tx(item.type), local(item.title), item.date)).join('')}
      ${row('#/meetings/we-know',tx('event'),tx('weKnow'),'2026')}
    </div></section>`;
    const indexCrumb = [tx('index'), '#/participants'];
    if (!section) {
      const cards = Object.entries(sections).map(([key, info]) => {
        const image = taPhotos[info.cover];
        return `<a class="ta-card" href="${link(key)}"><div class="ta-card-image"><img src="${photoSrc(info.cover)}" width="${image.width}" height="${image.height}" alt="" loading="lazy" decoding="async"></div><h3>${title(key)}</h3></a>`;
      }).join('');
      return {title:orgName, markup:`<article class="subpage frame ta-profile">${crumb([indexCrumb, [orgName]])}
        <div class="profile-head"><div><p class="context">${html(tx('profile'))} · ${text(entry.location)}</p>
          <h1 class="page-title">${html(orgName)}</h1><p class="lead">${text(entry.summary)}</p>
          <p class="ta-count">${text(count)}</p>
          <div class="profile-meta"><span class="meta-label">${html(tx('representative'))}</span><a href="${link('amo')}">${text(entry.attendee)}</a></div>
        </div><figure class="profile-logo"><img src="assets/${html(entry.thumb)}" width="640" height="420" alt="${html(orgName)}"></figure></div>
        <details class="original"><summary>${text(fullIntro)}</summary><div>${entry.original[lang].map(p => `<p class="body-copy">${html(p)}</p>`).join('')}</div></details>
        <section class="records"><h2 class="subhead">${html(tx('more'))}</h2><div class="ta-grid">${cards}</div></section>
        ${meetings()}</article>`};
    }
    const info = sections[section];
    const pageTitle = local(info.title);
    const header = `${crumb([indexCrumb, [orgName, root], [local(info.label || info.title)]])}<h1 class="page-title">${html(pageTitle)}</h1>`;
    let body;
    if (section === 'amo') {
      body = `<div class="ta-bio"><div><p class="lead">${text(founder)}</p><p class="body-copy">${text(bioPractice)}</p><p class="body-copy">${text(sharedWork)}</p></div>${picture('amo-teaching',false)}</div>
        <div class="ta-wide-photo">${picture('academy-courtyard')}</div>`;
    } else if (section === 'exhibitions') {
      body = `<div class="ta-exhibition-head"><p class="lead">${text(taExhibitions.intro)}</p>${picture('cenacle',false)}</div>
        <section class="records"><h2 class="subhead">${text(inPrint)}</h2><ol class="ta-shows">
          ${taExhibitions.entries.map(show => `<li><span class="ta-date">${html(show.date)}</span><h3>${text(show.title)}</h3><span>${text(show.credit)}</span></li>`).join('')}
        </ol></section>
        <section class="records"><h2 class="subhead">${text(photoHeading)}</h2><div class="ta-gallery">${picture('gallery-projection')}${picture('gallery-installation')}</div></section>`;
    } else {
      const data = section === 'learning' ? taLearning : taEvents;
      body = `<p class="lead ta-intro">${text(data.intro)}</p>
        <div class="ta-series">${data.sections.map(record => {
          const photos = seriesPhotos[record.id] || [];
          return `<section class="ta-entry${photos.length ? ' illustrated' : ''}"><div>
            ${record.date ? `<p class="ta-date">${html(record.date)}</p>` : ''}
            <h2>${text(record.title)}</h2><p class="body-copy">${text(record.text)}</p>
          </div>${photos.length ? `<div class="ta-entry-photos">${photos.map(key => picture(key)).join('')}</div>` : ''}</section>`;
        }).join('')}</div>`;
    }
    return {title:pageTitle, markup:`<article class="subpage frame ta-chapter">${header}${nav()}${body}${section === 'learning' ? `<p class="ta-contact">${text(contact)}</p>` : ''}${section === 'amo' ? meetings() : ''}${nav()}</article>`};
  }
  return { render };
})();
