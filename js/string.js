//Write a js function that converts string to lower case.

// const toLower = (text = "") => String(text).toLowerCase();

// console.log(toLOwer("Saugat Chand"));
// console.log(toLower(123));

//Write a js function to convert long text to...
// "Ram is a teacher" => "raktim is a teacher"

// const truncate = (text = "") => {
//   const textData = String(text); //Ram is a teacher at broadway
//   const textLength = textData.length;
//   if (textLength > 9) {
//     const remainingText = textData.slice(0, 9); //Ram is a
//     return remainingText.concat("...");
//   } else {
//     return textData;
//   }
// };
// console.log(truncate("Ram is a teacher at broadway"));

// const truncateES6 = (text = "") =>
//   String(text).length > 9
//     ? String(text).slice(0, 9).concat("...")
//     : String(text);
// console.log(truncateES6("Ram is a teacher at broadway"));

const slug = (text = "") =>
  String(text).toLocaleLowerCase().replaceAll("", "-");
console.log(slug("Saugat is a Student"));
