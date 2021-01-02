# grades in range from 0 to 100
# any grade less than 40 is a failing grade
# Rounding rules: #! if the diff between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5
# 2# if the value of grade is less than 28, no rounding occurs as the reslut will be failing grade

# EX: 84 round to 85 --------- 29 does not round ------------ 57 does not round (60 - 57 is 3 or higher)

# INPUT: array of grades before rounding
# OUTPUT: array of grades after rounding

size = int(input())

grades = []

for i in range(size):
  grades.append(int(input()))

def gradesRounder(grades):
  for i in range(size):
    if (grades[i] < 38):
      continue
    elif ((grades[i] + 2) % 5 == 0):
      grades[i] += 2
    elif ((grades[i] + 1) % 5 == 0):
      grades[i] += 1
  return grades

finalGrades = gradesRounder(grades)
for i in range(size):
  print(finalGrades[i])