# 🃏 Higher or Lower

A simple browser-based **Higher or Lower card game** made with HTML, CSS and JavaScript.

## 🎮 How to Play

The game shows you a playing card and asks you to guess whether the next card will be **higher or lower**.

* 🟢 **High** — Guess that the next card will be higher.
* 🔴 **Low** — Guess that the next card will be lower.
* ✅ Correct guess = **+1 point**
* ❌ Incorrect guess = **score resets to 0**
* 🟰 Same card = **Safe**, with no points lost

### Card Values

Cards are ordered from lowest to highest:

**A → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → J → Q → K**

> Ace is treated as the **lowest** card.

## ✨ Features

* Randomly generated playing cards
* Four card suits:

  * ♠ Spades
  * ♥ Hearts
  * ♦ Diamonds
  * ♣ Clubs
* Red suits for Hearts and Diamonds
* Purple suits for Spades and Clubs
* Higher / Lower buttons
* Score tracking
* Score reset when a guess is incorrect
* "Safe" result when the cards are equal
* Hide/Show rules button
* Responsive, browser-based design
* No external libraries or dependencies

## 🛠️ Technologies Used

* **HTML** — Page structure
* **CSS** — Styling and layout
* **JavaScript** — Game logic, random cards, guesses and scoring

## 📁 Project Structure

```text
higher-or-lower/
│
├── all of it.txt
├── INDEX.html
├── script.js
├── style.css
├── uri.html
└── README.md
```

The entire game can also be contained inside a single HTML file.

## 🚀 Running the Game

### Option 1 — Open the HTML file

Download or clone the project and open:

```text
all of it.txt
```

Coppy the contents and then paste it into the URL feild.

## 🧠 How the Game Works

The game randomly generates:

1. A card value from **1–13**
2. A random suit from the four suits
3. The card is displayed on screen
4. The player chooses **High** or **Low**
5. A new card is generated
6. JavaScript compares the two card values
7. The score is updated depending on the result

The game uses JavaScript's `Math.random()` to generate the cards.

## 📝 How I Made It

I wanted to make something ambitious for this project, but that ended up backfiring when I checked the file size of my first versions. The game was around 12 MB, but the project could only be 3 MB, so I had to strip it down quite a lot.

I had to remove features such as the animated background and animated buttons that I originally wanted to use. Instead of just removing features, I also worked on improving the game logic so I could keep the same functionality while using far fewer characters.

After optimising the HTML, CSS and JavaScript and removing unnecessary code, I finally managed to get the project under the 3 MB limit while keeping the main functionality of the game.

## 📜 License

This project is made for learning and experimentation.
