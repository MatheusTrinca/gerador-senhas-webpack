import generate from './geradores';

const senhaGerada = document.querySelector('.result');
const quantidade = document.querySelector('.amount');
const maiusculas = document.querySelector('.chk-upper');
const minusculas = document.querySelector('.chk-lower');
const numeros = document.querySelector('.chk-number');
const simbolos = document.querySelector('.chk-symbols');
const btnGenerate = document.querySelector('.generate')

export default () =>{
  btnGenerate.addEventListener('click', () =>{
    senhaGerada.innerHTML = gera();
  })
}

function gera(){
  const senha = generate(
    quantidade.value,
    maiusculas.checked,
    minusculas.checked,
    numeros.checked,
    simbolos.checked
  );
  return senha || 'Nada Selecionado';
}