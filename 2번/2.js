const arrTutors = ['예병수', '류제천', '이재상', '최원장'];

const findTutors = arrTutors.find(Tutor => {
  return Tutor === '예병수';
});

// 배열에서 예병수를 출력하는 방법은?
console.log(findTutors);
