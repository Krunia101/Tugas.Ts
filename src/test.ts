// // Soal 1
// const identitas1 = {
//     nama: "sobri",
//     tempat: "Jabar",
//     umur: 20,
//     anak: [
//         {nama : "a", umur : 10},
//         {nama : "b", umur : 15, isSekolah : true}
//     ],
// }

// // jawaban 1
// interface identitas {
//     nama: string,
//     tempat: string,
//     umur: number,
//     anak:anak
// }
// //interface anak menggunakan array objek
// interface anak{
//     nama : string, umur: Number, isSekolah?: boolean
// }[];
// console.log(identitas1)

// //soal 2
// let hp = [{
//     detail:{}
// }]

// soal 3
// let nam1: (string | number)[] = ['ihb', 'Ion', 123,23,22]

// //rumus luas balok
// function HitungVolumBalok(p:number,l:number,t:number){
//     const volum = p*l*t
//     return volum
// };

// const soal1 = HitungVolumBalok(5,4,10)

// console.log(soal1)
// function Jumlahan(p:number,l:number,t=0){
//     const Jumlahan = p+l+t
//     return Jumlahan
// };

// const Jumlahan1 = Jumlahan(5,4,10)
// const Jumlahan2 = Jumlahan(10,4,)

// console.log(Jumlahan1)
// console.log(Jumlahan2),

// function pembagian({ a, b, c = 1 }: { a: number; b: number; c?: number }) {
//     const hasilnya = (a / b) * c;
//     return hasilnya;
// }
// const kali1 = pembagian({a:6,b:3,c:2})

// console.log(kali1)

//Buatlah sebuah array untuk mengecek apakah suatu bilangan ada atau tidak dalam suatu array dan memiliki return boolean, contoh kita memiliki array [1,2,3,4,5], apakah 3 ada dalam array

//Jawaban AI
// function isNumberInArray(numbers: number[], target: number): boolean {
//     for (let number of numbers) {
//       if (number === target) {
//         return true;
//       }
//     }
//     return false;
//   }

// const myArray: number[] = [1, 2, 3, 4, 5];

// let numberToFind: number = 7;
// let isFound: boolean = isNumberInArray(myArray, numberToFind);

// console.log(`Is ${numberToFind} in the array? ${isFound}`);

// numberToFind = 6;
// isFound = isNumberInArray(myArray, numberToFind);

// console.log(`Is ${numberToFind} in the array? ${isFound}`);


// Jawaban Qoy
// const siArray = [1,2,3,4,5]

// function cariArray(arr: number[], nilai:number):boolean{
//     return arr.includes(nilai)
// }

// cariArray(siArray, 3)
// cariArray(siArray, 10)