let element = document.querySelector("h1");

// this one wuxu so daabaca byid marka uu yahay
console.log(element);


// mrkiii id lso dabacayo
let element1 = document.querySelector("#element1");
console.log(element1);

// mrkii class lso dabacayo
let element2 = document.querySelector(".element2");
console.log(element2);

// html div kiisa inta kuso xer 
let main = document.querySelector("#main")

// adding element to the dom

let newElement = document.createElement("p");

console.log(newElement);

// new content ayaad abuuri karta

let newContent = document.createTextNode("welcome to the new element");

// wax hadaa rabtid inaa kusii xertid welcome ta oo kusii dhajisid

newElement.append(newContent);
main.append(newElement);

console.log(newContent);


// marakle hadii aad daabacdo kawawran

let newElement2 = document.createElement("p");
let newContent2 = document.createTextNode("welcome to the new element");

// appendChild waa marka aaa div div kale dhexgalinesid sida 
// <div>
//      <div></div
// </div>

newElement2.appendChild(newContent2);
main.append(newElement2);

console.log(newContent2);

// how to remove element

newElement2.remove();


// marka rabtid in style class ku dartid

let div = document.querySelector(div);
console.log(div.classList);

div.classList.add("success");
div.classList.remove("success");

div.classList.add("error");


// padding inaa ku dartid markaa rabtid

let p = document.querySelector("p");
p.style.fontSize = "50px";

// markaa rabtid div ka dhan inaa wax ka badashid 

div.style.border = "1px solid #f30606";


let button = document.querySelector("button");

// even inaa ku xertid marka rabtid button kii hada aa samesey

button.addEventListener("click", () => {
    console.log("click here");
    // ama alert waxaa lo isticmala pop up at time aa click siisid alert aa soo boodayo
    alert("clicked");
} );

// mouseover ayaa jiro oo button ka marka cassor ka saartid in event dhaco

button.addEventListener("mouseover", () => {
    document.body.style = "background: #f30606";
});

// hada eventigii dhacay oo over ka aha in uu dib u celiyo

button.addEventListener("mouseleave", () => {
    document.body.style = "background: #f30606";
});


// Keybourd event

// onkeydown : the event occurs when the user is pressing a key 
// onkeypress : the event occur when the user presses a key 
// onkeyup : the event occurs when the user releases a key


let typing = document.querySelector("#typing");
let clone = document.querySelector("#clone");

typing.addEventListener("keyup", ()=> {
    clone.innerHTML = typing.value;
});


