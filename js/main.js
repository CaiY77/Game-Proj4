let x = 0;

function count() {
  x += .5;
  coun.ter.value = x;
}

function penalty() {
  x--;
  coun.ter.value = x;
}

function bonus() {
  x += 10;
  coun.ter.value = x;
}

function move() {
  document.getElementById('instr').style.display = 'none';
  document.getElementById('start').style.display = 'none';
  document.getElementById('rT').style.display = 'block';

  var obj = document.getElementById('bird');
  var birdPos = -200;
  var id = setInterval(fly, 5);

  function fly() {
    if (birdPos == 620) {
      clearInterval(id);
    } else {
      birdPos++;
      obj.style.left = birdPos + 'px';
    }
  }

  cloudMove();
  cloud2Move();
  cloud3Move();
  setTimeout(cloud4Move, 6000);
  setTimeout(cloud5Move, 2000);
  cloud6Move();


  setTimeout(buildingMove, 5000);
  setTimeout(planeMove, 6000);
} // bird

function cloudMove() {
  var obj4 = document.getElementById('cloud');
  var cloudPos = 900;
  var id4 = setInterval(float, 10);

  function float() {
    if (cloudPos == -300) {
      clearInterval(id4);
    } else {
      cloudPos--;
      obj4.style.left = cloudPos + 'px';
    }
  }
}

function cloud2Move() {
  var obj5 = document.getElementById('cloud2');
  var cloud2Pos = 390;
  var id5 = setInterval(float2, 10);

  function float2() {
    if (cloud2Pos == -300) {
      clearInterval(id5);
    } else {
      cloud2Pos--;
      obj5.style.left = cloud2Pos + 'px';
    }
  }
}

function cloud3Move() {
  var obj6 = document.getElementById('cloud3');
  var cloud3Pos = 150;
  var id6 = setInterval(float3, 10);

  function float3() {
    if (cloud3Pos == -300) {
      clearInterval(id6);
    } else {
      cloud3Pos--;
      obj6.style.left = cloud3Pos + 'px';
    }
  }
}

function cloud4Move() {
  var obj7 = document.getElementById('cloud4');
  obj7.style.display = "block";
  var cloud4Pos = 1600;
  var id7 = setInterval(float4, 10);

  function float4() {
    if (cloud4Pos == 800) {
      clearInterval(id7);
    } else {
      cloud4Pos--;
      obj7.style.left = cloud4Pos + 'px';
    }
  }
}

function cloud5Move() {
  var obj8 = document.getElementById('cloud5');
  obj8.style.display = "block";
  var cloud5Pos = 1600;
  var id8 = setInterval(float5, 10);

  function float5() {
    if (cloud5Pos == 400) {
      clearInterval(id8);
    } else {
      cloud5Pos--;
      obj8.style.left = cloud5Pos + 'px';
    }
  }
}

function cloud6Move() {
  var obj9 = document.getElementById('cloud6');
  obj9.style.display = "block";
  var cloud6Pos = 1300;
  var id9 = setInterval(float6, 10);

  function float6() {
    if (cloud6Pos == -100) {
      clearInterval(id9);
    } else {
      cloud6Pos--;
      obj9.style.left = cloud6Pos + 'px';
    }
  }
}



function finish() {
  obj = document.getElementById('bird');
  birdPos = 620;
  var id = setInterval(fly, 5);

  function fly() {
    if (birdPos == 1500) {
      clearInterval(id);
      alert(`GAME OVER! You scored ${x} points!`);
    } else {
      birdPos++;
      obj.style.left = birdPos + 'px';
    }
  }
}

function buildingMove() {
  var obj2 = document.getElementById('building');
  obj2.style.display = "block";
  var buildPos = 1350;
  var id2 = setInterval(build, 5);

  function build() {
    if (buildPos == -500) {
      clearInterval(id2);
    } else {
      buildPos--;
      obj2.style.left = buildPos + 'px';
    }
  }
  setTimeout(finish, 5000)
} // building

function planeMove() {
  var obj3 = document.getElementById('plane');
  obj3.style.display = "block";
  var planePos = 1350;
  var id3 = setInterval(plane, 5);

  function plane() {
    if (planePos == -500) {
      clearInterval(id3);
    } else {
      planePos -= 5;
      obj3.style.left = planePos + 'px';
    }
  }
}
