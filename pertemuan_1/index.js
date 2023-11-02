/**
 * ini adalah kelas yang merepresntasikan objek manusia
 */
class human {
    /** @type { string|null } */
    name = null;
    
    /**
     * membuat objek baru yang diberi nama
     * @param {string} name sebuah variabel nama bertipe string yang merupakan parameter wajib ketika membuat sebuah objek baru
     */
    constructor (name) {
        this.name = name;
    }

    /**
     * @param {string} greeter_name sebuah fungsi di sebuah objek yang menerima parameter bertipe string
     */
    greetBy(greeter_name) {
        console.info(`Hello ${greeter_name}, my name is ${this.name}`);
    }
}

let someone = new human('7371130000000', 'budi');
someone.greetBy('baso');