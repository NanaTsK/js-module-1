let letterButtons =
    document.querySelectorAll("#letterButtons button");
let result =
    document.getElementById("result");
let image = document.getElementsByTagName("img")[0];
let correctLetter = "A";
let word =
    document.querySelector("h2");
letterButtons.forEach(button => {
    button.addEventListener("click",
        function () {
            let letter = this.textContent;
            if (letter !== correctLetter) {
                button.disabled = true;
            }
            if (letter === correctLetter) {
                result.innerHTML = "Correct!";
                result.style.color = "#046865";
                image.style.display = "flex";
                image.src = "http://placekitten.com/200/300";
                word.textContent = "C A T";
                letterButtons.forEach(button => {
                    button.disabled = true;
                })
            } else {
                result.innerHTML = "Try again";
                result.style.color = "#D1345B";
            }
        });
});