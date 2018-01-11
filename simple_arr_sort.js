var arr = [1, 3, 7, 11]
var brr = [2, 4, 5, 6, 10, 12]

function mySort(arr, brr) {
    var i = 0;
    var j = 0;
    var k = 0;
    var n = [];
    while (i <= arr.length - 1 && j <= brr.length - 1) {
        let min;
        if (arr[i] < brr[j]) {
            min = arr[i]
            i++
        } else {
            min = brr[j]
            j++
        }

        n[k] = min;
        k++
    }

    for (; i < arr.length; i++) {
        n[k++] = arr[i]
    }

    for (; j < brr.length; j++) {
        n[k++] = brr[j]
    }

    return n
}

var a = mySort(arr,brr)
console.log(a)