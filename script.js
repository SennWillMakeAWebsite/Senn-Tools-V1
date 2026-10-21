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
