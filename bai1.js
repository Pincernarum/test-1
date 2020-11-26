
function arr(arr1,arr2){
    let res=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                res.push(arr1[i]);
            }
        }
    }
    let a = arr1.concat(arr2);
    var x = a.filter(word => word !=res[0]);
    for(let i=1;i<res.length;i++){
        let b = x;
        b = x.filter(word => word != res[i]);
        x = b;
    }
    return x;
}



console.log(arr( ["a","b",1,2,3,"c"] ,  ["a",1,3,4,5,6,2,"d"]));