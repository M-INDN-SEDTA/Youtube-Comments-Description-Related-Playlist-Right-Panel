Got it 👍 — your **Quick Install** section can be made more “copy-paste friendly” (like VS Code extensions or CLI tools). Below I’ve updated your README snippet with clearer steps, copyable commands, and small UI hints.

---

````markdown
### Youtube Comments, Description, Related, Playlist Right/Side Panel   

> ✨ Transform YouTube with a **tabbed right-hand panel** — Comments, Description, Related Videos, Playlist, and more — all in one smooth sidebar.  

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
├── edge-chrome/                # ⚡ Extension for Chromium browsers (Chrome, Edge, Brave)
│   ├── manifest.json           # Extension config (Manifest V3)
│   ├── content.js              # Injects the sidebar logic into YouTube
│   ├── styles.css              # Custom styling for the right-side panel
│   └── icons/                  # Browser extension icons (16x16, 48x48, 128x128)
│
├── firefox/                    # 🦊 Extension for Firefox (Manifest V2)
│   ├── manifest.json           # Extension config (Manifest V2)
│   ├── content.js              # Injects the sidebar logic into YouTube
│   ├── styles.css              # Custom styling for the right-side panel
│   └── icons/                  # Browser extension icons
│
├── assets/                     # 🎬 Media & demo files
│   └── demo.gif                # Animated preview for README
│
└── README.md                   # 📖 Project documentation
````

---

## ⚡ Quick Install

### 🔹 Chrome / Edge / Brave

1. **Download & Extract** this repo:

   ```bash
   git clone https://github.com/your-username/yt-sidetabs.git
   cd yt-sidetabs/edge-chrome
   ```

   *(Or just [Download ZIP](../../archive/refs/heads/main.zip) & extract)*

2. Open **Extensions page** → `chrome://extensions/`

3. Enable **Developer Mode** (top-right toggle).

4. Click **Load unpacked** → select the `edge-chrome/` folder.

5. Open YouTube → ✅ Sidebar will appear.

---

### 🔹 Firefox

1. Download repo:

   ```bash
   git clone https://github.com/your-username/yt-sidetabs.git
   cd yt-sidetabs/firefox
   ```
2. Open **about\:debugging#/runtime/this-firefox** in Firefox.
3. Click **Load Temporary Add-on…** → select `manifest.json` inside `firefox/`.
4. Open YouTube → 🎉 Enjoy the new tabs!

---

## 🔎 How It Works

* Injects a **lightweight content script** that dynamically adds a right sidebar.
* Uses **MutationObserver** to track YouTube’s page changes (no reloads).
* Keeps YouTube’s native **look & feel** while extending functionality.

---

## 🤝 Contributing

Contributions are welcome!

* Open an **issue** for bugs or feature requests.
* Submit a **pull request** with improvements.

---

## 📜 License

This project is licensed under the **MIT License**.
See [LICENSE](LICENSE) for details.

```

---

👉 This way, the **Quick Install** section looks professional:  
- Direct `git clone` copy-paste block.  
- ZIP fallback link for non-developers.  
- Separate sections for Chromium vs Firefox.  
- ✅ & 🎉 emojis to show success visually.  

Want me to also add **browser badges** (Chrome Web Store, Firefox Add-ons) placeholders at the top — so when you publish, they’ll auto-link?
```
