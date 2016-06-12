"use strict";

var Point2 = require("ndim/point2");

var windowSize = new Point2();
var sceneSize = new Point2();
var documentSize = new Point2(2000, 1000);
var offset = new Point2();
var ratio = new Point2();

var solar = new Point2();
var lunar = new Point2();

module.exports = Heavens;

function Heavens(body, scope) {
    // this.animator = scope.animator.add(this);
    this.window = scope.window;
    this.document = this.window.document;
    // this.animator.requestAnimation();
    this.day = 0;
    this.month = 0.5;
    // var day = Date.now() / 240000 * 2 % 1;
    // var month = 0.5; // A childish simplification
}

Heavens.prototype.redraw = function redraw() {
    var scene = this.document.querySelector("#scene");
    windowSize.x = this.window.innerWidth;
    windowSize.y = this.window.innerHeight;
    ratio.x = windowSize.x / 2000;
    ratio.y = windowSize.y / 1000;
    var scale = ratio.x < ratio.y ? ratio.y : ratio.x;
    sceneSize.become(documentSize).scaleThis(scale);
    offset.become(windowSize).subThis(sceneSize).scaleThis(0.5);
    scene.setAttribute("transform",
        "translate(" + offset.x.toFixed(2) + ", " + offset.y.toFixed(2) + ")" +
        " " +
        "scale(" + scale.toFixed(2) + ")" +
        ""
    );
    scene.style.display = "inline";

    var breadth = windowSize.x / documentSize.x / scale * 500;

    //window.document.querySelector("#atmosphere").style.opacity = 0;
    solar.y = (-Math.sin(2 * Math.PI * this.day) * 1000 + 1000).toFixed(2);
    lunar.y = (-Math.sin(2 * Math.PI * this.day + 2 * Math.PI * this.month) * 1000 + 1000).toFixed(2);
    solar.x = (-Math.cos(2 * Math.PI * this.day) * breadth + 1000).toFixed(2);
    lunar.x = (-Math.cos(2 * Math.PI * this.day + 2 * Math.PI * this.month) * breadth + 1000).toFixed(2);
    var cycle =
        Math.sin(2 * Math.PI * this.day) / 1 +
        Math.sin(6 * Math.PI * this.day) / 3 +
        Math.sin(10 * Math.PI * this.day) / 5 +
        Math.sin(14 * Math.PI * this.day) / 7;
        //Math.sin(18 * Math.PI * this.day) / 9;
    var clamped = Math.min(1, Math.max(-1, cycle * 1.5));
    var opacity = clamped / 2 + .5;
    this.document.querySelector("#atmosphere").style.opacity = opacity;
    var rotation = (this.day * 360).toFixed(2);
    this.document.querySelector("#stars").setAttribute("transform", "translate(1000, 750) rotate(" + rotation + ")");
    this.document.querySelector("#sun").setAttribute("transform", "translate(" + solar.x + ", " + solar.y + ")");
    this.document.querySelector("#moon").setAttribute("transform", "translate(" + lunar.x + ", " + lunar.y + ")");
};
