'use strict';

(function () {

  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = document.querySelector('.setup-user-name');
  var setupDialogElement = document.querySelector('.setup');
  var tops;
  var lefts;

  var getX = function () {
    var x = setupDialogElement.offsetLeft;
    return x;
  };

  var getY = function () {
    var y = setupDialogElement.offsetTop;
    return y;
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && userNameInput !== document.activeElement) {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');

    tops = getY();
    lefts = getX();

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');

    setupDialogElement.style.top = tops + 'px';
    setupDialogElement.style.left = lefts + 'px';

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

})();
