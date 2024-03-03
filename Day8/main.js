// const theh1 = document.getElementById("content");
// console.log(theh1);

// const btn = document.querySelector("button")
// const a = document.querySelector("input");
// function thongbao()
// {
//     // const trn = a.innerText()
//     const ten = a.value
//     console.log(a.value)
//     alert(`xin chào ${ten}`)
//     btn.removeEventListener('click',thongbao)
// }

// btn.addEventListener("click", thongbao);

// function output()
// {
//    console.log("haha");
// }

// a.addEventListener("input", output);
// const btn = document.querySelector("button")
// const emailInput = document.getElementsByClassName("email")

// function validateEmail(email) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

// function validateInput() {
//   const emailValue = emailInput.value.trim();
//   if (emailValue === '') {
//     emailInput.style.borderColor = 'red';
//     return false;
//   } else if (!validateEmail(emailValue)) {
//     alert('Please enter a valid email address.');
//     emailInput.style.borderColor = 'red';
//     return false;
//   } else {
//     emailInput.style.borderColor = '';
//     return true;
//   }
// }

// emailInput.addEventListener("blur", function() {
//   validateInput();
// });

// function thongbao() {
//   if (!validateInput()) {
//     return;
//   }
//   const ten = emailInput.value
//   console.log(ten)
//   alert(`xin chào ${ten}`)
//   btn.removeEventListener('click', thongbao)
// }

// btn.addEventListener("click", thongbao);

// function output() {
//   console.log("haha")
// }

// emailInput.addEventListener("input", output);
document.addEventListener("DOMContentLoaded", function(event) {
    const inputs = document.querySelectorAll('.container input');
    const submitBtn = document.querySelector('.submit');

    inputs.forEach(input => {
        input.addEventListener('blur', function(event) {
            event.preventDefault();
            validateInput(input);
        });
    });
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        let allInputsValid = true;
        inputs.forEach(input => {
            validateInput(input);
            if (!input.style.borderColor || input.style.borderColor === 'red') {
                allInputsValid = false;
            }
        });

        if (allInputsValid) {
            alert('Form đã được submit thành công!');
        } else {
            alert('Vui lòng điền đầy đủ thông tin!');
        }
    });

    function validateInput(input) {
        const value = input.value.trim();
        const isValid = input.classList.contains('email') ? isValidEmail(value) : !!value; 
        input.style.borderColor = isValid ? 'white' : 'red';
    }

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});