class QuickFind {
  elements = []
  constructor(listLength) {
    for (let i = 0; i < listLength; i++) {
      this.elements.push(i);
    }
  }

  areConnected(a, b) {
    if (this.elements[a] === this.elements[b]) {
      return true;
    } else {
      return false;
    }
  }

  union(a, b) {
    let valueOfA = this.elements[a];
    let valueOfB = this.elements[b];

    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i] === valueOfA) { this.elements[i] = valueOfB }
    }
  }
}

const quickFind = new QuickFind(5);
quickFind.union(0, 1);
quickFind.union(2, 3);
quickFind.union(3, 4);
quickFind.union(0, 2);

console.log(quickFind.areConnected(2, 4));

console.log(quickFind.elements);