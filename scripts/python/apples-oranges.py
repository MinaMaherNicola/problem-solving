# INPUTS
# s: int, starting point of Sam's house location
# t: int, ending point of Sam's house location
# a: int, location of apple tree
# b: int, location of orange tree
# apples: int array, distance at which each apple falls from the tree
# oranges: int array, distance at which each apple falls from the tree
applesLoc = []
orangesLoc = []

line = input()
start = int(line.split(' ')[0])
end = int(line.split(' ')[1])

line = input()
applesTreeLoc = int(line.split(' ')[0])
orangesTreeLoc = int(line.split(' ')[1])

line = input()
applesNum = int(line.split(' ')[0])
orangesNum = int(line.split(' ')[1])

line = input().split(' ')
for i in range(applesNum):
  applesLoc.append(int(line[i]))

line = input().split(' ')
for i in range(orangesNum):
  orangesLoc.append(int(line[i]))


def counter(start, end, applesTree, orangeTree, applesDis, orangesDis):
  applesCounter = 0
  orangesCounter = 0

  for i in range(len(applesDis)):
    applesDis[i] += applesTree
    if applesDis[i] >= start and applesDis[i] <= end:
      applesCounter += 1
  
  for i in range(len(orangesDis)):
    orangesDis[i] += orangeTree
    if orangesDis[i] >= start and orangesDis[i] <= end:
      orangesCounter += 1
  
  print(applesCounter)
  print(orangesCounter)

counter(start, end, applesTreeLoc, orangesTreeLoc, applesLoc, orangesLoc)