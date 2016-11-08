class Child {
    constructor(name) {
        this.name = name;
    };
    addDataDay(data, day){
        this.data = data;
        this.day = day;
    }
};

const sacha = new Child('Sacha');
console.log(sacha);
