import os
from datetime import datetime
current_datetime = datetime.now().strftime("%d-%m-%Y %H:%M:%S")
os.system("git add .")
os.system(f"git commit -m 'updated on {current_datetime}'")