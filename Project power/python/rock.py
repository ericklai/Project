import customtkinter as ctk
import random

ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("blue")

app = ctk.CTk()
app.title("ROCK-PAPER-SCISSORS")
app.geometry("400x350")

result_label = ctk.CTkLabel(app, text="", font=("Arial", 18))
result_label.pack(pady=20)

def playGame(player_choice):
    choices = ["rock", "paper", "scissors"]
    comp_choice = random.choice(choices)

    if player_choice == comp_choice:
        result = f"Computer chose {comp_choice}. It's a tie!"
    elif (player_choice == "rock" and comp_choice == "scissors") or \
         (player_choice == "paper" and comp_choice == "rock") or \
         (player_choice == "scissors" and comp_choice == "paper"):
        result = f"Computer chose {comp_choice}. You win!"
    else:
        result = f"Computer chose {comp_choice}. You lose!"
        
        # result_label.configure(text=f"Computer chose {comp_choice}. You lose!", font=ctk.CTkFont(size=14), text_color="green")

    result_label.configure(text=result)

rock_button = ctk.CTkButton(app, text="ROCK 👊🏾", command=lambda: playGame("rock"))
rock_button.pack(pady=10)

paper_button = ctk.CTkButton(app, text="PAPER 🖐", command=lambda: playGame("paper"))
paper_button.pack(pady=10)

scissors_button = ctk.CTkButton(app, text="SCISSORS ✂", command=lambda: playGame("scissors"))
scissors_button.pack(pady=10)


app.mainloop()
