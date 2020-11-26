class QuickUnion {
  elements = []

  constructor(listLength) {
    for (let i = 0; i < listLength; i++) {
      this.elements.push(i);
    }
  }

  union(a, b) {
    this.elements[b] = this.elements[a];
  }

  connected(a, b) {
    let rootA = this.elements[a];
    let rootB = this.elements[b];
    console.log(this.elements)
    if (rootA === rootB) {
      return console.log('True');
    } else {
      rootA = this.elements[rootA];
      rootB = this.elements[rootB];
      if (rootA === rootB) {
        return console.log('True');
      } else {
        return console.log('False');
      }
    }
  }
}

const a = new QuickUnion(10);

a.union(0, 5);
a.union(0, 6);
a.union(1, 0);
a.union(1, 7);
a.union(8, 1);

a.connected(5, 8);
// a.union(2, 6);
// a.union(2, 7);
// a.union(3, 2);
// a.union(3, 8);

// a.connected(2, 6);