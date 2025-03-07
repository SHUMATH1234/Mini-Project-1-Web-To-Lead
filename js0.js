function beforeSubmit(){
let outputdate = document.querySelector(".outputdata");
let inputdate = document.querySelector(".inputdate");
console.log("inputdate.value", inputdate.value);
let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
outputdate.value = formattedDate;
}

