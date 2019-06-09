'use strict';

var CLOUD_WIDTH = 500; // ширина облака
var CLOUD_HEIGHT = 200; // высота облака
var CLOUD_X = 100; // координаты прямоугольника X
var CLOUD_Y = 50; // координаты прямоугольника Y
var GAP = 10; // зазор тени
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color; // cвойство цвета заливки прямоугольника
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT); // залить прямоугльник облака
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);
 var x = 150;
  for (var i = 0; i < players.length; i++) {
     if (players[i]==="Вы"){
       ctx.fillStyle = 'red';
    }
    else{
       ctx.fillStyle = 'blue';
    }
    ctx.fillRect(x, 230, 40,-Math.abs((100 * times[i]) / maxTime)); // координаты х столбца относительно левого угла , координаты у столбца относительно верха, ширина столбца , высота столбца
    ctx.fillStyle = 'black';
    ctx.fillText(players[i], x, 242); // имя игрока , координата x , координата у
    ctx.fillText(Math.ceil(times[i]), x, 100);
    x+=100;
  }
};
