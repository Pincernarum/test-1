function number() {
    let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;
    let name3 = document.getElementById('name3').value;
    let name4 = document.getElementById('name4').value;
    let points1 = document.getElementById('points1').value;
    let points2 = document.getElementById('points2').value;
    let points3 = document.getElementById('points3').value;
    let points4 = document.getElementById('points4').value;
    let gd1 = document.getElementById('gd1').value;
    let gd2 = document.getElementById('gd2').value;
    let gd3 = document.getElementById('gd3').value;
    let gd4 = document.getElementById('gd4').value;
    
let arr1 = [name1,name2,name3,name4];
let arr2 = [points1,points2,points3,points4];
let arr3 = [gd1,gd2,gd3,gd4];

let ar1p = arr1.sort();
let arr2p =arr2.sort(function(a, b){return a - b}) ;
let arr3p =arr3.sort(function(a, b){return a - b}) ;




}

let arr1 = [name1,name2,name3,name4];
let arr2 = [points1,points2,points3,points4];
let arr3 = [gd1,gd2,gd3,gd4];

let ar1p = arr1.sort();
let arr2p =arr2.sort(function(a, b){return a - b}) ;
let arr3p =arr3.sort(function(a, b){return a - b}) ;




