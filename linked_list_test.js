mocha.setup("bdd");

describe('testing', function () {
  it('creates a new list with an empty head node', function () {
    var list = createList();
    assert.isNull(list.head);
  });

  it('appends an item to the list', function() {
    var list = createList();
    list.append("pizza");
    list.append("datariffic");
    assert.equal(list.head.data, "pizza");
    assert.equal(list.head.link.data, "datariffic");
  });

  it('returns its tail', function() {
    var list = createList();
    assert.equal(list.tail(), "list is empty");
    list.append("pizza");
    list.append("datariffic");
    assert.equal(list.tail.data, "datariffic");
  });
  
  it('prepends an item to the list', function() {
    var list = createList();
    list.append("pizza");
    list.append("datariffic");
    list.prepend("lol");
    assert.equal(list.head.link.data, "lol");
    assert.equal(list.tail.data, "datariffic");
  });
  
  it('inserts data in a given position', function() {
    var list = createList();
    list.append("pizza");
    list.append("pepperoni");
    list.append("onions");
    list.append("peppers");
    list.insert(1, "anchovies");
    assert.equal(list.head.link.data, "anchovies")
  });
  
  it('can tell whether it includes specific data', function() {
    var list = createList();
    list.append("pizza");
    list.append("pepperoni");
    list.append("onions");
    assert.equal(list.includes("onions"), true);
    assert.equal(list.includes("anchovies"), false);
  });
  
  it('can pop the last node off the end of the list', function() {
    var list = createList();
    assert.equal(list.pop(), "list is empty");
    list.append("pizza");
    list.append("pepperoni");
    list.append("onions");
    assert.equal(list.count(), 2);
    assert.equal(list.pop(), "onions");
    assert.equal(list.count(), 1);
  });
  
  it('can return the count of all nodes in the list', function() {
    var list = createList();
    list.append("pizza");
    list.append("pepperoni");
    list.append("onions");
    assert.equal(list.count(), 2)
  })
});
