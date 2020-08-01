// ABOUT US SCRIPT
$(document).ready(function(){
    $("#About_Us div.flex-child").hover(
        function(){
            $(this).find("div.doFade").slideDown(100);
            $(this).find("div.doFade").css("display", "flex");
        }
        ,function(){
            $(this).find("div.doFade").slideUp(100);
            $(this).find("div.doFade").children("p").slideUp(100);
        });
    $("div.doFade a").hover(
        function(){
            $(this).siblings("p").slideDown(100);
        }
    );
});
const rexBlank = new RegExp(/.+/);
const rexEmail = new RegExp(/^(([\w\d]+?([-._+])[\w\d]+)|([\w\d]+))@\w+[-\.][A-Za-z]{2,}(\.[A-Za-z]{2,})?$/);
const rexPhone = new RegExp(/^\d{8,10}$/);
let input ;
let feedbacksInvalid;
let validateReturn = false;
//---------------------------------
function toggle(element, bolean, index){
    if( bolean === 1){ // nếu input hợp lệ
        element.classList.remove("invalid");
        element.classList.add("valid");
        feedbacksInvalid[index].style.display = "none";
    } else {    // nếu input không hợp lệ
        element.classList.remove("valid");
        element.classList.add("invalid");
        feedbacksInvalid[index].style.display = "block";
    }
}
function checkValidate(elem,index){
    if(rexBlank.test(elem.value) === false ){
        feedbacksInvalid[index].textContent = "Please fill out this field";
        toggle(elem, 0, index);
    } else {
        toggle(elem, 1, index);
        if(elem.name === "email" && rexEmail.test(elem.value) === false){
            feedbacksInvalid[index].textContent = "Email format is incorrect";
            toggle(elem, 0, index);
        }
        if(elem.name === "phone" && rexPhone.test(elem.value) === false){
            feedbacksInvalid[index].textContent = "Phone number only digit and must be more than 7, less than 10 digit";
            toggle(elem, 0, index);
        }
    }
}
//-------------------------------------
$(document).ready(function(){
    //after load page, get Array list assign to input(global variable)
    //after load page, get Feedback invalid list assign to feedbacksInvalid(global variable)
    input = document.querySelectorAll(`input[data-add="validate"]`);
    input = Array.from(input); // cover it from nodelist to array
    feedbacksInvalid = document.querySelectorAll(`.invalid-feedback`);

    input.forEach(function(elem, index){
        function checkSubmit(){
            return input.every( (elem) => {
                return elem.classList.contains("valid");
            });
        }
        elem.addEventListener("keyup",function(){
            checkValidate(this,index);
            // When only value change, set validateReturn for shound do onsubmit or not
            validateReturn = checkSubmit();
        });
    });
});
let sendFeedback = () => { // Khai báo bên ngoài ready event để tạo global function, vì onsubmit trong form nó tìm global function, not local
    event.preventDefault();
    if( validateReturn === true){ // Nếu hợp lệ thì thực hiện
        $(".modalChe").fadeIn();
        $('button[data-dismiss="modal"]').click(function(){
            $(".modalChe").fadeOut();
        });
    } else {
        const input = document.querySelectorAll(`input[data-add="validate"]`);
        input.forEach(function(elem, index){
            checkValidate(elem,index);
        });
    }
}