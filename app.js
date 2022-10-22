let Inp_cardHolder_name = document.querySelector('.cardname');
let Inp_cardNumber = document.querySelector('.classnumber');
let Inp_month = document.querySelector('.month');
let Inp_year = document.querySelector('.year');
let Inp_cvc = document.querySelector('.card_cvc');
let continue_btn = document.querySelector('.thank-you button');

let out_cardnumber = document.querySelector('.card_num');
let out_name = document.querySelector('.name');
let out_month = document.querySelector('.mm');
let out_year = document.querySelector('.yy');
let out_cvc = document.querySelector('.cvv');

let submitBtn = document.querySelector('button');

const NAME_PLACEHOLDER =
  Inp_cardHolder_name.getAttribute('placeholder').split('e.g.')[1];

const CARD_NUMBER = '0000 0000 0000 0000';

const MM_YY = '00';
let error_msg;
let flag;

Inp_cardHolder_name.addEventListener('input', (e) => {
  out_name.innerText = Inp_cardHolder_name.value.toUpperCase();

  if (Inp_cardHolder_name.value == '') {
    out_name.innerText = NAME_PLACEHOLDER;
  }
});

Inp_cardNumber.addEventListener('input', (event) => {
  out_cardnumber.innerText = Inp_cardNumber.value;

  if (
    (out_cardnumber.innerText.length == 4 ||
      out_cardnumber.innerText.length == 9 ||
      out_cardnumber.innerText.length == 14) &&
    event.data !== null
  ) {
    Inp_cardNumber.value += ' ';
  }

  if (Inp_cardNumber.value == '') {
    out_cardnumber.innerText = CARD_NUMBER;
  }
});
Inp_month.addEventListener('input', () => {
  if (+Inp_month.value > 12) {
    Inp_month.value = '12';
  }
  out_month.innerText = Inp_month.value;
  if (Inp_month.value == '') {
    out_month.innerText = MM_YY;
  }
});
Inp_year.addEventListener('input', () => {
  if (Inp_year.value.length > 2) {
    Inp_year.value = Inp_year.value.substr(0, 2);
  }
  out_year.innerText = Inp_year.value;

  if (Inp_year.value == '') {
    out_year.innerText = MM_YY;
  }
});
Inp_cvc.addEventListener('input', () => {
  if (Inp_cvc.value.length > 3) {
    Inp_cvc.value = Inp_cvc.value.substr(0, 3);
  }
  out_cvc.innerText = Inp_cvc.value;

  if (Inp_cvc.value == '') {
    out_cvc.innerText = '000';
  }
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (Inp_cardHolder_name.value.length == 0) {
    document.querySelector('.cname').classList.remove('hidden');
    Inp_cardHolder_name.classList.add('errored');
  }
  if (Inp_cardNumber.value.length == 0) {
    document.querySelector('.cnum').classList.remove('hidden');
    Inp_cardNumber.classList.add('errored');
  }
  if (Inp_month.value.length == 0) {
    document.querySelector('.cdate').classList.remove('hidden');
    Inp_month.classList.add('errored');
  }
  if (Inp_year.value.length == 0) {
    document.querySelector('.cdate').classList.remove('hidden');
    Inp_year.classList.add('errored');
  }
  if (Inp_cvc.value.length == 0) {
    document.querySelector('.ccvc').classList.remove('hidden');
    Inp_cvc.classList.add('errored');
  }

  if (Inp_cardNumber.value.length != 0 && Inp_cardNumber.value.length < 19) {
    document.querySelector('.cnum').innerText = 'Number is too short';
  }
  if (Inp_cvc.value.length != 0 && Inp_cvc.value.length < 3) {
    document.querySelector('.ccvc').innerText = 'Number is too short';
  }

  if (Inp_cardHolder_name.value.length != 0) {
    document.querySelector('.cname').classList.add('hidden');
    Inp_cardHolder_name.classList.remove('errored');
  }
  if (Inp_cardNumber.value.length == 19) {
    document.querySelector('.cnum').classList.add('hidden');
    Inp_cardNumber.classList.remove('errored');

    for (ele of Inp_cardNumber.value.split(' ')) {
      flag = false;
      if (!Number(ele)) {
        flag = true;
        error_msg = 'wrong format,numbers only';
        break;
      }
    }
    if (flag == true) {
      document.querySelector('.cnum').innerText = error_msg;
      document.querySelector('.cnum').classList.remove('hidden');
      Inp_cardNumber.classList.add('errored');
    }
  }
  if (Inp_month.value.length != 0) {
    Inp_month.classList.remove('errored');
  }
  if (Inp_year.value.length != 0) {
    Inp_year.classList.remove('errored');
  }
  if (Inp_month.value.length != 0 && Inp_year.value.length != 0) {
    document.querySelector('.cdate').classList.add('hidden');
  }
  if (Inp_cvc.value.length == 3) {
    document.querySelector('.ccvc').classList.add('hidden');
    Inp_cvc.classList.remove('errored');
  }
  if (document.querySelectorAll('.errored').length == 0) {
    document.querySelector('.details_form').classList.add('hidden');
    document.querySelector('.thank-you').classList.remove('hidden');
  }
});

continue_btn.addEventListener('click', () => {
  document.querySelector('.details_form').classList.remove('hidden');
  document.querySelector('.thank-you').classList.add('hidden');
});
