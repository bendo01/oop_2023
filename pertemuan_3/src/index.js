class Tumbler {
    isi;
    status_terbuka;
    name;

    constructor(name) {
        this.name = name;
        this.isi = 0;
        this.status_terbuka = false;
    }

    buka_tumbler() {
        this.status_terbuka = true;
    }

    tutup_tumbler() {
        this.status_terbuka = false;
    }

    di_isi(isi) {
        if (this.status_terbuka == true) {
            this.isi = this.isi + isi;
            console.info(this.name + " isi tumbler sebanyak: " + this.isi);
        } else {
            console.info(this.name + " tidak bisa diisi karena masih tertutup");
        }
    }

    di_minum(isi) {
        if (this.status_terbuka == true && this.isi > 0) {
            this.isi = this.isi - isi;
            console.info(this.name + " isi tumbler sebanyak: " + this.isi);
        } else {
            console.info(
                this.name + " tidak bisa diminum karena masih tertutup"
            );
        }
    }

    status() {
        console.log("----------------------------------------");
        if (this.status_terbuka == true) {
            console.info(this.name + " tutup tumbler terbuka");
        } else {
            console.info(this.name + " tutup tumbler tertutup");
        }

        if (this.isi_tumbler != 0) {
            console.info(this.name + " tumbler terisi sebanyak: " + this.isi);
        } else {
            console.info(this.name + " tumbler tidak terisi");
        }
        console.log("----------------------------------------");
    }
}

let tumbler_hitam = new Tumbler("Tumbler Hitam");
// let tumbler_putih = new Tumbler("Tumbler Putih");

tumbler_hitam.status();
// tumbler_putih.status();

tumbler_hitam.buka_tumbler();
tumbler_hitam.di_isi(100);
tumbler_hitam.di_minum(5);
tumbler_hitam.status();
tumbler_hitam.di_minum(10);
tumbler_hitam.tutup_tumbler();
tumbler_hitam.status();
