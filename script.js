/* =========================================================
   SENN HUB
   SENN TOOLS V1
   MAIN JAVASCRIPT
========================================================= */

"use strict";


/* =========================================================
   1. TOOL REGISTRY
========================================================= */

const tools = {
  "photo-enhancer": {
    id: "photo-enhancer",
    name: "Photo Enhancer",
    category: "image",
    description: "Improve image clarity, sharpness and overall appearance.",
    icon: "fa-solid fa-wand-magic-sparkles",
    keywords: [
      "photo",
      "image",
      "enhance",
      "enhancer",
      "quality",
      "sharp",
      "denoise"
    ]
  },

  "image-upscaler": {
    id: "image-upscaler",
    name: "Image Upscaler",
    category: "image",
    description: "Increase image resolution with multiple output sizes.",
    icon: "fa-solid fa-up-right-and-down-left-from-center",
    keywords: [
      "image",
      "upscale",
      "resolution",
      "2x",
      "4x",
      "720p",
      "1080p",
      "2k",
      "4k"
    ]
  },

  "image-compressor": {
    id: "image-compressor",
    name: "Image Compressor",
    category: "image",
    description: "Reduce image file size while controlling output quality.",
    icon: "fa-solid fa-compress",
    keywords: [
      "image",
      "compress",
      "compression",
      "size",
      "reduce"
    ]
  },

  "image-resizer": {
    id: "image-resizer",
    name: "Image Resizer",
    category: "image",
    description: "Resize images using custom width and height.",
    icon: "fa-solid fa-maximize",
    keywords: [
      "image",
      "resize",
      "width",
      "height",
      "dimension"
    ]
  },

  "image-converter": {
    id: "image-converter",
    name: "Image Converter",
    category: "image",
    description: "Convert images between JPG, PNG and WEBP.",
    icon: "fa-solid fa-repeat",
    keywords: [
      "image",
      "convert",
      "jpg",
      "jpeg",
      "png",
      "webp"
    ]
  },

  "background-remover": {
    id: "background-remover",
    name: "Background Remover",
    category: "image",
    description: "Remove backgrounds from images.",
    icon: "fa-solid fa-eraser",
    keywords: [
      "background",
      "remove",
      "image",
      "transparent",
      "cutout"
    ],
    backendRequired: true
  },

  "video-upscaler": {
    id: "video-upscaler",
    name: "Video Upscaler",
    category: "video",
    description: "Prepare videos for higher output resolutions.",
    icon: "fa-solid fa-expand",
    keywords: [
      "video",
      "upscale",
      "720p",
      "1080p",
      "2k",
      "4k",
      "resolution"
    ],
    backendRequired: true
  },

  "video-compressor": {
    id: "video-compressor",
    name: "Video Compressor",
    category: "video",
    description: "Reduce video file size.",
    icon: "fa-solid fa-file-video",
    keywords: [
      "video",
      "compress",
      "size",
      "reduce"
    ],
    backendRequired: true
  },

  "video-trimmer": {
    id: "video-trimmer",
    name: "Video Trimmer",
    category: "video",
    description: "Trim video start and end points.",
    icon: "fa-solid fa-scissors",
    keywords: [
      "video",
      "trim",
      "cut",
      "duration"
    ],
    backendRequired: true
  },

  "video-to-audio": {
    id: "video-to-audio",
    name: "Video to Audio",
    category: "video",
    description: "Extract audio tracks from video files.",
    icon: "fa-solid fa-music",
    keywords: [
      "video",
      "audio",
      "extract",
      "mp3",
      "wav"
    ],
    backendRequired: true
  },

  "video-thumbnail": {
    id: "video-thumbnail",
    name: "Video Thumbnail",
    category: "video",
    description: "Capture a frame from a video as an image.",
    icon: "fa-regular fa-image",
    keywords: [
      "video",
      "thumbnail",
      "frame",
      "capture",
      "image"
    ]
  },

  "image-to-pdf": {
    id: "image-to-pdf",
    name: "Image to PDF",
    category: "document",
    description: "Convert images into a PDF document.",
    icon: "fa-solid fa-file-pdf",
    keywords: [
      "image",
      "pdf",
      "document",
      "convert"
    ]
  },

  "merge-pdf": {
    id: "merge-pdf",
    name: "Merge PDF",
    category: "document",
    description: "Combine multiple PDF files into one document.",
    icon: "fa-solid fa-object-group",
    keywords: [
      "pdf",
      "merge",
      "combine",
      "document"
    ]
  },

  "split-pdf": {
    id: "split-pdf",
    name: "Split PDF",
    category: "document",
    description: "Separate PDF pages into individual documents.",
    icon: "fa-solid fa-object-ungroup",
    keywords: [
      "pdf",
      "split",
      "page",
      "document"
    ]
  },

  "compress-pdf": {
    id: "compress-pdf",
    name: "Compress PDF",
    category: "document",
    description: "Reduce the size of PDF documents.",
    icon: "fa-solid fa-down-left-and-up-right-to-center",
    keywords: [
      "pdf",
      "compress",
      "size",
      "document"
    ]
  },

  "pdf-to-image": {
    id: "pdf-to-image",
    name: "PDF to Image",
    category: "document",
    description: "Convert PDF pages into images.",
    icon: "fa-solid fa-file-image",
    keywords: [
      "pdf",
      "image",
      "jpg",
      "png",
      "convert"
    ]
  },

  "media-converter": {
    id: "media-converter",
    name: "Media Converter",
    category: "converter",
    description: "Convert supported media formats.",
    icon: "fa-solid fa-arrow-right-arrow-left",
    keywords: [
      "media",
      "converter",
      "convert",
      "video",
      "audio"
    ],
    backendRequired: true
  },

  "json-csv": {
    id: "json-csv",
    name: "JSON ⇄ CSV",
    category: "converter",
    description: "Convert structured data between JSON and CSV.",
    icon: "fa-solid fa-table",
    keywords: [
      "json",
      "csv",
      "convert",
      "data"
    ]
  },

  "audio-converter": {
    id: "audio-converter",
    name: "Audio Converter",
    category: "converter",
    description: "Convert audio between common formats.",
    icon: "fa-solid fa-headphones",
    keywords: [
      "audio",
      "mp3",
      "wav",
      "m4a",
      "convert"
    ],
    backendRequired: true
  },

  "qr-generator": {
    id: "qr-generator",
    name: "QR Generator",
    category: "utility",
    description: "Generate QR codes from text or URLs.",
    icon: "fa-solid fa-qrcode",
    keywords: [
      "qr",
      "qrcode",
      "generator",
      "url",
      "text"
    ]
  },

  "json-formatter": {
    id: "json-formatter",
    name: "JSON Formatter",
    category: "utility",
    description: "Format, minify and validate JSON.",
    icon: "fa-solid fa-code",
    keywords: [
      "json",
      "formatter",
      "format",
      "validate",
      "minify"
    ]
  },

  "base64": {
    id: "base64",
    name: "Base64",
    category: "utility",
    description: "Encode and decode Base64 text.",
    icon: "fa-solid fa-terminal",
    keywords: [
      "base64",
      "encode",
      "decode",
      "text"
    ]
  },

  "metadata-viewer": {
    id: "metadata-viewer",
    name: "Metadata Viewer",
    category: "utility",
    description: "Inspect basic information about local files.",
    icon: "fa-solid fa-circle-info",
    keywords: [
      "metadata",
      "file",
      "information",
      "inspect",
      "exif"
    ]
  },

  "password-generator": {
    id: "password-generator",
    name: "Password Generator",
    category: "utility",
    description: "Generate random passwords locally.",
    icon: "fa-solid fa-key",
    keywords: [
      "password",
      "random",
      "generator",
      "security"
    ]
  },

  "word-counter": {
    id: "word-counter",
    name: "Word Counter",
    category: "utility",
    description: "Count words, characters, lines and sentences.",
    icon: "fa-solid fa-font",
    keywords: [
      "word",
      "counter",
      "character",
      "text",
      "letters"
    ]
  },

  "color-converter": {
    id: "color-converter",
    name: "Color Converter",
    category: "utility",
    description: "Convert colors between HEX, RGB and HSL.",
    icon: "fa-solid fa-palette",
    keywords: [
      "color",
      "colour",
      "hex",
      "rgb",
      "hsl",
      "convert"
    ]
  },

  "timestamp-converter": {
    id: "timestamp-converter",
    name: "Timestamp Converter",
    category: "utility",
    description: "Convert Unix timestamps and readable dates.",
    icon: "fa-regular fa-clock",
    keywords: [
      "timestamp",
      "unix",
      "date",
      "time",
      "converter"
    ]
  },

  "uuid-generator": {
    id: "uuid-generator",
    name: "UUID Generator",
    category: "utility",
    description: "Generate random UUID v4 identifiers.",
    icon: "fa-solid fa-fingerprint",
    keywords: [
      "uuid",
      "id",
      "identifier",
      "random",
      "generator"
    ]
  },

  "hash-generator": {
    id: "hash-generator",
    name: "Hash Generator",
    category: "utility",
    description: "Generate SHA hashes from text locally.",
    icon: "fa-solid fa-hashtag",
    keywords: [
      "hash",
      "sha",
      "sha256",
      "sha384",
      "sha512",
      "checksum"
    ]
  },

  "url-parser": {
    id: "url-parser",
    name: "URL Parser",
    category: "utility",
    description: "Inspect URL components and query parameters.",
    icon: "fa-solid fa-link",
    keywords: [
      "url",
      "link",
      "domain",
      "query",
      "parameter",
      "parser"
    ]
  }
};


/* =========================================================
   2. APPLICATION STATE
========================================================= */

const STORAGE_KEYS = {
  favorites: "senn-tools-favorites",
  history: "senn-tools-history",
  theme: "senn-tools-theme"
};

const state = {
  currentPage: "home",
  previousPage: "home",
  currentTool: null,
  currentCategory: "all",
  selectedFile: null,
  selectedFileURL: null,
  favorites: [],
  history: [],
  processingCancelled: false
};


/* =========================================================
   3. DOM REFERENCES
========================================================= */

const sidebar = document.querySelector(".sidebar");
const sidebarOverlay = document.querySelector(".sidebar-overlay");

const menuButton =
  document.querySelector(".menu-button");

const sidebarClose =
  document.querySelector(".sidebar-close");

const navItems =
  document.querySelectorAll(".nav-item");

const pages =
  document.querySelectorAll(".page");

const toolCards =
  document.querySelectorAll(".tool-card");

const categoryCards =
  document.querySelectorAll(".category-card");

const filterButtons =
  document.querySelectorAll(".filter-button");

const favoriteButtons =
  document.querySelectorAll(".favorite-button");

const themeButton =
  document.querySelector(
    "#themeButton, [data-theme-toggle]"
  );

const toolSearch =
  document.getElementById("toolSearch");

const allToolsSearch =
  document.getElementById("allToolsSearch");

const allToolsGrid =
  document.getElementById("allToolsGrid");

const noResults =
  document.getElementById("noResults");

const favoritesGrid =
  document.getElementById("favoritesGrid");

const favoritesEmpty =
  document.getElementById("favoritesEmpty");

const historyList =
  document.getElementById("historyList");

const clearHistoryButton =
  document.getElementById("clearHistoryButton");

const toolWorkspace =
  document.getElementById("toolWorkspace");

const workspaceIcon =
  document.getElementById("workspaceIcon");

const workspaceCategory =
  document.getElementById("workspaceCategory");

const workspaceTitle =
  document.getElementById("workspaceTitle");

const workspaceDescription =
  document.getElementById("workspaceDescription");

const workspaceContent =
  document.getElementById("workspaceContent");

const backFromTool =
  document.getElementById("backFromTool");

const toastContainer =
  document.getElementById("toastContainer");


/* =========================================================
   4. SAFE STORAGE
========================================================= */

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);

    if (!value) {
      return fallback;
    }

    return JSON.parse(value);
  } catch (error) {
    console.warn(
      `[SENN TOOLS] Failed reading ${key}:`,
      error
    );

    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  } catch (error) {
    console.warn(
      `[SENN TOOLS] Failed saving ${key}:`,
      error
    );
  }
}


/* =========================================================
   5. INITIAL DATA
========================================================= */

function loadSavedData() {
  const savedFavorites =
    readStorage(
      STORAGE_KEYS.favorites,
      []
    );

  const savedHistory =
    readStorage(
      STORAGE_KEYS.history,
      []
    );

  state.favorites =
    Array.isArray(savedFavorites)
      ? savedFavorites.filter(
          (id) => Boolean(tools[id])
        )
      : [];

  state.history =
    Array.isArray(savedHistory)
      ? savedHistory.filter(
          (item) =>
            item &&
            typeof item === "object" &&
            tools[item.toolId]
        )
      : [];
}


/* =========================================================
   6. TOAST SYSTEM
========================================================= */

function showToast(
  title,
  message = "",
  type = "default",
  duration = 2800
) {
  if (!toastContainer) {
    return;
  }

  const toast =
    document.createElement("div");

  toast.className =
    `toast ${type}`;

  let icon =
    "fa-solid fa-circle-info";

  if (type === "success") {
    icon = "fa-solid fa-circle-check";
  }

  if (type === "error") {
    icon =
      "fa-solid fa-circle-exclamation";
  }

  if (type === "warning") {
    icon =
      "fa-solid fa-triangle-exclamation";
  }

  toast.innerHTML = `
    <i class="${icon}"></i>

    <div class="toast-content">
      <strong>${escapeHTML(title)}</strong>

      ${
        message
          ? `<p>${escapeHTML(message)}</p>`
          : ""
      }
    </div>
  `;

  toastContainer.appendChild(toast);

  window.setTimeout(() => {
    toast.classList.add("removing");

    window.setTimeout(() => {
      toast.remove();
    }, 220);
  }, duration);
}


/* =========================================================
   7. BASIC HELPERS
========================================================= */

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatBytes(bytes) {
  if (
    typeof bytes !== "number" ||
    Number.isNaN(bytes)
  ) {
    return "Unknown";
  }

  if (bytes === 0) {
    return "0 B";
  }

  const units = [
    "B",
    "KB",
    "MB",
    "GB",
    "TB"
  ];

  const index =
    Math.min(
      Math.floor(
        Math.log(bytes) /
        Math.log(1024)
      ),
      units.length - 1
    );

  const value =
    bytes /
    Math.pow(1024, index);

  return `${
    value >= 100
      ? value.toFixed(0)
      : value >= 10
        ? value.toFixed(1)
        : value.toFixed(2)
  } ${units[index]}`;
}

function formatDate(timestamp) {
  const date =
    new Date(timestamp);

  if (
    Number.isNaN(date.getTime())
  ) {
    return "";
  }

  return date.toLocaleString(
    undefined,
    {
      dateStyle: "medium",
      timeStyle: "short"
    }
  );
}

function capitalize(value) {
  if (!value) {
    return "";
  }

  return (
    value.charAt(0).toUpperCase() +
    value.slice(1)
  );
}


/* =========================================================
   8. PAGE NAVIGATION
========================================================= */

function getPageElement(pageName) {
  return document.querySelector(
    `[data-page-section="${pageName}"]`
  );
}

function navigateTo(
  pageName,
  options = {}
) {
  const targetPage =
    getPageElement(pageName);

  if (!targetPage) {
    console.warn(
      `[SENN TOOLS] Page "${pageName}" not found.`
    );

    return;
  }

  if (
    state.currentPage !== "tool"
  ) {
    state.previousPage =
      state.currentPage;
  }

  pages.forEach((page) => {
    page.classList.remove(
      "active-page"
    );
  });

  targetPage.classList.add(
    "active-page"
  );

  state.currentPage =
    pageName;

  updateNavigationState(
    options.navPage || pageName
  );

  closeSidebar();

  window.scrollTo({
    top: 0,
    behavior:
      options.instant
        ? "auto"
        : "smooth"
  });
}

function updateNavigationState(pageName) {
  navItems.forEach((item) => {
    const itemPage =
      item.dataset.page;

    item.classList.toggle(
      "active",
      itemPage === pageName
    );
  });
}


/* =========================================================
   9. SIDEBAR
========================================================= */

function openSidebar() {
  if (!sidebar) {
    return;
  }

  sidebar.classList.add("open");

  if (sidebarOverlay) {
    sidebarOverlay.classList.add(
      "active"
    );
  }

  document.body.style.overflow =
    "hidden";
}

function closeSidebar() {
  if (sidebar) {
    sidebar.classList.remove("open");
  }

  if (sidebarOverlay) {
    sidebarOverlay.classList.remove(
      "active"
    );
  }

  document.body.style.overflow = "";
}

if (menuButton) {
  menuButton.addEventListener(
    "click",
    openSidebar
  );
}

if (sidebarClose) {
  sidebarClose.addEventListener(
    "click",
    closeSidebar
  );
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener(
    "click",
    closeSidebar
  );
}


/* =========================================================
   10. NAVIGATION EVENTS
========================================================= */

navItems.forEach((item) => {
  item.addEventListener(
    "click",
    () => {
      const page =
        item.dataset.page;

      const category =
        item.dataset.category;

      if (category) {
        navigateTo(
          "all-tools",
          {
            navPage: "all-tools"
          }
        );

        applyCategoryFilter(
          category
        );

        return;
      }

      if (page) {
        navigateTo(page);
      }
    }
  );
});


/* =========================================================
   11. CATEGORY CARDS
========================================================= */

categoryCards.forEach((card) => {
  card.addEventListener(
    "click",
    () => {
      const category =
        card.dataset.category;

      if (!category) {
        return;
      }

      navigateTo(
        "all-tools",
        {
          navPage: "all-tools"
        }
      );

      applyCategoryFilter(
        category
      );
    }
  );
});


/* =========================================================
   12. CATEGORY FILTERING
========================================================= */

function applyCategoryFilter(
  category = "all"
) {
  state.currentCategory =
    category;

  filterButtons.forEach(
    (button) => {
      button.classList.toggle(
        "active",
        button.dataset.filter ===
          category
      );
    }
  );

  filterToolCards();
}

filterButtons.forEach((button) => {
  button.addEventListener(
    "click",
    () => {
      applyCategoryFilter(
        button.dataset.filter ||
        "all"
      );
    }
  );
});


/* =========================================================
   13. TOOL SEARCH
========================================================= */

function getToolSearchText(card) {
  const id =
    card.dataset.tool;

  const tool =
    tools[id];

  if (!tool) {
    return (
      card.textContent || ""
    ).toLowerCase();
  }

  return [
    tool.name,
    tool.category,
    tool.description,
     ...tool.keywords,
    card.dataset.search || ""
  ]
    .join(" ")
    .toLowerCase();
}

function filterToolCards() {
  if (!allToolsGrid) {
    return;
  }

  const query =
    (
      allToolsSearch?.value ||
      ""
    )
      .trim()
      .toLowerCase();

  let visibleCount = 0;

  const cards =
    allToolsGrid.querySelectorAll(
      ".tool-card"
    );

  cards.forEach((card) => {
    const category =
      card.dataset.category;

    const matchesCategory =
      state.currentCategory ===
        "all" ||
      category ===
        state.currentCategory;

    const matchesSearch =
      !query ||
      getToolSearchText(card)
        .includes(query);

    const visible =
      matchesCategory &&
      matchesSearch;

    card.classList.toggle(
      "hidden",
      !visible
    );

    if (visible) {
      visibleCount += 1;
    }
  });

  if (noResults) {
    noResults.classList.toggle(
      "hidden",
      visibleCount > 0
    );
  }
}

if (allToolsSearch) {
  allToolsSearch.addEventListener(
    "input",
    filterToolCards
  );
}


/* =========================================================
   14. HOME SEARCH
========================================================= */

if (toolSearch) {
  toolSearch.addEventListener(
    "input",
    () => {
      const query =
        toolSearch.value
          .trim()
          .toLowerCase();

      if (!query) {
        return;
      }

      const match =
        Object.values(tools)
          .find((tool) => {
            const haystack = [
              tool.name,
              tool.category,
              tool.description,
              ...tool.keywords
            ]
              .join(" ")
              .toLowerCase();

            return haystack.includes(
              query
            );
          });

      if (
        match &&
        query.length >= 3
      ) {
        /*
          Global search suggestions
          will be handled later.
        */
      }
    }
  );

  toolSearch.addEventListener(
    "keydown",
    (event) => {
      if (event.key !== "Enter") {
        return;
      }

      const query =
        toolSearch.value.trim();

      if (!query) {
        return;
      }

      navigateTo(
        "all-tools",
        {
          navPage: "all-tools"
        }
      );

      if (allToolsSearch) {
        allToolsSearch.value =
          query;
      }

      applyCategoryFilter("all");

      filterToolCards();
    }
  );
}


/* =========================================================
   15. FAVORITES
========================================================= */

function isFavorite(toolId) {
  return state.favorites.includes(
    toolId
  );
}

function toggleFavorite(toolId) {
  if (!tools[toolId]) {
    return;
  }

  if (isFavorite(toolId)) {
    state.favorites =
      state.favorites.filter(
        (id) => id !== toolId
      );

    showToast(
      "Removed from favorites",
      tools[toolId].name
    );
  } else {
    state.favorites.push(toolId);

    showToast(
      "Added to favorites",
      tools[toolId].name,
      "success"
    );
  }

  writeStorage(
    STORAGE_KEYS.favorites,
    state.favorites
  );

  updateFavoriteButtons();

  renderFavorites();
}

function updateFavoriteButtons() {
  document
    .querySelectorAll(
      ".favorite-button"
    )
    .forEach((button) => {
      const toolId =
        button.dataset.favorite;

      const active =
        isFavorite(toolId);

      button.classList.toggle(
        "active",
        active
      );

      const icon =
        button.querySelector("i");

      if (icon) {
        icon.classList.toggle(
          "fa-regular",
          !active
        );

        icon.classList.toggle(
          "fa-solid",
          active
        );
      }

      button.setAttribute(
        "aria-label",
        active
          ? `Remove ${
              tools[toolId]?.name ||
              "tool"
            } from favorites`
          : `Add ${
              tools[toolId]?.name ||
              "tool"
            } to favorites`
      );
    });
}

document.addEventListener(
  "click",
  (event) => {
    const favoriteButton =
      event.target.closest(
        ".favorite-button"
      );

    if (!favoriteButton) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const toolId =
      favoriteButton.dataset.favorite;

    toggleFavorite(toolId);
  }
);


/* =========================================================
   16. FAVORITES PAGE
========================================================= */

function createToolCardHTML(tool) {
  const favorite =
    isFavorite(tool.id);

  return `
    <article
      class="mini-tool-card tool-card"
      data-tool="${escapeHTML(
        tool.id
      )}"
      data-category="${escapeHTML(
        tool.category
      )}"
    >

      <div
        class="mini-tool-icon ${escapeHTML(
          tool.category
        )}-tool"
      >
        <i class="${escapeHTML(
          tool.icon
        )}"></i>
      </div>

      <div>
        <h3>
          ${escapeHTML(tool.name)}
        </h3>

        <p>
          ${escapeHTML(
            tool.description
          )}
        </p>
      </div>

      <button
        class="favorite-button ${
          favorite ? "active" : ""
        }"
        data-favorite="${escapeHTML(
          tool.id
        )}"
        type="button"
        aria-label="${
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }"
      >
        <i
          class="${
            favorite
              ? "fa-solid"
              : "fa-regular"
          } fa-star"
        ></i>
      </button>

    </article>
  `;
}

function renderFavorites() {
  if (
    !favoritesGrid ||
    !favoritesEmpty
  ) {
    return;
  }

  if (
    state.favorites.length === 0
  ) {
    favoritesGrid.innerHTML = "";

    favoritesEmpty.classList.remove(
      "hidden"
    );

    return;
  }

  favoritesEmpty.classList.add(
    "hidden"
  );

  favoritesGrid.innerHTML =
    state.favorites
      .map((id) => tools[id])
      .filter(Boolean)
      .map(createToolCardHTML)
      .join("");
}


/* =========================================================
   17. RECENT HISTORY
========================================================= */

function addHistory(
  toolId,
  extra = {}
) {
  const tool =
    tools[toolId];

  if (!tool) {
    return;
  }

  const historyItem = {
    id:
      crypto.randomUUID?.() ||
      `${Date.now()}-${Math.random()}`,

    toolId,

    timestamp:
      Date.now(),

    fileName:
      extra.fileName || null
  };

  state.history =
    [
      historyItem,
      ...state.history
    ].slice(0, 30);

  writeStorage(
    STORAGE_KEYS.history,
    state.history
  );

  renderHistory();
}

function renderHistory() {
  if (!historyList) {
    return;
  }

  if (
    state.history.length === 0
  ) {
    historyList.innerHTML = `
      <div class="empty-state large-empty">

        <div class="empty-icon">
          <i
            class="fa-solid fa-clock-rotate-left"
          ></i>
        </div>

        <h3>
          Your history is empty
        </h3>

        <p>
          Process something and it'll
          show up here.
        </p>

      </div>
    `;

    return;
  }

  historyList.innerHTML =
    state.history
      .map((item) => {
        const tool =
          tools[item.toolId];

        if (!tool) {
          return "";
        }

        return `
          <article
            class="history-item"
            data-tool="${escapeHTML(
              tool.id
            )}"
          >

            <div
              class="mini-tool-icon ${escapeHTML(
                tool.category
              )}-tool"
            >
              <i class="${escapeHTML(
                tool.icon
              )}"></i>
            </div>

            <div class="history-information">

              <strong>
                ${escapeHTML(
                  tool.name
                )}
              </strong>

              ${
                item.fileName
                  ? `
                    <span>
                      ${escapeHTML(
                        item.fileName
                      )}
                    </span>
                  `
                  : ""
              }

              <small>
                ${escapeHTML(
                  formatDate(
                    item.timestamp
                  )
                )}
              </small>

            </div>

            <button
              class="text-button history-open"
              type="button"
              data-tool="${escapeHTML(
                tool.id
              )}"
            >
              Open

              <i
                class="fa-solid fa-arrow-right"
              ></i>
            </button>

          </article>
        `;
      })
      .join("");
}


/* =========================================================
   18. CLEAR HISTORY
========================================================= */

function clearHistory() {
  state.history = [];

  writeStorage(
    STORAGE_KEYS.history,
    state.history
  );

  renderHistory();

  showToast(
    "History cleared",
    "Recent activity has been removed.",
    "success"
  );
}

if (clearHistoryButton) {
  clearHistoryButton.addEventListener(
    "click",
    clearHistory
  );
}


/* =========================================================
   19. THEME
========================================================= */

function applyTheme(theme) {
  const useLight =
    theme === "light";

  document.body.classList.toggle(
    "light-theme",
    useLight
  );

  const icon =
    themeButton?.querySelector("i");

  if (icon) {
    icon.className =
      useLight
        ? "fa-solid fa-moon"
        : "fa-regular fa-sun";
  }
}

function getSavedTheme() {
  try {
    return (
      localStorage.getItem(
        STORAGE_KEYS.theme
      ) || "dark"
    );
  } catch {
    return "dark";
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(
      STORAGE_KEYS.theme,
      theme
    );
  } catch {
    // Storage unavailable.
  }
}

if (themeButton) {
  themeButton.addEventListener(
    "click",
    () => {
      const isLight =
        document.body.classList
          .contains(
            "light-theme"
          );

      const nextTheme =
        isLight
          ? "dark"
          : "light";

      applyTheme(nextTheme);

      saveTheme(nextTheme);
    }
  );
}


/* =========================================================
   20. OPEN TOOL
========================================================= */

function openTool(toolId) {
  const tool =
    tools[toolId];

  if (!tool) {
    showToast(
      "Tool not found",
      "This tool isn't registered.",
      "error"
    );

    return;
  }

  state.previousPage =
    state.currentPage === "tool"
      ? state.previousPage
      : state.currentPage;

  state.currentTool =
    toolId;

  if (workspaceIcon) {
    workspaceIcon.className =
      `workspace-icon ${tool.category}-tool`;

    workspaceIcon.innerHTML =
      `<i class="${escapeHTML(
        tool.icon
      )}"></i>`;
  }

  if (workspaceCategory) {
    workspaceCategory.textContent =
      tool.category.toUpperCase();
  }

  if (workspaceTitle) {
    workspaceTitle.textContent =
      tool.name;
  }

  if (workspaceDescription) {
    workspaceDescription.textContent =
      tool.description;
  }

  navigateTo(
    "tool",
    {
      navPage: "all-tools"
    }
  );

  renderToolWorkspace(toolId);
}


/* =========================================================
   21. TOOL CARD EVENTS
========================================================= */

document.addEventListener(
  "click",
  (event) => {
    if (
      event.target.closest(
        ".favorite-button"
      )
    ) {
      return;
    }

    const card =
      event.target.closest(
        ".tool-card"
      );

    if (!card) {
      return;
    }

    const toolId =
      card.dataset.tool;

    if (toolId) {
      openTool(toolId);
    }
  }
);

document.addEventListener(
  "click",
  (event) => {
    const historyButton =
      event.target.closest(
        ".history-open"
      );

    if (!historyButton) {
      return;
    }

    openTool(
      historyButton.dataset.tool
    );
  }
);


/* =========================================================
   22. BACK FROM WORKSPACE
========================================================= */

if (backFromTool) {
  backFromTool.addEventListener(
    "click",
    () => {
      const destination =
        state.previousPage &&
        state.previousPage !== "tool"
          ? state.previousPage
          : "all-tools";

      state.currentTool = null;

      navigateTo(
        destination,
        {
          navPage:
            destination === "home"
              ? "home"
              : destination
        }
      );
    }
  );
}


/* =========================================================
   23. BASIC WORKSPACE RENDERER
========================================================= */

function renderToolWorkspace(toolId) {
  if (!workspaceContent) {
    return;
  }

  const tool =
    tools[toolId];

  if (!tool) {
    return;
  }

  if (tool.backendRequired) {
    workspaceContent.innerHTML = `
      <div class="workspace-placeholder">

        <div class="workspace-placeholder-icon">
          <i class="fa-solid fa-server"></i>
        </div>

        <h2>
          ${escapeHTML(tool.name)}
        </h2>

        <p>
          This tool needs heavier processing
          that will be connected to the Senn
          Tools processing backend later.
        </p>

      </div>
    `;

    return;
  }

  workspaceContent.innerHTML = `
    <div class="workspace-placeholder">

      <div class="workspace-placeholder-icon">
        <i class="${escapeHTML(
          tool.icon
        )}"></i>
      </div>

      <h2>
        ${escapeHTML(tool.name)}
      </h2>

      <p>
        The interface for this tool is ready
        to be rendered here.
      </p>

    </div>
  `;
}


/* =========================================================
   24. INITIALIZE PART 1
========================================================= */

function initializeApp() {
  loadSavedData();

  applyTheme(
    getSavedTheme()
  );

  updateFavoriteButtons();

  renderFavorites();

  renderHistory();

  applyCategoryFilter("all");

  navigateTo(
    "home",
    {
      instant: true,
      navPage: "home"
    }
  );

  console.log(
    "%cSENN TOOLS V1",
    "font-weight: 800; font-size: 16px;"
  );

  console.log(
    "Core interface initialized."
  );
}

initializeApp();


/* =========================================================
   PART 1 END

   NEXT:
   - Global Search Modal
   - Smart Drop
   - File Detection
   - Image Metadata
   - Video Metadata
   - Recommended Tools
   - Real Tool Workspaces
========================================================= */

/* =========================================================
   25. GLOBAL SEARCH
========================================================= */

const searchModal =
  document.getElementById("searchModal");

const searchModalBackdrop =
  document.querySelector(
    ".search-modal-backdrop"
  );

const globalSearchInput =
  document.getElementById(
    "globalSearchInput"
  );

const globalSearchResults =
  document.getElementById(
    "globalSearchResults"
  );

const globalSearchButton =
  document.querySelector(
    "#globalSearchButton, [data-global-search]"
  );

const searchClose =
  document.querySelector(
    ".search-close"
  );


function openGlobalSearch() {
  if (!searchModal) {
    return;
  }

  searchModal.classList.add("active");

  document.body.style.overflow =
    "hidden";

  window.setTimeout(() => {
    globalSearchInput?.focus();
  }, 50);

  renderGlobalSearchResults("");
}


function closeGlobalSearch() {
  if (!searchModal) {
    return;
  }

  searchModal.classList.remove("active");

  document.body.style.overflow = "";

  if (globalSearchInput) {
    globalSearchInput.value = "";
  }
}


function searchTools(query) {
  const normalized =
    query
      .trim()
      .toLowerCase();

  if (!normalized) {
    return Object.values(tools);
  }

  return Object.values(tools)
    .filter((tool) => {
      const searchText = [
        tool.name,
        tool.category,
        tool.description,
        ...tool.keywords
      ]
        .join(" ")
        .toLowerCase();

      return searchText.includes(
        normalized
      );
    });
}


function renderGlobalSearchResults(
  query = ""
) {
  if (!globalSearchResults) {
    return;
  }

  const results =
    searchTools(query);

  if (!query.trim()) {
    const popularIds = [
      "photo-enhancer",
      "image-upscaler",
      "image-compressor",
      "video-upscaler",
      "json-formatter",
      "qr-generator"
    ];

    const popularTools =
      popularIds
        .map((id) => tools[id])
        .filter(Boolean);

    globalSearchResults.innerHTML = `
      <div class="search-result-label">
        Popular tools
      </div>

      ${popularTools
        .map(createSearchResultHTML)
        .join("")}
    `;

    return;
  }

  if (results.length === 0) {
    globalSearchResults.innerHTML = `
      <div class="search-hint">
        <i
          class="fa-solid fa-magnifying-glass"
        ></i>

        <span>
          No tools found for
          "${escapeHTML(query)}"
        </span>
      </div>
    `;

    return;
  }

  globalSearchResults.innerHTML = `
    <div class="search-result-label">
      ${results.length}
      ${
        results.length === 1
          ? "result"
          : "results"
      }
    </div>

    ${results
      .map(createSearchResultHTML)
      .join("")}
  `;
}


function createSearchResultHTML(tool) {
  return `
    <button
      class="search-result-item"
      type="button"
      data-search-tool="${escapeHTML(
        tool.id
      )}"
    >

      <div
        class="mini-tool-icon ${escapeHTML(
          tool.category
        )}-tool"
      >
        <i class="${escapeHTML(
          tool.icon
        )}"></i>
      </div>

      <div class="search-result-content">

        <strong>
          ${escapeHTML(tool.name)}
        </strong>

        <span>
          ${escapeHTML(
            tool.description
          )}
        </span>

      </div>

      <small>
        ${escapeHTML(
          capitalize(
            tool.category
          )
        )}
      </small>

      <i
        class="fa-solid fa-arrow-right"
      ></i>

    </button>
  `;
}


if (globalSearchButton) {
  globalSearchButton.addEventListener(
    "click",
    openGlobalSearch
  );
}


if (searchClose) {
  searchClose.addEventListener(
    "click",
    closeGlobalSearch
  );
}


if (searchModalBackdrop) {
  searchModalBackdrop.addEventListener(
    "click",
    closeGlobalSearch
  );
}


if (globalSearchInput) {
  globalSearchInput.addEventListener(
    "input",
    () => {
      renderGlobalSearchResults(
        globalSearchInput.value
      );
    }
  );
}


document.addEventListener(
  "click",
  (event) => {
    const result =
      event.target.closest(
        "[data-search-tool]"
      );

    if (!result) {
      return;
    }

    const toolId =
      result.dataset.searchTool;

    closeGlobalSearch();

    openTool(toolId);
  }
);


/* =========================================================
   26. GLOBAL KEYBOARD SHORTCUTS
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {
    const target =
      event.target;

    const typing =
      target instanceof
        HTMLInputElement ||
      target instanceof
        HTMLTextAreaElement ||
      target?.isContentEditable;

    if (
      event.key === "/" &&
      !typing
    ) {
      event.preventDefault();

      openGlobalSearch();

      return;
    }

    if (event.key === "Escape") {
      if (
        searchModal?.classList.contains(
          "active"
        )
      ) {
        closeGlobalSearch();

        return;
      }

      closeSidebar();
    }
  }
);


/* =========================================================
   27. SMART DROP REFERENCES
========================================================= */

const smartDrop =
  document.querySelector(
    ".smart-drop"
  );

const globalFileInput =
  document.getElementById(
    "globalFileInput"
  );

const browseButton =
  document.getElementById(
    "browseButton"
  );

const fileDetection =
  document.getElementById(
    "fileDetection"
  );

const filePreview =
  document.getElementById(
    "filePreview"
  );

const detectedFileType =
  document.getElementById(
    "detectedFileType"
  );

const detectedFileName =
  document.getElementById(
    "detectedFileName"
  );

const detectedFileSize =
  document.getElementById(
    "detectedFileSize"
  );

const detectedFileFormat =
  document.getElementById(
    "detectedFileFormat"
  );

const detectedFileDimensions =
  document.getElementById(
    "detectedFileDimensions"
  );

const changeFileButton =
  document.getElementById(
    "changeFileButton"
  );

const removeFileButton =
  document.getElementById(
    "removeFileButton"
  );

const recommendedGrid =
  document.getElementById(
    "recommendedGrid"
  );


/* =========================================================
   28. FILE TYPE DETECTION
========================================================= */

function getFileExtension(fileName) {
  if (!fileName) {
    return "";
  }

  const parts =
    fileName
      .toLowerCase()
      .split(".");

  if (parts.length < 2) {
    return "";
  }

  return parts.pop();
}


function detectFileType(file) {
  if (!file) {
    return {
      type: "unknown",
      label: "Unknown File",
      extension: ""
    };
  }

  const mime =
    (
      file.type ||
      ""
    ).toLowerCase();

  const extension =
    getFileExtension(
      file.name
    );

  if (
    mime.startsWith("image/")
  ) {
    return {
      type: "image",
      label: "Image detected",
      extension
    };
  }

  if (
    mime.startsWith("video/")
  ) {
    return {
      type: "video",
      label: "Video detected",
      extension
    };
  }

  if (
    mime.startsWith("audio/")
  ) {
    return {
      type: "audio",
      label: "Audio detected",
      extension
    };
  }

  if (
    mime === "application/pdf" ||
    extension === "pdf"
  ) {
    return {
      type: "pdf",
      label: "PDF detected",
      extension: "pdf"
    };
  }

  const documentExtensions = [
    "doc",
    "docx",
    "odt",
    "rtf"
  ];

  if (
    documentExtensions.includes(
      extension
    )
  ) {
    return {
      type: "document",
      label: "Document detected",
      extension
    };
  }

  const spreadsheetExtensions = [
    "csv",
    "xls",
    "xlsx",
    "ods"
  ];

  if (
    spreadsheetExtensions.includes(
      extension
    )
  ) {
    return {
      type: "spreadsheet",
      label: "Spreadsheet detected",
      extension
    };
  }

  const textExtensions = [
    "txt",
    "md",
    "json",
    "xml",
    "html",
    "css",
    "js"
  ];

  if (
    mime.startsWith("text/") ||
    textExtensions.includes(
      extension
    )
  ) {
    return {
      type: "text",
      label: "Text file detected",
      extension
    };
  }

  return {
    type: "unknown",
    label: "File detected",
    extension
  };
}


/* =========================================================
   29. FILE ICONS
========================================================= */

function getFileIcon(type) {
  const icons = {
    image:
      "fa-regular fa-image",

    video:
      "fa-solid fa-film",

    audio:
      "fa-solid fa-music",

    pdf:
      "fa-solid fa-file-pdf",

    document:
      "fa-solid fa-file-word",

    spreadsheet:
      "fa-solid fa-table",

    text:
      "fa-solid fa-file-lines",

    unknown:
      "fa-solid fa-file"
  };

  return (
    icons[type] ||
    icons.unknown
  );
}


/* =========================================================
   30. SMART DROP FILE SELECTION
========================================================= */

if (browseButton) {
  browseButton.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();

      globalFileInput?.click();
    }
  );
}


if (changeFileButton) {
  changeFileButton.addEventListener(
    "click",
    () => {
      globalFileInput?.click();
    }
  );
}


if (globalFileInput) {
  globalFileInput.addEventListener(
    "change",
    () => {
      const file =
        globalFileInput.files?.[0];

      if (!file) {
        return;
      }

      handleSelectedFile(file);
    }
  );
}


/* =========================================================
   31. DRAG AND DROP
========================================================= */

if (smartDrop) {
  [
    "dragenter",
    "dragover"
  ].forEach((eventName) => {
    smartDrop.addEventListener(
      eventName,
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        smartDrop.classList.add(
          "drag-active"
        );
      }
    );
  });

  [
    "dragleave",
    "drop"
  ].forEach((eventName) => {
    smartDrop.addEventListener(
      eventName,
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        smartDrop.classList.remove(
          "drag-active"
        );
      }
    );
  });

  smartDrop.addEventListener(
    "drop",
    (event) => {
      const files =
        event.dataTransfer?.files;

      if (
        !files ||
        files.length === 0
      ) {
        return;
      }

      handleSelectedFile(
        files[0]
      );
    }
  );
}


/* =========================================================
   32. SELECTED FILE
========================================================= */

async function handleSelectedFile(
  file
) {
  if (!file) {
    return;
  }

  clearSelectedFileURL();

  state.selectedFile =
    file;

  const detection =
    detectFileType(file);

  if (fileDetection) {
    fileDetection.classList.remove(
      "hidden"
    );
  }

  updateBasicFileInformation(
    file,
    detection
  );

  renderRecommendedTools(
    detection.type
  );

  try {
    if (
      detection.type === "image"
    ) {
      await loadImageMetadata(file);
    } else if (
      detection.type === "video"
    ) {
      await loadVideoMetadata(file);
    } else if (
      detection.type === "audio"
    ) {
      await loadAudioMetadata(file);
    } else {
      renderGenericFilePreview(
        detection.type
      );
    }
  } catch (error) {
    console.error(
      "[SENN TOOLS] Metadata error:",
      error
    );

    renderGenericFilePreview(
      detection.type
    );
  }

  showToast(
    "File detected",
    `${file.name} is ready.`,
    "success"
  );
}


/* =========================================================
   33. BASIC FILE INFORMATION
========================================================= */

function updateBasicFileInformation(
  file,
  detection
) {
  if (detectedFileType) {
    detectedFileType.textContent =
      detection.label;
  }

  if (detectedFileName) {
    detectedFileName.textContent =
      file.name;
  }

  if (detectedFileSize) {
    detectedFileSize.textContent =
      formatBytes(file.size);
  }

  if (detectedFileFormat) {
    detectedFileFormat.textContent =
      (
        detection.extension ||
        file.type ||
        "Unknown"
      ).toUpperCase();
  }

  if (detectedFileDimensions) {
    detectedFileDimensions.textContent =
      "Reading metadata...";
  }
}


/* =========================================================
   34. OBJECT URL MANAGEMENT
========================================================= */

function createSelectedFileURL(file) {
  clearSelectedFileURL();

  const url =
    URL.createObjectURL(file);

  state.selectedFileURL =
    url;

  return url;
}


function clearSelectedFileURL() {
  if (!state.selectedFileURL) {
    return;
  }

  URL.revokeObjectURL(
    state.selectedFileURL
  );

  state.selectedFileURL =
    null;
}


/* =========================================================
   35. IMAGE METADATA
========================================================= */

function loadImageMetadata(file) {
  return new Promise(
    (resolve, reject) => {
      const image =
        new Image();

      const url =
        createSelectedFileURL(
          file
        );

      image.onload = () => {
        if (
          detectedFileDimensions
        ) {
          detectedFileDimensions
            .textContent =
            `${image.naturalWidth} × ${image.naturalHeight}`;
        }

        if (filePreview) {
          filePreview.innerHTML = `
            <img
              src="${url}"
              alt="Selected image preview"
            >
          `;
        }

        resolve({
          width:
            image.naturalWidth,

          height:
            image.naturalHeight
        });
      };

      image.onerror = () => {
        reject(
          new Error(
            "Unable to read image."
          )
        );
      };

      image.src = url;
    }
  );
}


/* =========================================================
   36. VIDEO METADATA
========================================================= */

function loadVideoMetadata(file) {
  return new Promise(
    (resolve, reject) => {
      const video =
        document.createElement(
          "video"
        );

      const url =
        createSelectedFileURL(
          file
        );

      video.preload = "metadata";
      video.muted = true;

      video.onloadedmetadata = () => {
        const width =
          video.videoWidth;

        const height =
          video.videoHeight;

        const duration =
          Number.isFinite(
            video.duration
          )
            ? video.duration
            : 0;

        if (
          detectedFileDimensions
        ) {
          detectedFileDimensions
            .textContent =
            `${width} × ${height} • ${formatDuration(
              duration
            )}`;
        }

        renderVideoPreview(
          url
        );

        resolve({
          width,
          height,
          duration
        });
      };

      video.onerror = () => {
        reject(
          new Error(
            "Unable to read video."
          )
        );
      };

      video.src = url;
    }
  );
}


/* =========================================================
   37. AUDIO METADATA
========================================================= */

function loadAudioMetadata(file) {
  return new Promise(
    (resolve, reject) => {
      const audio =
        document.createElement(
          "audio"
        );

      const url =
        createSelectedFileURL(
          file
        );

      audio.preload = "metadata";

      audio.onloadedmetadata = () => {
        const duration =
          Number.isFinite(
            audio.duration
          )
            ? audio.duration
            : 0;

        if (
          detectedFileDimensions
        ) {
          detectedFileDimensions
            .textContent =
            `Audio • ${formatDuration(
              duration
            )}`;
        }

        renderGenericFilePreview(
          "audio"
        );

        resolve({
          duration
        });
      };

      audio.onerror = () => {
        reject(
          new Error(
            "Unable to read audio."
          )
        );
      };

      audio.src = url;
    }
  );
}


/* =========================================================
   38. DURATION FORMATTER
========================================================= */

function formatDuration(seconds) {
  if (
    !Number.isFinite(seconds) ||
    seconds < 0
  ) {
    return "00:00";
  }

  const total =
    Math.floor(seconds);

  const hours =
    Math.floor(
      total / 3600
    );

  const minutes =
    Math.floor(
      (total % 3600) / 60
    );

  const remainingSeconds =
    total % 60;

  if (hours > 0) {
    return [
      hours,
      String(minutes)
        .padStart(2, "0"),
      String(remainingSeconds)
        .padStart(2, "0")
    ].join(":");
  }

  return [
    String(minutes)
      .padStart(2, "0"),

    String(remainingSeconds)
      .padStart(2, "0")
  ].join(":");
}


/* =========================================================
   39. VIDEO PREVIEW
========================================================= */

function renderVideoPreview(url) {
  if (!filePreview) {
    return;
  }

  filePreview.innerHTML = `
    <video
      src="${url}"
      muted
      playsinline
      preload="metadata"
    ></video>

    <div class="file-preview-overlay">
      <i
        class="fa-solid fa-play"
      ></i>
    </div>
  `;
}


/* =========================================================
   40. GENERIC FILE PREVIEW
========================================================= */

function renderGenericFilePreview(
  type
) {
  if (!filePreview) {
    return;
  }

  filePreview.innerHTML = `
    <i
      class="${getFileIcon(
        type
      )}"
    ></i>
  `;

  if (
    detectedFileDimensions &&
    detectedFileDimensions.textContent ===
      "Reading metadata..."
  ) {
    detectedFileDimensions.textContent =
      capitalize(type);
  }
}


/* =========================================================
   41. RECOMMENDED TOOLS
========================================================= */

function getRecommendedToolIds(
  fileType
) {
  const recommendations = {
    image: [
      "photo-enhancer",
      "image-upscaler",
      "image-compressor",
      "image-resizer",
      "image-converter",
      "background-remover",
      "metadata-viewer"
    ],

    video: [
      "video-upscaler",
      "video-compressor",
      "video-trimmer",
      "video-to-audio",
      "video-thumbnail",
      "metadata-viewer"
    ],

    audio: [
      "audio-converter",
      "metadata-viewer"
    ],

    pdf: [
      "merge-pdf",
      "split-pdf",
      "compress-pdf",
      "pdf-to-image",
      "metadata-viewer"
    ],

    document: [
      "metadata-viewer"
    ],

    spreadsheet: [
      "json-csv",
      "metadata-viewer"
    ],

    text: [
      "word-counter",
      "base64",
      "json-formatter",
      "hash-generator",
      "metadata-viewer"
    ],

    unknown: [
      "metadata-viewer",
      "hash-generator"
    ]
  };

  return (
    recommendations[fileType] ||
    recommendations.unknown
  );
}


function renderRecommendedTools(
  fileType
) {
  if (!recommendedGrid) {
    return;
  }

  const ids =
    getRecommendedToolIds(
      fileType
    );

  recommendedGrid.innerHTML =
    ids
      .map((id) => tools[id])
      .filter(Boolean)
      .map((tool) => {
        return `
          <button
            class="recommended-tool"
            type="button"
                        data-recommended-tool="${escapeHTML(
              tool.id
            )}"
          >

            <div
              class="mini-tool-icon ${escapeHTML(
                tool.category
              )}-tool"
            >
              <i
                class="${escapeHTML(
                  tool.icon
                )}"
              ></i>
            </div>

            <div>
              <strong>
                ${escapeHTML(
                  tool.name
                )}
              </strong>

              <span>
                Open tool
              </span>
            </div>

            <i
              class="fa-solid fa-arrow-right"
            ></i>

          </button>
        `;
      })
      .join("");
}


/* =========================================================
   42. OPEN RECOMMENDED TOOL
========================================================= */

document.addEventListener(
  "click",
  (event) => {
    const button =
      event.target.closest(
        "[data-recommended-tool]"
      );

    if (!button) {
      return;
    }

    const toolId =
      button.dataset
        .recommendedTool;

    if (!toolId) {
      return;
    }

    openTool(toolId);
  }
);


/* =========================================================
   43. REMOVE SELECTED FILE
========================================================= */

function removeSelectedFile() {
  clearSelectedFileURL();

  state.selectedFile =
    null;

  if (globalFileInput) {
    globalFileInput.value = "";
  }

  if (fileDetection) {
    fileDetection.classList.add(
      "hidden"
    );
  }

  if (filePreview) {
    filePreview.innerHTML = `
      <i
        class="fa-solid fa-file"
      ></i>
    `;
  }

  if (detectedFileType) {
    detectedFileType.textContent =
      "File detected";
  }

  if (detectedFileName) {
    detectedFileName.textContent =
      "No file selected";
  }

  if (detectedFileSize) {
    detectedFileSize.textContent =
      "—";
  }

  if (detectedFileFormat) {
    detectedFileFormat.textContent =
      "—";
  }

  if (detectedFileDimensions) {
    detectedFileDimensions.textContent =
      "—";
  }

  if (recommendedGrid) {
    recommendedGrid.innerHTML = "";
  }

  showToast(
    "File removed",
    "Smart Drop has been reset."
  );
}


if (removeFileButton) {
  removeFileButton.addEventListener(
    "click",
    removeSelectedFile
  );
}


/* =========================================================
   44. HOME SEARCH → GLOBAL SEARCH
========================================================= */

if (toolSearch) {
  toolSearch.addEventListener(
    "focus",
    () => {
      /*
        Keep the homepage input usable
        normally. Global search is opened
        only through the top search button
        or "/" shortcut.
      */
    }
  );
}


/* =========================================================
   45. SMART DROP CLICK
========================================================= */

if (smartDrop) {
  smartDrop.addEventListener(
    "click",
    (event) => {
      if (
        event.target.closest(
          "button"
        )
      ) {
        return;
      }

      if (
        event.target.closest(
          "#fileDetection"
        )
      ) {
        return;
      }

      globalFileInput?.click();
    }
  );
}


/* =========================================================
   46. SMART DROP ACCESSIBILITY
========================================================= */

if (smartDrop) {
  smartDrop.setAttribute(
    "tabindex",
    "0"
  );

  smartDrop.setAttribute(
    "role",
    "button"
  );

  smartDrop.setAttribute(
    "aria-label",
    "Choose or drop a file"
  );

  smartDrop.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key !== "Enter" &&
        event.key !== " "
      ) {
        return;
      }

      event.preventDefault();

      globalFileInput?.click();
    }
  );
}


/* =========================================================
   47. SELECTED FILE HELPER
========================================================= */

function requireSelectedFile(
  acceptedTypes = []
) {
  const file =
    state.selectedFile;

  if (!file) {
    showToast(
      "No file selected",
      "Choose a file first.",
      "warning"
    );

    return null;
  }

  if (
    acceptedTypes.length === 0
  ) {
    return file;
  }

  const detected =
    detectFileType(file);

  if (
    !acceptedTypes.includes(
      detected.type
    )
  ) {
    showToast(
      "Unsupported file",
      `This tool requires: ${acceptedTypes.join(
        ", "
      )}.`,
      "warning"
    );

    return null;
  }

  return file;
}


/* =========================================================
   48. DOWNLOAD HELPER
========================================================= */

function downloadBlob(
  blob,
  fileName
) {
  if (!(blob instanceof Blob)) {
    showToast(
      "Download failed",
      "No valid output was created.",
      "error"
    );

    return;
  }

  const url =
    URL.createObjectURL(blob);

  const anchor =
    document.createElement("a");

  anchor.href = url;

  anchor.download =
    fileName ||
    "senn-tools-output";

  document.body.appendChild(
    anchor
  );

  anchor.click();

  anchor.remove();

  window.setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);
}


/* =========================================================
   49. FILE NAME HELPER
========================================================= */

function getBaseFileName(
  fileName
) {
  if (!fileName) {
    return "senn-tools";
  }

  const lastDot =
    fileName.lastIndexOf(".");

  if (lastDot <= 0) {
    return fileName;
  }

  return fileName.slice(
    0,
    lastDot
  );
}


/* =========================================================
   50. READ FILE AS DATA URL
========================================================= */

function readFileAsDataURL(file) {
  return new Promise(
    (resolve, reject) => {
      const reader =
        new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = () => {
        reject(
          new Error(
            "Failed to read file."
          )
        );
      };

      reader.readAsDataURL(file);
    }
  );
}


/* =========================================================
   51. READ FILE AS TEXT
========================================================= */

function readFileAsText(file) {
  return new Promise(
    (resolve, reject) => {
      const reader =
        new FileReader();

      reader.onload = () => {
        resolve(
          String(
            reader.result || ""
          )
        );
      };

      reader.onerror = () => {
        reject(
          new Error(
            "Failed to read text file."
          )
        );
      };

      reader.readAsText(file);
    }
  );
}


/* =========================================================
   52. LOAD IMAGE FOR PROCESSING
========================================================= */

function loadImageFromFile(file) {
  return new Promise(
    (resolve, reject) => {
      const image =
        new Image();

      const url =
        URL.createObjectURL(file);

      image.onload = () => {
        URL.revokeObjectURL(url);

        resolve(image);
      };

      image.onerror = () => {
        URL.revokeObjectURL(url);

        reject(
          new Error(
            "Unable to load image."
          )
        );
      };

      image.src = url;
    }
  );
}


/* =========================================================
   53. CANVAS → BLOB
========================================================= */

function canvasToBlob(
  canvas,
  type = "image/png",
  quality = 0.92
) {
  return new Promise(
    (resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(
              new Error(
                "Unable to create output."
              )
            );

            return;
          }

          resolve(blob);
        },
        type,
        quality
      );
    }
  );
}


/* =========================================================
   54. WORKSPACE SHARED UI
========================================================= */

function createWorkspaceUploadHTML(
  title = "Choose a file",
  description =
    "Select a local file to start processing.",
  accept = ""
) {
  return `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div
          class="workspace-placeholder-icon"
        >
          <i
            class="fa-solid fa-cloud-arrow-up"
          ></i>
        </div>

        <h2>
          ${escapeHTML(title)}
        </h2>

        <p>
          ${escapeHTML(
            description
          )}
        </p>

        <input
          class="workspace-file-input"
          type="file"
          ${
            accept
              ? `accept="${escapeHTML(
                  accept
                )}"`
              : ""
          }
          hidden
        >

        <button
          class="primary-button workspace-file-button"
          type="button"
        >
          <i
            class="fa-solid fa-folder-open"
          ></i>

          Choose File
        </button>

        ${
          state.selectedFile
            ? `
              <div class="workspace-current-file">

                <i
                  class="${getFileIcon(
                    detectFileType(
                      state.selectedFile
                    ).type
                  )}"
                ></i>

                <div>
                  <strong>
                    ${escapeHTML(
                      state.selectedFile
                        .name
                    )}
                  </strong>

                  <span>
                    ${escapeHTML(
                      formatBytes(
                        state.selectedFile
                          .size
                      )
                    )}
                  </span>
                </div>

              </div>
            `
            : ""
        }

      </div>

    </div>
  `;
}


/* =========================================================
   55. WORKSPACE FILE PICKER
========================================================= */

function bindWorkspaceFilePicker(
  onFileSelected
) {
  const input =
    workspaceContent?.querySelector(
      ".workspace-file-input"
    );

  const button =
    workspaceContent?.querySelector(
      ".workspace-file-button"
    );

  if (!input || !button) {
    return;
  }

  button.addEventListener(
    "click",
    () => {
      input.click();
    }
  );

  input.addEventListener(
    "change",
    async () => {
      const file =
        input.files?.[0];

      if (!file) {
        return;
      }

      state.selectedFile =
        file;

      if (
        typeof onFileSelected ===
        "function"
      ) {
        await onFileSelected(file);
      }
    }
  );
}


/* =========================================================
   56. SMART DROP → WORKSPACE FILE SYNC
========================================================= */

function getCurrentSelectedFile() {
  return state.selectedFile || null;
}


/* =========================================================
   57. PART 2 READY
========================================================= */

console.log(
  "[SENN TOOLS] Global Search and Smart Drop ready."
);


/* =========================================================
   PART 2 END

   NEXT:
   - Image Resizer
   - Image Compressor
   - Image Converter
   - Image Upscaler
   - Photo Enhancer
   - Video Thumbnail
   - JSON Formatter
   - Base64
   - Word Counter
   - Password Generator
   - UUID Generator
   - Hash Generator
   - URL Parser
   - Timestamp Converter
   - Color Converter
========================================================= */
