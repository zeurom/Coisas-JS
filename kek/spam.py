import pyautogui as spam
import time

limit = int(input("Numero de mensagens: "))  # Convertendo a entrada para inteiro
msg = input("Qual o spam? ")

i = 0

time.sleep(2)

while i < limit:
    spam.typewrite(msg)
    spam.press("Enter")
    i += 1  # Movendo o incremento para dentro do loop
