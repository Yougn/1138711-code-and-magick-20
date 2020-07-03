'use strict';

(function () {

  var MAX_SIMILAR_WIZARD_COUNT = 4;

  var mainElement = document.querySelector('.setup');
  mainElement.classList.remove('hidden');
  var similarListElement = mainElement.querySelector('.setup-similar-list');
  var similarWizardElement = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var showErrorMessage = function (message) {
    var parent = document.querySelector('.upload');
    var p = document.createElement('p');
    p.textContent = message;
    p.style.marginLeft = '450px';
    p.style.color = 'red';
    parent.appendChild(p);
  };

  window.backend.load(function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    mainElement.querySelector('.setup-similar').classList.remove('hidden');
  }, showErrorMessage);


  // var createFragment = function (wizards) {
  //   var fragment = document.createDocumentFragment();
  //   for (var i = 0; i < wizards.length; i++) {
  //     fragment.appendChild(renderWizard(wizards[i]));
  //   }
  //   return fragment;
  // };
  // var wizards = window.getWizardsList(window.util.NUMBER);
  // similarListElement.appendChild(createFragment(wizards));
  // mainElement.querySelector('.setup-similar').classList.remove('hidden');

  var form = mainElement.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      mainElement.classList.add('hidden');
    }, showErrorMessage);
    evt.preventDefault();
  });

})();
