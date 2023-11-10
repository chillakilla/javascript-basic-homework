const 할일들 = [
  {
    id: 1,
    할일: '8시기상',
    완료여부: false,
  },
];

// 여기에 코드를 작성해주세요.
const 새할일 = 할일들.map(할일 => {
  return {...할일, 완료여부: true};
});

console.log(할일들);
console.log(새할일);
// 결과
// { id: 1, '할일': '8시기상', '완료여부': false }
// { id: 1, '할일': '8시기상', '완료여부': true }
