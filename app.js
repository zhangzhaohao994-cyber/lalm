(() => {
  'use strict';
  const main = document.querySelector('main');
  const homeHeading = main.querySelector('.hero-title').outerHTML;
  const theme = document.getElementById('theme');
  let lang = document.getElementById('language').dataset.value;
  let filter = '';
  let currentPage = '';
  const currentPath = () => (location.hash.startsWith('#/') ? location.hash.slice(2).split('?')[0] : '').split('/').filter(Boolean);
  const html = value => String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const tx = key => translations[key]?.[languages.indexOf(lang)] || translations[key]?.[0] || '';
  const local = value => typeof value === 'string' ? value : (value?.[lang] || value?.en || '');
  const name = entry => local(entry.name);
  const orgUrl = entry => '#/participants/' + entry.id;
  const itemUrl = (entry, item) => orgUrl(entry) + '/' + item.id;
  const extLink = (url, label) => /^https?:\/\//.test(url || '') ? `<a class="text-link" href="${html(url)}" target="_blank" rel="noopener noreferrer">${html(label)}</a>` : '';
  const crumb = links => `<nav class="crumb" aria-label="${html(tx('nav'))}">${links.map(([label,href])=>href?`<a href="${html(href)}">${html(label)}</a>`:`<span aria-current="page">${html(label)}</span>`).join('<span class="slash" aria-hidden="true">/</span>')}</nav>`;
  const photo = src => `<figure class="photo"><img src="assets/${html(src.path)}" alt="${html(local(src.caption))}" loading="lazy"><figcaption>${html(local(src.caption))}</figcaption></figure>`;
  function row(url, type, title, date = '') {
    return `<a class="record-row" href="${html(url)}"><span class="small">${html(type)}</span><strong>${html(title)}</strong><span class="small">${html(date)}</span></a>`;
  }
  function header() {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang;
    document.getElementById('nav').setAttribute('aria-label',tx('nav'));
    const section = currentPath()[0] || 'home';
    document.getElementById('nav').innerHTML = [['about','about'],['participants','participants']].map(([href,key])=>`<a href="#/${href}" ${section===href?'aria-current="page"':''}>${html(tx(key))}</a>`).join('');
    document.querySelector('.skip').textContent = tx('skip');
    appearanceLabels();
  }
  function appearanceLabels() {
    const next = tx(document.documentElement.dataset.theme === 'dark' ? 'day' : 'night');
    theme.setAttribute('aria-label', next);
    theme.title = next;
    const footer = document.getElementById('footer');
    footer.className = 'footer';
    footer.innerHTML = `<div class="frame footer-inner"><a href="#/">LALM · Live Art Live Meet</a><div class="footer-links"><a href="https://www.lalm.site/" target="_blank" rel="noopener noreferrer">${html(tx('workspace'))}</a>${appearance.setting()?`<button type="button" data-auto>${html(tx('auto'))}</button>`:''}</div></div>`;
  }
  function cards() {
    const subset = participants.filter(entry => !filter || entry.letter === filter);
    return subset.map(entry => `<a class="org-card" href="${orgUrl(entry)}"><div class="card-image"><img src="assets/${html(entry.thumb)}" alt="" loading="lazy" width="640" height="420"></div><div class="card-info"><h3>${html(name(entry))}</h3>${local(entry.location) ? `<span class="small">${html(local(entry.location))}</span>` : ''}</div></a>`).join('');
  }
  function filters() {
    const letters = ['', ...new Set(participants.map(entry => entry.letter))];
    return letters.map(letter=>`<button type="button" data-letter="${letter}" aria-pressed="${filter === letter}">${letter || html(tx('all'))}</button>`).join('');
  }
  function landing() {
    return `<section class="hero"><div class="hero-center">${homeHeading}<p class="motto">${html(tx('motto'))}</p><p class="intro">${html(tx('intro'))}</p></div><a href="#/participants" class="down-link">${html(tx('index'))}</a></section><section class="directory frame" id="directory" aria-labelledby="directory-title"><a href="#/meetings/we-know" class="context edition-link">${html(tx('edition'))}</a><h2 class="section-title" id="directory-title" tabindex="-1">${html(tx('participants'))}<sup>${participants.length}</sup></h2><div class="directory-tools"><p class="small">${html(tx('indexNote'))}</p><div class="filters" role="group" aria-label="${html(tx('initials'))}">${filters()}</div></div><div class="grid">${cards()}</div></section>`;
  }
  function about() {
    return `<article class="subpage frame">${crumb([[tx('home'),'#/'],[tx('about')]])}<div class="inset"><h1 class="page-title">${html(tx('aboutTitle'))}</h1><p class="lead">${html(tx('founding'))}</p><blockquote class="about-quote">${html(tx('motto'))}</blockquote><p class="body-copy">${html(tx('concept'))}</p>${extLink('https://app.notion.com/p/lalm/About-2e15ffc3c822818f95e3ca2b0fcf7ffc',tx('aboutSource'))}</div><section class="records"><h2 class="subhead">${html(tx('meetings'))}</h2><div class="record-list">${row('#/meetings/we-know',tx('event'),tx('weKnow'),tx('when'))}</div></section></article>`;
  }
  function edition() {
    return `<article class="subpage frame">${crumb([[tx('aboutTitle'),'#/about'],[tx('weKnow')]])}<div class="editorial-head"><div><p class="context">${html(tx('when'))}</p><h1 class="page-title">${html(tx('weKnow'))}</h1><p class="lead">${html(tx('venue'))}</p><p class="body-copy">${html(tx('eventBody'))}</p><p class="body-copy">${html(tx('organiser'))}</p>${extLink('https://wozhendehaokewu.com/exhibitions/we-know-lalm-2026.html',tx('sourceLabel'))}</div><figure class="event-poster"><a href="assets/we-know.webp"><img src="assets/we-know.webp" width="1200" height="1800" alt="${html(tx('poster'))}"></a><figcaption class="image-credit">${html(tx('poster'))}</figcaption></figure></div><section class="records"><h2 class="subhead">${html(tx('programme'))}</h2><p class="small">${html(tx('saturday'))}</p><div class="schedule"><p><time>14:00–15:30</time>${html(tx('tour'))}</p><p><time>16:00–18:00</time>${html(tx('openSession'))}</p></div><a class="text-link" href="#/participants">${html(tx('index'))}</a></section></article>`;
  }
  function original(entry) {
    const archiveLang = lang === 'zh' ? 'zh' : 'en';
    const body = entry.original?.[archiveLang] || [];
    if (!body.length) return '';
    const languageNote = ['zh','en'].includes(lang) ? '' : ' · English';
    return `<details class="original"><summary>${html(tx('submitted') + languageNote)}</summary><div lang="${archiveLang}">${body.map(line=>`<p class="body-copy">${html(line)}</p>`).join('')}</div></details>`;
  }
  function profile(entry) {
    return `<article class="subpage frame">${crumb([[tx('index'),'#/participants'],[name(entry)]])}<div class="profile-head"><div><p class="context">${html(tx('profile'))}${local(entry.location) ? ' · '+html(local(entry.location)) : ''}</p><h1 class="page-title${name(entry).split(/\s+/).some(word=>word.length>=12) ? ' long-name' : ''}">${html(name(entry))}</h1><p class="lead">${html(local(entry.summary))}</p><div class="profile-meta"><span class="meta-label">${html(tx('representative'))}</span><strong>${html(local(entry.attendee))}</strong></div></div><figure class="profile-logo"><img src="assets/${html(entry.thumb)}" width="640" height="420" alt="${html(name(entry))}"></figure></div>${original(entry)}<section class="records"><h2 class="subhead">${html(tx('more'))}</h2><div class="record-list">${entry.items.map(item=>row(itemUrl(entry,item),tx(item.type),local(item.title),item.date)).join('')}${row('#/meetings/we-know',tx('event'),tx('weKnow'),'2026')}</div>${entry.id === 'alkali' ? extLink('https://alkali.zhangzhaohao.com/',tx('projection')) : ''}</section>${entry.photos.length ? `<div class="photo-list">${entry.photos.map(photo).join('')}</div>` : ''}</article>`;
  }
  function detail(entry, item) {
    const itemImage = item.illustration || entry.photos.find(p=>p.path===item.photo);
    return `<article class="subpage frame">${crumb([[tx('index'),'#/participants'],[name(entry),orgUrl(entry)],[tx(item.type)]])}<div class="inset"><p class="context">${html(tx(item.type))}${item.date ? ' · '+html(item.date) : ''}</p><h1 class="page-title">${html(local(item.title))}</h1><div class="item-body"><p class="lead">${html(local(item.body))}</p>${extLink(item.url,local(item.linkLabel)||tx('visit'))}${item.file ? `<a class="text-link" href="assets/${html(item.file)}" target="_blank" rel="noopener">${html(tx('document'))}</a>` : ''}</div>${itemImage ? `<div class="photo-list">${photo(itemImage)}</div>` : ''}</div></article>`;
  }
  const taFiles = ['ta-pages', 'ta-photos', 'ta-learning', 'ta-events', 'ta-exhibitions'];
  const loadedTaFiles = new Set();
  let taState = 'idle';
  function loadTaArchive() {
    taState = 'loading';
    const pending = taFiles.filter(file => !loadedTaFiles.has(file)).map(file => new Promise(resolve => {
      const script = document.createElement('script');
      script.src = 'content/' + file + '.js';
      script.onload = () => { loadedTaFiles.add(file); script.remove(); resolve(); };
      script.onerror = () => { script.remove(); resolve(); };
      document.head.append(script);
    }));
    Promise.all(pending).then(() => {
      taState = loadedTaFiles.size === taFiles.length ? 'ready' : 'failed';
      const [section, id] = currentPath();
      if (section === 'participants' && id === 'ta-academy') render();
    });
  }
  function taRoute(entry, section) {
    if (taState === 'ready') return taPages.render(entry, section, {lang, html, tx, local, crumb, row, orgUrl});
    if (taState === 'idle') loadTaArchive();
    const failed = taState === 'failed';
    return {title:name(entry), markup:`<section class="subpage frame"><h1 class="page-title">${html(name(entry))}</h1><p role="status">${html(tx(failed ? 'gravityLoadFailed' : 'gravityLoading'))}</p>${failed ? `<button class="text-link" data-ta-retry>${html(tx('gravityRetry'))}</button>` : ''}</section>`};
  }
  let gravityDataState = 'idle';
  function loadGravityData() {
    if (window.gravityArchive || gravityDataState === 'loading') return;
    gravityDataState = 'loading';
    const script = document.createElement('script');
    script.src = 'content/gravitational-body.js';
    const done = () => {
      gravityDataState = window.gravityArchive ? 'ready' : 'failed';
      script.remove();
      const [section, id] = currentPath();
      if (section === 'participants' && id === 'gravitational-body') render();
    };
    script.onload = done;
    script.onerror = done;
    document.head.append(script);
  }
  const gravityUrl = articleId => '#/participants/gravitational-body/articles/' + encodeURIComponent(articleId);
  function gravityTimeline(archive) {
    return `<section class="records gravity-section" id="gravity-timeline"><h2 class="subhead" tabindex="-1">${html(tx('gravityTimeline'))}</h2>
      <ol class="festival-timeline">${archive.events.map(event => `<li><a href="${html(gravityUrl(event.article))}"${event.image ? ' class="has-thumb"' : ''}>
        ${event.image ? `<img class="timeline-thumb" src="${html(event.image)}" width="140" height="96" alt="" loading="lazy" decoding="async">` : ''}
        <span class="event-date">${html(local(event.date))}</span><span class="event-name">${html(local(event.title))}${event.location ? `<small>${html(local(event.location))}</small>` : ''}</span><span class="row-arrow" aria-hidden="true">↗</span>
      </a></li>`).join('')}</ol></section>`;
  }
  function gravityProfile(entry, archive) {
    const org = orgUrl(entry);
    const background = archive.articles.find(article => article.id === archive.background);
    const intro = [local(entry.history), ...entry.original[lang].slice(1)];
    return `<article class="subpage frame gravity-profile">${crumb([[tx('index'),'#/participants'],[name(entry)]])}
      <div class="profile-head">
        <div><p class="context">${html(tx('profile'))} · ${html(local(entry.location))}</p><h1 class="page-title">${html(name(entry))}</h1>
          <nav class="archive-shortcuts" aria-label="${html(tx('archive'))}">
            ${[['intro','gravityIntro'],['people','gravityPeople'],['timeline','gravityTimeline']].map(([anchor,label])=>`<a href="${org}/${anchor}">${html(tx(label))}</a>`).join('')}
          </nav></div>
        <figure class="profile-logo"><img src="assets/${html(entry.thumb)}" alt="${html(name(entry))}" width="640" height="420"></figure>
      </div>
      <section class="records gravity-section" id="gravity-intro"><h2 class="subhead" tabindex="-1">${html(tx('gravityIntro'))}</h2>
        <div class="gravity-intro-copy">${intro.map(paragraph => `<p class="body-copy">${html(paragraph)}</p>`).join('')}<a class="text-link small" href="assets/gravitational-body/institution-profile.png" target="_blank" rel="noopener">${html(tx('gravitySubmitted'))}</a></div>
        ${background ? `<div class="record-list">${row(gravityUrl(background.id),tx('gravityBackground'),local(background.title),local(background.date))}</div>` : ''}
      </section>
      <section class="records gravity-section" id="gravity-people"><h2 class="subhead" tabindex="-1">${html(tx('gravityPeople'))}</h2>
        <dl class="gravity-people">${archive.people.map(person => `<div><dt>${html(local(person.name))}</dt><dd>${html(local(person.role))}</dd></div>`).join('')}</dl>
      </section>
      ${gravityTimeline(archive)}
      <section class="records"><h2 class="subhead">${html(tx('meetings'))}</h2><div class="record-list">${row('#/meetings/we-know',tx('event'),tx('weKnow'),'2026')}</div></section>
    </article>`;
  }
  function gravityArticle(entry, article, archive) {
    const event = archive.events.find(item => item.article === article.id);
    const title = local(article.title);
    const source = extLink(article.url,tx('gravityOriginal'));
    const contents = [];
    let imageIndex = 0;
    const blocks = article.blocks.map((block, index) => {
      if (block.langs && !block.langs.includes(lang)) return '';
      const key = 'data-archive-block="' + index + '"';
      if (block.type === 'image') {
        imageIndex++;
        const caption = local(block.caption);
        const alt = local(block.alt) || caption || `${tx('gravityImage')} ${imageIndex}`;
        const size = block.width > 0 && block.height > 0 ? `width="${Number(block.width)}" height="${Number(block.height)}"` : '';
        const transcript = local(block.transcript);
        const imageText = transcript ? `<details class="image-transcript"><summary>${html(tx('gravityTranscript'))}</summary><p>${html(transcript)}</p></details>` : '';
        return `<figure class="archive-image" ${key}><a href="${html(block.original || block.src)}" target="_blank" rel="noopener"><img src="${html(block.src)}" alt="${html(alt)}" loading="lazy" decoding="async" ${size}></a>${caption ? `<figcaption>${html(caption)}</figcaption>` : ''}${imageText}</figure>`;
      }
      const text = local(block.text);
      if (block.type === 'link') {
        const related = archive.articles.find(item => item.url && block.url && item.url.split('?')[0] === block.url.split('?')[0]);
        return related ? `<p ${key}><a class="text-link" href="${html(gravityUrl(related.id))}">${html(text)}</a></p>` : `<p ${key}>${extLink(block.url,text)}</p>`;
      }
      if (block.type === 'embed') {
        const url = block.url || article.url;
        const listenOrWatch = tx(block.kind === 'music' ? 'gravityListen' : 'gravityVideo');
        const cover = block.cover && /^https?:\/\//.test(url || '') ? `<a class="media-cover" href="${html(url)}" target="_blank" rel="noopener noreferrer"><img src="${html(block.cover)}" alt="${html(listenOrWatch)}" loading="lazy" decoding="async"></a>` : '';
        const description = [text,local(block.account)].filter(Boolean).map(line=>`<p>${html(line)}</p>`).join('');
        return `<aside class="archive-embed" ${key}>${cover}${extLink(url,listenOrWatch)}${description ? `<details class="image-transcript"><summary>${html(tx('gravityMediaInfo'))}</summary>${description}</details>` : ''}</aside>`;
      }
      const tag = {p:'p', h2:'h2', h3:'h3', quote:'blockquote'}[block.type] || 'p';
      if (tag === 'h2' || tag === 'h3') {
        const credit = local(block.credit);
        const contentsLabel = credit ? text + ' · ' + credit : text;
        contents.push(`<li class="toc-${tag}"><a href="${html(gravityUrl(article.id))}?section=${index}">${html(contentsLabel)}</a></li>`);
        return `<${tag} id="gravity-heading-${index}" tabindex="-1" ${key}>${html(text)}</${tag}>`;
      }
      return `<${tag} ${key}>${html(text)}</${tag}>`;
    }).join('');
    const from = orgUrl(entry);
    const section = event ? tx('gravityTimeline') : tx('gravityIntro');
    const label = event ? tx('gravityReview') : tx('gravityBackground');
    const description = local(article.description);
    const cover = !event && article.cover ? `<a class="archive-cover" href="${html(article.cover)}" target="_blank" rel="noopener"><img src="${html(article.cover)}" alt="${html(title)}" decoding="async"></a>` : '';
    return `<article class="subpage frame gravity-article">
      ${crumb([[tx('index'),'#/participants'],[name(entry),from],[section,from + (event ? '/timeline' : '/intro')],[label]])}
      <header class="archive-heading"><p class="context">${html(label)}${event?.date ? ' · '+html(local(event.date)) : ''}</p><h1 class="page-title">${html(title)}</h1>
        ${description ? `<p class="archive-deck">${html(description)}</p>` : ''}
        ${cover}
        <p class="archive-byline">${[local(article.author), article.date ? tx('gravityPublished') + ' · ' + local(article.date) : ''].filter(Boolean).map(html).join(' · ')}</p>${source}
      </header>
      ${contents.length > 1 ? `<details class="archive-toc"><summary>${html(tx('gravityContents'))}</summary><nav aria-label="${html(tx('gravityContents'))}"><ul>${contents.join('')}</ul></nav></details>` : ''}
      <div class="archive-stream">${blocks}</div>
      <footer class="archive-end"><a class="text-link" href="${from}${event ? '/timeline' : '/intro'}">${html(tx('gravityBack'))}</a>${source}</footer>
    </article>`;
  }
  function gravityRoute(entry, path) {
    const [, , section, articleId] = path;
    if (!window.gravityArchive) {
      if (gravityDataState === 'idle') loadGravityData();
      const failed = gravityDataState === 'failed';
      const message = tx(failed ? 'gravityLoadFailed' : 'gravityLoading');
      return { title:name(entry), markup:`<section class="subpage frame">${crumb([[tx('index'),'#/participants'],[name(entry)]])}<h1 class="page-title">${html(name(entry))}</h1><p role="status" class="body-copy">${html(message)}</p>${failed ? `<button class="text-link" data-gravity-retry>${html(tx('gravityRetry'))}</button>` : ''}</section>` };
    }
    const archive = window.gravityArchive;
    if (path.length === 2 || (path.length === 3 && ['intro','people','timeline'].includes(section))) {
      return {title:name(entry), markup:gravityProfile(entry,archive)};
    }
    if (section === 'articles' && path.length === 4) {
      const article = archive.articles.find(value => value.id === articleId);
      if (article) return {title:local(article.title), markup:gravityArticle(entry,article,archive)};
    }
    if (section === 'yibohui' && path.length === 3) {
      const record = entry.items.find(item => item.id === section);
      if (record) return {title:local(record.title),markup:detail(entry,record).replace('</article>',gravityTimeline(archive)+'</article>')};
    }
    return {};
  }
  // Reuse the live DOM when translating. In particular, keep decoded images
  // and open archive details in place even if a translation has more paragraphs.
  function translateChildren(parent, translated) {
    // Align source blocks before translating so language-specific paragraphs
    // may appear or disappear without replacing photographs further down.
    if (parent.classList?.contains('archive-stream')) {
      const keys = new Set(Array.from(translated.children, node => node.dataset.archiveBlock));
      for (const node of Array.from(parent.children)) {
        if (!keys.has(node.dataset.archiveBlock)) node.remove();
      }
      for (const [index, next] of Array.from(translated.children).entries()) {
        const current = parent.children[index];
        if (current?.dataset.archiveBlock !== next.dataset.archiveBlock) {
          parent.insertBefore(next.cloneNode(true), current || null);
        }
      }
    }
    const children = Array.from(translated.childNodes);
    children.forEach((next, index) => {
      const current = parent.childNodes[index];
      if (!current || current.nodeName !== next.nodeName) {
        const replacement = next.cloneNode(true);
        if (current) current.replaceWith(replacement);
        else parent.append(replacement);
        return;
      }
      if (current.nodeType === Node.TEXT_NODE) {
        if (current.data !== next.data) current.data = next.data;
        return;
      }
      for (const key of current.getAttributeNames()) {
        if (key === 'open' && current.tagName === 'DETAILS') continue;
        if (!next.hasAttribute(key)) current.removeAttribute(key);
      }
      for (const {name, value} of next.attributes) {
        if (current.getAttribute(name) !== value) current.setAttribute(name, value);
      }
      translateChildren(current, next);
    });
    while (parent.childNodes.length > children.length) parent.lastChild.remove();
  }
  function render(navigate = true) {
    const path = currentPath();
    const [section, id, record] = path;
    const onHome = path.length === 0 || (section === 'participants' && path.length === 1);
    const prior = currentPage;
    currentPage = path.join('/') || 'home';
    header();
    let markup;
    let title;
    if (onHome) { markup = landing(); title = section ? tx('index') : 'Live Art Live Meet'; }
    else if (section === 'about' && path.length === 1) { markup = about(); title = tx('aboutTitle'); }
    else if (currentPage === 'meetings/we-know') { markup = edition(); title = tx('weKnow'); }
    else if (section === 'participants' && id === 'gravitational-body') {
      ({markup, title} = gravityRoute(participants.find(org => org.id === id),path));
    }
    else if (section === 'participants' && path.length <= 3) {
      const entry = participants.find(org => org.id === id);
      if (id === 'ta-academy' && (!record || ['amo','learning','events','exhibitions'].includes(record))) {
        ({markup, title} = taRoute(entry, record));
      }
      else if (entry && !record) { markup = profile(entry); title = name(entry); }
      else if (entry) { const item = entry.items.find(value => value.id === record); if (item) { markup = detail(entry,item); title = local(item.title); } }
    }
    if (!markup) { title=tx('notFound'); markup=`<section class="subpage frame"><h1 class="page-title">${html(title)}</h1><a class="text-link" href="#/participants">${html(tx('index'))}</a></section>`; }
    // Keep the initially painted title alive while the directory loads.
    const reuseHero = onHome && main.firstElementChild?.classList.contains('hero');
    const sameArticle = navigate && prior === currentPage && main.querySelector('.gravity-article');
    if (navigate && !reuseHero && !sameArticle) {
      main.innerHTML = markup;
    } else {
      const translated = document.createElement('template');
      translated.innerHTML = markup;
      translateChildren(main, translated.content);
    }
    document.title = `${title} — LALM`;
    if (navigate) {
      if (currentPage === 'participants') {
        const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
        document.getElementById('directory').scrollIntoView({behavior:prior === 'home' && !reduce ? 'smooth':'instant'});
        if(prior) document.getElementById('directory-title').focus({preventScroll:true});
      } else if (id === 'gravitational-body' && record === 'articles' && location.hash.includes('?section=')) {
        const index = new URLSearchParams(location.hash.split('?')[1]).get('section');
        const target = document.getElementById('gravity-heading-' + index);
        if (target) {
          target.scrollIntoView({behavior:'instant'});
          target.focus({preventScroll:true});
        } else { window.scrollTo({top:0,behavior:'instant'}); }
      } else if (id === 'gravitational-body' && path.length === 3 && document.getElementById('gravity-' + record)) {
        const sectionNode = document.getElementById('gravity-' + record);
        sectionNode.scrollIntoView({behavior:'instant'});
        sectionNode.querySelector('h2')?.focus({preventScroll:true});
      } else { window.scrollTo({top:0,behavior:'instant'}); if(prior) main.focus({preventScroll:true}); }
    }
  }
  document.addEventListener('lalm-language', event => {
    // Keep the visible card/paragraph in place if the new text wraps differently.
    const edge = document.querySelector('header').getBoundingClientRect().bottom + 2;
    const point = window.scrollY ? document.elementFromPoint(window.innerWidth / 2, edge) : null;
    const anchor = point?.closest('[data-archive-block]') || point?.closest('.org-card, .record-row, p, h1, h2, summary, figure, .directory-tools, .grid, .records');
    const blockKey = anchor?.dataset.archiveBlock;
    const top = anchor?.getBoundingClientRect().top;
    lang = event.detail;
    render(false);
    let translatedAnchor = anchor;
    if (!anchor?.isConnected && blockKey !== undefined) {
      translatedAnchor = Array.from(main.querySelectorAll('[data-archive-block]')).find(node => Number(node.dataset.archiveBlock) >= Number(blockKey));
    }
    if (translatedAnchor?.isConnected) {
      const shift = translatedAnchor.getBoundingClientRect().top - top;
      if (Math.abs(shift) > 1) window.scrollBy({top: shift, behavior: 'instant'});
    }
  });
  theme.addEventListener('click',()=>{appearance.set(document.documentElement.dataset.theme==='dark'?'light':'dark');appearanceLabels();});
  document.getElementById('footer').addEventListener('click',e=>{if(e.target.closest('[data-auto]')){appearance.set('auto');appearanceLabels();theme.focus();}});
  main.addEventListener('click',e=>{
    if (e.target.closest('[data-ta-retry]')) { loadTaArchive(); render(); return; }
    if (e.target.closest('[data-gravity-retry]')) { loadGravityData(); render(); return; }
    const button=e.target.closest('[data-letter]');
    if (!button) return;
    filter=button.dataset.letter;
    main.querySelectorAll('[data-letter]').forEach(node=>node.setAttribute('aria-pressed',String(node.dataset.letter===filter)));
    main.querySelector('.grid').innerHTML=cards();
  });
  document.addEventListener('click',e=>{
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button!==0) return;
    const a=e.target.closest('a');
    if (a?.getAttribute('href')==='#main') {e.preventDefault();main.focus();return;}
    if (a?.getAttribute('href')===location.hash && location.hash.startsWith('#/')) {e.preventDefault();render();}
  });
  window.addEventListener('hashchange',()=>render());
  const updateAppearance = () => {appearance.apply(); appearanceLabels();};
  window.addEventListener('storage',e=>{if(e.key==='lalm.appearance')updateAppearance();});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden) updateAppearance();});
  setInterval(updateAppearance,60000);
  render();
})();
