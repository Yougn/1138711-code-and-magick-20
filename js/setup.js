'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var str = ' ';

var getRandomElement = function (elements) {
  var index = Math.floor(Math.random() * elements.length);
  return elements[index];
};

var getWizard = function () {
  return {
    name: getRandomElement(WIZARD_NAMES) + str + getRandomElement(WIZARD_SURNAMES),
    coatColor: getRandomElement(WIZARD_COATS),
    eyesColor: getRandomElement(WIZARD_EYES)
  };
};

var getWizardsList = function (number) {
  var list = [];
  for (var i = 0; i < number; i++) {
    list.push(getWizard());
  }
  return list;
};

var number = 4;
var wizards = getWizardsList(number);

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
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

var createFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return fragment;
};

similarListElement.appendChild(createFragment(wizards));
userDialog.querySelector('.setup-similar').classList.remove('hidden');
