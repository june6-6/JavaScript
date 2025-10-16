let object = {
    name: '바나나',
    price: 1200,
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}입니다.`)
    }
};

let products = [{
    name: '바나나',
    price: 1200,
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}입니다.`) 
    }
},{
    name: '사과',
    price: 2000,
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}입니다.`) 
    }
},{
    name: '바나나',
    price: 1200,
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}입니다.`) 
    }
},{
    name: '배',
    price: 3000,
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}입니다.`) 
    }
},{
    name: '고구마',
    price: 700,
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}입니다.`) 
    }
},{
     name: '고구마',
     price: 600,
     print: function() {
         console.log(`${this.name}의 가격은 ${this.price}입니다.`) 
    }
}]
        
//object.print();
for (let product of products) {
    product.print();
}