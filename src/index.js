// const,letの使い方

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "letは上書き可能";
// console.log(val2);

//letは再宣言できない
// let val2 = "際宣言できません"

//constの変数宣言 再宣言、上書き両方できない
//constで定義したオブジェクトはプロパティの変更が可能
// const val3 = "const変数";
// console.log("const変数は上書き不可");

// //配列やオブジェクトは変更可能
// const val4 = {
//   name:"高橋",
//   age: 26,
// }
// val4.name = "拓希"
// val4.address = "京都"
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey')
// console.log(val5)

/*
 *テンプレート文字列
 *
 */
// const name = "拓希";
// const age = 26;
// const message = `私の名前は${name}です。${age}才です`;
// console.log(message);

/*
アロー関数について
* 
*/
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("aaa"));

//アロー関数
// const func2 = (str) => {
//  return str;
// }
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10,20));

// 分割代入
// const myProfile = {
//   name: "拓希",
//   age: 26,
// }

// const messaege1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(messaege1);

// //いちいちmyprofileを書くのは面倒
// const {name, age} = myProfile;

// const messaege2 = `名前は${name}です。年齢は${age}です。`
// console.log(messaege2);

// const myProfile = ['拓希', 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`
// console.log(message3);

// //配列の場合は、引数を自分で設定する必要がある。
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}才です。`
// console.log(message4);

// //配列における分割代入は順番が大事
// const address = ['京都', '大阪', "兵庫"];
// const [add1, add2, add3] = address;
// const message5 = `私は3才までは${add1}に住み、小学校３年生からは${add2}に住み、中学校からは${add3}にすみました。`
// console.log(message5);

// //デフォルト値 =で繋ぐ　初期値を設定する。
// const sayHello = (name = 'ゲスト') => console.log(`Hello!, ${name}さん！`)

// //undefindは何も入っていない
// sayHello('拓希');

//スプレッド構文

//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]) ;
// sumFunc(...arr1);
//スプレッド構文を用いると、配列の中身を順番に処理をする。

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
//配列をまとめて使用する時もある

//配列のコピー, 結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

//arr4と同じものをコピーする
//なぜか、、コピーしないと破壊的な処理をしなければならないから
// const arr6 = [...arr4];
// console.log(arr6);

// //配列の結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// //やらないこと
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);
//arry4が書き換わってしまう。
//参照渡しが起き、バグになるので、やなない

//mapやfilterを使った配列の処理
//従来
// const nameArr = ["田中", "山田", "高橋"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

//map
// const nameArry2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArry2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));
//indexを知るためには　mapの第二引数を入れる。

// //filter ある条件に一致したものだけを取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   //returnの後に条件式を入れる
//   return num % 2 === 1;
// })

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name == '高橋') {
//     console.log(name)
//   }else {
//     console.log(`${name}さん`)
//   }
// });

//三項演算子 if,elseを一行で可能
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです'
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());
// //toLocalStringは金額設定などで使用

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(49, 33));

//論理演算子の本当の意味を知ろう。 && ||

// const flag1 = true ;
// const flag2 = true;

// if (flag1 || flag2 ) {
//   console.log("1か2はtrueになります")
// }
// if (flag1 && flag2 ) {
//   console.log("1か2はtrueになります")
// }

//またはやかつという意味ではない。

// ||の左がfalseとなる時、右側を返す
// ||の左側がtrueの時、左側を返す
// const num = null;
// const fee = num || "金額未設定です。";
// console.log(fee)

// &&は左側がtrueなら右側を返す
// falseなら左側が入る
// const num2 = 0;
// const fee2 = num2 && '何か設定されました。';
// console.log(fee2);

//jsx方式で使用することがある。

// const table = [
//   {
//     name: "高橋",
//     age: 26,
//     dream: "プログラミングをマスターし、働く場所を選ばない"
//   },
//   {
//     name: "田中",
//     age: 24,
//     dream: "パティシエになる"
//   },
//   {
//     name: "佐藤",
//     age: 28,
//     dream: "アメリカを横断する"
//   },
// ];

// table.map((item) => console.log(item));
