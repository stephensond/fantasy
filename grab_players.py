'''
Author: Alex Wisnaskas - 09.16.2020
Description: Pulls player data from www.footballdb.com into csv
'''

from bs4 import BeautifulSoup
import requests
import csv
import time

LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
           'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
POSITIONS = ['RB', 'QB', 'K', 'WR', 'TE']

tim_patrick = []
counter = 1
for letter in LETTERS:

    time.sleep(.3)

    URL = ('https://www.footballdb.com/players/current.html?letter=' + letter)
    headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36'}

    page = requests.get(URL, headers=headers)

    raw_html = BeautifulSoup(page.content, 'html.parser')

    bryan_edwards = raw_html.find_all('div', class_= 'tr')

    for row in bryan_edwards:
        player = []
        player.append(counter)
        stats = row.find_all('div', class_= 'td')

        bit = 0
        for stat in stats:

            if bit == 0:
                lst = stat.text.split(', ')
                entry = lst[1] + ' ' + lst[0]
                bit = 1
            else: entry = stat.text
            player.append(entry)

        if player != [] and (str(player[2]) in POSITIONS):
            tim_patrick.append(player)
            counter += 1

with open('players.csv', mode = 'w', newline = '') as playerbase:
    guy_writer = csv.writer(playerbase, delimiter = ',', quotechar = '"',
        quoting = csv.QUOTE_MINIMAL)

    for player in tim_patrick:
        guy_writer.writerow(player)
            
    
