/**
 * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
 * Tìm hiểu thêm indexOf:
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * Example:
 * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
 * 
 */

function removeDuplicate(array) {
    let array2 = array.filter(function(i, index) {
        return array.indexOf(i) === index
    })
    console.log(array2)

}
removeDuplicate([1, 1, 2, 3, 3])