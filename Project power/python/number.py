import customtkinter as ctk
import random


ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("blue")

app = ctk.CTk()
app.title("Number Guessing Game")
app.geometry("400x300")


random_number = random.randint(1, 10)

def check_guess():
    try:
        guess = int(entry.get())
        if 1 <= guess <= 10:
            if guess == random_number:
                result_label.configure(text="🎉 You win!", text_color="green",
                font=ctk.CTkFont(size=20, weight="bold"))
                guess_button.configure(state="disabled")
            else:
                result_label.configure(text=f"❌ Wrong! The number was {random_number}", text_color="red")
                guess_button.configure(state="disabled")
        else:
            result_label.configure(text="⚠️ Enter number between 1 and 10", text_color="orange")
    except ValueError:
        result_label.configure(text="⚠️ Please enter a valid number", text_color="orange")

title_label = ctk.CTkLabel(app, text="Guess a number between 1 and 10", font=ctk.CTkFont(size=16, weight="bold"))
title_label.pack(pady=20)

entry = ctk.CTkEntry(app, placeholder_text="Enter your guess")
entry.pack(pady=10)

guess_button = ctk.CTkButton(app, text="Guess", command=check_guess)
guess_button.pack(pady=10)

result_label = ctk.CTkLabel(app, text="", font=ctk.CTkFont(size=14))
result_label.pack(pady=20)

app.mainloop()
