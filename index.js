const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkbox3 = document.getElementById("checkbox3");

let ultimoCheckboxSelecionado;

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    ultimoCheckboxSelecionado = checkbox.id;
    if(checkbox1.checked && checkbox2.checked && checkbox3.checked){
      if(ultimoCheckboxSelecionado === "checkbox1"){
        checkbox2.checked = false;
        ultimoCheckboxSelecionado = null;
      }
      if(ultimoCheckboxSelecionado === "checkbox2"){
        checkbox3.checked = false;
        ultimoCheckboxSelecionado = null;
      }
      if(ultimoCheckboxSelecionado === "checkbox3"){
        checkbox1.checked = false;
        ultimoCheckboxSelecionado = null;
      }
    }
  });
});