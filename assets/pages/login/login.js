let loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", function () {
  let userName = document.querySelector("#Username");
  let passWord = document.querySelector("#Password");
  if (userName.value === "Adminstrator" && passWord.value === "Ecoders") {
    location.href = "../../../index.html";
  } else {
    alert("please enter valid username and password");
  }
});
