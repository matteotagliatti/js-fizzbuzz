const ul = document.querySelector("ul");

for (let i = 1; i <= 100; i++) {
  let li = document.createElement("li");
  li.innerText = i;

  if (i % 3 === 0 && i % 5 === 0) {
    li.innerHTML = "FizzBuzz";
  } else if (i % 3 === 0) {
    li.innerHTML = "Fizz";
  } else if (i % 5 === 0) {
    li.innerHTML = "Buzz";
  }

  ul.append(li);
}
