class shape {
    constructor(width ,height){
        this.width=width;
        this.height=height;
    }
    area(){
        console.log(`area = ${this.width *this.height}`);
    }
}
let x =  new shape(8,8);
x.area();