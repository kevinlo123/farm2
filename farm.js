$(document).ready(function(){

function random() {
  return Math.floor(Math.random()*700);
}

  $("#cow").on("click" , function (){
    $("#cow").css("top" , random() + "px");
      $("#cow").css("left" , random() + "px");
      var audio = document.getElementById("audio");
      audio.play();
  });

});

$(document).ready(function(){

function random() {
  return Math.floor(Math.random()*700);
}

  $("#sheep").on("click" , function (){
    $("#sheep").css("top" , random() + "px");
      $("#sheep").css("left" , random() + "px");
      var audio = document.getElementById("audioSheep");
      audio.play();
  });

});

$(document).ready(function(){

  function random(){
    return Math.floor(Math.random()*700);
  }

  $("#chicken").on("click" ,function(){
    $("#chicken").css("top" , random() + "px");
    $("chicken").css("left" , random() + "px");
    var audio = document.getElementById("audioChicken");
    audio.play();
  });

});

$(document).ready(function(){

  function random(){
    return Math.floor(Math.random()*700);
  }

  $("#dog").on("click" ,function(){
    $("#dog").css("top" , random() + "px");
    $("dog").css("left" , random() + "px");
    var audio = document.getElementById("audioDog");
    audio.play();
  });

});


$(document).ready(function(){

  function random(){
    return Math.floor(Math.random()*700);
  }

  $("#pig").on("click" ,function(){
    $("#pig").css("top" , random() + "px");
    $("pig").css("left" , random() + "px");
    var audio = document.getElementById("audioPig");
    audio.play();
  });

});










/********************
when user clicks on animals they move to random location
*********************/

/*var cow = document.getElementById('cow');

cow.onclick=function(){
    var x = (Math.random()*700);
    var y = (Math.random()*700);
    cow.style.top = x + 'px';
    cow.style.left = y + 'px';
    var audio = document.getElementById("audio");
    audio.play();

};

var sheep = document.getElementById('sheep');

sheep.onclick=function(){
    var x = (Math.random()*700);
    var y = (Math.random()*700);
    sheep.style.top = x + 'px';
    sheep.style.left = y + 'px';
    var audio = document.getElementById("audioSheep");
    audio.play();
};

var chicken = document.getElementById('chicken');

chicken.onclick=function(){
    var x = (Math.random()*700);
    var y = (Math.random()*700);
    chicken.style.top = x + 'px';
    chicken.style.left = y + 'px';
    var audio = document.getElementById("audioChicken");
    audio.play();
};

var dog = document.getElementById('dog');

dog.onclick=function(){
    var x = (Math.random()*700);
    var y = (Math.random()*700);
    dog.style.top = x + 'px';
    dog.style.left = y + 'px';
    var audio = document.getElementById("audioDog");
    audio.play();
};

var pig = document.getElementById('pig');

pig.onclick=function(){
    var x = (Math.random()*700);
    var y = (Math.random()*700);
    pig.style.top = x + 'px';
    pig.style.left = y + 'px';
    var audio = document.getElementById("audioPig");
    audio.play();
};*/
