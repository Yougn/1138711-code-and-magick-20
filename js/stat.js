'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 15;
var BAR_HEIGHT = CLOUD_HEIGHT - GAP - FONT_GAP - GAP;
var barWidth = 40;
var SHIFT_BLOCK = 10;
var MAX_HEIGHT = 150;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', x + SHIFT_BLOCK * 2, y + SHIFT_BLOCK * 2);
  ctx.fillText('Список результатов:', x + SHIFT_BLOCK * 2, y + SHIFT_BLOCK * 4);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHIFT_BLOCK, CLOUD_Y + SHIFT_BLOCK, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  function getColor() {
    if (players[i] === 'Вы') {
      return 'rgba(255, 0, 0, 1)';
    } else {
      return 'hsl(235,' + Math.floor(Math.random() * 100) + '%, 50%)';
    }
  }

  for (var i = 0; i < players.length; i++) {

    ctx.fillText(players[i], CLOUD_X + GAP + (barWidth + GAP) * i, CLOUD_Y + GAP + FONT_GAP + BAR_HEIGHT + FONT_GAP + SHIFT_BLOCK);

    var BAR_MAX_HEIGHT = (MAX_HEIGHT * times[i]) / maxTime;

    ctx.fillStyle = getColor(players[i]);
    ctx.fillRect(CLOUD_X + GAP + (barWidth + GAP) * i, CLOUD_Y + GAP + FONT_GAP + BAR_HEIGHT + FONT_GAP, barWidth, -BAR_MAX_HEIGHT);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (barWidth + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - BAR_MAX_HEIGHT - GAP - SHIFT_BLOCK);
  }
};
