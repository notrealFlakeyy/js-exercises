let count = 10
let text = document.querySelector('.countdown')

let countdownInterval = setInterval(function () {
    if (count > 0) {
        console.log(count);
        document.querySelector(".countdown").innerHTML = count
        if (count === 1) {
            document.body.style.backgroundColor = 'red';
            document.querySelector(".text").innerHTML = "Hej på dig!"
        }
        count--;
    } else {
        clearInterval(countdownInterval);
    }
}, 1000);

setTimeout(countdownInterval, 5000)
