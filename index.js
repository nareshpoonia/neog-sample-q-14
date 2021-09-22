var objectOne = {
  name: "Ram",
  age: 25,
  yug: "Treta",
};

var objectTwo = {
  name: "Krishna",
  age: 31,
  yug: "Dwapar",
};

function returnOld(objectOne, objectTwo) {
  if (objectOne.age > objectTwo.age) {
    return objectOne.name;
  } else {
    return objectTwo.name;
  }
}

console.log(returnOld(objectOne, objectTwo));
