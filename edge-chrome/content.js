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
    panel.style.width = "400px";
    panel.style.padding = "0";
    panel.style.backgroundColor = "#181818"; // always dark
    panel.style.color = "#fff";              // always white
    panel.style.boxShadow = "-1px 0 5px rgba(0,0,0,0.1)";
    panel.style.overflowY = "auto";
    panel.style.transition = "background 0.3s, color 0.3s";

    // Default tabs
    const tabs = ["Comments", "Description", "Related"];
    const contents = {};

    // Check if playlist exists
   const playlistSection = document.querySelector("ytd-playlist-panel-renderer");


    if (playlistSection) tabs.push("Playlist");

    // Tab bar (always black)
    const tabBar = document.createElement("div");
    tabBar.style.display = "flex";
    tabBar.style.backgroundColor = "#000";
    tabBar.style.alignItems = "center";
    tabBar.style.borderBottom = "1px solid #444";

    tabs.forEach((tabName, i) => {
        const tab = document.createElement("button");
        tab.textContent = tabName;
        tab.classList.add("tab-btn");
        tab.style.flex = "1";
        tab.style.padding = "10px";
        tab.style.border = "none";
        tab.style.cursor = "pointer";
        tab.style.background = "#000";   // always black
        tab.style.color = "#fff";        // always white
        tab.style.transition = "all 0.2s";
        if (i === 0) tab.style.borderBottom = "2px solid red";

        tab.addEventListener("click", () => {
            tabBar.querySelectorAll(".tab-btn").forEach(b => b.style.borderBottom = "none");
            tab.style.borderBottom = "2px solid red";

            Object.values(contents).forEach(c => c.style.display = "none");
            contents[tabName].style.display = "block";

            // Auto-expand "More" button in Description
            if (tabName === "Description") {
                const tryExpand = () => {
                    const expandBtn = contents["Description"].querySelector("#expand");
                    if (expandBtn) {
                        expandBtn.click();
                    } else {
                        setTimeout(tryExpand, 200); // Retry if not yet loaded
                    }
                };
                tryExpand();
            }
        });

        tabBar.appendChild(tab);

        // Content div
        const contentDiv = document.createElement("div");
        contentDiv.style.display = i === 0 ? "block" : "none";
        contentDiv.style.padding = "10px";
        contentDiv.style.backgroundColor = "#181818"; // always dark
        contentDiv.style.color = "#fff";              // always white
        contents[tabName] = contentDiv;
        panel.appendChild(contentDiv);
    });

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

    // Auto-click first tab
    tabBar.querySelectorAll(".tab-btn")[0].click();
}

waitForElement("#secondary", setupRightPanel);
