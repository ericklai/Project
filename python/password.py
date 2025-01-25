import subprocess 

command1 = 'netsh wlan show profile'
print(subprocess.run(command1, shell=True, capture_output=True, text=True).stdout)

print( "****************************************************************************************************************************************************" )
SSID = input("""Please choose from the above list which SSID you want the password for:
***********************************************************************************************************************************""")

print("You chose:", SSID)

command = "netsh wlan show profile name=\"" + SSID + "\" key=clear | findstr \"Key Content\""

print(subprocess.run(command, shell=True, capture_output=True, text=True).stdout)
