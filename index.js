// // console.log("hello my first js");
// // let employee;

// // let firstName = "Nitesh";
// // let secondName = "Chaithali";
// // secondName = "kalyani";
// // console.log(employee);

// // console.log("firstName", firstName);
// // console.log("secondName", secondName);

// // //const
// // const firstNo = 4;
// // // firstNo = 5;

// // console.log(firstNo);

// //string

// let name = "Nitesh";
// let lastName = "xyz";

// console.log(name.length, typeof name);

// //NUmber

// let firstNo = 1234;
// console.log(firstNo, typeof firstNo);

// //boolean
// let bolValue = true;
// console.log(bolValue, typeof bolValue);

// //null

// let nullValue = null;

// console.log(nullValue, typeof nullValue);

// //undefined
// let mangerName = undefined;

// console.log(mangerName, typeof mangerName);

// // reference dt

// //array

// let arr = [1, 2, 3, "ab"];

// console.log(arr.length, typeof arr);

// //object

// let objData = {
//   name: "nitesh",
//   employeeNo: 1234,
//   id: 1,
// };
// console.log(objData.name, typeof objData);

// //function
// function getName() {}

// console.log(getName(), typeof getName);

// //dates

// let date = new Date();

// console.log(date, typeof date);

// //conversion

// let firstNumber = Number("1234");

// console.log(firstNumber, typeof firstNumber);

// let firstname = String(123);

// console.log(firstname, typeof firstname);

// let value = parseFloat(10.23);

// console.log(value, typeof value);

// console.log(value + 12);

// //adding of diff dt

// let firstCal = Number("123") + 4;

// console.log(firstCal);

// //string methods

//let
// let firstName = "Chaithali rtrt yuyu uiui rtrt";
// let lastName = "xyz";

// console.log(firstName + " " + lastName);
// console.log(firstName.concat(lastName));
// console.log(firstName.length);
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());
// console.log(firstName.indexOf("C"));
// console.log(firstName.charAt(7));
// console.log(firstName.includes("90"));

// console.log(firstName.substring(2, 6));

// console.log(firstName.split(" "));

// console.log(firstName.replace("rtrt", "pass"));

//literal

// let varValue = "sasa <h1>sdadas</h1>";

// document.body.innerHTML = varValue;

// let name = "Nitesh";

// let data = `Hello everyone , iam  ${name}
// <h1> Welcome</h1>`;

// document.body.innerHTML = data;

// let arr = [1, 2, 3, 4];
// let nameArr = ["nitesh", "chaithali"];
// //nameArr.push("kalyani");
// //nameArr.pop();
// //nameArr.shift();
// nameArr.unshift("kalyani");

// nameArr.reverse();

// let arrData = new Array("abc", "xyz");

// console.log(arr.length);

// console.log(nameArr);

//objects

// let objData = {
//   name: "kalyani",
//   "emp Id": 1,
//   dept: "IT",
// };

// console.log(objData);

// console.log(objData.name);

// console.log(objData["emp Id"]);

// console.log(arrData.push("cdef"));

let age = 31;
let dob = "20-03-1992";
if (age === 20 && dob == "20-03-1992") {
  console.log("i am an adult");
} else if (age >= 30) {
  console.log("iam aboev 30");
} else {
  console.log("i am minor");
}

// // switch (new Date().getDate()) {
// //   case 6:
// //     console.log("its is 6th");
// //     break;
// //   case 7:
// //     console.log("it si 7");
// //     break;
// //   default:
// //     break;
// // }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

let j = 11;

// while (j <= 10) {
//   console.log(j);
//   j++;
// }

// do {
//   console.log(j);
//   j++;
// } while (j <= 10);

// j.array.forEach((element) => {
//   console.log(j);
// });

function test(x, y) {
  console.log(`variable ${x}`);

  return x;
}

console.log(test(1));
