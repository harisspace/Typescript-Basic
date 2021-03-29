// explicit types
let karakter:string;
// constan must be initialized value
// const hobby:string;
let angka:number;
let isLoggedIn: boolean;
karakter = 'orang baik';
// karakter = true
angka = 20
isLoggedIn = true;

// array
// let menu: string[];
// menu.push('oke') -> not allowed, menu dont have initial value
let menu: string[] = []
menu.push('mie ayam');
menu.unshift('bakso')
// menu.push(1)

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push(20)
mixed.unshift('oke')
mixed.push(true)

let uid: (string|number);
uid = '123djdl';
uid = 12394

// object
let iniObject: object;
iniObject = {
  name: 'budi',
  age: 20
}
//
// iniObject = [] -> allowed because array based on object

// for spesific object
let iniObjectTwo: {
  name: string,
  age: number
};
iniObjectTwo = {
  name: 'susi',
  age: 12
}

// dinamic types with any -> it's more like javascript variables
let parabot: any;
parabot = 20
parabot = 'gayung'
parabot = true

// array
let kendaraan: any[] = [];
kendaraan.push('mobil')
kendaraan.push(2)
kendaraan.unshift(false)

// object
let kendaraanObject: { nama: any, jumlah: any };
kendaraanObject = {
  nama: 'mobil',
  jumlah: 20
}
kendaraanObject = {
  nama: 4,
  jumlah: 'dua puluh'
}


