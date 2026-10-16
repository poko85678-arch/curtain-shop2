(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var saved = localStorage.getItem('theme');

  // Восстанавливаем сохранённую тему при загрузке
  if (saved) {
    root.setAttribute('data-theme', saved);
    if (toggle) toggle.checked = (saved === 'dark');
  }

  // Обработчик клика
  if (toggle) {
    toggle.addEventListener('change', function () {
      var theme = toggle.checked ? 'dark' : 'light';
      root.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }
})();