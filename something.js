const students = [
  { name: '小明', scores: [85, 90, 88] },
  { name: '小華', scores: [92, 95, 90] },
  { name: '小美', scores:  [78, 82, 80] }
];

// 計算每個學生的平均分數
const averages = students.map(student => {
  const avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
  return { name: student.name, average: avg };
});

console.log(averages);
// [
//   { name: '小明', average: 87.67 },
//   { name:  '小華', average: 92.33 },
//   { name:  '小美', average: 80 }
// ]

// 找出平均最高的學生
const topStudent = averages.reduce((max, student) => {
  return student.average > max.average ? student : max;
});

console.log(topStudent);  // { name: '小華', average: 92.33 }