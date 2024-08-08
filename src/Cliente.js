class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre; 
        this.impuesto = impuesto;
    }

    get nombre() {
        return this._nombre; 
    }

    set nombre(value) {
        this._nombre = value; 
    }

    calcularImpuesto() {
        const { montoBrutoAnual, deducciones } = this.impuesto;
        return (montoBrutoAnual - deducciones) * 0.21;
    }
}

export default Cliente;
