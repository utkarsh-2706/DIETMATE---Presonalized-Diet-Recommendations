function calculateNutrition() {
    var gender = document.getElementById('gender').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var age = parseFloat(document.getElementById('age').value);
    var activityLevel = document.getElementById('activity-level').value;

    if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
        alert("Please enter valid weight, height, and age values.");
        return;
    }

    // BMR Calculation
    var bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // TDEE Calculation based on activity level
    var tdee;
    switch (activityLevel) {
        case 'sedentary':
            tdee = bmr * 1.2;
            break;
        case 'lightly-active':
            tdee = bmr * 1.375;
            break;
        case 'moderately-active':
            tdee = bmr * 1.55;
            break;
        case 'very-active':
            tdee = bmr * 1.725;
            break;
        case 'extremely-active':
            tdee = bmr * 1.9;
            break;
        default:
            alert("Invalid activity level");
            return;
    }

    // Caloric Intake for Weight Goals
    var caloricIntakeWeightLoss = tdee - 500;
    var caloricIntakeWeightGain = tdee + 500;

    // Protein Requirement (RDA: 0.8 grams per kilogram of body weight)
    var proteinIntake = 0.8 * weight;

    // Display the results
    var resultContainer = document.getElementById('result-container');
    var caloricIntakeResult = document.getElementById('caloric-intake-result');
    var proteinIntakeResult = document.getElementById('protein-intake-result');

    caloricIntakeResult.innerText = "Estimated Caloric Intake: " + caloricIntakeWeightLoss.toFixed(2) + " to " + caloricIntakeWeightGain.toFixed(2) + " calories/day";
    proteinIntakeResult.innerText = "Estimated Protein Intake: " + proteinIntake.toFixed(2) + " grams/day";

    // Show the result container
    resultContainer.style.display = 'block';
}

