const person = {
    firstName :'wang',
    lastName:'xudong',
    isACommunist: false
}
const table = document.createElement('table');
document.body.append(table);

const count = 10_000;
for (let i = 0; i < count; i++) {
  const item = document.createElement('tr');
  item.id = i;
  item.textContent = 'item';
  table.append(item);
}

let foo = [1,2,2,23,2,3,34,1,56,6]
let map1 = new Map(); 
map1.set('foo1',5)
map1.set('foo2',6)
map1.set('foo1',6)
map1.foo= 1; //foo: 1
map1.get()
console.log(map1.get('foo'),map1)


function map(){
    this. obj = {};
    this.set = (key, value) => {this.obj[key] = value};
    this.get = (key) => {return this.obj[key]};
}
let m = new map();
m.set('foo', 12);
m.get('foo');

m.foo = 23;
console.log(m,m.get('foo'),'m')


    let rowStates = new Map();
    document.querySelectorAll('tr').forEach((row) => {
    console.log(row,'row')
    rowStates.set(row)

    })
    console.log(rowStates,'rowStates')