class Child {
    constructor(name) {
        this.name = name;
    };
    addDataDay(data, day){
        this.data = data;
        this.day = day;
    }
};

let sacha = new Child('Sacha');
console.log(sacha);
