let menghitungBMI = (weight, height) => {
    let bmi = weight / (height * height);
    let result;
    
    if (bmi < 18.5) {
        result = "thin";
    } else if (bmi >= 18.5 && bmi < 25) {
        result = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        result = "Obesity";
    } else {
        result = "Over Obesity";
    }

    return `Berat badan anda =${bmi.toFixed(2)} dan anda ${result}.`;
};

export default menghitungBMI;
