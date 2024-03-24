function switchForm(className, e) {
	e.preventDefault();
	const allForm = document.querySelectorAll('form');
	const form = document.querySelector(`form.${className}`);

	allForm.forEach(item=> {
		item.classList.remove('active');
	})
	form.classList.add('active');
}



let loginApi = "https://api.storerestapi.com/auth/login";
let isLoggedIn = false;

const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("password");
const formLogin = document.getElementById("formLogin");

function logout() {
  localStorage.removeItem("access_token");
  let logoutBtn = document.getElementById("logout-btn");
  logoutBtn.innerHTML = "Login";
  logoutBtn.id = "login-btn";
  alert("Đăng xuất thành công");
  loginEmail.value = "";
  loginPassword.value = "";
}

function loginSubmit(event) {
  fetch(loginApi, {
    method: "POST",
    body: JSON.stringify({
      email: loginEmail.value.trim(),
      password: loginPassword.value.trim(),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res.data);

      if (res.status != 200) {
        alert("Đăng nhập thất bại");
        console.log(res);
        console.log("chua nhap thong tin");
        
       
      } else if (res.status == 200) {
        // Check if the returned access_token matches the one in local storage
        localStorage.access_token = res.data.access_token;
        alert("Đăng nhập thành công");
        console.log(res);
        // isLoggedIn = true;
        // if ( isLoggedIn)
        // {
        let loginBtn = document.getElementById("login-btn")
          loginBtn.innerHTML = "Logout";
          loginBtn.id = "logout-btn";
          loginBtn.addEventListener("click", function(event)
          {
            event.preventDefault();
            logout();
            console.log("log out ne");
          });
          
         
        // }
        // isLoggedIn = false;
      }
    })
    .catch((err) => {
      alert("Đăng nhập thất bại");
      console.log(err);
      console.log("loi catch");
    });
  event.preventDefault();
}

formLogin.addEventListener("submit", loginSubmit);

// formLogin.addEventListener("submit", logout);
// document.addEventListener()
// SIGN UP

// https://api.storerestapi.com/auth/register?fbclid=IwAR1W44WxA843bxMsrYWUU9G7ES4kji0DfnRhYNFAl2_XV1CfNPippO8AO9s

let registerApi = "https://api.storerestapi.com/auth/register";

const registerName = document.querySelector('form.register #name');
const registerEmail = document.querySelector('form.register #email');
const registerPassword = document.querySelector('form.register #password');
const registerConfirmPassword = document.querySelector('form.register #confirm-pass');
const formRegister = document.getElementById("formRegister");

console.log(
  registerName.value.trim(),
  registerEmail.value.trim(),
  registerPassword.value.trim()
);

function registerSubmit(event) {
  fetch(registerApi, {
    method: "POST",
    body: JSON.stringify({
      name: registerName.value.trim(),
      email: registerEmail.value.trim(),
      number: 123456,
      password: registerPassword.value.trim(),
      password_repeat: registerConfirmPassword.value.trim(),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.status == 201) {
        alert("Đăng ký thành công");
        console.log(res);
        // save accesstoken to local storage
        localStorage.access_token = res.data.access_token;
      } else alert("Đăng ký thất bại");
    })
    .catch((err) => {
      alert("Đăng ký thất bại");
      console.log(err);
    })
    .finally(() => {
      render();
    });
  event.preventDefault();
}

formRegister.addEventListener("submit", registerSubmit);

function render() {
  // Update the UI here
  console.log("UI updated");
}
registerPassword.addEventListener('input', function () {
	registerConfirmPassword.pattern = `${this.value}`;
})