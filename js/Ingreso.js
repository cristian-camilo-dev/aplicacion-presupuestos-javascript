class Ingreso extends Dato {
    static contadorDeIngreso = 0;
    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = ++Ingreso.contadorDeIngreso;
    }

    get id() {
        return this._id;
    }
}