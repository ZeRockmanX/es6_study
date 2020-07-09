// 08 数组新增

// * fill() 填充
// 赋值了就是实例化的体现
let arr4 = ['aaa', 'bbb', 'ccc'];
console.log(arr4.find(function (value, index, arr5) {
    //就是循环查找，找到第一个则返回
    console.log(value);
    console.log(index);
    console.log(arr5);
    return value == 'bbb';
}));