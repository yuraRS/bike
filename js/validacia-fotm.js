
/*------------валадація форми (повідомлення про помилку)------------*/
const mainForms = document.forms.main;
const mainFormsInput = mainForms.nameInput;

mainForms.addEventListener('submit', function (event) {
	if (emailTest(mainFormsInput)) {
		mainFormsInput.parentElement.insertAdjacentHTML(
			'beforeend',
			`<div class="main-form__error">
				Введіть Email
			</div>`
		);
		event.preventDefault();
	};
});

mainFormsInput.addEventListener('focus', function (event) {
	if(mainFormsInput.nextElementSibling) {
		mainFormsInput.nextElementSibling.remove();
	};
});



function emailTest(input) { 
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
 } 



/*------------валадація форми (червона рамка)------------*/

const mainForm = document.forms.mainForm;
const mainInput =  mainForm.mainInput;

mainForm.addEventListener('submit', function (event) {
    if (emailTest(mainInput)) {
        mainInput.classList.add('_error')
        event.preventDefault();
    };
});

function emailTest(input) { 
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}; 

 mainForm.addEventListener('focusout', function (event) {
    mainInput.classList.remove('_error')
});




/*------------placeholder-----------*/

mainInput.addEventListener('focus', event => {
    mainInput.placeholder = '';
});

mainInput.addEventListener('blur', event => {
    mainInput.placeholder = 'enter your email...';
});