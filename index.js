;function checkPasswordStrength(password) {
    let hasNumber = false;
    let hasSpecial = false;
    const specialChars = "!@#$%^&*";

    // Loop through each character
    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        // Check for number
        if (!isNaN(char) && char !== " ") {
            hasNumber = true;
        }

        // Check for special character
        if (specialChars.includes(char)) {
            hasSpecial = true;
        }
    }

    // Check length
    const isLongEnough = password.length >= 8;

    // Determine strength
    if (isLongEnough && hasNumber && hasSpecial) {
        return "Strong Password";
    } else if (isLongEnough && (hasNumber || hasSpecial)) {
        return "Medium Password";
    } else {
        return "Weak Password";
    }
}

// Example usage:
console.log(checkPasswordStrength("dhruv"));         // Weak
console.log(checkPasswordStrength("dhruv2711"));      // Medium
console.log(checkPasswordStrength("dhruv@6577386"));     // Strong