function createList() {
  return new List;
}

function List() {
  return {
    head: null,
    tail: function() {
      if (this.head === null) {
        return "list is empty"
      } else {
        return this.head.tail();
      }
    },
    append: function(data) {
      if (this.head === null) {
        this.head = new Node(data);
        this.tail = this.head
      } else {
        this.head.push(this, data)
      }
    },
    prepend: function(data) {
      if (this.head === null) {
        this.head = new Node(data);
        this.tail = this.head;
      } else {
        var newNode = new Node(data);
        newNode.link = this.head.link;
        this.head.link = newNode;
      }
    },
    insert: function(position, data) {
      if (this.head === null) {
        this.append(data);
      } else {
        var count = 0;
        this.head.insert(count, position, data);
      }
    },
    includes: function(data) {
      if (this.head === null) {
        return false;
      } else {
        return this.head.includes(data);
      }
    },
    pop: function() {
      if (this.head === null) {
        return "list is empty"
      } else {
        return this.head.pop();
      }
    },
    count: function() {
      var counter = 0;
      if (this.head === null) {
        return 0
      } else {
        return this.head.count(counter)
      }
    }
  }
};

function Node(data) {
  return {
    data: data,
    link: null,
    tail: function() {
      if (this.link === null) {
        return this;
      } else {
        return this.link.tail();
      }
    },
    push: function(list, data) {
      if (this.link === null) {
        this.link = new Node(data);
        list.tail = this.link;
      } else {
        this.link.push(list, data);
      } 
    },
    insert: function(count, position, data) {
      if (count === (position - 1)) {
        var node = new Node(data);
        var link = this.link;
        this.link = node;
        node.link = link;
      } else {
        count++;
        this.insert(count, position, data);
      }
    },
    includes: function(data) {
      if (this.data === data) {
        return true;
      } else if (this.link === null) {
        return false;
      } else {
        return this.link.includes(data);
      }
    },
    doubleLink: function() {
      return this.link.link
    },
    pop: function() {
      if (this.doubleLink() === null) {
        var popped = this.link;
        this.link = null;
        return popped.data;
      } else {
        return this.link.pop()
      }
    },
    count: function(counter) {
      if (this.link === null) {
        return counter;
      } else {
        counter ++;
        return this.link.count(counter)
      }
    }
  }
};
