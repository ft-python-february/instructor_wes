class Animal:
  def __init__(self, name):
    self.health = 100
    self.alive = True
    self.name = name

  def display_health(self):
    print(self.health)
  
  def introduce(self):
    print("Hello, my name is {}".format(self.name))

class Human(Animal):
  def __init__(self, name, eye_color):
    super().__init__(name)
    self.eye_color = eye_color

  def workout(self):
    self.health += 10
    return self

  def introduce(self):
    print("Hello, I am a human and my name is {}".format(self.name))


todd = Human("Todd", "Purple")
wes = Human("Wes", "Purple")
jenny = Human("Jenny", "Purple")
sam = Human("Sam", "Purple")
david = Human("David", "Purple")

# david.workout().display_health()

# jenny.introduce()

print(bool(None))