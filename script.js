var time = document.getElementById('time');
var timer_started = false;
var time_count = 0;

var frame_color_white = false;

var timerId;

time.innerHTML = time_count;

var best_time = document.getElementById('best_time');


var xhr = new XMLHttpRequest();

bring_out_the_best_time();
function bring_out_the_best_time() {

  m_best_time = get_best_time_value();
  if (m_best_time > 0) {
      console.log(m_best_time);
      best_time.innerHTML = m_best_time;
  }

}

function get_best_time_value(){

  // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
  xhr.open('GET', 'best_time.json', false);

  // 3. Отсылаем запрос
  xhr.send();

  // 4. Если код ответа сервера не 200, то это ошибка
  if (xhr.status != 200) {
    // обработать ошибку
    console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    return 0;
  } else {
    // вывести результат
    var data_time = JSON.parse(xhr.responseText);
    return data_time.time;
  }

}

function insert_best_time(best_time) {

  var insert_best_time_value = {value: best_time};

  xhr.open('POST', 'insert_best_time.json', false);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(insert_best_time_value));

}

function update_best_time(best_time) {

  var update_best_time_value = {value: best_time};

  xhr.open('POST', 'update_best_time.json', false);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(update_best_time_value));

}



// var sqlite3 = require('sqlite3').verbose()
// var db = new sqlite3.Database(':memory:')


// Массив цветов для div-вов (квадратов), может быть только два квадрата с одинаковым цветом
    var arrayColor = ["red","green","blue","yellow","orange","violet","indigo","brown",
                      "red","green","blue","yellow","orange","violet","indigo","brown"];

// Функция генирирования случайного целого числа в заданном периоде
    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

/*
Присваивание случайных чисел (в заданном периоде) в переменные типа: " randomNumberN "
Присваивание случайных цветов из массива в переменные типа: " randomColorN "
Удаление из массива цвета, который рание был выбран
*/

var randomNumber1 = getRandomInRange(0, arrayColor.length -1);
var randomColor1 = arrayColor[randomNumber1];
arrayColor.splice(randomNumber1, 1);

var randomNumber2 = getRandomInRange(0, arrayColor.length -1);
var randomColor2 = arrayColor[randomNumber2];
arrayColor.splice(randomNumber2, 1);

var randomNumber3 = getRandomInRange(0, arrayColor.length -1);
var randomColor3 = arrayColor[randomNumber3];
arrayColor.splice(randomNumber3, 1);

var randomNumber4 = getRandomInRange(0, arrayColor.length -1);
var randomColor4 = arrayColor[randomNumber4];
arrayColor.splice(randomNumber4, 1);

var randomNumber5 = getRandomInRange(0, arrayColor.length -1);
var randomColor5 = arrayColor[randomNumber5];
arrayColor.splice(randomNumber5, 1);

var randomNumber6 = getRandomInRange(0, arrayColor.length -1);
var randomColor6 = arrayColor[randomNumber6];
arrayColor.splice(randomNumber6, 1);

var randomNumber7 = getRandomInRange(0, arrayColor.length -1);
var randomColor7 = arrayColor[randomNumber7];
arrayColor.splice(randomNumber7, 1);

var randomNumber8 = getRandomInRange(0, arrayColor.length -1);
var randomColor8 = arrayColor[randomNumber8];
arrayColor.splice(randomNumber8, 1);

var randomNumber9 = getRandomInRange(0, arrayColor.length -1);
var randomColor9 = arrayColor[randomNumber9];
arrayColor.splice(randomNumber9, 1);

var randomNumber10 = getRandomInRange(0, arrayColor.length -1);
var randomColor10 = arrayColor[randomNumber10];
arrayColor.splice(randomNumber10, 1);

var randomNumber11 = getRandomInRange(0, arrayColor.length -1);
var randomColor11 = arrayColor[randomNumber11];
arrayColor.splice(randomNumber11, 1);

var randomNumber12 = getRandomInRange(0, arrayColor.length -1);
var randomColor12 = arrayColor[randomNumber12];
arrayColor.splice(randomNumber12, 1);

var randomNumber13 = getRandomInRange(0, arrayColor.length -1);
var randomColor13 = arrayColor[randomNumber13];
arrayColor.splice(randomNumber13, 1);

var randomNumber14 = getRandomInRange(0, arrayColor.length -1);
var randomColor14 = arrayColor[randomNumber14];
arrayColor.splice(randomNumber14, 1);

var randomNumber15 = getRandomInRange(0, arrayColor.length -1);
var randomColor15 = arrayColor[randomNumber15];
arrayColor.splice(randomNumber15, 1);

var randomNumber16 = getRandomInRange(0, arrayColor.length -1);
var randomColor16 = arrayColor[randomNumber16];
arrayColor.splice(randomNumber16, 1);

// Получение квадратов и рамки по id
var divKing = document.getElementById("divKing"); var Первый = document.getElementById("Первый"); var Второй = document.getElementById("Второй");
var Третий = document.getElementById("Третий"); var Четвертый = document.getElementById("Четвертый"); var Пятый = document.getElementById("Пятый");
var Шестой = document.getElementById("Шестой"); var Седьмой = document.getElementById("Седьмой"); var Восьмой = document.getElementById("Восьмой");
var Девятый = document.getElementById("Девятый"); var Десятый = document.getElementById("Десятый");
var Одинадцатый = document.getElementById("Одинадцатый"); var Двенадцатый = document.getElementById("Двенадцатый");
var Тренадцатый = document.getElementById("Тренадцатый"); var Четырнадцатый = document.getElementById("Четырнадцатый");
var Пядтнадцатый = document.getElementById("Пядтнадцатый"); var Шертнадцатый = document.getElementById("Шертнадцатый");

// функция возращающая квадратам и рамке изначальный белый цвет
function returnToWhite(){
    divKing.style.borderColor = "white";
    if(Первый.style.pointerEvents != 'none'){Первый.style.background = "white";}
    if(Второй.style.pointerEvents != 'none'){Второй.style.background = "white";}
    if(Третий.style.pointerEvents != 'none'){Третий.style.background = "white";}
    if(Четвертый.style.pointerEvents != 'none'){Четвертый.style.background = "white";}
    if(Пятый.style.pointerEvents != 'none'){Пятый.style.background = "white";}
    if(Шестой.style.pointerEvents != 'none'){Шестой.style.background = "white";}
    if(Седьмой.style.pointerEvents != 'none'){Седьмой.style.background = "white";}
    if(Восьмой.style.pointerEvents != 'none'){Восьмой.style.background = "white";}
    if(Девятый.style.pointerEvents != 'none'){Девятый.style.background = "white";}
    if(Десятый.style.pointerEvents != 'none'){Десятый.style.background = "white";}
    if(Одинадцатый.style.pointerEvents != 'none'){Одинадцатый.style.background = "white";}
    if(Двенадцатый.style.pointerEvents != 'none'){Двенадцатый.style.background = "white";}
    if(Тренадцатый.style.pointerEvents != 'none'){Тренадцатый.style.background = "white";}
    if(Четырнадцатый.style.pointerEvents != 'none'){Четырнадцатый.style.background = "white";}
    if(Пядтнадцатый.style.pointerEvents != 'none'){Пядтнадцатый.style.background = "white";}
    if(Шертнадцатый.style.pointerEvents != 'none'){Шертнадцатый.style.background = "white";}
}

function resetTheCounters(){
    counter1 = 0; counter2 = 0; counter3 = 0; counter4 = 0; counter5 = 0; counter6 = 0;
    counter7 = 0; counter8 = 0; counter9 = 0; counter10 = 0; counter11 = 0; counter12 = 0;
    counter13 = 0; counter14 = 0; counter15 = 0; counter16 = 0;
    counter = 0;
}

// Массив цветов для div-вов (квадратов), может быть только два квадрата с одинаковым цветом
    var arrayColor2 = ["red","green","blue","yellow","orange","violet","indigo","brown",
                       "red","green","blue","yellow","orange","violet","indigo","brown"];

function checkTheGameIsOver(){
    if(Первый.style.pointerEvents == 'none' && Второй.style.pointerEvents == 'none' && Третий.style.pointerEvents == 'none' && Четвертый.style.pointerEvents == 'none' && Пятый.style.pointerEvents == 'none' && Шестой.style.pointerEvents == 'none' && Седьмой.style.pointerEvents == 'none' && Восьмой.style.pointerEvents == 'none' && Девятый.style.pointerEvents == 'none' && Десятый.style.pointerEvents == 'none' && Одинадцатый.style.pointerEvents == 'none'  && Двенадцатый.style.pointerEvents == 'none' && Тренадцатый.style.pointerEvents == 'none' && Четвертый.style.pointerEvents == 'none' && Пядтнадцатый.style.pointerEvents == 'none' && Шертнадцатый.style.pointerEvents == 'none'){

        clearInterval(timerId);

        time_value_int = Number(time.textContent);
        base_best_time_value = get_best_time_value();
        if (base_best_time_value < 1){
            insert_best_time(time_value_int);
            console.log('suda 1');
            console.log(base_best_time_value);
            bring_out_the_best_time();
        } else {
          console.log('suda 2');
          console.log(isNaN(base_best_time_value == false));
          console.log(base_best_time_value);
          if (base_best_time_value > time_value_int) {
              //обновляем лучший результат в базе данных
              update_best_time(time_value_int);
              //выводим его на экран
              bring_out_the_best_time();
          }
        }

        divKing.style.borderColor = "black";
        divKing.style.textAlign = 'center';
        divKing.style.position = 'absolute';
        divKing.style.top = '50%';
        divKing.style.marginTop = '-200px';
        divKing.style.fontSize = '100px';
        divKing.style.color = 'white';
        divKing.innerHTML = 'Game complete';

        setTimeout(colorTextRed,50);
        setTimeout(colorTextGreen,100);
        setTimeout(colorTextBlue,150);
        setTimeout(colorTextYellow,200);
        setTimeout(colorTextOrange,250);
        setTimeout(colorTextViolet,300);
        setTimeout(colorTextIndigo,350);
        setTimeout(colorTextBrown,400);

        setTimeout(colorTextRed,450);
        setTimeout(colorTextGreen,500);
        setTimeout(colorTextBlue,550);
        setTimeout(colorTextYellow,600);
        setTimeout(colorTextOrange,650);
        setTimeout(colorTextViolet,700);
        setTimeout(colorTextIndigo,750);
        setTimeout(colorTextBrown,800);


        setTimeout(colorTextRed,900);
        setTimeout(colorTextGreen,950);
        setTimeout(colorTextBlue,1000);
        setTimeout(colorTextYellow,1050);
        setTimeout(colorTextOrange,1100);
        setTimeout(colorTextViolet,1150);
        setTimeout(colorTextIndigo,1200);
        setTimeout(colorTextBrown,1250);

        setTimeout(colorTextRed,1300);
        setTimeout(colorTextGreen,1350);
        setTimeout(colorTextBlue,1400);
        setTimeout(colorTextYellow,1450);
        setTimeout(colorTextOrange,1500);
        setTimeout(colorTextViolet,1550);
        setTimeout(colorTextIndigo,1600);
        setTimeout(colorTextBrown,1650);

        setTimeout(colorTextRed,1700);
        setTimeout(colorTextGreen,1750);
        setTimeout(colorTextBlue,1800);
        setTimeout(colorTextYellow,1850);
        setTimeout(colorTextOrange,1900);
        setTimeout(colorTextViolet,1950);
        setTimeout(colorTextIndigo,2000);
        setTimeout(colorTextBrown,2050);

        setTimeout(colorTextRed,2100);
        setTimeout(colorTextGreen,2150);
        setTimeout(colorTextBlue,2200);
        setTimeout(colorTextYellow,2250);
        setTimeout(colorTextOrange,2300);
        setTimeout(colorTextViolet,2350);
        setTimeout(colorTextIndigo,2400);
        setTimeout(colorTextBrown,2450);

        setTimeout(colorTextRed,2500);
        setTimeout(colorTextGreen,2550);
        setTimeout(colorTextBlue,2600);
        setTimeout(colorTextYellow,2650);
        setTimeout(colorTextOrange,2700);
        setTimeout(colorTextViolet,2750);
        setTimeout(colorTextIndigo,2800);
        setTimeout(colorTextBrown,2850);

        setTimeout(colorTextRed,2900);
        setTimeout(colorTextGreen,2950);
        setTimeout(colorTextBlue,3000);
        setTimeout(colorTextYellow,3050);
        setTimeout(colorTextOrange,3100);
        setTimeout(colorTextViolet,3150);
        setTimeout(colorTextIndigo,3200);
        setTimeout(colorTextBrown,3250);

        setTimeout(colorTextRed,3300);
        setTimeout(colorTextGreen,3350);
        setTimeout(colorTextBlue,3400);
        setTimeout(colorTextYellow,3450);
        setTimeout(colorTextOrange,3500);
        setTimeout(colorTextViolet,3550);
        setTimeout(colorTextIndigo,3600);
        setTimeout(colorTextBrown,3650);

        setTimeout(colorTextRed,3700);
        setTimeout(colorTextGreen,3750);
        setTimeout(colorTextBlue,3800);
        setTimeout(colorTextYellow,3850);
        setTimeout(colorTextOrange,3900);
        setTimeout(colorTextViolet,3950);
        setTimeout(colorTextIndigo,4000);
        setTimeout(colorTextBrown,4050);

        setTimeout(colorTextRed,4100);
        setTimeout(colorTextGreen,4150);
        setTimeout(colorTextBlue,4200);
        setTimeout(colorTextYellow,4250);
        setTimeout(colorTextOrange,4300);
        setTimeout(colorTextViolet,4350);
        setTimeout(colorTextIndigo,4400);
        setTimeout(colorTextBrown,4450);

        setTimeout(colorTextRed,4500);
        setTimeout(colorTextGreen,4550);
        setTimeout(colorTextBlue,4600);
        setTimeout(colorTextYellow,4650);
        setTimeout(colorTextOrange,4700);
        setTimeout(colorTextViolet,4750);
        setTimeout(colorTextIndigo,4800);
        setTimeout(colorTextBrown,4850);

        setTimeout(colorTextRed,4900);
        setTimeout(colorTextGreen,4950);
        setTimeout(colorTextBlue,5000);
        setTimeout(colorTextYellow,5050);
        setTimeout(colorTextOrange,5100);
        setTimeout(colorTextViolet,5150);
        setTimeout(colorTextIndigo,5200);
        setTimeout(colorTextBrown,5250);

        setTimeout(colorTextWhite,5300);



        setTimeout(refreshThePage, 6000);
    }

}

function refreshThePage(){
    var qweshens = confirm("Желаете повторить?");
    if (qweshens == true){
        location.reload(true);
    }
}

function colorTextRed(){
    divKing.style.color = 'red';
}

function colorTextGreen(){
    divKing.style.color = 'green';
}

function colorTextBlue(){
    divKing.style.color = 'blue';
}

function colorTextYellow(){
    divKing.style.color = 'yellow';
}

function colorTextOrange(){
    divKing.style.color = 'orange';
}

function colorTextViolet(){
    divKing.style.color = 'violet';
}

function colorTextIndigo(){
    divKing.style.color = 'indigo';
}

function colorTextBrown(){
    divKing.style.color = 'brown';
}

function colorTextWhite(){
    divKing.style.color = 'white';
}




// Функции меняющие цвет квадрата и рамку вызывающиеся по нажатию на сам квадрат
var counter = 0;
var strBig = '';
var one = '';
var randNumber;
var randColor;
var counter1 = 0; var counter2 = 0; var counter3 = 0; var counter4 = 0; var counter5 = 0; var counter6 = 0;
var counter7 = 0; var counter8 = 0; var counter9 = 0; var counter10 = 0; var counter11 = 0; var counter12 = 0;
var counter13 = 0; var counter14 = 0; var counter15 = 0; var counter16 = 0;



function One(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter1 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    if(counter < 3){
        Первый.style.background = randomColor1;
        divKing.style.borderColor = randomColor1;
        if(counter == 2){
            if(Второй.style.background != ''){
                if(Первый.style.background == Второй.style.background){
                    setTimeout(RandomColor1_2,0);
                    setTimeout(RandomColor1_2,500);
                    setTimeout(RandomColor1_2,100);
                    setTimeout(RandomColor1_2,1500);
                    setTimeout(RandomColor1_2,2000);
                    setTimeout(to1_2, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);
                }
            }
            if(Третий.style.background != ''){
                if(Первый.style.background == Третий.style.background){
                    setTimeout(RandomColor1_3,0);
                    setTimeout(RandomColor1_3,500);
                    setTimeout(RandomColor1_3,100);
                    setTimeout(RandomColor1_3,1500);
                    setTimeout(RandomColor1_3,2000);
                    setTimeout(to1_3, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);
                }
            }
            if(Четвертый.style.background != ''){
                if(Первый.style.background == Четвертый.style.background){
                    setTimeout(RandomColor1_4,0);
                    setTimeout(RandomColor1_4,500);
                    setTimeout(RandomColor1_4,100);
                    setTimeout(RandomColor1_4,1500);
                    setTimeout(RandomColor1_4,2000);
                    setTimeout(to1_4, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);
                }
            }
            if(Пятый.style.background != ''){
                if(Первый.style.background == Пятый.style.background){
                    setTimeout(RandomColor1_5,0);
                    setTimeout(RandomColor1_5,500);
                    setTimeout(RandomColor1_5,100);
                    setTimeout(RandomColor1_5,1500);
                    setTimeout(RandomColor1_5,2000);
                    setTimeout(to1_5, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);
                }
            }
            if(Шестой.style.background != ''){
                if(Первый.style.background == Шестой.style.background){
                    setTimeout(RandomColor1_6,0);
                    setTimeout(RandomColor1_6,500);
                    setTimeout(RandomColor1_6,100);
                    setTimeout(RandomColor1_6,1500);
                    setTimeout(RandomColor1_6,2000);
                    setTimeout(to1_6, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);
                }
            }
            if(Седьмой.style.background != ''){
                if(Первый.style.background == Седьмой.style.background){
                    setTimeout(RandomColor1_7,0);
                    setTimeout(RandomColor1_7,500);
                    setTimeout(RandomColor1_7,100);
                    setTimeout(RandomColor1_7,1500);
                    setTimeout(RandomColor1_7,2000);
                    setTimeout(to1_7, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);
                }
            }
            if(Восьмой.style.background != ''){
                if(Первый.style.background == Восьмой.style.background){
                    setTimeout(RandomColor1_8,0);
                    setTimeout(RandomColor1_8,500);
                    setTimeout(RandomColor1_8,100);
                    setTimeout(RandomColor1_8,1500);
                    setTimeout(RandomColor1_8,2000);
                    setTimeout(to1_8, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);
                }
            }
            if(Девятый.style.background != ''){
                if(Первый.style.background == Девятый.style.background){
                    setTimeout(RandomColor1_9,0);
                    setTimeout(RandomColor1_9,500);
                    setTimeout(RandomColor1_9,100);
                    setTimeout(RandomColor1_9,1500);
                    setTimeout(RandomColor1_9,2000);
                    setTimeout(to1_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);
                }
            }
            if(Десятый.style.background != ''){
                if(Первый.style.background == Десятый.style.background){
                    setTimeout(RandomColor1_10,0);
                    setTimeout(RandomColor1_10,500);
                    setTimeout(RandomColor1_10,100);
                    setTimeout(RandomColor1_10,1500);
                    setTimeout(RandomColor1_10,2000);
                    setTimeout(to1_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);
                }
            }
            if(Одинадцатый.style.background != ''){
                if(Первый.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor1_11,0);
                    setTimeout(RandomColor1_11,500);
                    setTimeout(RandomColor1_11,100);
                    setTimeout(RandomColor1_11,1500);
                    setTimeout(RandomColor1_11,2000);
                    setTimeout(to1_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);
                }
            }
            if(Двенадцатый.style.background != ''){
                if(Первый.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor1_12,0);
                    setTimeout(RandomColor1_12,500);
                    setTimeout(RandomColor1_12,100);
                    setTimeout(RandomColor1_12,1500);
                    setTimeout(RandomColor1_12,2000);
                    setTimeout(to1_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);
                }
            }
            if(Тренадцатый.style.background != ''){
                if(Первый.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor1_13,0);
                    setTimeout(RandomColor1_13,500);
                    setTimeout(RandomColor1_13,100);
                    setTimeout(RandomColor1_13,1500);
                    setTimeout(RandomColor1_13,2000);
                    setTimeout(to1_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);
                }
            }
            if(Четырнадцатый.style.background != ''){
                if(Первый.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor1_14,0);
                    setTimeout(RandomColor1_14,500);
                    setTimeout(RandomColor1_14,100);
                    setTimeout(RandomColor1_14,1500);
                    setTimeout(RandomColor1_14,2000);
                    setTimeout(to1_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);
                }
            }
            if(Пядтнадцатый.style.background != ''){
                if(Первый.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor1_15,0);
                    setTimeout(RandomColor1_15,500);
                    setTimeout(RandomColor1_15,100);
                    setTimeout(RandomColor1_15,1500);
                    setTimeout(RandomColor1_15,2000);
                    setTimeout(to1_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);
                }
            }
            if(Шертнадцатый.style.background != ''){
                if(Первый.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor1_16,0);
                    setTimeout(RandomColor1_16,500);
                    setTimeout(RandomColor1_16,100);
                    setTimeout(RandomColor1_16,1500);
                    setTimeout(RandomColor1_16,2000);
                    setTimeout(to1_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);
                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}

function two(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter2 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    if(counter < 3){
        Второй.style.background = randomColor2;
        divKing.style.borderColor = randomColor2;
        if(counter == 2){
            if(Первый.style.background != ''){
                if(Первый.style.background == Второй.style.background){
                    setTimeout(RandomColor1_2,0);
                    setTimeout(RandomColor1_2,500);
                    setTimeout(RandomColor1_2,100);
                    setTimeout(RandomColor1_2,1500);
                    setTimeout(RandomColor1_2,2000);
                    setTimeout(to1_2, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Третий.style.background != ''){
                if(Второй.style.background == Третий.style.background){
                    setTimeout(RandomColor2_3,0);
                    setTimeout(RandomColor2_3,500);
                    setTimeout(RandomColor2_3,100);
                    setTimeout(RandomColor2_3,1500);
                    setTimeout(RandomColor2_3,2000);
                    setTimeout(to2_3, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четвертый.style.background != ''){
                if(Второй.style.background == Четвертый.style.background){
                    setTimeout(RandomColor2_4,0);
                    setTimeout(RandomColor2_4,500);
                    setTimeout(RandomColor2_4,100);
                    setTimeout(RandomColor2_4,1500);
                    setTimeout(RandomColor2_4,2000);
                    setTimeout(to2_4, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пятый.style.background != ''){
                if(Второй.style.background == Пятый.style.background){
                    setTimeout(RandomColor2_5,0);
                    setTimeout(RandomColor2_5,500);
                    setTimeout(RandomColor2_5,100);
                    setTimeout(RandomColor2_5,1500);
                    setTimeout(RandomColor2_5,2000);
                    setTimeout(to2_5, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шестой.style.background != ''){
                if(Второй.style.background == Шестой.style.background){
                    setTimeout(RandomColor2_6,0);
                    setTimeout(RandomColor2_6,500);
                    setTimeout(RandomColor2_6,100);
                    setTimeout(RandomColor2_6,1500);
                    setTimeout(RandomColor2_6,2000);
                    setTimeout(to2_6, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Седьмой.style.background != ''){
                if(Второй.style.background == Седьмой.style.background){
                    setTimeout(RandomColor2_7,0);
                    setTimeout(RandomColor2_7,500);
                    setTimeout(RandomColor2_7,100);
                    setTimeout(RandomColor2_7,1500);
                    setTimeout(RandomColor2_7,2000);
                    setTimeout(to2_7, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Восьмой.style.background != ''){
                if(Второй.style.background == Восьмой.style.background){
                    setTimeout(RandomColor2_8,0);
                    setTimeout(RandomColor2_8,500);
                    setTimeout(RandomColor2_8,100);
                    setTimeout(RandomColor2_8,1500);
                    setTimeout(RandomColor2_8,2000);
                    setTimeout(to2_8, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Девятый.style.background != ''){
                if(Второй.style.background == Девятый.style.background){
                    setTimeout(RandomColor2_9,0);
                    setTimeout(RandomColor2_9,500);
                    setTimeout(RandomColor2_9,100);
                    setTimeout(RandomColor2_9,1500);
                    setTimeout(RandomColor2_9,2000);
                    setTimeout(to2_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Десятый.style.background != ''){
                if(Второй.style.background == Десятый.style.background){
                    setTimeout(RandomColor2_10,0);
                    setTimeout(RandomColor2_10,500);
                    setTimeout(RandomColor2_10,100);
                    setTimeout(RandomColor2_10,1500);
                    setTimeout(RandomColor2_10,2000);
                    setTimeout(to2_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Одинадцатый.style.background != ''){
                if(Второй.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor2_11,0);
                    setTimeout(RandomColor2_11,500);
                    setTimeout(RandomColor2_11,100);
                    setTimeout(RandomColor2_11,1500);
                    setTimeout(RandomColor2_11,2000);
                    setTimeout(to2_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Двенадцатый.style.background != ''){
                if(Второй.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor2_12,0);
                    setTimeout(RandomColor2_12,500);
                    setTimeout(RandomColor2_12,100);
                    setTimeout(RandomColor2_12,1500);
                    setTimeout(RandomColor2_12,2000);
                    setTimeout(to2_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Тренадцатый.style.background != ''){
                if(Второй.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor2_13,0);
                    setTimeout(RandomColor2_13,500);
                    setTimeout(RandomColor2_13,100);
                    setTimeout(RandomColor2_13,1500);
                    setTimeout(RandomColor2_13,2000);
                    setTimeout(to2_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четырнадцатый.style.background != ''){
                if(Второй.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor2_14,0);
                    setTimeout(RandomColor2_14,500);
                    setTimeout(RandomColor2_14,100);
                    setTimeout(RandomColor2_14,1500);
                    setTimeout(RandomColor2_14,2000);
                    setTimeout(to2_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пядтнадцатый.style.background != ''){
                if(Второй.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor2_15,0);
                    setTimeout(RandomColor2_15,500);
                    setTimeout(RandomColor2_15,100);
                    setTimeout(RandomColor2_15,1500);
                    setTimeout(RandomColor2_15,2000);
                    setTimeout(to2_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шертнадцатый.style.background != ''){
                if(Второй.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor2_16,0);
                    setTimeout(RandomColor2_16,500);
                    setTimeout(RandomColor2_16,100);
                    setTimeout(RandomColor2_16,1500);
                    setTimeout(RandomColor2_16,2000);
                    setTimeout(to2_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}

function three(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter3 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    if(counter < 3){
    Третий.style.background = randomColor3;
    divKing.style.borderColor = randomColor3;
        if(counter == 2){
            if(Первый.style.background != ''){
                if(Первый.style.background == Третий.style.background){
                    setTimeout(RandomColor1_3,0);
                    setTimeout(RandomColor1_3,500);
                    setTimeout(RandomColor1_3,100);
                    setTimeout(RandomColor1_3,1500);
                    setTimeout(RandomColor1_3,2000);
                    setTimeout(to1_3, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Второй.style.background != ''){
                if(Второй.style.background == Третий.style.background){
                    setTimeout(RandomColor2_3,0);
                    setTimeout(RandomColor2_3,500);
                    setTimeout(RandomColor2_3,100);
                    setTimeout(RandomColor2_3,1500);
                    setTimeout(RandomColor2_3,2000);
                    setTimeout(to2_3, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четвертый.style.background != ''){
                if(Третий.style.background == Четвертый.style.background){
                    setTimeout(RandomColor3_4,0);
                    setTimeout(RandomColor3_4,500);
                    setTimeout(RandomColor3_4,100);
                    setTimeout(RandomColor3_4,1500);
                    setTimeout(RandomColor3_4,2000);
                    setTimeout(to3_4, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пятый.style.background != ''){
                if(Третий.style.background == Пятый.style.background){
                    setTimeout(RandomColor3_5,0);
                    setTimeout(RandomColor3_5,500);
                    setTimeout(RandomColor3_5,100);
                    setTimeout(RandomColor3_5,1500);
                    setTimeout(RandomColor3_5,2000);
                    setTimeout(to3_5, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шестой.style.background != ''){
                if(Третий.style.background == Шестой.style.background){
                    setTimeout(RandomColor3_6,0);
                    setTimeout(RandomColor3_6,500);
                    setTimeout(RandomColor3_6,100);
                    setTimeout(RandomColor3_6,1500);
                    setTimeout(RandomColor3_6,2000);
                    setTimeout(to3_6, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Седьмой.style.background != ''){
                if(Третий.style.background == Седьмой.style.background){
                    setTimeout(RandomColor3_7,0);
                    setTimeout(RandomColor3_7,500);
                    setTimeout(RandomColor3_7,100);
                    setTimeout(RandomColor3_7,1500);
                    setTimeout(RandomColor3_7,2000);
                    setTimeout(to3_7, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Восьмой.style.background != ''){
                if(Третий.style.background == Восьмой.style.background){
                    setTimeout(RandomColor3_8,0);
                    setTimeout(RandomColor3_8,500);
                    setTimeout(RandomColor3_8,100);
                    setTimeout(RandomColor3_8,1500);
                    setTimeout(RandomColor3_8,2000);
                    setTimeout(to3_8, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Девятый.style.background != ''){
                if(Третий.style.background == Девятый.style.background){
                    setTimeout(RandomColor3_9,0);
                    setTimeout(RandomColor3_9,500);
                    setTimeout(RandomColor3_9,100);
                    setTimeout(RandomColor3_9,1500);
                    setTimeout(RandomColor3_9,2000);
                    setTimeout(to3_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Десятый.style.background != ''){
                if(Третий.style.background == Десятый.style.background){
                    setTimeout(RandomColor3_10,0);
                    setTimeout(RandomColor3_10,500);
                    setTimeout(RandomColor3_10,100);
                    setTimeout(RandomColor3_10,1500);
                    setTimeout(RandomColor3_10,2000);
                    setTimeout(to3_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Одинадцатый.style.background != ''){
                if(Третий.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor3_11,0);
                    setTimeout(RandomColor3_11,500);
                    setTimeout(RandomColor3_11,100);
                    setTimeout(RandomColor3_11,1500);
                    setTimeout(RandomColor3_11,2000);
                    setTimeout(to3_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Двенадцатый.style.background != ''){
                if(Третий.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor3_12,0);
                    setTimeout(RandomColor3_12,500);
                    setTimeout(RandomColor3_12,100);
                    setTimeout(RandomColor3_12,1500);
                    setTimeout(RandomColor3_12,2000);
                    setTimeout(to3_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Тренадцатый.style.background != ''){
                if(Третий.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor3_13,0);
                    setTimeout(RandomColor3_13,500);
                    setTimeout(RandomColor3_13,100);
                    setTimeout(RandomColor3_13,1500);
                    setTimeout(RandomColor3_13,2000);
                    setTimeout(to3_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четырнадцатый.style.background != ''){
                if(Третий.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor3_14,0);
                    setTimeout(RandomColor3_14,500);
                    setTimeout(RandomColor3_14,100);
                    setTimeout(RandomColor3_14,1500);
                    setTimeout(RandomColor3_14,2000);
                    setTimeout(to3_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пядтнадцатый.style.background != ''){
                if(Третий.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor3_15,0);
                    setTimeout(RandomColor3_15,500);
                    setTimeout(RandomColor3_15,100);
                    setTimeout(RandomColor3_15,1500);
                    setTimeout(RandomColor3_15,2000);
                    setTimeout(to3_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шертнадцатый.style.background != ''){
                if(Третий.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor3_16,0);
                    setTimeout(RandomColor3_16,500);
                    setTimeout(RandomColor3_16,100);
                    setTimeout(RandomColor3_16,1500);
                    setTimeout(RandomColor3_16,2000);
                    setTimeout(to3_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}

function four(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter4 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    if(counter < 3){
    Четвертый.style.background = randomColor4;
    divKing.style.borderColor = randomColor4;
        if(counter == 2){
            if(Первый.style.background != ''){
                if(Первый.style.background == Четвертый.style.background){
                    setTimeout(RandomColor1_4,0);
                    setTimeout(RandomColor1_4,500);
                    setTimeout(RandomColor1_4,100);
                    setTimeout(RandomColor1_4,1500);
                    setTimeout(RandomColor1_4,2000);
                    setTimeout(to1_4, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Второй.style.background != ''){
                if(Второй.style.background == Четвертый.style.background){
                    setTimeout(RandomColor2_4,0);
                    setTimeout(RandomColor2_4,500);
                    setTimeout(RandomColor2_4,100);
                    setTimeout(RandomColor2_4,1500);
                    setTimeout(RandomColor2_4,2000);
                    setTimeout(to2_4, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Третий.style.background != ''){
                if(Третий.style.background == Четвертый.style.background){
                    setTimeout(RandomColor3_4,0);
                    setTimeout(RandomColor3_4,500);
                    setTimeout(RandomColor3_4,100);
                    setTimeout(RandomColor3_4,1500);
                    setTimeout(RandomColor3_4,2000);
                    setTimeout(to3_4, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пятый.style.background != ''){
                if(Пятый.style.background == Четвертый.style.background){
                    setTimeout(RandomColor4_5,0);
                    setTimeout(RandomColor4_5,500);
                    setTimeout(RandomColor4_5,100);
                    setTimeout(RandomColor4_5,1500);
                    setTimeout(RandomColor4_5,2000);
                    setTimeout(to4_5, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шестой.style.background != ''){
                if(Шестой.style.background == Четвертый.style.background){
                    setTimeout(RandomColor4_6,0);
                    setTimeout(RandomColor4_6,500);
                    setTimeout(RandomColor4_6,100);
                    setTimeout(RandomColor4_6,1500);
                    setTimeout(RandomColor4_6,2000);
                    setTimeout(to4_6, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Седьмой.style.background != ''){
                if(Седьмой.style.background == Четвертый.style.background){
                    setTimeout(RandomColor4_7,0);
                    setTimeout(RandomColor4_7,500);
                    setTimeout(RandomColor4_7,100);
                    setTimeout(RandomColor4_7,1500);
                    setTimeout(RandomColor4_7,2000);
                    setTimeout(to4_7, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Восьмой.style.background != ''){
                if(Восьмой.style.background == Четвертый.style.background){
                    setTimeout(RandomColor4_8,0);
                    setTimeout(RandomColor4_8,500);
                    setTimeout(RandomColor4_8,100);
                    setTimeout(RandomColor4_8,1500);
                    setTimeout(RandomColor4_8,2000);
                    setTimeout(to4_8, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Девятый.style.background != ''){
                if(Девятый.style.background == Четвертый.style.background){
                    setTimeout(RandomColor4_9,0);
                    setTimeout(RandomColor4_9,500);
                    setTimeout(RandomColor4_9,100);
                    setTimeout(RandomColor4_9,1500);
                    setTimeout(RandomColor4_9,2000);
                    setTimeout(to4_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Десятый.style.background != ''){
                if(Десятый.style.background == Четвертый.style.background){
                    setTimeout(RandomColor4_10,0);
                    setTimeout(RandomColor4_10,500);
                    setTimeout(RandomColor4_10,100);
                    setTimeout(RandomColor4_10,1500);
                    setTimeout(RandomColor4_10,2000);
                    setTimeout(to4_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Одинадцатый.style.background != ''){
                if(Одинадцатый.style.background == Четвертый.style.background){
                    setTimeout(RandomColor4_11,0);
                    setTimeout(RandomColor4_11,500);
                    setTimeout(RandomColor4_11,100);
                    setTimeout(RandomColor4_11,1500);
                    setTimeout(RandomColor4_11,2000);
                    setTimeout(to4_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Двенадцатый.style.background != ''){
                if(Двенадцатый.style.background == Четвертый.style.background){
                    setTimeout(RandomColor4_12,0);
                    setTimeout(RandomColor4_12,500);
                    setTimeout(RandomColor4_12,100);
                    setTimeout(RandomColor4_12,1500);
                    setTimeout(RandomColor4_12,2000);
                    setTimeout(to4_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Тренадцатый.style.background != ''){
                if(Тренадцатый.style.background == Четвертый.style.background){
                    setTimeout(RandomColor4_13,0);
                    setTimeout(RandomColor4_13,500);
                    setTimeout(RandomColor4_13,100);
                    setTimeout(RandomColor4_13,1500);
                    setTimeout(RandomColor4_13,2000);
                    setTimeout(to4_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четырнадцатый.style.background != ''){
                if(Четырнадцатый.style.background == Четвертый.style.background){
                    setTimeout(RandomColor4_14,0);
                    setTimeout(RandomColor4_14,500);
                    setTimeout(RandomColor4_14,100);
                    setTimeout(RandomColor4_14,1500);
                    setTimeout(RandomColor4_14,2000);
                    setTimeout(to4_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пядтнадцатый.style.background != ''){
                if(Пядтнадцатый.style.background == Четвертый.style.background){
                    setTimeout(RandomColor4_15,0);
                    setTimeout(RandomColor4_15,500);
                    setTimeout(RandomColor4_15,100);
                    setTimeout(RandomColor4_15,1500);
                    setTimeout(RandomColor4_15,2000);
                    setTimeout(to4_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шертнадцатый.style.background != ''){
                if(Шертнадцатый.style.background == Четвертый.style.background){
                    setTimeout(RandomColor4_16,0);
                    setTimeout(RandomColor4_16,500);
                    setTimeout(RandomColor4_16,100);
                    setTimeout(RandomColor4_16,1500);
                    setTimeout(RandomColor4_16,2000);
                    setTimeout(to4_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}

function five(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter5 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    console.log(counter);
    if(counter < 3){
    Пятый.style.background = randomColor5;
    divKing.style.borderColor = randomColor5;
        if(counter == 2){
            if(Первый.style.background != ''){
                if(Первый.style.background == Пятый.style.background){
                    setTimeout(RandomColor1_5,0);
                    setTimeout(RandomColor1_5,500);
                    setTimeout(RandomColor1_5,100);
                    setTimeout(RandomColor1_5,1500);
                    setTimeout(RandomColor1_5,2000);
                    setTimeout(to1_5, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Второй.style.background != ''){
                if(Второй.style.background == Пятый.style.background){
                    setTimeout(RandomColor2_5,0);
                    setTimeout(RandomColor2_5,500);
                    setTimeout(RandomColor2_5,100);
                    setTimeout(RandomColor2_5,1500);
                    setTimeout(RandomColor2_5,2000);
                    setTimeout(to2_5, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Третий.style.background != ''){
                if(Третий.style.background == Пятый.style.background){
                    setTimeout(RandomColor3_5,0);
                    setTimeout(RandomColor3_5,500);
                    setTimeout(RandomColor3_5,100);
                    setTimeout(RandomColor3_5,1500);
                    setTimeout(RandomColor3_5,2000);
                    setTimeout(to3_5, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четвертый.style.background != ''){
                if(Четвертый.style.background == Пятый.style.background){
                    setTimeout(RandomColor4_5,0);
                    setTimeout(RandomColor4_5,500);
                    setTimeout(RandomColor4_5,100);
                    setTimeout(RandomColor4_5,1500);
                    setTimeout(RandomColor4_5,2000);
                    setTimeout(to4_5, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шестой.style.background != ''){
                if(Шестой.style.background == Пятый.style.background){
                    setTimeout(RandomColor5_6,0);
                    setTimeout(RandomColor5_6,500);
                    setTimeout(RandomColor5_6,100);
                    setTimeout(RandomColor5_6,1500);
                    setTimeout(RandomColor5_6,2000);
                    setTimeout(to5_6, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Седьмой.style.background != ''){
                if(Седьмой.style.background == Пятый.style.background){
                    setTimeout(RandomColor5_7,0);
                    setTimeout(RandomColor5_7,500);
                    setTimeout(RandomColor5_7,100);
                    setTimeout(RandomColor5_7,1500);
                    setTimeout(RandomColor5_7,2000);
                    setTimeout(to5_7, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Восьмой.style.background != ''){
                if(Восьмой.style.background == Пятый.style.background){
                    setTimeout(RandomColor5_8,0);
                    setTimeout(RandomColor5_8,500);
                    setTimeout(RandomColor5_8,100);
                    setTimeout(RandomColor5_8,1500);
                    setTimeout(RandomColor5_8,2000);
                    setTimeout(to5_8, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Девятый.style.background != ''){
                if(Девятый.style.background == Пятый.style.background){
                    setTimeout(RandomColor5_9,0);
                    setTimeout(RandomColor5_9,500);
                    setTimeout(RandomColor5_9,100);
                    setTimeout(RandomColor5_9,1500);
                    setTimeout(RandomColor5_9,2000);
                    setTimeout(to5_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Десятый.style.background != ''){
                if(Десятый.style.background == Пятый.style.background){
                    setTimeout(RandomColor5_10,0);
                    setTimeout(RandomColor5_10,500);
                    setTimeout(RandomColor5_10,100);
                    setTimeout(RandomColor5_10,1500);
                    setTimeout(RandomColor5_10,2000);
                    setTimeout(to5_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Одинадцатый.style.background != ''){
                if(Одинадцатый.style.background == Пятый.style.background){
                    setTimeout(RandomColor5_11,0);
                    setTimeout(RandomColor5_11,500);
                    setTimeout(RandomColor5_11,100);
                    setTimeout(RandomColor5_11,1500);
                    setTimeout(RandomColor5_11,2000);
                    setTimeout(to5_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Двенадцатый.style.background != ''){
                if(Двенадцатый.style.background == Пятый.style.background){
                    setTimeout(RandomColor5_12,0);
                    setTimeout(RandomColor5_12,500);
                    setTimeout(RandomColor5_12,100);
                    setTimeout(RandomColor5_12,1500);
                    setTimeout(RandomColor5_12,2000);
                    setTimeout(to5_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Тренадцатый.style.background != ''){
                if(Тренадцатый.style.background == Пятый.style.background){
                    setTimeout(RandomColor5_13,0);
                    setTimeout(RandomColor5_13,500);
                    setTimeout(RandomColor5_13,100);
                    setTimeout(RandomColor5_13,1500);
                    setTimeout(RandomColor5_13,2000);
                    setTimeout(to5_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четырнадцатый.style.background != ''){
                if(Четырнадцатый.style.background == Пятый.style.background){
                    setTimeout(RandomColor5_14,0);
                    setTimeout(RandomColor5_14,500);
                    setTimeout(RandomColor5_14,100);
                    setTimeout(RandomColor5_14,1500);
                    setTimeout(RandomColor5_14,2000);
                    setTimeout(to5_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пядтнадцатый.style.background != ''){
                if(Пядтнадцатый.style.background == Пятый.style.background){
                    setTimeout(RandomColor5_15,0);
                    setTimeout(RandomColor5_15,500);
                    setTimeout(RandomColor5_15,100);
                    setTimeout(RandomColor5_15,1500);
                    setTimeout(RandomColor5_15,2000);
                    setTimeout(to5_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шертнадцатый.style.background != ''){
                if(Шертнадцатый.style.background == Пятый.style.background){
                    setTimeout(RandomColor5_16,0);
                    setTimeout(RandomColor5_16,500);
                    setTimeout(RandomColor5_16,100);
                    setTimeout(RandomColor5_16,1500);
                    setTimeout(RandomColor5_16,2000);
                    setTimeout(to5_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}

function six(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter6 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    if(counter < 3){
    Шестой.style.background = randomColor6;
    divKing.style.borderColor = randomColor6;
        if(counter == 2){
            if(Первый.style.background != ''){
                if(Первый.style.background == Шестой.style.background){
                    setTimeout(RandomColor1_6,0);
                    setTimeout(RandomColor1_6,500);
                    setTimeout(RandomColor1_6,100);
                    setTimeout(RandomColor1_6,1500);
                    setTimeout(RandomColor1_6,2000);
                    setTimeout(to1_6, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Второй.style.background != ''){
                if(Второй.style.background == Шестой.style.background){
                    setTimeout(RandomColor2_6,0);
                    setTimeout(RandomColor2_6,500);
                    setTimeout(RandomColor2_6,100);
                    setTimeout(RandomColor2_6,1500);
                    setTimeout(RandomColor2_6,2000);
                    setTimeout(to2_6, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Третий.style.background != ''){
                if(Третий.style.background == Шестой.style.background){
                    setTimeout(RandomColor3_6,0);
                    setTimeout(RandomColor3_6,500);
                    setTimeout(RandomColor3_6,100);
                    setTimeout(RandomColor3_6,1500);
                    setTimeout(RandomColor3_6,2000);
                    setTimeout(to3_6, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четвертый.style.background != ''){
                if(Четвертый.style.background == Шестой.style.background){
                    setTimeout(RandomColor4_6,0);
                    setTimeout(RandomColor4_6,500);
                    setTimeout(RandomColor4_6,100);
                    setTimeout(RandomColor4_6,1500);
                    setTimeout(RandomColor4_6,2000);
                    setTimeout(to4_6, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пятый.style.background != ''){
                if(Пятый.style.background == Шестой.style.background){
                    setTimeout(RandomColor5_6,0);
                    setTimeout(RandomColor5_6,500);
                    setTimeout(RandomColor5_6,100);
                    setTimeout(RandomColor5_6,1500);
                    setTimeout(RandomColor5_6,2000);
                    setTimeout(to5_6, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Седьмой.style.background != ''){
                if(Седьмой.style.background == Шестой.style.background){
                    setTimeout(RandomColor6_7,0);
                    setTimeout(RandomColor6_7,500);
                    setTimeout(RandomColor6_7,100);
                    setTimeout(RandomColor6_7,1500);
                    setTimeout(RandomColor6_7,2000);
                    setTimeout(to6_7, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Восьмой.style.background != ''){
                if(Восьмой.style.background == Шестой.style.background){
                    setTimeout(RandomColor6_8,0);
                    setTimeout(RandomColor6_8,500);
                    setTimeout(RandomColor6_8,100);
                    setTimeout(RandomColor6_8,1500);
                    setTimeout(RandomColor6_8,2000);
                    setTimeout(to6_8, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Девятый.style.background != ''){
                if(Девятый.style.background == Шестой.style.background){
                    setTimeout(RandomColor6_9,0);
                    setTimeout(RandomColor6_9,500);
                    setTimeout(RandomColor6_9,100);
                    setTimeout(RandomColor6_9,1500);
                    setTimeout(RandomColor6_9,2000);
                    setTimeout(to6_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Десятый.style.background != ''){
                if(Десятый.style.background == Шестой.style.background){
                    setTimeout(RandomColor6_10,0);
                    setTimeout(RandomColor6_10,500);
                    setTimeout(RandomColor6_10,100);
                    setTimeout(RandomColor6_10,1500);
                    setTimeout(RandomColor6_10,2000);
                    setTimeout(to6_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Одинадцатый.style.background != ''){
                if(Одинадцатый.style.background == Шестой.style.background){
                    setTimeout(RandomColor6_11,0);
                    setTimeout(RandomColor6_11,500);
                    setTimeout(RandomColor6_11,100);
                    setTimeout(RandomColor6_11,1500);
                    setTimeout(RandomColor6_11,2000);
                    setTimeout(to6_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Двенадцатый.style.background != ''){
                if(Двенадцатый.style.background == Шестой.style.background){
                    setTimeout(RandomColor6_12,0);
                    setTimeout(RandomColor6_12,500);
                    setTimeout(RandomColor6_12,100);
                    setTimeout(RandomColor6_12,1500);
                    setTimeout(RandomColor6_12,2000);
                    setTimeout(to6_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Тренадцатый.style.background != ''){
                if(Тренадцатый.style.background == Шестой.style.background){
                    setTimeout(RandomColor6_13,0);
                    setTimeout(RandomColor6_13,500);
                    setTimeout(RandomColor6_13,100);
                    setTimeout(RandomColor6_13,1500);
                    setTimeout(RandomColor6_13,2000);
                    setTimeout(to6_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четырнадцатый.style.background != ''){
                if(Четырнадцатый.style.background == Шестой.style.background){
                    setTimeout(RandomColor6_14,0);
                    setTimeout(RandomColor6_14,500);
                    setTimeout(RandomColor6_14,100);
                    setTimeout(RandomColor6_14,1500);
                    setTimeout(RandomColor6_14,2000);
                    setTimeout(to6_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пядтнадцатый.style.background != ''){
                if(Пядтнадцатый.style.background == Шестой.style.background){
                    setTimeout(RandomColor6_15,0);
                    setTimeout(RandomColor6_15,500);
                    setTimeout(RandomColor6_15,100);
                    setTimeout(RandomColor6_15,1500);
                    setTimeout(RandomColor6_15,2000);
                    setTimeout(to6_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шертнадцатый.style.background != ''){
                if(Шертнадцатый.style.background == Шестой.style.background){
                    setTimeout(RandomColor6_16,0);
                    setTimeout(RandomColor6_16,500);
                    setTimeout(RandomColor6_16,100);
                    setTimeout(RandomColor6_16,1500);
                    setTimeout(RandomColor6_16,2000);
                    setTimeout(to6_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}

function seven(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter7 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    if(counter < 3){
    Седьмой.style.background = randomColor7;
    divKing.style.borderColor = randomColor7;
        if(counter == 2){
            if(Первый.style.background != ''){
                if(Первый.style.background == Седьмой.style.background){
                    setTimeout(RandomColor1_7,0);
                    setTimeout(RandomColor1_7,500);
                    setTimeout(RandomColor1_7,100);
                    setTimeout(RandomColor1_7,500);
                    setTimeout(RandomColor1_7,2000);
                    setTimeout(to1_7, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Второй.style.background != ''){
                if(Второй.style.background == Седьмой.style.background){
                    setTimeout(RandomColor2_7,0);
                    setTimeout(RandomColor2_7,500);
                    setTimeout(RandomColor2_7,100);
                    setTimeout(RandomColor2_7,1500);
                    setTimeout(RandomColor2_7,2000);
                    setTimeout(to2_7, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Третий.style.background != ''){
                if(Третий.style.background == Седьмой.style.background){
                    setTimeout(RandomColor3_7,0);
                    setTimeout(RandomColor3_7,500);
                    setTimeout(RandomColor3_7,100);
                    setTimeout(RandomColor3_7,1500);
                    setTimeout(RandomColor3_7,2000);
                    setTimeout(to3_7, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четвертый.style.background != ''){
                if(Четвертый.style.background == Седьмой.style.background){
                    setTimeout(RandomColor4_7,0);
                    setTimeout(RandomColor4_7,500);
                    setTimeout(RandomColor4_7,100);
                    setTimeout(RandomColor4_7,1500);
                    setTimeout(RandomColor4_7,2000);
                    setTimeout(to4_7, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пятый.style.background != ''){
                if(Пятый.style.background == Седьмой.style.background){
                    setTimeout(RandomColor5_7,0);
                    setTimeout(RandomColor5_7,500);
                    setTimeout(RandomColor5_7,100);
                    setTimeout(RandomColor5_7,1500);
                    setTimeout(RandomColor5_7,2000);
                    setTimeout(to5_7, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шестой.style.background != ''){
                if(Шестой.style.background == Седьмой.style.background){
                    setTimeout(RandomColor6_7,0);
                    setTimeout(RandomColor6_7,500);
                    setTimeout(RandomColor6_7,100);
                    setTimeout(RandomColor6_7,1500);
                    setTimeout(RandomColor6_7,2000);
                    setTimeout(to6_7, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Восьмой.style.background != ''){
                if(Восьмой.style.background == Седьмой.style.background){
                    setTimeout(RandomColor7_8,0);
                    setTimeout(RandomColor7_8,500);
                    setTimeout(RandomColor7_8,100);
                    setTimeout(RandomColor7_8,1500);
                    setTimeout(RandomColor7_8,2000);
                    setTimeout(to7_8, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Девятый.style.background != ''){
                if(Девятый.style.background == Седьмой.style.background){
                    setTimeout(RandomColor7_9,0);
                    setTimeout(RandomColor7_9,500);
                    setTimeout(RandomColor7_9,100);
                    setTimeout(RandomColor7_9,1500);
                    setTimeout(RandomColor7_9,2000);
                    setTimeout(to7_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Десятый.style.background != ''){
                if(Десятый.style.background == Седьмой.style.background){
                    setTimeout(RandomColor7_10,0);
                    setTimeout(RandomColor7_10,500);
                    setTimeout(RandomColor7_10,100);
                    setTimeout(RandomColor7_10,1500);
                    setTimeout(RandomColor7_10,2000);
                    setTimeout(to7_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Одинадцатый.style.background != ''){
                if(Одинадцатый.style.background == Седьмой.style.background){
                    setTimeout(RandomColor7_11,0);
                    setTimeout(RandomColor7_11,500);
                    setTimeout(RandomColor7_11,100);
                    setTimeout(RandomColor7_11,1500);
                    setTimeout(RandomColor7_11,2000);
                    setTimeout(to7_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Двенадцатый.style.background != ''){
                if(Двенадцатый.style.background == Седьмой.style.background){
                    setTimeout(RandomColor7_12,0);
                    setTimeout(RandomColor7_12,500);
                    setTimeout(RandomColor7_12,100);
                    setTimeout(RandomColor7_12,1500);
                    setTimeout(RandomColor7_12,2000);
                    setTimeout(to7_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Тренадцатый.style.background != ''){
                if(Тренадцатый.style.background == Седьмой.style.background){
                    setTimeout(RandomColor7_13,0);
                    setTimeout(RandomColor7_13,500);
                    setTimeout(RandomColor7_13,100);
                    setTimeout(RandomColor7_13,1500);
                    setTimeout(RandomColor7_13,2000);
                    setTimeout(to7_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четырнадцатый.style.background != ''){
                if(Четырнадцатый.style.background == Седьмой.style.background){
                    setTimeout(RandomColor7_14,0);
                    setTimeout(RandomColor7_14,500);
                    setTimeout(RandomColor7_14,100);
                    setTimeout(RandomColor7_14,1500);
                    setTimeout(RandomColor7_14,2000);
                    setTimeout(to7_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пядтнадцатый.style.background != ''){
                if(Пядтнадцатый.style.background == Седьмой.style.background){
                    setTimeout(RandomColor7_15,0);
                    setTimeout(RandomColor7_15,500);
                    setTimeout(RandomColor7_15,100);
                    setTimeout(RandomColor7_15,1500);
                    setTimeout(RandomColor7_15,2000);
                    setTimeout(to7_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шертнадцатый.style.background != ''){
                if(Шертнадцатый.style.background == Седьмой.style.background){
                    setTimeout(RandomColor7_16,0);
                    setTimeout(RandomColor7_16,500);
                    setTimeout(RandomColor7_16,100);
                    setTimeout(RandomColor7_16,1500);
                    setTimeout(RandomColor7_16,2000);
                    setTimeout(to7_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}

function eight(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter8 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    if(counter < 3){
    Восьмой.style.background = randomColor8;
    divKing.style.borderColor = randomColor8;
        if(counter == 2){
            if(Первый.style.background != ''){
                if(Первый.style.background == Восьмой.style.background){
                    setTimeout(RandomColor1_8,0);
                    setTimeout(RandomColor1_8,500);
                    setTimeout(RandomColor1_8,100);
                    setTimeout(RandomColor1_8,1500);
                    setTimeout(RandomColor1_8,2000);
                    setTimeout(to1_8, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Второй.style.background != ''){
                if(Второй.style.background == Восьмой.style.background){
                    setTimeout(RandomColor2_8,0);
                    setTimeout(RandomColor2_8,500);
                    setTimeout(RandomColor2_8,100);
                    setTimeout(RandomColor2_8,1500);
                    setTimeout(RandomColor2_8,2000);
                    setTimeout(to2_8, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Третий.style.background != ''){
                if(Третий.style.background == Восьмой.style.background){
                    setTimeout(RandomColor3_8,0);
                    setTimeout(RandomColor3_8,500);
                    setTimeout(RandomColor3_8,100);
                    setTimeout(RandomColor3_8,1500);
                    setTimeout(RandomColor3_8,2000);
                    setTimeout(to3_8, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четвертый.style.background != ''){
                if(Четвертый.style.background == Восьмой.style.background){
                    setTimeout(RandomColor4_8,0);
                    setTimeout(RandomColor4_8,500);
                    setTimeout(RandomColor4_8,100);
                    setTimeout(RandomColor4_8,1500);
                    setTimeout(RandomColor4_8,2000);
                    setTimeout(to4_8, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пятый.style.background != ''){
                if(Пятый.style.background == Восьмой.style.background){
                    setTimeout(RandomColor5_8,0);
                    setTimeout(RandomColor5_8,500);
                    setTimeout(RandomColor5_8,100);
                    setTimeout(RandomColor5_8,1500);
                    setTimeout(RandomColor5_8,2000);
                    setTimeout(to5_8, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шестой.style.background != ''){
                if(Шестой.style.background == Восьмой.style.background){
                    setTimeout(RandomColor6_8,0);
                    setTimeout(RandomColor6_8,500);
                    setTimeout(RandomColor6_8,100);
                    setTimeout(RandomColor6_8,1500);
                    setTimeout(RandomColor6_8,2000);
                    setTimeout(to6_8, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Седьмой.style.background != ''){
                if(Седьмой.style.background == Восьмой.style.background){
                    setTimeout(RandomColor7_8,0);
                    setTimeout(RandomColor7_8,500);
                    setTimeout(RandomColor7_8,100);
                    setTimeout(RandomColor7_8,1500);
                    setTimeout(RandomColor7_8,2000);
                    setTimeout(to7_8, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Девятый.style.background != ''){
                if(Девятый.style.background == Восьмой.style.background){
                    setTimeout(RandomColor8_9,0);
                    setTimeout(RandomColor8_9,500);
                    setTimeout(RandomColor8_9,100);
                    setTimeout(RandomColor8_9,1500);
                    setTimeout(RandomColor8_9,2000);
                    setTimeout(to8_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Десятый.style.background != ''){
                if(Десятый.style.background == Восьмой.style.background){
                    setTimeout(RandomColor8_10,0);
                    setTimeout(RandomColor8_10,500);
                    setTimeout(RandomColor8_10,100);
                    setTimeout(RandomColor8_10,1500);
                    setTimeout(RandomColor8_10,2000);
                    setTimeout(to8_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Одинадцатый.style.background != ''){
                if(Одинадцатый.style.background == Восьмой.style.background){
                    setTimeout(RandomColor8_11,0);
                    setTimeout(RandomColor8_11,500);
                    setTimeout(RandomColor8_11,100);
                    setTimeout(RandomColor8_11,1500);
                    setTimeout(RandomColor8_11,2000);
                    setTimeout(to8_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Двенадцатый.style.background != ''){
                if(Двенадцатый.style.background == Восьмой.style.background){
                    setTimeout(RandomColor8_12,0);
                    setTimeout(RandomColor8_12,500);
                    setTimeout(RandomColor8_12,100);
                    setTimeout(RandomColor8_12,1500);
                    setTimeout(RandomColor8_12,2000);
                    setTimeout(to8_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Тренадцатый.style.background != ''){
                if(Тренадцатый.style.background == Восьмой.style.background){
                    setTimeout(RandomColor8_13,0);
                    setTimeout(RandomColor8_13,500);
                    setTimeout(RandomColor8_13,100);
                    setTimeout(RandomColor8_13,1500);
                    setTimeout(RandomColor8_13,2000);
                    setTimeout(to8_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четырнадцатый.style.background != ''){
                if(Четырнадцатый.style.background == Восьмой.style.background){
                    setTimeout(RandomColor8_14,0);
                    setTimeout(RandomColor8_14,500);
                    setTimeout(RandomColor8_14,100);
                    setTimeout(RandomColor8_14,1500);
                    setTimeout(RandomColor8_14,2000);
                    setTimeout(to8_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пядтнадцатый.style.background != ''){
                if(Пядтнадцатый.style.background == Восьмой.style.background){
                    setTimeout(RandomColor8_15,0);
                    setTimeout(RandomColor8_15,500);
                    setTimeout(RandomColor8_15,100);
                    setTimeout(RandomColor8_15,1500);
                    setTimeout(RandomColor8_15,2000);
                    setTimeout(to8_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шертнадцатый.style.background != ''){
                if(Шертнадцатый.style.background == Восьмой.style.background){
                    setTimeout(RandomColor8_16,0);
                    setTimeout(RandomColor8_16,500);
                    setTimeout(RandomColor8_16,100);
                    setTimeout(RandomColor8_16,1500);
                    setTimeout(RandomColor8_16,2000);
                    setTimeout(to8_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}

function nine(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter9 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    if(counter < 3){
    Девятый.style.background = randomColor9;
    divKing.style.borderColor = randomColor9;
        if(counter == 2){
            if(Первый.style.background != ''){
                if(Первый.style.background == Девятый.style.background){
                    setTimeout(RandomColor1_9,0);
                    setTimeout(RandomColor1_9,500);
                    setTimeout(RandomColor1_9,100);
                    setTimeout(RandomColor1_9,1500);
                    setTimeout(RandomColor1_9,2000);
                    setTimeout(to1_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Второй.style.background != ''){
                if(Второй.style.background == Девятый.style.background){
                    setTimeout(RandomColor2_9,0);
                    setTimeout(RandomColor2_9,500);
                    setTimeout(RandomColor2_9,100);
                    setTimeout(RandomColor2_9,1500);
                    setTimeout(RandomColor2_9,2000);
                    setTimeout(to2_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Третий.style.background != ''){
                if(Третий.style.background == Девятый.style.background){
                    setTimeout(RandomColor3_9,0);
                    setTimeout(RandomColor3_9,500);
                    setTimeout(RandomColor3_9,100);
                    setTimeout(RandomColor3_9,1500);
                    setTimeout(RandomColor3_9,2000);
                    setTimeout(to3_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четвертый.style.background != ''){
                if(Четвертый.style.background == Девятый.style.background){
                    setTimeout(RandomColor4_9,0);
                    setTimeout(RandomColor4_9,500);
                    setTimeout(RandomColor4_9,100);
                    setTimeout(RandomColor4_9,1500);
                    setTimeout(RandomColor4_9,2000);
                    setTimeout(to4_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пятый.style.background != ''){
                if(Пятый.style.background == Девятый.style.background){
                    setTimeout(RandomColor5_9,0);
                    setTimeout(RandomColor5_9,500);
                    setTimeout(RandomColor5_9,100);
                    setTimeout(RandomColor5_9,1500);
                    setTimeout(RandomColor5_9,2000);
                    setTimeout(to5_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шестой.style.background != ''){
                if(Шестой.style.background == Девятый.style.background){
                    setTimeout(RandomColor6_9,0);
                    setTimeout(RandomColor6_9,500);
                    setTimeout(RandomColor6_9,100);
                    setTimeout(RandomColor6_9,1500);
                    setTimeout(RandomColor6_9,2000);
                    setTimeout(to6_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Седьмой.style.background != ''){
                if(Седьмой.style.background == Девятый.style.background){
                    setTimeout(RandomColor7_9,0);
                    setTimeout(RandomColor7_9,500);
                    setTimeout(RandomColor7_9,100);
                    setTimeout(RandomColor7_9,1500);
                    setTimeout(RandomColor7_9,2000);
                    setTimeout(to7_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Восьмой.style.background != ''){
                if(Восьмой.style.background == Девятый.style.background){
                    setTimeout(RandomColor8_9,0);
                    setTimeout(RandomColor8_9,500);
                    setTimeout(RandomColor8_9,100);
                    setTimeout(RandomColor8_9,1500);
                    setTimeout(RandomColor8_9,2000);
                    setTimeout(to8_9, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Десятый.style.background != ''){
                if(Десятый.style.background == Девятый.style.background){
                    setTimeout(RandomColor9_10,0);
                    setTimeout(RandomColor9_10,500);
                    setTimeout(RandomColor9_10,100);
                    setTimeout(RandomColor9_10,1500);
                    setTimeout(RandomColor9_10,2000);
                    setTimeout(to9_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Одинадцатый.style.background != ''){
                if(Одинадцатый.style.background == Девятый.style.background){
                    setTimeout(RandomColor9_11,0);
                    setTimeout(RandomColor9_11,500);
                    setTimeout(RandomColor9_11,100);
                    setTimeout(RandomColor9_11,1500);
                    setTimeout(RandomColor9_11,2000);
                    setTimeout(to9_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Двенадцатый.style.background != ''){
                if(Двенадцатый.style.background == Девятый.style.background){
                    setTimeout(RandomColor9_12,0);
                    setTimeout(RandomColor9_12,500);
                    setTimeout(RandomColor9_12,100);
                    setTimeout(RandomColor9_12,1500);
                    setTimeout(RandomColor9_12,2000);
                    setTimeout(to9_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Тренадцатый.style.background != ''){
                if(Тренадцатый.style.background == Девятый.style.background){
                    setTimeout(RandomColor9_13,0);
                    setTimeout(RandomColor9_13,500);
                    setTimeout(RandomColor9_13,100);
                    setTimeout(RandomColor9_13,1500);
                    setTimeout(RandomColor9_13,2000);
                    setTimeout(to9_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четырнадцатый.style.background != ''){
                if(Четырнадцатый.style.background == Девятый.style.background){
                    setTimeout(RandomColor9_14,0);
                    setTimeout(RandomColor9_14,500);
                    setTimeout(RandomColor9_14,100);
                    setTimeout(RandomColor9_14,1500);
                    setTimeout(RandomColor9_14,2000);
                    setTimeout(to9_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пядтнадцатый.style.background != ''){
                if(Пядтнадцатый.style.background == Девятый.style.background){
                    setTimeout(RandomColor9_15,0);
                    setTimeout(RandomColor9_15,500);
                    setTimeout(RandomColor9_15,100);
                    setTimeout(RandomColor9_15,1500);
                    setTimeout(RandomColor9_15,2000);
                    setTimeout(to9_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шертнадцатый.style.background != ''){
                if(Шертнадцатый.style.background == Девятый.style.background){
                    setTimeout(RandomColor9_16,0);
                    setTimeout(RandomColor9_16,500);
                    setTimeout(RandomColor9_16,100);
                    setTimeout(RandomColor9_16,1500);
                    setTimeout(RandomColor9_16,2000);
                    setTimeout(to9_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}

function ten(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter10 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    if(counter < 3){
    Десятый.style.background = randomColor10;
    divKing.style.borderColor = randomColor10;
        if(counter == 2){
            if(Первый.style.background != ''){
                if(Первый.style.background == Десятый.style.background){
                    setTimeout(RandomColor1_10,0);
                    setTimeout(RandomColor1_10,500);
                    setTimeout(RandomColor1_10,100);
                    setTimeout(RandomColor1_10,1500);
                    setTimeout(RandomColor1_10,2000);
                    setTimeout(to1_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Второй.style.background != ''){
                if(Второй.style.background == Десятый.style.background){
                    setTimeout(RandomColor2_10,0);
                    setTimeout(RandomColor2_10,500);
                    setTimeout(RandomColor2_10,100);
                    setTimeout(RandomColor2_10,1500);
                    setTimeout(RandomColor2_10,2000);
                    setTimeout(to2_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Третий.style.background != ''){
                if(Третий.style.background == Десятый.style.background){
                    setTimeout(RandomColor3_10,0);
                    setTimeout(RandomColor3_10,500);
                    setTimeout(RandomColor3_10,100);
                    setTimeout(RandomColor3_10,1500);
                    setTimeout(RandomColor3_10,2000);
                    setTimeout(to3_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четвертый.style.background != ''){
                if(Четвертый.style.background == Десятый.style.background){
                    setTimeout(RandomColor4_10,0);
                    setTimeout(RandomColor4_10,500);
                    setTimeout(RandomColor4_10,100);
                    setTimeout(RandomColor4_10,1500);
                    setTimeout(RandomColor4_10,2000);
                    setTimeout(to4_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пятый.style.background != ''){
                if(Пятый.style.background == Десятый.style.background){
                    setTimeout(RandomColor5_10,0);
                    setTimeout(RandomColor5_10,500);
                    setTimeout(RandomColor5_10,100);
                    setTimeout(RandomColor5_10,1500);
                    setTimeout(RandomColor5_10,2000);
                    setTimeout(to5_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шестой.style.background != ''){
                if(Шестой.style.background == Десятый.style.background){
                    setTimeout(RandomColor6_10,0);
                    setTimeout(RandomColor6_10,500);
                    setTimeout(RandomColor6_10,100);
                    setTimeout(RandomColor6_10,1500);
                    setTimeout(RandomColor6_10,2000);
                    setTimeout(to6_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Седьмой.style.background != ''){
                if(Седьмой.style.background == Десятый.style.background){
                    setTimeout(RandomColor7_10,0);
                    setTimeout(RandomColor7_10,500);
                    setTimeout(RandomColor7_10,100);
                    setTimeout(RandomColor7_10,1500);
                    setTimeout(RandomColor7_10,2000);
                    setTimeout(to7_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Восьмой.style.background != ''){
                if(Восьмой.style.background == Десятый.style.background){
                    setTimeout(RandomColor8_10,0);
                    setTimeout(RandomColor8_10,500);
                    setTimeout(RandomColor8_10,100);
                    setTimeout(RandomColor8_10,1500);
                    setTimeout(RandomColor8_10,2000);
                    setTimeout(to8_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Девятый.style.background != ''){
                if(Девятый.style.background == Десятый.style.background){
                    setTimeout(RandomColor9_10,0);
                    setTimeout(RandomColor9_10,500);
                    setTimeout(RandomColor9_10,100);
                    setTimeout(RandomColor9_10,1500);
                    setTimeout(RandomColor9_10,2000);
                    setTimeout(to9_10, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Одинадцатый.style.background != ''){
                if(Одинадцатый.style.background == Десятый.style.background){
                    setTimeout(RandomColor10_11,0);
                    setTimeout(RandomColor10_11,500);
                    setTimeout(RandomColor10_11,100);
                    setTimeout(RandomColor10_11,1500);
                    setTimeout(RandomColor10_11,2000);
                    setTimeout(to10_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Двенадцатый.style.background != ''){
                if(Двенадцатый.style.background == Десятый.style.background){
                    setTimeout(RandomColor10_12,0);
                    setTimeout(RandomColor10_12,500);
                    setTimeout(RandomColor10_12,100);
                    setTimeout(RandomColor10_12,1500);
                    setTimeout(RandomColor10_12,2000);
                    setTimeout(to10_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Тренадцатый.style.background != ''){
                if(Тренадцатый.style.background == Десятый.style.background){
                    setTimeout(RandomColor10_13,0);
                    setTimeout(RandomColor10_13,500);
                    setTimeout(RandomColor10_13,100);
                    setTimeout(RandomColor10_13,1500);
                    setTimeout(RandomColor10_13,2000);
                    setTimeout(to10_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четырнадцатый.style.background != ''){
                if(Четырнадцатый.style.background == Десятый.style.background){
                    setTimeout(RandomColor10_14,0);
                    setTimeout(RandomColor10_14,500);
                    setTimeout(RandomColor10_14,100);
                    setTimeout(RandomColor10_14,1500);
                    setTimeout(RandomColor10_14,2000);
                    setTimeout(to10_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пядтнадцатый.style.background != ''){
                if(Пядтнадцатый.style.background == Десятый.style.background){
                    setTimeout(RandomColor10_15,0);
                    setTimeout(RandomColor10_15,500);
                    setTimeout(RandomColor10_15,100);
                    setTimeout(RandomColor10_15,1500);
                    setTimeout(RandomColor10_15,2000);
                    setTimeout(to10_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шертнадцатый.style.background != ''){
                if(Шертнадцатый.style.background == Десятый.style.background){
                    setTimeout(RandomColor10_16,0);
                    setTimeout(RandomColor10_16,500);
                    setTimeout(RandomColor10_16,100);
                    setTimeout(RandomColor10_16,1500);
                    setTimeout(RandomColor10_16,2000);
                    setTimeout(to10_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}

function eleven(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter11 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    if(counter < 3){
    Одинадцатый.style.background = randomColor11;
    divKing.style.borderColor = randomColor11;
        if(counter == 2){
            if(Первый.style.background != ''){
                if(Первый.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor1_11,0);
                    setTimeout(RandomColor1_11,500);
                    setTimeout(RandomColor1_11,100);
                    setTimeout(RandomColor1_11,1500);
                    setTimeout(RandomColor1_11,2000);
                    setTimeout(to1_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Второй.style.background != ''){
                if(Второй.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor2_11,0);
                    setTimeout(RandomColor2_11,500);
                    setTimeout(RandomColor2_11,100);
                    setTimeout(RandomColor2_11,1500);
                    setTimeout(RandomColor2_11,2000);
                    setTimeout(to2_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Третий.style.background != ''){
                if(Третий.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor3_11,0);
                    setTimeout(RandomColor3_11,500);
                    setTimeout(RandomColor3_11,100);
                    setTimeout(RandomColor3_11,1500);
                    setTimeout(RandomColor3_11,2000);
                    setTimeout(to3_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четвертый.style.background != ''){
                if(Четвертый.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor4_11,0);
                    setTimeout(RandomColor4_11,500);
                    setTimeout(RandomColor4_11,100);
                    setTimeout(RandomColor4_11,1500);
                    setTimeout(RandomColor4_11,2000);
                    setTimeout(to4_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пятый.style.background != ''){
                if(Пятый.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor5_11,0);
                    setTimeout(RandomColor5_11,500);
                    setTimeout(RandomColor5_11,100);
                    setTimeout(RandomColor5_11,1500);
                    setTimeout(RandomColor5_11,2000);
                    setTimeout(to5_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шестой.style.background != ''){
                if(Шестой.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor6_11,0);
                    setTimeout(RandomColor6_11,500);
                    setTimeout(RandomColor6_11,100);
                    setTimeout(RandomColor6_11,1500);
                    setTimeout(RandomColor6_11,2000);
                    setTimeout(to6_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Седьмой.style.background != ''){
                if(Седьмой.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor7_11,0);
                    setTimeout(RandomColor7_11,500);
                    setTimeout(RandomColor7_11,100);
                    setTimeout(RandomColor7_11,1500);
                    setTimeout(RandomColor7_11,2000);
                    setTimeout(to7_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Восьмой.style.background != ''){
                if(Восьмой.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor8_11,0);
                    setTimeout(RandomColor8_11,500);
                    setTimeout(RandomColor8_11,100);
                    setTimeout(RandomColor8_11,1500);
                    setTimeout(RandomColor8_11,2000);
                    setTimeout(to8_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Девятый.style.background != ''){
                if(Девятый.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor9_11,0);
                    setTimeout(RandomColor9_11,500);
                    setTimeout(RandomColor9_11,100);
                    setTimeout(RandomColor9_11,1500);
                    setTimeout(RandomColor9_11,2000);
                    setTimeout(to9_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Десятый.style.background != ''){
                if(Десятый.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor10_11,0);
                    setTimeout(RandomColor10_11,500);
                    setTimeout(RandomColor10_11,100);
                    setTimeout(RandomColor10_11,1500);
                    setTimeout(RandomColor10_11,2000);
                    setTimeout(to10_11, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Двенадцатый.style.background != ''){
                if(Двенадцатый.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor11_12,0);
                    setTimeout(RandomColor11_12,500);
                    setTimeout(RandomColor11_12,100);
                    setTimeout(RandomColor11_12,1500);
                    setTimeout(RandomColor11_12,2000);
                    setTimeout(to11_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Тренадцатый.style.background != ''){
                if(Тренадцатый.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor11_13,0);
                    setTimeout(RandomColor11_13,500);
                    setTimeout(RandomColor11_13,100);
                    setTimeout(RandomColor11_13,1500);
                    setTimeout(RandomColor11_13,2000);
                    setTimeout(to11_13, 3000);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четырнадцатый.style.background != ''){
                if(Четырнадцатый.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor11_14,0);
                    setTimeout(RandomColor11_14,500);
                    setTimeout(RandomColor11_14,100);
                    setTimeout(RandomColor11_14,1500);
                    setTimeout(RandomColor11_14,2000);
                    setTimeout(to11_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пядтнадцатый.style.background != ''){
                if(Пядтнадцатый.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor11_15,0);
                    setTimeout(RandomColor11_15,500);
                    setTimeout(RandomColor11_15,100);
                    setTimeout(RandomColor11_15,1500);
                    setTimeout(RandomColor11_15,2000);
                    setTimeout(to11_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шертнадцатый.style.background != ''){
                if(Шертнадцатый.style.background == Одинадцатый.style.background){
                    setTimeout(RandomColor11_16,0);
                    setTimeout(RandomColor11_16,500);
                    setTimeout(RandomColor11_16,100);
                    setTimeout(RandomColor11_16,1500);
                    setTimeout(RandomColor11_16,2000);
                    setTimeout(to11_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}

function twelve(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter12 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    if(counter < 3){
    Двенадцатый.style.background = randomColor12;
    divKing.style.borderColor = randomColor12;
        if(counter == 2){
            if(Первый.style.background != ''){
                if(Первый.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor1_12,0);
                    setTimeout(RandomColor1_12,500);
                    setTimeout(RandomColor1_12,100);
                    setTimeout(RandomColor1_12,1500);
                    setTimeout(RandomColor1_12,2000);
                    setTimeout(to1_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Второй.style.background != ''){
                if(Второй.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor2_12,0);
                    setTimeout(RandomColor2_12,500);
                    setTimeout(RandomColor2_12,100);
                    setTimeout(RandomColor2_12,1500);
                    setTimeout(RandomColor2_12,2000);
                    setTimeout(to2_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Третий.style.background != ''){
                if(Третий.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor3_12,0);
                    setTimeout(RandomColor3_12,500);
                    setTimeout(RandomColor3_12,100);
                    setTimeout(RandomColor3_12,1500);
                    setTimeout(RandomColor3_12,2000);
                    setTimeout(to3_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четвертый.style.background != ''){
                if(Четвертый.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor4_12,0);
                    setTimeout(RandomColor4_12,500);
                    setTimeout(RandomColor4_12,100);
                    setTimeout(RandomColor4_12,1500);
                    setTimeout(RandomColor4_12,2000);
                    setTimeout(to4_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пятый.style.background != ''){
                if(Пятый.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor5_12,0);
                    setTimeout(RandomColor5_12,500);
                    setTimeout(RandomColor5_12,100);
                    setTimeout(RandomColor5_12,1500);
                    setTimeout(RandomColor5_12,2000);
                    setTimeout(to5_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шестой.style.background != ''){
                if(Шестой.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor6_12,0);
                    setTimeout(RandomColor6_12,500);
                    setTimeout(RandomColor6_12,100);
                    setTimeout(RandomColor6_12,1500);
                    setTimeout(RandomColor6_12,2000);
                    setTimeout(to6_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Седьмой.style.background != ''){
                if(Седьмой.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor7_12,0);
                    setTimeout(RandomColor7_12,500);
                    setTimeout(RandomColor7_12,100);
                    setTimeout(RandomColor7_12,1500);
                    setTimeout(RandomColor7_12,2000);
                    setTimeout(to7_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Восьмой.style.background != ''){
                if(Восьмой.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor8_12,0);
                    setTimeout(RandomColor8_12,500);
                    setTimeout(RandomColor8_12,100);
                    setTimeout(RandomColor8_12,1500);
                    setTimeout(RandomColor8_12,2000);
                    setTimeout(to8_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Девятый.style.background != ''){
                if(Девятый.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor9_12,0);
                    setTimeout(RandomColor9_12,500);
                    setTimeout(RandomColor9_12,100);
                    setTimeout(RandomColor9_12,1500);
                    setTimeout(RandomColor9_12,2000);
                    setTimeout(to9_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Десятый.style.background != ''){
                if(Десятый.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor10_12,0);
                    setTimeout(RandomColor10_12,500);
                    setTimeout(RandomColor10_12,100);
                    setTimeout(RandomColor10_12,1500);
                    setTimeout(RandomColor10_12,2000);
                    setTimeout(to10_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Одинадцатый.style.background != ''){
                if(Одинадцатый.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor11_12,0);
                    setTimeout(RandomColor11_12,500);
                    setTimeout(RandomColor11_12,100);
                    setTimeout(RandomColor11_12,1500);
                    setTimeout(RandomColor11_12,2000);
                    setTimeout(to11_12, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Тренадцатый.style.background != ''){
                if(Тренадцатый.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor12_13,0);
                    setTimeout(RandomColor12_13,500);
                    setTimeout(RandomColor12_13,100);
                    setTimeout(RandomColor12_13,1500);
                    setTimeout(RandomColor12_13,2000);
                    setTimeout(to12_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четырнадцатый.style.background != ''){
                if(Четырнадцатый.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor12_14,0);
                    setTimeout(RandomColor12_14,500);
                    setTimeout(RandomColor12_14,100);
                    setTimeout(RandomColor12_14,1500);
                    setTimeout(RandomColor12_14,2000);
                    setTimeout(to12_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пядтнадцатый.style.background != ''){
                if(Пядтнадцатый.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor12_15,0);
                    setTimeout(RandomColor12_15,500);
                    setTimeout(RandomColor12_15,100);
                    setTimeout(RandomColor12_15,1500);
                    setTimeout(RandomColor12_15,2000);
                    setTimeout(to12_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шертнадцатый.style.background != ''){
                if(Шертнадцатый.style.background == Двенадцатый.style.background){
                    setTimeout(RandomColor12_16,0);
                    setTimeout(RandomColor12_16,500);
                    setTimeout(RandomColor12_16,100);
                    setTimeout(RandomColor12_16,1500);
                    setTimeout(RandomColor12_16,2000);
                    setTimeout(to12_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}

function thirteen(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter13 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    if(counter < 3){
    Тренадцатый.style.background = randomColor13;
    divKing.style.borderColor = randomColor13;
        if(counter == 2){
            if(Первый.style.background != ''){
                if(Первый.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor1_13,0);
                    setTimeout(RandomColor1_13,500);
                    setTimeout(RandomColor1_13,100);
                    setTimeout(RandomColor1_13,1500);
                    setTimeout(RandomColor1_13,2000);
                    setTimeout(to1_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Второй.style.background != ''){
                if(Второй.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor2_13,0);
                    setTimeout(RandomColor2_13,500);
                    setTimeout(RandomColor2_13,100);
                    setTimeout(RandomColor2_13,1500);
                    setTimeout(RandomColor2_13,2000);
                    setTimeout(to2_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Третий.style.background != ''){
                if(Третий.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor3_13,0);
                    setTimeout(RandomColor3_13,500);
                    setTimeout(RandomColor3_13,100);
                    setTimeout(RandomColor3_13,1500);
                    setTimeout(RandomColor3_13,2000);
                    setTimeout(to3_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четвертый.style.background != ''){
                if(Четвертый.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor4_13,0);
                    setTimeout(RandomColor4_13,500);
                    setTimeout(RandomColor4_13,100);
                    setTimeout(RandomColor4_13,1500);
                    setTimeout(RandomColor4_13,2000);
                    setTimeout(to4_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пятый.style.background != ''){
                if(Пятый.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor5_13,0);
                    setTimeout(RandomColor5_13,500);
                    setTimeout(RandomColor5_13,100);
                    setTimeout(RandomColor5_13,1500);
                    setTimeout(RandomColor5_13,2000);
                    setTimeout(to5_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шестой.style.background != ''){
                if(Шестой.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor6_13,0);
                    setTimeout(RandomColor6_13,500);
                    setTimeout(RandomColor6_13,100);
                    setTimeout(RandomColor6_13,1500);
                    setTimeout(RandomColor6_13,2000);
                    setTimeout(to6_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Седьмой.style.background != ''){
                if(Седьмой.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor7_13,0);
                    setTimeout(RandomColor7_13,500);
                    setTimeout(RandomColor7_13,100);
                    setTimeout(RandomColor7_13,1500);
                    setTimeout(RandomColor7_13,2000);
                    setTimeout(to7_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Восьмой.style.background != ''){
                if(Восьмой.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor8_13,0);
                    setTimeout(RandomColor8_13,500);
                    setTimeout(RandomColor8_13,100);
                    setTimeout(RandomColor8_13,1500);
                    setTimeout(RandomColor8_13,2000);
                    setTimeout(to8_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Девятый.style.background != ''){
                if(Девятый.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor9_13,0);
                    setTimeout(RandomColor9_13,500);
                    setTimeout(RandomColor9_13,100);
                    setTimeout(RandomColor9_13,1500);
                    setTimeout(RandomColor9_13,2000);
                    setTimeout(to9_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Десятый.style.background != ''){
                if(Десятый.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor10_13,0);
                    setTimeout(RandomColor10_13,500);
                    setTimeout(RandomColor10_13,100);
                    setTimeout(RandomColor10_13,1500);
                    setTimeout(RandomColor10_13,2000);
                    setTimeout(to10_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Одинадцатый.style.background != ''){
                if(Одинадцатый.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor11_13,0);
                    setTimeout(RandomColor11_13,500);
                    setTimeout(RandomColor11_13,100);
                    setTimeout(RandomColor11_13,1500);
                    setTimeout(RandomColor11_13,2000);
                    setTimeout(to11_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Двенадцатый.style.background != ''){
                if(Двенадцатый.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor12_13,0);
                    setTimeout(RandomColor12_13,500);
                    setTimeout(RandomColor12_13,100);
                    setTimeout(RandomColor12_13,1500);
                    setTimeout(RandomColor12_13,2000);
                    setTimeout(to12_13, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четырнадцатый.style.background != ''){
                if(Четырнадцатый.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor13_14,0);
                    setTimeout(RandomColor13_14,500);
                    setTimeout(RandomColor13_14,100);
                    setTimeout(RandomColor13_14,1500);
                    setTimeout(RandomColor13_14,2000);
                    setTimeout(to13_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пядтнадцатый.style.background != ''){
                if(Пядтнадцатый.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor13_15,0);
                    setTimeout(RandomColor13_15,500);
                    setTimeout(RandomColor13_15,100);
                    setTimeout(RandomColor13_15,1500);
                    setTimeout(RandomColor13_15,2000);
                    setTimeout(to13_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шертнадцатый.style.background != ''){
                if(Шертнадцатый.style.background == Тренадцатый.style.background){
                    setTimeout(RandomColor13_16,0);
                    setTimeout(RandomColor13_16,500);
                    setTimeout(RandomColor13_16,100);
                    setTimeout(RandomColor13_16,1500);
                    setTimeout(RandomColor13_16,2000);
                    setTimeout(to13_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}

function fourteen(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter14 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    if(counter < 3){
    Четырнадцатый.style.background = randomColor14;
    divKing.style.borderColor = randomColor14;
        if(counter == 2){
            if(Первый.style.background != ''){
                if(Первый.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor1_14,0);
                    setTimeout(RandomColor1_14,500);
                    setTimeout(RandomColor1_14,100);
                    setTimeout(RandomColor1_14,1500);
                    setTimeout(RandomColor1_14,2000);
                    setTimeout(to1_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Второй.style.background != ''){
                if(Второй.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor2_14,0);
                    setTimeout(RandomColor2_14,500);
                    setTimeout(RandomColor2_14,100);
                    setTimeout(RandomColor2_14,1500);
                    setTimeout(RandomColor2_14,2000);
                    setTimeout(to2_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Третий.style.background != ''){
                if(Третий.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor3_14,0);
                    setTimeout(RandomColor3_14,500);
                    setTimeout(RandomColor3_14,100);
                    setTimeout(RandomColor3_14,1500);
                    setTimeout(RandomColor3_14,2000);
                    setTimeout(to3_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четвертый.style.background != ''){
                if(Четвертый.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor4_14,0);
                    setTimeout(RandomColor4_14,500);
                    setTimeout(RandomColor4_14,100);
                    setTimeout(RandomColor4_14,1500);
                    setTimeout(RandomColor4_14,2000);
                    setTimeout(to4_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пятый.style.background != ''){
                if(Пятый.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor5_14,0);
                    setTimeout(RandomColor5_14,500);
                    setTimeout(RandomColor5_14,100);
                    setTimeout(RandomColor5_14,1500);
                    setTimeout(RandomColor5_14,2000);
                    setTimeout(to5_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шестой.style.background != ''){
                if(Шестой.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor6_14,0);
                    setTimeout(RandomColor6_14,500);
                    setTimeout(RandomColor6_14,100);
                    setTimeout(RandomColor6_14,1500);
                    setTimeout(RandomColor6_14,2000);
                    setTimeout(to6_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Седьмой.style.background != ''){
                if(Седьмой.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor7_14,0);
                    setTimeout(RandomColor7_14,500);
                    setTimeout(RandomColor7_14,100);
                    setTimeout(RandomColor7_14,1500);
                    setTimeout(RandomColor7_14,2000);
                    setTimeout(to7_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Восьмой.style.background != ''){
                if(Восьмой.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor8_14,0);
                    setTimeout(RandomColor8_14,500);
                    setTimeout(RandomColor8_14,100);
                    setTimeout(RandomColor8_14,1500);
                    setTimeout(RandomColor8_14,2000);
                    setTimeout(to8_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Девятый.style.background != ''){
                if(Девятый.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor9_14,0);
                    setTimeout(RandomColor9_14,500);
                    setTimeout(RandomColor9_14,100);
                    setTimeout(RandomColor9_14,1500);
                    setTimeout(RandomColor9_14,2000);
                    setTimeout(to9_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Десятый.style.background != ''){
                if(Десятый.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor10_14,0);
                    setTimeout(RandomColor10_14,500);
                    setTimeout(RandomColor10_14,100);
                    setTimeout(RandomColor10_14,1500);
                    setTimeout(RandomColor10_14,2000);
                    setTimeout(to10_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Одинадцатый.style.background != ''){
                if(Одинадцатый.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor11_14,0);
                    setTimeout(RandomColor11_14,500);
                    setTimeout(RandomColor11_14,100);
                    setTimeout(RandomColor11_14,1500);
                    setTimeout(RandomColor11_14,2000);
                    setTimeout(to11_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Двенадцатый.style.background != ''){
                if(Двенадцатый.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor12_14,0);
                    setTimeout(RandomColor12_14,500);
                    setTimeout(RandomColor12_14,100);
                    setTimeout(RandomColor12_14,1500);
                    setTimeout(RandomColor12_14,2000);
                    setTimeout(to12_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Тренадцатый.style.background != ''){
                if(Тренадцатый.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor13_14,0);
                    setTimeout(RandomColor13_14,500);
                    setTimeout(RandomColor13_14,100);
                    setTimeout(RandomColor13_14,1500);
                    setTimeout(RandomColor13_14,2000);
                    setTimeout(to13_14, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пядтнадцатый.style.background != ''){
                if(Пядтнадцатый.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor14_15,0);
                    setTimeout(RandomColor14_15,500);
                    setTimeout(RandomColor14_15,100);
                    setTimeout(RandomColor14_15,1500);
                    setTimeout(RandomColor14_15,2000);
                    setTimeout(to14_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шертнадцатый.style.background != ''){
                if(Шертнадцатый.style.background == Четырнадцатый.style.background){
                    setTimeout(RandomColor14_16,0);
                    setTimeout(RandomColor14_16,500);
                    setTimeout(RandomColor14_16,100);
                    setTimeout(RandomColor14_16,1500);
                    setTimeout(RandomColor14_16,2000);
                    setTimeout(to14_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}

function fifteen(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter15 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    if(counter < 3){
    Пядтнадцатый.style.background = randomColor15;
    divKing.style.borderColor = randomColor15;
        if(counter == 2){
            if(Первый.style.background != ''){
                if(Первый.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor1_15,0);
                    setTimeout(RandomColor1_15,500);
                    setTimeout(RandomColor1_15,100);
                    setTimeout(RandomColor1_15,1500);
                    setTimeout(RandomColor1_15,2000);
                    setTimeout(to1_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Второй.style.background != ''){
                if(Второй.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor2_15,0);
                    setTimeout(RandomColor2_15,500);
                    setTimeout(RandomColor2_15,100);
                    setTimeout(RandomColor2_15,1500);
                    setTimeout(RandomColor2_15,2000);
                    setTimeout(to2_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Третий.style.background != ''){
                if(Третий.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor3_15,0);
                    setTimeout(RandomColor3_15,500);
                    setTimeout(RandomColor3_15,100);
                    setTimeout(RandomColor3_15,1500);
                    setTimeout(RandomColor3_15,2000);
                    setTimeout(to3_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четвертый.style.background != ''){
                if(Четвертый.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor4_15,0);
                    setTimeout(RandomColor4_15,500);
                    setTimeout(RandomColor4_15,100);
                    setTimeout(RandomColor4_15,1500);
                    setTimeout(RandomColor4_15,2000);
                    setTimeout(to4_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пятый.style.background != ''){
                if(Пятый.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor5_15,0);
                    setTimeout(RandomColor5_15,500);
                    setTimeout(RandomColor5_15,100);
                    setTimeout(RandomColor5_15,1500);
                    setTimeout(RandomColor5_15,2000);
                    setTimeout(to5_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шестой.style.background != ''){
                if(Шестой.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor6_15,0);
                    setTimeout(RandomColor6_15,500);
                    setTimeout(RandomColor6_15,100);
                    setTimeout(RandomColor6_15,1500);
                    setTimeout(RandomColor6_15,2000);
                    setTimeout(to6_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Седьмой.style.background != ''){
                if(Седьмой.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor7_15,0);
                    setTimeout(RandomColor7_15,500);
                    setTimeout(RandomColor7_15,100);
                    setTimeout(RandomColor7_15,1500);
                    setTimeout(RandomColor7_15,2000);
                    setTimeout(to7_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Восьмой.style.background != ''){
                if(Восьмой.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor8_15,0);
                    setTimeout(RandomColor8_15,500);
                    setTimeout(RandomColor8_15,100);
                    setTimeout(RandomColor8_15,1500);
                    setTimeout(RandomColor8_15,2000);
                    setTimeout(to8_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Девятый.style.background != ''){
                if(Девятый.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor9_15,0);
                    setTimeout(RandomColor9_15,500);
                    setTimeout(RandomColor9_15,100);
                    setTimeout(RandomColor9_15,1500);
                    setTimeout(RandomColor9_15,2000);
                    setTimeout(to9_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Десятый.style.background != ''){
                if(Десятый.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor10_15,0);
                    setTimeout(RandomColor10_15,500);
                    setTimeout(RandomColor10_15,100);
                    setTimeout(RandomColor10_15,1500);
                    setTimeout(RandomColor10_15,2000);
                    setTimeout(to10_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Одинадцатый.style.background != ''){
                if(Одинадцатый.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor11_15,0);
                    setTimeout(RandomColor11_15,500);
                    setTimeout(RandomColor11_15,100);
                    setTimeout(RandomColor11_15,1500);
                    setTimeout(RandomColor11_15,2000);
                    setTimeout(to11_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Двенадцатый.style.background != ''){
                if(Двенадцатый.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor12_15,0);
                    setTimeout(RandomColor12_15,500);
                    setTimeout(RandomColor12_15,100);
                    setTimeout(RandomColor12_15,1500);
                    setTimeout(RandomColor12_15,2000);
                    setTimeout(to12_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Тренадцатый.style.background != ''){
                if(Тренадцатый.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor13_15,0);
                    setTimeout(RandomColor13_15,500);
                    setTimeout(RandomColor13_15,100);
                    setTimeout(RandomColor13_15,1500);
                    setTimeout(RandomColor13_15,2000);
                    setTimeout(to13_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четырнадцатый.style.background != ''){
                if(Четырнадцатый.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor14_15,0);
                    setTimeout(RandomColor14_15,500);
                    setTimeout(RandomColor14_15,100);
                    setTimeout(RandomColor14_15,1500);
                    setTimeout(RandomColor14_15,2000);
                    setTimeout(to4_15, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шертнадцатый.style.background != ''){
                if(Шертнадцатый.style.background == Пядтнадцатый.style.background){
                    setTimeout(RandomColor15_16,0);
                    setTimeout(RandomColor15_16,500);
                    setTimeout(RandomColor15_16,100);
                    setTimeout(RandomColor15_16,1500);
                    setTimeout(RandomColor15_16,2000);
                    setTimeout(to15_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}

function sixteen(){
    if (timer_started == false) {
        timerId = setInterval(() => dis_time(), 1000);
    };
    timer_started = true;
    counter16 = 1;
    counter =  counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12 + counter13 + counter14 + counter15 + counter16;
    if(counter < 3){
    Шертнадцатый.style.background = randomColor16;
    divKing.style.borderColor = randomColor16;
        if(counter == 2){
            if(Первый.style.background != ''){
                if(Первый.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor1_16,0);
                    setTimeout(RandomColor1_16,500);
                    setTimeout(RandomColor1_16,100);
                    setTimeout(RandomColor1_16,1500);
                    setTimeout(RandomColor1_16,2000);
                    setTimeout(to1_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Второй.style.background != ''){
                if(Второй.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor2_16,0);
                    setTimeout(RandomColor2_16,500);
                    setTimeout(RandomColor2_16,100);
                    setTimeout(RandomColor2_16,1500);
                    setTimeout(RandomColor2_16,2000);
                    setTimeout(to2_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Третий.style.background != ''){
                if(Третий.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor3_16,0);
                    setTimeout(RandomColor3_16,500);
                    setTimeout(RandomColor3_16,100);
                    setTimeout(RandomColor3_16,1500);
                    setTimeout(RandomColor3_16,2000);
                    setTimeout(to3_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четвертый.style.background != ''){
                if(Четвертый.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor4_16,0);
                    setTimeout(RandomColor4_16,500);
                    setTimeout(RandomColor4_16,100);
                    setTimeout(RandomColor4_16,1500);
                    setTimeout(RandomColor4_16,2000);
                    setTimeout(to4_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пятый.style.background != ''){
                if(Пятый.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor5_16,0);
                    setTimeout(RandomColor5_16,500);
                    setTimeout(RandomColor5_16,100);
                    setTimeout(RandomColor5_16,1500);
                    setTimeout(RandomColor5_16,2000);
                    setTimeout(to5_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Шестой.style.background != ''){
                if(Шестой.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor6_16,0);
                    setTimeout(RandomColor6_16,500);
                    setTimeout(RandomColor6_16,100);
                    setTimeout(RandomColor6_16,1500);
                    setTimeout(RandomColor6_16,2000);
                    setTimeout(to6_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Седьмой.style.background != ''){
                if(Седьмой.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor7_16,0);
                    setTimeout(RandomColor7_16,500);
                    setTimeout(RandomColor7_16,100);
                    setTimeout(RandomColor7_16,1500);
                    setTimeout(RandomColor7_16,2000);
                    setTimeout(to7_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Восьмой.style.background != ''){
                if(Восьмой.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor8_16,0);
                    setTimeout(RandomColor8_16,500);
                    setTimeout(RandomColor8_16,100);
                    setTimeout(RandomColor8_16,1500);
                    setTimeout(RandomColor8_16,2000);
                    setTimeout(to8_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Девятый.style.background != ''){
                if(Девятый.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor9_16,0);
                    setTimeout(RandomColor9_16,500);
                    setTimeout(RandomColor9_16,100);
                    setTimeout(RandomColor9_16,1500);
                    setTimeout(RandomColor9_16,2000);
                    setTimeout(to9_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Десятый.style.background != ''){
                if(Десятый.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor10_16,0);
                    setTimeout(RandomColor10_16,500);
                    setTimeout(RandomColor10_16,100);
                    setTimeout(RandomColor10_16,1500);
                    setTimeout(RandomColor10_16,2000);
                    setTimeout(to10_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Одинадцатый.style.background != ''){
                if(Одинадцатый.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor11_16,0);
                    setTimeout(RandomColor11_16,500);
                    setTimeout(RandomColor11_16,100);
                    setTimeout(RandomColor11_16,1500);
                    setTimeout(RandomColor11_16,2000);
                    setTimeout(to11_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Двенадцатый.style.background != ''){
                if(Двенадцатый.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor12_16,0);
                    setTimeout(RandomColor12_16,500);
                    setTimeout(RandomColor12_16,100);
                    setTimeout(RandomColor12_16,1500);
                    setTimeout(RandomColor12_16,2000);
                    setTimeout(to12_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Тренадцатый.style.background != ''){
                if(Тренадцатый.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor13_16,0);
                    setTimeout(RandomColor13_16,500);
                    setTimeout(RandomColor13_16,100);
                    setTimeout(RandomColor13_16,1500);
                    setTimeout(RandomColor13_16,2000);
                    setTimeout(to13_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Четырнадцатый.style.background != ''){
                if(Четырнадцатый.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor14_16,0);
                    setTimeout(RandomColor14_16,500);
                    setTimeout(RandomColor14_16,100);
                    setTimeout(RandomColor14_16,1500);
                    setTimeout(RandomColor14_16,2000);
                    setTimeout(to4_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
            if(Пядтнадцатый.style.background != ''){
                if(Пядтнадцатый.style.background == Шертнадцатый.style.background){
                    setTimeout(RandomColor15_16,0);
                    setTimeout(RandomColor15_16,500);
                    setTimeout(RandomColor15_16,100);
                    setTimeout(RandomColor15_16,1500);
                    setTimeout(RandomColor15_16,2000);
                    setTimeout(to15_16, 3000);
                    setTimeout(checkTheGameIsOver, 3500);
                }else{
                    setTimeout(returnToWhite, 3000);

                }
            }
        setTimeout(resetTheCounters, 3000);
        }
    }
}



function RandomColor1_2(){

// Массив цветов для div-вов (квадратов), может быть только два квадрата с одинаковым цветом
    var arrayColor = ["red","green","blue","yellow","orange","violet","indigo","brown",
                      "red","green","blue","yellow","orange","violet","indigo","brown"];

// Функция генирирования случайного целого числа в заданном периоде
    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

/*
Присваивание случайных чисел (в заданном периоде) в переменные типа: " randomNumberN "
Присваивание случайных цветов из массива в переменные типа: " randomColorN "
Удаление из массива цвета, который рание был выбран
*/

var randomNumber1 = getRandomInRange(0, arrayColor.length -1);
var randomColor1 = arrayColor[randomNumber1];
arrayColor.splice(randomNumber1, 1);

    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Первый.style.background = randColor;
//    Второй.style.background = randColor;
}

function to1_2(){
    divKing.style.borderColor = "white";
    Первый.style.background = 'black';
    Второй.style.background = 'black';
    Первый.style.pointerEvents = 'none';
    Второй.style.pointerEvents = 'none';
}

function RandomColor1_3(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Первый.style.background = randColor;
//    Третий.style.background = randColor;
}

function to1_3(){
    divKing.style.borderColor = "white";
    Первый.style.background = 'black';
    Третий.style.background = 'black';
    Первый.style.pointerEvents = 'none';
    Третий.style.pointerEvents = 'none';
}

function RandomColor1_4(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Первый.style.background = randColor;
//    Четвертый.style.background = randColor;
}

function to1_4(){
    divKing.style.borderColor = "white";
    Первый.style.background = 'black';
    Четвертый.style.background = 'black';
    Первый.style.pointerEvents = 'none';
    Четвертый.style.pointerEvents = 'none';
}

function RandomColor1_5(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Первый.style.background = randColor;
//    Пятый.style.background = randColor;
}

function to1_5(){
    divKing.style.borderColor = "white";
    Первый.style.background = 'black';
    Пятый.style.background = 'black';
    Первый.style.pointerEvents = 'none';
    Пятый.style.pointerEvents = 'none';
}

function RandomColor1_6(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Первый.style.background = randColor;
//    Шестой.style.background = randColor;
}

function to1_6(){
    divKing.style.borderColor = "white";
    Первый.style.background = 'black';
    Шестой.style.background = 'black';
    Первый.style.pointerEvents = 'none';
    Шестой.style.pointerEvents = 'none';
}

function RandomColor1_7(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Первый.style.background = randColor;
//    Седьмой.style.background = randColor;
}

function to1_7(){
    divKing.style.borderColor = "white";
    Первый.style.background = 'black';
    Седьмой.style.background = 'black';
    Первый.style.pointerEvents = 'none';
    Седьмой.style.pointerEvents = 'none';
}

function RandomColor1_8(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Первый.style.background = randColor;
//    Восьмой.style.background = randColor;
}

function to1_8(){
    divKing.style.borderColor = "white";
    Первый.style.background = 'black';
    Восьмой.style.background = 'black';
    Первый.style.pointerEvents = 'none';
    Восьмой.style.pointerEvents = 'none';
}

function RandomColor1_9(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Первый.style.background = randColor;
//    Девятый.style.background = randColor;
}

function to1_9(){
    divKing.style.borderColor = "white";
    Первый.style.background = 'black';
    Девятый.style.background = 'black';
    Первый.style.pointerEvents = 'none';
    Девятый.style.pointerEvents = 'none';
}

function RandomColor1_10(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Первый.style.background = randColor;
//    Десятый.style.background = randColor;
}

function to1_10(){
    divKing.style.borderColor = "white";
    Первый.style.background = 'black';
    Десятый.style.background = 'black';
    Первый.style.pointerEvents = 'none';
    Десятый.style.pointerEvents = 'none';
}

function RandomColor1_11(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Первый.style.background = randColor;
//    Одинадцатый.style.background = randColor;
}

function to1_11(){
    divKing.style.borderColor = "white";
    Первый.style.background = 'black';
    Одинадцатый.style.background = 'black';
    Первый.style.pointerEvents = 'none';
    Одинадцатый.style.pointerEvents = 'none';
}

function RandomColor1_12(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Первый.style.background = randColor;
//    Двенадцатый.style.background = randColor;
}

function to1_12(){
    divKing.style.borderColor = "white";
    Первый.style.background = 'black';
    Двенадцатый.style.background = 'black';
    Первый.style.pointerEvents = 'none';
    Двенадцатый.style.pointerEvents = 'none';
}

function RandomColor1_13(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Первый.style.background = randColor;
//    Тренадцатый.style.background = randColor;
}

function to1_13(){
    divKing.style.borderColor = "white";
    Первый.style.background = 'black';
    Тренадцатый.style.background = 'black';
    Первый.style.pointerEvents = 'none';
    Тренадцатый.style.pointerEvents = 'none';
}

function RandomColor1_14(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Первый.style.background = randColor;
//    Четырнадцатый.style.background = randColor;
}

function to1_14(){
    divKing.style.borderColor = "white";
    Первый.style.background = 'black';
    Четырнадцатый.style.background = 'black';
    Первый.style.pointerEvents = 'none';
    Четырнадцатый.style.pointerEvents = 'none';
}

function RandomColor1_15(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Первый.style.background = randColor;
//    Пядтнадцатый.style.background = randColor;
}

function to1_15(){
    divKing.style.borderColor = "white";
    Первый.style.background = 'black';
    Пядтнадцатый.style.background = 'black';
    Первый.style.pointerEvents = 'none';
    Пядтнадцатый.style.pointerEvents = 'none';
}

function RandomColor1_16(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Первый.style.background = randColor;
//    Шертнадцатый.style.background = randColor;
}

function to1_16(){
    divKing.style.borderColor = "white";
    Первый.style.background = 'black';
    Шертнадцатый.style.background = 'black';
    Первый.style.pointerEvents = 'none';
    Шертнадцатый.style.pointerEvents = 'none';
}

function RandomColor2_3(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
    Второй.style.background = randColor;
    Третий.style.background = randColor;
}

function to2_3(){
    divKing.style.borderColor = "white";
    Второй.style.background = 'black';
    Третий.style.background = 'black';
    Второй.style.pointerEvents = 'none';
    Третий.style.pointerEvents = 'none';
}

function RandomColor2_3(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Второй.style.background = randColor;
//    Третий.style.background = randColor;
}

function to2_3(){
    divKing.style.borderColor = "white";
    Второй.style.background = 'black';
    Третий.style.background = 'black';
    Второй.style.pointerEvents = 'none';
    Третий.style.pointerEvents = 'none';
}

function RandomColor2_4(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Второй.style.background = randColor;
//    Четвертый.style.background = randColor;
}

function to2_4(){
    divKing.style.borderColor = "white";
    Второй.style.background = 'black';
    Четвертый.style.background = 'black';
    Второй.style.pointerEvents = 'none';
    Четвертый.style.pointerEvents = 'none';
}

function RandomColor2_5(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Второй.style.background = randColor;
//    Пятый.style.background = randColor;
}

function to2_5(){
    divKing.style.borderColor = "white";
    Второй.style.background = 'black';
    Пятый.style.background = 'black';
    Второй.style.pointerEvents = 'none';
    Пятый.style.pointerEvents = 'none';
}

function RandomColor2_6(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Второй.style.background = randColor;
//    Шестой.style.background = randColor;
}

function to2_6(){
    divKing.style.borderColor = "white";
    Второй.style.background = 'black';
    Шестой.style.background = 'black';
    Второй.style.pointerEvents = 'none';
    Шестой.style.pointerEvents = 'none';
}

function RandomColor2_7(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Второй.style.background = randColor;
//    Седьмой.style.background = randColor;
}

function to2_7(){
    divKing.style.borderColor = "white";
    Второй.style.background = 'black';
    Седьмой.style.background = 'black';
    Второй.style.pointerEvents = 'none';
    Седьмой.style.pointerEvents = 'none';
}

function RandomColor2_8(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Второй.style.background = randColor;
//    Восьмой.style.background = randColor;
}

function to2_8(){
    divKing.style.borderColor = "white";
    Второй.style.background = 'black';
    Восьмой.style.background = 'black';
    Второй.style.pointerEvents = 'none';
    Восьмой.style.pointerEvents = 'none';
}

function RandomColor2_9(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Второй.style.background = randColor;
//    Девятый.style.background = randColor;
}

function to2_9(){
    divKing.style.borderColor = "white";
    Второй.style.background = 'black';
    Девятый.style.background = 'black';
    Второй.style.pointerEvents = 'none';
    Девятый.style.pointerEvents = 'none';
}

function RandomColor2_10(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Второй.style.background = randColor;
//    Десятый.style.background = randColor;
}

function to2_10(){
    divKing.style.borderColor = "white";
    Второй.style.background = 'black';
    Десятый.style.background = 'black';
    Второй.style.pointerEvents = 'none';
    Десятый.style.pointerEvents = 'none';
}

function RandomColor2_11(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Второй.style.background = randColor;
//    Одинадцатый.style.background = randColor;
}

function to2_11(){
    divKing.style.borderColor = "white";
    Второй.style.background = 'black';
    Одинадцатый.style.background = 'black';
    Второй.style.pointerEvents = 'none';
    Одинадцатый.style.pointerEvents = 'none';
}

function RandomColor2_12(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Второй.style.background = randColor;
//    Двенадцатый.style.background = randColor;
}

function to2_12(){
    divKing.style.borderColor = "white";
    Второй.style.background = 'black';
    Двенадцатый.style.background = 'black';
    Второй.style.pointerEvents = 'none';
    Двенадцатый.style.pointerEvents = 'none';
}

function RandomColor2_13(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Второй.style.background = randColor;
//    Тренадцатый.style.background = randColor;
}

function to2_13(){
    divKing.style.borderColor = "white";
    Второй.style.background = 'black';
    Тренадцатый.style.background = 'black';
    Второй.style.pointerEvents = 'none';
    Тренадцатый.style.pointerEvents = 'none';
}

function RandomColor2_14(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Второй.style.background = randColor;
//    Четырнадцатый.style.background = randColor;
}

function to2_14(){
    divKing.style.borderColor = "white";
    Второй.style.background = 'black';
    Четырнадцатый.style.background = 'black';
    Второй.style.pointerEvents = 'none';
    Четырнадцатый.style.pointerEvents = 'none';
}

function RandomColor2_15(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Второй.style.background = randColor;
//    Пядтнадцатый.style.background = randColor;
}

function to2_15(){
    divKing.style.borderColor = "white";
    Второй.style.background = 'black';
    Пядтнадцатый.style.background = 'black';
    Второй.style.pointerEvents = 'none';
    Пядтнадцатый.style.pointerEvents = 'none';
}

function RandomColor2_16(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Второй.style.background = randColor;
//    Шертнадцатый.style.background = randColor;
}

function to2_16(){
    divKing.style.borderColor = "white";
    Второй.style.background = 'black';
    Шертнадцатый.style.background = 'black';
    Второй.style.pointerEvents = 'none';
    Шертнадцатый.style.pointerEvents = 'none';
}

function RandomColor3_4(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Третий.style.background = randColor;
//    Четвертый.style.background = randColor;
}

function to3_4(){
    divKing.style.borderColor = "white";
    Третий.style.background = 'black';
    Четвертый.style.background = 'black';
    Третий.style.pointerEvents = 'none';
    Четвертый.style.pointerEvents = 'none';
}

function RandomColor3_5(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Третий.style.background = randColor;
//    Пятый.style.background = randColor;
}

function to3_5(){
    divKing.style.borderColor = "white";
    Третий.style.background = 'black';
    Пятый.style.background = 'black';
    Третий.style.pointerEvents = 'none';
    Пятый.style.pointerEvents = 'none';
}

function RandomColor3_6(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Третий.style.background = randColor;
//    Шестой.style.background = randColor;
}

function to3_6(){
    divKing.style.borderColor = "white";
    Третий.style.background = 'black';
    Шестой.style.background = 'black';
    Третий.style.pointerEvents = 'none';
    Шестой.style.pointerEvents = 'none';
}

function RandomColor3_7(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Третий.style.background = randColor;
//    Седьмой.style.background = randColor;
}

function to3_7(){
    divKing.style.borderColor = "white";
    Третий.style.background = 'black';
    Седьмой.style.background = 'black';
    Третий.style.pointerEvents = 'none';
    Седьмой.style.pointerEvents = 'none';
}

function RandomColor3_8(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Третий.style.background = randColor;
//    Восьмой.style.background = randColor;
}

function to3_8(){
    divKing.style.borderColor = "white";
    Третий.style.background = 'black';
    Восьмой.style.background = 'black';
    Третий.style.pointerEvents = 'none';
    Восьмой.style.pointerEvents = 'none';
}

function RandomColor3_9(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Третий.style.background = randColor;
//    Девятый.style.background = randColor;
}

function to3_9(){
    divKing.style.borderColor = "white";
    Третий.style.background = 'black';
    Девятый.style.background = 'black';
    Третий.style.pointerEvents = 'none';
    Девятый.style.pointerEvents = 'none';
}

function RandomColor3_10(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Третий.style.background = randColor;
//    Десятый.style.background = randColor;
}

function to3_10(){
    divKing.style.borderColor = "white";
    Третий.style.background = 'black';
    Десятый.style.background = 'black';
    Третий.style.pointerEvents = 'none';
    Десятый.style.pointerEvents = 'none';
}

function RandomColor3_11(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Третий.style.background = randColor;
//    Одинадцатый.style.background = randColor;
}

function to3_11(){
    divKing.style.borderColor = "white";
    Третий.style.background = 'black';
    Одинадцатый.style.background = 'black';
    Третий.style.pointerEvents = 'none';
    Одинадцатый.style.pointerEvents = 'none';
}

function RandomColor3_12(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Третий.style.background = randColor;
//    Двенадцатый.style.background = randColor;
}

function to3_12(){
    divKing.style.borderColor = "white";
    Третий.style.background = 'black';
    Двенадцатый.style.background = 'black';
    Третий.style.pointerEvents = 'none';
    Двенадцатый.style.pointerEvents = 'none';
}

function RandomColor3_13(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Третий.style.background = randColor;
//    Тренадцатый.style.background = randColor;
}

function to3_13(){
    divKing.style.borderColor = "white";
    Третий.style.background = 'black';
    Тренадцатый.style.background = 'black';
    Третий.style.pointerEvents = 'none';
    Тренадцатый.style.pointerEvents = 'none';
}

function RandomColor3_14(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Третий.style.background = randColor;
//    Четырнадцатый.style.background = randColor;
}

function to3_14(){
    divKing.style.borderColor = "white";
    Третий.style.background = 'black';
    Четырнадцатый.style.background = 'black';
    Третий.style.pointerEvents = 'none';
    Четырнадцатый.style.pointerEvents = 'none';
}

function RandomColor3_15(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Третий.style.background = randColor;
//    Пядтнадцатый.style.background = randColor;
}

function to3_15(){
    divKing.style.borderColor = "white";
    Третий.style.background = 'black';
    Пядтнадцатый.style.background = 'black';
    Третий.style.pointerEvents = 'none';
    Пядтнадцатый.style.pointerEvents = 'none';
}

function RandomColor3_16(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Третий.style.background = randColor;
//    Шертнадцатый.style.background = randColor;
}

function to3_16(){
    divKing.style.borderColor = "white";
    Третий.style.background = 'black';
    Шертнадцатый.style.background = 'black';
    Третий.style.pointerEvents = 'none';
    Шертнадцатый.style.pointerEvents = 'none';
}

function RandomColor4_5(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Пятый.style.background = randColor;
//    Четвертый.style.background = randColor;
}

function to4_5(){
    divKing.style.borderColor = "white";
    Пятый.style.background = 'black';
    Четвертый.style.background = 'black';
    Пятый.style.pointerEvents = 'none';
    Четвертый.style.pointerEvents = 'none';
}

function RandomColor4_6(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Шестой.style.background = randColor;
//    Четвертый.style.background = randColor;
}

function to4_6(){
    divKing.style.borderColor = "white";
    Шестой.style.background = 'black';
    Четвертый.style.background = 'black';
    Шестой.style.pointerEvents = 'none';
    Четвертый.style.pointerEvents = 'none';
}

function RandomColor4_7(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Седьмой.style.background = randColor;
//    Четвертый.style.background = randColor;
}

function to4_7(){
    divKing.style.borderColor = "white";
    Седьмой.style.background = 'black';
    Четвертый.style.background = 'black';
    Седьмой.style.pointerEvents = 'none';
    Четвертый.style.pointerEvents = 'none';
}

function RandomColor4_8(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Восьмой.style.background = randColor;
//    Четвертый.style.background = randColor;
}

function to4_8(){
    divKing.style.borderColor = "white";
    Восьмой.style.background = 'black';
    Четвертый.style.background = 'black';
    Восьмой.style.pointerEvents = 'none';
    Четвертый.style.pointerEvents = 'none';
}

function RandomColor4_9(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Девятый.style.background = randColor;
//    Четвертый.style.background = randColor;
}

function to4_9(){
    divKing.style.borderColor = "white";
    Девятый.style.background = 'black';
    Четвертый.style.background = 'black';
    Девятый.style.pointerEvents = 'none';
    Четвертый.style.pointerEvents = 'none';
}

function RandomColor4_10(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Десятый.style.background = randColor;
//    Четвертый.style.background = randColor;
}

function to4_10(){
    divKing.style.borderColor = "white";
    Десятый.style.background = 'black';
    Четвертый.style.background = 'black';
    Десятый.style.pointerEvents = 'none';
    Четвертый.style.pointerEvents = 'none';
}

function RandomColor4_11(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Одинадцатый.style.background = randColor;
//    Четвертый.style.background = randColor;
}

function to4_11(){
    divKing.style.borderColor = "white";
    Одинадцатый.style.background = 'black';
    Четвертый.style.background = 'black';
    Одинадцатый.style.pointerEvents = 'none';
    Четвертый.style.pointerEvents = 'none';
}

function RandomColor4_12(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Двенадцатый.style.background = randColor;
//    Четвертый.style.background = randColor;
}

function to4_12(){
    divKing.style.borderColor = "white";
    Двенадцатый.style.background = 'black';
    Четвертый.style.background = 'black';
    Двенадцатый.style.pointerEvents = 'none';
    Четвертый.style.pointerEvents = 'none';
}

function RandomColor4_13(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Тренадцатый.style.background = randColor;
//    Четвертый.style.background = randColor;
}

function to4_13(){
    divKing.style.borderColor = "white";
    Тренадцатый.style.background = 'black';
    Четвертый.style.background = 'black';
    Тренадцатый.style.pointerEvents = 'none';
    Четвертый.style.pointerEvents = 'none';
}

function RandomColor4_14(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Четырнадцатый.style.background = randColor;
//    Четвертый.style.background = randColor;
}

function to4_14(){
    divKing.style.borderColor = "white";
    Четырнадцатый.style.background = 'black';
    Четвертый.style.background = 'black';
    Четырнадцатый.style.pointerEvents = 'none';
    Четвертый.style.pointerEvents = 'none';
}

function RandomColor4_15(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Пядтнадцатый.style.background = randColor;
//    Четвертый.style.background = randColor;
}

function to4_15(){
    divKing.style.borderColor = "white";
    Пядтнадцатый.style.background = 'black';
    Четвертый.style.background = 'black';
    Пядтнадцатый.style.pointerEvents = 'none';
    Четвертый.style.pointerEvents = 'none';
}

function RandomColor4_16(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Шертнадцатый.style.background = randColor;
//    Четвертый.style.background = randColor;
}

function to4_16(){
    divKing.style.borderColor = "white";
    Шертнадцатый.style.background = 'black';
    Четвертый.style.background = 'black';
    Шертнадцатый.style.pointerEvents = 'none';
    Четвертый.style.pointerEvents = 'none';
}

function RandomColor5_6(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Пятый.style.background = randColor;
//    Шестой.style.background = randColor;
}

function to5_6(){
    divKing.style.borderColor = "white";
    Пятый.style.background = 'black';
    Шестой.style.background = 'black';
    Пятый.style.pointerEvents = 'none';
    Шестой.style.pointerEvents = 'none';
}

function RandomColor5_7(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Пятый.style.background = randColor;
//    Седьмой.style.background = randColor;
}

function to5_7(){
    divKing.style.borderColor = "white";
    Пятый.style.background = 'black';
    Седьмой.style.background = 'black';
    Пятый.style.pointerEvents = 'none';
    Седьмой.style.pointerEvents = 'none';
}

function RandomColor5_8(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Пятый.style.background = randColor;
//    Восьмой.style.background = randColor;
}

function to5_8(){
    divKing.style.borderColor = "white";
    Пятый.style.background = 'black';
    Восьмой.style.background = 'black';
    Пятый.style.pointerEvents = 'none';
    Восьмой.style.pointerEvents = 'none';
}

function RandomColor5_9(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Пятый.style.background = randColor;
//    Девятый.style.background = randColor;
}

function to5_9(){
    divKing.style.borderColor = "white";
    Пятый.style.background = 'black';
    Девятый.style.background = 'black';
    Пятый.style.pointerEvents = 'none';
    Девятый.style.pointerEvents = 'none';
}

function RandomColor5_10(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Пятый.style.background = randColor;
//    Десятый.style.background = randColor;
}

function to5_10(){
    divKing.style.borderColor = "white";
    Пятый.style.background = 'black';
    Десятый.style.background = 'black';
    Пятый.style.pointerEvents = 'none';
    Десятый.style.pointerEvents = 'none';
}

function RandomColor5_11(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Пятый.style.background = randColor;
//    Одинадцатый.style.background = randColor;
}

function to5_11(){
    divKing.style.borderColor = "white";
    Пятый.style.background = 'black';
    Одинадцатый.style.background = 'black';
    Пятый.style.pointerEvents = 'none';
    Одинадцатый.style.pointerEvents = 'none';
}

function RandomColor5_12(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Пятый.style.background = randColor;
//    Двенадцатый.style.background = randColor;
}

function to5_12(){
    divKing.style.borderColor = "white";
    Пятый.style.background = 'black';
    Двенадцатый.style.background = 'black';
    Пятый.style.pointerEvents = 'none';
    Двенадцатый.style.pointerEvents = 'none';
}

function RandomColor5_13(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Пятый.style.background = randColor;
//    Тренадцатый.style.background = randColor;
}

function to5_13(){
    divKing.style.borderColor = "white";
    Пятый.style.background = 'black';
    Тренадцатый.style.background = 'black';
    Пятый.style.pointerEvents = 'none';
    Тренадцатый.style.pointerEvents = 'none';
}

function RandomColor5_14(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Пятый.style.background = randColor;
//    Четырнадцатый.style.background = randColor;
}

function to5_14(){
    divKing.style.borderColor = "white";
    Пятый.style.background = 'black';
    Четырнадцатый.style.background = 'black';
    Пятый.style.pointerEvents = 'none';
    Четырнадцатый.style.pointerEvents = 'none';
}

function RandomColor5_15(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Пятый.style.background = randColor;
//    Пядтнадцатый.style.background = randColor;
}

function to5_15(){
    divKing.style.borderColor = "white";
    Пятый.style.background = 'black';
    Пядтнадцатый.style.background = 'black';
    Пятый.style.pointerEvents = 'none';
    Пядтнадцатый.style.pointerEvents = 'none';
}

function RandomColor5_16(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Пятый.style.background = randColor;
//    Шертнадцатый.style.background = randColor;
}

function to5_16(){
    divKing.style.borderColor = "white";
    Пятый.style.background = 'black';
    Шертнадцатый.style.background = 'black';
    Пятый.style.pointerEvents = 'none';
    Шертнадцатый.style.pointerEvents = 'none';
}

function RandomColor6_7(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Шестой.style.background = randColor;
//    Седьмой.style.background = randColor;
}

function to6_7(){
    divKing.style.borderColor = "white";
    Шестой.style.background = 'black';
    Седьмой.style.background = 'black';
    Шестой.style.pointerEvents = 'none';
    Седьмой.style.pointerEvents = 'none';
}

function RandomColor6_8(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Шестой.style.background = randColor;
//    Восьмой.style.background = randColor;
}

function to6_8(){
    divKing.style.borderColor = "white";
    Шестой.style.background = 'black';
    Восьмой.style.background = 'black';
    Шестой.style.pointerEvents = 'none';
    Восьмой.style.pointerEvents = 'none';
}

function RandomColor6_9(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Шестой.style.background = randColor;
//    Девятый.style.background = randColor;
}

function to6_9(){
    divKing.style.borderColor = "white";
    Шестой.style.background = 'black';
    Девятый.style.background = 'black';
    Шестой.style.pointerEvents = 'none';
    Девятый.style.pointerEvents = 'none';
}

function RandomColor6_10(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Шестой.style.background = randColor;
//    Десятый.style.background = randColor;
}

function to6_10(){
    divKing.style.borderColor = "white";
    Шестой.style.background = 'black';
    Десятый.style.background = 'black';
    Шестой.style.pointerEvents = 'none';
    Десятый.style.pointerEvents = 'none';
}

function RandomColor6_11(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Шестой.style.background = randColor;
//    Одинадцатый.style.background = randColor;
}

function to6_11(){
    divKing.style.borderColor = "white";
    Шестой.style.background = 'black';
    Одинадцатый.style.background = 'black';
    Шестой.style.pointerEvents = 'none';
    Одинадцатый.style.pointerEvents = 'none';
}

function RandomColor6_12(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Шестой.style.background = randColor;
//    Двенадцатый.style.background = randColor;
}

function to6_12(){
    divKing.style.borderColor = "white";
    Шестой.style.background = 'black';
    Двенадцатый.style.background = 'black';
    Шестой.style.pointerEvents = 'none';
    Двенадцатый.style.pointerEvents = 'none';
}

function RandomColor6_13(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Шестой.style.background = randColor;
//    Тренадцатый.style.background = randColor;
}

function to6_13(){
    divKing.style.borderColor = "white";
    Шестой.style.background = 'black';
    Тренадцатый.style.background = 'black';
    Шестой.style.pointerEvents = 'none';
    Тренадцатый.style.pointerEvents = 'none';
}

function RandomColor6_14(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Шестой.style.background = randColor;
//    Четырнадцатый.style.background = randColor;
}

function to6_14(){
    divKing.style.borderColor = "white";
    Шестой.style.background = 'black';
    Четырнадцатый.style.background = 'black';
    Шестой.style.pointerEvents = 'none';
    Четырнадцатый.style.pointerEvents = 'none';
}

function RandomColor6_15(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Шестой.style.background = randColor;
//    Пядтнадцатый.style.background = randColor;
}

function to6_15(){
    divKing.style.borderColor = "white";
    Шестой.style.background = 'black';
    Пядтнадцатый.style.background = 'black';
    Шестой.style.pointerEvents = 'none';
    Пядтнадцатый.style.pointerEvents = 'none';
}

function RandomColor6_16(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Шестой.style.background = randColor;
//    Шертнадцатый.style.background = randColor;
}

function to6_16(){
    divKing.style.borderColor = "white";
    Шестой.style.background = 'black';
    Шертнадцатый.style.background = 'black';
    Шестой.style.pointerEvents = 'none';
    Шертнадцатый.style.pointerEvents = 'none';
}

function RandomColor7_8(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Седьмой.style.background = randColor;
//    Восьмой.style.background = randColor;
}

function to7_8(){
    divKing.style.borderColor = "white";
    Седьмой.style.background = 'black';
    Восьмой.style.background = 'black';
    Седьмой.style.pointerEvents = 'none';
    Восьмой.style.pointerEvents = 'none';
}

function RandomColor7_9(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Седьмой.style.background = randColor;
//    Девятый.style.background = randColor;
}

function to7_9(){
    divKing.style.borderColor = "white";
    Седьмой.style.background = 'black';
    Девятый.style.background = 'black';
    Седьмой.style.pointerEvents = 'none';
    Девятый.style.pointerEvents = 'none';
}

function RandomColor7_10(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Седьмой.style.background = randColor;
//    Десятый.style.background = randColor;
}

function to7_10(){
    divKing.style.borderColor = "white";
    Седьмой.style.background = 'black';
    Десятый.style.background = 'black';
    Седьмой.style.pointerEvents = 'none';
    Десятый.style.pointerEvents = 'none';
}

function RandomColor7_11(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Седьмой.style.background = randColor;
//    Одинадцатый.style.background = randColor;
}

function to7_11(){
    divKing.style.borderColor = "white";
    Седьмой.style.background = 'black';
    Одинадцатый.style.background = 'black';
    Седьмой.style.pointerEvents = 'none';
    Одинадцатый.style.pointerEvents = 'none';
}

function RandomColor7_12(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Седьмой.style.background = randColor;
//    Двенадцатый.style.background = randColor;
}

function to7_12(){
    divKing.style.borderColor = "white";
    Седьмой.style.background = 'black';
    Двенадцатый.style.background = 'black';
    Седьмой.style.pointerEvents = 'none';
    Двенадцатый.style.pointerEvents = 'none';
}

function RandomColor7_13(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Седьмой.style.background = randColor;
//    Тренадцатый.style.background = randColor;
}

function to7_13(){
    divKing.style.borderColor = "white";
    Седьмой.style.background = 'black';
    Тренадцатый.style.background = 'black';
    Седьмой.style.pointerEvents = 'none';
    Тренадцатый.style.pointerEvents = 'none';
}

function RandomColor7_14(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Седьмой.style.background = randColor;
//    Четырнадцатый.style.background = randColor;
}

function to7_14(){
    divKing.style.borderColor = "white";
    Седьмой.style.background = 'black';
    Четырнадцатый.style.background = 'black';
    Седьмой.style.pointerEvents = 'none';
    Четырнадцатый.style.pointerEvents = 'none';
}

function RandomColor7_15(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Седьмой.style.background = randColor;
//    Пядтнадцатый.style.background = randColor;
}

function to7_15(){
    divKing.style.borderColor = "white";
    Седьмой.style.background = 'black';
    Пядтнадцатый.style.background = 'black';
    Седьмой.style.pointerEvents = 'none';
    Пядтнадцатый.style.pointerEvents = 'none';
}

function RandomColor7_16(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Седьмой.style.background = randColor;
//    Шертнадцатый.style.background = randColor;
}

function to7_16(){
    divKing.style.borderColor = "white";
    Седьмой.style.background = 'black';
    Шертнадцатый.style.background = 'black';
    Седьмой.style.pointerEvents = 'none';
    Шертнадцатый.style.pointerEvents = 'none';
}

function RandomColor8_9(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Восьмой.style.background = randColor;
//    Девятый.style.background = randColor;
}

function to8_9(){
    divKing.style.borderColor = "white";
    Восьмой.style.background = 'black';
    Девятый.style.background = 'black';
    Восьмой.style.pointerEvents = 'none';
    Девятый.style.pointerEvents = 'none';
}

function RandomColor8_10(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Восьмой.style.background = randColor;
//    Десятый.style.background = randColor;
}

function to8_10(){
    divKing.style.borderColor = "white";
    Восьмой.style.background = 'black';
    Десятый.style.background = 'black';
    Восьмой.style.pointerEvents = 'none';
    Десятый.style.pointerEvents = 'none';
}

function RandomColor8_11(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Восьмой.style.background = randColor;
//    Одинадцатый.style.background = randColor;
}

function to8_11(){
    divKing.style.borderColor = "white";
    Восьмой.style.background = 'black';
    Одинадцатый.style.background = 'black';
    Восьмой.style.pointerEvents = 'none';
    Одинадцатый.style.pointerEvents = 'none';
}

function RandomColor8_12(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Восьмой.style.background = randColor;
//    Двенадцатый.style.background = randColor;
}

function to8_12(){
    divKing.style.borderColor = "white";
    Восьмой.style.background = 'black';
    Двенадцатый.style.background = 'black';
    Восьмой.style.pointerEvents = 'none';
    Двенадцатый.style.pointerEvents = 'none';
}

function RandomColor8_13(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Восьмой.style.background = randColor;
//    Тренадцатый.style.background = randColor;
}

function to8_13(){
    divKing.style.borderColor = "white";
    Восьмой.style.background = 'black';
    Тренадцатый.style.background = 'black';
    Восьмой.style.pointerEvents = 'none';
    Тренадцатый.style.pointerEvents = 'none';
}

function RandomColor8_14(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Восьмой.style.background = randColor;
//    Четырнадцатый.style.background = randColor;
}

function to8_14(){
    divKing.style.borderColor = "white";
    Восьмой.style.background = 'black';
    Четырнадцатый.style.background = 'black';
    Восьмой.style.pointerEvents = 'none';
    Четырнадцатый.style.pointerEvents = 'none';
}

function RandomColor8_15(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Восьмой.style.background = randColor;
//    Пядтнадцатый.style.background = randColor;
}

function to8_15(){
    divKing.style.borderColor = "white";
    Восьмой.style.background = 'black';
    Пядтнадцатый.style.background = 'black';
    Восьмой.style.pointerEvents = 'none';
    Пядтнадцатый.style.pointerEvents = 'none';
}

function RandomColor8_16(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Восьмой.style.background = randColor;
//    Шертнадцатый.style.background = randColor;
}

function to8_16(){
    divKing.style.borderColor = "white";
    Восьмой.style.background = 'black';
    Шертнадцатый.style.background = 'black';
    Восьмой.style.pointerEvents = 'none';
    Шертнадцатый.style.pointerEvents = 'none';
}

function RandomColor9_10(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Девятый.style.background = randColor;
//    Десятый.style.background = randColor;
}

function to9_10(){
    divKing.style.borderColor = "white";
    Девятый.style.background = 'black';
    Десятый.style.background = 'black';
    Девятый.style.pointerEvents = 'none';
    Десятый.style.pointerEvents = 'none';
}

function RandomColor9_11(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Девятый.style.background = randColor;
//    Одинадцатый.style.background = randColor;
}

function to9_11(){
    divKing.style.borderColor = "white";
    Девятый.style.background = 'black';
    Одинадцатый.style.background = 'black';
    Девятый.style.pointerEvents = 'none';
    Одинадцатый.style.pointerEvents = 'none';
}

function RandomColor9_12(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Девятый.style.background = randColor;
//    Двенадцатый.style.background = randColor;
}

function to9_12(){
    divKing.style.borderColor = "white";
    Девятый.style.background = 'black';
    Двенадцатый.style.background = 'black';
    Девятый.style.pointerEvents = 'none';
    Двенадцатый.style.pointerEvents = 'none';
}

function RandomColor9_13(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Девятый.style.background = randColor;
//    Тренадцатый.style.background = randColor;
}

function to9_13(){
    divKing.style.borderColor = "white";
    Девятый.style.background = 'black';
    Тренадцатый.style.background = 'black';
    Девятый.style.pointerEvents = 'none';
    Тренадцатый.style.pointerEvents = 'none';
}

function RandomColor9_14(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Девятый.style.background = randColor;
//    Четырнадцатый.style.background = randColor;
}

function to9_14(){
    divKing.style.borderColor = "white";
    Девятый.style.background = 'black';
    Четырнадцатый.style.background = 'black';
    Девятый.style.pointerEvents = 'none';
    Четырнадцатый.style.pointerEvents = 'none';
}

function RandomColor9_15(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Девятый.style.background = randColor;
//    Пядтнадцатый.style.background = randColor;
}

function to9_15(){
    divKing.style.borderColor = "white";
    Девятый.style.background = 'black';
    Пядтнадцатый.style.background = 'black';
    Девятый.style.pointerEvents = 'none';
    Пядтнадцатый.style.pointerEvents = 'none';
}

function RandomColor9_16(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Девятый.style.background = randColor;
//    Шертнадцатый.style.background = randColor;
}

function to9_16(){
    divKing.style.borderColor = "white";
    Девятый.style.background = 'black';
    Шертнадцатый.style.background = 'black';
    Девятый.style.pointerEvents = 'none';
    Шертнадцатый.style.pointerEvents = 'none';
}

function RandomColor10_11(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Десятый.style.background = randColor;
//    Одинадцатый.style.background = randColor;
}

function to10_11(){
    divKing.style.borderColor = "white";
    Десятый.style.background = 'black';
    Одинадцатый.style.background = 'black';
    Десятый.style.pointerEvents = 'none';
    Одинадцатый.style.pointerEvents = 'none';
}

function RandomColor10_12(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Десятый.style.background = randColor;
//    Двенадцатый.style.background = randColor;
}

function to10_12(){
    divKing.style.borderColor = "white";
    Десятый.style.background = 'black';
    Двенадцатый.style.background = 'black';
    Десятый.style.pointerEvents = 'none';
    Двенадцатый.style.pointerEvents = 'none';
}

function RandomColor10_13(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Десятый.style.background = randColor;
//    Тренадцатый.style.background = randColor;
}

function to10_13(){
    divKing.style.borderColor = "white";
    Десятый.style.background = 'black';
    Тренадцатый.style.background = 'black';
    Десятый.style.pointerEvents = 'none';
    Тренадцатый.style.pointerEvents = 'none';
}

function RandomColor10_14(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Десятый.style.background = randColor;
//    Четырнадцатый.style.background = randColor;
}

function to10_14(){
    divKing.style.borderColor = "white";
    Десятый.style.background = 'black';
    Четырнадцатый.style.background = 'black';
    Десятый.style.pointerEvents = 'none';
    Четырнадцатый.style.pointerEvents = 'none';
}

function RandomColor10_15(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Десятый.style.background = randColor;
//    Пядтнадцатый.style.background = randColor;
}

function to10_15(){
    divKing.style.borderColor = "white";
    Десятый.style.background = 'black';
    Пядтнадцатый.style.background = 'black';
    Десятый.style.pointerEvents = 'none';
    Пядтнадцатый.style.pointerEvents = 'none';
}

function RandomColor10_16(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Десятый.style.background = randColor;
//    Шертнадцатый.style.background = randColor;
}

function to10_16(){
    divKing.style.borderColor = "white";
    Десятый.style.background = 'black';
    Шертнадцатый.style.background = 'black';
    Десятый.style.pointerEvents = 'none';
    Шертнадцатый.style.pointerEvents = 'none';
}

function RandomColor11_12(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Одинадцатый.style.background = randColor;
//    Двенадцатый.style.background = randColor;
}

function to11_12(){
    divKing.style.borderColor = "white";
    Одинадцатый.style.background = 'black';
    Двенадцатый.style.background = 'black';
    Одинадцатый.style.pointerEvents = 'none';
    Двенадцатый.style.pointerEvents = 'none';
}

function RandomColor11_13(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Одинадцатый.style.background = randColor;
//    Тренадцатый.style.background = randColor;
}

function to11_13(){
    divKing.style.borderColor = "white";
    Одинадцатый.style.background = 'black';
    Тренадцатый.style.background = 'black';
    Одинадцатый.style.pointerEvents = 'none';
    Тренадцатый.style.pointerEvents = 'none';
}

function RandomColor11_14(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Одинадцатый.style.background = randColor;
//    Четырнадцатый.style.background = randColor;
}

function to11_14(){
    divKing.style.borderColor = "white";
    Одинадцатый.style.background = 'black';
    Четырнадцатый.style.background = 'black';
    Одинадцатый.style.pointerEvents = 'none';
    Четырнадцатый.style.pointerEvents = 'none';
}

function RandomColor11_15(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Одинадцатый.style.background = randColor;
//    Пядтнадцатый.style.background = randColor;
}

function to11_15(){
    divKing.style.borderColor = "white";
    Одинадцатый.style.background = 'black';
    Пядтнадцатый.style.background = 'black';
    Одинадцатый.style.pointerEvents = 'none';
    Пядтнадцатый.style.pointerEvents = 'none';
}

function RandomColor11_16(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Одинадцатый.style.background = randColor;
//    Шертнадцатый.style.background = randColor;
}

function to11_16(){
    divKing.style.borderColor = "white";
    Одинадцатый.style.background = 'black';
    Шертнадцатый.style.background = 'black';
    Одинадцатый.style.pointerEvents = 'none';
    Шертнадцатый.style.pointerEvents = 'none';
}

function RandomColor12_13(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Двенадцатый.style.background = randColor;
//    Тренадцатый.style.background = randColor;
}

function to12_13(){
    divKing.style.borderColor = "white";
    Двенадцатый.style.background = 'black';
    Тренадцатый.style.background = 'black';
    Двенадцатый.style.pointerEvents = 'none';
    Тренадцатый.style.pointerEvents = 'none';
}

function RandomColor12_14(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Двенадцатый.style.background = randColor;
//    Четырнадцатый.style.background = randColor;
}

function to12_14(){
    divKing.style.borderColor = "white";
    Двенадцатый.style.background = 'black';
    Четырнадцатый.style.background = 'black';
    Двенадцатый.style.pointerEvents = 'none';
    Четырнадцатый.style.pointerEvents = 'none';
}

function RandomColor12_15(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Двенадцатый.style.background = randColor;
//    Пядтнадцатый.style.background = randColor;
}

function to12_15(){
    divKing.style.borderColor = "white";
    Двенадцатый.style.background = 'black';
    Пядтнадцатый.style.background = 'black';
    Двенадцатый.style.pointerEvents = 'none';
    Пядтнадцатый.style.pointerEvents = 'none';
}

function RandomColor12_16(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Двенадцатый.style.background = randColor;
//    Шертнадцатый.style.background = randColor;
}

function to12_16(){
    divKing.style.borderColor = "white";
    Двенадцатый.style.background = 'black';
    Шертнадцатый.style.background = 'black';
    Двенадцатый.style.pointerEvents = 'none';
    Шертнадцатый.style.pointerEvents = 'none';
}

function RandomColor13_14(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Тренадцатый.style.background = randColor;
//    Четырнадцатый.style.background = randColor;
}

function to13_14(){
    divKing.style.borderColor = "white";
    Тренадцатый.style.background = 'black';
    Четырнадцатый.style.background = 'black';
    Тренадцатый.style.pointerEvents = 'none';
    Четырнадцатый.style.pointerEvents = 'none';
}

function RandomColor13_15(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Тренадцатый.style.background = randColor;
//    Пядтнадцатый.style.background = randColor;
}

function to13_15(){
    divKing.style.borderColor = "white";
    Тренадцатый.style.background = 'black';
    Пядтнадцатый.style.background = 'black';
    Тренадцатый.style.pointerEvents = 'none';
    Пядтнадцатый.style.pointerEvents = 'none';
}

function RandomColor13_16(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Тренадцатый.style.background = randColor;
//    Шертнадцатый.style.background = randColor;
}

function to13_16(){
    divKing.style.borderColor = "white";
    Тренадцатый.style.background = 'black';
    Шертнадцатый.style.background = 'black';
    Тренадцатый.style.pointerEvents = 'none';
    Шертнадцатый.style.pointerEvents = 'none';
}

function RandomColor14_15(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Четырнадцатый.style.background = randColor;
//    Пядтнадцатый.style.background = randColor;
}

function to14_15(){
    divKing.style.borderColor = "white";
    Четырнадцатый.style.background = 'black';
    Пядтнадцатый.style.background = 'black';
    Четырнадцатый.style.pointerEvents = 'none';
    Пядтнадцатый.style.pointerEvents = 'none';
}

function RandomColor14_16(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Четырнадцатый.style.background = randColor;
//    Шертнадцатый.style.background = randColor;
}

function to14_16(){
    divKing.style.borderColor = "white";
    Четырнадцатый.style.background = 'black';
    Шертнадцатый.style.background = 'black';
    Четырнадцатый.style.pointerEvents = 'none';
    Шертнадцатый.style.pointerEvents = 'none';
}

function RandomColor15_16(){
    randNumber = getRandomInRange(0, arrayColor2.length -1);
    randColor = arrayColor2[randNumber];
    divKing.style.borderColor = randColor;
//    Пядтнадцатый.style.background = randColor;
//    Шертнадцатый.style.background = randColor;
}

function to15_16(){
    divKing.style.borderColor = "white";
    Пядтнадцатый.style.background = 'black';
    Шертнадцатый.style.background = 'black';
    Пядтнадцатый.style.pointerEvents = 'none';
    Шертнадцатый.style.pointerEvents = 'none';
}

function dis_time(){
  time_count +=1;
  time.innerHTML = time_count;
}

function blinking_frame_when_color_matches(frame_color) {

    if (divKing.style.borderColor == frame_color) {
        divKing.style.borderColor = "white";
        frame_color_white = false;
    } else {
      divKing.style.borderColor = "yellow";
      frame_color_white = true;
    }

    console.log(divKing.style.borderColor);
    console.log(frame_color_white);

    console.log(typeof frame_color);

}
