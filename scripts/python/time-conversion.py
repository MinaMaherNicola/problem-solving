time12 = input()


def timeConversion(time):
  global time12
  time = time.split(':')
  meridiem = time[2][2:]
  if meridiem == 'AM':
    if (time[0] == '12'):
      time12 = f'00:{time[1]}:{time[2][0:2]}'
      return time12
    return time12[0:8]
  else:
    if (time[0] == '12'):
      time12 = f'{time[0]}:{time[1]}:{time[2][0:2]}'
      return time12
    else:
      time12 = f'{str((int(time[0]) + 12))}:{time[1]}:{time[2][0:2]}'
      return time12

print(timeConversion(time12))