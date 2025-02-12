// const age = +prompt("age");
// const dl = confirm("do you have a dl?");

// const isAllowed =
//   age >= 18 && dl === true ? "you are invited" : "Sorry you are not invied";
// alert(isAllowed);
//syntax ||

// const vc = confirm("do you have a voter card");
// const cp = confirm("do you have a citizenship");

// const eligible =
//   //   vc === true || cp === true ?
//   vc || cp ? "you are eligible" : "sory you are not eligible";
// alert(eligible);

//NOT

const user = prompt(" what is your name?"); //null, "", false, undefined
if (!user) {
  alert("usrename is missisng");
}
