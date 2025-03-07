let chaptchaCheck = false;
function beforeSubmit(event){
if(chaptchaCheck){
    let outputdate = document.querySelector(".outputdata");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputdate.value", inputdate.value);

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formattedDate;
 }else{
    alert("Please check the reCaptcha Box to Submit the Lead");
     event.preventDefault();
 }

}

function timestamp() {
     var response = document.getElementById("g-recaptcha-response"); 
     if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(
            document.getElementsByName("captcha_settings")[0].value
        );
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    } 
} 
setInterval(timestamp, 500);

function captchaSuccess(){
    chaptchaCheck = true;
}