(() => {
  const key = 'lalm.appearance';
  function setting() {
    try { return localStorage.getItem(key); } catch { return null; }
  }
  function show(mode) {
    document.documentElement.dataset.theme = mode;
    document.querySelector('meta[name="theme-color"]').content = mode === 'dark' ? '#141416' : '#fafafa';
    document.querySelector('link[rel="icon"]').href = 'assets/favicon-' + mode + '.png';
  }
  function apply() {
    const hour = new Date().getHours();
    const choice = setting();
    const mode = ['dark', 'light'].includes(choice) ? choice : (hour >= 7 && hour < 19 ? 'light' : 'dark');
    show(mode);
  }
  function set(value) {
    try { if (value === 'auto') localStorage.removeItem(key); else localStorage.setItem(key, value); } catch {}
    apply();
    if (value !== 'auto') show(value);
  }
  window.appearance = {apply, set, setting};
  apply();
})();
