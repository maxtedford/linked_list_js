function List() {
  return {
    head: null,
    tail: null
  }
};

function Node(data) {
  return {
    data: data,
    link: null,
    push: function(list, data) {
      if (this.link === null) {
        this.link = new Node(data);
        list.tail = this.link;
      } else {
        this.link.push(list, data);
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
    }
  }
};

function createList() {
  return new List;
}

function append(list, data) {
  if (list.head === null) {
    list.head = new Node(data);
    list.tail = list.head
  } else {
    list.head.push(list, data)
  }
}

function prepend(list, data) {
  if (list.head === null) {
    list.head = new Node(data);
    list.tail = list.head;
  } else {
    var newNode = new Node(data);
    newNode.link = list.head.link;
    list.head.link = newNode;
  }
}

function includes(list, data) {
  if (list.head === null) {
    return false;
  } else {
    return list.head.includes(data);
  }
}
