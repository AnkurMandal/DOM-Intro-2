const body = document.body;
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const button = document.querySelector(".btn");
/**
 * first capturing phase happend, than bubbling phase occur
 * 
 *  true -> capturing phase
 *  false -> bubbling phase
 * 
 *  html -> body -> parent -> child(target event)
 *  ----------->------------>-----------------
 *             in Capturing phase
 * 
 *  child(target event) -> parent -> body -> html
 *  ----------->------------>-----------------
 *             in bubbling phase
 * 
 * event.target => return the targeted html event
 * 
 * event.currentTarget => return the current event html in which event.currentTarget is invoke.
 * 
 * event.stopPropagation => event will not be propagated to another HTML element
 * 
 * event.stopImmediatePropagation => stops the propagation immediately
 * 
 */

// body.addEventListener("click", () => {
//     console.log("body click listener");
// }, false);


parent.addEventListener("click", (event) => {
    // console.log(event.target);
    // console.log(event.currentTarget);
    // event.stopImmediatePropagation();
    console.log("1");
}, true);
parent.addEventListener("click", () => {
    console.log("2");
}, true);
parent.addEventListener("click", (event) => {
    console.log("3");
    // event.stopImmediatePropagation();
    event.stopPropagation();

}, false);

child.addEventListener("click", (event) => {
    // console.log(event.target);
    // console.log(event.currentTarget);
    console.log("4");
});

child.addEventListener("click", () => {
    console.log("5");

}, false);
child.addEventListener("click", () => {
    console.log("6");
}, true);


// button.addEventListener("click", () => {
//     console.log("button click listener");
// }, false);
