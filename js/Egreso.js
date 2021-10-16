class Egreso extends Dato {
    static contadorDeEgreso = 0;
    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = ++Egreso.contadorDeEngreso;
    }
    get id() { return this._id; }
}