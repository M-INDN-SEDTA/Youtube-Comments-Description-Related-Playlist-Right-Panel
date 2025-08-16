### Youtube Comments, Description, Related, Playlist Right/Side Panel   

> ✨ Transform YouTube with a **tabbed right-hand panel** — Comments, Description, Related Videos, Playlist, and more — all in one smooth sidebar.  

<!-- <p align="center">
  <img src="assets/demo.gif" alt="YT SideTabs Demo" width="700px">
</p>   -->

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

---

## ⚡ Quick Install

1. **Download this repo** (ZIP or clone).
2. Open your browser’s Extensions page:

   * **Chrome / Edge** → `chrome://extensions/` → enable *Developer mode*.
   * **Firefox** → `about:debugging#/runtime/this-firefox`.
3. Click **Load unpacked** → select the folder (`edge-chrome/` or `firefox/`).
4. Open YouTube → Enjoy the new right-hand panel 🎉

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

