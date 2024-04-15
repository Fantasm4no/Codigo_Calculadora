class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-',
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1)
        this.imprimirValores()
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();    
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = ''; 
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() +  numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
        
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
    
        if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    
        // Verificar si el operador es división y el divisor es cero
        if (this.tipoOperacion === 'dividir' && valorActual === 0) {
            alert('Error: No se puede dividir entre cero.');
            return;
        }
    
        let resultado;
        switch (this.tipoOperacion) {
            case 'sumar':
                resultado = this.calculador.sumar(valorAnterior, valorActual);
                break;
            case 'restar':
                resultado = this.calculador.restar(valorAnterior, valorActual);
                break;
            case 'multiplicar':
                resultado = this.calculador.multiplicar(valorAnterior, valorActual);
                break;
            case 'dividir':
                resultado = this.calculador.dividir(valorAnterior, valorActual);
                break;
            default:
                return;
        }
    
        // Formatear el resultado para mostrar un solo cero si el resultado es cero
        this.valorActual = resultado === 0 ? '0' : resultado.toString();       
    }
}
