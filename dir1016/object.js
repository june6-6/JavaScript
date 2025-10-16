let product = {
    제품유형: '7D 건조 망고',
    유형: '당절임', 
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
};

let object = {
    name: '바나나',
    price: 1200
};

//console.log(product);
console.log(product.제품유형);
console.log(product['제품유형']);
console.log(object.name);

for (let key in object) {
    console.log(`${key}: ${object[key]}`);
}