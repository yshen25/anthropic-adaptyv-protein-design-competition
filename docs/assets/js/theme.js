(function () {
  'use strict';

  var key = 'protein-design-theme';
  var choices = ['system', 'light', 'dark'];
  var preference = 'system';
  var control;

  function apply(value) {
    preference = choices.indexOf(value) !== -1 ? value : 'system';
    document.documentElement.setAttribute('data-theme', preference);
    if (control) control.value = preference;
  }

  try {
    preference = window.localStorage.getItem(key);
  } catch (_) {
    // System mode still works when browser storage is unavailable.
  }
  apply(preference);

  document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.wrapper > header');
    if (!header) return;

    var label = document.createElement('label');
    label.className = 'theme-control';
    label.appendChild(document.createTextNode('Appearance '));
    control = document.createElement('select');
    control.id = 'appearance';
    control.name = 'appearance';
    choices.forEach(function (choice) {
      var option = document.createElement('option');
      option.value = choice;
      option.textContent = choice.charAt(0).toUpperCase() + choice.slice(1);
      control.appendChild(option);
    });
    control.value = preference;
    control.addEventListener('change', function () {
      apply(control.value);
      try {
        if (preference === 'system') window.localStorage.removeItem(key);
        else window.localStorage.setItem(key, preference);
      } catch (_) {
        // Keep the selection active for this page even without persistence.
      }
    });
    label.appendChild(control);
    header.appendChild(label);
  });

  window.addEventListener('storage', function (event) {
    if (event.key === key || event.key === null) apply(event.newValue);
  });
}());
