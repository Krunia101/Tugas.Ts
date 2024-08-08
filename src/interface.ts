// let umur : number = 20
// let nama : string = 'fusi'

// let siswa : {
//     nam4 : string;
//     umur : number; 
//     muda : boolean; 
//     alamat? : string
// } ;
// siswa = {
//     nam4 : "Wawan",
//     umur : 14,
//     muda : true,
//     alamat : "Karawang"
// };
// siswa = {
//     nam4 : "zufanizar",
//     umur : 15,
//     muda : false
// };
// //Object Interface adalah cara terbaik untuk medefinisikan object
// interface product {
//     id : number 
//     names : string 
//     price : number
//     note? : string
//     isLimited : boolean 
// }

// const product1 : product = {
//     id : 1,
//     names : "mice",
//     price : 2000000,
//     note : "Gaming Mice",
//     isLimited : true
// }
// const product2 : product = {
//     id : 2,
//     names : "keyboard",
//     price : 3000000,
//     isLimited : true
// }

// //nested object

// interface detailproduct{
//     material : string
//     old : number
// }

// interface itemproduct{
//     ids : number
//     theName : string
//     expensive : number
//     detail : detailproduct
// }

// const product3 : itemproduct = {
//     ids : 20,
//     theName : "Mechanical",
//     expensive : 200.000,
//     detail :{
//         material : "iron, plastic",
//         old : 20 
//     }
// }
// console.log("pabrik", product3.detail)

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