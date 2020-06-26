'use strict';

(function () {

  var mainElement = document.querySelector('.setup');
  mainElement.classList.remove('hidden');
  var similarListElement = mainElement.querySelector('.setup-similar-list');
  var similarWizardElement = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var createFragment = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    return fragment;
  };

  var wizards = window.getWizardsList(window.util.NUMBER);

  similarListElement.appendChild(createFragment(wizards));
  mainElement.querySelector('.setup-similar').classList.remove('hidden');

})();
