arrSize = int(input())
candlesHeight = input().split(' ')

for i in range(arrSize):
  candlesHeight[i] = int(candlesHeight[i])

def birthdayCakeCandles(candles):
  maxHolder = max(candles)
  maxCount = 0

  for i in range(arrSize):
    if candles[i] == maxHolder:
      maxCount += 1
  
  return maxCount

print(birthdayCakeCandles(candlesHeight))