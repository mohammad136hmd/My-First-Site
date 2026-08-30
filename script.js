const display = document.querySelector(".text");
const buttons = document.querySelectorAll("input[type='button']");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const value = button.value;


        if (value === "AC") {
            display.value = "";
        }


        else if (value === "Del") {
            display.value = display.value.slice(0, -1);
        }


        else if (value === "=") {
            try {
                let expression = display.value.replace("X", "*");
                display.value = eval(expression);
            } catch {
                display.value = "اشتباه نوشته اید";
            }
        }


        else {
            display.value += value;
        }

    });

});