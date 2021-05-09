numberOfGames = int(input())
scores = input().split(' ')
for i in range(numberOfGames):
    scores[i] = int(scores[i])

game = {
    'gameNo': 0,
    'score': scores[0],
    'high': scores[0],
    'low': scores[0]
}

highCount = 0
lowCount = 0

for i in range(numberOfGames):
    game['gameNo'] = i
    game['score'] = scores[game['gameNo']]

    if game['high'] < game['score']:
        highCount += 1
        game['high'] = game['score']

    if game['low'] > game['score']:
        lowCount += 1
        game['low'] = game['score']

print(highCount, lowCount)
