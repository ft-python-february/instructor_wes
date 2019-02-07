class Node:
    def __init__(self,val):
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

    def remove_front(self):
        if self.head == None:
            return self
        temp = self.head
        self.head = self.head.next 
        del temp
        return self

    # return True if the list contains kthe value anywhere inside it, False if not
    # def contains(self, val):
    #     #Start with head 
    #     curr = self.head
    #     #for each node, check node's value
    #     while curr != None:
    #         if curr.val = val:
    #             return True
    #             #else move curr to next node
    #         else:
    #             curr = curr.next
    #         #if the list is done without a True, return False
    #     return False

    # using an index value, insert a new node at the given list "index"
    # A   B   C   D

    def insert_at(self, idx, val):
        #Start with the head
        curr = self.head

        #Iterate to idx value
        while curr != None:
            if curr == stop:
                self.add_front(val)

            # else:

            #   curr = curr.next

        #Create/Insert new Node

        #Exit

    # calculate the length of the list
    def length(self):
        count = 0
        curr = self.head
        while curr != None:
            count+=1
            curr = curr.next

    def display(self):
        result = []
        runner = self.head
        while runner:
            result.append(runner.val)
            runner = runner.next
        print(result)
        return self

slist = SList()             #Create empty list

slist.add_front('D').add_front('C').add_front('B').add_front('A').display()  