'use strict';

(function () {

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

    if (valueLength < window.util.MIN_NAME_LENGTH) {
      userNameInput.setCustomValidity('Ещё ' + (window.util.MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > window.util.MAX_NAME_LENGTH) {
      userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - window.util.MAX_NAME_LENGTH) + ' симв.');
    } else {
      userNameInput.setCustomValidity('');
    }
  });


  var userCoatInput = document.querySelector('.wizard-coat');

  userCoatInput.addEventListener('click', function () {
    userCoatInput.style.fill = window.getRandomElement(window.util.WIZARD_COATS);
  });

  userCoatInput.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      userCoatInput.style.fill = window.getRandomElement(window.util.WIZARD_COATS);
    }
  });


  var userEyesInput = document.querySelector('.wizard-eyes');

  userEyesInput.addEventListener('click', function () {
    userEyesInput.style.fill = window.getRandomElement(window.util.WIZARD_EYES);
  });

  userEyesInput.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      userEyesInput.style.fill = window.getRandomElement(window.util.WIZARD_EYES);
    }
  });


  var fireballInput = document.querySelector('.setup-fireball-wrap');

  fireballInput.addEventListener('click', function () {
    fireballInput.style.background = window.getRandomElement(window.util.FIREBAll);
  });

  fireballInput.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      fireballInput.style.background = window.getRandomElement(window.util.FIREBAll);
    }
  });

})();
