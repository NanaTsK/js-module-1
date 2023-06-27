const counter = {
    value: 0,
    increment() {
        console.log("increment -> this", this);
        this.value += 1;
    },
    decrement() {
        console.log("decrement -> this", this);
        this.value -= 1;
    },
};

const incrementBtn = document.querySelector(".js-increment");
const decrementBtn = document.querySelector(".js-decrement");
const valueEl = document.querySelector(".js-value");

console.log(incrementBtn);
console.log(decrementBtn);
console.log(valueEl);

incrementBtn.addEventListener("click", function() {
    console.log("did you click on increse btn?");

    counter.increment();
    console.log(counter);

    valueEl.textContent = counter.value;
});

decrementBtn.addEventListener("click", function() {
    console.log("did you click on decrese btn?");

    counter.decrement();
    console.log(counter);

    valueEl.textContent = counter.value;
});