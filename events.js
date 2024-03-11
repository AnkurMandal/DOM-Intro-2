/**
 * Events a user can make on a website :
 *  click
 *  doubleclick
 *  submit
 *  keyboard events
 *  dragging
 *  change, zoom in
 *  scroll
 *  reset 
 *  drawing => (mousedown, mousemove, mouseup )
 *  focus 
 *  blur
 * 
 * 
 * custom events
 */

// const [span] = document.getElementsByTagName("span");

// console.log(span);

/**
 * Event handler => is function which will be triggered/executed upon making that event
 * 
 * addEventListener => takes minimum of 2 parameters
 *     i)Event type     ii)Event listener/callback
 * 
 * 
 * Advantages of adding event listeners from javascript instead of inside HTML
 *      1) Clean Code
 *      2) Any number of event listeners we can add
 *      3) we can remove any event listener dynamically.(by using removeEventListener)
 *      4)we get the event object (gives details about the event)
 */

// let listener1 = function (event) {
//     console.log(event);
//     console.log("first listener");
// };
// let listener2 = function (event) {
//     console.log(event);
//     console.log("second listener");
// };

// span.addEventListener("click", listener1);
// span.addEventListener("click", listener2);


// const btn = document.getElementById("btn");
// span.removeEventListener("click", listener1);


const input = document.querySelectorAll("input")[0];

// input.addEventListener("focus", () => {
//     console.log("focused on the input");
// })
// input.addEventListener("blur", () => {
//     console.log("blurred the input");
// })

const students = [
    "Rajesh",
    "Praveen",
    "Nikhil",
    "Manoy",
    "Rahul",
    "Adavi",
    "Ansari",
    "Sonu",
    "Javed",
    "Riya"
];

const namesContainer = document.getElementById("names-container");

input.addEventListener("input", (event) => {

    namesContainer.innerText = "";

    let searchValued = event.target.value.toLowerCase();

    if (searchValued === "") return;

    students.forEach(student => {
        if (student.toLowerCase().includes(searchValued)) {

            const para = document.createElement("p");
            para.innerText = student;

            namesContainer.appendChild(para);

        }
    })
})

