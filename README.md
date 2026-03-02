# steezeTIC-TAC-TOE 

An immersive, enterprise-grade, neon-infused Tic-Tac-Toe experience. Built with Node.js and Three.js, this isn't just a game—it's a journey through a liquid-glass dimension.

![Play steezeTIC-TAC-TOE ]([https://via.placeholder.com/800x450.png?text=steezeTIC-TAC-TOE+Preview](https://neon-tic-tac-toe-370657913521.us-west1.run.app/))

##  Features

- **Liquid Glass Aesthetics:** An animated purple liquid background that flows like a river stream.
- **Enterprise-Grade Motion Design:**
  - **Chromatic Ribbon Trail:** A high-intensity liquid trail with chromatic aberration that follows your cursor.
  - **Fluid Repulsion Physics:** The cursor trail gracefully glides around the game board.
  - **3D Parallax Tilt:** The board tilts and pans in 3D space based on your mouse position.
  - **Dynamic Spotlight:** A soft glow highlights the board as you navigate.
- **Immersive Interactions:**
  - **3D Smiling Emoji:** An interactive 3D companion that tracks your cursor and celebrates wins with a thumbs-up.
  - **Trippy Confetti:** Chaotic, neon-colored confetti spray with randomized physics for every victory.
- **Generative Audio:** Featuring the **Ethereal Pulsar**—a generative space drone created with the Web Audio API to deepen the immersion.
- **Robust Logic:** A Node.js/Express backend handles all game state, turn switching, and win detection.

## Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/neon-tic-tac-toe.git
   cd neon-tic-tac-toe
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## 🛠️ Tech Stack
- **Backend:** Node.js, Express
- **Frontend:** HTML5, CSS3 (Vanilla), Three.js (3D Rendering), Canvas API (Cursor Effects)
- **Audio:** Web Audio API

## ☁️ Deployment
This project is configured for easy deployment to **Google Cloud Run**.
```bash
gcloud run deploy neon-tic-tac-toe --source .
```

##  License
MIT
