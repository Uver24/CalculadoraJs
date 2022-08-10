const mostrarValorAnterior = document.getElementById('valor-anterior');
const mostrarValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores=document.querySelectorAll('.operador');
const botonIgual=document.querySelector('[data-igual]');
const botonBorrarTodo=document.querySelector('[data-borrar-todo]');
const botonBorrar=document.querySelector('[data-borrar]');
const resultado = document.querySelector('.resultado')

class Calculadora{
    constructor(){
        this.valorUno =[];
        this.valordos= []
    }
    agregarNumero (numero) {
        const digito = (isNaN(numero))? numero : parseInt(numero)
        this.valorUno.push(digito)
        this.valordos.push(digito)
    
    }
    imprimirPantalla(){
        mostrarValorActual.innerText=this.valordos.join('')
        mostrarValorAnterior.innerText = this.valorUno.join(' ')

    }
    borrarUno(){
        this.valorUno = this.valorUno.slice(0,-1);
        this.valordos = this.valordos.slice (0,-1);
    }
    borrarTodo(){
        this.valorUno = [];
        this.valordos = [];
    }


   operacion(){
        const numeros = this.valorUno.filter((x)=>!isNaN(x))
        const operador =  this.valorUno.filter((x)=>isNaN(x))
       switch (operador[0]) {
           case '+':
               mostrarValorAnterior.innerText= numeros[0]+ numeros[1]
               
               break;
            case '-':
                mostrarValorAnterior.innerText= numeros[0]- numeros[1]
                break;
            case 'x':
                mostrarValorAnterior.innerText= numeros[0]* numeros[1]
                break;
            case '/':
                mostrarValorAnterior.innerText= numeros[0]/ numeros[1]
                break;
                
       
           default:
               break;
            
       }
       this.valorUno = []
   }
 
}
const calculadora = new Calculadora ()


botonesNumeros.forEach(boton =>{
    boton.addEventListener('click', () =>{
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimirPantalla()
      
    })
})

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () =>{
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimirPantalla()
      
    })
})

resultado.addEventListener('click', ()=> {
    calculadora.operacion()
})

botonBorrar.addEventListener('click',()=> {
    calculadora.borrarUno()
    calculadora.imprimirPantalla()
})

botonBorrarTodo.addEventListener('click',()=> {
    calculadora.borrarTodo()
    calculadora.imprimirPantalla()
})