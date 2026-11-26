(() => {
  const picker = document.getElementById('language-picker');
  const trigger = document.getElementById('language');
  const menu = document.getElementById('language-menu');
  const options = Array.from(menu.querySelectorAll('[data-language]'));
  const labels = { en: 'Language', zh: '语言', ja: '言語', ko: '언어', fr: 'Langue' };

  function select(option) {
    const code = option.dataset.language;
    trigger.dataset.value = code;
    trigger.setAttribute('aria-label', labels[code] + ', ' + option.textContent);
    document.getElementById('lang-value').textContent = code === 'zh' ? '中' : code.toUpperCase();
    for (const entry of options) entry.setAttribute('aria-checked', String(entry === option));
    document.documentElement.lang = option.lang;
  }

  function open(option = options.find(entry => entry.dataset.language === trigger.dataset.value)) {
    menu.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    option.focus({preventScroll: true});
  }

  function close(returnFocus = false) {
    if (menu.hidden) return;
    trigger.setAttribute('aria-expanded', 'false');
    if (returnFocus) trigger.focus({preventScroll: true});
    menu.hidden = true;
  }

  const requested = new URLSearchParams(location.search).get('lang');
  const sharedOption = options.find(entry => entry.dataset.language === requested);
  if (sharedOption) {
    select(sharedOption);
  } else {
    try {
      const saved = localStorage.getItem('lalm.language');
      const option = options.find(entry => entry.dataset.language === saved);
      if (option) select(option);
    } catch {}
  }

  trigger.addEventListener('click', () => menu.hidden ? open() : close(true));
  trigger.addEventListener('keydown', event => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    open(event.key === 'ArrowDown' ? options[0] : options[options.length - 1]);
  });
  menu.addEventListener('keydown', event => {
    const index = options.indexOf(document.activeElement);
    let next;
    switch (event.key) {
      case 'ArrowDown': next = (index + 1) % options.length; break;
      case 'ArrowUp': next = (index + options.length - 1) % options.length; break;
      case 'Home': next = 0; break;
      case 'End': next = options.length - 1; break;
      case 'Escape': event.preventDefault(); close(true); return;
      case 'Tab': close(true); return;
      default: return;
    }
    event.preventDefault();
    options[next].focus({preventScroll: true});
  });
  menu.addEventListener('click', event => {
    const option = event.target.closest('[data-language]');
    if (!option) return;
    close(true);
    if (option.dataset.language === trigger.dataset.value) return;
    select(option);
    if (sharedOption && location.protocol !== 'file:') {
      const shareUrl = new URL(location.href);
      shareUrl.searchParams.set('lang', option.dataset.language);
      history.replaceState(history.state, '', shareUrl);
    }
    document.dispatchEvent(new CustomEvent('lalm-language', {detail: option.dataset.language}));
    try { localStorage.setItem('lalm.language', option.dataset.language); } catch {}
  });
  document.addEventListener('pointerdown', event => {
    if (!menu.hidden && !picker.contains(event.target)) close();
  });
  picker.addEventListener('focusout', event => {
    if (event.relatedTarget && !picker.contains(event.relatedTarget)) close();
  });
  window.addEventListener('hashchange', () => close());
})();
