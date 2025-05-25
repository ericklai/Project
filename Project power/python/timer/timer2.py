import tkinter as tk
from tkinter import messagebox
import threading
from playsound import playsound
import os

def start_countdown():
    try:
        hours = int(entry_hours.get()) if entry_hours.get() else 0
        minutes = int(entry_minutes.get()) if entry_minutes.get() else 0
        seconds = int(entry_seconds.get()) if entry_seconds.get() else 0
        total_seconds = hours * 3600 + minutes * 60 + seconds
    except ValueError:
        label.config(text="Enter valid numbers.", fg="red")
        return

    start_button.config(state="disabled")
    reset_button.config(state="normal")
    reset_flag.set(False)

    def countdown(t):
        if t >= 0 and not reset_flag.get():
            hrs, rem = divmod(t, 3600)
            mins, secs = divmod(rem, 60)
            timer_text = '{:02d}:{:02d}:{:02d}'.format(hrs, mins, secs)
            label.config(text=timer_text, fg="white")
            root.after(1000, countdown, t - 1)
        elif not reset_flag.get():
            label.config(text="Time is up!", fg="red")
            start_button.config(state="normal")
            if sound_enabled.get():
                threading.Thread(target=play_alarm, daemon=True).start()

    countdown(total_seconds)

def play_alarm():
    sound_file = "python\timer\alarm.mp3"
    if os.path.exists(sound_file):
        try:
            playsound(sound_file)
        except Exception as e:
            messagebox.showerror("Sound Error", f"Failed to play sound:\n{e}")
    else:
        messagebox.showwarning("Missing File", "alarm.mp3 not found.")

def reset_timer():
    reset_flag.set(True)
    entry_hours.delete(0, tk.END)
    entry_minutes.delete(0, tk.END)
    entry_seconds.delete(0, tk.END)
    label.config(text="00:00:00", fg="white")
    start_button.config(state="normal")
    reset_button.config(state="disabled")

root = tk.Tk()
root.title("⏳ Countdown Timer")
root.geometry("350x300")
root.config(bg="#1e1e1e")

reset_flag = tk.BooleanVar(value=False)
sound_enabled = tk.BooleanVar(value=True)

frame_inputs = tk.Frame(root, bg="#1e1e1e")
frame_inputs.pack(pady=10)

entry_hours = tk.Entry(frame_inputs, width=5, font=("Arial", 14))
entry_hours.grid(row=0, column=0, padx=5)
tk.Label(frame_inputs, text="Hours", font=("Arial", 10), bg="#1e1e1e", fg="white").grid(row=1, column=0)

entry_minutes = tk.Entry(frame_inputs, width=5, font=("Arial", 14))
entry_minutes.grid(row=0, column=1, padx=5)
tk.Label(frame_inputs, text="Minutes", font=("Arial", 10), bg="#1e1e1e", fg="white").grid(row=1, column=1)

entry_seconds = tk.Entry(frame_inputs, width=5, font=("Arial", 14))
entry_seconds.grid(row=0, column=2, padx=5)
tk.Label(frame_inputs, text="Seconds", font=("Arial", 10), bg="#1e1e1e", fg="white").grid(row=1, column=2)

label = tk.Label(root, text="00:00:00", font=("Arial", 32), bg="#1e1e1e", fg="white")
label.pack(pady=20)

sound_checkbox = tk.Checkbutton(root, text="🔊 Sound", variable=sound_enabled,
                                font=("Arial", 12), bg="#1e1e1e", fg="white",
                                activebackground="#1e1e1e", activeforeground="white", selectcolor="#1e1e1e")
sound_checkbox.pack()

start_button = tk.Button(root, text="Start Timer", font=("Arial", 14), command=start_countdown)
start_button.pack(pady=5)

reset_button = tk.Button(root, text="Reset", font=("Arial", 12), command=reset_timer, bg = "#d40000", fg="white", activebackground="#1e1e1e", activeforeground="white", state="disabled")
reset_button.pack()

root.mainloop()
