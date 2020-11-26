class QuickUnion {
  elements = []

  constructor(listLength) {
    for (let i = 0; i < listLength; i++) {
      this.elements.push(i);
    }
  }

  root (index) {
    while(index !== this.elements[index]) {
      index = this.elements[index];
    }
    return index;
  }

  union(a, b) {
    this.elements[b] = this.root(a);
  }

  connected(a, b) {
    if (this.root(a) === this.root(b)) {
      console.log('True');
    } else { console.log('False'); }
  }
}

const a = new QuickUnion(10);

a.union(0, 5);
a.union(0, 6);
a.union(1, 0);
a.union(1, 7);
a.union(8, 1);

a.connected(5, 8);