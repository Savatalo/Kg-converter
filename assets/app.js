const usrInp = document.getElementById("inp");
const cnvtBtn = document.getElementById("convertBtn");
const para = document.getElementById("para");
let convertedValue;

cnvtBtn.addEventListener("click", () => {
  convertedValue = usrInp.value * 2.20462262185;
  para.innerHTML = convertedValue;

  if (usrInp.value <= 0) {
    para.innerHTML = "YOU ARE RETARD :)";
  }
});
