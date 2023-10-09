<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: undefined. 

<i>Write your explanation here</i>
Firstly greeting is declared but no value is assigned. Then empty object has been assigned to greetign which  is incorrect spelling of greeting. console.log is made of greetign that is not declared. 
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: "12"

<i>Write your explanation here</i>
Here first argument is a number and second argument is a string. It not possible to find result of summation of a number and a string. It can be possible if string is converted to a number. But this is not included in this function. In this case "+" operator is used to concatenate the number with the string.

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: ['🍕', '🍫', '🥑', '🍔']

<i>Write your explanation here</i>
  Array food is declared which include 4 food items. Object info is declared with property favoriteFood with value from the first item of array food. Then value of property favoriteFood is reassigned with a new item. Reassigned value will not change the items of array food. So array food will remain unchanged.
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D: ReferenceError

<i>Write your explanation here</i>
In this function a parameter name is given. For this parameter, function  expected a argument when it was called. As no argument was given, function was not able to find any reference. Thus it caused a reference error.  

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>Write your explanation here</i>
In this code, an array named nums containing four numbers is declared. Here forEach method is used to iterate over each element in the array. In the callback function, there is an if statement that checks whether the current num is truthy. If the condition is true, it increments the count variable by 1. As there is three truthy numbers(0 is not a truthy), it is incremented three times by 1.

</p>
</details>
