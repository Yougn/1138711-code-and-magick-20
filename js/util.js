'use strict';

(function () {

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBAll = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var STR = ' ';
  var NUMBER = 4;
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

  window.util = {
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_SURNAMES: WIZARD_SURNAMES,
    WIZARD_COATS: WIZARD_COATS,
    WIZARD_EYES: WIZARD_EYES,
    FIREBAll: FIREBAll,
    STR: STR,
    NUMBER: NUMBER,
    MIN_NAME_LENGTH: MIN_NAME_LENGTH,
    MAX_NAME_LENGTH: MAX_NAME_LENGTH
  };

  window.getRandomElement = function (elements) {
    var index = Math.floor(Math.random() * elements.length);
    return elements[index];
  };

})();
