class Display{
    constructor(displayValorAnterior,displayValorActual){
        this.dispalyValorActual = displayValorActual;
        this.dispalyValorAnterior =displayValorAnterior;
        this.calculadora = new Calculadora();
        this.valorActual ='';
        this.valorAnterior='';
    }

    agregarNumero(numero){
        if ( numero=== '.'&& this.valulorActual.incluedes('.')) return
        this.valorActual= this.valorActual+numero;
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
}