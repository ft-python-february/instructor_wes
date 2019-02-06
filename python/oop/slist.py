class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

class SList:
  def __init__(self):
    self.head = None

  def add_front(self, val):
    node = Node(val)
    node.next = self.head
    self.head = node
    return self

  # remove the first node, retain original order and don't lose track of the list!
  def remove_front(self):
    pass

  # return True if the list contains the value anywhere inside it, False if not
  def contains(self, val):
    pass

  # using an index value, insert a new node at the given list "index"
  def insert_at(self, idx, val):
    pass

  # calculate the length of the list
  def length(self):
    pass

  def display(self):
    result = []
    runner = self.head
    while runner != None:
      result.append(runner.val)
      runner = runner.next
    print(result)
    return self

slist = SList()
slist.add_front('C').display().add_front('B').display().add_front('A').display()
