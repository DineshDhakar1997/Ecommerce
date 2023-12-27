import os
from datetime import datetime
os.system("cd /Users/dinesh/Desktop/MERN project")
current_datetime = datetime.now().strftime("%d-%m-%Y %H:%M:%S")
os.system("git add .")
os.system(f"git commit -m 'updated on {current_datetime}'")
os.system("git push origin main")