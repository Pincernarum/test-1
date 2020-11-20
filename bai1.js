
function merge2Strings() {
    let st1 = document.getElementById('st1').value;
    let st2 = document.getElementById('st2').value;
    let arr1 = st1.split('');
    let arr2 = st2.split('');
    let length;
    if (arr1.length <= arr2.length) {
        length = arr2.length;
    }
    else {
        length = arr1.length;
    }
    let strMerged = [];
    for (let i = 0; i < length; i++) {
        if(arr1[i] !== arr2[i] ){

        strMerged.push(arr1[i]);
        strMerged.push(arr2[i]);
        }
    }


    document.getElementById('merS').innerHTML = `  ${'kết quả ' ,strMerged }`
}