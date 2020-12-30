data = input().split(' ')

for i in range(len(data)):
  data[i] = int(data[i])

# print(data)

def kangaroo(x1, v1, x2, v2):
  counter = 0
  firstKangaroo = x1 + v1
  secondKangaroo = x2 + v2
  # print(f'x1:{x1}, v1:{v1}, x2:{x2}, v2:{v2}')
  if firstKangaroo == secondKangaroo:
    print('YES')
    return

  if x2 > x1:
    if v2 > v1:
      print('NO')
      return
    else:
        while True:
          # print(f'First: {firstKangaroo} Second: {secondKangaroo}')
          firstKangaroo += v1
          secondKangaroo += v2
          counter += 1

          if firstKangaroo == secondKangaroo:
            print('YES')
            return
          elif counter > 10000:
            print('NO')
            return

kangaroo(data[0], data[1], data[2], data[3])
