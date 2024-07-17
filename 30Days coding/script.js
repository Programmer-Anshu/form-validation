const usename = document.querySelector(".username");
const password = document.querySelector(".password");
const email = document.querySelector(".email");
const city = document.querySelector(".city");
const btn = document.querySelector(".submit");

btn.addEventListener("click", function () {
  const userval = usename.value;
  const passval = password.value;
  const mailval = email.value;
  const cityval = city.value;

  if (userval === "" || passval === "" || mailval === "" || cityval === "") {
    alert("Please fill all the fields");
  } else {
    alert("You have successfully registered");
    const vh = {
      username: userval,
      password: passval,
      email: mailval,
      city: cityval,
    };

    storedata(vh);
  }
});

function storedata(h) {
  localStorage.setItem("user", JSON.stringify(h));
  // // getdata(user)
  // console.log(h);
  getdataa(h);
}
let senddata = "wa.link/eoplzz";

function getdataa() {
  const user = (localStorage.getItem("user"));
  sendata(user);
}

function sendata(reciveddata) {

open(`https://wa.me/9305025413?text=${reciveddata}`)
}

