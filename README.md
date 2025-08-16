### Youtube Comments, Description, Related, Playlist Right/Side Panel   

> ✨ Transform YouTube with a **tabbed right-hand panel** — Comments, Description, Related Videos, Playlist, and more — all in one smooth sidebar.
> ✅ This extension is non-violating (not breaking YouTube’s or GitHub’s policies).
> ✅ It follows YouTube and GitHub regulations.
> ✅ Safe for personal use.


![Status](https://img.shields.io/badge/status-active-success) ![Firefox](https://img.shields.io/badge/firefox-supported-orange?logo=firefox) ![Chrome](https://img.shields.io/badge/chrome-supported-green?logo=google-chrome) ![Edge](https://img.shields.io/badge/edge-supported-blue?logo=microsoft-edge) ![License](https://img.shields.io/badge/license-MIT-blue) ![MadeWith](https://img.shields.io/badge/made%20with-JavaScript-yellow?logo=javascript)

> A lightweight browser extension that adds a **right-hand sidebar with tabs** for YouTube.  
> Quickly switch between **Comments, Description, Related Videos, and Playlist** — all in one panel.  

<p align="center">
  <img src="assets/demo.gif" alt="YT SideTabs Demo" width="700px">
</p>  

---

## 🚀 Features  


- 📑 **Tabbed Panel** → Switch between Comments, Description, Related, Playlist  
- 🎨 **Dark Mode Friendly** → Seamlessly blends with YouTube themes  
- 📺 **Playlist Support** → Auto-adds Playlist tab when available  
- 💬 **Comments Tab** → *(Planned)* for comments  
- ⚡ **Fast & Safe** → No reloads, no external requests, no tracking  

---

## 📂 Project Structure  

```bash
yt-sidetabs/
│
├── edge-chrome/   # ⚡ Manifest V3 (Chromium: Chrome, Edge, Brave)
├── firefox/       # 🦊 Manifest V2 (Firefox stable)
└── README.md
```

---

## ⚡ Quick Install

### 1. Download the Repository

> Clone the repo (recommended)
```bash
git clone https://github.com/your-username/yt-sidetabs.git
```
> Go inside the repo
```
cd yt-sidetabs
```

👉 Alternatively, you can **Download ZIP** from GitHub and extract it.

---

### 2. Setup for Chrome / Edge / Brave

> Go inside Chromium extension folder
```bash
cd edge-chrome
```

1. Open your browser and go to:

   * Chrome → `chrome://extensions/`
   * Edge → `edge://extensions/`
2. Enable **Developer mode** (top right).
3. Click **Load unpacked**.
4. Select the `edge-chrome/` folder.
5. Open YouTube → 🎉 The new right-hand panel is active.

---

### 3. Setup for Firefox

> Go inside Firefox extension folder
```bash
cd firefox
```

1. Open Firefox and go to: `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…**.
3. Select the `manifest.json` file inside `firefox/`.
4. Open YouTube → 🎉 The right-hand panel is ready.

---

👉 Developer Mode is required for both Chrome/Edge and Firefox because this is an **unpacked extension**.

