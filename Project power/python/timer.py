import time
from colorama import init, Fore, Style  
init()
def countdown(t): 
	
	while t: 
		mins, secs = divmod(t, 60) 
		timer = '{:02d}:{:02d}'.format(mins, secs) 
		print(timer, end="\r") 
		time.sleep(1) 
		t -= 1
		
		if t == 0: 
			break
	
	print(f"\n{Fore.GREEN}⏰ Time is up!{Style.RESET_ALL}")
 
def main():
    try:
        t = int(input("Enter the time in seconds: "))
        if t > 0:
            countdown(t)
        else:
            print(f"{Fore.RED}Please enter a positive number.{Style.RESET_ALL}")
    except ValueError:
        print(f"{Fore.RED}Invalid input! Please enter an integer.{Style.RESET_ALL}")

if __name__ == "__main__":
    main()



