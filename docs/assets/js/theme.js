(function () {
  'use strict';

  var key = 'protein-design-theme';
  var preference = 'system';
  var button;
  var system = window.matchMedia('(prefers-color-scheme: dark)');

  function isDark() {
    return preference === 'dark' || (preference === 'system' && system.matches);
  }

  function apply(value) {
    preference = value === 'light' || value === 'dark' ? value : 'system';
    document.documentElement.setAttribute('data-theme', preference);
    if (button) {
      var label = isDark() ? 'Switch to light mode' : 'Switch to dark mode';
      button.textContent = isDark() ? '☀' : '☾';
      button.setAttribute('aria-label', label);
      button.title = label;
    }
  }

  try {
    preference = window.localStorage.getItem(key);
  } catch (_) {}
  apply(preference);

  document.addEventListener('DOMContentLoaded', function () {
    button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.addEventListener('click', function () {
      apply(isDark() ? 'light' : 'dark');
      try { window.localStorage.setItem(key, preference); } catch (_) {}
    });
    document.body.appendChild(button);
    apply(preference);
  });

  system.addEventListener('change', function () { apply(preference); });
  window.addEventListener('storage', function (event) {
    if (event.key === key || event.key === null) apply(event.newValue);
  });
}());
