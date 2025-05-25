upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
lower_case = 'abcdefghijklmnopqrstuvwxyz'
digits = '0123456789'
symbols = '!@#$%^&*()_+-='

password = input("Enter your password: ")

def is_strong_password(password):
  if len(password) < 8:
    return False
  if not any(char in upper_case for char in password):
    return False
  if not any(char in lower_case for char in password):
    return False
  if not any(char in digits for char in password):
    return False
  if not any(char in symbols for char in password):
    return False
  return True

if is_strong_password(password):
  print("Strong password")
else:
  print("Weak password")