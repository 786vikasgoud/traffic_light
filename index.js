let outerdiv = document.createElement("div");
outerdiv.className = "outerdiv";
outerdiv.style.display = "flex";
outerdiv.style.width = "200px";
outerdiv.style.height = "350px";
outerdiv.style.backgroundColor = "black";
let innerdiv1 = document.createElement("div");
innerdiv1.className = "innerdiv1";
innerdiv1.style.width = "100px";
innerdiv1.style.height = "100px";
innerdiv1.style.backgroundColor = "gray";
let innerdiv2 = document.createElement("div");
innerdiv2.className = "innerdiv2";
innerdiv2.style.width = "100px";
innerdiv2.style.height = "100px";
innerdiv2.style.backgroundColor = "gray";
let innerdiv3 = document.createElement("div");
innerdiv3.className = "innerdiv3";
innerdiv3.style.width = "100px";
innerdiv3.style.height = "100px";
innerdiv3.style.backgroundColor = "gray";

outerdiv.appendChild(innerdiv1);
outerdiv.appendChild(innerdiv2);
outerdiv.appendChild(innerdiv3);

let body = document.querySelector("body");
console.log(body);
body.appendChild(outerdiv);

let div = document.querySelector(`.innerdiv1`);
let div2 = document.querySelector(`.innerdiv2`);
let div3 = document.querySelector(`.innerdiv3`);

///////////////////////  CALLSBACKS  /////////////////

function red() {
  setTimeout(() => {
    div3.style.backgroundColor = "grey";
    div.style.backgroundColor = "red";
    yello();
  }, 3000);
}
function yello(cb) {
  setTimeout(() => {
    div.style.backgroundColor = "grey";
    div2.style.backgroundColor = "yellow";
    green();
  }, 3000);
}
function green(cb) {
  setTimeout(() => {
    div2.style.backgroundColor = "grey";
    div3.style.backgroundColor = "green";
    red();
  }, 3000);
}
red();

/////////////////// PROMISES /////////////////////

function red() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      div3.style.backgroundColor = "grey";
      div.style.backgroundColor = "red";
      res("yello()");
    }, 3000);
  });
}
function yello() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      div.style.backgroundColor = "grey";
      div2.style.backgroundColor = "yellow";
      res("green()");
    }, 3000);
  });
}
function green() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      div2.style.backgroundColor = "grey";
      div3.style.backgroundColor = "green";
      res("red()");
    }, 3000);
  });
}

red()
  .then((data) => {
    return yello();
  })
  .then((data) => {
    return green();
  })
  .then((data) => {
    return red();
  });

/////////////////// ASYNC AWAIT /////////////////////

function red() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      div.style.backgroundColor = "red";
      div3.style.backgroundColor = "grey";
      res();
    }, 3000);
  });
}
function yello() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      div.style.backgroundColor = "grey";
      div2.style.backgroundColor = "yellow";
      res();
    }, 3000);
  });
}
function green() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      div2.style.backgroundColor = "grey";
      div3.style.backgroundColor = "green";
      res();
    }, 3000);
  });
}

let asy = async () => {
  await red();
  await yello();
  await green().then((data) => {
    asy();
  });
};
asy();
