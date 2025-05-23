import customtkinter as ctk

ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("green")

app = ctk.CTk()
app.title("Calculator")
app.geometry("400x350")

# Input fields
entry1 = ctk.CTkEntry(app, placeholder_text="Enter your first number")
entry1.pack(pady=10)

entry2 = ctk.CTkEntry(app, placeholder_text="Enter your second number")
entry2.pack(pady=10)

# Operation selector
operation = ctk.StringVar(value="Add")
operation_menu = ctk.CTkOptionMenu(app, values=["Add", "Subtract", "Multiply", "Divide"], variable=operation)
operation_menu.pack(pady=10)

# Result label
result_label = ctk.CTkLabel(app, text="", font=ctk.CTkFont(size=14))
result_label.pack(pady=20)

# Calculation function
def calculate():
    try:
        num1 = float(entry1.get())
        num2 = float(entry2.get())
        opr = operation.get()

        if opr == "Add":
            result = num1 + num2
        elif opr == "Subtract":
            result = num1 - num2
        elif opr == "Multiply":
            result = num1 * num2
        elif opr == "Divide":
            if num2 != 0:
                result = num1 / num2
            else:
                result_label.configure(text="Error: Cannot divide by zero!", text_color="red")
                return

        result_label.configure(text=f"Result: {result}", font=ctk.CTkFont(size=14), text_color="green")

    except ValueError:
        result_label.configure(text="⚠️ Please enter valid numbers", text_color="red")

# Button to calculate
calculate_button = ctk.CTkButton(app, text="Calculate", command=calculate)
calculate_button.pack(pady=10)

app.mainloop()
