const continueBtn = document.querySelector('.registerbtn');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#psw');
const inputPasswordConfirm = document.querySelector('#psw-repeat');
const errDiv = document.querySelector('.form__message');
const firstForm = document.querySelector('.first');
const secondForm = document.querySelector('.second');
const groupbtn = document.querySelector('.groupbtn');
const individual = document.querySelector('.individual');
const groupFilesBtn = document.querySelector('.group-files');
const individualFilesBtn = document.querySelector('.individual-files');
// select elements
const campus = document.querySelector('.campus');
const course = document.querySelector('.course');
const year = document.querySelector('.year');
const month = document.querySelector('.month');
const group = document.querySelector('.group');
const createBtn = document.querySelector('.createbtn');

continueBtn.addEventListener('click', validate1);
createBtn.addEventListener('click', inputValues);
groupFilesBtn.addEventListener('click', groupFiles);
individualFilesBtn.addEventListener('click', individualFiles);

function validate1(e){
  e.preventDefault();
   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   if (inputName.value != "" && inputEmail.value.match(validRegex) && inputPassword.value === inputPasswordConfirm.value) {
        
    firstForm.classList.add('form-hidden');
        secondForm.classList.remove('form-hidden')
 
   } else {
     alert("Invalid email address!/password do not match");
   }
}
function inputValues(e){
  e.preventDefault();
  console.log(inputEmail.value);
}
function groupFiles(){
  groupFilesBtn.classList.add('active');
groupbtn.classList.remove('form-hidden');
individual.classList.add('form-hidden');
individualFilesBtn.classList.remove('active');

}
function individualFiles(){
  individualFilesBtn.classList.add('active');
  individual.classList.remove('form-hidden');
  groupbtn.classList.add('form-hidden');
  groupFilesBtn.classList.remove('active');
}
