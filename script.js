// открываем и закрываем модальное окно
let modal = document.querySelector('#modal');
let click_btn = document.querySelector('#click_btn');
let close_btn = document.querySelector('#close_btn');
close_btn.addEventListener('click', closeWindow); 
click_btn.addEventListener('click', openWindow); 

function openWindow(){
	modal.style.display="block";
};
function closeWindow(){
	modal.style.display="none";
};


// проверяем валидность полей
let download_btn = document.querySelector('#download_btn');
download_btn.addEventListener('click', check);

function check(){
	validMail();
 	validPhone();
 	download();
}

function validMail() {
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let email = document.querySelector('#email');
    let valid = re.test(email.value);
    if (valid) email.style.border="1px solid green";
    else email.style.border="1px solid red";
    return valid;
}
function validPhone() {
    let re = /^\d[\d\(\)\ -]{4,14}\d$/;
    let phone = document.querySelector('#phone');
	let valid = re.test(phone.value);
	if (valid) phone.style.border="1px solid green";
	else phone.style.border="1px solid red";
	return valid;
}


// отправляем данные на сервер
function download(){
	let email = document.querySelector('#email').value;
	let phone = document.querySelector('#phone').value;

	let promise = fetch('server.php', {
        method: 'post',
        body:JSON.stringify({email, phone})
    })
};