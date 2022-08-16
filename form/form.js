const error = (id, error) => {
  element = document.getElementById(id);
  element.getElementsByClassName("error")[0].innerHTML = error;
};

const cleanError = () => {
  getErrors = document.getElementsByClassName("error");
  for (let item of getErrors) {
    item.innerHTML = "";
  }
};

// function validate1(){
//     return true;
// }

// const validate1=()=>{
// return true
// }

// ES6 syntax for function
const validate = () => {
  cleanError();
  let returnVal = true;
  let name = document.forms["form"]["fullname"].value;

  // console.log("name",name)

  //validation fails return false else true
  if (name.length < 5 || name.length === 0) {
    error("name", "*name should have atleast 5char");
    returnVal = false;
  }

  let email = document.forms["form"]["email"].value;
  if (email.length >= 15) {
    error("email", "*Email is very long");
    returnVal = false;
  }
  let mobileNo = document.forms["form"]["phone"].value;

  if (mobileNo.length >= 11) {
    error("phone", "*Mobile no is very long");
    returnVal = false;
  }
  return false;
};

// localStorage.setItem("name","nitesh")
// document.getElementById("fullname").value=localStorage.getItem("name")

//set timeinterval and set timeout fat arrow function

const greetings = () => {
  console.log("Good morning :)");
};

// timeOut = setTimeout(greetings, 5000);

// settimout(function,no of milli sec)
// //clearTimeout(timeOut)
// setInterval(greetings, 1000);
//  let para=document.getElementById("para")

// para.addEventListener("mouseover", ()=>{

//     alert("mouseover")
// })
// para.addEventListener("mouseout", ()=>{

//     alert("mouseout")
// })

const toggle = () => {
  let btn = document.getElementById("toggleBtn");
  let para = document.getElementById("para");

  if (para.style.display != "none") {
    para.style.display = "none";
  } else {
    para.style.display = "block";
  }
};

const clickHandler = () => {
  alert("please fill all the fields");
};

const handleOnChange = (value) => {
  console.log(value);
};
