/**
 * ini adalah sebuah representasi logik untuk saklar
 * @class
 * @classdesc berikut ini adalah sebuah class yang merepresentasikan sebuah saklar
 */
class Saklar {
    /**
     * @type {boolean}
     * @public
     */
    status = false;
    /**
     * first initilization
     * @param status
     * @type {boolean}
     * @public
     */
    constructor(status = false) {
        this.status = status;
    }
}

class SaklarHandphone extends Saklar {
    /**
     * @type {string}
     * @public
     */
    kondisi = "off";
    /**
     * first initilization
     * @param status
     * @param kondisi
     * @type {boolean, string}
     * @public
     */
    constructor(status = false, kondisi = "off") {
        super();
        this.status = status;
        this.kondisi = kondisi;
    }
    /**
     * @public
     */
    toogle() {
        this.status = !this.status;
        if (this.status === false) {
            this.kondisi = "off";
        } else {
            this.kondisi = "on";
        }
    }
}

let saklar_handphone_saya = new SaklarHandphone(false, "mati");
console.info("============================================");
console.info("status = " + saklar_handphone_saya.status);
console.info("kondisi = " + saklar_handphone_saya.kondisi);
console.info("============================================");
saklar_handphone_saya.toogle();

console.info("menyalakan handphone");

console.info("============================================");
console.info("status = " + saklar_handphone_saya.status);
console.info("kondisi = " + saklar_handphone_saya.kondisi);
console.info("============================================");

saklar_handphone_saya.toogle();
console.info("mematikan handphone");

console.info("============================================");
console.info("status = " + saklar_handphone_saya.status);
console.info("kondisi = " + saklar_handphone_saya.kondisi);
console.info("============================================");
