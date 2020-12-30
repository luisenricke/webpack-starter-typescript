function imprimirConsola( constructor : Function ) {
    console.log( constructor );
}

@imprimirConsola
export class Avenger {

    constructor(
        public nombre: string,
        public clave: string
    ){}

    imprimir() {
        console.log(`${this.nombre} - ${this.clave}`);
    }

};
