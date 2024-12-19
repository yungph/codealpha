function calculateAge() {
    // Get the user's date of birth
    const dobInput = document.getElementById('dob').value;

    if (!dobInput) {
        alert('Please enter your date of birth.');
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    // Calculate the age
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    // Adjust the age if the birthday has not been reached this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('result').innerText = 'You are '+ age +' years old.';
}