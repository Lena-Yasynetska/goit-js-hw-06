const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  
  if (email === "" || password === "") {
    alert("Please fill in all fields");
  } else {
    const data = {
      email: email,
      password: password,
    };

    console.log(data);
    loginForm.reset();
  }
}