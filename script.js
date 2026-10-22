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

/* =========================================================
   58. TOOL ENGINE
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

  const renderers = {
    "image-resizer":
      renderImageResizer,

    "image-compressor":
      renderImageCompressor,

    "image-converter":
      renderImageConverter,

    "image-upscaler":
      renderImageUpscaler,

    "photo-enhancer":
      renderPhotoEnhancer,

    "video-thumbnail":
      renderVideoThumbnail,

    "json-formatter":
      renderJSONFormatter,

    "base64":
      renderBase64Tool,

    "word-counter":
      renderWordCounter,

    "password-generator":
      renderPasswordGenerator,

    "uuid-generator":
      renderUUIDGenerator,

    "hash-generator":
      renderHashGenerator,

    "url-parser":
      renderURLParser,

    "timestamp-converter":
      renderTimestampConverter,

    "color-converter":
      renderColorConverter,

    "metadata-viewer":
      renderMetadataViewer
  };

  const renderer =
    renderers[toolId];

  if (renderer) {
    renderer();

    return;
  }

  renderUnavailableTool(tool);
}


/* =========================================================
   59. TOOL ENGINE FALLBACK
========================================================= */

function renderUnavailableTool(tool) {
  const backendMessage =
    tool.backendRequired
      ? `
        This tool needs a heavier
        processing engine such as
        FFmpeg, an AI model, or a
        server-side worker.
      `
      : `
        This tool is registered,
        but its processing engine
        hasn't been connected yet.
      `;

  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-status-panel">

        <div
          class="workspace-placeholder-icon"
        >
          <i class="${escapeHTML(
            tool.icon
          )}"></i>
        </div>

        <span class="tool-status-badge">
          ${
            tool.backendRequired
              ? "ENGINE REQUIRED"
              : "COMING NEXT"
          }
        </span>

        <h2>
          ${escapeHTML(
            tool.name
          )}
        </h2>

        <p>
          ${backendMessage}
        </p>

        <div class="tool-notice">
          <i
            class="fa-solid fa-circle-info"
          ></i>

          <span>
            Senn Tools will never pretend
            a file was processed when no
            real processing happened.
          </span>
        </div>

      </div>

    </div>
  `;
}


/* =========================================================
   60. RUNTIME WORKSPACE STYLES
========================================================= */

function installToolEngineStyles() {
  if (
    document.getElementById(
      "senn-tool-engine-styles"
    )
  ) {
    return;
  }

  const style =
    document.createElement(
      "style"
    );

  style.id =
    "senn-tool-engine-styles";

  style.textContent = `
    .tool-interface {
      display: grid;
      gap: 20px;
      width: 100%;
    }

    .tool-panel,
    .tool-upload-panel,
    .tool-status-panel {
      position: relative;
      padding: 24px;
      border: 1px solid
        var(--border-color, rgba(255,255,255,.1));
      border-radius: 22px;
      background:
        rgba(255,255,255,.035);
      overflow: hidden;
    }

    .tool-upload-panel,
    .tool-status-panel {
      text-align: center;
    }

    .tool-upload-panel h2,
    .tool-status-panel h2 {
      margin: 14px 0 8px;
    }

    .tool-upload-panel p,
    .tool-status-panel p {
      max-width: 620px;
      margin: 0 auto 18px;
      line-height: 1.7;
      opacity: .72;
    }

    .tool-status-badge {
      display: inline-flex;
      margin-top: 14px;
      padding: 7px 10px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: .08em;
      background:
        rgba(70, 210, 255, .1);
      border:
        1px solid rgba(70,210,255,.2);
    }

    .tool-notice {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      max-width: 620px;
      margin: 18px auto 0;
      padding: 14px 16px;
      text-align: left;
      border-radius: 14px;
      background:
        rgba(255,255,255,.04);
      border:
        1px solid rgba(255,255,255,.08);
      font-size: 13px;
      line-height: 1.6;
    }

    .tool-controls {
      display: grid;
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
      gap: 16px;
    }

    .tool-control {
      display: grid;
      gap: 8px;
    }

    .tool-control.full {
      grid-column: 1 / -1;
    }

    .tool-control label {
      font-size: 13px;
      font-weight: 700;
      opacity: .82;
    }

    .tool-input,
    .tool-select,
    .tool-textarea {
      width: 100%;
      min-height: 46px;
      padding: 12px 14px;
      color: inherit;
      background:
        rgba(255,255,255,.045);
      border:
        1px solid rgba(255,255,255,.1);
      border-radius: 13px;
      outline: none;
      font: inherit;
    }

    .tool-textarea {
      min-height: 220px;
      resize: vertical;
      line-height: 1.6;
      font-family:
        "JetBrains Mono",
        monospace;
      font-size: 13px;
    }

    .tool-input:focus,
    .tool-select:focus,
    .tool-textarea:focus {
      border-color:
        rgba(64, 210, 255, .55);
      box-shadow:
        0 0 0 3px
        rgba(64, 210, 255, .08);
    }

    .tool-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 18px;
    }

    .tool-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      min-height: 44px;
      padding: 0 16px;
      border-radius: 12px;
      border:
        1px solid rgba(255,255,255,.1);
      background:
        rgba(255,255,255,.055);
      color: inherit;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
      transition:
        transform .2s ease,
        background .2s ease,
        border-color .2s ease;
    }

    .tool-button:hover {
      transform:
        translateY(-1px);
      background:
        rgba(255,255,255,.09);
    }

    .tool-button.primary {
      background:
        linear-gradient(
          135deg,
          rgba(45,205,255,.2),
          rgba(110,90,255,.18)
        );
      border-color:
        rgba(70,210,255,.3);
    }

    .tool-button.danger {
      border-color:
        rgba(255,90,100,.25);
    }

    .workspace-current-file {
      display: flex;
      align-items: center;
      gap: 12px;
      width: min(100%, 520px);
      margin: 20px auto 0;
      padding: 12px 14px;
      text-align: left;
      border-radius: 14px;
      background:
        rgba(255,255,255,.04);
      border:
        1px solid rgba(255,255,255,.08);
    }

    .workspace-current-file > i {
      width: 38px;
      height: 38px;
      display: grid;
      place-items: center;
      flex: 0 0 auto;
      border-radius: 10px;
      background:
        rgba(70,210,255,.09);
    }

    .workspace-current-file div {
      min-width: 0;
      display: grid;
      gap: 3px;
    }

    .workspace-current-file strong,
    .workspace-current-file span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .workspace-current-file span {
      font-size: 12px;
      opacity: .6;
    }

    .tool-preview-grid {
      display: grid;
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
      gap: 16px;
    }

    .tool-preview-card {
      min-width: 0;
      padding: 14px;
      border-radius: 18px;
      background:
        rgba(255,255,255,.03);
      border:
        1px solid rgba(255,255,255,.08);
    }

    .tool-preview-card h3 {
      margin: 0 0 12px;
      font-size: 13px;
      opacity: .7;
    }

    .tool-preview-card img,
    .tool-preview-card video,
    .tool-preview-card canvas {
      display: block;
      width: 100%;
      max-height: 420px;
      object-fit: contain;
      border-radius: 12px;
      background: #090a0d;
    }

    .tool-output-info {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 12px;
    }

    .tool-output-info span {
      padding: 6px 9px;
      border-radius: 999px;
      font-size: 11px;
      background:
        rgba(255,255,255,.05);
      border:
        1px solid rgba(255,255,255,.08);
    }

    .tool-stat-grid {
      display: grid;
      grid-template-columns:
        repeat(4, minmax(0, 1fr));
      gap: 10px;
      margin-top: 16px;
    }

    .tool-stat {
      padding: 14px;
      border-radius: 14px;
      background:
        rgba(255,255,255,.035);
      border:
        1px solid rgba(255,255,255,.07);
    }

    .tool-stat span {
      display: block;
      font-size: 11px;
      opacity: .55;
      margin-bottom: 6px;
    }

    .tool-stat strong {
      font-size: 15px;
    }

    .tool-code-output {
      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }

    .tool-range-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .tool-range-row input {
      flex: 1;
    }

    .tool-range-value {
      min-width: 52px;
      text-align: right;
      font-family:
        "JetBrains Mono",
        monospace;
      font-size: 12px;
    }

    @media (max-width: 720px) {
      .tool-controls,
      .tool-preview-grid {
        grid-template-columns: 1fr;
      }

      .tool-stat-grid {
        grid-template-columns:
          repeat(2, minmax(0, 1fr));
      }

      .tool-panel,
      .tool-upload-panel,
      .tool-status-panel {
        padding: 18px;
      }
    }
  `;

  document.head.appendChild(
    style
  );
}

installToolEngineStyles();


/* =========================================================
   61. IMAGE WORKSPACE SHELL
========================================================= */

function renderImageWorkspaceShell(
  {
    title,
    description,
    controlsHTML = "",
    actionText = "Process Image",
    actionIcon =
      "fa-solid fa-wand-magic-sparkles"
  }
) {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div
          class="workspace-placeholder-icon"
        >
          <i
            class="fa-regular fa-image"
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
          accept="image/*"
          hidden
        >

        <button
          class="tool-button workspace-file-button"
          type="button"
        >
          <i
            class="fa-solid fa-folder-open"
          ></i>

          Choose Image
        </button>

        <div
          class="workspace-image-file"
        ></div>

      </div>

      <div class="tool-panel">

        <div class="tool-controls">
          ${controlsHTML}
        </div>

        <div class="tool-actions">

          <button
            class="tool-button primary process-image-button"
            type="button"
          >
            <i
              class="${actionIcon}"
            ></i>

            ${escapeHTML(
              actionText
            )}
          </button>

          <button
            class="tool-button download-image-button"
            type="button"
            disabled
          >
            <i
              class="fa-solid fa-download"
            ></i>

            Download
          </button>

        </div>

      </div>

      <div
        class="tool-preview-grid image-preview-area"
      >
      </div>

    </div>
  `;
}


/* =========================================================
   62. IMAGE WORKSPACE FILE BINDING
========================================================= */

function bindImageWorkspaceFile(
  onReady
) {
  const input =
    workspaceContent.querySelector(
      ".workspace-file-input"
    );

  const button =
    workspaceContent.querySelector(
      ".workspace-file-button"
    );

  const fileBox =
    workspaceContent.querySelector(
      ".workspace-image-file"
    );

  if (
    !input ||
    !button ||
    !fileBox
  ) {
    return;
  }

  function renderFile(file) {
    if (!file) {
      fileBox.innerHTML = "";

      return;
    }

    const type =
      detectFileType(file);

    fileBox.innerHTML = `
      <div class="workspace-current-file">

        <i
          class="${getFileIcon(
            type.type
          )}"
        ></i>

        <div>
          <strong>
            ${escapeHTML(
              file.name
            )}
          </strong>

          <span>
            ${escapeHTML(
              formatBytes(
                file.size
              )
            )}
          </span>
        </div>

      </div>
    `;
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

      if (
        detectFileType(file).type !==
        "image"
      ) {
        showToast(
          "Invalid file",
          "Choose an image file.",
          "warning"
        );

        input.value = "";

        return;
      }

      state.selectedFile = file;

      renderFile(file);

      if (onReady) {
        await onReady(file);
      }
    }
  );

  if (
    state.selectedFile &&
    detectFileType(
      state.selectedFile
    ).type === "image"
  ) {
    renderFile(
      state.selectedFile
    );

    if (onReady) {
      onReady(
        state.selectedFile
      );
    }
  }
}


/* =========================================================
   63. IMAGE PREVIEW
========================================================= */

async function renderImagePreview(
  file,
  outputBlob = null,
  outputInformation = ""
) {
  const area =
    workspaceContent.querySelector(
      ".image-preview-area"
    );

  if (!area || !file) {
    return;
  }

  const originalURL =
    URL.createObjectURL(file);

  let outputURL = null;

  if (outputBlob) {
    outputURL =
      URL.createObjectURL(
        outputBlob
      );
  }

  area.innerHTML = `
    <div class="tool-preview-card">

      <h3>
        ORIGINAL
      </h3>

      <img
        src="${originalURL}"
        alt="Original image"
      >

      <div class="tool-output-info">
        <span>
          ${escapeHTML(
            formatBytes(
              file.size
            )
          )}
        </span>
      </div>

    </div>

    ${
      outputURL
        ? `
          <div class="tool-preview-card">

            <h3>
              OUTPUT
            </h3>

            <img
              src="${outputURL}"
              alt="Processed image"
            >

            <div class="tool-output-info">

              <span>
                ${escapeHTML(
                  formatBytes(
                    outputBlob.size
                  )
                )}
              </span>

              ${
                outputInformation
                  ? `
                    <span>
                      ${escapeHTML(
                        outputInformation
                      )}
                    </span>
                  `
                  : ""
              }

            </div>

          </div>
        `
        : ""
    }
  `;

  window.setTimeout(() => {
    URL.revokeObjectURL(
      originalURL
    );

    if (outputURL) {
      URL.revokeObjectURL(
        outputURL
      );
    }
  }, 60000);
}


/* =========================================================
   64. IMAGE RESIZER
========================================================= */

function renderImageResizer() {
  renderImageWorkspaceShell({
    title:
      "Resize your image",

    description:
      "Change image dimensions directly in your browser.",

    actionText:
      "Resize Image",

    actionIcon:
      "fa-solid fa-up-right-and-down-left-from-center",

    controlsHTML: `
      <div class="tool-control">

        <label>
          Width
        </label>

        <input
          class="tool-input resize-width"
          type="number"
          min="1"
          placeholder="1920"
        >

      </div>

      <div class="tool-control">

        <label>
          Height
        </label>

        <input
          class="tool-input resize-height"
          type="number"
          min="1"
          placeholder="1080"
        >

      </div>

      <div class="tool-control full">

        <label>
          <input
            class="resize-ratio"
            type="checkbox"
            checked
          >

          Keep aspect ratio
        </label>

      </div>
    `
  });

  const widthInput =
    workspaceContent.querySelector(
      ".resize-width"
    );

  const heightInput =
    workspaceContent.querySelector(
      ".resize-height"
    );

  const ratioInput =
    workspaceContent.querySelector(
      ".resize-ratio"
    );

  const processButton =
    workspaceContent.querySelector(
      ".process-image-button"
    );

  const downloadButton =
    workspaceContent.querySelector(
      ".download-image-button"
    );

  let sourceWidth = 0;
  let sourceHeight = 0;
  let outputBlob = null;

  bindImageWorkspaceFile(
    async (file) => {
      try {
        const image =
          await loadImageFromFile(
            file
          );

        sourceWidth =
          image.naturalWidth;

        sourceHeight =
          image.naturalHeight;

        widthInput.value =
          sourceWidth;

        heightInput.value =
          sourceHeight;

        await renderImagePreview(
          file
        );
      } catch {
        showToast(
          "Image error",
          "Unable to read this image.",
          "error"
        );
      }
    }
  );

  widthInput.addEventListener(
    "input",
    () => {
      if (
        !ratioInput.checked ||
        !sourceWidth ||
        !sourceHeight
      ) {
        return;
      }

      const width =
        Number(
          widthInput.value
        );

      if (!width) {
        return;
      }

      heightInput.value =
        Math.round(
          width *
          sourceHeight /
          sourceWidth
        );
    }
  );

  heightInput.addEventListener(
    "input",
    () => {
      if (
        !ratioInput.checked ||
        !sourceWidth ||
        !sourceHeight
      ) {
        return;
      }

      const height =
        Number(
          heightInput.value
        );

      if (!height) {
        return;
      }

      widthInput.value =
        Math.round(
          height *
          sourceWidth /
          sourceHeight
        );
    }
  );

  processButton.addEventListener(
    "click",
    async () => {
      const file =
        requireSelectedFile([
          "image"
        ]);

      if (!file) {
        return;
      }

      const width =
        Math.round(
          Number(
            widthInput.value
          )
        );

      const height =
        Math.round(
          Number(
            heightInput.value
          )
        );

      if (
        !width ||
        !height ||
        width < 1 ||
        height < 1
      ) {
        showToast(
          "Invalid dimensions",
          "Enter a valid width and height.",
          "warning"
        );

        return;
      }

      try {
        const image =
          await loadImageFromFile(
            file
          );

        const canvas =
          document.createElement(
            "canvas"
          );

        canvas.width = width;
        canvas.height = height;

        const context =
          canvas.getContext("2d");

        context.imageSmoothingEnabled =
          true;

        context.imageSmoothingQuality =
          "high";

                context.drawImage(
          image,
          0,
          0,
          width,
          height
        );

        const outputType =
          file.type ===
            "image/jpeg"
            ? "image/jpeg"
            : file.type ===
                "image/webp"
              ? "image/webp"
              : "image/png";

        outputBlob =
          await canvasToBlob(
            canvas,
            outputType,
            0.94
          );

        downloadButton.disabled =
          false;

        await renderImagePreview(
          file,
          outputBlob,
          `${width} × ${height}`
        );

        addHistory(
          "image-resizer",
          {
            fileName:
              file.name
          }
        );

        showToast(
          "Resize complete",
          `${width} × ${height}`,
          "success"
        );
      } catch (error) {
        console.error(error);

        showToast(
          "Resize failed",
          "The image could not be processed.",
          "error"
        );
      }
    }
  );

  downloadButton.addEventListener(
    "click",
    () => {
      if (!outputBlob) {
        return;
      }

      const file =
        state.selectedFile;

      const extension =
        file?.type ===
          "image/jpeg"
          ? "jpg"
          : file?.type ===
              "image/webp"
            ? "webp"
            : "png";

      downloadBlob(
        outputBlob,
        `${getBaseFileName(
          file?.name
        )}-resized.${extension}`
      );
    }
  );
}


/* =========================================================
   65. IMAGE COMPRESSOR
========================================================= */

function renderImageCompressor() {
  renderImageWorkspaceShell({
    title:
      "Compress your image",

    description:
      "Reduce image size using browser-side JPEG or WebP compression.",

    actionText:
      "Compress Image",

    actionIcon:
      "fa-solid fa-compress",

    controlsHTML: `
      <div class="tool-control">

        <label>
          Output Format
        </label>

        <select
          class="tool-select compressor-format"
        >
          <option value="image/webp">
            WEBP
          </option>

          <option value="image/jpeg">
            JPG
          </option>
        </select>

      </div>

      <div class="tool-control">

        <label>
          Quality
        </label>

        <div class="tool-range-row">

          <input
            class="compressor-quality"
            type="range"
            min="10"
            max="100"
            value="78"
          >

          <span
            class="tool-range-value compressor-quality-value"
          >
            78%
          </span>

        </div>

      </div>
    `
  });

  const formatInput =
    workspaceContent.querySelector(
      ".compressor-format"
    );

  const qualityInput =
    workspaceContent.querySelector(
      ".compressor-quality"
    );

  const qualityValue =
    workspaceContent.querySelector(
      ".compressor-quality-value"
    );

  const processButton =
    workspaceContent.querySelector(
      ".process-image-button"
    );

  const downloadButton =
    workspaceContent.querySelector(
      ".download-image-button"
    );

  let outputBlob = null;
  let outputExtension =
    "webp";

  bindImageWorkspaceFile(
    async (file) => {
      await renderImagePreview(
        file
      );
    }
  );

  qualityInput.addEventListener(
    "input",
    () => {
      qualityValue.textContent =
        `${qualityInput.value}%`;
    }
  );

  processButton.addEventListener(
    "click",
    async () => {
      const file =
        requireSelectedFile([
          "image"
        ]);

      if (!file) {
        return;
      }

      try {
        const image =
          await loadImageFromFile(
            file
          );

        const canvas =
          document.createElement(
            "canvas"
          );

        canvas.width =
          image.naturalWidth;

        canvas.height =
          image.naturalHeight;

        const context =
          canvas.getContext("2d");

        context.drawImage(
          image,
          0,
          0
        );

        const type =
          formatInput.value;

        const quality =
          Number(
            qualityInput.value
          ) / 100;

        outputBlob =
          await canvasToBlob(
            canvas,
            type,
            quality
          );

        outputExtension =
          type === "image/jpeg"
            ? "jpg"
            : "webp";

        downloadButton.disabled =
          false;

        const difference =
          file.size > 0
            ? Math.round(
                (
                  1 -
                  outputBlob.size /
                  file.size
                ) *
                100
              )
            : 0;

        const resultText =
          difference > 0
            ? `${difference}% smaller`
            : "Output generated";

        await renderImagePreview(
          file,
          outputBlob,
          resultText
        );

        addHistory(
          "image-compressor",
          {
            fileName:
              file.name
          }
        );

        showToast(
          "Compression complete",
          `${formatBytes(
            file.size
          )} → ${formatBytes(
            outputBlob.size
          )}`,
          "success"
        );
      } catch (error) {
        console.error(error);

        showToast(
          "Compression failed",
          "Unable to compress this image.",
          "error"
        );
      }
    }
  );

  downloadButton.addEventListener(
    "click",
    () => {
      if (!outputBlob) {
        return;
      }

      downloadBlob(
        outputBlob,
        `${getBaseFileName(
          state.selectedFile?.name
        )}-compressed.${outputExtension}`
      );
    }
  );
}


/* =========================================================
   66. IMAGE CONVERTER
========================================================= */

function renderImageConverter() {
  renderImageWorkspaceShell({
    title:
      "Convert image format",

    description:
      "Convert images between PNG, JPG, and WEBP locally in your browser.",

    actionText:
      "Convert Image",

    actionIcon:
      "fa-solid fa-repeat",

    controlsHTML: `
      <div class="tool-control">

        <label>
          Convert To
        </label>

        <select
          class="tool-select converter-format"
        >
          <option value="image/png">
            PNG
          </option>

          <option value="image/jpeg">
            JPG
          </option>

          <option value="image/webp">
            WEBP
          </option>
        </select>

      </div>

      <div class="tool-control">

        <label>
          Quality
        </label>

        <div class="tool-range-row">

          <input
            class="converter-quality"
            type="range"
            min="20"
            max="100"
            value="92"
          >

          <span
            class="tool-range-value converter-quality-value"
          >
            92%
          </span>

        </div>

      </div>
    `
  });

  const formatInput =
    workspaceContent.querySelector(
      ".converter-format"
    );

  const qualityInput =
    workspaceContent.querySelector(
      ".converter-quality"
    );

  const qualityValue =
    workspaceContent.querySelector(
      ".converter-quality-value"
    );

  const processButton =
    workspaceContent.querySelector(
      ".process-image-button"
    );

  const downloadButton =
    workspaceContent.querySelector(
      ".download-image-button"
    );

  let outputBlob = null;
  let outputExtension =
    "png";

  bindImageWorkspaceFile(
    async (file) => {
      await renderImagePreview(
        file
      );
    }
  );

  qualityInput.addEventListener(
    "input",
    () => {
      qualityValue.textContent =
        `${qualityInput.value}%`;
    }
  );

  processButton.addEventListener(
    "click",
    async () => {
      const file =
        requireSelectedFile([
          "image"
        ]);

      if (!file) {
        return;
      }

      try {
        const image =
          await loadImageFromFile(
            file
          );

        const canvas =
          document.createElement(
            "canvas"
          );

        canvas.width =
          image.naturalWidth;

        canvas.height =
          image.naturalHeight;

        const context =
          canvas.getContext("2d");

        const outputType =
          formatInput.value;

        if (
          outputType ===
          "image/jpeg"
        ) {
          context.fillStyle =
            "#ffffff";

          context.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
          );
        }

        context.drawImage(
          image,
          0,
          0
        );

        const quality =
          Number(
            qualityInput.value
          ) / 100;

        outputBlob =
          await canvasToBlob(
            canvas,
            outputType,
            quality
          );

        outputExtension =
          outputType ===
            "image/jpeg"
            ? "jpg"
            : outputType ===
                "image/webp"
              ? "webp"
              : "png";

        downloadButton.disabled =
          false;

        await renderImagePreview(
          file,
          outputBlob,
          outputExtension.toUpperCase()
        );

        addHistory(
          "image-converter",
          {
            fileName:
              file.name
          }
        );

        showToast(
          "Conversion complete",
          `Converted to ${outputExtension.toUpperCase()}.`,
          "success"
        );
      } catch (error) {
        console.error(error);

        showToast(
          "Conversion failed",
          "Unable to convert this image.",
          "error"
        );
      }
    }
  );

  downloadButton.addEventListener(
    "click",
    () => {
      if (!outputBlob) {
        return;
      }

      downloadBlob(
        outputBlob,
        `${getBaseFileName(
          state.selectedFile?.name
        )}.${outputExtension}`
      );
    }
  );
}


/* =========================================================
   67. IMAGE UPSCALER
========================================================= */

function renderImageUpscaler() {
  renderImageWorkspaceShell({
    title:
      "Upscale image",

    description:
      "Increase image resolution using high-quality browser scaling. This is standard scaling, not AI reconstruction.",

    actionText:
      "Upscale Image",

    actionIcon:
      "fa-solid fa-expand",

    controlsHTML: `
      <div class="tool-control">

        <label>
          Resolution
        </label>

        <select
          class="tool-select upscale-mode"
        >
          <option value="2x">
            2× Original
          </option>

          <option value="4x">
            4× Original
          </option>

          <option value="720p">
            720p
          </option>

          <option value="1080p">
            1080p
          </option>

          <option value="2k">
            2K
          </option>

          <option value="4k">
            4K
          </option>
        </select>

      </div>

      <div class="tool-control">

        <label>
          Output
        </label>

        <select
          class="tool-select upscale-format"
        >
          <option value="image/png">
            PNG
          </option>

          <option value="image/webp">
            WEBP
          </option>

          <option value="image/jpeg">
            JPG
          </option>
        </select>

      </div>

      <div class="tool-control full">

        <div class="tool-notice">
          <i
            class="fa-solid fa-circle-info"
          ></i>

          <span>
            2× and 4× enlarge the original.
            Resolution presets fit the image
            inside the selected target while
            keeping its aspect ratio.
          </span>
        </div>

      </div>
    `
  });

  const modeInput =
    workspaceContent.querySelector(
      ".upscale-mode"
    );

  const formatInput =
    workspaceContent.querySelector(
      ".upscale-format"
    );

  const processButton =
    workspaceContent.querySelector(
      ".process-image-button"
    );

  const downloadButton =
    workspaceContent.querySelector(
      ".download-image-button"
    );

  let outputBlob = null;
  let outputExtension =
    "png";

  bindImageWorkspaceFile(
    async (file) => {
      await renderImagePreview(
        file
      );
    }
  );

  processButton.addEventListener(
    "click",
    async () => {
      const file =
        requireSelectedFile([
          "image"
        ]);

      if (!file) {
        return;
      }

      try {
        const image =
          await loadImageFromFile(
            file
          );

        const sourceWidth =
          image.naturalWidth;

        const sourceHeight =
          image.naturalHeight;

        let width =
          sourceWidth;

        let height =
          sourceHeight;

        const mode =
          modeInput.value;

        if (mode === "2x") {
          width =
            sourceWidth * 2;

          height =
            sourceHeight * 2;
        } else if (
          mode === "4x"
        ) {
          width =
            sourceWidth * 4;

          height =
            sourceHeight * 4;
        } else {
          const presets = {
            "720p": [
              1280,
              720
            ],

            "1080p": [
              1920,
              1080
            ],

            "2k": [
              2560,
              1440
            ],

            "4k": [
              3840,
              2160
            ]
          };

          const target =
            presets[mode];

          const scale =
            Math.min(
              target[0] /
                sourceWidth,

              target[1] /
                sourceHeight
            );

          width =
            Math.round(
              sourceWidth *
              scale
            );

          height =
            Math.round(
              sourceHeight *
              scale
            );
        }

        if (
          width * height >
          50000000
        ) {
          showToast(
            "Resolution too large",
            "This output may exceed browser canvas limits.",
            "warning"
          );

          return;
        }

        const canvas =
          document.createElement(
            "canvas"
          );

        canvas.width =
          width;

        canvas.height =
          height;

        const context =
          canvas.getContext("2d");

        context.imageSmoothingEnabled =
          true;

        context.imageSmoothingQuality =
          "high";

        context.drawImage(
          image,
          0,
          0,
          width,
          height
        );

        const type =
          formatInput.value;

        outputBlob =
          await canvasToBlob(
            canvas,
            type,
            0.94
          );

        outputExtension =
          type === "image/jpeg"
            ? "jpg"
            : type === "image/webp"
              ? "webp"
              : "png";

        downloadButton.disabled =
          false;

        await renderImagePreview(
          file,
          outputBlob,
          `${width} × ${height}`
        );

        addHistory(
          "image-upscaler",
          {
            fileName:
              file.name
          }
        );

        showToast(
          "Upscale complete",
          `${width} × ${height}`,
          "success"
        );
      } catch (error) {
        console.error(error);

        showToast(
          "Upscale failed",
          "The browser could not process this image.",
          "error"
        );
      }
    }
  );

  downloadButton.addEventListener(
    "click",
    () => {
      if (!outputBlob) {
        return;
      }

      downloadBlob(
        outputBlob,
        `${getBaseFileName(
          state.selectedFile?.name
        )}-upscaled.${outputExtension}`
      );
    }
  );
}


/* =========================================================
   68. PHOTO ENHANCER
========================================================= */

function renderPhotoEnhancer() {
  renderImageWorkspaceShell({
    title:
      "Enhance photo",

    description:
      "Apply browser-side brightness, contrast, saturation, and sharpening. This is local enhancement, not generative AI.",

    actionText:
      "Enhance Photo",

    actionIcon:
      "fa-solid fa-wand-magic-sparkles",

    controlsHTML: `
      <div class="tool-control">

        <label>
          Brightness
        </label>

        <div class="tool-range-row">

          <input
            class="enhance-brightness"
            type="range"
            min="70"
            max="140"
            value="104"
          >

          <span
            class="tool-range-value enhance-brightness-value"
          >
            104%
          </span>

        </div>

      </div>

      <div class="tool-control">

        <label>
          Contrast
        </label>

        <div class="tool-range-row">

          <input
            class="enhance-contrast"
            type="range"
            min="70"
            max="150"
            value="108"
          >

          <span
            class="tool-range-value enhance-contrast-value"
          >
            108%
          </span>

        </div>

      </div>

      <div class="tool-control">

        <label>
          Saturation
        </label>

        <div class="tool-range-row">

          <input
            class="enhance-saturation"
            type="range"
            min="0"
            max="180"
            value="108"
          >

          <span
            class="tool-range-value enhance-saturation-value"
          >
            108%
          </span>

        </div>

      </div>

      <div class="tool-control">

        <label>
          Sharpness
        </label>

        <div class="tool-range-row">

          <input
            class="enhance-sharpness"
            type="range"
            min="0"
            max="100"
            value="25"
          >

          <span
            class="tool-range-value enhance-sharpness-value"
          >
            25%
          </span>

        </div>

      </div>
    `
  });

  const brightness =
    workspaceContent.querySelector(
      ".enhance-brightness"
    );

  const contrast =
    workspaceContent.querySelector(
      ".enhance-contrast"
    );

  const saturation =
    workspaceContent.querySelector(
      ".enhance-saturation"
    );

  const sharpness =
    workspaceContent.querySelector(
      ".enhance-sharpness"
    );

  const processButton =
    workspaceContent.querySelector(
      ".process-image-button"
    );

  const downloadButton =
    workspaceContent.querySelector(
      ".download-image-button"
    );

  let outputBlob = null;

  function bindRange(
    input,
    selector
  ) {
    const output =
      workspaceContent
        .querySelector(selector);

    input.addEventListener(
      "input",
      () => {
        output.textContent =
          `${input.value}%`;
      }
    );
  }

  bindRange(
    brightness,
    ".enhance-brightness-value"
  );

  bindRange(
    contrast,
    ".enhance-contrast-value"
  );

  bindRange(
    saturation,
    ".enhance-saturation-value"
  );

  bindRange(
    sharpness,
    ".enhance-sharpness-value"
  );

  bindImageWorkspaceFile(
    async (file) => {
      await renderImagePreview(
        file
      );
    }
  );

  processButton.addEventListener(
    "click",
    async () => {
            const file =
        requireSelectedFile([
          "image"
        ]);

      if (!file) {
        return;
      }

      try {
        const image =
          await loadImageFromFile(
            file
          );

        const canvas =
          document.createElement(
            "canvas"
          );

        canvas.width =
          image.naturalWidth;

        canvas.height =
          image.naturalHeight;

        const context =
          canvas.getContext(
            "2d",
            {
              willReadFrequently:
                true
            }
          );

        context.filter = `
          brightness(${brightness.value}%)
          contrast(${contrast.value}%)
          saturate(${saturation.value}%)
        `;

        context.drawImage(
          image,
          0,
          0
        );

        context.filter =
          "none";

        const sharpnessAmount =
          Number(
            sharpness.value
          ) / 100;

        if (
          sharpnessAmount > 0
        ) {
          applySimpleSharpen(
            context,
            canvas.width,
            canvas.height,
            sharpnessAmount
          );
        }

        outputBlob =
          await canvasToBlob(
            canvas,
            "image/png",
            0.95
          );

        downloadButton.disabled =
          false;

        await renderImagePreview(
          file,
          outputBlob,
          "Enhanced"
        );

        addHistory(
          "photo-enhancer",
          {
            fileName:
              file.name
          }
        );

        showToast(
          "Enhancement complete",
          "Photo processed locally.",
          "success"
        );
      } catch (error) {
        console.error(error);

        showToast(
          "Enhancement failed",
          "The image could not be processed.",
          "error"
        );
      }
    }
  );

  downloadButton.addEventListener(
    "click",
    () => {
      if (!outputBlob) {
        return;
      }

      downloadBlob(
        outputBlob,
        `${getBaseFileName(
          state.selectedFile?.name
        )}-enhanced.png`
      );
    }
  );
}


/* =========================================================
   69. SIMPLE SHARPEN
========================================================= */

function applySimpleSharpen(
  context,
  width,
  height,
  amount
) {
  if (
    width * height >
    12000000
  ) {
    return;
  }

  const imageData =
    context.getImageData(
      0,
      0,
      width,
      height
    );

  const source =
    new Uint8ClampedArray(
      imageData.data
    );

  const target =
    imageData.data;

  const strength =
    Math.min(
      Math.max(
        amount,
        0
      ),
      1
    );

  for (
    let y = 1;
    y < height - 1;
    y += 1
  ) {
    for (
      let x = 1;
      x < width - 1;
      x += 1
    ) {
      const index =
        (
          y * width +
          x
        ) * 4;

      const top =
        index -
        width * 4;

      const bottom =
        index +
        width * 4;

      const left =
        index - 4;

      const right =
        index + 4;

      for (
        let channel = 0;
        channel < 3;
        channel += 1
      ) {
        const center =
          source[
            index +
            channel
          ];

        const blurred =
          (
            source[
              top +
              channel
            ] +
            source[
              bottom +
              channel
            ] +
            source[
              left +
              channel
            ] +
            source[
              right +
              channel
            ]
          ) / 4;

        const sharpened =
          center +
          (
            center -
            blurred
          ) *
          strength *
          1.5;

        target[
          index +
          channel
        ] =
          Math.max(
            0,
            Math.min(
              255,
              sharpened
            )
          );
      }
    }
  }

  context.putImageData(
    imageData,
    0,
    0
  );
}


/* =========================================================
   70. VIDEO THUMBNAIL EXTRACTOR
========================================================= */

function renderVideoThumbnail() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div
          class="workspace-placeholder-icon"
        >
          <i
            class="fa-solid fa-film"
          ></i>
        </div>

        <h2>
          Extract video thumbnail
        </h2>

        <p>
          Choose a video, select a moment,
          then export that frame as PNG.
        </p>

        <input
          class="video-thumbnail-input"
          type="file"
          accept="video/*"
          hidden
        >

        <button
          class="tool-button video-thumbnail-select"
          type="button"
        >
          <i
            class="fa-solid fa-folder-open"
          ></i>

          Choose Video
        </button>

        <div
          class="video-thumbnail-file"
        ></div>

      </div>

      <div
        class="tool-panel video-thumbnail-controls"
        hidden
      >

        <div class="tool-control">

          <label>
            Frame Time
          </label>

          <div class="tool-range-row">

            <input
              class="video-time-range"
              type="range"
              min="0"
              max="1"
              value="0"
              step="0.1"
            >

            <span
              class="tool-range-value video-time-value"
            >
              00:00
            </span>

          </div>

        </div>

        <div class="tool-actions">

          <button
            class="tool-button primary capture-thumbnail"
            type="button"
          >
            <i
              class="fa-solid fa-camera"
            ></i>

            Capture Frame
          </button>

          <button
            class="tool-button download-thumbnail"
            type="button"
            disabled
          >
            <i
              class="fa-solid fa-download"
            ></i>

            Download PNG
          </button>

        </div>

      </div>

      <div class="tool-preview-grid">

        <div
          class="tool-preview-card video-preview-card"
          hidden
        >
          <h3>
            VIDEO
          </h3>

          <video
            class="thumbnail-video"
            controls
            playsinline
          ></video>
        </div>

        <div
          class="tool-preview-card thumbnail-output-card"
          hidden
        >
          <h3>
            THUMBNAIL
          </h3>

          <canvas
            class="thumbnail-canvas"
          ></canvas>
        </div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".video-thumbnail-input"
    );

  const selectButton =
    workspaceContent.querySelector(
      ".video-thumbnail-select"
    );

  const fileBox =
    workspaceContent.querySelector(
      ".video-thumbnail-file"
    );

  const controls =
    workspaceContent.querySelector(
      ".video-thumbnail-controls"
    );

  const videoCard =
    workspaceContent.querySelector(
      ".video-preview-card"
    );

  const video =
    workspaceContent.querySelector(
      ".thumbnail-video"
    );

  const range =
    workspaceContent.querySelector(
      ".video-time-range"
    );

  const timeValue =
    workspaceContent.querySelector(
      ".video-time-value"
    );

  const captureButton =
    workspaceContent.querySelector(
      ".capture-thumbnail"
    );

  const downloadButton =
    workspaceContent.querySelector(
      ".download-thumbnail"
    );

  const outputCard =
    workspaceContent.querySelector(
      ".thumbnail-output-card"
    );

  const canvas =
    workspaceContent.querySelector(
      ".thumbnail-canvas"
    );

  let videoURL = null;
  let outputBlob = null;

  selectButton.addEventListener(
    "click",
    () => {
      input.click();
    }
  );

  input.addEventListener(
    "change",
    () => {
      const file =
        input.files?.[0];

      if (!file) {
        return;
      }

      if (
        detectFileType(file).type !==
        "video"
      ) {
        showToast(
          "Invalid file",
          "Choose a video file.",
          "warning"
        );

        return;
      }

      if (videoURL) {
        URL.revokeObjectURL(
          videoURL
        );
      }

      state.selectedFile =
        file;

      videoURL =
        URL.createObjectURL(
          file
        );

      video.src =
        videoURL;

      fileBox.innerHTML = `
        <div class="workspace-current-file">

          <i
            class="fa-solid fa-film"
          ></i>

          <div>
            <strong>
              ${escapeHTML(
                file.name
              )}
            </strong>

            <span>
              ${escapeHTML(
                formatBytes(
                  file.size
                )
              )}
            </span>
          </div>

        </div>
      `;

      controls.hidden =
        false;

      videoCard.hidden =
        false;

      outputCard.hidden =
        true;

      downloadButton.disabled =
        true;

      outputBlob =
        null;
    }
  );

  video.addEventListener(
    "loadedmetadata",
    () => {
      range.max =
        Math.max(
          video.duration,
          0.1
        );

      range.value =
        Math.min(
          video.duration *
          0.25,
          video.duration
        );

      video.currentTime =
        Number(
          range.value
        );

      timeValue.textContent =
        formatDuration(
          Number(
            range.value
          )
        );
    }
  );

  range.addEventListener(
    "input",
    () => {
      const time =
        Number(
          range.value
        );

      timeValue.textContent =
        formatDuration(time);

      if (
        Number.isFinite(
          video.duration
        )
      ) {
        video.currentTime =
          time;
      }
    }
  );

  captureButton.addEventListener(
    "click",
    async () => {
      if (
        !video.videoWidth ||
        !video.videoHeight
      ) {
        showToast(
          "Video not ready",
          "Wait for the video metadata to load.",
          "warning"
        );

        return;
      }

      canvas.width =
        video.videoWidth;

      canvas.height =
        video.videoHeight;

      const context =
        canvas.getContext("2d");

      context.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
      );

      try {
        outputBlob =
          await canvasToBlob(
            canvas,
            "image/png",
            1
          );

        outputCard.hidden =
          false;

        downloadButton.disabled =
          false;

        addHistory(
          "video-thumbnail",
          {
            fileName:
              state.selectedFile
                ?.name
          }
        );

        showToast(
          "Frame captured",
          `${canvas.width} × ${canvas.height}`,
          "success"
        );
      } catch {
        showToast(
          "Capture failed",
          "Unable to export this frame.",
          "error"
        );
      }
    }
  );

  downloadButton.addEventListener(
    "click",
    () => {
      if (!outputBlob) {
        return;
      }

      downloadBlob(
        outputBlob,
        `${getBaseFileName(
          state.selectedFile?.name
        )}-thumbnail.png`
      );
    }
  );
}


/* =========================================================
   71. TEXT TOOL SHELL
========================================================= */

function renderTextToolShell(
  {
    title,
    description,
    inputPlaceholder = "",
    outputPlaceholder = "",
    actionsHTML = ""
  }
) {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-panel">

        <h2>
          ${escapeHTML(title)}
        </h2>

        <p>
          ${escapeHTML(
            description
          )}
        </p>

        <div class="tool-controls">

          <div class="tool-control">

            <label>
              Input
            </label>

            <textarea
              class="tool-textarea text-tool-input"
              placeholder="${escapeHTML(
                inputPlaceholder
              )}"
            ></textarea>

          </div>

          <div class="tool-control">

            <label>
              Output
            </label>

            <textarea
              class="tool-textarea text-tool-output"
              placeholder="${escapeHTML(
                outputPlaceholder
              )}"
              readonly
            ></textarea>

          </div>

        </div>

        <div class="tool-actions">
          ${actionsHTML}
        </div>

      </div>

    </div>
  `;
}


/* =========================================================
   72. JSON FORMATTER
========================================================= */

function renderJSONFormatter() {
  renderTextToolShell({
    title:
      "JSON Formatter & Validator",

    description:
      "Format, minify, and validate JSON directly in your browser.",

    inputPlaceholder:
      '{"name":"Senn","tool":"JSON"}',

    outputPlaceholder:
      "Formatted JSON will appear here.",

    actionsHTML: `
      <button
        class="tool-button primary json-format"
        type="button"
      >
        <i
          class="fa-solid fa-align-left"
        ></i>

        Format
      </button>

      <button
        class="tool-button json-minify"
        type="button"
      >
        <i
          class="fa-solid fa-compress"
        ></i>

        Minify
      </button>

      <button
        class="tool-button json-copy"
        type="button"
      >
        <i
          class="fa-regular fa-copy"
        ></i>

        Copy
      </button>
    `
  });

  const input =
    workspaceContent.querySelector(
      ".text-tool-input"
    );

  const output =
    workspaceContent.querySelector(
      ".text-tool-output"
    );

  function processJSON(
    spacing
  ) {
    try {
      const parsed =
        JSON.parse(
          input.value
        );

      output.value =
        JSON.stringify(
          parsed,
          null,
          spacing
        );

      showToast(
        "Valid JSON",
        spacing
          ? "JSON formatted."
          : "JSON minified.",
        "success"
      );

      addHistory(
        "json-formatter"
      );
    } catch (error) {
      output.value =
        `Invalid JSON\n\n${error.message}`;

      showToast(
        "Invalid JSON",
        error.message,
        "error"
      );
    }
  }

  workspaceContent
    .querySelector(
      ".json-format"
    )
    .addEventListener(
      "click",
      () => {
        processJSON(2);
      }
    );

  workspaceContent
    .querySelector(
      ".json-minify"
    )
    .addEventListener(
      "click",
      () => {
        processJSON(0);
      }
    );

  workspaceContent
    .querySelector(
      ".json-copy"
    )
    .addEventListener(
      "click",
      async () => {
        if (!output.value) {
          return;
        }

        try {
          await navigator.clipboard
            .writeText(
              output.value
            );

          showToast(
            "Copied",
            "Output copied to clipboard.",
            "success"
          );
        } catch {
          showToast(
            "Copy failed",
            "Clipboard permission was unavailable.",
            "error"
          );
        }
      }
    );
}


/* =========================================================
   73. BASE64
========================================================= */

function renderBase64Tool() {
  renderTextToolShell({
    title:
      "Base64 Encoder / Decoder",

    description:
      "Encode Unicode text to Base64 or decode Base64 back to text.",

    inputPlaceholder:
      "Enter text or Base64 here...",

    outputPlaceholder:
      "Result will appear here.",

    actionsHTML: `
      <button
        class="tool-button primary base64-encode"
        type="button"
      >
        Encode
      </button>

      <button
        class="tool-button base64-decode"
        type="button"
      >
        Decode
      </button>

      <button
        class="tool-button base64-swap"
        type="button"
      >
        <i
          class="fa-solid fa-right-left"
        ></i>

        Swap
      </button>
    `
  });

  const input =
    workspaceContent.querySelector(
      ".text-tool-input"
    );

  const output =
    workspaceContent.querySelector(
      ".text-tool-output"
    );

  function unicodeToBase64(
    value
  ) {
    const bytes =
      new TextEncoder()
        .encode(value);

    let binary = "";

    bytes.forEach((byte) => {
      binary +=
        String.fromCharCode(
          byte
        );
    });

    return btoa(binary);
  }

  function base64ToUnicode(
    value
  ) {
    const binary =
      atob(
        value.replace(
          /\s+/g,
          ""
        )
      );

    const bytes =
      Uint8Array.from(
        binary,
        (character) =>
          character.charCodeAt(0)
      );

    return new TextDecoder()
      .decode(bytes);
  }

  workspaceContent
    .querySelector(
      ".base64-encode"
    )
    .addEventListener(
      "click",
      () => {
        try {
          output.value =
            unicodeToBase64(
              input.value
            );

          addHistory(
            "base64"
          );
        } catch {
          showToast(
            "Encode failed",
            "Unable to encode this text.",
            "error"
          );
        }
      }
    );

  workspaceContent
    .querySelector(
      ".base64-decode"
    )
    .addEventListener(
      "click",
      () => {
        try {
          output.value =
            base64ToUnicode(
              input.value
            );

          addHistory(
            "base64"
          );
        } catch {
          showToast(
            "Invalid Base64",
            "The input could not be decoded.",
            "error"
          );
        }
      }
    );

  workspaceContent
    .querySelector(
      ".base64-swap"
    )
    .addEventListener(
      "click",
      () => {
        const oldInput =
          input.value;

        input.value =
          output.value;

        output.value =
          oldInput;
      }
    );
}


/* =========================================================
   74. WORD COUNTER
========================================================= */

function renderWordCounter() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-panel">

        <h2>
          Word & Character Counter
        </h2>

        <p>
          Live text statistics without
          uploading anything.
        </p>

        <textarea
          class="tool-textarea word-counter-input"
          placeholder="Start typing or paste text here..."
        ></textarea>

        <div class="tool-stat-grid">

          <div class="tool-stat">
            <span>
              WORDS
            </span>

            <strong
              class="word-stat"
            >
              0
            </strong>
          </div>

          <div class="tool-stat">
            <span>
              CHARACTERS
            </span>

            <strong
              class="character-stat"
            >
              0
            </strong>
          </div>

          <div class="tool-stat">
            <span>
              NO SPACES
            </span>

            <strong
              class="no-space-stat"
            >
              0
            </strong>
              </div>

          <div class="tool-stat">
            <span>
              LINES
            </span>

            <strong
              class="line-stat"
            >
              0
            </strong>
          </div>

        </div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".word-counter-input"
    );

  const wordStat =
    workspaceContent.querySelector(
      ".word-stat"
    );

  const characterStat =
    workspaceContent.querySelector(
      ".character-stat"
    );

  const noSpaceStat =
    workspaceContent.querySelector(
      ".no-space-stat"
    );

  const lineStat =
    workspaceContent.querySelector(
      ".line-stat"
    );

  function update() {
    const value =
      input.value;

    const trimmed =
      value.trim();

    const words =
      trimmed
        ? trimmed
            .split(/\s+/)
            .filter(Boolean)
            .length
        : 0;

    wordStat.textContent =
      words;

    characterStat.textContent =
      value.length;

    noSpaceStat.textContent =
      value.replace(
        /\s/g,
        ""
      ).length;

    lineStat.textContent =
      value
        ? value.split(/\r?\n/)
            .length
        : 0;
  }

  input.addEventListener(
    "input",
    update
  );

  update();
}


/* =========================================================
   75. RANDOM INTEGER
========================================================= */

function secureRandomInteger(
  maximum
) {
  if (maximum <= 0) {
    return 0;
  }

  const maxUint =
    0xffffffff;

  const limit =
    maxUint -
    (
      maxUint %
      maximum
    );

  const array =
    new Uint32Array(1);

  let value;

  do {
    crypto.getRandomValues(
      array
    );

    value =
      array[0];
  } while (
    value >= limit
  );

  return value % maximum;
}


/* =========================================================
   76. PASSWORD GENERATOR
========================================================= */

function renderPasswordGenerator() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-panel">

        <h2>
          Password Generator
        </h2>

        <p>
          Generate a random password
          locally using the browser's
          cryptographic random generator.
        </p>

        <div class="tool-controls">

          <div class="tool-control">

            <label>
              Length
            </label>

            <input
              class="tool-input password-length"
              type="number"
              min="8"
              max="128"
              value="20"
            >

          </div>

          <div class="tool-control">

            <label>
              Character Sets
            </label>

            <div>
              <label>
                <input
                  class="password-uppercase"
                  type="checkbox"
                  checked
                >
                A-Z
              </label>

              &nbsp;

              <label>
                <input
                  class="password-numbers"
                  type="checkbox"
                  checked
                >
                0-9
              </label>

              &nbsp;

              <label>
                <input
                  class="password-symbols"
                  type="checkbox"
                  checked
                >
                Symbols
              </label>
            </div>

          </div>

          <div class="tool-control full">

            <label>
              Generated Password
            </label>

            <input
              class="tool-input generated-password"
              type="text"
              readonly
            >

          </div>

        </div>

        <div class="tool-actions">

          <button
            class="tool-button primary generate-password"
            type="button"
          >
            <i
              class="fa-solid fa-arrows-rotate"
            ></i>

            Generate
          </button>

          <button
            class="tool-button copy-password"
            type="button"
          >
            <i
              class="fa-regular fa-copy"
            ></i>

            Copy
          </button>

        </div>

      </div>

    </div>
  `;

  const lengthInput =
    workspaceContent.querySelector(
      ".password-length"
    );

  const uppercase =
    workspaceContent.querySelector(
      ".password-uppercase"
    );

  const numbers =
    workspaceContent.querySelector(
      ".password-numbers"
    );

  const symbols =
    workspaceContent.querySelector(
      ".password-symbols"
    );

  const output =
    workspaceContent.querySelector(
      ".generated-password"
    );

  function generate() {
    let characters =
      "abcdefghijklmnopqrstuvwxyz";

    if (uppercase.checked) {
      characters +=
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (numbers.checked) {
      characters +=
        "0123456789";
    }

    if (symbols.checked) {
      characters +=
        "!@#$%^&*()_+-=[]{}:,.?";
    }

    const length =
      Math.min(
        128,
        Math.max(
          8,
          Number(
            lengthInput.value
          ) || 20
        )
      );

    let password = "";

    for (
      let index = 0;
      index < length;
      index += 1
    ) {
      password +=
        characters[
          secureRandomInteger(
            characters.length
          )
        ];
    }

    output.value =
      password;
  }

  workspaceContent
    .querySelector(
      ".generate-password"
    )
    .addEventListener(
      "click",
      generate
    );

  workspaceContent
    .querySelector(
      ".copy-password"
    )
    .addEventListener(
      "click",
      async () => {
        if (!output.value) {
          generate();
        }

        try {
          await navigator.clipboard
            .writeText(
              output.value
            );

          showToast(
            "Copied",
            "Password copied.",
            "success"
          );
        } catch {
          showToast(
            "Copy failed",
            "Clipboard access was unavailable.",
            "error"
          );
        }
      }
    );

  generate();
}


/* =========================================================
   77. UUID GENERATOR
========================================================= */

function createUUID() {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }

  const bytes =
    new Uint8Array(16);

  crypto.getRandomValues(
    bytes
  );

  bytes[6] =
    (
      bytes[6] &
      0x0f
    ) | 0x40;

  bytes[8] =
    (
      bytes[8] &
      0x3f
    ) | 0x80;

  const hex =
    Array.from(
      bytes,
      (byte) =>
        byte
          .toString(16)
          .padStart(2, "0")
    );

  return [
    hex.slice(0, 4)
      .join(""),

    hex.slice(4, 6)
      .join(""),

    hex.slice(6, 8)
      .join(""),

    hex.slice(8, 10)
      .join(""),

    hex.slice(10, 16)
      .join("")
  ].join("-");
}


function renderUUIDGenerator() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-panel">

        <h2>
          UUID Generator
        </h2>

        <p>
          Generate random UUID v4
          identifiers locally.
        </p>

        <div class="tool-control">

          <label>
            UUID
          </label>

          <input
            class="tool-input uuid-output"
            type="text"
            readonly
          >

        </div>

        <div class="tool-actions">

          <button
            class="tool-button primary uuid-generate"
            type="button"
          >
            Generate
          </button>

          <button
            class="tool-button uuid-copy"
            type="button"
          >
            <i
              class="fa-regular fa-copy"
            ></i>

            Copy
          </button>

        </div>

      </div>

    </div>
  `;

  const output =
    workspaceContent.querySelector(
      ".uuid-output"
    );

  function generate() {
    output.value =
      createUUID();
  }

  workspaceContent
    .querySelector(
      ".uuid-generate"
    )
    .addEventListener(
      "click",
      generate
    );

  workspaceContent
    .querySelector(
      ".uuid-copy"
    )
    .addEventListener(
      "click",
      async () => {
        try {
          await navigator.clipboard
            .writeText(
              output.value
            );

          showToast(
            "Copied",
            "UUID copied.",
            "success"
          );
        } catch {
          showToast(
            "Copy failed",
            "Clipboard access was unavailable.",
            "error"
          );
        }
      }
    );

  generate();
}


/* =========================================================
   78. HASH GENERATOR
========================================================= */

function renderHashGenerator() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-panel">

        <h2>
          Hash Generator
        </h2>

        <p>
          Generate SHA hashes using
          the browser Web Crypto API.
        </p>

        <div class="tool-controls">

          <div class="tool-control full">

            <label>
              Text
            </label>

            <textarea
              class="tool-textarea hash-input"
              placeholder="Enter text..."
            ></textarea>

          </div>

          <div class="tool-control">

            <label>
              Algorithm
            </label>

            <select
              class="tool-select hash-algorithm"
            >
              <option value="SHA-256">
                SHA-256
              </option>

              <option value="SHA-384">
                SHA-384
              </option>

              <option value="SHA-512">
                SHA-512
              </option>
            </select>

          </div>

          <div class="tool-control">

            <label>
              Hash
            </label>

            <textarea
              class="tool-textarea hash-output"
              readonly
            ></textarea>

          </div>

        </div>

        <div class="tool-actions">

          <button
            class="tool-button primary hash-generate"
            type="button"
          >
            Generate Hash
          </button>

          <button
            class="tool-button hash-copy"
            type="button"
          >
            Copy
          </button>

        </div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".hash-input"
    );

  const algorithm =
    workspaceContent.querySelector(
      ".hash-algorithm"
    );

  const output =
    workspaceContent.querySelector(
      ".hash-output"
    );

  async function generate() {
    const data =
      new TextEncoder()
        .encode(
          input.value
        );

    const digest =
      await crypto.subtle.digest(
        algorithm.value,
        data
      );

    output.value =
      Array.from(
        new Uint8Array(
          digest
        )
      )
        .map((byte) =>
          byte
            .toString(16)
            .padStart(2, "0")
        )
        .join("");

    addHistory(
      "hash-generator"
    );
  }

  workspaceContent
    .querySelector(
      ".hash-generate"
    )
    .addEventListener(
      "click",
      async () => {
        try {
          await generate();
        } catch (error) {
          console.error(error);

          showToast(
            "Hash failed",
            "Unable to generate the hash.",
            "error"
          );
        }
      }
    );

  workspaceContent
    .querySelector(
      ".hash-copy"
    )
    .addEventListener(
      "click",
      async () => {
        try {
          if (!output.value) {
            await generate();
          }

          await navigator.clipboard
            .writeText(
              output.value
            );

          showToast(
            "Copied",
            "Hash copied.",
            "success"
          );
        } catch {
          showToast(
            "Copy failed",
            "Clipboard access was unavailable.",
            "error"
          );
        }
      }
    );
}


/* =========================================================
   79. URL PARSER
========================================================= */

function renderURLParser() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-panel">

        <h2>
          URL Parser
        </h2>

        <p>
          Break a URL into its individual
          components.
        </p>

        <div class="tool-control">

          <label>
            URL
          </label>

          <input
            class="tool-input url-parser-input"
            type="text"
            placeholder="https://example.com/path?hello=world#section"
          >

        </div>

        <div class="tool-actions">

          <button
            class="tool-button primary url-parser-button"
            type="button"
          >
            Parse URL
          </button>

        </div>

        <div
          class="url-parser-output"
        ></div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".url-parser-input"
    );

  const output =
    workspaceContent.querySelector(
      ".url-parser-output"
    );

  workspaceContent
    .querySelector(
      ".url-parser-button"
    )
    .addEventListener(
      "click",
      () => {
        try {
          const parsed =
            new URL(
              input.value
            );

          const values = [
            [
              "Protocol",
              parsed.protocol
            ],

            [
              "Hostname",
              parsed.hostname
            ],

            [
              "Port",
              parsed.port || "Default"
            ],

            [
              "Path",
              parsed.pathname
            ],

            [
              "Query",
              parsed.search || "None"
            ],

            [
              "Hash",
              parsed.hash || "None"
            ]
          ];

          output.innerHTML = `
            <div class="tool-stat-grid">

              ${values
                .map(
                  ([label, value]) => `
                    <div class="tool-stat">

                      <span>
                        ${escapeHTML(
                          label
                        )}
                      </span>

                      <strong>
                        ${escapeHTML(
                          value
                        )}
                      </strong>

                    </div>
                  `
                )
                .join("")}

            </div>
          `;

          addHistory(
            "url-parser"
          );
        } catch {
          output.innerHTML = "";

          showToast(
            "Invalid URL",
            "Enter a complete URL including http:// or https://.",
            "error"
          );
        }
      }
    );
}


/* =========================================================
   80. TIMESTAMP CONVERTER
========================================================= */

function renderTimestampConverter() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-panel">

        <h2>
          Timestamp Converter
        </h2>

        <p>
          Convert between Unix timestamps
          and readable dates.
        </p>

        <div class="tool-controls">

          <div class="tool-control">

            <label>
              Unix Timestamp
            </label>

            <input
              class="tool-input timestamp-input"
              type="number"
              placeholder="1761091200"
            >

          </div>

          <div class="tool-control">

            <label>
              Date & Time
            </label>

            <input
              class="tool-input datetime-input"
              type="datetime-local"
            >

          </div>

        </div>

        <div class="tool-actions">

          <button
            class="tool-button primary timestamp-to-date"
            type="button"
          >
            Timestamp → Date
          </button>

          <button
            class="tool-button date-to-timestamp"
            type="button"
          >
            Date → Timestamp
          </button>

          <button
            class="tool-button timestamp-now"
            type="button"
          >
            Current Time
          </button>

        </div>

        <div
          class="timestamp-result"
        ></div>

      </div>

    </div>
  `;

  const timestampInput =
    workspaceContent.querySelector(
      ".timestamp-input"
    );

  const dateInput =
    workspaceContent.querySelector(
      ".datetime-input"
    );

  const result =
    workspaceContent.querySelector(
      ".timestamp-result"
    );

  function renderDateResult(
    date
  ) {
    if (
      Number.isNaN(
        date.getTime()
      )
    ) {
      showToast(
        "Invalid date",
        "Unable to convert this value.",
        "error"
      );

      return;
    }

    result.innerHTML = `
      <div class="tool-stat-grid">

        <div class="tool-stat">
          <span>
            LOCAL
          </span>

          <strong>
            ${escapeHTML(
              date.toLocaleString()
            )}
          </strong>
        </div>

        <div class="tool-stat">
          <span>
            UTC
          </span>

          <strong>
            ${escapeHTML(
              date.toUTCString()
            )}
          </strong>
        </div>

        <div class="tool-stat">
          <span>
            ISO
          </span>

          <strong>
            ${escapeHTML(
              date.toISOString()
            )}
          </strong>
        </div>

        <div class="tool-stat">
          <span>
            UNIX
          </span>

          <strong>
            ${Math.floor(
              date.getTime() /
              1000
            )}
          </strong>
        </div>

      </div>
    `;
  }

  workspaceContent
    .querySelector(
      ".timestamp-to-date"
    )
    .addEventListener(
      "click",
      () => {
        const raw =
          Number(
            timestampInput.value
          );

        if (
          !Number.isFinite(raw)
        ) {
          return;
        }

        const milliseconds =
          raw < 100000000000
            ? raw * 1000
            : raw;

        renderDateResult(
          new Date(
            milliseconds
          )
        );
      }
    );

  workspaceContent
    .querySelector(
      ".date-to-timestamp"
    )
    .addEventListener(
      "click",
      () => {
        if (!dateInput.value) {
          return;
        }

        const date =
          new Date(
            dateInput.value
          );

        timestampInput.value =
          Math.floor(
            date.getTime() /
            1000
          );

        renderDateResult(
          date
        );
      }
    );

  workspaceContent
    .querySelector(
      ".timestamp-now"
    )
    .addEventListener(
      "click",
      () => {
        const now =
          new Date();

        timestampInput.value =
          Math.floor(
            now.getTime() /
            1000
          );

        renderDateResult(
          now
        );
      }
    );
}


/* =========================================================
   81. HEX HELPERS
========================================================= */

function normalizeHexColor(
  hex
) {
  let value =
    String(hex)
      .trim()
      .replace("#", "");

  if (value.length === 3) {
    value =
      value
        .split("")
        .map(
          (character) =>
            character +
            character
        )
        .join("");
  }

  if (
    !/^[0-9a-fA-F]{6}$/
      .test(value)
  ) {
    return null;
  }

  return `#${value.toUpperCase()}`;
}


function hexToRGB(hex) {
  const normalized =
    normalizeHexColor(hex);

  if (!normalized) {
    return null;
  }

  return {
    r:
      parseInt(
        normalized.slice(
          1,
          3
        ),
        16
      ),

    g:
      parseInt(
        normalized.slice(
          3,
          5
        ),
        16
      ),

    b:
      parseInt(
        normalized.slice(
          5,
          7
        ),
        16
      )
  };
}


function rgbToHSL(
  r,
  g,
  b
) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max =
    Math.max(r, g, b);

  const min =
    Math.min(r, g, b);

  let h = 0;
  let s = 0;

  const l =
    (
      max +
      min
    ) / 2;

  if (max !== min) {
    const difference =
      max - min;

    s =
      l > 0.5
        ? difference /
          (
            2 -
            max -
            min
          )
        : difference /
          (
            max +
            min
          );

    switch (max) {
      case r:
        h =
          (
            g -
            b
          ) /
          difference +
          (
            g < b
              ? 6
              : 0
          );
        break;

      case g:
        h =
          (
            b -
            r
          ) /
          difference +
          2;
        break;

      default:
        h =
          (
            r -
            g
          ) /
          difference +
          4;
    }

    h /= 6;
  }

  return {
    h:
      Math.round(
        h * 360
      ),

    s:
      Math.round(
        s * 100
      ),

    l:
      Math.round(
        l * 100
      )
  };
}


/* =========================================================
   82. COLOR CONVERTER
========================================================= */

function renderColorConverter() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-panel">

        <h2>
          Color Converter
        </h2>

        <p>
          Convert HEX colors into RGB
          and HSL values.
        </p>

        <div class="tool-controls">

          <div class="tool-control">

            <label>
              Pick Color
            </label>

            <input
              class="tool-input color-picker-input"
              type="color"
              value="#31C8FF"
            >

          </div>

          <div class="tool-control">

            <label>
              HEX
            </label>

            <input
              class="tool-input color-hex-input"
              type="text"
              value="#31C8FF"
            >

          </div>

        </div>

        <div class="tool-actions">

          <button
            class="tool-button primary convert-color"
            type="button"
          >
            Convert
          </button>

        </div>

        <div
          class="color-converter-result"
        ></div>

      </div>

    </div>
  `;

  const picker =
    workspaceContent.querySelector(
      ".color-picker-input"
    );

  const hexInput =
    workspaceContent.querySelector(
      ".color-hex-input"
    );

  const result =
    workspaceContent.querySelector(
      ".color-converter-result"
    );

  function convert() {
    const normalized =
      normalizeHexColor(
        hexInput.value
      );

    if (!normalized) {
      showToast(
        "Invalid HEX",
        "Use a color such as #31C8FF.",
        "error"
      );

      return;
    }

    const rgb =
      hexToRGB(
        normalized
      );

    const hsl =
      rgbToHSL(
        rgb.r,
        rgb.g,
        rgb.b
      );

    picker.value =
      normalized;

    hexInput.value =
      normalized;

    result.innerHTML = `
      <div
        style="
          width: 100%;
          height: 110px;
          margin-top: 18px;
          border-radius: 18px;
          background: ${normalized};
          border: 1px solid rgba(255,255,255,.1);
        "
      ></div>

      <div class="tool-stat-grid">

        <div class="tool-stat">
          <span>
            HEX
          </span>

          <strong>
            ${normalized}
          </strong>
        </div>

        <div class="tool-stat">
          <span>
            RGB
          </span>

          <strong>
            rgb(${rgb.r}, ${rgb.g}, ${rgb.b})
          </strong>
        </div>

        <div class="tool-stat">
          <span>
            HSL
          </span>

          <strong>
            hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)
          </strong>
        </div>

      </div>
    `;
  }

  picker.addEventListener(
    "input",
    () => {
      hexInput.value =
        picker.value.toUpperCase();

      convert();
    }
  );

  workspaceContent
    .querySelector(
      ".convert-color"
    )
    .addEventListener(
      "click",
      convert
    );

  convert();
}


/* =========================================================
   83. METADATA VIEWER
========================================================= */

function renderMetadataViewer() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div
          class="workspace-placeholder-icon"
        >
          <i
            class="fa-solid fa-circle-info"
          ></i>
        </div>

        <h2>
          File Metadata
        </h2>

        <p>
          View metadata the browser can
          access without uploading the file.
        </p>

        <input
          class="metadata-input"
          type="file"
          hidden
        >

        <button
          class="tool-button metadata-select"
          type="button"
        >
          <i
            class="fa-solid fa-folder-open"
          ></i>

          Choose File
        </button>

      </div>

      <div
        class="metadata-result"
      ></div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".metadata-input"
    );

  const result =
    workspaceContent.querySelector(
      ".metadata-result"
    );

  workspaceContent
    .querySelector(
      ".metadata-select"
    )
    .addEventListener(
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

      const detected =
        detectFileType(
          file
        );

      const information = [
        [
          "Name",
          file.name
        ],

        [
          "Type",
          detected.type
        ],

        [
          "MIME",
          file.type ||
          "Unknown"
        ],

        [
          "Format",
          detected.extension ||
          "Unknown"
        ],

        [
          "Size",
          formatBytes(
            file.size
          )
        ],

        [
          "Modified",
          new Date(
            file.lastModified
          ).toLocaleString()
        ]
      ];

      if (
        detected.type ===
        "image"
      ) {
        try {
          const image =
            await loadImageFromFile(
              file
            );

          information.push(
            [
              "Width",
              `${image.naturalWidth}px`
            ],
            [
              "Height",
              `${image.naturalHeight}px`
            ],
            [
              "Pixels",
              (
                image.naturalWidth *
                image.naturalHeight
              ).toLocaleString()
            ]
          );
        } catch {
          // Basic metadata remains available.
        }
      }

      result.innerHTML = `
        <div class="tool-panel">

          <div class="tool-stat-grid">

            ${information
              .map(
                ([label, value]) => `
                  <div class="tool-stat">

                    <span>
                      ${escapeHTML(
                        label
                      )}
                    </span>

                    <strong>
                      ${escapeHTML(
                        String(value)
                      )}
                    </strong>

                  </div>
                `
              )
              .join("")}

          </div>

          <div class="tool-notice">

            <i
              class="fa-solid fa-shield-halved"
            ></i>

            <span>
              This viewer only displays
              metadata exposed by the browser.
              Full EXIF parsing requires a
              dedicated EXIF parser.
            </span>

          </div>

        </div>
      `;

      addHistory(
        "metadata-viewer",
        {
          fileName:
            file.name
        }
      );
    }
  );
}


/* =========================================================
   84. TOOL ENGINE READY
========================================================= */

console.log(
  "[SENN TOOLS] Tool Engine Part 3 ready."
);


/* =========================================================
   PART 3 END

   ACTIVE TOOLS:
   ✓ Image Resizer
   ✓ Image Compressor
   ✓ Image Converter
   ✓ Image Upscaler
   ✓ Photo Enhancer
   ✓ Video Thumbnail
   ✓ JSON Formatter
   ✓ Base64
   ✓ Word Counter
   ✓ Password Generator
   ✓ UUID Generator
   ✓ Hash Generator
   ✓ URL Parser
   ✓ Timestamp Converter
   ✓ Color Converter
   ✓ Metadata Viewer

   NEXT:
   - QR Generator
   - JSON ↔ CSV
   - Image → PDF
   - PDF Engine
   - Processing Overlay
   - Better Recent Activity
   - Tool Workspace polish
   - Smart Drop → automatic workspace sync
========================================================= */
