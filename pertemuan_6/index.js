class Manusia {
    /**
     * @type {string}
     * @public
     */
    kode;
    /**
     * @type {string}
     * @public
     */
    nama;

    constructor(kode, nama) {
        this.kode = kode;
        this.nama = nama;
    }
}

class Kendaraan {
    /**
     * @type {int}
     * @public
     */
    roda;
    /**
     * @type {string}
     * @public
     */
    jenis;
    /**
     * @type {int}
     * @public
     */
    /**
     * @type {Array}
     * @public
     */
    penumpang;
    /**
     * @type {orang}
     * @public
     */
    pengendara;
    /**
     * first initilization
     * @param roda, jenis
     * @type {int, string}
     * @public
     */
    constructor(roda, jenis, penumpang) {
        this.roda = roda;
        this.jenis = jenis;
        this.penumpang = penumpang;
    }
}

class Motor extends Kendaraan {
    constructor(roda, jenis) {
        super();
        this.roda = roda;
        this.jenis = jenis;
        this.penumpang = [];
    }

    pengemudi(orang) {
        this.pengendara = orang;
    }

    tambah_penumpang(orang) {
        this.penumpang.push(orang);
    }
}

class Mobil extends Kendaraan {
    constructor(roda, jenis) {
        super();
        this.roda = roda;
        this.jenis = jenis;
        this.penumpang = [];
    }

    pengemudi(orang) {
        this.pengendara = orang;
    }

    tambah_penumpang(orang) {
        this.penumpang.push(orang);
    }

    kurang_penumpang() {
        this.penumpang.pop();
    }
}
/*
let motornya_ayu = new Motor(2, "matik");
let ayu = new Manusia("519012035", "Ayu Praheswari");
motornya_ayu.pengemudi(ayu);
console.info(motornya_ayu);
let rangga = new Manusia("5190120XX", "Rangga Indira");
motornya_ayu.tambah_penumpang(rangga);
console.info(motornya_ayu);
let pijai = new Manusia("5190120ZZ", "Pijai");
motornya_ayu.tambah_penumpang(pijai);
console.info(motornya_ayu);
*/

let mobilnya_sophia = new Mobil(4, "Toyota Sedan Matik");
let putra = new Manusia("xxx-zz-yyyy", "Putranya Orang Lain");
let sophia = new Manusia("xxx-zz-yyyx", "putrinya Orang Lain");
mobilnya_sophia.pengemudi(sophia);
console.log("---------");
console.info(mobilnya_sophia);
console.log("---------");
mobilnya_sophia.tambah_penumpang(putra);
console.log("---------");
console.info(mobilnya_sophia);
console.log("---------");
mobilnya_sophia.kurang_penumpang();
mobilnya_sophia.pengemudi(putra);
console.info(mobilnya_sophia);
console.log("---------");
