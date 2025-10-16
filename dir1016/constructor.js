class Product {
    constructor (name, price) {
        this.name = name
        this.price = price
    }

    print() {
        console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
    }
}

// let product = new Product("바나나", 1200);
// console.log(product.name)
// console.log(product.price)

let products = [
    new Product('banana', 1200),
    new Product('apple', 2000),
    new Product('pear', 3000),
    new Product('sweetphotato', 700),
    new Product('photato', 600),
    new Product('watermelon', 500),
]

for (let product of products) {
    product.print();
}