"use strict";
// explicit types
let karakter;
// constan must be initialized value
// const hobby:string;
let angka;
let isLoggedIn;
karakter = 'orang baik';
// karakter = true
angka = 20;
isLoggedIn = true;
// array
// let menu: string[];
// menu.push('oke') -> not allowed, menu dont have initial value
let menu = [];
menu.push('mie ayam');
menu.unshift('bakso');
// menu.push(1)
// union types
let mixed = [];
mixed.push(20);
mixed.unshift('oke');
mixed.push(true);
let uid;
uid = '123djdl';
uid = 12394;
// object
let iniObject;
iniObject = {
    name: 'budi',
    age: 20
};
//
// iniObject = [] -> allowed because array based on object
// for spesific object
let iniObjectTwo;
iniObjectTwo = {
    name: 'susi',
    age: 12
};
// dinamic types with any -> it's more like javascript variables
let parabot;
parabot = 20;
parabot = 'gayung';
parabot = true;
// array
let kendaraan = [];
kendaraan.push('mobil');
kendaraan.push(2);
kendaraan.unshift(false);
// object
let kendaraanObject;
kendaraanObject = {
    nama: 'mobil',
    jumlah: 20
};
kendaraanObject = {
    nama: 4,
    jumlah: 'dua puluh'
};
