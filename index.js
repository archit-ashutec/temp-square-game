"use strict";
const oldArray = [];
const count = function () {
  const set = new Set();
  const n = 16;
  while (set.size < n) {
    let randomNo = Math.floor(Math.random() * n + 1);
    set.add(randomNo);
  }
  var newArray = [...set];
  oldArray.push(...newArray);
};
count();
let i = 0;

const t = setInterval(() => {
  if (i < oldArray.length) {
    const El = document.getElementById(oldArray[i]);
    El.classList.add("hidden");
    i++;
  } else {
    clearInterval();
  }
}, 250);
