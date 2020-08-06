// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(", and ");
  // join은 스트링으로 변환시켜줌, 구분자는 굳이 넣지 않아도 됨
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",");
  //구분자 , 를 항상 넣어주자
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  //리버스는 배열 자체를 바꿈
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(0, 2);
  // 0은 시작 2는 끝, 2는 배제하여 0과 1까지 전달
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  // 배열들의 요소마다 호출이 되고,  true 혹은 false를 리턴하고,
  // find는 true가 나오면 해당하는 요소를 리턴해줌.
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
  // map은 지정된 콜백 함수를 호출하면서 배열 안에 들어있는 각각의 요소를 새로운 값으로 바꿔 줌.
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);
  // some은 배열 안에서 true로 리턴하는 애가 하나 있는지 없는지 확인

  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
  // every는 배열의 모든 요소들이
  // 조건(모든 학생들의 점수가 50점 보다 낮음)을 충족해야 true로 리턴
}

// Q9. compute students' average score
{
  console.clear();
  // reduce는 우리가 원하는 시작점 부터 돌면서 어떤 값을 누적할 때 사용
  const result = students.reduceRight((prev, curr) => prev + curr.score, 0);
  console.log(result / 5);
  //prev value는 이전에 콜백 함수에서 리턴된 값이 전달되어 오고
  //curr 는 배열의 아이템을 순차적으로 전달 받는다
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
