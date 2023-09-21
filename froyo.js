const froyoOrder = prompt(
    "Please list the froyo flavors you want to order, separated by commas:",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
console.log(froyoOrder);

const froyoArray = froyoOrder.split(",");
console.log(froyoArray);

const froyoObject = {};
  for (const item of froyoArray) {
    if (froyoObject[item]) {
        froyoObject[item]++;
    } else {
        froyoObject[item] = 1;
    }
}
console.table(froyoObject);


/*for (let i = 0; i < froyoArray.length; i++) {
    if(froyoArray[i]!==froyoArray[0])
    froyoObject.push(froyoArray[i])
}
return flavorCount;
}

for (const flavor of froyoFlavors) {
    if (froyoFlavorCounts[flavor] === undefined) {
      froyoFlavorCounts[flavor] = 0;
    }
    froyoFlavorCounts[flavor]++;
  }*/