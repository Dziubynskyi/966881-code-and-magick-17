// Файл setup.js
'use strict';

//var WIZARD_NAMES = ['Дамблдор', 'Волдеморт', 'Доктор Стрендж', 'Гарри Поттер'];

var NAMES_WIZARD = ['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];

var SURNAMES_WIZARD = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];

var COATS_COLOR = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];

var EYES_COLOR = ['black','red','blue','yellow','green'];

var userDialog = document.querySelector('.setup'); // найти элемент
userDialog.classList.remove('hidden'); // cделать видимым

var similarListElement = userDialog.querySelector('.setup-similar-list'); // лист магов которые я буду в бравсыать за раз

var similarWizardTemplate = document.querySelector('#similar-wizard-template') // Найдём шаблон, который мы будем копировать.
    .content
    .querySelector('.setup-similar-item'); // И найдём элемент, в который мы будем вставлять похожих магов.

function GenerateRundomIndex(array) {
 if (array.length!=0){
 var rundomIndex = Math.floor(Math.random() * array.length);  // Math.floor(Math.random() * 10); // returns a random integer from 0 to 9
 return rundomIndex;
 }
 else{
  console.log('Recieved array length is 0.'); // better create exception . I am printing this just for example
  // CREATE NEW EXCEPTION;
 }
}

var wizards = [
  {
    name: NAMES_WIZARD[GenerateRundomIndex(NAMES_WIZARD)]+" "+SURNAMES_WIZARD[GenerateRundomIndex(SURNAMES_WIZARD)],
    coatColor: COATS_COLOR[GenerateRundomIndex(COATS_COLOR)],
    eyeColor: 'yellow'
  },
  {
    name: NAMES_WIZARD[GenerateRundomIndex(NAMES_WIZARD)]+" "+SURNAMES_WIZARD[GenerateRundomIndex(SURNAMES_WIZARD)],
    coatColor: COATS_COLOR[GenerateRundomIndex(COATS_COLOR)],
    eyeColor: 'red'
  },
  {
    name: NAMES_WIZARD[GenerateRundomIndex(NAMES_WIZARD)]+" "+SURNAMES_WIZARD[GenerateRundomIndex(SURNAMES_WIZARD)],
    coatColor: COATS_COLOR[GenerateRundomIndex(COATS_COLOR)],
    eyeColor: 'black'
  },
  {
    name: NAMES_WIZARD[GenerateRundomIndex(NAMES_WIZARD)]+" "+SURNAMES_WIZARD[GenerateRundomIndex(SURNAMES_WIZARD)],
    coatColor: COATS_COLOR[GenerateRundomIndex(COATS_COLOR)],
    eyeColor: 'green'
  }
];


var renderWizard = function (wizard) { // функция добавляет волшебнику что-то
  var wizardElement = similarWizardTemplate.cloneNode(true); // Отрисуем наш шаблон в документ.

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name; // добавили имя
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor; // меняет цвет шляпы
  //wizardElement.querySelector('#wizard-eyes > rect').style.fill = wizard.eyeColor; // меняет цвет глаз
  return wizardElement;
}

var fragment = document.createDocumentFragment(); // cохраняю магов в обьект fragment
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));//cоздаю этих магов
}
similarListElement.appendChild(fragment); // вбрасываю разом всех магов

userDialog.querySelector('.setup-similar').classList.remove('hidden');
