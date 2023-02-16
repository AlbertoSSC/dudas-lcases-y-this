//1. Crear una clase Cuenta, esta clase va a tener los siguientes campos:

class Cuenta {
    constructor(idCuenta, nifBenef, nombreBenef, nombreCuenta, sadoInicial, tipoCuenta) {
        this.idCuenta = idCuenta;
        this.beneficiarioNIF = nifBenef;
        this.nombreBeneficiario = nombreBenef;
        this.nombreCuenta = nombreCuenta;
        this.saldo = sadoInicial;
        this.tipoDeCuenta = tipoCuenta;
    }

    muestraEstado() {
        console.log("Cuenta: " + this.idCuenta +
            "\n" + "Nombre beneficiario: " + this.nombreBeneficiario +
            "\n" + "Nombre cuenta: " + this.nombreCuenta +
            "\n" + "Tipo: " + this.tipoDeCuenta +
            "\n" + "Saldo: " + this.saldo);
    };
};

class Transaccion {
    constructor(cuentaOrigen, cuentaDestino, cantidad) {
        this.cuentaOrigen = cuentaOrigen;
        this.cuentaDestino = cuentaDestino;
        this.cantidadTransferida = cantidad;
        this.costeTransfe = 0;
    }

    realizaTransaccion(cantidad) {
        (this.cuentaOrigen.tipoDeCuenta === "particular") ?
            this.costeTransfe = 1 : this.costeTransfe = 0.5;

        const cantidadComision = cantidad + this.costeTransfe;
        this.cuentaOrigen.saldo = this.cuentaOrigen.saldo - cantidadComision;
        this.cuentaDestino.saldo = this.cuentaDestino.saldo + cantidad;

        console.log("_____________________________________" +
            "\n" + "Cantidad transferida: " + cantidad,
            "\n" + "Comisión: " + this.costeTransfe,
            "\n" + "Saldo destino: " + this.cuentaDestino.saldo,
            "\n" + "Saldo origen: " + this.cuentaOrigen.saldo,
            "\n" + "______________________________________")
    }

    set cantidadTransferida(cantidad) {
        this.realizaTransaccion(cantidad);
    }
};

// class LibroContable extends Transaccion {
//     constructor() {
//         super();
//         this.transacciones = [];
//     }

//     realizaTransaccion(transaccion) {
//         super.realizaTransaccion();
//         this.transacciones.push({
//             Origen: transaccion.cuentaOrigen.idCuenta,
//             Destino: transaccion.cuentaDestino.idCuenta,
//             Cuantía: transaccion.cantidadTransferida,
//             Comisión: transaccion.costeTransfe,
//         })
//     }

//     listaTransacciones() {
//         console.log(this.transacciones);
//     }

//     // set realizaTransaccion(transaccion) {
//     //     this.realizaTransaccion(transaccion)
//     // }
//     set cantidadTransferida(cantidad) {
//         this.realizaTransaccion(cantidad);
//     }

// }
const cuentaA = new Cuenta(
    "ES6621000418401234567891 ",
    "12345678X",
    "Juan Perez",
    "Nomina",
    1400,
    "particular"
);
const cuentaB = new Cuenta(
    "ES1000492352082414205416",
    "A84939209",
    "Gestiones SL",
    "gastos",
    84400,
    "empresa"
);

console.log("*** estado inicial ***");
cuentaA.muestraEstado();
cuentaB.muestraEstado();

// const libroContable = new LibroContable();

const transaccion = new Transaccion(cuentaB, cuentaA, 1800);

// const libroContable = new LibroContable();
// libroContable.realizaTransaccion(transaccion);

console.log("*** estado final ***");
cuentaA.muestraEstado();
cuentaB.muestraEstado();

// console.log("** Listado transacciones ***");
// libroContable.listaTransacciones();