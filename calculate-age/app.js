function calculateAge() {
    const birthDay = document.getElementById("day").value;
    const birthMonth = document.getElementById("month").value;
    const birthYear = document.getElementById("year").value;

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    let age = currentYear - birthYear;

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    document.getElementById("age").textContent = age;
}
