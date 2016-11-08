class Note {
    constructor(date, child, item, note){
        this.date = date;
        this.child = child;
        this.item = item;
        this.note = note;

        // this.combo = [
        //     {this.item = this.note}
        // ];
    }
    getDate(){
        return this.date;
    }
}
