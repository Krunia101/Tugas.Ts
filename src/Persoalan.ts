// Soal 1
function minimal(a: number, b: number): number {
    if (a === b) {
      return a;
    }
    return Math.min(a, b);
  }


// Soal 2
function power(a: number, b: number): number {
    let hasil = 1;
    for (let i = 0; i < b; i++) {
      hasil *= a;
    }
    return hasil;
  }


// soal 3


//soal4
class Animal{
  name:string
  age:number
  isMamal:boolean


  constructor(name:string,age:number,isMamal:boolean){
    this.name = name
    this.age = age
    this.isMamal = isMamal
  }
  charnge():void{
    console.log(`SmartPhone ${this.name} Is Charnging`)
  }
}

//soal5
class Rabbit extends Animal{
  constructor(name:string,age:number){
    super(name,age,true)
  }
  eat():string{
    return(`${this.name} yang berumur ${this.age} sedang makan`)
  }
}

// soal 6
class Eagle extends Animal {
  speed: number;

  constructor(name: string, age: number, isMamal?: boolean) {
    super(name, age, false);
    this.speed = 220;
  }

  fly(): string {
    return `${this.name} yang berumur ${this.age} sedang terbang!`;
  }

  run(speed: number): string {
    return `${this.name} Berlari dengan kecepatan ${speed} km`;
  }
}

// soal 7
class EagleRun extends Eagle {
    constructor(name: string, age: number,) {
      super(name, age,);
    }
  
    fly(): string {
      return `${this.name} yang berumur ${this.age} sedang terbang!`;
    }
  
    runEagle(): string {
      return this.run(this.speed);
    }
  }

// soal 8
const myRabbit = new Rabbit("Labi", 2);
console.log(myRabbit.eat())

// Soal 9
const myEagle = new Eagle("Elo", 4);
console.log(myEagle.fly())

//Soal 10
const speedTest = new EagleRun("kuku", 220,);
console.log(speedTest.runEagle())
