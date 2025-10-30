"use strict";

const getLionBtn = document.getElementById("lion")
const getDogBtn = document.getElementById("dog")
const getElephantBtn = document.getElementById("elephant")
const getMonkeyBtn = document.getElementById("monkey")

const getSkewBtn = document.getElementById("skew");
const getRotateBtn = document.getElementById("rotate");
const getFlipBtn = document.getElementById("flip");
const getScaleBtn = document.getElementById("scale");

// Nu begynder lyd filerne, de laver en sti til lyd mappen (sound)
const soundLion = new Audio();
soundLion.src="../sound/lion.wav";

const soundDog = new Audio ();
soundDog.src ="../sound/dog.wav";

const soundElephant = new Audio();
soundElephant.src ="../sound/elephant.wav";

const soundMonkey = new Audio();
soundMonkey.src ="../sound/monkey.wav";

// Nu skal vi have knapperne til at virke = det gidder de ik lol
if (getLionBtn) {
    getLionBtn.addEventListener("click", () => {
        soundLion.play();
    });
}

if (getDogBtn) {
    getDogBtn.addEventListener("click", () => {
        soundDog.play();
  });
}

if (getElephantBtn) {
    getElephantBtn.addEventListener("click", () => {
        soundElephant.play();
  });
}

if (getMonkeyBtn) {
    getMonkeyBtn.addEventListener("click", () => {
        soundMonkey.play();
  });
}

// Nu skal vi få de nederste knapepr til at funke
if(getSkewBtn) {
    const getImagElem = document.querySelector("#animal img");
    getSkewBtn.addEventListener("click", ()=> {
        getImagElem.classList.add("anim-skew");
    });
}

if (getRotateBtn) {
  const getImagElem = document.querySelector("#animal img");
  getRotateBtn.addEventListener("click", () => {
    getImagElem.classList.add("anim-rotate");
  });
}

if (getFlipBtn) {
  const getImagElem = document.querySelector("#animal img");
  getFlipBtn.addEventListener("click", () => {
    getImagElem.classList.add("anim-flip");
  });
}

if (getScaleBtn) {
  const getImagElem = document.querySelector("#animal img");
  getScaleBtn.addEventListener("click", () => {
    getImagElem.classList.add("anim-scale");
  });
}