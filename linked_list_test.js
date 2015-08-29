mocha.setup("bdd");

describe('testing', function () {
  it('creates a new list with an empty head node', function () {
    var list = createList();
    assert.isNull(list.head);
  });

  it('appends an item to the list', function() {
    var list = createList();
    append(list, "pizza");
    append(list, "datariffic");
    assert.equal(list.head.data, "pizza");
    assert.equal(list.head.link.data, "datariffic");
  });

  it('returns its tail', function() {
    var list = createList();
    append(list, "pizza");
    append(list, "datariffic");
    assert.equal(list.tail.data, "datariffic");
  });
  
  it('prepends an item to the list', function() {
    var list = createList();
    append(list, "pizza");
    append(list, "datariffic");
    prepend(list, "lol");
    assert.equal(list.head.link.data, "lol");
    assert.equal(list.tail.data, "datariffic");
  });
  
  xit('inserts data in a given position', function() {
    var list = createList();
    append(list, "pizza");
    append(list, "pepperoni");
    append(list, "onions");
    append(list, "peppers");
    insert(list, 1, "anchovies");
    assert.equal(list.head.link.data, "anchovies")
  });
  
  it('can tell whether it includes specific data', function() {
    var list = createList();
    append(list, "pizza");
    append(list, "pepperoni");
    append(list, "onions");
    assert.equal(includes(list, "onions"), true);
    assert.equal(includes(list, "anchovies"), false);
  });
  
  it('can pop the last node off the end of the list', function() {
    var list = createList();
    assert.equal(pop(list), "list is empty");
    append(list, "pizza");
    append(list, "pepperoni");
    append(list, "onions");
    assert.equal(list.tail.data, "onions");
    assert.equal(pop(list), "onions");
    assert.equal(list.tail.data, "pepperoni");
  })
});
