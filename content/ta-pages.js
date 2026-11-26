// The five sections follow the page ranges supplied by Ta Academy.
const taPages = (() => {
  const words = (zh, en, ja, ko, fr) => ({zh, en, ja, ko, fr});
  const sections = {
    intro: {label: words('基本介绍', 'Introduction', '基本紹介', '기본 소개', 'Présentation')},
    learning: {label: words('教学', 'Teaching', '授業', '교육', 'Enseignement'), cover: 'linxi-study-group'},
    events: {label: words('活动', 'Activities', '活動', '활동', 'Activités'), cover: 'rsaf01'},
    exhibitions: {label: words('展览', 'Exhibitions', '展覧会', '전시', 'Expositions'), cover: 'cenacle'},
    chengdu: {label: words('和成都本地机构的合作', 'Collaborations in Chengdu', '成都の団体との協働', '청두 지역 기관과의 협업', 'Collaborations avec les structures de Chengdu'), cover: 'collaborations'}
  };
  const activitiesTitle = words('关于塔院的活动', 'About our activities', '塔院の活動について', '타아카데미의 활동', 'Les activités de Ta Academy');
  const exhibitionTitle = words('关于展览', 'About our exhibitions', '展覧会について', '전시에 관하여', 'À propos des expositions');
  const exhibitionList = words('院内展览一览', 'Exhibitions at Ta Academy', '塔院での展覧会一覧', '타아카데미 전시 목록', 'Liste des expositions à Ta Academy');
  const exhibitionPhotos = words('部分展览现场照片', 'Photographs from selected exhibitions', '展覧会の会場写真より', '전시 현장 사진 일부', 'Photographies de quelques expositions');
  const contact = words('更多讯息可以查看塔院的同名微信公众号', 'For more information, see our WeChat official account, 塔院.', '詳しくは同名のWeChat公式アカウント「塔院」をご覧ください。', '더 자세한 소식은 같은 이름의 위챗 공식 계정 ‘塔院’에서 확인할 수 있습니다.', 'Pour plus d’informations, consultez notre compte officiel WeChat, 塔院.');
  const pagePhotos = {
    3: ['course-contemporary-art','course-curating','course-painting'],
    4: ['linxi-study-group','linxi-study-projection'],
    5: ['suzhou-workshop','suzhou-class'],
    7: ['upon-performance'],
    8: ['alex-conway','mina-luosu','black-market-international'],
    10: ['seven-days-seven-minutes','seven-by-seven-poster']
  };
  const exhibitionViews = [
    'show-12-1','show-12-2','show-12-3','show-12-4','gallery-projection','show-13-2',
    'show-14-1','show-14-2','gallery-installation','show-15-2','show-15-3','show-15-4',
    'show-16','show-17'
  ];

  function render(entry, section = 'intro', {html, tx, local, crumb, orgUrl}) {
    const root = orgUrl(entry);
    const org = local(entry.name);
    const link = key => key === 'intro' ? root : root + '/' + key;
    const text = value => html(local(value));
    const nav = () => `<nav class="ta-section-nav" aria-label="${html(tx('nav'))}">${Object.entries(sections).map(([key, item]) =>
      `<a href="${link(key)}"${key === section ? ' aria-current="page"' : ''}>${text(item.label)}</a>`).join('')}</nav>`;
    function picture(key, eager = false) {
      const photo = taPhotos[key] || taIllustrations[key];
      const caption = text(photo.caption);
      return `<figure class="ta-photo"><img src="assets/ta-academy/${key}.webp" width="${photo.width}" height="${photo.height}" alt="${text(photo.alt || photo.caption)}"${eager ? '' : ' loading="lazy"'} decoding="async">${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
    }
    function paragraphs(value) {
      return local(value).split(/\n\s*\n/).filter(Boolean).map(p => `<p class="body-copy">${html(p)}</p>`).join('');
    }
    function introduction() {
      const [origins, work, motto, study, funding] = taIntroduction.paragraphs;
      const cards = Object.entries(sections).filter(([,item]) => item.cover).map(([key,item]) => {
        const image = taPhotos[item.cover];
        return `<a class="ta-card" href="${link(key)}"><div class="ta-card-image"><img src="assets/ta-academy/${item.cover}.webp" width="${image.width}" height="${image.height}" alt="" loading="lazy"></div><h3>${text(item.label)}</h3></a>`;
      }).join('');
      return `<section class="profile-head"><div><p class="lead">${text(origins)}</p>${paragraphs(work)}
        <p class="body-copy ta-motto">${text(motto)}</p><p class="ta-count">${text(taIntroduction.stats)}</p></div>
        <figure class="profile-logo"><img src="assets/${html(entry.thumb)}" alt="${html(org)}" width="1910" height="786"></figure></section>
        <div class="ta-gallery">${picture('intro-gathering')}${picture('academy-courtyard')}</div>
        <div class="ta-entry illustrated"><div>${paragraphs(study)}${paragraphs(funding)}</div>${picture('amo-teaching')}</div>
        <div class="ta-grid">${cards}</div>`;
    }
    function programme(data) {
      return `${data.intro ? `<p class="lead ta-intro">${text(data.intro)}</p>` : ''}<div class="ta-series">${data.sections.map(record => {
        const photos = record.page === 9 ? [record.id === 'rsaf' ? 'rsaf01' : 'golden-dragon-cup'] : (pagePhotos[record.page] || []);
        const heading = record.title ? `<h2>${text(record.title)}</h2>` : '';
        const copy = record.text ? paragraphs(record.text) : '';
        const figures = photos.map(key => picture(key)).join('');
        if (record.page === 3 || (record.page === 8 && !copy)) {
          return `<section class="ta-entry">${heading}<div class="ta-plates">${figures}</div>${copy}</section>`;
        }
        const prose = `<div>${heading}${copy}</div>`;
        const media = photos.length ? `<div class="ta-entry-photos">${figures}</div>` : '';
        return `<section class="ta-entry${photos.length ? ' illustrated' : ''}">${record.page === 4 ? media + prose : prose + media}</section>`;
      }).join('')}</div>`;
    }
    function exhibitions() {
      return `<div class="ta-exhibition-head"><div>${paragraphs(taExhibitions.intro)}</div>${picture('cenacle',true)}</div>
        <section class="records"><h2 class="subhead">${text(exhibitionPhotos)}</h2><div class="ta-gallery">${exhibitionViews.map(key => picture(key)).join('')}</div></section>
        <section class="records"><h2 class="subhead">${text(exhibitionList)}</h2><ol class="ta-shows">${taExhibitions.entries.map(show =>
          `<li><span class="ta-date">${html(show.date)}</span><h3>${text(show.title)}</h3><span>${text(show.credit)}</span></li>`).join('')}</ol></section>`;
    }
    function collaborations() {
      return `<ol class="ta-partners">${taChengdu.entries.map(item =>
        `<li><span class="ta-date">${html(item.date)}</span><div><h2>${text(item.title)}</h2>${item.photo ? picture(item.photo,true) : ''}</div></li>`).join('')}</ol>
        <div class="ta-partner-photo">${picture('chengdu-outdoors')}</div><p class="ta-contact">${text(contact)}</p>`;
    }
    const pageTitles = {intro: entry.name, learning: sections.learning.label, events: activitiesTitle, exhibitions: exhibitionTitle, chengdu: taChengdu.title};
    const bodies = {intro: introduction, learning: () => programme(taLearning), events: () => programme(taEvents), exhibitions, chengdu: collaborations};
    const title = local(pageTitles[section]);
    const trail = [[tx('index'),'#/participants']];
    if (section !== 'intro') trail.push([org,root]);
    trail.push([title]);
    return {title, markup:`<article class="subpage frame ta-chapter${section === 'intro' ? ' ta-profile' : ''}">
      ${crumb(trail)}<h1 class="page-title">${html(title)}</h1>${nav()}${bodies[section]()}${nav()}</article>`};
  }
  return {render};
})();
