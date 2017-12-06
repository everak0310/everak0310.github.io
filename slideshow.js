/*eslint no-console: ["error", { allow: ["log"] }] */
/*eslint no-unused-vars: ["error", { "args": "none" }]*/
/* eslint-env browser */

var urls = ["food.JPG",
"beach.JPG",
"fashion.JPG",
"travel.JPG",
"workout.JPG",
"loves.PNG",
"us.JPG",
"army.JPG"];

var current_p = 0

function mod(n, m) {
    return ((n % m) + m) % m;
}

function left() {
    console.log("left");
    document.querySelector("#slideshowimage").src = urls[current_p];
    current_p -= 1;
    current_p = mod(current_p, urls.length);
}

function right() {
    console.log("current_p " + current_p);
    document.querySelector("#slideshowimage").src = urls[current_p];
    current_p += 1;
    current_p = current_p % urls.length;


}
document.querySelector(".left").addEventListener("click", function (event) {
    left();
})
document.querySelector(".right").addEventListener("click", function (event) {
    right();
})
