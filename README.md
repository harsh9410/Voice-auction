# 🎯 BidEcho — Voice-Controlled Time-Bending Auction Platform

**BidEcho** is a futuristic auction system where **time replaces money** — participants bid using seconds or minutes of their life credits. Powered by real-time updates, anti-sniping features, and optional neuro-bidding, BidEcho lets everyone compete fairly — bringing skill and strategy to the center stage.

---

## 🚀 Key Features
- ⏳ **Time-Based Bidding** — Bid using time credits (e.g. "Add 30 seconds!")
- 🎙️ **Voice-Controlled Auctions** — Place bids hands-free via phone or smart speakers
- 🔄 **Anti-Sniping (Soft-Close)** — Last-second bids extend the auction automatically
- 🧠 **Neuro-Bidding** — Auto-bid triggered at peak focus using EEG headset
- ⚡ **Reality Control** — Spend earned time tokens to pause or extend the auction
- 🧮 **Proxy Bids** — Set a max bid and let the system increment for you
- 🏆 **Leaderboard & Badges** — Engage users with gamification
- 🔐 **Secure Payments** — Integrated with trusted payment gateways
- 💬 **Live Chat & Highlights** — Connect and share auction moments on social media
- 🧑‍💻 **Real-Time Dashboard** — Track bids, wins, spending, and personal stats

---

## 🧱 Architecture Overview
**Backend**:
- 🐍 **FastAPI** for REST & WebSocket APIs
- 🧠 Real-time bidding engine with anti-sniping
- 🧑‍💻 User & auction management, proxy bidding logic
- 🧪 Auction data & bids stored in relational DB (PostgreSQL)
- 🔐 Secure authentication & payment integration

**Frontend**:
- ⚛️ Modern responsive UI with React
- 📈 Live updates via WebSockets
- 🧠 Visual leaderboard and badge system
- 🔍 Search & filters for active auctions
- 📱 Fully mobile-optimized UI/UX

**Voice Agent**:
- 🗣️ OmniDimension integration for voice commands
- 🧠 NeuroSky SDK for optional EEG-based bidding

---

## 🛠 Getting Started
**Clone this repo**:
   ```bash
   git clone https://github.com/your-username/BidEcho.git
   cd BidEcho
   ```

---

## 🔄 Future Improvements
- 📹 Implement live video streaming of auctions
- 🧠 AI-driven personalized recommendations
- 🌍 Multi-language support
- 🧵 Real-time clipping & social sharing
- 🔐 Enhanced fraud prevention and dispute tools

---

## 📜 License
This project is licensed under the **Apache License 2.0**.

> Built with ❤️ for fair and exciting bidding — where skill, not wealth, wins the game!
