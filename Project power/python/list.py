# # word = input("Enter a word: ")

# # def reverse(word):
# #     word = word[::-1]
# #     return word
# # print(reverse(word))

word = input("Enter a word: ")

def palindrome(word):
    word = word[::-1]
    return word

if word == palindrome(word):
    print("The word is a palindrome")
else:
    print("The word is not a palindrome")

# print(3.3-2.2)
