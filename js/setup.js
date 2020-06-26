'use strict';

(function () {

  var getWizard = function () {
    return {
      name: window.util.getRandomElement(window.util.WIZARD_NAMES) + window.util.STR + window.util.getRandomElement(window.util.WIZARD_SURNAMES),
      coatColor: window.util.getRandomElement(window.util.WIZARD_COATS),
      eyesColor: window.util.getRandomElement(window.util.WIZARD_EYES)
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

