let head = document.querySelector("#head");
let albumb = document.querySelector("#albumb");
let leftButton = document.querySelector("#leftButton");
let rightButton = document.querySelector("#rightButton");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");


//buttons functionality

let arrOfClassesLeft = ["leftUnseen", "leftEnd", "middle", "rightEnd", "rightUnseen"];
let transitionsLeftToRight = [
    "rightUnseenToRightEnd",
    "leftUnseenToRightUnseen",
    "leftEndToLeftUnseen",
    "middleToLeftEnd",
    "rightEndToMiddle"
];


leftButton.addEventListener("mouseover", () => {
    leftButton.style.backgroundColor = "white";
});

leftButton.addEventListener("mouseout", () => {
    leftButton.style.backgroundColor = "black";
});

function shiftArrayRight(arr) {
    let lastElement = arr[arr.length - 1];

    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    arr[0] = lastElement;
}

leftButton.addEventListener("click", () => {
    one.classList.remove(arrOfClassesLeft[0]);
    one.classList.add(arrOfClassesLeft[4]);

    two.classList.remove(arrOfClassesLeft[1]);
    two.classList.add(arrOfClassesLeft[0]);

    three.classList.remove(arrOfClassesLeft[2]);
    three.classList.add(arrOfClassesLeft[1]);

    four.classList.remove(arrOfClassesLeft[3]);
    four.classList.add(arrOfClassesLeft[2]);

    five.classList.remove(arrOfClassesLeft[4]);
    five.classList.add(arrOfClassesLeft[3]);

    one.classList.remove(transitionsRightToLeft[0]);
one.classList.remove(transitionsRightToLeft[1]);
one.classList.remove(transitionsRightToLeft[2]);
one.classList.remove(transitionsRightToLeft[3]);
one.classList.remove(transitionsRightToLeft[4]);

two.classList.remove(transitionsRightToLeft[0]);
two.classList.remove(transitionsRightToLeft[1]);
two.classList.remove(transitionsRightToLeft[2]);
two.classList.remove(transitionsRightToLeft[3]);
two.classList.remove(transitionsRightToLeft[4]);

three.classList.remove(transitionsRightToLeft[0]);
three.classList.remove(transitionsRightToLeft[1]);
three.classList.remove(transitionsRightToLeft[2]);
three.classList.remove(transitionsRightToLeft[3]);
three.classList.remove(transitionsRightToLeft[4]);

four.classList.remove(transitionsRightToLeft[0]);
four.classList.remove(transitionsRightToLeft[1]);
four.classList.remove(transitionsRightToLeft[2]);
four.classList.remove(transitionsRightToLeft[3]);
four.classList.remove(transitionsRightToLeft[4]);

five.classList.remove(transitionsRightToLeft[0]);
five.classList.remove(transitionsRightToLeft[1]);
five.classList.remove(transitionsRightToLeft[2]);
five.classList.remove(transitionsRightToLeft[3]);
five.classList.remove(transitionsRightToLeft[4]);

    one.classList.remove(transitionsLeftToRight[0]);
    one.classList.remove(transitionsLeftToRight[1]);
    one.classList.remove(transitionsLeftToRight[2]);
    one.classList.remove(transitionsLeftToRight[3]);
    one.classList.remove(transitionsLeftToRight[4]);

    two.classList.remove(transitionsLeftToRight[0]);
    two.classList.remove(transitionsLeftToRight[1]);
    two.classList.remove(transitionsLeftToRight[2]);
    two.classList.remove(transitionsLeftToRight[3]);
    two.classList.remove(transitionsLeftToRight[4]);

    three.classList.remove(transitionsLeftToRight[0]);
    three.classList.remove(transitionsLeftToRight[1]);
    three.classList.remove(transitionsLeftToRight[2]);
    three.classList.remove(transitionsLeftToRight[3]);
    three.classList.remove(transitionsLeftToRight[4]);

    four.classList.remove(transitionsLeftToRight[0]);
    four.classList.remove(transitionsLeftToRight[1]);
    four.classList.remove(transitionsLeftToRight[2]);
    four.classList.remove(transitionsLeftToRight[3]);
    four.classList.remove(transitionsLeftToRight[4]);

    five.classList.remove(transitionsLeftToRight[0]);
    five.classList.remove(transitionsLeftToRight[1]);
    five.classList.remove(transitionsLeftToRight[2]);
    five.classList.remove(transitionsLeftToRight[3]);
    five.classList.remove(transitionsLeftToRight[4]);

    one.classList.add(transitionsLeftToRight[1]);

    two.classList.add(transitionsLeftToRight[2]);

    three.classList.add(transitionsLeftToRight[3]);

    four.classList.add(transitionsLeftToRight[4]);

    five.classList.add(transitionsLeftToRight[0]);


    shiftArrayRight(arrOfClassesLeft);
    shiftArrayRight(arrOfClassesRight);
    shiftArrayRight(transitionsRightToLeft);
    shiftArrayRight(transitionsLeftToRight);
    console.log(transitionsRightToLeft);
});


let arrOfClassesRight = ["leftUnseen", "leftEnd", "middle", "rightEnd", "rightUnseen"];
let transitionsRightToLeft = [
    "rightUnseenToLeftUnseen",
    "leftUnseenToLeftEnd",
    "leftEndToMiddle",
    "middleToRightEnd",
    "rightEndToRightUnseen",
];
rightButton.addEventListener("mouseover", () => {
    rightButton.style.backgroundColor = "white";
});

rightButton.addEventListener("mouseout", () => {
    rightButton.style.backgroundColor = "black";
});

function shiftArrayLeft(arr) {
    let firstElement = arr[0];
    
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    
    arr[arr.length - 1] = firstElement;
}

rightButton.addEventListener("click", () => {
    // Applying transitions manually
one.classList.remove(arrOfClassesRight[0]);
one.classList.add(arrOfClassesRight[1]);

two.classList.remove(arrOfClassesRight[1]);
two.classList.add(arrOfClassesRight[2]);

three.classList.remove(arrOfClassesRight[2]);
three.classList.add(arrOfClassesRight[3]);

four.classList.remove(arrOfClassesRight[3]);
four.classList.add(arrOfClassesRight[4]);

five.classList.remove(arrOfClassesRight[4]);
five.classList.add(arrOfClassesRight[0]);

// To achieve your specific case:
one.classList.remove(transitionsLeftToRight[0]);
one.classList.remove(transitionsLeftToRight[1]);
one.classList.remove(transitionsLeftToRight[2]);
one.classList.remove(transitionsLeftToRight[3]);
one.classList.remove(transitionsLeftToRight[4]);

two.classList.remove(transitionsLeftToRight[0]);
two.classList.remove(transitionsLeftToRight[1]);
two.classList.remove(transitionsLeftToRight[2]);
two.classList.remove(transitionsLeftToRight[3]);
two.classList.remove(transitionsLeftToRight[4]);

three.classList.remove(transitionsLeftToRight[0]);
three.classList.remove(transitionsLeftToRight[1]);
three.classList.remove(transitionsLeftToRight[2]);
three.classList.remove(transitionsLeftToRight[3]);
three.classList.remove(transitionsLeftToRight[4]);

four.classList.remove(transitionsLeftToRight[0]);
four.classList.remove(transitionsLeftToRight[1]);
four.classList.remove(transitionsLeftToRight[2]);
four.classList.remove(transitionsLeftToRight[3]);
four.classList.remove(transitionsLeftToRight[4]);

five.classList.remove(transitionsLeftToRight[0]);
five.classList.remove(transitionsLeftToRight[1]);
five.classList.remove(transitionsLeftToRight[2]);
five.classList.remove(transitionsLeftToRight[3]);
five.classList.remove(transitionsLeftToRight[4]);

one.classList.remove(transitionsRightToLeft[0]);
one.classList.remove(transitionsRightToLeft[1]);
one.classList.remove(transitionsRightToLeft[2]);
one.classList.remove(transitionsRightToLeft[3]);
one.classList.remove(transitionsRightToLeft[4]);

two.classList.remove(transitionsRightToLeft[0]);
two.classList.remove(transitionsRightToLeft[1]);
two.classList.remove(transitionsRightToLeft[2]);
two.classList.remove(transitionsRightToLeft[3]);
two.classList.remove(transitionsRightToLeft[4]);

three.classList.remove(transitionsRightToLeft[0]);
three.classList.remove(transitionsRightToLeft[1]);
three.classList.remove(transitionsRightToLeft[2]);
three.classList.remove(transitionsRightToLeft[3]);
three.classList.remove(transitionsRightToLeft[4]);

four.classList.remove(transitionsRightToLeft[0]);
four.classList.remove(transitionsRightToLeft[1]);
four.classList.remove(transitionsRightToLeft[2]);
four.classList.remove(transitionsRightToLeft[3]);
four.classList.remove(transitionsRightToLeft[4]);

five.classList.remove(transitionsRightToLeft[0]);
five.classList.remove(transitionsRightToLeft[1]);
five.classList.remove(transitionsRightToLeft[2]);
five.classList.remove(transitionsRightToLeft[3]);
five.classList.remove(transitionsRightToLeft[4]);


one.classList.add(transitionsRightToLeft[1]);

two.classList.add(transitionsRightToLeft[2]);

three.classList.add(transitionsRightToLeft[3]);

four.classList.add(transitionsRightToLeft[4]);

five.classList.add(transitionsRightToLeft[0]);


    shiftArrayLeft(arrOfClassesRight);
    shiftArrayLeft(arrOfClassesLeft);
    shiftArrayLeft(transitionsRightToLeft);
    shiftArrayLeft(transitionsLeftToRight);
    console.log(transitionsRightToLeft);

});
