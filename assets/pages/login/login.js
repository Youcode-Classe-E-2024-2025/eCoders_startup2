let isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;
if(isLoggedIn)  location.href = "../dashboard/"
const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", function () {
  let userName = document.querySelector("#Username");
  let passWord = document.querySelector("#Password");
  if (userName.value === "Adminstrator" && passWord.value === "Ecoders") {
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn',JSON.stringify(isLoggedIn));
    location.href = "../dashboard/";
  } else {
    alert("Incorrect username or passwords!");
  }
});