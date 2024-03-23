var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = './index.html';
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("https://api.storerestapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Đăng nhập thất bại");
    }
    return response.json();
  })
  .then((objects) => {
    console.log(objects);
    if (objects.status === 'ok') {
      localStorage.setItem("jwt", objects.accessToken);
      Swal.fire({
        text: objects.message,
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = './index.html';
        }
      });
    } else {
      Swal.fire({
        text: objects.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  })
  .catch((error) => {
    Swal.fire({
      text: error.message || "Đăng nhập thất bại",
      icon: 'error',
      confirmButtonText: 'OK'
    });
    console.error(error);
  });

  return false;
}
