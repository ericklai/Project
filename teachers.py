rec_dict = {}

def std_record():
    print('1. Add student mark')
    print('2. View all records')
    teacher = int(input('Your option: '))

    if teacher == 1:
        num = int(input('How many students do you want to add: '))
        count = 0

        while count < num:
            student = input('Name')
            grade = int(input('Input grade'))
            rec_dict[student] = grade
            count += 1
    elif teacher == 2:
        if not rec_dict:
            print('No records available')
        else:
            for key, value in rec_dict.items():
                print(f'{key} : {value}')

    else:
        print('Invalid option!')

while True:
    std_record()
    print()

