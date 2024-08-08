
// //Array

// const Arrays = [1,2,3,4,5]

// //Square Bracket array

// let bArray : number[]
// bArray=[1,4]

// let cArrays : string[]
// cArrays=["satu","empat"]

// //cara menggunakan dua tipe data dalam satu array
// let dArrays : (string | number)[]
// dArrays = [12, "Dua Belas"]


// let zArrays : (string | number | boolean )[]
// zArrays = [12, "Dua Belas", false]

// //Array campuran
// let Zrax : (string | number)[] = ['sufyo', 12,2132,4124]

//Funtion

// function penjumlahan(){
//     //kode yang akan jalan
//     return 'ok'
// }

// penjumlahan();

// function rumusLuasPersegiP (panjang:number,lebar:number){
//     const luas = panjang*lebar;
//     return luas
// }

// console.log(penjumlahan());

// const hasil1 = rumusLuasPersegiP(1,2)
// const hasil2 = rumusLuasPersegiP(5,2)
// const hasil3 = rumusLuasPersegiP(10,2)

// console.log(hasil1)
// console.log(hasil2)
// console.log(hasil3);

// satu

// interface SatuInterace{
//     a:number;
//     b:string
// }

// // function satu ({a,b}
// //     :  {a:number,b:string}
// //     ){
// //         const satusatu = a + b;
// //         return satusatu
// //     }
// //     const satunya = satu({a:123,b:'aabb'})
// //     console.log(satunya)

// // //atau

// function satu ({a,b}
//     :  SatuInterace
//     ): void
// {console.log(a, b)}


// //kedua

// function dua ({a , b}: SatuInterace):number{
//     return 100;
// }

// // ketiga

// function tiga ({a,b}: SatuInterace):string{
//     return 'anak'
// }

// //emapat

// interface ResponAPI{
//     msg:string,
//     status:string
// }

// function empat({a,b}: SatuInterace):ResponAPI{
//     return{
//         msg:'alert',
//         status:'Danger'
//     }
// }

// //lima
// function lima():ResponAPI{
//     return{
//         msg:'Awas',
//         status:'Bahaya'
//     }
// }

///////////////////////////////////////////////

// class user {
//     id: number
//     firstname : string
//     lastname : string

//     constructor(id:number, firstname: string, lastname: string) {
//         (this.id = id),
//         (this.firstname = firstname),
//         (this.lastname = lastname)
//     }
//     login():boolean{
//         if (this.id === 1){
//             return true;
//         }else{
//             return false
//         }
//     }
//     relogin():boolean{
//         return this.login()
//     }
// }

// const Ibrahim = new user(1,'Ibrahim','Abdullah')
// const Orang2 = new user(1,'Ujang','Saman')
// const Orang3 = new user(3,'Zaki','iaa')



// console.log(Ibrahim.login())
// console.log(Orang2.login())
// console.log(Orang3.login())


// class Profile {
//   user: {
//     username: string;
//     password: string;
//   }[];

//   constructor() {
//     this.user = [
//       {
//         username: 'Ibrahim',
//         password: '12345'
//       },
//       {
//         username: 'Ilham',
//         password: '123456'
//       },
//       {
//         username: 'Sorti',
//         password: '1234567'
//       }
//     ];
//   }

//   berhasil(username: string, password: string): { message: string; success: boolean } {
//     const foundUser = this.user.find(user => user.username === username && user.password === password);
//     if (foundUser) {
//       return { message: "Berhasil Login", success: true };
//     } else {
//       return { message: "Cek Kembali Username dan Password mu!", success: false };
//     }
//   }

//   gaberhasil(username: string, password: string): { message: string; success: boolean } {
//     const foundUser = this.user.find(user => user.username === username && user.password === password);
//     if (!foundUser) {
//       return { message: "Cek Kembali Username dan Password mu!", success: false };
//     } else {
//       return { message: "Berhasil Login", success: true };
//     }
//   }
// }

// // Contoh penggunaan
// const profile = new Profile();
// console.log(profile.berhasil("Ilham", "123456"));


// Sub-class
//ialah turunan dari class baik dia property maupun method

// class SmartPhone{
//   color:string
//   brand:string
//   model:string
//   IsValid?: boolean


//   constructor(color:string, brand:string,model:string,IsValid: boolean = true){
//     this.color= color
//     this.brand= brand
//     this.model= model
//     this.IsValid = IsValid
//   }
//   charnge():void{
//     console.log(`SmartPhone ${this.brand} Is Charnging`)
//   }
// }
// const hp1 = new SmartPhone('Merah','Oppo','da')

//console.log(hp1.charnge())

// The Sub
//class di bawah tidak perlu diisi dengan constractor lagi karena sifat nya telah di teruskan oleh Smartphone

// class Android extends SmartPhone{

//   splitS(){
//     console.log('Split Screen Berhasil')
//   }
// }

// const xiomi = new Android('red','Poco','X50')
// console.log('hp',xiomi)
// xiomi.charnge()
// xiomi.splitS()


// class Ios extends SmartPhone{

//   airDrop(){
//     console.log('air Drop berhasil')
//   }
  
// }

//Polymore
//adalah suatu keadaan dimana subclass dapat merubah sifat dari kelas yang terhubung olehnya

// class Android extends SmartPhone{
//   layar: number

//   constructor(color:string, brand:string,model:string, layar:number){
//     super(color,brand, model,);
//     this.layar = layar;
//   }
//   splitS(){
//     console.log('Split Screen Berhasil')
//   }
//   showBrand(){
//     console.log(`Merek dari HandPhone ini adalah ${this.brand} dan memiliki layar ${this.layar}`)
//   }
//   charnge(): void {
//     console.log(`SmartPhone ${this.brand} Is Charnging`)
//   }
// }

// const xiomi = new Android('red','Poco','X50',120)
// console.log('hp',xiomi)
// xiomi.charnge()
// xiomi.splitS()
// xiomi.showBrand()
// xiomi.charnge()


// class Ios extends SmartPhone{

//   airDrop(){
//     console.log('air Drop berhasil')
//   }
  
// }