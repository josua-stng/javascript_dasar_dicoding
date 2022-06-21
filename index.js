let item={
    firstname:'josua',
    age:20,
    isMarried:false
}

let obj1= ({firstname,age})=>{
    console.log(`My name is ${firstname} , and ${age}`);
}

obj1(item)

let minimal = (a, b) => {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else if (a == b) {
    return a;
  }
};

let power = (a,b)=>{
    return a**b
}

minimal(3, 3);
power(3,3)

// Prototype pada OOP Javascript
function Mail() {
  this.from = 'pengirim@dicoding.com';
};

Mail.prototype.sendMessage = function n(msg, to) {
console.log(`you send: ${msg} to ${to} from ${this.from}`);
};

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');

// Cara 2
class isMail {
  constructor() {
      this.from = 'pengirim@dicoding.com';
  }

  sendMessage(msg, to) {
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
  };
}

const mail2 = new isMail();
mail2.sendMessage('hallo', 'penerima@dicoding.com');

// Property and Method
class Main{
  constructor(){
    this.from='josuasitanggang51@gmail.com';
    this.contact=[]
    this.yourOtherProperty='the values'

  }

  messageSend(msg,to){
    console.log(`you send ${msg} ${to} from ${this.from}`);
    this.contact.push(to)
  }

}

const NewMail= new Main()
NewMail.messageSend('hallo' ,'penerima')

class Animal {
  constructor(name, age, isMammal) {
    this.name = name;

    this.age = age;

    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name, age, isMammal) {
    super(name, age, true);
  }

  eat() {
    return `${this.name} sedang makan!`;
  }
}

class Eagle extends Animal {
  constructor(name, age, isMammal) {
    super(name, age, false);
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }
}

const myRabbit = new Rabbit('Labi', 2);

myRabbit.eat();

console.log(myRabbit.eat());

const myEagle = new Eagle('Elo', 4);

myEagle.fly();

// Imperatif Code
let names = ['josua','nicholas','risky'];
let take_names=[]
for (let i = 0 ; i<names.length ; i++){
  take_names.push(`${names[i]}`)
}

console.log(take_names);

// Deklaratif Code

let names2=['josua','nicholas','risky'];
let take_names2=names2.map((name)=>`${name}`)
console.log(take_names2);

// Pure Function
let phi =3.14;

let count_circle = (r)=>{
  return phi *( r * r)
}

console.log(count_circle(4));

phi = 5;

console.log(count_circle(4));

Recursif
let countdown = (start)=>{
  console.log(start);
  if (start > 0 ){
    countdown(start-1)
  }
}

countdown(10)

const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: "Jamie's Italy", author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  {
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K Rowling',
    sales: 4475152,
  },
];

const greatAuthors = books
  .filter(function (item) {
    return item.sales > 1000000;
  })
  .map(function (item) {
    return `${item.author} adalah penulis buku ${item.title} yang sangat hebat!`;
  });

console.log(greatAuthors);

let drink ={
  coffee:'torabika',
  water:'aqua',
  energy:'extra joss'
}

export {drink};

console.log('test');

// Async Await

let OrderCoffe = (callback)=>{
  let coffeee =null
  console.log('Tunggu sebentar');
  setTimeout(() => {
      coffeee='Kopi Sudah Jadi';
      callback(coffeee)
  }, 3000);
}
OrderCoffe(coffeee=>{
  console.log(coffeee);
})

Promise
let executorFunction = (resolve, reject) => {
  let isCoffeMakerReady = true;
  if (isCoffeMakerReady) {
    resolve('Kopi berhasil dibuat');
  } else {
    reject('Kopi Gagal dibuat');
  }
};

const makeCoffe = () => {
  return new Promise(executorFunction);
};

const coffeePromise = makeCoffe();
console.log(coffeePromise);
const stock = {
  coffeeBeans: 250,
  water: 1000,
}

const check = () => {
  return new Promise((resolve, reject) => {
      if (stock.coffeeBeans >= 16 && stock.water >= 250) {
          resolve("Stok cukup. Bisa membuat kopi");
      } else {
          reject("Stok tidak cukup");
      }
  });
};

const handleSuccess = resolvedValue => {
  console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
  console.log(rejectionReason);
}

checkStock().then(handleSuccess, handleFailure);

const state = {
  stock: {
      coffeeBeans: 250,
      water: 1000,
  },
  isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (!state.isCoffeeMachineBusy) {
              resolve("Mesin kopi siap digunakan.");
          } else {
              reject("Maaf, mesin sedang sibuk.");
          }
      }, 1000);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
      state.isCoffeeMachineBusy = true;
      setTimeout(() => {
          if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
              resolve("Stok cukup. Bisa membuat kopi.");
          } else {
              reject("Stok tidak cukup!");
          }
      }, 1500);
  });
};

const brewCoffee = () => {
  console.log("Membuatkan kopi Anda...")
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Kopi sudah siap!")
      }, 2000);
  });
};

function makeEspresso() {
  checkAvailability()
      .then((value) => {
          console.log(value);
          return checkStock();
      })
      .then((value) => {
          console.log(value)
          return brewCoffee();
      })
      .then(value => {
          console.log(value);
          state.isCoffeeMachineBusy = false;
      })
      .catch(rejectedReason => {
          console.log(rejectedReason);
          state.isCoffeeMachineBusy = false;
      });
}

makeEspresso();

function fetchUsername() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('JSUser');
      }, 3000);
  })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
  console.log(`You are logged in as ${value}`);
})
.finally(() => {
  console.log("Welcome!");
})


// Penanganan Error
class ValidationError extends Error {
  constructor(message) {
      super(message);
      this.name = "ValidationError";
  }
}

const validateNumberInput = (a, b, c) => {
  if (typeof a != "number") {
      throw new ValidationError("Argumen pertama harus number");
  } else if (typeof b != "number") {
      throw new ValidationError("Argumen kedua harus number");
  } else if (typeof c != "number") {
      throw new ValidationError("Argumen ketiga harus number");
  }
}

const detectTriangle = (a, b, c) => {
  try {
      validateNumberInput(a, b, c);
  } catch (error) {
      return `${error.message}`;
  }

  if (a === b && b === c) {
      return 'Segitiga sama sisi';
  }

  if (a === b || a === c || b === c) {
      return 'Segitiga sama kaki';
  }

  return 'Segitiga sembarang';
};