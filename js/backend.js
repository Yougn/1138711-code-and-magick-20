'use strict';

(function () {

  var URL = 'https://javascript.pages.academy/code-and-magick/data';
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_IN_MS = 10000;

  window.load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    var takeErrorOne = function () {
      var parent = document.querySelector('.upload');
      var p = document.createElement('p');
      p.innerHTML = 'Произошла ошибка соединения!';
      p.style.marginLeft = '450px';
      p.style.color = 'red';
      parent.appendChild(p);
    };


    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
      takeErrorOne();
    });

    var takeErrorTwo = function () {
      var parent = document.querySelector('.upload');
      var p = document.createElement('p');
      p.innerHTML = 'Запрос не успел выполниться за ' + xhr.timeout + 'мс';
      p.style.marginLeft = '450px';
      p.style.color = 'red';
      parent.appendChild(p);
    };

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      takeErrorTwo();
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('GET', URL);
    xhr.send();
  };

})();


(function () {

  var URL = 'https://javascript.pages.academy/code-and-magick';

  window.save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };

})();
