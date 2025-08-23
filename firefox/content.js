// Utility: Wait for element to appear
function waitForElement(selector, callback) {
    const observer = new MutationObserver(() => {
        const el = document.querySelector(selector);
        if (el) {
            observer.disconnect();
            callback(el);
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

function setupRightPanel() {
    const secondary = document.querySelector("#secondary");
    if (!secondary || document.querySelector("#ytx-right-panel")) return;

    const panel = document.createElement("div");
    panel.id = "ytx-right-panel";

    // Default tabs
    const tabs = ["Comments", "Description", "Related"];
    const contents = {};

    // Check if playlist exists
    const playlistSection = document.querySelector("ytd-playlist-panel-renderer");
    if (playlistSection) tabs.push("Playlist");

    // Tab bar (sticky)
    const tabBar = document.createElement("div");
    tabBar.className = "ytx-tab-bar";

    // Theme toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "🌞"; // dark by default, click = light
    toggleBtn.className = "theme-toggle";
    let isDark = true;
    toggleBtn.addEventListener("click", () => {
        isDark = !isDark;
        if (isDark) {
            panel.classList.remove("light");
            panel.classList.add("dark");
            toggleBtn.textContent = "🌞";
        } else {
            panel.classList.remove("dark");
            panel.classList.add("light");
            toggleBtn.textContent = "🌙";
        }
    });

    tabs.forEach((tabName, i) => {
        const tab = document.createElement("button");
        tab.textContent = tabName;
        tab.className = "tab-btn";
        if (i === 0) tab.classList.add("active");

        tab.addEventListener("click", () => {
            tabBar.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            tab.classList.add("active");

            Object.values(contents).forEach(c => c.classList.remove("active"));
            contents[tabName].classList.add("active");

            if (tabName === "Description") {
                const tryExpand = () => {
                    const expandBtn = contents["Description"].querySelector("#expand");
                    if (expandBtn) expandBtn.click();
                    else setTimeout(tryExpand, 200);
                };
                tryExpand();
            }
        });

        tabBar.appendChild(tab);

        // Content container
        const contentDiv = document.createElement("div");
        contentDiv.className = "ytx-tab-content";
        if (i === 0) contentDiv.classList.add("active");
        contents[tabName] = contentDiv;
        panel.appendChild(contentDiv);
    });

    // Add toggle button at the end of tab bar
    tabBar.appendChild(toggleBtn);

    panel.prepend(tabBar);
    secondary.prepend(panel);

    // Move YouTube sections into tabs
    const comments = document.querySelector("#comments");
    if (comments) contents["Comments"].appendChild(comments);

    const description = document.querySelector("ytd-watch-metadata");
    if (description) contents["Description"].appendChild(description);

    const related = document.querySelector("ytd-watch-next-secondary-results-renderer");
    if (related) contents["Related"].appendChild(related);

    if (playlistSection) contents["Playlist"].appendChild(playlistSection);
}

waitForElement("#secondary", setupRightPanel);
