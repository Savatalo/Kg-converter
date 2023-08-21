const usrInp = document.getElementById("inp");
const para = document.getElementById("para");
let convertedValue;

usrInp.addEventListener('input', () => {
  convertedValue = usrInp.value * 2.20462262185;
  para.innerHTML = convertedValue + ` ibs`;

  if (usrInp.value < 0) {
    para.innerHTML = "YOU ARE RETARD :)";
  } 
})