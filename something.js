const test = ["test1", "test2", "test3", "test4"];
let testsd = test.length;
let textOutput = "";

for (let i = 0; i < test.length; i++) {
  textOutput += test[i] + "<br>";
  console.log(test[i]);
}

console.log("\n完整輸出:");
console.log(textOutput);
document.getElementById("test").innerHTML = textOutput;