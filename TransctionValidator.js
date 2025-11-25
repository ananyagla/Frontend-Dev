"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

let valid = [];
let invalid = [];

for (let i = 0; i < transactions.length; i++) {

  debugger;

  try {
    let t = transactions[i];

    if (t === null) {
      throw "null transaction";
    }

    if (t.id === undefined) {
      throw "id missing";
    }

    if (t.amount === undefined) {
      throw "amount missing";
    }

    if (t.amount < 0) {
      throw "negative amount";
    }

    valid.push(t);
    console.log("valid:", t);

  } catch (e) {
    invalid.push({ tx: transactions[i], error: e });
    console.log("invalid:", e);
  }
}

console.log("valid list:", valid);
console.log("invalid list:", invalid);
