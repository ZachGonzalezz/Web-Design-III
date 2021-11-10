const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
// for these lines, you'll notice that your if/else loop is empty. You'll need to correctly add the username(s) and password(s) your page will need to login. //
// Remember that you'll need three total sets of login credentials. So three sets of username(s) and password(s)//
    if ( (username == "1@2.com" || username == "1@3.com" || username == "1@4.com")  && (password == "123456" || password == "hello" || password == "password")) {
        alert("Congrats. You know what the login button does.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})