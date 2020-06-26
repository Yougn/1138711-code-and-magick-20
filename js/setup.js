'use strict';

(function () {

  var getWizard = function () {
    return {
      name: window.getRandomElement(window.util.WIZARD_NAMES) + window.util.STR + window.getRandomElement(window.util.WIZARD_SURNAMES),
      coatColor: window.getRandomElement(window.util.WIZARD_COATS),
      eyesColor: window.getRandomElement(window.util.WIZARD_EYES)
    };
  };

  window.getWizardsList = function (number) {
    var list = [];
    for (var i = 0; i < number; i++) {
      list.push(getWizard());
    }
    return list;
  };

})();

