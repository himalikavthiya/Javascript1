const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

let input = "";

for (let key of keys) {
    const value = key.dataset.key;
    key.addEventListener('click', () => {
        //set clear button
    
        if (value == "clear") {
            input = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
            // set backspace button
        } else if (value == "backspace") {
            input = input.slice(0, -1);
            display_input.innerHTML = cleanInput(input);
            //set result button
        } else if (value == "=") {
            let result = eval(input);
            display_output.innerHTML = cleanOutput(result);
            //set last digit remove button
        } else if (value == "remove") {
            input = input.substring(0, input.length - 1);
            display_input.innerHTML = cleanInput(input);;
        } else {
            if (validInput(value)) {
                input += value;
                display_input.innerHTML = cleanInput(input);
            }
        }
    })
}
  
//input oprator styling
cleanInput = (input) => {
    let input_array = input.split("");
    let input_arr_length = input_array.length;

    for (let i = 0; i < input_arr_length; i++) {
        if (input_array[i] == "*") {
            input_array[i] = `<span class="operator">x</span>`;
        } else if (input_array[i] == "/") {
            input_array[i] = `<span class="operator">/</span>`;
        } else if (input_array[i] == "+") {
            input_array[i] = `<span class="operator">+</span>`;
        } else if (input_array[i] == "-") {
            input_array[i] = `<span class="operator">-</span>`;
        } else if (input_array[i] == "%") {
            input_array[i] = `<span class="operator">%</span>`;
        }
    }
    return input_array.join("");
}

//set decimal value 
cleanOutput = (output) => {
    let output_string = output.toString();
    let decimal = output_string.split(".")[1];
    output_string = output_string.split(".")[0];

    let output_array = output_string.split("");

    if (output_array.length > 3) {
        for (let i = output_array.length - 3; i > 0; i -= 3) {
            output_array.splice(i, 0, ",");
        }
    }
    if (decimal) {
        output_array.push(".");
        output_array.push(decimal);
    }
    return output_array.join("");
}
//invalidinput is notvalid
validInput = (value) => {
    let last_input = input.slice(-1);
    let operators = ["+", "-", "*", "/", "%"];

    if (value == "." && last_input == ".") {
        return false;
    }
    if (operators.includes(value)) {
        if (operators.includes(last_input)) {
            return false;
        } else {
            return true;
        }
    }
    return true;
}