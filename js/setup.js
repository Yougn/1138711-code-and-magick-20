'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBAll_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var STR = ' ';
var NUMBER = 4;
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var getRandomElement = function (elements) {
  var index = Math.floor(Math.random() * elements.length);
  return elements[index];
};

var getWizard = function () {
  return {
    name: getRandomElement(WIZARD_NAMES) + STR + getRandomElement(WIZARD_SURNAMES),
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

var wizards = getWizardsList(NUMBER);

similarListElement.appendChild(createFragment(wizards));
mainElement.querySelector('.setup-similar').classList.remove('hidden');


var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && userNameInput !== document.activeElement) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});


var userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});


var userCoatInput = document.querySelector('.wizard-coat');

userCoatInput.addEventListener('click', function () {
  userCoatInput.style.fill = getRandomElement(WIZARD_COATS);
});

userCoatInput.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    userCoatInput.style.fill = getRandomElement(WIZARD_COATS);
  }
});


var userEyesInput = document.querySelector('.wizard-eyes');

userEyesInput.addEventListener('click', function () {
  userEyesInput.style.fill = getRandomElement(WIZARD_EYES);
});

userEyesInput.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    userEyesInput.style.fill = getRandomElement(WIZARD_EYES);
  }
});


var fireballInput = document.querySelector('.setup-fireball-wrap');

fireballInput.addEventListener('click', function () {
  fireballInput.style.background = getRandomElement(FIREBAll_COLORS);
});

fireballInput.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    fireballInput.style.background = getRandomElement(FIREBAll_COLORS);
  }
});

