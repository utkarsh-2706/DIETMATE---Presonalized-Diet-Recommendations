function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight values.");
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    var result = "Your BMI is: " + bmi.toFixed(2) + " - ";

    if (bmi < 18.5) {
        result += "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result += "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        result += "Overweight";
    } else {
        result += "Obese";
    }

    document.getElementById('result').innerHTML = result;
}