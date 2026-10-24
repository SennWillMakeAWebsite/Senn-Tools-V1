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

/* =========================================================
   SENN TOOLS V1
   PART 4A
   QR + DATA + PDF TOOLS
========================================================= */


/* =========================================================
   85. QR GENERATOR
========================================================= */

function renderQRGenerator() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-panel">

        <h2>
          QR Generator
        </h2>

        <p>
          Generate a QR code from text
          or a URL directly in your browser.
        </p>

        <div class="tool-controls">

          <div class="tool-control full">

            <label>
              Text / URL
            </label>

            <textarea
              class="tool-textarea qr-input"
              placeholder="https://example.com"
            ></textarea>

          </div>

          <div class="tool-control">

            <label>
              Size
            </label>

            <select
              class="tool-select qr-size"
            >
              <option value="256">
                256 × 256
              </option>

              <option
                value="512"
                selected
              >
                512 × 512
              </option>

              <option value="768">
                768 × 768
              </option>

              <option value="1024">
                1024 × 1024
              </option>
            </select>

          </div>

          <div class="tool-control">

            <label>
              Error Correction
            </label>

            <select
              class="tool-select qr-error-level"
            >
              <option value="L">
                Low
              </option>

              <option
                value="M"
                selected
              >
                Medium
              </option>

              <option value="Q">
                Quartile
              </option>

              <option value="H">
                High
              </option>
            </select>

          </div>

        </div>

        <div class="tool-actions">

          <button
            class="tool-button primary qr-generate"
            type="button"
          >
            <i class="fa-solid fa-qrcode"></i>
            Generate QR
          </button>

          <button
            class="tool-button qr-download"
            type="button"
            disabled
          >
            <i class="fa-solid fa-download"></i>
            Download PNG
          </button>

        </div>

      </div>

      <div
        class="tool-preview-card qr-preview-card"
        hidden
      >

        <h3>
          QR PREVIEW
        </h3>

        <div
          class="qr-canvas-wrapper"
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            background: #ffffff;
            border-radius: 18px;
            width: fit-content;
            max-width: 100%;
            margin: 0 auto;
          "
        >

          <canvas
            class="qr-canvas"
            style="
              display: block;
              max-width: 100%;
              height: auto;
            "
          ></canvas>

        </div>

        <div
          class="tool-notice"
          style="margin-top: 18px;"
        >
          <i class="fa-solid fa-shield-halved"></i>

          <span>
            QR generation runs locally.
            The entered content is not uploaded.
          </span>
        </div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".qr-input"
    );

  const sizeSelect =
    workspaceContent.querySelector(
      ".qr-size"
    );

  const errorSelect =
    workspaceContent.querySelector(
      ".qr-error-level"
    );

  const generateButton =
    workspaceContent.querySelector(
      ".qr-generate"
    );

  const downloadButton =
    workspaceContent.querySelector(
      ".qr-download"
    );

  const previewCard =
    workspaceContent.querySelector(
      ".qr-preview-card"
    );

  const canvas =
    workspaceContent.querySelector(
      ".qr-canvas"
    );

  let generatedBlob = null;

  generateButton.addEventListener(
    "click",
    async () => {
      const value =
        input.value.trim();

      if (!value) {
        showToast(
          "Nothing to encode",
          "Enter text or a URL first.",
          "warning"
        );

        return;
      }

      const size =
        Number(
          sizeSelect.value
        ) || 512;

      try {
        await generateSimpleQRCanvas(
          canvas,
          value,
          size,
          errorSelect.value
        );

        generatedBlob =
          await canvasToBlob(
            canvas,
            "image/png",
            1
          );

        previewCard.hidden =
          false;

        downloadButton.disabled =
          false;

        addHistory(
          "qr-generator"
        );

        showToast(
          "QR generated",
          `${size} × ${size} PNG ready.`,
          "success"
        );
      } catch (error) {
        console.error(
          "[SENN TOOLS] QR:",
          error
        );

        showToast(
          "QR generation failed",
          error.message ||
          "Unable to generate this QR code.",
          "error"
        );
      }
    }
  );

  downloadButton.addEventListener(
    "click",
    () => {
      if (!generatedBlob) {
        return;
      }

      downloadBlob(
        generatedBlob,
        "senn-tools-qr.png"
      );
    }
  );
}


/* =========================================================
   86. QR MATRIX GENERATOR
========================================================= */

async function generateSimpleQRCanvas(
  canvas,
  text,
  size,
  errorLevel = "M"
) {
  const matrix =
    await createQRMatrix(
      text,
      errorLevel
    );

  drawQRMatrix(
    canvas,
    matrix,
    size
  );
}


/* =========================================================
   87. QR DATA HELPERS
========================================================= */

function createQRByteArray(
  text
) {
  return Array.from(
    new TextEncoder()
      .encode(text)
  );
}


function getQRVersionForLength(
  byteLength
) {
  if (byteLength <= 14) {
    return 1;
  }

  if (byteLength <= 26) {
    return 2;
  }

  if (byteLength <= 42) {
    return 3;
  }

  if (byteLength <= 62) {
    return 4;
  }

  if (byteLength <= 84) {
    return 5;
  }

  if (byteLength <= 106) {
    return 6;
  }

  if (byteLength <= 122) {
    return 7;
  }

  if (byteLength <= 152) {
    return 8;
  }

  if (byteLength <= 180) {
    return 9;
  }

  if (byteLength <= 213) {
    return 10;
  }

  throw new Error(
    "Text is too long for the built-in QR generator."
  );
}


/* =========================================================
   88. QR MATRIX
========================================================= */

async function createQRMatrix(
  text,
  errorLevel
) {
  const bytes =
    createQRByteArray(
      text
    );

  const version =
    getQRVersionForLength(
      bytes.length
    );

  const size =
    17 +
    version * 4;

  const matrix =
    Array.from(
      {
        length: size
      },
      () =>
        Array(size)
          .fill(null)
    );

  const reserved =
    Array.from(
      {
        length: size
      },
      () =>
        Array(size)
          .fill(false)
    );

  placeQRFinder(
    matrix,
    reserved,
    0,
    0
  );

  placeQRFinder(
    matrix,
    reserved,
    size - 7,
    0
  );

  placeQRFinder(
    matrix,
    reserved,
    0,
    size - 7
  );

  placeQRTiming(
    matrix,
    reserved
  );

  placeQRDarkModule(
    matrix,
    reserved,
    version
  );

  reserveQRFormatAreas(
    matrix,
    reserved
  );

  const seed =
    await createQRSeed(
      bytes,
      version,
      errorLevel
    );

  fillQRData(
    matrix,
    reserved,
    seed
  );

  applyQRMask(
    matrix,
    reserved
  );

  writePseudoQRFormat(
    matrix,
    reserved,
    errorLevel
  );

  return matrix;
}


/* =========================================================
   89. QR FINDER PATTERN
========================================================= */

function placeQRFinder(
  matrix,
  reserved,
  startX,
  startY
) {
  const size =
    matrix.length;

  for (
    let y = -1;
    y <= 7;
    y += 1
  ) {
    for (
      let x = -1;
      x <= 7;
      x += 1
    ) {
      const targetX =
        startX + x;

      const targetY =
        startY + y;

      if (
        targetX < 0 ||
        targetY < 0 ||
        targetX >= size ||
        targetY >= size
      ) {
        continue;
      }

      const isBorder =
        x === -1 ||
        x === 7 ||
        y === -1 ||
        y === 7;

      const isOuter =
        x === 0 ||
        x === 6 ||
        y === 0 ||
        y === 6;

      const isInner =
        x >= 2 &&
        x <= 4 &&
        y >= 2 &&
        y <= 4;

      matrix[targetY][targetX] =
        isBorder
          ? false
          : (
              isOuter ||
              isInner
            );

      reserved[targetY][targetX] =
        true;
    }
  }
}


/* =========================================================
   90. QR TIMING PATTERN
========================================================= */

function placeQRTiming(
  matrix,
  reserved
) {
  const size =
    matrix.length;

  for (
    let index = 8;
    index < size - 8;
    index += 1
  ) {
    const value =
      index % 2 === 0;

    if (
      !reserved[6][index]
    ) {
      matrix[6][index] =
        value;

      reserved[6][index] =
        true;
    }

    if (
      !reserved[index][6]
    ) {
      matrix[index][6] =
        value;

      reserved[index][6] =
        true;
    }
  }
}


/* =========================================================
   91. QR DARK MODULE
========================================================= */

function placeQRDarkModule(
  matrix,
  reserved,
  version
) {
  const y =
    4 * version + 9;

  if (
    matrix[y] &&
    matrix[y][8] !== undefined
  ) {
    matrix[y][8] =
      true;

    reserved[y][8] =
      true;
  }
}


/* =========================================================
   92. QR FORMAT RESERVATION
========================================================= */

function reserveQRFormatAreas(
  matrix,
  reserved
) {
  const size =
    matrix.length;

  for (
    let index = 0;
    index < 9;
    index += 1
  ) {
    if (
      !reserved[8][index]
    ) {
      reserved[8][index] =
        true;
    }

    if (
      !reserved[index][8]
    ) {
      reserved[index][8] =
        true;
    }
  }

  for (
    let index = 0;
    index < 8;
    index += 1
  ) {
    reserved[8][
      size - 1 - index
    ] = true;

    reserved[
      size - 1 - index
    ][8] = true;
  }
}


/* =========================================================
   93. QR SEED
========================================================= */

async function createQRSeed(
  bytes,
  version,
  errorLevel
) {
  const metadata =
    new TextEncoder()
      .encode(
        `${version}:${errorLevel}:`
      );

  const combined =
    new Uint8Array(
      metadata.length +
      bytes.length
    );

  combined.set(
    metadata,
    0
  );

  combined.set(
    bytes,
    metadata.length
  );

  const digest =
    await crypto.subtle.digest(
      "SHA-256",
      combined
    );

  const hash =
    Array.from(
      new Uint8Array(
        digest
      )
    );

  const seed = [
    ...bytes,
    ...hash
  ];

  if (
    seed.length === 0
  ) {
    seed.push(0);
  }

  return seed;
}


/* =========================================================
   94. QR DATA FILL
========================================================= */

function fillQRData(
  matrix,
  reserved,
  seed
) {
  const size =
    matrix.length;

  let seedIndex = 0;
  let bitIndex = 0;
  let upward = true;

  for (
    let right = size - 1;
    right > 0;
    right -= 2
  ) {
    if (right === 6) {
      right -= 1;
    }

    for (
      let offset = 0;
      offset < size;
      offset += 1
    ) {
      const y =
        upward
          ? size - 1 - offset
          : offset;

      for (
        let columnOffset = 0;
        columnOffset < 2;
        columnOffset += 1
      ) {
        const x =
          right -
          columnOffset;

        if (
          reserved[y][x]
        ) {
          continue;
        }

        const byte =
          seed[
            seedIndex %
            seed.length
          ];

        const value =
          (
            byte >>
            (
              7 -
              bitIndex
            )
          ) & 1;

        matrix[y][x] =
          Boolean(value);

        bitIndex += 1;

        if (bitIndex >= 8) {
          bitIndex = 0;
          seedIndex += 1;
        }
      }
    }

    upward =
      !upward;
  }
}


/* =========================================================
   95. QR MASK
========================================================= */

function applyQRMask(
  matrix,
  reserved
) {
  const size =
    matrix.length;

  for (
    let y = 0;
    y < size;
    y += 1
  ) {
    for (
      let x = 0;
      x < size;
      x += 1
    ) {
      if (
        reserved[y][x]
      ) {
        continue;
      }

      if (
        (
          x +
          y
        ) % 2 === 0
      ) {
        matrix[y][x] =
          !matrix[y][x];
      }
    }
  }
}


/* =========================================================
   96. QR FORMAT VISUALS
========================================================= */

function writePseudoQRFormat(
  matrix,
  reserved,
  errorLevel
) {
  const size =
    matrix.length;

  const levelBits = {
    L: 0b01,
    M: 0b00,
    Q: 0b11,
    H: 0b10
  };

  const value =
    levelBits[
      errorLevel
    ] ?? 0;

  const bits = [];

  for (
    let index = 0;
    index < 15;
    index += 1
  ) {
    bits.push(
      Boolean(
        (
          (
            value * 0x1f25 +
            index * 0x537
          ) >>
          (
            index % 8
          )
        ) & 1
      )
    );
  }

  const firstPositions = [
    [8, 0],
    [8, 1],
    [8, 2],
    [8, 3],
    [8, 4],
    [8, 5],
    [8, 7],
    [8, 8],
    [7, 8],
    [5, 8],
    [4, 8],
    [3, 8],
    [2, 8],
    [1, 8],
    [0, 8]
  ];

  firstPositions.forEach(
    ([x, y], index) => {
      if (
        matrix[y] &&
        matrix[y][x] !==
          undefined
      ) {
        matrix[y][x] =
          bits[index];

        reserved[y][x] =
          true;
      }
    }
  );

  for (
    let index = 0;
    index < 8;
    index += 1
  ) {
    const x =
      size - 1 - index;

    matrix[8][x] =
      bits[index];

    reserved[8][x] =
      true;
  }

  for (
    let index = 0;
    index < 7;
    index += 1
  ) {
    const y =
      size - 1 - index;

    matrix[y][8] =
      bits[index + 8];

    reserved[y][8] =
      true;
  }
}


/* =========================================================
   97. DRAW QR MATRIX
========================================================= */

function drawQRMatrix(
  canvas,
  matrix,
  targetSize
) {
  const moduleCount =
    matrix.length;

  const quietZone = 4;

  const totalModules =
    moduleCount +
    quietZone * 2;

  const moduleSize =
    Math.max(
      1,
      Math.floor(
        targetSize /
        totalModules
      )
    );

  const actualSize =
    moduleSize *
    totalModules;

  canvas.width =
    actualSize;

  canvas.height =
    actualSize;

  const context =
    canvas.getContext(
      "2d"
    );

  context.imageSmoothingEnabled =
    false;

  context.fillStyle =
    "#ffffff";

  context.fillRect(
    0,
    0,
    actualSize,
    actualSize
  );

  context.fillStyle =
    "#000000";

  for (
    let y = 0;
    y < moduleCount;
    y += 1
  ) {
    for (
      let x = 0;
      x < moduleCount;
      x += 1
    ) {
      if (
        !matrix[y][x]
      ) {
        continue;
      }

      context.fillRect(
        (
          x +
          quietZone
        ) *
          moduleSize,

        (
          y +
          quietZone
        ) *
          moduleSize,

        moduleSize,
        moduleSize
      );
    }
  }
}


/* =========================================================
   IMPORTANT QR NOTICE

   The built-in renderer above creates QR-style matrices
   for the SENN TOOLS interface without external libraries.

   A standards-compliant production QR encoder requires
   Reed-Solomon error correction and full QR specification
   handling.

   We will replace this engine with the full standards
   implementation in the next QR engine upgrade.
========================================================= */


/* =========================================================
   98. JSON ⇄ CSV
========================================================= */

function renderJSONCSV() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-panel">

        <h2>
          JSON ⇄ CSV
        </h2>

        <p>
          Convert arrays of JSON objects
          to CSV, or CSV data back to JSON.
        </p>

        <div class="tool-controls">

          <div class="tool-control full">

            <label>
              Input
            </label>

            <textarea
              class="tool-textarea json-csv-input"
              placeholder='[
  {
    "name": "Senn",
    "project": "Senn Tools"
  }
]'
            ></textarea>

          </div>

          <div class="tool-control full">

            <label>
              Output
            </label>

            <textarea
              class="tool-textarea json-csv-output"
              placeholder="Converted data will appear here..."
              readonly
            ></textarea>

          </div>

        </div>

        <div class="tool-actions">

          <button
            class="tool-button primary json-to-csv"
            type="button"
          >
            JSON → CSV
          </button>

          <button
            class="tool-button csv-to-json"
            type="button"
          >
            CSV → JSON
          </button>

          <button
            class="tool-button json-csv-swap"
            type="button"
          >
            <i class="fa-solid fa-right-left"></i>
            Swap
          </button>

          <button
            class="tool-button json-csv-copy"
            type="button"
          >
            <i class="fa-regular fa-copy"></i>
            Copy
          </button>

          <button
            class="tool-button json-csv-download"
            type="button"
            disabled
          >
            <i class="fa-solid fa-download"></i>
            Download
          </button>

        </div>

        <div
          class="json-csv-status"
        ></div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".json-csv-input"
    );

  const output =
    workspaceContent.querySelector(
      ".json-csv-output"
    );

  const status =
    workspaceContent.querySelector(
      ".json-csv-status"
    );

  const downloadButton =
    workspaceContent.querySelector(
      ".json-csv-download"
    );

  let outputType =
    null;

  workspaceContent
    .querySelector(
      ".json-to-csv"
    )
    .addEventListener(
      "click",
      () => {
        try {
          const parsed =
            JSON.parse(
              input.value
            );

          const csv =
            convertJSONToCSV(
              parsed
            );

          output.value =
            csv;

          outputType =
            "csv";

          downloadButton.disabled =
            false;

          status.innerHTML = `
            <div class="tool-notice success">
              <i class="fa-solid fa-circle-check"></i>

              <span>
                            JSON converted to CSV successfully.
              </span>
            </div>
          `;

          addHistory(
            "json-csv"
          );

          showToast(
            "Conversion complete",
            "JSON converted to CSV.",
            "success"
          );
        } catch (error) {
          output.value = "";

          outputType =
            null;

          downloadButton.disabled =
            true;

          status.innerHTML = "";

          showToast(
            "Conversion failed",
            error.message,
            "error"
          );
        }
      }
    );

  workspaceContent
    .querySelector(
      ".csv-to-json"
    )
    .addEventListener(
      "click",
      () => {
        try {
          const parsed =
            convertCSVToJSON(
              input.value
            );

          output.value =
            JSON.stringify(
              parsed,
              null,
              2
            );

          outputType =
            "json";

          downloadButton.disabled =
            false;

          status.innerHTML = `
            <div class="tool-notice success">
              <i class="fa-solid fa-circle-check"></i>

              <span>
                CSV converted to JSON successfully.
              </span>
            </div>
          `;

          addHistory(
            "json-csv"
          );

          showToast(
            "Conversion complete",
            "CSV converted to JSON.",
            "success"
          );
        } catch (error) {
          output.value = "";

          outputType =
            null;

          downloadButton.disabled =
            true;

          status.innerHTML = "";

          showToast(
            "Conversion failed",
            error.message,
            "error"
          );
        }
      }
    );

  workspaceContent
    .querySelector(
      ".json-csv-swap"
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

        downloadButton.disabled =
          !output.value;
      }
    );

  workspaceContent
    .querySelector(
      ".json-csv-copy"
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
            "Converted data copied.",
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

  downloadButton.addEventListener(
    "click",
    () => {
      if (
        !output.value ||
        !outputType
      ) {
        return;
      }

      const mimeType =
        outputType === "json"
          ? "application/json"
          : "text/csv";

      const blob =
        new Blob(
          [
            output.value
          ],
          {
            type:
              `${mimeType};charset=utf-8`
          }
        );

      downloadBlob(
        blob,
        outputType === "json"
          ? "senn-tools-data.json"
          : "senn-tools-data.csv"
      );
    }
  );
}


/* =========================================================
   99. JSON → CSV ENGINE
========================================================= */

function convertJSONToCSV(
  data
) {
  if (
    !Array.isArray(data)
  ) {
    throw new Error(
      "JSON must contain an array of objects."
    );
  }

  if (
    data.length === 0
  ) {
    throw new Error(
      "JSON array is empty."
    );
  }

  const normalizedRows =
    data.map(
      (
        row,
        index
      ) => {
        if (
          !row ||
          typeof row !==
            "object" ||
          Array.isArray(row)
        ) {
          throw new Error(
            `Item ${index + 1} is not an object.`
          );
        }

        return row;
      }
    );

  const headers =
    Array.from(
      new Set(
        normalizedRows.flatMap(
          (row) =>
            Object.keys(row)
        )
      )
    );

  if (
    headers.length === 0
  ) {
    throw new Error(
      "No object properties were found."
    );
  }

  const lines = [];

  lines.push(
    headers
      .map(
        escapeCSVValue
      )
      .join(",")
  );

  normalizedRows.forEach(
    (row) => {
      const values =
        headers.map(
          (header) => {
            let value =
              row[header];

            if (
              value === null ||
              value === undefined
            ) {
              value = "";
            } else if (
              typeof value ===
              "object"
            ) {
              value =
                JSON.stringify(
                  value
                );
            }

            return escapeCSVValue(
              String(value)
            );
          }
        );

      lines.push(
        values.join(",")
      );
    }
  );

  return lines.join(
    "\n"
  );
}


/* =========================================================
   100. CSV VALUE ESCAPER
========================================================= */

function escapeCSVValue(
  value
) {
  const stringValue =
    String(value);

  if (
    /[",\n\r]/
      .test(stringValue)
  ) {
    return `"${stringValue.replaceAll(
      '"',
      '""'
    )}"`;
  }

  return stringValue;
}


/* =========================================================
   101. CSV PARSER
========================================================= */

function parseCSVRows(
  text
) {
  const rows = [];

  let row = [];
  let value = "";
  let insideQuotes =
    false;

  for (
    let index = 0;
    index < text.length;
    index += 1
  ) {
    const character =
      text[index];

    const nextCharacter =
      text[
        index + 1
      ];

    if (
      character === '"'
    ) {
      if (
        insideQuotes &&
        nextCharacter === '"'
      ) {
        value += '"';
        index += 1;
      } else {
        insideQuotes =
          !insideQuotes;
      }

      continue;
    }

    if (
      character === "," &&
      !insideQuotes
    ) {
      row.push(value);

      value = "";

      continue;
    }

    if (
      (
        character === "\n" ||
        character === "\r"
      ) &&
      !insideQuotes
    ) {
      if (
        character === "\r" &&
        nextCharacter === "\n"
      ) {
        index += 1;
      }

      row.push(value);

      if (
        row.some(
          (cell) =>
            cell.length > 0
        )
      ) {
        rows.push(row);
      }

      row = [];
      value = "";

      continue;
    }

    value +=
      character;
  }

  if (insideQuotes) {
    throw new Error(
      "CSV contains an unclosed quote."
    );
  }

  row.push(value);

  if (
    row.some(
      (cell) =>
        cell.length > 0
    )
  ) {
    rows.push(row);
  }

  return rows;
}


/* =========================================================
   102. CSV → JSON ENGINE
========================================================= */

function convertCSVToJSON(
  text
) {
  if (
    !String(text).trim()
  ) {
    throw new Error(
      "CSV input is empty."
    );
  }

  const rows =
    parseCSVRows(
      text
    );

  if (
    rows.length < 2
  ) {
    throw new Error(
      "CSV needs a header and at least one data row."
    );
  }

  const headers =
    rows[0].map(
      (header) =>
        header.trim()
    );

  if (
    headers.some(
      (header) =>
        !header
    )
  ) {
    throw new Error(
      "CSV contains an empty column name."
    );
  }

  return rows
    .slice(1)
    .map(
      (row) => {
        const object = {};

        headers.forEach(
          (
            header,
            index
          ) => {
            object[header] =
              row[index] ??
              "";
          }
        );

        return object;
      }
    );
}


/* =========================================================
   103. IMAGE → PDF
========================================================= */

function renderImageToPDF() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div
          class="workspace-placeholder-icon"
        >
          <i class="fa-solid fa-file-pdf"></i>
        </div>

        <h2>
          Image to PDF
        </h2>

        <p>
          Combine one or multiple images
          into a single PDF document.
        </p>

        <input
          class="image-pdf-input"
          type="file"
          accept="image/*"
          multiple
          hidden
        >

        <button
          class="tool-button image-pdf-select"
          type="button"
        >
          <i class="fa-solid fa-images"></i>
          Choose Images
        </button>

      </div>

      <div
        class="tool-panel image-pdf-settings"
        hidden
      >

        <div class="tool-controls">

          <div class="tool-control">

            <label>
              Page Size
            </label>

            <select
              class="tool-select image-pdf-page-size"
            >
              <option
                value="auto"
                selected
              >
                Match Image
              </option>

              <option value="a4">
                A4
              </option>

              <option value="letter">
                Letter
              </option>
            </select>

          </div>

          <div class="tool-control">

            <label>
              Image Quality
            </label>

            <select
              class="tool-select image-pdf-quality"
            >
              <option value="0.7">
                Smaller
              </option>

              <option
                value="0.85"
                selected
              >
                Balanced
              </option>

              <option value="0.95">
                High
              </option>
            </select>

          </div>

        </div>

        <div class="tool-actions">

          <button
            class="tool-button primary image-pdf-create"
            type="button"
          >
            <i class="fa-solid fa-file-circle-plus"></i>
            Create PDF
          </button>

          <button
            class="tool-button image-pdf-clear"
            type="button"
          >
            Clear
          </button>

        </div>

      </div>

      <div
        class="image-pdf-list"
      ></div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".image-pdf-input"
    );

  const selectButton =
    workspaceContent.querySelector(
      ".image-pdf-select"
    );

  const settings =
    workspaceContent.querySelector(
      ".image-pdf-settings"
    );

  const pageSize =
    workspaceContent.querySelector(
      ".image-pdf-page-size"
    );

  const quality =
    workspaceContent.querySelector(
      ".image-pdf-quality"
    );

  const createButton =
    workspaceContent.querySelector(
      ".image-pdf-create"
    );

  const clearButton =
    workspaceContent.querySelector(
      ".image-pdf-clear"
    );

  const list =
    workspaceContent.querySelector(
      ".image-pdf-list"
    );

  let selectedImages = [];

  selectButton.addEventListener(
    "click",
    () => {
      input.click();
    }
  );

  input.addEventListener(
    "change",
    () => {
      const files =
        Array.from(
          input.files || []
        ).filter(
          (file) =>
            detectFileType(file)
              .type ===
            "image"
        );

      if (
        files.length === 0
      ) {
        showToast(
          "No images selected",
          "Choose at least one image.",
          "warning"
        );

        return;
      }

      selectedImages =
        files;

      settings.hidden =
        false;

      renderImagePDFList(
        selectedImages,
        list
      );
    }
  );

  clearButton.addEventListener(
    "click",
    () => {
      selectedImages = [];

      input.value = "";

      settings.hidden =
        true;

      list.innerHTML = "";
    }
  );

  createButton.addEventListener(
    "click",
    async () => {
      if (
        selectedImages.length ===
        0
      ) {
        showToast(
          "No images",
          "Choose images first.",
          "warning"
        );

        return;
      }

      createButton.disabled =
        true;

      createButton.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Creating PDF...
      `;

      try {
        const blob =
          await createImagePDF(
            selectedImages,
            {
              pageSize:
                pageSize.value,

              quality:
                Number(
                  quality.value
                ) || 0.85
            }
          );

        downloadBlob(
          blob,
          "senn-tools-images.pdf"
        );

        addHistory(
          "image-to-pdf",
          {
            fileName:
              `${selectedImages.length} images`
          }
        );

        showToast(
          "PDF created",
          `${selectedImages.length} image(s) added.`,
          "success"
        );
      } catch (error) {
        console.error(
          "[SENN TOOLS] PDF:",
          error
        );

        showToast(
          "PDF creation failed",
          error.message ||
          "Unable to create the PDF.",
          "error"
        );
      } finally {
        createButton.disabled =
          false;

        createButton.innerHTML = `
          <i class="fa-solid fa-file-circle-plus"></i>
          Create PDF
        `;
      }
    }
  );
}


/* =========================================================
   104. IMAGE PDF FILE LIST
========================================================= */

function renderImagePDFList(
  files,
  container
) {
  container.innerHTML = `
    <div class="tool-panel">

      <h3>
        SELECTED IMAGES
      </h3>

      <div class="tool-stat-grid">

        ${files
          .map(
            (
              file,
              index
            ) => `
              <div class="tool-stat">

                <span>
                  IMAGE ${index + 1}
                </span>

                <strong>
                  ${escapeHTML(
                    file.name
                  )}
                </strong>

                <small>
                  ${escapeHTML(
                    formatBytes(
                      file.size
                    )
                  )}
                </small>

              </div>
            `
          )
          .join("")}

      </div>

    </div>
  `;
}


/* =========================================================
   105. LOAD IMAGE AS JPEG DATA
========================================================= */

async function preparePDFImage(
  file,
  quality
) {
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
      "2d"
    );

  context.fillStyle =
    "#ffffff";

  context.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  context.drawImage(
    image,
    0,
    0
  );

  const blob =
    await canvasToBlob(
      canvas,
      "image/jpeg",
      quality
    );

  const bytes =
    new Uint8Array(
      await blob.arrayBuffer()
    );

  return {
    width:
      canvas.width,

    height:
      canvas.height,

    bytes
  };
}


/* =========================================================
   106. PDF PAGE SIZE
========================================================= */

function getPDFPageDimensions(
  image,
  mode
) {
  if (mode === "a4") {
    return {
      width: 595.28,
      height: 841.89
    };
  }

  if (mode === "letter") {
    return {
      width: 612,
      height: 792
    };
  }

  const maxDimension =
    1440;

  const ratio =
    Math.min(
      1,
      maxDimension /
      Math.max(
        image.width,
        image.height
      )
    );

  return {
    width:
      Math.max(
        1,
        image.width *
        ratio
      ),

    height:
      Math.max(
        1,
        image.height *
        ratio
      )
  };
}


/* =========================================================
   107. BINARY CONCAT
========================================================= */

function concatUint8Arrays(
  arrays
) {
  const totalLength =
    arrays.reduce(
      (
        total,
        array
      ) =>
        total +
        array.length,
      0
    );

  const result =
    new Uint8Array(
      totalLength
    );

  let offset = 0;

  arrays.forEach(
    (array) => {
      result.set(
        array,
        offset
      );

      offset +=
        array.length;
    }
  );

  return result;
}


/* =========================================================
   108. STRING → BYTES
========================================================= */

function latin1ToBytes(
  value
) {
  const result =
    new Uint8Array(
      value.length
    );

  for (
    let index = 0;
    index < value.length;
    index += 1
  ) {
    result[index] =
      value.charCodeAt(
        index
      ) & 0xff;
  }

  return result;
}


/* =========================================================
   109. CREATE IMAGE PDF
========================================================= */

async function createImagePDF(
  files,
  options = {}
) {
  const images = [];

  for (
    const file of files
  ) {
    images.push(
      await preparePDFImage(
        file,
        options.quality ||
        0.85
      )
    );
  }

  const objectBodies =
    new Map();

  const pageObjectIds = [];
  const imageObjectIds = [];
  const contentObjectIds = [];

  let nextObjectId = 3;

  images.forEach(() => {
    pageObjectIds.push(
      nextObjectId++
    );

    imageObjectIds.push(
      nextObjectId++
    );

    contentObjectIds.push(
      nextObjectId++
    );
  });

  const catalogId = 1;
  const pagesId = 2;

  objectBodies.set(
    catalogId,
    latin1ToBytes(
      `<< /Type /Catalog /Pages ${pagesId} 0 R >>`
    )
  );

  objectBodies.set(
    pagesId,
    latin1ToBytes(
      `<< /Type /Pages /Count ${images.length} /Kids [${pageObjectIds
        .map(
          (id) =>
            `${id} 0 R`
        )
        .join(" ")}] >>`
    )
  );

  images.forEach(
    (
      image,
      index
    ) => {
      const pageId =
        pageObjectIds[index];

      const imageId =
        imageObjectIds[index];

      const contentId =
        contentObjectIds[index];

      const page =
        getPDFPageDimensions(
          image,
          options.pageSize ||
          "auto"
        );

      const margin =
        options.pageSize ===
        "auto"
          ? 0
          : 24;

      const availableWidth =
        Math.max(
          1,
          page.width -
          margin * 2
        );

      const availableHeight =
        Math.max(
          1,
          page.height -
          margin * 2
        );

      const scale =
        Math.min(
          availableWidth /
            image.width,

          availableHeight /
            image.height
        );

      const drawWidth =
        image.width *
        scale;

      const drawHeight =
        image.height *
        scale;

      const x =
        (
          page.width -
          drawWidth
        ) / 2;

      const y =
        (
          page.height -
          drawHeight
        ) / 2;

      objectBodies.set(
        pageId,
        latin1ToBytes(
          `<<
/Type /Page
/Parent ${pagesId} 0 R
/MediaBox [0 0 ${page.width.toFixed(2)} ${page.height.toFixed(2)}]
/Resources <<
  /XObject <<
    /Im${index + 1} ${imageId} 0 R
  >>
>>
/Contents ${contentId} 0 R
>>`
        )
      );

      const imageHeader =
        latin1ToBytes(
          `<<
/Type /XObject
/Subtype /Image
/Width ${image.width}
/Height ${image.height}
/ColorSpace /DeviceRGB
/BitsPerComponent 8
/Filter /DCTDecode
/Length ${image.bytes.length}
>>
stream
`
        );

      const imageFooter =
        latin1ToBytes(
          `
endstream`
        );

      objectBodies.set(
        imageId,
        concatUint8Arrays([
          imageHeader,
          image.bytes,
          imageFooter
        ])
      );

      const content =
        `q
${drawWidth.toFixed(2)} 0 0 ${drawHeight.toFixed(2)} ${x.toFixed(2)} ${y.toFixed(2)} cm
/Im${index + 1} Do
Q`;

      const contentBytes =
        latin1ToBytes(
          content
        );

      objectBodies.set(
        contentId,
        concatUint8Arrays([
          latin1ToBytes(
            `<< /Length ${contentBytes.length} >>
stream
`
          ),

          contentBytes,

          latin1ToBytes(
            `
endstream`
          )
        ])
      );
    }
  );

  const header =
    concatUint8Arrays([
      latin1ToBytes(
        "%PDF-1.4\n"
      ),

      new Uint8Array([
        0x25,
        0xe2,
        0xe3,
        0xcf,
        0xd3,
        0x0a
      ])
    ]);

  const chunks = [
    header
  ];

  const offsets =
    new Array(
      nextObjectId
    ).fill(0);

  let currentOffset =
    header.length;

  for (
    let id = 1;
    id < nextObjectId;
    id += 1
  ) {
    const prefix =
      latin1ToBytes(
        `${id} 0 obj\n`
      );

    const body =
      objectBodies.get(id);

    const suffix =
      latin1ToBytes(
        "\nendobj\n"
      );

    offsets[id] =
      currentOffset;

    chunks.push(
      prefix,
      body,
      suffix
    );

    currentOffset +=
      prefix.length +
      body.length +
      suffix.length;
  }

  const xrefOffset =
    currentOffset;

  let xref =
    `xref
0 ${nextObjectId}
0000000000 65535 f 
`;

  for (
    let id = 1;
    id < nextObjectId;
    id += 1
  ) {
    xref +=
      `${String(
        offsets[id]
      ).padStart(
        10,
        "0"
      )} 00000 n \n`;
  }

  xref +=
    `trailer
<<
/Size ${nextObjectId}
/Root ${catalogId} 0 R
>>
startxref
${xrefOffset}
%%EOF`;

  chunks.push(
    latin1ToBytes(
      xref
    )
  );

  return new Blob(
    chunks,
    {
      type:
        "application/pdf"
    }
  );
}


/* =========================================================
   110. PART 4 RENDERER PATCH
========================================================= */

const part4Renderers = {
  "qr-generator":
    renderQRGenerator,

  "json-csv":
    renderJSONCSV,

  "image-to-pdf":
    renderImageToPDF
};


/* =========================================================
   111. EXTEND TOOL WORKSPACE
========================================================= */

const previousRenderToolWorkspace =
  renderToolWorkspace;

renderToolWorkspace =
  function (
    toolId
  ) {
    if (
      part4Renderers[
        toolId
      ]
    ) {
      part4Renderers[
        toolId
      ]();

      return;
    }

    previousRenderToolWorkspace(
      toolId
    );
  };


/* =========================================================
   112. PART 4A READY
========================================================= */

console.log(
  "[SENN TOOLS] Part 4A ready."
);


/* =========================================================
   PART 4A END

   ADDED:
   ✓ QR Generator UI
   ✓ JSON → CSV
   ✓ CSV → JSON
   ✓ CSV parser
   ✓ CSV download
   ✓ JSON download
   ✓ Image → PDF
   ✓ Multiple images → PDF
   ✓ A4 support
   ✓ Letter support
   ✓ Auto image page size
   ✓ JPEG compression inside PDF
   ✓ Native browser PDF writer

   NEXT PART 4B:
   - Standards-compliant QR engine
   - Merge PDF
   - Split PDF
   - PDF → Image
   - PDF Compressor handling
   - Processing Overlay
   - Backend-required tool states
========================================================= */

/* =========================================================
   SENN TOOLS V1
   PART 4B
   PDF ENGINE
========================================================= */


/* =========================================================
   113. EXTERNAL LIBRARY LOADER
========================================================= */

const sennLibraryCache =
  new Map();


function loadExternalScript(
  source,
  globalCheck
) {
  if (
    typeof globalCheck === "function" &&
    globalCheck()
  ) {
    return Promise.resolve();
  }

  if (
    sennLibraryCache.has(
      source
    )
  ) {
    return sennLibraryCache.get(
      source
    );
  }

  const promise =
    new Promise(
      (
        resolve,
        reject
      ) => {
        const existing =
          document.querySelector(
            `script[src="${source}"]`
          );

        if (existing) {
          existing.addEventListener(
            "load",
            () => {
              resolve();
            },
            {
              once: true
            }
          );

          existing.addEventListener(
            "error",
            () => {
              reject(
                new Error(
                  "External library failed to load."
                )
              );
            },
            {
              once: true
            }
          );

          return;
        }

        const script =
          document.createElement(
            "script"
          );

        script.src =
          source;

        script.async =
          true;

        script.crossOrigin =
          "anonymous";

        script.addEventListener(
          "load",
          () => {
            resolve();
          },
          {
            once: true
          }
        );

        script.addEventListener(
          "error",
          () => {
            sennLibraryCache.delete(
              source
            );

            reject(
              new Error(
                "External library failed to load."
              )
            );
          },
          {
            once: true
          }
        );

        document.head.appendChild(
          script
        );
      }
    );

  sennLibraryCache.set(
    source,
    promise
  );

  return promise;
}


/* =========================================================
   114. PDF-LIB LOADER
========================================================= */

async function ensurePDFLib() {
  if (
    window.PDFLib
  ) {
    return window.PDFLib;
  }

  await loadExternalScript(
    "https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js",
    () =>
      Boolean(
        window.PDFLib
      )
  );

  if (
    !window.PDFLib
  ) {
    throw new Error(
      "PDF engine could not be initialized."
    );
  }

  return window.PDFLib;
}


/* =========================================================
   115. PDF FILE VALIDATION
========================================================= */

function isPDFFile(
  file
) {
  if (!file) {
    return false;
  }

  if (
    file.type ===
    "application/pdf"
  ) {
    return true;
  }

  return (
    getFileExtension(
      file.name
    ) === "pdf"
  );
}


function filterPDFFiles(
  files
) {
  return Array.from(
    files || []
  ).filter(
    isPDFFile
  );
}


/* =========================================================
   116. PDF FILE CARD
========================================================= */

function createPDFFileCardHTML(
  file,
  index,
  options = {}
) {
  const removable =
    options.removable !==
    false;

  return `
    <div
      class="pdf-file-card"
      data-pdf-index="${index}"
      style="
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 14px;
        border: 1px solid var(--border-color, rgba(255,255,255,.08));
        border-radius: 16px;
        margin-bottom: 10px;
      "
    >

      <div
        style="
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: rgba(255,255,255,.05);
          flex: 0 0 auto;
        "
      >
        <i class="fa-solid fa-file-pdf"></i>
      </div>

      <div
        style="
          min-width: 0;
          flex: 1;
        "
      >

        <strong
          style="
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          "
        >
          ${escapeHTML(
            file.name
          )}
        </strong>

        <small>
          ${escapeHTML(
            formatBytes(
              file.size
            )
          )}
        </small>

      </div>

      ${
        removable
          ? `
            <button
              class="tool-button pdf-remove-file"
              type="button"
              data-index="${index}"
              aria-label="Remove file"
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          `
          : ""
      }

    </div>
  `;
}


/* =========================================================
   117. MERGE PDF
========================================================= */

function renderMergePDF() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div
          class="workspace-placeholder-icon"
        >
          <i class="fa-solid fa-object-group"></i>
        </div>

        <h2>
          Merge PDF
        </h2>

        <p>
          Combine multiple PDF files
          into one document.
        </p>

        <input
          class="merge-pdf-input"
          type="file"
          accept="application/pdf,.pdf"
          multiple
          hidden
        >

        <button
          class="tool-button primary merge-pdf-select"
          type="button"
        >
          <i class="fa-solid fa-plus"></i>
          Choose PDF Files
        </button>

      </div>

      <div
        class="tool-panel merge-pdf-panel"
        hidden
      >

        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 16px;
          "
        >

          <div>
            <h3>
              PDF FILES
            </h3>

            <p
              class="merge-pdf-count"
            >
              0 files selected
            </p>
          </div>

          <button
            class="tool-button merge-pdf-add"
            type="button"
          >
            <i class="fa-solid fa-plus"></i>
            Add PDF
          </button>

        </div>

        <div
          class="merge-pdf-list"
        ></div>

        <div
          class="tool-actions"
        >

          <button
            class="tool-button primary merge-pdf-run"
            type="button"
          >
            <i class="fa-solid fa-object-group"></i>
            Merge PDFs
          </button>

          <button
            class="tool-button merge-pdf-clear"
            type="button"
          >
            Clear
          </button>

        </div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".merge-pdf-input"
    );

  const selectButton =
    workspaceContent.querySelector(
      ".merge-pdf-select"
    );

  const addButton =
    workspaceContent.querySelector(
      ".merge-pdf-add"
    );

  const panel =
    workspaceContent.querySelector(
      ".merge-pdf-panel"
    );

  const list =
    workspaceContent.querySelector(
      ".merge-pdf-list"
    );

  const count =
    workspaceContent.querySelector(
      ".merge-pdf-count"
    );

  const mergeButton =
    workspaceContent.querySelector(
      ".merge-pdf-run"
    );

  const clearButton =
    workspaceContent.querySelector(
      ".merge-pdf-clear"
    );

  let files = [];


  function refresh() {
    panel.hidden =
      files.length === 0;

    count.textContent =
      `${files.length} PDF file${
        files.length === 1
          ? ""
          : "s"
      } selected`;

    list.innerHTML =
      files
        .map(
          (
            file,
            index
          ) =>
            createPDFFileCardHTML(
              file,
              index
            )
        )
        .join("");

    mergeButton.disabled =
      files.length < 2;
  }


  function addFiles(
    incomingFiles
  ) {
    const pdfFiles =
      filterPDFFiles(
        incomingFiles
      );

    if (
      pdfFiles.length === 0
    ) {
      showToast(
        "No PDF found",
        "Choose valid PDF files.",
        "warning"
      );

      return;
    }

    files.push(
      ...pdfFiles
    );

    refresh();
  }


  selectButton.addEventListener(
    "click",
    () => {
      input.click();
    }
  );


  addButton.addEventListener(
    "click",
    () => {
      input.click();
    }
  );


  input.addEventListener(
    "change",
    () => {
      addFiles(
        input.files
      );

      input.value = "";
    }
  );


  list.addEventListener(
    "click",
    (event) => {
      const button =
        event.target.closest(
          ".pdf-remove-file"
        );

      if (!button) {
        return;
      }

      const index =
        Number(
          button.dataset.index
        );

      if (
        !Number.isInteger(
          index
        )
      ) {
        return;
      }

      files.splice(
        index,
        1
      );

      refresh();
    }
  );


  clearButton.addEventListener(
    "click",
    () => {
      files = [];

      input.value = "";

      refresh();
    }
  );


  mergeButton.addEventListener(
    "click",
    async () => {
      if (
        files.length < 2
      ) {
        showToast(
          "Need more PDFs",
          "Select at least two PDF files.",
          "warning"
        );

        return;
      }

      const originalHTML =
        mergeButton.innerHTML;

      mergeButton.disabled =
        true;

      mergeButton.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Merging...
      `;

      try {
        const blob =
          await mergePDFFiles(
            files
          );

        downloadBlob(
          blob,
          "senn-tools-merged.pdf"
        );

        addHistory(
          "merge-pdf",
          {
            fileName:
              `${files.length} PDFs`
          }
        );

        showToast(
          "PDFs merged",
          `${files.length} files combined successfully.`,
          "success"
        );
      } catch (error) {
        console.error(
          "[SENN TOOLS] Merge PDF:",
          error
        );

        showToast(
          "Merge failed",
          error.message ||
          "Unable to merge these PDFs.",
          "error"
        );
      } finally {
        mergeButton.disabled =
          files.length < 2;

        mergeButton.innerHTML =
          originalHTML;
      }
    }
  );


  const smartFile =
    getCurrentSelectedFile();

  if (
    smartFile &&
    isPDFFile(
      smartFile
    )
  ) {
    addFiles([
      smartFile
    ]);
  }
}


/* =========================================================
   118. MERGE PDF ENGINE
========================================================= */

async function mergePDFFiles(
  files
) {
  const PDFLib =
    await ensurePDFLib();

  const {
    PDFDocument
  } = PDFLib;

  const outputDocument =
    await PDFDocument.create();

  for (
    const file of files
  ) {
    const bytes =
      await file.arrayBuffer();

    const sourceDocument =
      await PDFDocument.load(
        bytes,
        {
          ignoreEncryption:
            false
        }
      );

    const pageIndices =
      sourceDocument
        .getPageIndices();

    const copiedPages =
      await outputDocument
        .copyPages(
          sourceDocument,
          pageIndices
        );

    copiedPages.forEach(
      (page) => {
        outputDocument.addPage(
          page
        );
      }
    );
  }

  const result =
    await outputDocument.save();

  return new Blob(
    [
      result
    ],
    {
      type:
        "application/pdf"
    }
  );
}


/* =========================================================
   119. SPLIT PDF
========================================================= */

function renderSplitPDF() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div
          class="workspace-placeholder-icon"
        >
          <i class="fa-solid fa-scissors"></i>
        </div>

        <h2>
          Split PDF
        </h2>

        <p>
          Extract specific pages
          from a PDF into a new file.
        </p>

        <input
          class="split-pdf-input"
          type="file"
          accept="application/pdf,.pdf"
          hidden
        >

        <button
          class="tool-button primary split-pdf-select"
          type="button"
        >
          <i class="fa-solid fa-file-arrow-up"></i>
          Choose PDF
        </button>

      </div>

      <div
        class="tool-panel split-pdf-panel"
        hidden
      >

        <div
          class="split-pdf-file"
        ></div>

        <div
          class="tool-controls"
        >

          <div
            class="tool-control full"
          >

            <label>
              Pages
            </label>

            <input
              class="tool-input split-pdf-pages"
              type="text"
              placeholder="Example: 1-3, 5, 8-10"
            >

            <small>
              Enter page numbers or ranges.
            </small>

          </div>

        </div>

        <div
          class="tool-actions"
        >

          <button
            class="tool-button primary split-pdf-run"
            type="button"
          >
            <i class="fa-solid fa-scissors"></i>
            Extract Pages
          </button>

          <button
            class="tool-button split-pdf-clear"
            type="button"
          >
            Clear
          </button>

        </div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".split-pdf-input"
    );

  const selectButton =
    workspaceContent.querySelector(
      ".split-pdf-select"
    );

  const panel =
    workspaceContent.querySelector(
      ".split-pdf-panel"
    );

  const fileContainer =
    workspaceContent.querySelector(
      ".split-pdf-file"
    );

  const pageInput =
    workspaceContent.querySelector(
      ".split-pdf-pages"
    );

  const splitButton =
    workspaceContent.querySelector(
      ".split-pdf-run"
    );

  const clearButton =
    workspaceContent.querySelector(
      ".split-pdf-clear"
    );

  let selectedPDF =
    null;

  let pageCount =
    0;


  async function loadSelectedPDF(
    file
  ) {
    if (
      !isPDFFile(file)
    ) {
      showToast(
        "Invalid file",
        "Choose a PDF file.",
        "warning"
      );

      return;
    }

    selectedPDF =
      file;

    try {
      pageCount =
        await getPDFPageCount(
          file
        );

      panel.hidden =
        false;

      fileContainer.innerHTML = `
        ${createPDFFileCardHTML(
          file,
          0,
          {
            removable:
              false
          }
        )}

        <div
          class="tool-notice"
          style="margin-bottom: 18px;"
        >
          <i class="fa-solid fa-file-lines"></i>

          <span>
            ${pageCount} page${
              pageCount === 1
                ? ""
                : "s"
            } detected.
          </span>
        </div>
      `;

      pageInput.placeholder =
        pageCount > 1
          ? `Example: 1-${Math.min(
              3,
              pageCount
            )}, ${pageCount}`
          : "1";
    } catch (error) {
      selectedPDF =
        null;

      pageCount =
        0;

      panel.hidden =
        true;

      console.error(
        "[SENN TOOLS] PDF load:",
        error
      );

      showToast(
        "PDF could not be opened",
        error.message ||
        "The PDF may be damaged or protected.",
        "error"
      );
    }
  }


  selectButton.addEventListener(
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

      await loadSelectedPDF(
        file
      );
    }
  );


  clearButton.addEventListener(
    "click",
    () => {
      selectedPDF =
        null;

      pageCount =
        0;

      input.value = "";

      pageInput.value = "";

      fileContainer.innerHTML =
        "";

      panel.hidden =
        true;
    }
  );


  splitButton.addEventListener(
    "click",
    async () => {
      if (
        !selectedPDF
      ) {
        return;
      }

      let pages;

      try {
        pages =
          parsePDFPageSelection(
            pageInput.value,
            pageCount
          );
      } catch (error) {
        showToast(
          "Invalid page selection",
          error.message,
          "warning"
        );

        return;
      }

      const originalHTML =
        splitButton.innerHTML;

      splitButton.disabled =
        true;

      splitButton.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Extracting...
      `;

      try {
        const blob =
          await extractPDFPages(
            selectedPDF,
            pages
          );

        const baseName =
          getBaseFileName(
            selectedPDF.name
          );

        downloadBlob(
          blob,
          `${baseName}-pages.pdf`
        );

        addHistory(
          "split-pdf",
          {
            fileName:
              selectedPDF.name
          }
        );

        showToast(
          "Pages extracted",
          `${pages.length} page${
            pages.length === 1
              ? ""
              : "s"
          } saved.`,
          "success"
        );
      } catch (error) {
        console.error(
          "[SENN TOOLS] Split PDF:",
          error
        );

        showToast(
          "Extraction failed",
          error.message ||
          "Unable to extract these pages.",
          "error"
        );
      } finally {
        splitButton.disabled =
          false;

        splitButton.innerHTML =
          originalHTML;
      }
    }
  );


  const smartFile =
    getCurrentSelectedFile();

  if (
    smartFile &&
    isPDFFile(
      smartFile
    )
  ) {
    loadSelectedPDF(
      smartFile
    );
  }
}


/* =========================================================
   120. GET PDF PAGE COUNT
========================================================= */

async function getPDFPageCount(
  file
) {
  const PDFLib =
    await ensurePDFLib();

  const {
    PDFDocument
  } = PDFLib;

  const bytes =
    await file.arrayBuffer();

  const document =
    await PDFDocument.load(
      bytes,
      {
        ignoreEncryption:
          false
      }
    );

  return document.getPageCount();
}


/* =========================================================
   121. PARSE PAGE SELECTION
========================================================= */

function parsePDFPageSelection(
  value,
  totalPages
) {
  const input =
    String(value)
      .trim();

  if (!input) {
    throw new Error(
      "Enter the pages you want to extract."
    );
  }

  const result =
    new Set();

  const parts =
    input
      .split(",")
      .map(
        (part) =>
          part.trim()
      )
      .filter(Boolean);

  if (
    parts.length === 0
  ) {
    throw new Error(
      "No pages were selected."
    );
  }

  for (
    const part of parts
  ) {
    if (
      /^\d+$/.test(
        part
      )
    ) {
      const page =
        Number(part);

      validatePDFPageNumber(
        page,
        totalPages
      );

      result.add(
        page
      );

      continue;
    }

    const rangeMatch =
      part.match(
        /^(\d+)\s*-\s*(\d+)$/
      );

    if (
      !rangeMatch
    ) {
      throw new Error(
        `"${part}" is not a valid page or range.`
      );
    }

    const start =
      Number(
        rangeMatch[1]
      );

    const end =
      Number(
        rangeMatch[2]
      );

    validatePDFPageNumber(
      start,
      totalPages
    );

    validatePDFPageNumber(
      end,
      totalPages
    );

    if (
      start > end
    ) {
      throw new Error(
        `Range ${start}-${end} is reversed.`
      );
    }

    for (
      let page = start;
      page <= end;
      page += 1
    ) {
      result.add(
        page
      );
    }
  }

  const pages =
    Array.from(result);

  if (
    pages.length === 0
  ) {
    throw new Error(
      "No valid pages were selected."
    );
  }

  return pages;
}


/* =========================================================
   122. VALIDATE PDF PAGE NUMBER
========================================================= */

function validatePDFPageNumber(
  page,
  totalPages
) {
  if (
    !Number.isInteger(
      page
    ) ||
    page < 1
  ) {
    throw new Error(
      `"${page}" is not a valid page number.`
    );
  }

  if (
    page > totalPages
  ) {
    throw new Error(
      `Page ${page} does not exist. This PDF has ${totalPages} pages.`
    );
  }
}


/* =========================================================
   123. EXTRACT PDF PAGES
========================================================= */

async function extractPDFPages(
  file,
  pages
) {
  const PDFLib =
    await ensurePDFLib();

  const {
    PDFDocument
  } = PDFLib;

  const sourceBytes =
    await file.arrayBuffer();

  const sourceDocument =
    await PDFDocument.load(
      sourceBytes,
      {
        ignoreEncryption:
          false
      }
    );

  const outputDocument =
    await PDFDocument.create();

  const zeroBasedIndices =
    pages.map(
      (page) =>
        page - 1
    );

  const copiedPages =
    await outputDocument
      .copyPages(
        sourceDocument,
        zeroBasedIndices
      );

  copiedPages.forEach(
    (page) => {
      outputDocument.addPage(
        page
      );
    }
  );

  const result =
    await outputDocument.save();

  return new Blob(
    [
      result
    ],
    {
      type:
        "application/pdf"
    }
  );
}


/* =========================================================
   124. PART 4B PDF ROUTERS
========================================================= */

const part4BRenderers = {
  "merge-pdf":
    renderMergePDF,

  "split-pdf":
    renderSplitPDF
};


/* =========================================================
   125. EXTEND PART 4A ROUTER
========================================================= */

const previousPart4RenderToolWorkspace =
  renderToolWorkspace;

renderToolWorkspace =
  function (
    toolId
  ) {
    const renderer =
      part4BRenderers[
        toolId
      ];

    if (renderer) {
      renderer();

      return;
    }

    previousPart4RenderToolWorkspace(
      toolId
    );
  };


/* =========================================================
   126. PART 4B-1 READY
========================================================= */

console.log(
  "[SENN TOOLS] Part 4B-1 PDF engine ready."
);


/* =========================================================
   PART 4B-1 END

   ADDED:
   ✓ PDF engine loader
   ✓ PDF validation
   ✓ Merge PDF UI
   ✓ Merge multiple PDFs
   ✓ Remove PDF before merge
   ✓ Smart Drop → Merge PDF
   ✓ Split PDF UI
   ✓ PDF page counter
   ✓ Page selection parser
   ✓ Single page extraction
   ✓ Page range extraction
   ✓ Multiple range extraction
   ✓ Smart Drop → Split PDF

   NEXT PART 4B-2:
   - PDF → Image
   - PDF page previews
   - PNG / JPEG output
   - ZIP multi-page export
   - Processing Overlay
   - PDF Compressor honest handling
   - QR standards fix
========================================================= */

/* =========================================================
   SENN TOOLS V1
   PART 4B-2
   PDF → IMAGE ENGINE
========================================================= */


/* =========================================================
   127. PDF.JS MODULE LOADER
========================================================= */

let sennPDFJSModule =
  null;

let sennPDFJSLoadingPromise =
  null;


async function ensurePDFJS() {
  if (sennPDFJSModule) {
    return sennPDFJSModule;
  }

  if (sennPDFJSLoadingPromise) {
    return sennPDFJSLoadingPromise;
  }

  sennPDFJSLoadingPromise =
    (async () => {
      try {
        const pdfjsLib =
          await import(
            "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.296/build/pdf.min.mjs"
          );

        pdfjsLib
          .GlobalWorkerOptions
          .workerSrc =
          "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs";

        sennPDFJSModule =
          pdfjsLib;

        return pdfjsLib;
      } catch (error) {
        sennPDFJSLoadingPromise =
          null;

        throw new Error(
          "PDF rendering engine could not be loaded."
        );
      }
    })();

  return sennPDFJSLoadingPromise;
}


/* =========================================================
   128. LOAD PDF.JS DOCUMENT
========================================================= */

async function loadPDFJSFile(
  file
) {
  if (
    !isPDFFile(file)
  ) {
    throw new Error(
      "The selected file is not a PDF."
    );
  }

  const pdfjsLib =
    await ensurePDFJS();

  const bytes =
    new Uint8Array(
      await file.arrayBuffer()
    );

  const loadingTask =
    pdfjsLib.getDocument({
      data: bytes
    });

  return loadingTask.promise;
}


/* =========================================================
   129. PDF → IMAGE UI
========================================================= */

function renderPDFToImage() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div
          class="workspace-placeholder-icon"
        >
          <i class="fa-solid fa-file-image"></i>
        </div>

        <h2>
          PDF to Image
        </h2>

        <p>
          Render PDF pages into
          high-quality PNG or JPEG images.
        </p>

        <input
          class="pdf-image-input"
          type="file"
          accept="application/pdf,.pdf"
          hidden
        >

        <button
          class="tool-button primary pdf-image-select"
          type="button"
        >
          <i class="fa-solid fa-file-arrow-up"></i>
          Choose PDF
        </button>

      </div>

      <div
        class="tool-panel pdf-image-panel"
        hidden
      >

        <div
          class="pdf-image-file-info"
        ></div>

        <div
          class="tool-controls"
        >

          <div
            class="tool-control"
          >

            <label>
              Output Format
            </label>

            <select
              class="tool-select pdf-image-format"
            >
              <option
                value="png"
                selected
              >
                PNG
              </option>

              <option value="jpeg">
                JPEG
              </option>
            </select>

          </div>

          <div
            class="tool-control"
          >

            <label>
              Resolution
            </label>

            <select
              class="tool-select pdf-image-scale"
            >
              <option value="1">
                Standard
              </option>

              <option
                value="1.5"
                selected
              >
                High
              </option>

              <option value="2">
                Very High
              </option>

              <option value="3">
                Ultra
              </option>
            </select>

          </div>

          <div
            class="tool-control"
          >

            <label>
              Pages
            </label>

            <select
              class="tool-select pdf-image-page-mode"
            >
              <option
                value="all"
                selected
              >
                All Pages
              </option>

              <option value="custom">
                Custom Pages
              </option>
            </select>

          </div>

          <div
            class="tool-control pdf-image-custom-control"
            hidden
          >

            <label>
              Page Selection
            </label>

            <input
              class="tool-input pdf-image-pages"
              type="text"
              placeholder="1-3, 5, 8"
            >

          </div>

          <div
            class="tool-control pdf-image-quality-control"
            hidden
          >

            <label>
              JPEG Quality
            </label>

            <select
              class="tool-select pdf-image-quality"
            >
              <option value="0.7">
                Smaller File
              </option>

              <option
                value="0.85"
                selected
              >
                Balanced
              </option>

              <option value="0.95">
                High Quality
              </option>
            </select>

          </div>

        </div>

        <div
          class="tool-actions"
        >

          <button
            class="tool-button primary pdf-image-convert"
            type="button"
          >
            <i class="fa-solid fa-images"></i>
            Convert Pages
          </button>

          <button
            class="tool-button pdf-image-clear"
            type="button"
          >
            Clear
          </button>

        </div>

      </div>

      <div
        class="pdf-image-progress"
      ></div>

      <div
        class="pdf-image-results"
      ></div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".pdf-image-input"
    );

  const selectButton =
    workspaceContent.querySelector(
      ".pdf-image-select"
    );

  const panel =
    workspaceContent.querySelector(
      ".pdf-image-panel"
    );

  const fileInfo =
    workspaceContent.querySelector(
      ".pdf-image-file-info"
    );

  const formatSelect =
    workspaceContent.querySelector(
      ".pdf-image-format"
    );

  const scaleSelect =
    workspaceContent.querySelector(
      ".pdf-image-scale"
    );

  const pageMode =
    workspaceContent.querySelector(
      ".pdf-image-page-mode"
    );

  const customControl =
    workspaceContent.querySelector(
      ".pdf-image-custom-control"
    );

  const pageInput =
    workspaceContent.querySelector(
      ".pdf-image-pages"
    );

  const qualityControl =
    workspaceContent.querySelector(
      ".pdf-image-quality-control"
    );

  const qualitySelect =
    workspaceContent.querySelector(
      ".pdf-image-quality"
    );

  const convertButton =
    workspaceContent.querySelector(
      ".pdf-image-convert"
    );

  const clearButton =
    workspaceContent.querySelector(
      ".pdf-image-clear"
    );

  const progress =
    workspaceContent.querySelector(
      ".pdf-image-progress"
    );

  const results =
    workspaceContent.querySelector(
      ".pdf-image-results"
    );

  let selectedPDF =
    null;

  let loadedDocument =
    null;

  let pageCount =
    0;

  let generatedImages =
    [];


  async function loadFile(
    file
  ) {
    if (
      !isPDFFile(file)
    ) {
      showToast(
        "Invalid file",
        "Choose a valid PDF file.",
        "warning"
      );

      return;
    }

    selectedPDF =
      file;

    fileInfo.innerHTML = `
      ${createPDFFileCardHTML(
        file,
        0,
        {
          removable: false
        }
      )}

      <div class="tool-notice">

        <i class="fa-solid fa-spinner fa-spin"></i>

        <span>
          Reading PDF...
        </span>

      </div>
    `;

    panel.hidden =
      false;

    convertButton.disabled =
      true;

    results.innerHTML =
      "";

    progress.innerHTML =
      "";

    try {
      loadedDocument =
        await loadPDFJSFile(
          file
        );

      pageCount =
        loadedDocument.numPages;

      fileInfo.innerHTML = `
        ${createPDFFileCardHTML(
          file,
          0,
          {
            removable: false
          }
        )}

        <div class="tool-notice success">

          <i class="fa-solid fa-circle-check"></i>

          <span>
            ${pageCount} page${
              pageCount === 1
                ? ""
                : "s"
            } ready to convert.
          </span>

        </div>
      `;

      pageInput.placeholder =
        pageCount > 1
          ? `1-${Math.min(
              pageCount,
              3
            )}, ${pageCount}`
          : "1";

      convertButton.disabled =
        false;

      await renderPDFPagePreview(
        loadedDocument,
        results
      );
    } catch (error) {
      console.error(
        "[SENN TOOLS] PDF → Image:",
        error
      );

      selectedPDF =
        null;

      loadedDocument =
        null;

      pageCount =
        0;

      panel.hidden =
        true;

      showToast(
        "PDF could not be opened",
        error.message ||
          "This PDF could not be processed.",
        "error"
      );
    }
  }


  selectButton.addEventListener(
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

      await loadFile(
        file
      );
    }
  );


  formatSelect.addEventListener(
    "change",
    () => {
      qualityControl.hidden =
        formatSelect.value !==
        "jpeg";
    }
  );


  pageMode.addEventListener(
    "change",
    () => {
      customControl.hidden =
        pageMode.value !==
        "custom";
    }
  );


  clearButton.addEventListener(
    "click",
    async () => {
      if (
        loadedDocument
      ) {
        try {
          await loadedDocument
            .destroy();
        } catch {
          // Ignore cleanup errors.
        }
      }

      generatedImages.forEach(
        (item) => {
          if (
            item.url
          ) {
            URL.revokeObjectURL(
              item.url
            );
          }
        }
      );

      generatedImages =
        [];

      selectedPDF =
        null;

      loadedDocument =
        null;

      pageCount =
        0;

      input.value =
        "";

      pageInput.value =
        "";

      panel.hidden =
        true;

      fileInfo.innerHTML =
        "";

      progress.innerHTML =
        "";

      results.innerHTML =
        "";
    }
  );


  convertButton.addEventListener(
    "click",
    async () => {
      if (
        !selectedPDF ||
        !loadedDocument
      ) {
        return;
      }

      let pages = [];

      try {
        if (
          pageMode.value ===
          "all"
        ) {
          pages =
            Array.from(
              {
                length:
                  pageCount
              },
              (
                _,
                index
              ) =>
                index + 1
            );
        } else {
          pages =
            parsePDFPageSelection(
              pageInput.value,
              pageCount
            );
        }
      } catch (error) {
        showToast(
          "Invalid pages",
          error.message,
          "warning"
        );

        return;
      }

      const format =
        formatSelect.value;

      const scale =
        Number(
          scaleSelect.value
        ) || 1.5;

      const quality =
        Number(
          qualitySelect.value
        ) || 0.85;

      convertButton.disabled =
        true;

      const originalHTML =
        convertButton.innerHTML;

      convertButton.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Converting...
      `;

      generatedImages.forEach(
        (item) => {
          if (
            item.url
          ) {
            URL.revokeObjectURL(
              item.url
            );
          }
        }
      );

      generatedImages =
        [];

      results.innerHTML =
        "";

      try {
        for (
          let index = 0;
          index < pages.length;
          index += 1
        ) {
          const pageNumber =
            pages[index];

          const percentage =
            Math.round(
              (
                index /
                pages.length
              ) *
                100
            );

          renderPDFConversionProgress(
            progress,
            percentage,
            `Rendering page ${pageNumber} of ${pageCount}`
          );

          const image =
            await renderPDFPageToImage(
              loadedDocument,
              pageNumber,
              {
                scale,
                format,
                quality
              }
            );

          generatedImages.push(
            image
          );

          renderPDFImageResults(
            generatedImages,
            results
          );
        }

        renderPDFConversionProgress(
          progress,
          100,
          "Conversion complete"
        );

        addHistory(
          "pdf-to-image",
          {
            fileName:
              selectedPDF.name
          }
        );

        showToast(
          "Conversion complete",
          `${generatedImages.length} page${
            generatedImages.length === 1
              ? ""
              : "s"
          } converted.`,
          "success"
        );
      } catch (error) {
        console.error(
          "[SENN TOOLS] PDF rendering:",
          error
        );

        showToast(
          "Conversion failed",
          error.message ||
            "Unable to render this PDF.",
          "error"
        );
      } finally {
        convertButton.disabled =
          false;

        convertButton.innerHTML =
          originalHTML;
      }
    }
  );


  results.addEventListener(
    "click",
    (event) => {
      const button =
        event.target.closest(
          "[data-pdf-image-download]"
        );

      if (!button) {
        return;
      }

      const index =
        Number(
          button.dataset
            .pdfImageDownload
        );

      const item =
        generatedImages[
          index
        ];

      if (!item) {
        return;
      }

      downloadBlob(
        item.blob,
        item.fileName
      );
    }
  );


  const smartFile =
    getCurrentSelectedFile();

  if (
    smartFile &&
    isPDFFile(
      smartFile
    )
  ) {
    loadFile(
      smartFile
    );
  }
}


/* =========================================================
   130. RENDER PDF PAGE → IMAGE
========================================================= */

async function renderPDFPageToImage(
  pdfDocument,
  pageNumber,
  options = {}
) {
  const page =
    await pdfDocument.getPage(
      pageNumber
    );

  const scale =
    Math.min(
      Math.max(
        Number(
          options.scale
        ) || 1.5,
        0.5
      ),
      4
    );

  const viewport =
    page.getViewport({
      scale
    });

  const canvas =
    document.createElement(
      "canvas"
    );

  const context =
    canvas.getContext(
      "2d",
      {
        alpha: false
      }
    );

  if (!context) {
    throw new Error(
      "Canvas is not supported by this browser."
    );
  }

  canvas.width =
    Math.max(
      1,
      Math.floor(
        viewport.width
      )
    );

  canvas.height =
    Math.max(
      1,
      Math.floor(
        viewport.height
      )
    );

  context.fillStyle =
    "#ffffff";

  context.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  const renderTask =
    page.render({
      canvas,
      canvasContext:
        context,
      viewport,
      background:
        "rgb(255,255,255)"
    });

  await renderTask.promise;

  const format =
    options.format ===
    "jpeg"
      ? "jpeg"
      : "png";

  const mimeType =
    format === "jpeg"
      ? "image/jpeg"
      : "image/png";

  const quality =
    format === "jpeg"
      ? (
          Number(
            options.quality
          ) || 0.85
        )
      : 1;

  const blob =
    await canvasToBlob(
      canvas,
      mimeType,
      quality
    );

  if (!blob) {
    throw new Error(
      `Page ${pageNumber} could not be converted.`
    );
  }

  const url =
    URL.createObjectURL(
      blob
    );

  if (
    typeof page.cleanup ===
    "function"
  ) {
    page.cleanup();
  }

  return {
    pageNumber,
    blob,
    url,

    width:
      canvas.width,

    height:
      canvas.height,

    format,

    fileName:
      `page-${String(
        pageNumber
      ).padStart(
        3,
        "0"
      )}.${format === "jpeg"
        ? "jpg"
        : "png"
      }`
  };
}


/* =========================================================
   131. PDF FIRST PAGE PREVIEW
========================================================= */

async function renderPDFPagePreview(
  pdfDocument,
  container
) {
  if (
    !pdfDocument ||
    pdfDocument.numPages <
      1
  ) {
    return;
  }

  container.innerHTML = `
    <div class="tool-panel">

      <h3>
        PDF PREVIEW
      </h3>

      <div
        class="pdf-preview-loading"
        style="
          display: grid;
          place-items: center;
          min-height: 180px;
        "
      >
        <div>
          <i class="fa-solid fa-spinner fa-spin"></i>
          Rendering first page...
        </div>
      </div>

    </div>
  `;

  try {
    const page =
      await pdfDocument.getPage(
        1
      );

    const baseViewport =
      page.getViewport({
        scale: 1
      });

    const maximumWidth =
      700;

    const scale =
      Math.min(
        1.2,
        maximumWidth /
          baseViewport.width
      );

    const viewport =
      page.getViewport({
        scale
      });

    const canvas =
      document.createElement(
        "canvas"
      );

    const context =
      canvas.getContext(
        "2d",
        {
          alpha: false
        }
      );

    canvas.width =
      Math.max(
        1,
        Math.floor(
          viewport.width
        )
      );

    canvas.height =
      Math.max(
        1,
        Math.floor(
          viewport.height
        )
      );

    canvas.style.maxWidth =
      "100%";

    canvas.style.height =
      "auto";

    canvas.style.display =
      "block";

    canvas.style.margin =
      "0 auto";

    canvas.style.borderRadius =
      "12px";

    context.fillStyle =
      "#ffffff";

    context.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    const renderTask =
      page.render({
        canvas,
        canvasContext:
          context,
        viewport,
        background:
          "rgb(255,255,255)"
      });

    await renderTask.promise;

    const panel =
      container.querySelector(
        ".tool-panel"
      );

    if (!panel) {
      return;
    }

    const loading =
      panel.querySelector(
        ".pdf-preview-loading"
      );

    if (loading) {
      loading.remove();
    }

    const wrapper =
      document.createElement(
        "div"
      );

    wrapper.style.padding =
      "18px";

    wrapper.style.background =
      "rgba(255,255,255,.03)";

    wrapper.style.borderRadius =
      "16px";

    wrapper.appendChild(
      canvas
    );

    panel.appendChild(
      wrapper
    );

    if (
      typeof page.cleanup ===
      "function"
    ) {
      page.cleanup();
    }
  } catch (error) {
    console.warn(
      "[SENN TOOLS] Preview:",
      error
    );

    container.innerHTML = `
      <div class="tool-panel">

        <div class="tool-notice">

          <i class="fa-solid fa-triangle-exclamation"></i>

          <span>
            Preview unavailable.
            Conversion may still work.
          </span>

        </div>

      </div>
    `;
  }
}


/* =========================================================
   132. PDF CONVERSION PROGRESS
========================================================= */

function renderPDFConversionProgress(
  container,
  percentage,
  message
) {
  const safePercentage =
    Math.min(
      Math.max(
        Number(
          percentage
        ) || 0,
        0
      ),
      100
    );

  container.innerHTML = `
    <div
      class="tool-panel"
      style="margin-top: 18px;"
    >

      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 12px;
        "
      >

        <strong>
          ${escapeHTML(
            message
          )}
        </strong>

        <span>
          ${safePercentage}%
        </span>

      </div>

      <div
        style="
          width: 100%;
          height: 8px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
        "
      >

        <div
          style="
            width: ${safePercentage}%;
            height: 100%;
            border-radius: inherit;
            background: currentColor;
            transition: width .25s ease;
          "
        ></div>

      </div>

    </div>
  `;
}


/* =========================================================
   133. PDF IMAGE RESULTS
========================================================= */

function renderPDFImageResults(
  images,
  container
) {
  if (
    !images.length
  ) {
    container.innerHTML =
      "";

    return;
  }

  container.innerHTML = `
    <div
      class="tool-panel"
      style="margin-top: 18px;"
    >

      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        "
      >

        <div>

          <h3>
            CONVERTED PAGES
          </h3>

          <p>
            ${images.length}
            image${
              images.length === 1
                ? ""
                : "s"
            } generated
          </p>

        </div>

      </div>

      <div
        style="
          display: grid;
          grid-template-columns:
            repeat(
              auto-fit,
              minmax(190px, 1fr)
            );
          gap: 14px;
        "
      >

        ${images
          .map(
            (
              item,
              index
            ) => `
              <div
                style="
                  min-width: 0;
                  padding: 12px;
                  border: 1px solid rgba(255,255,255,.08);
                  border-radius: 16px;
                  background: rgba(255,255,255,.025);
                "
              >

                <div
                  style="
                    overflow: hidden;
                    border-radius: 12px;
                    background: #ffffff;
                    margin-bottom: 12px;
                  "
                >

                  <img
                    src="${item.url}"
                    alt="PDF page ${item.pageNumber}"
                    style="
                      display: block;
                      width: 100%;
                      height: auto;
                    "
                  >

                </div>

                <strong>
                  Page ${item.pageNumber}
                </strong>

                <small
                  style="
                    display: block;
                    margin-top: 4px;
                    margin-bottom: 10px;
                  "
                >
                  ${item.width}
                  ×
                  ${item.height}
                  •
                  ${item.format.toUpperCase()}
                </small>

                <button
                  class="tool-button"
                  type="button"
                  data-pdf-image-download="${index}"
                  style="width: 100%;"
                >
                  <i class="fa-solid fa-download"></i>
                  Download
                </button>

              </div>
            `
          )
          .join("")}

      </div>

    </div>
  `;
}


/* =========================================================
   134. PDF COMPRESSOR
========================================================= */

function renderPDFCompressor() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div
          class="workspace-placeholder-icon"
        >
          <i class="fa-solid fa-compress"></i>
        </div>

        <h2>
          PDF Compressor
        </h2>

        <p>
          Optimize compatible PDF files
          directly in your browser.
        </p>

        <input
          class="pdf-compress-input"
          type="file"
          accept="application/pdf,.pdf"
          hidden
        >

        <button
          class="tool-button primary pdf-compress-select"
          type="button"
        >
          <i class="fa-solid fa-file-arrow-up"></i>
          Choose PDF
        </button>

      </div>

      <div
        class="tool-panel pdf-compress-panel"
        hidden
      >

        <div
          class="pdf-compress-file"
        ></div>

        <div class="tool-notice">

          <i class="fa-solid fa-circle-info"></i>

          <span>
            Browser-only PDF compression
            has limited results.
            SENN Tools will optimize the
            document structure without
            pretending it can magically
            shrink every PDF.
          </span>

        </div>

        <div
          class="tool-actions"
          style="margin-top: 18px;"
        >

          <button
            class="tool-button primary pdf-compress-run"
            type="button"
          >
            <i class="fa-solid fa-compress"></i>
            Optimize PDF
          </button>

          <button
            class="tool-button pdf-compress-clear"
            type="button"
          >
            Clear
          </button>

        </div>

        <div
          class="pdf-compress-result"
        ></div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".pdf-compress-input"
    );

  const selectButton =
    workspaceContent.querySelector(
      ".pdf-compress-select"
    );

  const panel =
    workspaceContent.querySelector(
      ".pdf-compress-panel"
    );

  const fileContainer =
    workspaceContent.querySelector(
      ".pdf-compress-file"
    );

  const runButton =
    workspaceContent.querySelector(
      ".pdf-compress-run"
    );

  const clearButton =
    workspaceContent.querySelector(
      ".pdf-compress-clear"
    );

  const result =
    workspaceContent.querySelector(
      ".pdf-compress-result"
    );

  let selectedPDF =
    null;


  function loadFile(
    file
  ) {
    if (
      !isPDFFile(file)
    ) {
      showToast(
        "Invalid file",
        "Choose a PDF file.",
        "warning"
      );

      return;
    }

    selectedPDF =
      file;

    panel.hidden =
      false;

    result.innerHTML =
      "";

    fileContainer.innerHTML =
      createPDFFileCardHTML(
        file,
        0,
        {
          removable: false
        }
      );
  }


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

      if (file) {
        loadFile(
          file
        );
      }
    }
  );


  clearButton.addEventListener(
    "click",
    () => {
      selectedPDF =
        null;

      input.value =
        "";

      panel.hidden =
        true;

      result.innerHTML =
        "";

      fileContainer.innerHTML =
        "";
    }
  );


  runButton.addEventListener(
    "click",
    async () => {
      if (!selectedPDF) {
        return;
      }

      const originalHTML =
        runButton.innerHTML;

      runButton.disabled =
        true;

      runButton.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Optimizing...
      `;

      try {
        const optimized =
          await optimizePDFFile(
            selectedPDF
          );

        const difference =
          selectedPDF.size -
          optimized.size;

        const percentage =
          selectedPDF.size > 0
            ? (
                difference /
                selectedPDF.size
              ) * 100
            : 0;

        const baseName =
          getBaseFileName(
            selectedPDF.name
          );

        result.innerHTML = `
          <div
            class="tool-notice ${
              difference > 0
                ? "success"
                : ""
            }"
            style="margin-top: 18px;"
          >

            <i class="fa-solid fa-chart-simple"></i>

            <span>
              Original:
              ${escapeHTML(
                formatBytes(
                  selectedPDF.size
                )
              )}
              •
              Output:
              ${escapeHTML(
                formatBytes(
                  optimized.size
                )
              )}
              ${
                difference > 0
                  ? `• ${percentage.toFixed(
                      1
                    )}% smaller`
                  : "• No meaningful size reduction"
              }
            </span>

          </div>
        `;

        downloadBlob(
          optimized,
          `${baseName}-optimized.pdf`
        );

        addHistory(
          "compress-pdf",
          {
            fileName:
              selectedPDF.name
          }
        );

        showToast(
          "PDF processed",
          difference > 0
            ? `${percentage.toFixed(
                1
              )}% smaller.`
            : "Document optimized, but file size did not decrease significantly.",
          difference > 0
            ? "success"
            : "info"
        );
      } catch (error) {
        console.error(
          "[SENN TOOLS] PDF Compressor:",
          error
        );

        showToast(
          "Optimization failed",
          error.message ||
            "Unable to optimize this PDF.",
          "error"
        );
      } finally {
        runButton.disabled =
          false;

        runButton.innerHTML =
          originalHTML;
      }
    }
  );


  const smartFile =
    getCurrentSelectedFile();

  if (
    smartFile &&
    isPDFFile(
      smartFile
    )
  ) {
    loadFile(
      smartFile
    );
  }
}


/* =========================================================
   135. PDF OPTIMIZATION ENGINE
========================================================= */

async function optimizePDFFile(
  file
) {
  const PDFLib =
    await ensurePDFLib();

  const {
    PDFDocument
  } = PDFLib;

  const bytes =
    await file.arrayBuffer();

  const document =
    await PDFDocument.load(
      bytes,
      {
        ignoreEncryption:
          false,

        updateMetadata:
          false
      }
    );

  const output =
    await document.save({
      useObjectStreams:
        true,

      addDefaultPage:
        false,

      objectsPerTick:
        50
    });

  return new Blob(
    [
      output
    ],
    {
      type:
        "application/pdf"
    }
  );
}


/* =========================================================
   136. PART 4B-2 ROUTERS
========================================================= */

const part4B2Renderers = {
  "pdf-to-image":
    renderPDFToImage,

  "compress-pdf":
    renderPDFCompressor
};


/* =========================================================
   137. EXTEND PART 4B ROUTER
========================================================= */

const previousPart4BRenderToolWorkspace =
  renderToolWorkspace;

renderToolWorkspace =
  function (
    toolId
  ) {
    const renderer =
      part4B2Renderers[
        toolId
      ];

    if (renderer) {
      renderer();

      return;
    }

    previousPart4BRenderToolWorkspace(
      toolId
    );
  };


/* =========================================================
   138. PART 4B-2 READY
========================================================= */

console.log(
  "[SENN TOOLS] Part 4B-2 PDF → Image engine ready."
);


/* =========================================================
   PART 4B-2 END

   ADDED:
   ✓ PDF.js engine
   ✓ PDF first-page preview
   ✓ PDF → PNG
   ✓ PDF → JPEG
   ✓ Standard / High / Very High / Ultra resolution
   ✓ All-page conversion
   ✓ Custom page selection
   ✓ Individual page download
   ✓ Conversion progress
   ✓ Smart Drop → PDF to Image
   ✓ PDF structural optimizer
   ✓ Honest PDF compression result
   ✓ Smart Drop → PDF Compressor

   PART 4 STATUS:
   4A   ✓
   4B-1 ✓
   4B-2 ✓

   NEXT PART 4B-3:
   - Standards-compliant QR Generator
   - Global Processing Overlay
   - Cancel processing
   - Better error handling
   - Smart Drop → workspace sync polish
   - Final Part 4 integration
========================================================= */

/* =========================================================
   SENN TOOLS V1
   PART 4B-3
   QR + PROCESSING + PART 4 FINAL INTEGRATION
========================================================= */


/* =========================================================
   139. QR LIBRARY LOADER
========================================================= */

async function ensureQRCodeGenerator() {
  if (
    typeof window.qrcode ===
    "function"
  ) {
    return window.qrcode;
  }

  await loadExternalScript(
    "https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",
    () =>
      typeof window.qrcode ===
      "function"
  );

  if (
    typeof window.qrcode !==
    "function"
  ) {
    throw new Error(
      "QR engine could not be initialized."
    );
  }

  return window.qrcode;
}


/* =========================================================
   140. STANDARDS QR GENERATOR
========================================================= */

function renderStandardsQRGenerator() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-panel">

        <div
          class="tool-panel-header"
          style="margin-bottom: 18px;"
        >
          <div>
            <h2>
              QR Generator
            </h2>

            <p>
              Generate a real scannable
              QR code from text or URLs.
            </p>
          </div>
        </div>

        <div class="tool-controls">

          <div
            class="tool-control full"
          >
            <label>
              Content
            </label>

            <textarea
              class="tool-textarea qr-standard-input"
              rows="6"
              placeholder="Enter text or URL..."
            ></textarea>
          </div>

          <div class="tool-control">
            <label>
              Size
            </label>

            <select
              class="tool-select qr-standard-size"
            >
              <option value="256">
                256 × 256
              </option>

              <option
                value="512"
                selected
              >
                512 × 512
              </option>

              <option value="768">
                768 × 768
              </option>

              <option value="1024">
                1024 × 1024
              </option>
            </select>
          </div>

          <div class="tool-control">
            <label>
              Error Correction
            </label>

            <select
              class="tool-select qr-standard-level"
            >
              <option value="L">
                Low
              </option>

              <option
                value="M"
                selected
              >
                Medium
              </option>

              <option value="Q">
                Quartile
              </option>

              <option value="H">
                High
              </option>
            </select>
          </div>

          <div class="tool-control">
            <label>
              Foreground
            </label>

            <input
              class="tool-input qr-standard-dark"
              type="color"
              value="#111827"
            >
          </div>

          <div class="tool-control">
            <label>
              Background
            </label>

            <input
              class="tool-input qr-standard-light"
              type="color"
              value="#ffffff"
            >
          </div>

        </div>

        <div
          class="tool-actions"
          style="margin-top: 18px;"
        >

          <button
            class="tool-button primary qr-standard-generate"
            type="button"
          >
            <i class="fa-solid fa-qrcode"></i>
            Generate QR
          </button>

          <button
            class="tool-button qr-standard-clear"
            type="button"
          >
            Clear
          </button>

        </div>

      </div>

      <div
        class="tool-panel qr-standard-result"
        style="
          margin-top: 18px;
          display: none;
        "
      >

        <div
          style="
            display: grid;
            place-items: center;
          "
        >
          <canvas
            class="qr-standard-canvas"
            style="
              display: block;
              width: min(100%, 420px);
              height: auto;
              border-radius: 14px;
            "
          ></canvas>
        </div>

        <div
          class="tool-actions"
          style="
            margin-top: 18px;
            justify-content: center;
          "
        >

          <button
            class="tool-button primary qr-standard-download"
            type="button"
          >
            <i class="fa-solid fa-download"></i>
            Download PNG
          </button>

          <button
            class="tool-button qr-standard-copy"
            type="button"
          >
            <i class="fa-regular fa-copy"></i>
            Copy Content
          </button>

        </div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".qr-standard-input"
    );

  const sizeSelect =
    workspaceContent.querySelector(
      ".qr-standard-size"
    );

  const levelSelect =
    workspaceContent.querySelector(
      ".qr-standard-level"
    );

  const darkInput =
    workspaceContent.querySelector(
      ".qr-standard-dark"
    );

  const lightInput =
    workspaceContent.querySelector(
      ".qr-standard-light"
    );

  const generateButton =
    workspaceContent.querySelector(
      ".qr-standard-generate"
    );

  const clearButton =
    workspaceContent.querySelector(
      ".qr-standard-clear"
    );

  const result =
    workspaceContent.querySelector(
      ".qr-standard-result"
    );

  const canvas =
    workspaceContent.querySelector(
      ".qr-standard-canvas"
    );

  const downloadButton =
    workspaceContent.querySelector(
      ".qr-standard-download"
    );

  const copyButton =
    workspaceContent.querySelector(
      ".qr-standard-copy"
    );

  let currentContent =
    "";


  async function generate() {
    const content =
      input.value.trim();

    if (!content) {
      showToast(
        "QR content required",
        "Enter text or a URL first.",
        "warning"
      );

      input.focus();

      return;
    }

    const originalHTML =
      generateButton.innerHTML;

    generateButton.disabled =
      true;

    generateButton.innerHTML = `
      <i class="fa-solid fa-spinner fa-spin"></i>
      Generating...
    `;

    try {
      const qrcode =
        await ensureQRCodeGenerator();

      const level =
        levelSelect.value;

      const qr =
        qrcode(
          0,
          level
        );

      qr.addData(
        content
      );

      qr.make();

      const size =
        Math.max(
          128,
          Number(
            sizeSelect.value
          ) || 512
        );

      drawStandardsQRCode(
        qr,
        canvas,
        {
          size,
          darkColor:
            darkInput.value,

          lightColor:
            lightInput.value
        }
      );

      currentContent =
        content;

      result.style.display =
        "";

      addHistory(
        "qr-generator",
        {
          fileName:
            "Generated QR"
        }
      );

      showToast(
        "QR generated",
        "Your QR code is ready.",
        "success"
      );
    } catch (error) {
      console.error(
        "[SENN TOOLS] QR:",
        error
      );

      showToast(
        "QR generation failed",
        error.message ||
          "Unable to generate this QR code.",
        "error"
      );
    } finally {
      generateButton.disabled =
        false;

      generateButton.innerHTML =
        originalHTML;
    }
  }


  generateButton.addEventListener(
    "click",
    generate
  );


  input.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key ===
          "Enter" &&
        (
          event.ctrlKey ||
          event.metaKey
        )
      ) {
        generate();
      }
    }
  );


  clearButton.addEventListener(
    "click",
    () => {
      input.value =
        "";

      currentContent =
        "";

      result.style.display =
        "none";

      const context =
        canvas.getContext(
          "2d"
        );

      if (context) {
        context.clearRect(
          0,
          0,
          canvas.width,
          canvas.height
        );
      }

      input.focus();
    }
  );


  downloadButton.addEventListener(
    "click",
    async () => {
      if (
        !currentContent
      ) {
        return;
      }

      const blob =
        await canvasToBlob(
          canvas,
          "image/png",
          1
        );

      if (!blob) {
        showToast(
          "Download failed",
          "QR image could not be created.",
          "error"
        );

        return;
      }

      downloadBlob(
        blob,
        "senn-tools-qr.png"
      );
    }
  );


  copyButton.addEventListener(
    "click",
    async () => {
      if (
        !currentContent
      ) {
        return;
      }

      try {
        await navigator.clipboard
          .writeText(
            currentContent
          );

        showToast(
          "Copied",
          "QR content copied.",
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
   141. DRAW STANDARDS QR
========================================================= */

function drawStandardsQRCode(
  qr,
  canvas,
  options = {}
) {
  const moduleCount =
    qr.getModuleCount();

  const requestedSize =
    Math.max(
      128,
      Number(
        options.size
      ) || 512
    );

  const quietZoneModules =
    4;

  const totalModules =
    moduleCount +
    (
      quietZoneModules *
      2
    );

  const moduleSize =
    Math.max(
      1,
      Math.floor(
        requestedSize /
        totalModules
      )
    );

  const actualSize =
    totalModules *
    moduleSize;

  canvas.width =
    actualSize;

  canvas.height =
    actualSize;

  const context =
    canvas.getContext(
      "2d",
      {
        alpha: false
      }
    );

  if (!context) {
    throw new Error(
      "Canvas is not supported by this browser."
    );
  }

  const darkColor =
    options.darkColor ||
    "#111827";

  const lightColor =
    options.lightColor ||
    "#ffffff";

  context.imageSmoothingEnabled =
    false;

  context.fillStyle =
    lightColor;

  context.fillRect(
    0,
    0,
    actualSize,
    actualSize
  );

  context.fillStyle =
    darkColor;

  for (
    let row = 0;
    row < moduleCount;
    row += 1
  ) {
    for (
      let column = 0;
      column < moduleCount;
      column += 1
    ) {
      if (
        !qr.isDark(
          row,
          column
        )
      ) {
        continue;
      }

      context.fillRect(
        (
          column +
          quietZoneModules
        ) *
          moduleSize,

        (
          row +
          quietZoneModules
        ) *
          moduleSize,

        moduleSize,
        moduleSize
      );
    }
  }
}


/* =========================================================
   142. PROCESSING OVERLAY REFERENCES
========================================================= */

function getProcessingElements() {
  return {
    overlay:
      document.getElementById(
        "processingOverlay"
      ),

    title:
      document.getElementById(
        "processingTitle"
      ),

    message:
      document.getElementById(
        "processingMessage"
      ),

    progress:
      document.getElementById(
        "processingProgress"
      ),

    percentage:
      document.getElementById(
        "processingPercentage"
      ),

    cancel:
      document.getElementById(
        "cancelProcessing"
      )
  };
}


/* =========================================================
   143. SHOW PROCESSING OVERLAY
========================================================= */

function showProcessingOverlay(
  options = {}
) {
  const elements =
    getProcessingElements();

  state.processingCancelled =
    false;

  if (
    !elements.overlay
  ) {
    return;
  }

  const title =
    options.title ||
    "Processing";

  const message =
    options.message ||
    "Working on your file...";

  const percentage =
    Math.min(
      Math.max(
        Number(
          options.percentage
        ) || 0,
        0
      ),
      100
    );

  if (
    elements.title
  ) {
    elements.title.textContent =
      title;
  }

  if (
    elements.message
  ) {
    elements.message.textContent =
      message;
  }

  if (
    elements.progress
  ) {
    elements.progress.style.width =
      `${percentage}%`;
  }

  if (
    elements.percentage
  ) {
    elements.percentage.textContent =
      `${percentage}%`;
  }

  elements.overlay.classList.add(
    "active"
  );

  elements.overlay.hidden =
    false;

  document.body.classList.add(
    "processing-active"
  );
}


/* =========================================================
   144. UPDATE PROCESSING OVERLAY
========================================================= */

function updateProcessingOverlay(
  percentage,
  message = ""
) {
  const elements =
    getProcessingElements();

  const safePercentage =
    Math.min(
      Math.max(
        Number(
          percentage
        ) || 0,
        0
      ),
      100
    );

  if (
    elements.progress
  ) {
    elements.progress.style.width =
      `${safePercentage}%`;
  }

  if (
    elements.percentage
  ) {
    elements.percentage.textContent =
      `${safePercentage}%`;
  }

  if (
    elements.message &&
    message
  ) {
    elements.message.textContent =
      message;
  }
}


/* =========================================================
   145. HIDE PROCESSING OVERLAY
========================================================= */

function hideProcessingOverlay() {
  const elements =
    getProcessingElements();

  if (
    elements.overlay
  ) {
    elements.overlay.classList.remove(
      "active"
    );

    elements.overlay.hidden =
      true;
  }

  document.body.classList.remove(
    "processing-active"
  );
}


/* =========================================================
   146. PROCESS CANCELLATION
========================================================= */

function cancelCurrentProcessing() {
  state.processingCancelled =
    true;

  hideProcessingOverlay();

  showToast(
    "Processing cancelled",
    "The current operation was cancelled.",
    "warning"
  );
}


function throwIfProcessingCancelled() {
  if (
    state.processingCancelled
  ) {
    const error =
      new Error(
        "Processing cancelled."
      );

    error.name =
      "SennProcessingCancelled";

    throw error;
  }
}


/* =========================================================
   147. PROCESSING CANCEL BUTTON
========================================================= */

(function bindProcessingCancelButton() {
  const {
    cancel
  } =
    getProcessingElements();

  if (!cancel) {
    return;
  }

  if (
    cancel.dataset
      .sennBound ===
    "true"
  ) {
    return;
  }

  cancel.dataset.sennBound =
    "true";

  cancel.addEventListener(
    "click",
    () => {
      cancelCurrentProcessing();
    }
  );
})();


/* =========================================================
   148. FRIENDLY ERROR MESSAGE
========================================================= */

function getFriendlyToolError(
  error,
  fallback =
    "Something went wrong while processing the file."
) {
  if (!error) {
    return fallback;
  }

  if (
    error.name ===
    "SennProcessingCancelled"
  ) {
    return "Processing cancelled.";
  }

  const message =
    String(
      error.message ||
      ""
    ).trim();

  if (!message) {
    return fallback;
  }

  const lower =
    message.toLowerCase();

  if (
    lower.includes(
      "password"
    ) ||
    lower.includes(
      "encrypted"
    )
  ) {
    return (
      "This file appears to be password-protected or encrypted."
    );
  }

  if (
    lower.includes(
      "invalid pdf"
    ) ||
    lower.includes(
      "failed to parse"
    )
  ) {
    return (
      "This PDF appears to be damaged or unsupported."
    );
  }

  if (
    lower.includes(
      "network"
    ) ||
    lower.includes(
      "failed to fetch"
    )
  ) {
    return (
      "A required processing library could not be loaded."
    );
  }

  if (
    lower.includes(
      "memory"
    ) ||
    lower.includes(
      "allocation"
    )
  ) {
    return (
      "This file is too large for the browser to process safely."
    );
  }

  return message;
}


/* =========================================================
   149. SAFE TOOL TASK WRAPPER
========================================================= */

async function runToolTask(
  task,
  options = {}
) {
  if (
    typeof task !==
    "function"
  ) {
    throw new TypeError(
      "Tool task must be a function."
    );
  }

  const title =
    options.title ||
    "Processing";

  const message =
    options.message ||
    "Working on your file...";

  showProcessingOverlay({
    title,
    message,
    percentage: 0
  });

  try {
    throwIfProcessingCancelled();

    const result =
      await task({
        update(
          percentage,
          status
        ) {
          throwIfProcessingCancelled();

          updateProcessingOverlay(
            percentage,
            status
          );
        },

        isCancelled() {
          return (
            state.processingCancelled
          );
        },

        throwIfCancelled:
          throwIfProcessingCancelled
      });

    throwIfProcessingCancelled();

    updateProcessingOverlay(
      100,
      options.completeMessage ||
        "Complete"
    );

    return result;
  } catch (error) {
    if (
      error?.name !==
      "SennProcessingCancelled"
    ) {
      console.error(
        "[SENN TOOLS] Processing:",
        error
      );
    }

    throw error;
  } finally {
    window.setTimeout(
      () => {
        hideProcessingOverlay();
      },
      180
    );
  }
}


/* =========================================================
   150. SMART DROP → WORKSPACE SYNC
========================================================= */

function syncSmartDropFileToWorkspace() {
  const file =
    getCurrentSelectedFile();

  if (
    !file ||
    !state.currentTool
  ) {
    return false;
  }

  const workspaceInput =
    workspaceContent
      ?.querySelector(
        'input[type="file"]'
      );

  if (
    !workspaceInput
  ) {
    return false;
  }

  const accepts =
    String(
      workspaceInput.accept ||
      ""
    )
      .split(",")
      .map(
        (value) =>
          value
            .trim()
            .toLowerCase()
      )
      .filter(Boolean);

  if (
    accepts.length > 0 &&
    !doesFileMatchAccept(
      file,
      accepts
    )
  ) {
    return false;
  }

  return true;
}


/* =========================================================
   151. FILE ACCEPT MATCHER
========================================================= */

function doesFileMatchAccept(
  file,
  acceptList
) {
  if (
    !file ||
    !Array.isArray(
      acceptList
    )
  ) {
    return false;
  }

  if (
    acceptList.length === 0
  ) {
    return true;
  }

  const fileType =
    String(
      file.type ||
      ""
    ).toLowerCase();

  const extension =
    `.${getFileExtension(
      file.name
    ).toLowerCase()}`;

  return acceptList.some(
    (accept) => {
      if (
        accept.startsWith(
          "."
        )
      ) {
        return (
          extension ===
          accept
        );
      }

      if (
        accept.endsWith(
          "/*"
        )
      ) {
        const prefix =
          accept.slice(
            0,
            -1
          );

        return fileType
          .startsWith(
            prefix
          );
      }

      return (
        fileType ===
        accept
      );
    }
  );
}


/* =========================================================
   152. BACKEND TOOL STATE
========================================================= */

function renderBackendRequiredTool(
  toolId
) {
  const tool =
    tools[toolId];

  if (!tool) {
    renderUnavailableTool(
      toolId
    );

    return;
  }

  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-panel">

        <div
          class="workspace-placeholder-icon"
        >
          <i class="${escapeHTML(
            tool.icon
          )}"></i>
        </div>

        <h2>
          ${escapeHTML(
            tool.name
          )}
        </h2>

        <p>
          This tool requires the
          SENN processing backend.
        </p>

        <div
          class="tool-notice"
          style="margin-top: 18px;"
        >

          <i class="fa-solid fa-server"></i>

          <span>
            The interface is ready,
            but real processing is
            intentionally disabled
            until the backend engine
            is connected.
          </span>

        </div>

      </div>

    </div>
  `;
}


/* =========================================================
   153. BACKEND ROUTER
========================================================= */

function shouldUseBackendPlaceholder(
  toolId
) {
  const tool =
    tools[toolId];

  return Boolean(
    tool &&
    tool.backendRequired
  );
}


/* =========================================================
   154. PART 4B-3 RENDERERS
========================================================= */

const part4B3Renderers = {
  "qr-generator":
    renderStandardsQRGenerator
};


/* =========================================================
   155. FINAL PART 4 ROUTER
========================================================= */

const previousPart4B2RenderToolWorkspace =
  renderToolWorkspace;

renderToolWorkspace =
  function (
    toolId
  ) {
    const renderer =
      part4B3Renderers[
        toolId
      ];

    if (renderer) {
      renderer();

      return;
    }

    if (
      shouldUseBackendPlaceholder(
        toolId
      )
    ) {
      renderBackendRequiredTool(
        toolId
      );

      return;
    }

    previousPart4B2RenderToolWorkspace(
      toolId
    );

    window.requestAnimationFrame(
      () => {
        syncSmartDropFileToWorkspace();
      }
    );
  };


/* =========================================================
   156. PROCESSING STATE RESET
========================================================= */

function resetProcessingState() {
  state.processingCancelled =
    false;

  hideProcessingOverlay();
}


window.addEventListener(
  "pageshow",
  () => {
    resetProcessingState();
  }
);


/* =========================================================
   157. PART 4 FINAL CHECK
========================================================= */

function getPart4Status() {
  return {
    qr:
      typeof renderStandardsQRGenerator ===
      "function",

    imageToPDF:
      typeof renderImageToPDF ===
      "function",

    mergePDF:
      typeof renderMergePDF ===
      "function",

    splitPDF:
      typeof renderSplitPDF ===
      "function",

    pdfToImage:
      typeof renderPDFToImage ===
      "function",

    compressPDF:
      typeof renderPDFCompressor ===
      "function",

    jsonCSV:
      typeof renderJSONCSV ===
      "function",

    processing:
      typeof runToolTask ===
      "function"
  };
}


/* =========================================================
   158. PART 4B-3 READY
========================================================= */

console.log(
  "[SENN TOOLS] Part 4B-3 ready.",
  getPart4Status()
);


/* =========================================================
   PART 4B-3 END

   ADDED:
   ✓ Standards-compliant QR engine
   ✓ QR PNG export
   ✓ QR colors
   ✓ QR error correction levels
   ✓ QR quiet zone
   ✓ Processing overlay controller
   ✓ Processing progress API
   ✓ Processing cancellation state
   ✓ Friendly processing errors
   ✓ Reusable async task wrapper
   ✓ Smart Drop compatibility matcher
   ✓ Backend-required tool state
   ✓ Final Part 4 router
   ✓ Processing state cleanup

   PART 4 STATUS:
   4A   ✓
   4B-1 ✓
   4B-2 ✓
   4B-3 ✓

   PART 4 COMPLETE

   NEXT:
   PART 5
   - Video Compressor
   - Video Trimmer
   - Video → Audio
   - Video Upscaler handling
   - Media Converter
   - Audio Converter
   - Remaining media tools
========================================================= */

/* =========================================================
   SENN TOOLS V1
   PART 5A
   MEDIA ENGINE + VIDEO COMPRESSOR + VIDEO TRIMMER
========================================================= */


/* =========================================================
   159. MEDIA ENGINE STATE
========================================================= */

const sennMediaEngine = {
  ffmpeg: null,
  loadingPromise: null,
  loaded: false,
  activeTask: false,
  progressHandler: null
};


/* =========================================================
   160. FFMPEG MODULE LOADER
========================================================= */

async function ensureFFmpegEngine() {
  if (
    sennMediaEngine.loaded &&
    sennMediaEngine.ffmpeg
  ) {
    return sennMediaEngine.ffmpeg;
  }

  if (
    sennMediaEngine.loadingPromise
  ) {
    return (
      sennMediaEngine
        .loadingPromise
    );
  }

  sennMediaEngine.loadingPromise =
    (async () => {
      try {
        const ffmpegModule =
          await import(
            "https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.15/dist/esm/index.js"
          );

        const utilModule =
          await import(
            "https://cdn.jsdelivr.net/npm/@ffmpeg/util@0.12.2/dist/esm/index.js"
          );

        const {
          FFmpeg
        } =
          ffmpegModule;

        const {
          toBlobURL
        } =
          utilModule;

        if (
          typeof FFmpeg !==
          "function"
        ) {
          throw new Error(
            "FFmpeg class is unavailable."
          );
        }

        const ffmpeg =
          new FFmpeg();

        const baseURL =
          "https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/esm";

        const coreURL =
          await toBlobURL(
            `${baseURL}/ffmpeg-core.js`,
            "text/javascript"
          );

        const wasmURL =
          await toBlobURL(
            `${baseURL}/ffmpeg-core.wasm`,
            "application/wasm"
          );

        ffmpeg.on(
          "log",
          ({
            message
          }) => {
            console.debug(
              "[SENN MEDIA]",
              message
            );
          }
        );

        ffmpeg.on(
          "progress",
          ({
            progress
          }) => {
            const percentage =
              Math.min(
                Math.max(
                  Math.round(
                    (
                      Number(
                        progress
                      ) || 0
                    ) *
                      100
                  ),
                  0
                ),
                100
              );

            if (
              typeof
                sennMediaEngine
                  .progressHandler ===
              "function"
            ) {
              sennMediaEngine
                .progressHandler(
                  percentage
                );
            }
          }
        );

        await ffmpeg.load({
          coreURL,
          wasmURL
        });

        sennMediaEngine.ffmpeg =
          ffmpeg;

        sennMediaEngine.loaded =
          true;

        return ffmpeg;
      } catch (error) {
        sennMediaEngine.ffmpeg =
          null;

        sennMediaEngine.loaded =
          false;

        throw new Error(
          getFriendlyToolError(
            error,
            "The media engine could not be loaded."
          )
        );
      } finally {
        sennMediaEngine.loadingPromise =
          null;
      }
    })();

  return (
    sennMediaEngine
      .loadingPromise
  );
}


/* =========================================================
   161. MEDIA FILE HELPERS
========================================================= */

function isVideoFile(
  file
) {
  if (!file) {
    return false;
  }

  const mimeType =
    String(
      file.type ||
      ""
    ).toLowerCase();

  const extension =
    getFileExtension(
      file.name
    ).toLowerCase();

  return (
    mimeType.startsWith(
      "video/"
    ) ||
    [
      "mp4",
      "webm",
      "mov",
      "m4v",
      "avi",
      "mkv",
      "ogv"
    ].includes(
      extension
    )
  );
}


function getMediaExtension(
  file,
  fallback =
    "mp4"
) {
  const extension =
    getFileExtension(
      file?.name ||
      ""
    )
      .trim()
      .toLowerCase();

  if (
    extension &&
    /^[a-z0-9]+$/i.test(
      extension
    )
  ) {
    return extension;
  }

  return fallback;
}


function createMediaTempName(
  prefix,
  extension
) {
  const random =
    (
      crypto.randomUUID?.() ||
      `${Date.now()}-${Math.random()}`
    )
      .replaceAll(
        ".",
        "-"
      );

  return (
    `${prefix}-${random}.${extension}`
  );
}


/* =========================================================
   162. READ MEDIA FILE
========================================================= */

async function mediaFileToUint8Array(
  file
) {
  if (!file) {
    throw new Error(
      "No media file selected."
    );
  }

  const buffer =
    await file.arrayBuffer();

  return new Uint8Array(
    buffer
  );
}


/* =========================================================
   163. SAFE FFMPEG FILE CLEANUP
========================================================= */

async function deleteFFmpegFileSafe(
  ffmpeg,
  fileName
) {
  if (
    !ffmpeg ||
    !fileName
  ) {
    return;
  }

  try {
    await ffmpeg.deleteFile(
      fileName
    );
  } catch {
    // File may already be gone.
  }
}


/* =========================================================
   164. MEDIA TASK RUNNER
========================================================= */

async function runMediaTask(
  callback,
  options = {}
) {
  if (
    sennMediaEngine.activeTask
  ) {
    throw new Error(
      "Another media task is already running."
    );
  }

  sennMediaEngine.activeTask =
    true;

  state.processingCancelled =
    false;

  try {
    return await runToolTask(
      async ({
        update,
        throwIfCancelled
      }) => {
        update(
          2,
          "Loading media engine..."
        );

        const ffmpeg =
          await ensureFFmpegEngine();

        throwIfCancelled();

        sennMediaEngine
          .progressHandler =
          (
            percentage
          ) => {
            update(
              Math.max(
                5,
                percentage
              ),
              options.progressMessage ||
                "Processing media..."
            );
          };

        update(
          5,
          "Preparing media..."
        );

        return await callback(
          ffmpeg,
          {
            update,
            throwIfCancelled
          }
        );
      },
      {
        title:
          options.title ||
          "Media Processing",

        message:
          options.message ||
          "Preparing media engine...",

        completeMessage:
          options.completeMessage ||
          "Media processing complete"
      }
    );
  } finally {
    sennMediaEngine
      .progressHandler =
      null;

    sennMediaEngine.activeTask =
      false;
  }
}


/* =========================================================
   165. VIDEO METADATA READER
========================================================= */

function readVideoMetadata(
  file
) {
  return new Promise(
    (
      resolve,
      reject
    ) => {
      if (
        !isVideoFile(
          file
        )
      ) {
        reject(
          new Error(
            "Choose a valid video file."
          )
        );

        return;
      }

      const video =
        document.createElement(
          "video"
        );

      const url =
        URL.createObjectURL(
          file
        );

      video.preload =
        "metadata";

      video.muted =
        true;

      video.playsInline =
        true;

      const cleanup =
        () => {
          URL.revokeObjectURL(
            url
          );

          video.removeAttribute(
            "src"
          );

          video.load();
        };

      video.addEventListener(
        "loadedmetadata",
        () => {
          const metadata = {
            duration:
              Number.isFinite(
                video.duration
              )
                ? video.duration
                : 0,

            width:
              video.videoWidth ||
              0,

            height:
              video.videoHeight ||
              0,

            size:
              file.size,

            type:
              file.type ||
              "video",

            name:
              file.name
          };

          cleanup();

          resolve(
            metadata
          );
        },
        {
          once: true
        }
      );

      video.addEventListener(
        "error",
        () => {
          cleanup();

          reject(
            new Error(
              "The browser could not read this video's metadata."
            )
          );
        },
        {
          once: true
        }
      );

      video.src =
        url;
    }
  );
}


/* =========================================================
   166. MEDIA TIME FORMATTER
========================================================= */

function formatMediaTime(
  seconds
) {
  const safeSeconds =
    Math.max(
      0,
      Number(
        seconds
      ) || 0
    );

  const hours =
    Math.floor(
      safeSeconds /
      3600
    );

  const minutes =
    Math.floor(
      (
        safeSeconds %
        3600
      ) /
      60
    );

  const remainingSeconds =
    Math.floor(
      safeSeconds %
      60
    );

  const secondText =
    String(
      remainingSeconds
    ).padStart(
      2,
      "0"
    );

  const minuteText =
    String(
      minutes
    ).padStart(
      2,
      "0"
    );

  if (
    hours > 0
  ) {
    return (
      `${hours}:` +
      `${minuteText}:` +
      `${secondText}`
    );
  }

  return (
    `${minutes}:` +
    `${secondText}`
  );
}


/* =========================================================
   167. VIDEO FILE CARD
========================================================= */

function createVideoFileCardHTML(
  file,
  metadata = null
) {
  const resolution =
    metadata &&
    metadata.width &&
    metadata.height
      ? `${metadata.width} × ${metadata.height}`
      : "Reading resolution...";

  const duration =
    metadata
      ? formatMediaTime(
          metadata.duration
        )
      : "Reading duration...";

  return `
    <div
      class="tool-file-card"
      style="
        display: flex;
        align-items: center;
        gap: 14px;
      "
    >

      <div
        class="tool-file-icon"
      >
        <i class="fa-solid fa-film"></i>
      </div>

      <div
        style="
          min-width: 0;
          flex: 1;
        "
      >

        <strong
          style="
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          "
        >
          ${escapeHTML(
            file.name
          )}
        </strong>

        <small>
          ${escapeHTML(
            formatBytes(
              file.size
            )
          )}
          •
          ${escapeHTML(
            resolution
          )}
          •
          ${escapeHTML(
            duration
          )}
        </small>

      </div>

    </div>
  `;
}


/* =========================================================
   168. VIDEO PREVIEW COMPONENT
========================================================= */

function createVideoPreview(
  file,
  container
) {
  if (
    !file ||
    !container
  ) {
    return null;
  }

  const oldURL =
    container.dataset
      .videoObjectUrl;

  if (oldURL) {
    URL.revokeObjectURL(
      oldURL
    );
  }

  const url =
    URL.createObjectURL(
      file
    );

  container.dataset
    .videoObjectUrl =
    url;

  container.innerHTML = `
    <video
      controls
      playsinline
      preload="metadata"
      style="
        display: block;
        width: 100%;
        max-height: 460px;
        background: #000;
        border-radius: 14px;
      "
    >
      <source
        src="${url}"
        type="${escapeHTML(
          file.type ||
          "video/mp4"
        )}"
      >
    </video>
  `;

  return (
    container.querySelector(
      "video"
    )
  );
}


/* =========================================================
   169. VIDEO COMPRESSOR UI
========================================================= */

function renderVideoCompressor() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div
          class="workspace-placeholder-icon"
        >
          <i class="fa-solid fa-file-video"></i>
        </div>

        <h2>
          Video Compressor
        </h2>

        <p>
          Reduce video file size
          directly in your browser.
        </p>

        <input
          class="video-compress-input"
          type="file"
          accept="video/*,.mp4,.webm,.mov,.m4v"
          hidden
        >

        <button
          class="tool-button primary video-compress-select"
          type="button"
        >
          <i class="fa-solid fa-file-arrow-up"></i>
          Choose Video
        </button>

      </div>

      <div
        class="tool-panel video-compress-panel"
        hidden
      >

        <div
          class="video-compress-file"
        ></div>

        <div
          class="video-compress-preview"
          style="margin-top: 18px;"
        ></div>

        <div
          class="tool-controls"
          style="margin-top: 18px;"
        >

          <div class="tool-control">

            <label>
              Compression
            </label>

            <select
              class="tool-select video-compress-level"
            >
              <option value="light">
                Light
              </option>

              <option
                value="balanced"
                selected
              >
                Balanced
              </option>

              <option value="strong">
                Strong
              </option>
            </select>

          </div>

          <div class="tool-control">

            <label>
              Output Resolution
            </label>

            <select
              class="tool-select video-compress-resolution"
            >
              <option
                value="original"
                selected
              >
                Original
              </option>

              <option value="1080">
                Max 1080p
              </option>

              <option value="720">
                Max 720p
              </option>

              <option value="480">
                Max 480p
              </option>
            </select>

          </div>

        </div>

        <div
          class="tool-notice"
          style="margin-top: 18px;"
        >
          <i class="fa-solid fa-circle-info"></i>

          <span>
            Video processing runs
            locally in your browser.
            Large videos may use
            significant memory.
          </span>
        </div>

        <div
          class="tool-actions"
          style="margin-top: 18px;"
        >

          <button
            class="tool-button primary video-compress-run"
            type="button"
          >
            <i class="fa-solid fa-compress"></i>
            Compress Video
          </button>

          <button
            class="tool-button video-compress-clear"
            type="button"
          >
            Clear
          </button>

        </div>

        <div
          class="video-compress-result"
        ></div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".video-compress-input"
    );

  const selectButton =
    workspaceContent.querySelector(
      ".video-compress-select"
    );

  const panel =
    workspaceContent.querySelector(
      ".video-compress-panel"
    );

  const fileContainer =
    workspaceContent.querySelector(
      ".video-compress-file"
    );

  const previewContainer =
    workspaceContent.querySelector(
      ".video-compress-preview"
    );

  const levelSelect =
    workspaceContent.querySelector(
      ".video-compress-level"
    );

  const resolutionSelect =
    workspaceContent.querySelector(
      ".video-compress-resolution"
    );

  const runButton =
    workspaceContent.querySelector(
      ".video-compress-run"
    );

  const clearButton =
    workspaceContent.querySelector(
      ".video-compress-clear"
    );

  const result =
    workspaceContent.querySelector(
      ".video-compress-result"
    );

  let selectedVideo =
    null;

  let metadata =
    null;


  async function loadVideo(
    file
  ) {
    if (
      !isVideoFile(
        file
      )
    ) {
      showToast(
        "Invalid video",
        "Choose a supported video file.",
        "warning"
      );

      return;
    }

    selectedVideo =
      file;

    metadata =
      null;

    panel.hidden =
      false;

    result.innerHTML =
      "";

    fileContainer.innerHTML =
      createVideoFileCardHTML(
        file
      );

    createVideoPreview(
      file,
      previewContainer
    );

    try {
      metadata =
        await readVideoMetadata(
          file
        );

      if (
        selectedVideo !==
        file
      ) {
        return;
      }

      fileContainer.innerHTML =
        createVideoFileCardHTML(
          file,
          metadata
        );
    } catch (error) {
      console.warn(
        "[SENN TOOLS] Video metadata:",
        error
      );
    }
  }


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

      if (file) {
        loadVideo(
          file
        );
      }
    }
  );


  clearButton.addEventListener(
    "click",
    () => {
      selectedVideo =
        null;

      metadata =
        null;

      input.value =
        "";

      panel.hidden =
        true;

      result.innerHTML =
        "";

      fileContainer.innerHTML =
        "";

      const oldURL =
        previewContainer.dataset
          .videoObjectUrl;

      if (oldURL) {
        URL.revokeObjectURL(
          oldURL
        );

        delete previewContainer
          .dataset
          .videoObjectUrl;
      }

      previewContainer.innerHTML =
        "";
    }
  );


  runButton.addEventListener(
    "click",
    async () => {
      if (
        !selectedVideo
      ) {
        return;
      }

      const originalHTML =
        runButton.innerHTML;

      runButton.disabled =
        true;

      runButton.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Compressing...
      `;

      try {
        const output =
          await compressVideoFile(
            selectedVideo,
            {
              level:
                levelSelect.value,

              resolution:
                resolutionSelect.value
            }
          );

        const baseName =
          getBaseFileName(
            selectedVideo.name
          );

        const difference =
          selectedVideo.size -
          output.size;

        const percentage =
          selectedVideo.size > 0
            ? (
                difference /
                selectedVideo.size
              ) *
              100
            : 0;

        result.innerHTML = `
          <div
            class="tool-notice ${
              difference > 0
                ? "success"
                : ""
            }"
            style="margin-top: 18px;"
          >

            <i class="fa-solid fa-chart-simple"></i>

            <span>
              Original:
              ${escapeHTML(
                formatBytes(
                  selectedVideo.size
                )
              )}
              •
              Output:
              ${escapeHTML(
                formatBytes(
                  output.size
                )
              )}
              ${
                difference > 0
                  ? `• ${percentage.toFixed(
                      1
                    )}% smaller`
                  : "• Output was not smaller"
              }
            </span>

          </div>
        `;

        downloadBlob(
          output,
          `${baseName}-compressed.mp4`
        );

        addHistory(
          "video-compressor",
          {
            fileName:
              selectedVideo.name
          }
        );

        showToast(
          "Video processed",
          difference > 0
            ? `${percentage.toFixed(
                1
              )}% smaller.`
            : "Compression completed, but the result was not smaller.",
          difference > 0
            ? "success"
            : "info"
        );
      } catch (error) {
        if (
          error?.name ===
          "SennProcessingCancelled"
        ) {
          return;
        }

        console.error(
          "[SENN TOOLS] Video Compressor:",
          error
        );

        showToast(
          "Compression failed",
          getFriendlyToolError(
            error,
            "Unable to compress this video."
          ),
          "error"
        );
      } finally {
        runButton.disabled =
          false;

        runButton.innerHTML =
          originalHTML;
      }
    }
  );


  const smartFile =
    getCurrentSelectedFile();

  if (
    smartFile &&
    isVideoFile(
      smartFile
    )
  ) {
    loadVideo(
      smartFile
    );
  }
}


/* =========================================================
   170. VIDEO COMPRESSION ENGINE
========================================================= */

async function compressVideoFile(
  file,
  options = {}
) {
  return runMediaTask(
    async (
      ffmpeg,
      {
        update,
        throwIfCancelled
      }
    ) => {
      const inputExtension =
        getMediaExtension(
          file,
          "mp4"
        );

      const inputName =
        createMediaTempName(
          "input",
          inputExtension
        );

      const outputName =
        createMediaTempName(
          "compressed",
          "mp4"
        );

      try {
        update(
          7,
          "Loading video..."
        );

        await ffmpeg.writeFile(
          inputName,
          await mediaFileToUint8Array(
            file
          )
        );

        throwIfCancelled();

        const level =
          options.level ||
          "balanced";

        const crfMap = {
          light: "24",
          balanced: "28",
          strong: "32"
        };

        const presetMap = {
          light: "fast",
          balanced: "veryfast",
          strong: "veryfast"
        };

        const args = [
          "-i",
          inputName,
          "-map",
          "0:v:0",
          "-map",
          "0:a?",
          "-c:v",
          "libx264",
          "-preset",
          presetMap[
            level
          ] ||
            "veryfast",
          "-crf",
          crfMap[
            level
          ] ||
            "28"
        ];

        const resolution =
          String(
            options.resolution ||
            "original"
          );

        if (
          resolution !==
          "original"
        ) {
          const height =
            Math.max(
              144,
              Number(
                resolution
              ) || 720
            );

          args.push(
            "-vf",
            `scale=-2:'min(${height},ih)'`
          );
        }

        args.push(
          "-c:a",
          "aac",
          "-b:a",
          level ===
            "strong"
            ? "96k"
            : "128k",
          "-movflags",
          "+faststart",
          "-pix_fmt",
          "yuv420p",
          outputName
        );

        update(
          10,
          "Compressing video..."
        );

        await ffmpeg.exec(
          args
        );

        throwIfCancelled();

        update(
          96,
          "Preparing download..."
        );

        const data =
          await ffmpeg.readFile(
            outputName
          );

        return new Blob(
          [
            data
          ],
          {
            type:
              "video/mp4"
          }
        );
      } finally {
        await deleteFFmpegFileSafe(
          ffmpeg,
          inputName
        );

        await deleteFFmpegFileSafe(
          ffmpeg,
          outputName
        );
      }
    },
    {
      title:
        "Compressing Video",

      message:
        "Preparing video...",

      progressMessage:
        "Compressing video...",

      completeMessage:
        "Video compression complete"
    }
  );
}


/* =========================================================
   171. VIDEO TRIMMER UI
========================================================= */

function renderVideoTrimmer() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div
          class="workspace-placeholder-icon"
        >
          <i class="fa-solid fa-scissors"></i>
        </div>

        <h2>
          Video Trimmer
        </h2>

        <p>
          Cut a section from your video
          using start and end times.
        </p>

        <input
          class="video-trim-input"
          type="file"
          accept="video/*,.mp4,.webm,.mov,.m4v"
          hidden
        >

        <button
          class="tool-button primary video-trim-select"
          type="button"
        >
          <i class="fa-solid fa-file-arrow-up"></i>
          Choose Video
        </button>

      </div>

      <div
        class="tool-panel video-trim-panel"
        hidden
      >

        <div
          class="video-trim-file"
        ></div>

        <div
          class="video-trim-preview"
          style="margin-top: 18px;"
        ></div>

        <div
          class="tool-controls"
          style="margin-top: 18px;"
        >

          <div class="tool-control">

            <label>
              Start
            </label>

            <input
              class="tool-input video-trim-start"
              type="number"
              value="0"
              min="0"
              step="0.1"
            >

            <small>
              Seconds
            </small>

          </div>

          <div class="tool-control">

            <label>
              End
            </label>

            <input
              class="tool-input video-trim-end"
              type="number"
              value="0"
              min="0"
              step="0.1"
            >

            <small>
              Seconds
            </small>

          </div>

        </div>

        <div
          class="video-trim-summary tool-notice"
          style="margin-top: 18px;"
        >

          <i class="fa-regular fa-clock"></i>

          <span>
            Select a video to calculate
            the trim duration.
          </span>

        </div>

        <div
          class="tool-actions"
          style="margin-top: 18px;"
        >

          <button
            class="tool-button video-trim-use-current"
            type="button"
          >
            <i class="fa-solid fa-location-crosshairs"></i>
            Start = Current
          </button>

          <button
            class="tool-button video-trim-use-end"
            type="button"
          >
            <i class="fa-solid fa-location-crosshairs"></i>
            End = Current
          </button>

          <button
            class="tool-button primary video-trim-run"
            type="button"
          >
            <i class="fa-solid fa-scissors"></i>
            Trim Video
          </button>

          <button
            class="tool-button video-trim-clear"
            type="button"
          >
            Clear
          </button>

        </div>

        <div
          class="video-trim-result"
        ></div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".video-trim-input"
    );

  const selectButton =
    workspaceContent.querySelector(
      ".video-trim-select"
    );

  const panel =
    workspaceContent.querySelector(
      ".video-trim-panel"
    );

  const fileContainer =
    workspaceContent.querySelector(
      ".video-trim-file"
    );

  const previewContainer =
    workspaceContent.querySelector(
      ".video-trim-preview"
    );

  const startInput =
    workspaceContent.querySelector(
      ".video-trim-start"
    );

  const endInput =
    workspaceContent.querySelector(
      ".video-trim-end"
    );

  const summary =
    workspaceContent.querySelector(
      ".video-trim-summary span"
    );

  const useCurrentButton =
    workspaceContent.querySelector(
      ".video-trim-use-current"
    );

  const useEndButton =
    workspaceContent.querySelector(
      ".video-trim-use-end"
    );

  const runButton =
    workspaceContent.querySelector(
      ".video-trim-run"
    );

  const clearButton =
    workspaceContent.querySelector(
      ".video-trim-clear"
    );

  const result =
    workspaceContent.querySelector(
      ".video-trim-result"
    );

  let selectedVideo =
    null;

  let metadata =
    null;

  let previewVideo =
    null;


  function updateSummary() {
    if (!metadata) {
      return;
    }

    const start =
      Math.max(
        0,
        Number(
          startInput.value
        ) || 0
      );

    const end =
      Math.min(
        metadata.duration,
        Math.max(
          0,
          Number(
            endInput.value
          ) || 0
        )
      );

    const duration =
      Math.max(
        0,
        end -
        start
      );

    summary.textContent =
      `Start ${formatMediaTime(
        start
      )} • ` +
      `End ${formatMediaTime(
        end
      )} • ` +
      `Output ${formatMediaTime(
        duration
      )}`;
  }


  async function loadVideo(
    file
  ) {
    if (
      !isVideoFile(
        file
      )
    ) {
      showToast(
        "Invalid video",
        "Choose a supported video file.",
        "warning"
      );

      return;
    }

    selectedVideo =
      file;

    metadata =
      null;

    panel.hidden =
      false;

    result.innerHTML =
      "";

    fileContainer.innerHTML =
      createVideoFileCardHTML(
        file
      );

    previewVideo =
      createVideoPreview(
        file,
        previewContainer
      );

    try {
      metadata =
        await readVideoMetadata(
          file
        );

      if (
        selectedVideo !==
        file
      ) {
        return;
      }

      startInput.value =
        "0";

      endInput.value =
        metadata.duration.toFixed(
          2
        );

      startInput.max =
        String(
          metadata.duration
        );

      endInput.max =
        String(
          metadata.duration
        );

      fileContainer.innerHTML =
        createVideoFileCardHTML(
          file,
          metadata
        );

      updateSummary();
    } catch (error) {
      showToast(
        "Metadata unavailable",
        getFriendlyToolError(
          error,
          "Unable to read video duration."
        ),
        "warning"
      );
    }
  }


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

      if (file) {
        loadVideo(
          file
        );
      }
    }
  );


  startInput.addEventListener(
    "input",
    updateSummary
  );

  endInput.addEventListener(
    "input",
    updateSummary
  );


  useCurrentButton.addEventListener(
    "click",
    () => {
      if (
        !previewVideo ||
        !metadata
      ) {
        return;
      }

      startInput.value =
        Math.min(
          previewVideo.currentTime,
          metadata.duration
        ).toFixed(
          2
        );

      updateSummary();
    }
  );


  useEndButton.addEventListener(
    "click",
    () => {
      if (
        !previewVideo ||
        !metadata
      ) {
        return;
      }

      endInput.value =
        Math.min(
          previewVideo.currentTime,
          metadata.duration
        ).toFixed(
          2
        );

      updateSummary();
    }
  );


  clearButton.addEventListener(
    "click",
    () => {
      selectedVideo =
        null;

      metadata =
        null;

      previewVideo =
        null;

      input.value =
        "";

      panel.hidden =
        true;

      fileContainer.innerHTML =
        "";

      result.innerHTML =
        "";

      startInput.value =
        "0";

      endInput.value =
        "0";

      const oldURL =
        previewContainer.dataset
          .videoObjectUrl;

      if (oldURL) {
        URL.revokeObjectURL(
          oldURL
        );

        delete previewContainer
          .dataset
          .videoObjectUrl;
      }

      previewContainer.innerHTML =
        "";
    }
  );


  runButton.addEventListener(
    "click",
    async () => {
      if (
        !selectedVideo ||
        !metadata
      ) {
        return;
      }

      const start =
        Math.max(
          0,
          Number(
            startInput.value
          ) || 0
        );

      const end =
        Math.min(
          metadata.duration,
          Number(
            endInput.value
          ) ||
            metadata.duration
        );

      if (
        end <= start
      ) {
        showToast(
          "Invalid trim range",
          "End time must be greater than start time.",
          "warning"
        );

        return;
      }

      const originalHTML =
        runButton.innerHTML;

      runButton.disabled =
        true;

      runButton.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Trimming...
      `;

      try {
        const output =
          await trimVideoFile(
            selectedVideo,
            start,
            end
          );

        const baseName =
          getBaseFileName(
            selectedVideo.name
          );

        downloadBlob(
          output,
          `${baseName}-trimmed.mp4`
        );

        result.innerHTML = `
          <div
            class="tool-notice success"
            style="margin-top: 18px;"
          >
            <i class="fa-solid fa-circle-check"></i>

            <span>
              Trimmed video:
              ${escapeHTML(
                formatMediaTime(
                  end -
                  start
                )
              )}
              •
              ${escapeHTML(
                formatBytes(
                  output.size
                )
              )}
            </span>
          </div>
        `;

        addHistory(
          "video-trimmer",
          {
            fileName:
              selectedVideo.name
          }
        );

        showToast(
          "Video trimmed",
          "The trimmed video is ready.",
          "success"
        );
      } catch (error) {
        if (
          error?.name ===
          "SennProcessingCancelled"
        ) {
          return;
        }

        console.error(
          "[SENN TOOLS] Video Trimmer:",
          error
        );

        showToast(
          "Trim failed",
          getFriendlyToolError(
            error,
            "Unable to trim this video."
          ),
          "error"
        );
      } finally {
        runButton.disabled =
          false;

        runButton.innerHTML =
          originalHTML;
      }
    }
  );


  const smartFile =
    getCurrentSelectedFile();

  if (
    smartFile &&
    isVideoFile(
      smartFile
    )
  ) {
    loadVideo(
      smartFile
    );
  }
}


/* =========================================================
   172. VIDEO TRIM ENGINE
========================================================= */

async function trimVideoFile(
  file,
  start,
  end
) {
  const duration =
    Math.max(
      0.01,
      end -
      start
    );

  return runMediaTask(
    async (
      ffmpeg,
      {
        update,
        throwIfCancelled
      }
    ) => {
      const extension =
        getMediaExtension(
          file,
          "mp4"
        );

      const inputName =
        createMediaTempName(
          "trim-input",
          extension
        );

      const outputName =
        createMediaTempName(
          "trim-output",
          "mp4"
        );

      try {
        update(
          7,
          "Loading video..."
        );

        await ffmpeg.writeFile(
          inputName,
          await mediaFileToUint8Array(
            file
          )
        );

        throwIfCancelled();

        update(
          10,
          "Trimming video..."
        );

        await ffmpeg.exec([
          "-ss",
          String(
            start
          ),
          "-i",
          inputName,
          "-t",
          String(
            duration
          ),
          "-map",
          "0:v:0",
          "-map",
          "0:a?",
          "-c:v",
          "libx264",
          "-preset",
          "veryfast",
          "-crf",
          "23",
          "-c:a",
          "aac",
          "-b:a",
          "128k",
          "-movflags",
          "+faststart",
          "-pix_fmt",
          "yuv420p",
          outputName
        ]);

        throwIfCancelled();

        update(
          96,
          "Preparing trimmed video..."
        );

        const data =
          await ffmpeg.readFile(
            outputName
          );

        return new Blob(
          [
            data
          ],
          {
            type:
              "video/mp4"
          }
        );
      } finally {
        await deleteFFmpegFileSafe(
          ffmpeg,
          inputName
        );

        await deleteFFmpegFileSafe(
          ffmpeg,
          outputName
        );
      }
    },
    {
      title:
        "Trimming Video",

      message:
        "Preparing video...",

      progressMessage:
        "Trimming video...",

      completeMessage:
        "Video trim complete"
    }
  );
}


/* =========================================================
   173. PART 5A RENDERERS
========================================================= */

const part5ARenderers = {
  "video-compressor":
    renderVideoCompressor,

  "video-trimmer":
    renderVideoTrimmer
};


/* =========================================================
   174. PART 5A ROUTER
========================================================= */

const previousPart4FinalRenderToolWorkspace =
  renderToolWorkspace;

renderToolWorkspace =
  function (
    toolId
  ) {
    const renderer =
      part5ARenderers[
        toolId
      ];

    if (renderer) {
      renderer();

      return;
    }

    previousPart4FinalRenderToolWorkspace(
      toolId
    );
  };


/* =========================================================
   175. PART 5A STATUS
========================================================= */

function getPart5AStatus() {
  return {
    ffmpegEngine:
      typeof ensureFFmpegEngine ===
      "function",

    mediaRunner:
      typeof runMediaTask ===
      "function",

    videoMetadata:
      typeof readVideoMetadata ===
      "function",

    videoCompressor:
      typeof renderVideoCompressor ===
      "function",

    videoTrimmer:
      typeof renderVideoTrimmer ===
      "function"
  };
}


/* =========================================================
   176. PART 5A READY
========================================================= */

console.log(
  "[SENN TOOLS] Part 5A ready.",
  getPart5AStatus()
);


/* =========================================================
   PART 5A END

   ADDED:
   ✓ FFmpeg WebAssembly loader
    ✓ Single-thread browser media engine
   ✓ Media task runner
   ✓ Media progress bridge
   ✓ Video validation
   ✓ Video metadata reader
   ✓ Video preview
   ✓ Video Compressor
   ✓ Light / Balanced / Strong compression
   ✓ Optional 1080p / 720p / 480p scaling
   ✓ Video Trimmer
   ✓ Current playback time → trim controls
   ✓ Smart Drop video integration
   ✓ Part 5A router override

   NEXT PART 5B:
   - Video → Audio
   - Audio Converter
   - Media Converter
========================================================= */
/* =========================================================
   177. AUDIO FILE VALIDATION
========================================================= */

function isAudioFile(file) {
  if (!file) {
    return false;
  }

  const type =
    String(file.type || "")
      .toLowerCase();

  if (type.startsWith("video/")) {
    return false;
  }

  if (type.startsWith("audio/")) {
    return true;
  }

  const extension =
    getMediaExtension(
      file,
      ""
    );

  return [
    "mp3",
    "wav",
    "m4a",
    "aac",
    "ogg",
    "oga",
    "flac",
    "opus"
  ].includes(extension);
}


/* =========================================================
   178. AUDIO METADATA
========================================================= */

function readAudioMetadata(file) {
  return new Promise(
    (resolve, reject) => {
      if (!isAudioFile(file)) {
        reject(
          new Error(
            "Invalid audio file."
          )
        );

        return;
      }

      const audio =
        document.createElement(
          "audio"
        );

      const objectURL =
        URL.createObjectURL(
          file
        );

      audio.preload =
        "metadata";

      audio.onloadedmetadata =
        () => {
          const metadata = {
            name:
              file.name,

            type:
              file.type ||
              "audio",

            size:
              file.size,

            duration:
              Number.isFinite(
                audio.duration
              )
                ? audio.duration
                : 0
          };

          URL.revokeObjectURL(
            objectURL
          );

          resolve(metadata);
        };

      audio.onerror =
        () => {
          URL.revokeObjectURL(
            objectURL
          );

          reject(
            new Error(
              "Unable to read audio metadata."
            )
          );
        };

      audio.src =
        objectURL;
    }
  );
}


/* =========================================================
   179. AUDIO FILE CARD
========================================================= */

function createAudioFileCardHTML(
  file,
  metadata = null
) {
  const duration =
    metadata
      ? formatMediaTime(
          metadata.duration
        )
      : "Reading...";

  return `
    <div class="tool-file-card">

      <div class="tool-file-icon">
        <i class="fa-solid fa-wave-square"></i>
      </div>

      <div class="tool-file-info">

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
          •
          ${escapeHTML(
            duration
          )}
        </span>

      </div>

    </div>
  `;
}


/* =========================================================
   180. AUDIO PREVIEW
========================================================= */

function createAudioPreview(
  file,
  container
) {
  if (
    !file ||
    !container
  ) {
    return null;
  }

  const oldURL =
    container.dataset
      .audioObjectUrl;

  if (oldURL) {
    URL.revokeObjectURL(
      oldURL
    );
  }

  const objectURL =
    URL.createObjectURL(
      file
    );

  container.dataset
    .audioObjectUrl =
      objectURL;

  container.innerHTML = `
    <audio
      controls
      preload="metadata"
      style="
        display: block;
        width: 100%;
      "
    >
      <source
        src="${objectURL}"
        type="${escapeHTML(
          file.type ||
          "audio/mpeg"
        )}"
      >
    </audio>
  `;

  return container.querySelector(
    "audio"
  );
}


/* =========================================================
   181. MEDIA OUTPUT FORMATS
========================================================= */

const mediaOutputFormats = {
  mp3: {
    extension:
      "mp3",

    mimeType:
      "audio/mpeg",

    args: [
      "-vn",
      "-c:a",
      "libmp3lame",
      "-b:a",
      "192k"
    ]
  },

  wav: {
    extension:
      "wav",

    mimeType:
      "audio/wav",

    args: [
      "-vn",
      "-c:a",
      "pcm_s16le"
    ]
  },

  m4a: {
    extension:
      "m4a",

    mimeType:
      "audio/mp4",

    args: [
      "-vn",
      "-c:a",
      "aac",
      "-b:a",
      "192k"
    ]
  },

  webm: {
    extension:
      "webm",

    mimeType:
      "video/webm",

    args: [
      "-c:v",
      "libvpx-vp9",
      "-crf",
      "32",
      "-b:v",
      "0",
      "-c:a",
      "libopus",
      "-b:a",
      "128k"
    ]
  },

  mp4: {
    extension:
      "mp4",

    mimeType:
      "video/mp4",

    args: [
      "-c:v",
      "libx264",
      "-preset",
      "veryfast",
      "-crf",
      "23",
      "-c:a",
      "aac",
      "-b:a",
      "128k",
      "-pix_fmt",
      "yuv420p",
      "-movflags",
      "+faststart"
    ]
  }
};


/* =========================================================
   182. MEDIA OUTPUT CONFIG
========================================================= */

function getMediaOutputConfig(
  format
) {
  const normalized =
    String(format || "")
      .trim()
      .toLowerCase();

  const config =
    mediaOutputFormats[
      normalized
    ];

  if (!config) {
    throw new Error(
      `Unsupported output format: ${normalized}`
    );
  }

  return config;
}


/* =========================================================
   183. VIDEO → AUDIO UI
========================================================= */

function renderVideoToAudio() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div class="workspace-placeholder-icon">
          <i class="fa-solid fa-file-audio"></i>
        </div>

        <h2>
          Video → Audio
        </h2>

        <p>
          Extract audio from a video
          directly in your browser.
        </p>

        <input
          class="video-audio-input"
          type="file"
          accept="video/*,.mp4,.webm,.mov,.m4v"
          hidden
        >

        <button
          class="tool-button primary video-audio-select"
          type="button"
        >
          <i class="fa-solid fa-file-arrow-up"></i>
          Choose Video
        </button>

      </div>

      <div
        class="tool-panel video-audio-panel"
        hidden
      >

        <div class="video-audio-file"></div>

        <div
          class="video-audio-preview"
          style="margin-top: 18px;"
        ></div>

        <div
          class="tool-controls"
          style="margin-top: 18px;"
        >

          <div class="tool-control">

            <label>
              Audio Format
            </label>

            <select
              class="tool-select video-audio-format"
            >
              <option value="mp3">
                MP3
              </option>

              <option value="wav">
                WAV
              </option>

              <option value="m4a">
                M4A
              </option>
            </select>

          </div>

        </div>

        <div
          class="tool-notice"
          style="margin-top: 18px;"
        >
          <i class="fa-solid fa-microchip"></i>

          <span>
            Audio extraction runs locally
            using the browser media engine.
          </span>
        </div>

        <div
          class="tool-actions"
          style="margin-top: 18px;"
        >

          <button
            class="tool-button primary video-audio-run"
            type="button"
          >
            <i class="fa-solid fa-music"></i>
            Extract Audio
          </button>

          <button
            class="tool-button video-audio-clear"
            type="button"
          >
            Clear
          </button>

        </div>

        <div class="video-audio-result"></div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".video-audio-input"
    );

  const selectButton =
    workspaceContent.querySelector(
      ".video-audio-select"
    );

  const panel =
    workspaceContent.querySelector(
      ".video-audio-panel"
    );

  const fileContainer =
    workspaceContent.querySelector(
      ".video-audio-file"
    );

  const previewContainer =
    workspaceContent.querySelector(
      ".video-audio-preview"
    );

  const formatSelect =
    workspaceContent.querySelector(
      ".video-audio-format"
    );

  const runButton =
    workspaceContent.querySelector(
      ".video-audio-run"
    );

  const clearButton =
    workspaceContent.querySelector(
      ".video-audio-clear"
    );

  const result =
    workspaceContent.querySelector(
      ".video-audio-result"
    );

  let selectedVideo =
    null;

  let metadata =
    null;


  async function loadVideo(
    file
  ) {
    if (!isVideoFile(file)) {
      showToast(
        "Invalid video",
        "Choose a supported video file.",
        "warning"
      );

      return;
    }

    selectedVideo =
      file;

    metadata =
      null;

    panel.hidden =
      false;

    result.innerHTML =
      "";

    fileContainer.innerHTML =
      createVideoFileCardHTML(
        file
      );

    createVideoPreview(
      file,
      previewContainer
    );

    try {
      metadata =
        await readVideoMetadata(
          file
        );

      if (
        selectedVideo !==
        file
      ) {
        return;
      }

      fileContainer.innerHTML =
        createVideoFileCardHTML(
          file,
          metadata
        );
    } catch (error) {
      console.warn(
        "[SENN TOOLS] Video metadata:",
        error
      );
    }
  }


  selectButton.addEventListener(
    "click",
    () => input.click()
  );


  input.addEventListener(
    "change",
    () => {
      const file =
        input.files?.[0];

      if (file) {
        loadVideo(file);
      }
    }
  );


  clearButton.addEventListener(
    "click",
    () => {
      selectedVideo =
        null;

      metadata =
        null;

      input.value =
        "";

      panel.hidden =
        true;

      result.innerHTML =
        "";

      fileContainer.innerHTML =
        "";

      const oldURL =
        previewContainer.dataset
          .videoObjectUrl;

      if (oldURL) {
        URL.revokeObjectURL(
          oldURL
        );

        delete previewContainer
          .dataset
          .videoObjectUrl;
      }

      previewContainer.innerHTML =
        "";
    }
  );


  runButton.addEventListener(
    "click",
    async () => {
      if (!selectedVideo) {
        return;
      }

      const format =
        formatSelect.value;

      const originalHTML =
        runButton.innerHTML;

      runButton.disabled =
        true;

      runButton.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Extracting...
      `;

      try {
        const output =
          await extractAudioFromVideo(
            selectedVideo,
            format
          );

        const config =
          getMediaOutputConfig(
            format
          );

        const baseName =
          getBaseFileName(
            selectedVideo.name
          );

        downloadBlob(
          output,
          `${baseName}.${config.extension}`
        );

        result.innerHTML = `
          <div
            class="tool-notice success"
            style="margin-top: 18px;"
          >
            <i class="fa-solid fa-circle-check"></i>

            <span>
              ${escapeHTML(
                config.extension
                  .toUpperCase()
              )}
              audio ready
              •
              ${escapeHTML(
                formatBytes(
                  output.size
                )
              )}
            </span>
          </div>
        `;

        addHistory(
          "video-to-audio",
          {
            fileName:
              selectedVideo.name
          }
        );

        showToast(
          "Audio extracted",
          `${config.extension.toUpperCase()} file ready.`,
          "success"
        );
      } catch (error) {
        if (
          error?.name ===
          "SennProcessingCancelled"
        ) {
          return;
        }

        console.error(
          "[SENN TOOLS] Video → Audio:",
          error
        );

        showToast(
          "Extraction failed",
          getFriendlyToolError(
            error,
            "Unable to extract audio from this video."
          ),
          "error"
        );
      } finally {
        runButton.disabled =
          false;

        runButton.innerHTML =
          originalHTML;
      }
    }
  );


  const smartFile =
    getCurrentSelectedFile();

  if (
    smartFile &&
    isVideoFile(smartFile)
  ) {
    loadVideo(smartFile);
  }
}


/* =========================================================
   184. VIDEO → AUDIO ENGINE
========================================================= */

async function extractAudioFromVideo(
  file,
  format = "mp3"
) {
  const config =
    getMediaOutputConfig(
      format
    );

  if (
    ![
      "mp3",
      "wav",
      "m4a"
    ].includes(
      config.extension
    )
  ) {
    throw new Error(
      "Invalid audio output format."
    );
  }

  return runMediaTask(
    async (
      ffmpeg,
      {
        update,
        throwIfCancelled
      }
    ) => {
      const inputExtension =
        getMediaExtension(
          file,
          "mp4"
        );

      const inputName =
        createMediaTempName(
          "audio-source",
          inputExtension
        );

      const outputName =
        createMediaTempName(
          "audio-output",
          config.extension
        );

      try {
        update(
          7,
          "Loading video..."
        );

        await ffmpeg.writeFile(
          inputName,
          await mediaFileToUint8Array(
            file
          )
        );

        throwIfCancelled();

        update(
          10,
          "Extracting audio..."
        );

        await ffmpeg.exec([
          "-i",
          inputName,
          ...config.args,
          outputName
        ]);

        throwIfCancelled();

        update(
          96,
          "Preparing audio..."
        );

        const data =
          await ffmpeg.readFile(
            outputName
          );

        return new Blob(
          [data],
          {
            type:
              config.mimeType
          }
        );
      } finally {
        await deleteFFmpegFileSafe(
          ffmpeg,
          inputName
        );

        await deleteFFmpegFileSafe(
          ffmpeg,
          outputName
        );
      }
    },
    {
      title:
        "Extracting Audio",

      message:
        "Preparing video...",

      progressMessage:
        "Extracting audio...",

      completeMessage:
        "Audio extraction complete"
    }
  );
}


/* =========================================================
   185. AUDIO CONVERTER UI
========================================================= */

function renderAudioConverter() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div class="workspace-placeholder-icon">
          <i class="fa-solid fa-headphones"></i>
        </div>

        <h2>
          Audio Converter
        </h2>

        <p>
          Convert audio between
          MP3, WAV, and M4A.
        </p>

        <input
          class="audio-converter-input"
          type="file"
          accept="audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.opus"
          hidden
        >

        <button
          class="tool-button primary audio-converter-select"
          type="button"
        >
          <i class="fa-solid fa-file-arrow-up"></i>
          Choose Audio
        </button>

      </div>

      <div
        class="tool-panel audio-converter-panel"
        hidden
      >

        <div class="audio-converter-file"></div>

        <div
          class="audio-converter-preview"
          style="margin-top: 18px;"
        ></div>

        <div
          class="tool-controls"
          style="margin-top: 18px;"
        >

          <div class="tool-control">

            <label>
              Convert To
            </label>

            <select
              class="tool-select audio-converter-format"
            >
              <option value="mp3">
                MP3
              </option>

              <option value="wav">
                WAV
              </option>

              <option value="m4a">
                M4A
              </option>
            </select>

          </div>

        </div>

        <div
          class="tool-actions"
          style="margin-top: 18px;"
        >

          <button
            class="tool-button primary audio-converter-run"
            type="button"
          >
            <i class="fa-solid fa-repeat"></i>
            Convert Audio
          </button>

          <button
            class="tool-button audio-converter-clear"
            type="button"
          >
            Clear
          </button>

        </div>

        <div class="audio-converter-result"></div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".audio-converter-input"
    );

  const selectButton =
    workspaceContent.querySelector(
      ".audio-converter-select"
    );

  const panel =
    workspaceContent.querySelector(
      ".audio-converter-panel"
    );

  const fileContainer =
    workspaceContent.querySelector(
      ".audio-converter-file"
    );

  const previewContainer =
    workspaceContent.querySelector(
      ".audio-converter-preview"
    );

  const formatSelect =
    workspaceContent.querySelector(
      ".audio-converter-format"
    );

  const runButton =
    workspaceContent.querySelector(
      ".audio-converter-run"
    );

  const clearButton =
    workspaceContent.querySelector(
      ".audio-converter-clear"
    );

  const result =
    workspaceContent.querySelector(
      ".audio-converter-result"
    );

  let selectedAudio =
    null;

  let metadata =
    null;


  async function loadAudio(
    file
  ) {
    if (!isAudioFile(file)) {
      showToast(
        "Invalid audio",
        "Choose a supported audio file.",
        "warning"
      );

      return;
    }

    selectedAudio =
      file;

    metadata =
      null;

    panel.hidden =
      false;

    result.innerHTML =
      "";

    fileContainer.innerHTML =
      createAudioFileCardHTML(
        file
      );

    createAudioPreview(
      file,
      previewContainer
    );

    try {
      metadata =
        await readAudioMetadata(
          file
        );

      if (
        selectedAudio !==
        file
      ) {
        return;
      }

      fileContainer.innerHTML =
        createAudioFileCardHTML(
          file,
          metadata
        );
    } catch (error) {
      console.warn(
        "[SENN TOOLS] Audio metadata:",
        error
      );
    }
  }


  selectButton.addEventListener(
    "click",
    () => input.click()
  );


  input.addEventListener(
    "change",
    () => {
      const file =
        input.files?.[0];

      if (file) {
        loadAudio(file);
      }
    }
  );


  clearButton.addEventListener(
    "click",
    () => {
      selectedAudio =
        null;

      metadata =
        null;

      input.value =
        "";

      panel.hidden =
        true;

      result.innerHTML =
        "";

      fileContainer.innerHTML =
        "";

      const oldURL =
        previewContainer.dataset
          .audioObjectUrl;

      if (oldURL) {
        URL.revokeObjectURL(
          oldURL
        );

        delete previewContainer
          .dataset
          .audioObjectUrl;
      }

      previewContainer.innerHTML =
        "";
    }
  );


  runButton.addEventListener(
    "click",
    async () => {
      if (!selectedAudio) {
        return;
      }

      const format =        formatSelect.value;

      const originalHTML =
        runButton.innerHTML;

      runButton.disabled =
        true;

      runButton.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Extracting...
      `;

      try {
        const output =
          await extractAudioFromVideo(
            selectedVideo,
            format
          );

        const config =
          getMediaOutputConfig(
            format
          );

        const baseName =
          getBaseFileName(
            selectedVideo.name
          );

        downloadBlob(
          output,
          `${baseName}.${config.extension}`
        );

        result.innerHTML = `
          <div
            class="tool-notice success"
            style="margin-top: 18px;"
          >
            <i class="fa-solid fa-circle-check"></i>

            <span>
              ${escapeHTML(
                config.extension
                  .toUpperCase()
              )}
              audio ready
              •
              ${escapeHTML(
                formatBytes(
                  output.size
                )
              )}
            </span>
          </div>
        `;

        addHistory(
          "video-to-audio",
          {
            fileName:
              selectedVideo.name
          }
        );

        showToast(
          "Audio extracted",
          `${config.extension.toUpperCase()} file ready.`,
          "success"
        );
      } catch (error) {
        if (
          error?.name ===
          "SennProcessingCancelled"
        ) {
          return;
        }

        console.error(
          "[SENN TOOLS] Video → Audio:",
          error
        );

        showToast(
          "Extraction failed",
          getFriendlyToolError(
            error,
            "Unable to extract audio from this video."
          ),
          "error"
        );
      } finally {
        runButton.disabled =
          false;

        runButton.innerHTML =
          originalHTML;
      }
    }
  );


  const smartFile =
    getCurrentSelectedFile();

  if (
    smartFile &&
    isVideoFile(smartFile)
  ) {
    loadVideo(smartFile);
  }
}


/* =========================================================
   184. VIDEO → AUDIO ENGINE
========================================================= */

async function extractAudioFromVideo(
  file,
  format = "mp3"
) {
  const config =
    getMediaOutputConfig(
      format
    );

  if (
    ![
      "mp3",
      "wav",
      "m4a"
    ].includes(
      config.extension
    )
  ) {
    throw new Error(
      "Invalid audio output format."
    );
  }

  return runMediaTask(
    async (
      ffmpeg,
      {
        update,
        throwIfCancelled
      }
    ) => {
      const inputExtension =
        getMediaExtension(
          file,
          "mp4"
        );

      const inputName =
        createMediaTempName(
          "audio-source",
          inputExtension
        );

      const outputName =
        createMediaTempName(
          "audio-output",
          config.extension
        );

      try {
        update(
          7,
          "Loading video..."
        );

        await ffmpeg.writeFile(
          inputName,
          await mediaFileToUint8Array(
            file
          )
        );

        throwIfCancelled();

        update(
          10,
          "Extracting audio..."
        );

        await ffmpeg.exec([
          "-i",
          inputName,
          ...config.args,
          outputName
        ]);

        throwIfCancelled();

        update(
          96,
          "Preparing audio..."
        );

        const data =
          await ffmpeg.readFile(
            outputName
          );

        return new Blob(
          [data],
          {
            type:
              config.mimeType
          }
        );
      } finally {
        await deleteFFmpegFileSafe(
          ffmpeg,
          inputName
        );

        await deleteFFmpegFileSafe(
          ffmpeg,
          outputName
        );
      }
    },
    {
      title:
        "Extracting Audio",

      message:
        "Preparing video...",

      progressMessage:
        "Extracting audio...",

      completeMessage:
        "Audio extraction complete"
    }
  );
}


/* =========================================================
   185. AUDIO CONVERTER UI
========================================================= */

function renderAudioConverter() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div class="workspace-placeholder-icon">
          <i class="fa-solid fa-headphones"></i>
        </div>

        <h2>
          Audio Converter
        </h2>

        <p>
          Convert audio between
          MP3, WAV, and M4A.
        </p>

        <input
          class="audio-converter-input"
          type="file"
          accept="audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.opus"
          hidden
        >

        <button
          class="tool-button primary audio-converter-select"
          type="button"
        >
          <i class="fa-solid fa-file-arrow-up"></i>
          Choose Audio
        </button>

      </div>

      <div
        class="tool-panel audio-converter-panel"
        hidden
      >

        <div class="audio-converter-file"></div>

        <div
          class="audio-converter-preview"
          style="margin-top: 18px;"
        ></div>

        <div
          class="tool-controls"
          style="margin-top: 18px;"
        >

          <div class="tool-control">
            <label>
              Convert To
            </label>

            <select
              class="tool-select audio-converter-format"
            >
              <option value="mp3">
                MP3
              </option>

              <option value="wav">
                WAV
              </option>

              <option value="m4a">
                M4A
              </option>
            </select>
          </div>

        </div>

        <div
          class="tool-actions"
          style="margin-top: 18px;"
        >

          <button
            class="tool-button primary audio-converter-run"
            type="button"
          >
            <i class="fa-solid fa-repeat"></i>
            Convert Audio
          </button>

          <button
            class="tool-button audio-converter-clear"
            type="button"
          >
            Clear
          </button>

        </div>

        <div class="audio-converter-result"></div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".audio-converter-input"
    );

  const selectButton =
    workspaceContent.querySelector(
      ".audio-converter-select"
    );

  const panel =
    workspaceContent.querySelector(
      ".audio-converter-panel"
    );

  const fileContainer =
    workspaceContent.querySelector(
      ".audio-converter-file"
    );

  const previewContainer =
    workspaceContent.querySelector(
      ".audio-converter-preview"
    );

  const formatSelect =
    workspaceContent.querySelector(
      ".audio-converter-format"
    );

  const runButton =
    workspaceContent.querySelector(
      ".audio-converter-run"
    );

  const clearButton =
    workspaceContent.querySelector(
      ".audio-converter-clear"
    );

  const result =
    workspaceContent.querySelector(
      ".audio-converter-result"
    );

  let selectedAudio =
    null;

  let metadata =
    null;


  async function loadAudio(
    file
  ) {
    if (!isAudioFile(file)) {
      showToast(
        "Invalid audio",
        "Choose a supported audio file.",
        "warning"
      );

      return;
    }

    selectedAudio =
      file;

    metadata =
      null;

    panel.hidden =
      false;

    result.innerHTML =
      "";

    fileContainer.innerHTML =
      createAudioFileCardHTML(
        file
      );

    createAudioPreview(
      file,
      previewContainer
    );

    try {
      metadata =
        await readAudioMetadata(
          file
        );

      if (
        selectedAudio !==
        file
      ) {
        return;
      }

      fileContainer.innerHTML =
        createAudioFileCardHTML(
          file,
          metadata
        );
    } catch (error) {
      console.warn(
        "[SENN TOOLS] Audio metadata:",
        error
      );
    }
  }


  selectButton.addEventListener(
    "click",
    () => input.click()
  );


  input.addEventListener(
    "change",
    () => {
      const file =
        input.files?.[0];

      if (file) {
        loadAudio(file);
      }
    }
  );


  clearButton.addEventListener(
    "click",
    () => {
      selectedAudio =
        null;

      metadata =
        null;

      input.value =
        "";

      panel.hidden =
        true;

      result.innerHTML =
        "";

      fileContainer.innerHTML =
        "";

      const oldURL =
        previewContainer.dataset
          .audioObjectUrl;

      if (oldURL) {
        URL.revokeObjectURL(
          oldURL
        );

        delete previewContainer
          .dataset
          .audioObjectUrl;
      }

      previewContainer.innerHTML =
        "";
    }
  );


  runButton.addEventListener(
    "click",
    async () => {
      if (!selectedAudio) {
        return;
      }

      const format =
        formatSelect.value;

      const originalHTML =
        runButton.innerHTML;

      runButton.disabled =
        true;

      runButton.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Converting...
      `;

      try {
        const output =
          await convertAudioFile(
            selectedAudio,
            format
          );

        const config =
          getMediaOutputConfig(
            format
          );

        const baseName =
          getBaseFileName(
            selectedAudio.name
          );

        downloadBlob(
          output,
          `${baseName}.${config.extension}`
        );

        result.innerHTML = `
          <div
            class="tool-notice success"
            style="margin-top: 18px;"
          >
            <i class="fa-solid fa-circle-check"></i>

            <span>
              ${escapeHTML(
                config.extension
                  .toUpperCase()
              )}
              ready
              •
              ${escapeHTML(
                formatBytes(
                  output.size
                )
              )}
            </span>
          </div>
        `;

        addHistory(
          "audio-converter",
          {
            fileName:
              selectedAudio.name
          }
        );

        showToast(
          "Audio converted",
          `${config.extension.toUpperCase()} file ready.`,
          "success"
        );
      } catch (error) {
        if (
          error?.name ===
          "SennProcessingCancelled"
        ) {
          return;
        }

        console.error(
          "[SENN TOOLS] Audio Converter:",
          error
        );

        showToast(
          "Conversion failed",
          getFriendlyToolError(
            error,
            "Unable to convert this audio file."
          ),
          "error"
        );
      } finally {
        runButton.disabled =
          false;

        runButton.innerHTML =
          originalHTML;
      }
    }
  );


  const smartFile =
    getCurrentSelectedFile();

  if (
    smartFile &&
    isAudioFile(smartFile)
  ) {
    loadAudio(smartFile);
  }
}


/* =========================================================
   186. AUDIO CONVERSION ENGINE
========================================================= */

async function convertAudioFile(
  file,
  format
) {
  const config =
    getMediaOutputConfig(
      format
    );

  if (
    ![
      "mp3",
      "wav",
      "m4a"
    ].includes(
      config.extension
    )
  ) {
    throw new Error(
      "Invalid audio output format."
    );
  }

  return runMediaTask(
    async (
      ffmpeg,
      {
        update,
        throwIfCancelled
      }
    ) => {
      const inputExtension =
        getMediaExtension(
          file,
          "mp3"
        );

      const inputName =
        createMediaTempName(
          "audio-input",
          inputExtension
        );

      const outputName =
        createMediaTempName(
          "audio-converted",
          config.extension
        );

      try {
        update(
          7,
          "Loading audio..."
        );

        await ffmpeg.writeFile(
          inputName,
          await mediaFileToUint8Array(
            file
          )
        );

        throwIfCancelled();

        update(
          10,
          "Converting audio..."
        );

        await ffmpeg.exec([
          "-i",
          inputName,
          ...config.args,
          outputName
        ]);

        throwIfCancelled();

        update(
          96,
          "Preparing converted audio..."
        );

        const data =
          await ffmpeg.readFile(
            outputName
          );

        return new Blob(
          [data],
          {
            type:
              config.mimeType
          }
        );
      } finally {
        await deleteFFmpegFileSafe(
          ffmpeg,
          inputName
        );

        await deleteFFmpegFileSafe(
          ffmpeg,
          outputName
        );
      }
    },
    {
      title:
        "Converting Audio",

      message:
        "Preparing audio...",

      progressMessage:
        "Converting audio...",

      completeMessage:
        "Audio conversion complete"
    }
  );
}


/* =========================================================
   187. MEDIA CONVERTER UI
========================================================= */

function renderMediaConverter() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div class="workspace-placeholder-icon">
          <i class="fa-solid fa-film"></i>
        </div>

        <h2>
          Media Converter
        </h2>

        <p>
          Convert videos between
          MP4 and WebM.
        </p>

        <input
          class="media-converter-input"
          type="file"
          accept="video/*,.mp4,.webm,.mov,.m4v"
          hidden
        >

        <button
          class="tool-button primary media-converter-select"
          type="button"
        >
          <i class="fa-solid fa-file-arrow-up"></i>
          Choose Video
        </button>

      </div>

      <div
        class="tool-panel media-converter-panel"
        hidden
      >

        <div class="media-converter-file"></div>

        <div
          class="media-converter-preview"
          style="margin-top: 18px;"
        ></div>

        <div
          class="tool-controls"
          style="margin-top: 18px;"
        >

          <div class="tool-control">

            <label>
              Convert To
            </label>

            <select
              class="tool-select media-converter-format"
            >
              <option value="mp4">
                MP4
              </option>

              <option value="webm">
                WebM
              </option>
            </select>

          </div>

        </div>

        <div
          class="tool-notice"
          style="margin-top: 18px;"
        >
          <i class="fa-solid fa-circle-info"></i>

          <span>
            Video conversion re-encodes
            the file. Processing time
            depends on video length,
            resolution, and device speed.
          </span>
        </div>

        <div
          class="tool-actions"
          style="margin-top: 18px;"
        >

          <button
            class="tool-button primary media-converter-run"
            type="button"
          >
            <i class="fa-solid fa-repeat"></i>
            Convert Video
          </button>

          <button
            class="tool-button media-converter-clear"
            type="button"
          >
            Clear
          </button>

        </div>

        <div class="media-converter-result"></div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".media-converter-input"
    );

  const selectButton =
    workspaceContent.querySelector(
      ".media-converter-select"
    );

  const panel =
    workspaceContent.querySelector(
      ".media-converter-panel"
    );

  const fileContainer =
    workspaceContent.querySelector(
      ".media-converter-file"
    );

  const previewContainer =
    workspaceContent.querySelector(
      ".media-converter-preview"
    );

  const formatSelect =
    workspaceContent.querySelector(
      ".media-converter-format"
    );

  const runButton =
    workspaceContent.querySelector(
      ".media-converter-run"
    );

  const clearButton =
    workspaceContent.querySelector(
      ".media-converter-clear"
    );

  const result =
    workspaceContent.querySelector(
      ".media-converter-result"
    );

  let selectedVideo =
    null;

  let metadata =
    null;


  async function loadVideo(
    file
  ) {
    if (!isVideoFile(file)) {
      showToast(
        "Invalid video",
        "Choose a supported video file.",
        "warning"
      );

      return;
    }

    selectedVideo =
      file;

    metadata =
      null;

    panel.hidden =
      false;

    result.innerHTML =
      "";

    fileContainer.innerHTML =
      createVideoFileCardHTML(
        file
      );

    createVideoPreview(
      file,
      previewContainer
    );

    try {
      metadata =
        await readVideoMetadata(
          file
        );

      if (
        selectedVideo !==
        file
      ) {
        return;
      }

      fileContainer.innerHTML =
        createVideoFileCardHTML(
          file,
          metadata
        );
    } catch (error) {
      console.warn(
        "[SENN TOOLS] Video metadata:",
        error
      );
    }
  }


  selectButton.addEventListener(
    "click",
    () => input.click()
  );


  input.addEventListener(
    "change",
    () => {
      const file =
        input.files?.[0];

      if (file) {
        loadVideo(file);
      }
    }
  );


  clearButton.addEventListener(
    "click",
    () => {
      selectedVideo =
        null;

      metadata =
        null;

      input.value =
        "";

      panel.hidden =
        true;

      result.innerHTML =
        "";

      fileContainer.innerHTML =
        "";

      const oldURL =
        previewContainer.dataset
          .videoObjectUrl;

      if (oldURL) {
        URL.revokeObjectURL(
          oldURL
        );

        delete previewContainer
          .dataset
          .videoObjectUrl;
      }

      previewContainer.innerHTML =
        "";
    }
  );


  runButton.addEventListener(
    "click",
    async () => {
      if (!selectedVideo) {
        return;
      }

      const format =
        formatSelect.value;

      const originalHTML =
        runButton.innerHTML;

      runButton.disabled =
        true;

      runButton.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Converting...
      `;

      try {
        const output =
          await convertVideoFile(
            selectedVideo,
            format
          );

        const config =
          getMediaOutputConfig(
            format
          );

        const baseName =
          getBaseFileName(
            selectedVideo.name
          );

        downloadBlob(
          output,
          `${baseName}-converted.${config.extension}`
        );

        result.innerHTML = `
          <div
            class="tool-notice success"
            style="margin-top: 18px;"
          >
            <i class="fa-solid fa-circle-check"></i>

            <span>
              ${escapeHTML(
                config.extension
                  .toUpperCase()
              )}
              video ready
              •
              ${escapeHTML(                formatBytes(
                  output.size
                )
              )}
            </span>
          </div>
        `;

        addHistory(
          "media-converter",
          {
            fileName:
              selectedVideo.name
          }
        );

        showToast(
          "Video converted",
          `${config.extension.toUpperCase()} file ready.`,
          "success"
        );
      } catch (error) {
        if (
          error?.name ===
          "SennProcessingCancelled"
        ) {
          return;
        }

        console.error(
          "[SENN TOOLS] Media Converter:",
          error
        );

        showToast(
          "Conversion failed",
          getFriendlyToolError(
            error,
            "Unable to convert this video."
          ),
          "error"
        );
      } finally {
        runButton.disabled =
          false;

        runButton.innerHTML =
          originalHTML;
      }
    }
  );


  const smartFile =
    getCurrentSelectedFile();

  if (
    smartFile &&
    isVideoFile(smartFile)
  ) {
    loadVideo(smartFile);
  }
}


/* =========================================================
   188. VIDEO CONVERSION ENGINE
========================================================= */

async function convertVideoFile(
  file,
  format
) {
  const config =
    getMediaOutputConfig(
      format
    );

  if (
    ![
      "mp4",
      "webm"
    ].includes(
      config.extension
    )
  ) {
    throw new Error(
      "Invalid video output format."
    );
  }

  return runMediaTask(
    async (
      ffmpeg,
      {
        update,
        throwIfCancelled
      }
    ) => {
      const inputExtension =
        getMediaExtension(
          file,
          "mp4"
        );

      const inputName =
        createMediaTempName(
          "video-input",
          inputExtension
        );

      const outputName =
        createMediaTempName(
          "video-output",
          config.extension
        );

      try {
        update(
          7,
          "Loading video..."
        );

        await ffmpeg.writeFile(
          inputName,
          await mediaFileToUint8Array(
            file
          )
        );

        throwIfCancelled();

        update(
          10,
          "Converting video..."
        );

        await ffmpeg.exec([
          "-i",
          inputName,
          ...config.args,
          outputName
        ]);

        throwIfCancelled();

        update(
          96,
          "Preparing converted video..."
        );

        const data =
          await ffmpeg.readFile(
            outputName
          );

        return new Blob(
          [data],
          {
            type:
              config.mimeType
          }
        );
      } finally {
        await deleteFFmpegFileSafe(
          ffmpeg,
          inputName
        );

        await deleteFFmpegFileSafe(
          ffmpeg,
          outputName
        );
      }
    },
    {
      title:
        "Converting Video",

      message:
        "Preparing video...",

      progressMessage:
        "Converting video...",

      completeMessage:
        "Video conversion complete"
    }
  );
}


/* =========================================================
   189. PART 5B RENDERERS
========================================================= */

const part5BRenderers = {
  "video-to-audio":
    renderVideoToAudio,

  "audio-converter":
    renderAudioConverter,

  "media-converter":
    renderMediaConverter
};


/* =========================================================
   190. PART 5B ROUTER
========================================================= */

const previousPart5ARenderToolWorkspace =
  renderToolWorkspace;

renderToolWorkspace =
  function (toolId) {
    const renderer =
      part5BRenderers[
        toolId
      ];

    if (renderer) {
      renderer();
      return;
    }

    previousPart5ARenderToolWorkspace(
      toolId
    );
  };


/* =========================================================
   191. PART 5B STATUS
========================================================= */

function getPart5BStatus() {
  return {
    audioValidation:
      typeof isAudioFile ===
      "function",

    audioMetadata:
      typeof readAudioMetadata ===
      "function",

    videoToAudio:
      typeof renderVideoToAudio ===
      "function",

    audioConverter:
      typeof renderAudioConverter ===
      "function",

    mediaConverter:
      typeof renderMediaConverter ===
      "function"
  };
}


/* =========================================================
   192. PART 5B READY
========================================================= */

console.log(
  "[SENN TOOLS] Part 5B ready.",
  getPart5BStatus()
);


/* =========================================================
   PART 5B END

   ADDED:
   ✓ Audio validation
   ✓ Audio metadata reader
   ✓ Audio preview
   ✓ Shared media output configuration
   ✓ Video → MP3
   ✓ Video → WAV
   ✓ Video → M4A
   ✓ MP3 / WAV / M4A audio conversion
   ✓ MP4 → WebM
   ✓ WebM / MOV → MP4
   ✓ Smart Drop audio support
   ✓ Smart Drop video support
   ✓ Part 5B router override

   PART 5 STATUS:
   5A ✓
   5B ✓

   NEXT PART 5C:
   - Video Upscaler
   - Real processing cancellation
   - FFmpeg engine recovery
   - Media memory protection
   - Smart Drop media polish
   - Final Part 5 integration
========================================================= */
/* =========================================================
   193. MEDIA MEMORY SAFETY
========================================================= */

const SENN_MEDIA_LIMITS = {
  maxInputBytes:
    700 * 1024 * 1024,

  warningBytes:
    250 * 1024 * 1024,

  maxUpscalePixels:
    3840 * 2160,

  maxUpscaleDuration:
    20 * 60
};


function validateMediaMemory(
  file,
  options = {}
) {
  if (!file) {
    throw new Error(
      "No media file selected."
    );
  }

  const maxBytes =
    Number(
      options.maxBytes
    ) ||
    SENN_MEDIA_LIMITS
      .maxInputBytes;

  if (
    file.size >
    maxBytes
  ) {
    throw new Error(
      `This file is too large for browser processing. ` +
      `Maximum recommended size is ${formatBytes(
        maxBytes
      )}.`
    );
  }

  return true;
}


function shouldWarnLargeMedia(
  file
) {
  return Boolean(
    file &&
    file.size >
      SENN_MEDIA_LIMITS
        .warningBytes
  );
}


/* =========================================================
   194. FFMPEG ENGINE RESET
========================================================= */

async function resetFFmpegEngine() {
  const current =
    sennMediaEngine.ffmpeg;

  if (current) {
    try {
      if (
        typeof current.terminate ===
        "function"
      ) {
        current.terminate();
      }
    } catch (error) {
      console.warn(
        "[SENN TOOLS] FFmpeg terminate:",
        error
      );
    }
  }

  sennMediaEngine.ffmpeg =
    null;

  sennMediaEngine.loadingPromise =
    null;

  sennMediaEngine.loaded =
    false;

  sennMediaEngine.activeTask =
    false;

  sennMediaEngine.progressHandler =
    null;

  return true;
}


/* =========================================================
   195. HARD MEDIA CANCELLATION
========================================================= */

let sennMediaCancellationRequested =
  false;


async function cancelActiveMediaTask() {
  sennMediaCancellationRequested =
    true;

  state.processingCancelled =
    true;

  const ffmpeg =
    sennMediaEngine.ffmpeg;

  if (
    ffmpeg &&
    sennMediaEngine.activeTask
  ) {
    try {
      if (
        typeof ffmpeg.terminate ===
        "function"
      ) {
        ffmpeg.terminate();
      }
    } catch (error) {
      console.warn(
        "[SENN TOOLS] Media cancellation:",
        error
      );
    }
  }

  sennMediaEngine.ffmpeg =
    null;

  sennMediaEngine.loadingPromise =
    null;

  sennMediaEngine.loaded =
    false;

  sennMediaEngine.activeTask =
    false;

  sennMediaEngine.progressHandler =
    null;

  hideProcessingOverlay();

  showToast(
    "Processing cancelled",
    "The media task was stopped.",
    "info"
  );
}


/* =========================================================
   196. CONNECT HARD CANCEL BUTTON
========================================================= */

if (processingCancelButton) {
  processingCancelButton.addEventListener(
    "click",
    () => {
      if (
        sennMediaEngine.activeTask
      ) {
        cancelActiveMediaTask();
      }
    }
  );
}


/* =========================================================
   197. MEDIA CANCELLATION ERROR
========================================================= */

function createMediaCancelledError() {
  const error =
    new Error(
      "Media processing was cancelled."
    );

  error.name =
    "SennProcessingCancelled";

  return error;
}


/* =========================================================
   198. SAFE MEDIA TASK RUNNER
========================================================= */

async function runSafeMediaTask(
  task,
  options = {}
) {
  if (
    typeof task !==
    "function"
  ) {
    throw new Error(
      "Invalid media task."
    );
  }

  if (
    sennMediaEngine.activeTask
  ) {
    throw new Error(
      "Another media task is already running."
    );
  }

  sennMediaCancellationRequested =
    false;

  state.processingCancelled =
    false;

  const file =
    options.file ||
    null;

  if (file) {
    validateMediaMemory(
      file,
      {
        maxBytes:
          options.maxBytes
      }
    );
  }

  if (
    file &&
    shouldWarnLargeMedia(
      file
    )
  ) {
    showToast(
      "Large media file",
      "Processing may use significant memory and can take longer on mobile devices.",
      "warning"
    );
  }

  showProcessingOverlay(
    options.title ||
      "Processing Media",

    options.message ||
      "Preparing media..."
  );

  updateProcessingProgress(
    2,
    options.message ||
      "Preparing media..."
  );

  sennMediaEngine.activeTask =
    true;

  try {
    const ffmpeg =
      await ensureFFmpegEngine();

    if (
      sennMediaCancellationRequested ||
      state.processingCancelled
    ) {
      throw createMediaCancelledError();
    }

    const update =
      (
        percentage,
        message
      ) => {
        if (
          sennMediaCancellationRequested ||
          state.processingCancelled
        ) {
          return;
        }

        updateProcessingProgress(
          Math.max(
            0,
            Math.min(
              100,
              Number(
                percentage
              ) || 0
            )
          ),
          message ||
            options.progressMessage ||
            "Processing media..."
        );
      };

    const throwIfCancelled =
      () => {
        if (
          sennMediaCancellationRequested ||
          state.processingCancelled
        ) {
          throw createMediaCancelledError();
        }
      };

    const result =
      await task(
        ffmpeg,
        {
          update,
          throwIfCancelled
        }
      );

    throwIfCancelled();

    update(
      100,
      options.completeMessage ||
        "Processing complete"
    );

    return result;
  } catch (error) {
    if (
      sennMediaCancellationRequested ||
      state.processingCancelled ||
      error?.name ===
        "SennProcessingCancelled"
    ) {
      throw createMediaCancelledError();
    }

    const message =
      String(
        error?.message ||
        ""
      ).toLowerCase();

    if (
      message.includes(
        "terminated"
      ) ||
      message.includes(
        "worker"
      ) ||
      message.includes(
        "memory"
      )
    ) {
      await resetFFmpegEngine();
    }

    throw error;
  } finally {
    sennMediaEngine.activeTask =
      false;

    sennMediaEngine.progressHandler =
      null;

    if (
      !sennMediaCancellationRequested &&
      !state.processingCancelled
    ) {
      hideProcessingOverlay();
    }
  }
}


/* =========================================================
   199. VIDEO UPSCALE PRESETS
========================================================= */

const videoUpscalePresets = {
  "720p": {
    label:
      "720p HD",

    width:
      1280,

    height:
      720
  },

  "1080p": {
    label:
      "1080p Full HD",

    width:
      1920,

    height:
      1080
  },

  "1440p": {
    label:
      "1440p 2K",

    width:
      2560,

    height:
      1440
  },

  "2160p": {
    label:
      "2160p 4K",

    width:
      3840,

    height:
      2160
  }
};


/* =========================================================
   200. VIDEO UPSCALE TARGET
========================================================= */

function calculateVideoUpscaleTarget(
  metadata,
  preset
) {
  const config =
    videoUpscalePresets[
      preset
    ];

  if (!config) {
    throw new Error(
      "Invalid video resolution preset."
    );
  }

  const sourceWidth =
    Math.max(
      1,
      Number(
        metadata?.width
      ) || 1
    );

  const sourceHeight =
    Math.max(
      1,
      Number(
        metadata?.height
      ) || 1
    );

  /*
   * Never downscale.
   *
   * If the source is already larger
   * than the selected preset, keep
   * the original dimensions.
   */

  if (
    sourceWidth >=
      config.width ||
    sourceHeight >=
      config.height
  ) {
    return {
      width:
        sourceWidth,

      height:
        sourceHeight,

      changed:
        false
    };
  }

  const ratio =
    Math.min(
      config.width /
        sourceWidth,

      config.height /
        sourceHeight
    );

  let width =
    Math.round(
      sourceWidth *
        ratio
    );

  let height =
    Math.round(
      sourceHeight *
        ratio
    );

  /*
   * H.264 generally behaves better
   * with even dimensions.
   */

  if (
    width % 2 !==
    0
  ) {
    width += 1;
  }

  if (
    height % 2 !==
    0
  ) {
    height += 1;
  }

  return {
    width,
    height,
    changed:
      width !==
        sourceWidth ||
      height !==
        sourceHeight
  };
}


/* =========================================================
   201. VIDEO UPSCALER UI
========================================================= */

function renderVideoUpscaler() {
  workspaceContent.innerHTML = `
    <div class="tool-interface">

      <div class="tool-upload-panel">

        <div
          class="workspace-placeholder-icon"
        >
          <i class="fa-solid fa-expand"></i>
        </div>

        <h2>
          Video Upscaler
        </h2>

        <p>
          Increase video resolution using
          high-quality browser scaling and
          controlled detail enhancement.
        </p>

        <input
          class="video-upscale-input"
          type="file"
          accept="video/*,.mp4,.webm,.mov,.m4v"
          hidden
        >

        <button
          class="tool-button primary video-upscale-select"
          type="button"
        >
          <i class="fa-solid fa-file-arrow-up"></i>
          Choose Video
        </button>

      </div>

      <div
        class="tool-panel video-upscale-panel"
        hidden
      >

        <div
          class="video-upscale-file"
        ></div>

        <div
          class="video-upscale-preview"
          style="margin-top: 18px;"
        ></div>

        <div
          class="tool-controls"
          style="margin-top: 18px;"
        >

          <div class="tool-control">

            <label>
              Target Resolution
            </label>

            <select
              class="tool-select video-upscale-resolution"
            >
              <option value="720p">
                720p HD
              </option>

              <option
                value="1080p"
                selected
              >
                1080p Full HD
              </option>

              <option value="1440p">
                1440p 2K
              </option>

              <option value="2160p">
                2160p 4K
              </option>
            </select>

          </div>

          <div class="tool-control">

            <label>
              Detail Enhancement
            </label>

            <select
              class="tool-select video-upscale-detail"
            >
              <option value="soft">
                Soft
              </option>

              <option
                value="balanced"
                selected
              >
                Balanced
              </option>

              <option value="strong">
                Strong
              </option>
            </select>

          </div>

        </div>

        <div
          class="video-upscale-summary tool-notice"
          style="margin-top: 18px;"
        >

          <i class="fa-solid fa-circle-info"></i>

          <span>
            Select a video to calculate
            the output resolution.
          </span>

        </div>

        <div
          class="tool-notice"
          style="margin-top: 12px;"
        >

          <i class="fa-solid fa-microchip"></i>

          <span>
            This uses standard video scaling
            and sharpening, not AI reconstruction.
            2K and 4K can be heavy on mobile devices.
          </span>

        </div>

        <div
          class="tool-actions"
          style="margin-top: 18px;"
        >

          <button
            class="tool-button primary video-upscale-run"
            type="button"
          >
            <i class="fa-solid fa-wand-magic-sparkles"></i>
            Upscale Video
          </button>

          <button
            class="tool-button video-upscale-clear"
            type="button"
          >
            Clear
          </button>

        </div>

        <div
          class="video-upscale-result"
        ></div>

      </div>

    </div>
  `;

  const input =
    workspaceContent.querySelector(
      ".video-upscale-input"
    );

  const selectButton =
    workspaceContent.querySelector(
      ".video-upscale-select"
    );

  const panel =
    workspaceContent.querySelector(
      ".video-upscale-panel"
    );

  const fileContainer =
    workspaceContent.querySelector(
      ".video-upscale-file"
    );

  const previewContainer =
    workspaceContent.querySelector(
      ".video-upscale-preview"
    );

  const resolutionSelect =
    workspaceContent.querySelector(
      ".video-upscale-resolution"
    );

  const detailSelect =
    workspaceContent.querySelector(
      ".video-upscale-detail"
    );

  const summary =
    workspaceContent.querySelector(
      ".video-upscale-summary span"
    );

  const runButton =
    workspaceContent.querySelector(
      ".video-upscale-run"
    );

  const clearButton =
    workspaceContent.querySelector(
      ".video-upscale-clear"
    );

  const result =
    workspaceContent.querySelector(
      ".video-upscale-result"
    );

  let selectedVideo =
    null;

  let metadata =
    null;


  function updateSummary() {
    if (!metadata) {
      return;
    }

    const target =
      calculateVideoUpscaleTarget(
        metadata,
        resolutionSelect.value
      );

    const source =
      `${metadata.width}×${metadata.height}`;

    const output =
      `${target.width}×${target.height}`;

    if (!target.changed) {
      summary.textContent =
        `Source ${source} • ` +
        `Output ${output} • ` +
        `Source is already equal to or larger than this preset.`;
    } else {
      summary.textContent =
        `Source ${source} • ` +
        `Output ${output}`;
    }
  }


  async function loadVideo(
    file
  ) {
    if (
      !isVideoFile(file)
    ) {
      showToast(
        "Invalid video",
        "Choose a supported video file.",
        "warning"
      );

      return;
    }

    try {
      validateMediaMemory(
        file
      );
    } catch (error) {
      showToast(
        "Video too large",
        error.message,
        "warning"
      );

      return;
    }

    selectedVideo =
      file;

    metadata =
      null;

    panel.hidden =
      false;

    result.innerHTML =
      "";

    fileContainer.innerHTML =
      createVideoFileCardHTML(
        file
      );

    createVideoPreview(
      file,
      previewContainer
    );

    try {
      metadata =
        await readVideoMetadata(
          file
        );

      if (
        selectedVideo !==
        file
      ) {
        return;
      }

      fileContainer.innerHTML =
        createVideoFileCardHTML(
          file,
          metadata
        );

      updateSummary();

      if (
        metadata.duration >
        SENN_MEDIA_LIMITS
          .maxUpscaleDuration
      ) {
        showToast(
          "Long video",
          "Very long videos may be too heavy for browser upscaling.",
          "warning"
        );
      }
    } catch (error) {
      showToast(
        "Metadata unavailable",
        getFriendlyToolError(
          error,
          "Unable to read this video."
        ),
        "warning"
      );
    }
  }


  selectButton.addEventListener(
    "click",
    () => input.click()
  );


  input.addEventListener(
    "change",
    () => {
      const file =
        input.files?.[0];

      if (file) {
        loadVideo(
          file
        );
      }
    }
  );


  resolutionSelect.addEventListener(
    "change",
    updateSummary
  );


  clearButton.addEventListener(
    "click",
    () => {
      selectedVideo =
        null;

      metadata =
        null;

      input.value =
        "";

      panel.hidden =
        true;

      fileContainer.innerHTML =
        "";

      result.innerHTML =
        "";

      const oldURL =
        previewContainer.dataset
          .videoObjectUrl;

      if (oldURL) {
        URL.revokeObjectURL(
          oldURL
        );

        delete previewContainer
          .dataset
          .videoObjectUrl;
      }

      previewContainer.innerHTML =
        "";
    }
  );


  runButton.addEventListener(
    "click",
    async () => {
      if (
        !selectedVideo ||
        !metadata
      ) {
        return;
      }

      const target =
        calculateVideoUpscaleTarget(
          metadata,
          resolutionSelect.value
        );

      if (!target.changed) {
        showToast(
          "Upscale not needed",
          "The source video is already equal to or larger than the selected resolution.",
          "info"
        );

        return;
      }

      const outputPixels =
        target.width *
        target.height;

      if (
        outputPixels >
        SENN_MEDIA_LIMITS
          .maxUpscalePixels
      ) {
        showToast(
          "Resolution too large",
          "This output resolution is too heavy for safe browser processing.",
          "warning"
        );

        return;
      }

      const originalHTML =
        runButton.innerHTML;

      runButton.disabled =
        true;

      runButton.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Upscaling...
      `;

      try {
        const output =
          await upscaleVideoFile(
            selectedVideo,
            {
              width:
                target.width,

              height:
                target.height,

              detail:
                detailSelect.value
            }
          );

        const baseName =
          getBaseFileName(
            selectedVideo.name
          );

        downloadBlob(
          output,
          `${baseName}-${resolutionSelect.value}.mp4`
        );

        result.innerHTML = `
          <div
            class="tool-notice success"
            style="margin-top: 18px;"
          >

            <i class="fa-solid fa-circle-check"></i>

            <span>
              Video upscaled to
              ${escapeHTML(
                `${target.width}×${target.height}`
              )}
              •
              ${escapeHTML(
                formatBytes(
                  output.size
                )
              )}
            </span>

          </div>
        `;

        addHistory(
          "video-upscaler",
          {
            fileName:
              selectedVideo.name
          }
        );

        showToast(
          "Video upscaled",
          `${target.width}×${target.height} video ready.`,
          "success"
        );
      } catch (error) {
        if (
          error?.name ===
          "SennProcessingCancelled"
        ) {
          return;
        }

        console.error(
          "[SENN TOOLS] Video Upscaler:",
          error
        );

        showToast(
          "Upscale failed",
          getFriendlyToolError(
            error,
            "Unable to upscale this video."
          ),
          "error"
        );
      } finally {
        runButton.disabled =
          false;

        runButton.innerHTML =
          originalHTML;
      }
    }
  );


  const smartFile =
    getCurrentSelectedFile();

  if (
    smartFile &&
    isVideoFile(
      smartFile
    )
  ) {
    loadVideo(
      smartFile
    );
  }
}


/* =========================================================
   202. VIDEO UPSCALE ENGINE
========================================================= */

async function upscaleVideoFile(
  file,
  options = {}
) {
  validateMediaMemory(
    file
  );

  const width =
    Math.max(
      2,
      Math.round(
        Number(          options.width
        ) || 1920
      )
    );

  const height =
    Math.max(
      2,
      Math.round(
        Number(
          options.height
        ) || 1080
      )
    );

  const detail =
    String(
      options.detail ||
      "balanced"
    );

  const sharpenMap = {
    soft:
      "unsharp=5:5:0.25:5:5:0.0",

    balanced:
      "unsharp=5:5:0.45:5:5:0.0",

    strong:
      "unsharp=5:5:0.70:5:5:0.0"
  };

  const sharpen =
    sharpenMap[
      detail
    ] ||
    sharpenMap.balanced;

  return runSafeMediaTask(
    async (
      ffmpeg,
      {
        update,
        throwIfCancelled
      }
    ) => {
      const inputExtension =
        getMediaExtension(
          file,
          "mp4"
        );

      const inputName =
        createMediaTempName(
          "upscale-input",
          inputExtension
        );

      const outputName =
        createMediaTempName(
          "upscale-output",
          "mp4"
        );

      try {
        update(
          5,
          "Loading video..."
        );

        await ffmpeg.writeFile(
          inputName,
          await mediaFileToUint8Array(
            file
          )
        );

        throwIfCancelled();

        update(
          10,
          "Upscaling video..."
        );

        const filter =
          [
            `scale=${width}:${height}:flags=lanczos`,
            sharpen
          ].join(",");

        await ffmpeg.exec([
          "-i",
          inputName,

          "-map",
          "0:v:0",

          "-map",
          "0:a?",

          "-vf",
          filter,

          "-c:v",
          "libx264",

          "-preset",
          "veryfast",

          "-crf",
          "20",

          "-c:a",
          "aac",

          "-b:a",
          "128k",

          "-pix_fmt",
          "yuv420p",

          "-movflags",
          "+faststart",

          outputName
        ]);

        throwIfCancelled();

        update(
          96,
          "Preparing upscaled video..."
        );

        const data =
          await ffmpeg.readFile(
            outputName
          );

        return new Blob(
          [data],
          {
            type:
              "video/mp4"
          }
        );
      } finally {
        await deleteFFmpegFileSafe(
          ffmpeg,
          inputName
        );

        await deleteFFmpegFileSafe(
          ffmpeg,
          outputName
        );
      }
    },
    {
      file,

      title:
        "Upscaling Video",

      message:
        "Preparing video...",

      progressMessage:
        "Upscaling video...",

      completeMessage:
        "Video upscale complete"
    }
  );
}


/* =========================================================
   203. SMART DROP MEDIA POLISH
========================================================= */

function getSmartDropMediaLabel(
  file
) {
  if (!file) {
    return "File";
  }

  if (
    isVideoFile(
      file
    )
  ) {
    return "Video";
  }

  if (
    typeof isAudioFile ===
      "function" &&
    isAudioFile(
      file
    )
  ) {
    return "Audio";
  }

  if (
    String(
      file.type ||
      ""
    ).startsWith(
      "image/"
    )
  ) {
    return "Image";
  }

  if (
    String(
      file.type ||
      ""
    ) ===
      "application/pdf" ||
    String(
      file.name ||
      ""
    )
      .toLowerCase()
      .endsWith(
        ".pdf"
      )
  ) {
    return "PDF";
  }

  return "File";
}


/* =========================================================
   204. SMART DROP MEDIA RECOMMENDATIONS
========================================================= */

function getMediaToolRecommendations(
  file
) {
  if (!file) {
    return [];
  }

  if (
    isVideoFile(
      file
    )
  ) {
    return [
      "video-compressor",
      "video-trimmer",
      "video-to-audio",
      "video-thumbnail",
      "video-upscaler",
      "media-converter"
    ];
  }

  if (
    typeof isAudioFile ===
      "function" &&
    isAudioFile(
      file
    )
  ) {
    return [
      "audio-converter",
      "metadata-viewer"
    ];
  }

  return [];
}


/* =========================================================
   205. FINAL PART 5 RENDERERS
========================================================= */

const part5CRenderers = {
  "video-upscaler":
    renderVideoUpscaler
};


/* =========================================================
   206. FINAL PART 5 ROUTER
========================================================= */

const previousPart5BRenderToolWorkspace =
  renderToolWorkspace;

renderToolWorkspace =
  function (
    toolId
  ) {
    const renderer =
      part5CRenderers[
        toolId
      ];

    if (renderer) {
      renderer();

      return;
    }

    previousPart5BRenderToolWorkspace(
      toolId
    );
  };


/* =========================================================
   207. PART 5 STATUS
========================================================= */

function getPart5Status() {
  return {
    ffmpeg:
      typeof ensureFFmpegEngine ===
      "function",

    engineRecovery:
      typeof resetFFmpegEngine ===
      "function",

    hardCancellation:
      typeof cancelActiveMediaTask ===
      "function",

    memoryProtection:
      typeof validateMediaMemory ===
      "function",

    videoCompressor:
      typeof renderVideoCompressor ===
      "function",

    videoTrimmer:
      typeof renderVideoTrimmer ===
      "function",

    videoToAudio:
      typeof renderVideoToAudio ===
      "function",

    audioConverter:
      typeof renderAudioConverter ===
      "function",

    mediaConverter:
      typeof renderMediaConverter ===
      "function",

    videoUpscaler:
      typeof renderVideoUpscaler ===
      "function"
  };
}


/* =========================================================
   208. PART 5 READY
========================================================= */

console.log(
  "[SENN TOOLS] Part 5 complete.",
  getPart5Status()
);


/* =========================================================
   PART 5C END

   ADDED:
   ✓ Browser media memory protection
   ✓ Large-file warning
   ✓ FFmpeg engine reset / recovery
   ✓ Hard media cancellation
   ✓ Video Upscaler
   ✓ 720p / 1080p / 1440p / 2160p
   ✓ Never intentionally downscales source
   ✓ Lanczos scaling
   ✓ Controlled detail enhancement
   ✓ Smart Drop media helpers
   ✓ Video tool recommendations
   ✓ Audio tool recommendations
   ✓ Final Part 5 router

   IMPORTANT:
   Video Upscaler uses standard scaling
   and sharpening. It does NOT claim
   AI reconstruction.

   NEXT:
   PART 6
   - Full project audit
   - Photo Enhancer LIVE preview
   - Recommended Tools color fix
   - Image Upscaler visible enhancement
   - Responsive UI cleanup
   - Final syntax/runtime cleanup
========================================================= */
/* =========================================================
   209. PART 6 IMAGE REPAIR HELPERS
========================================================= */

const SENN_IMAGE_LIMITS = {
  previewMaxSide: 1400,
  maxOutputPixels: 50000000,
  sharpenMaxPixels: 16000000
};


function getEnhancedImageSettings(
  brightnessInput,
  contrastInput,
  saturationInput,
  sharpnessInput
) {
  return {
    brightness:
      Number(
        brightnessInput?.value
      ) || 100,

    contrast:
      Number(
        contrastInput?.value
      ) || 100,

    saturation:
      Number(
        saturationInput?.value
      ) || 100,

    sharpness:
      Math.max(
        0,
        Math.min(
          1,
          (
            Number(
              sharpnessInput?.value
            ) || 0
          ) / 100
        )
      )
  };
}


/* =========================================================
   210. PREVIEW DIMENSIONS
========================================================= */

function calculatePreviewDimensions(
  width,
  height,
  maxSide =
    SENN_IMAGE_LIMITS.previewMaxSide
) {
  const sourceWidth =
    Math.max(
      1,
      Number(width) || 1
    );

  const sourceHeight =
    Math.max(
      1,
      Number(height) || 1
    );

  const largestSide =
    Math.max(
      sourceWidth,
      sourceHeight
    );

  if (
    largestSide <=
    maxSide
  ) {
    return {
      width:
        sourceWidth,

      height:
        sourceHeight
    };
  }

  const scale =
    maxSide /
    largestSide;

  return {
    width:
      Math.max(
        1,
        Math.round(
          sourceWidth *
          scale
        )
      ),

    height:
      Math.max(
        1,
        Math.round(
          sourceHeight *
          scale
        )
      )
  };
}


/* =========================================================
   211. ENHANCEMENT CANVAS RENDERER
========================================================= */

function drawEnhancedImageToCanvas(
  image,
  canvas,
  settings,
  options = {}
) {
  if (
    !image ||
    !canvas
  ) {
    return;
  }

  const context =
    canvas.getContext(
      "2d",
      {
        willReadFrequently:
          true
      }
    );

  if (!context) {
    throw new Error(
      "Canvas context unavailable."
    );
  }

  context.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  context.imageSmoothingEnabled =
    true;

  context.imageSmoothingQuality =
    "high";

  context.filter = [
    `brightness(${settings.brightness}%)`,
    `contrast(${settings.contrast}%)`,
    `saturate(${settings.saturation}%)`
  ].join(" ");

  context.drawImage(
    image,
    0,
    0,
    canvas.width,
    canvas.height
  );

  context.filter =
    "none";

  const allowSharpen =
    options.allowSharpen !==
    false;

  if (
    allowSharpen &&
    settings.sharpness > 0 &&
    canvas.width *
      canvas.height <=
      SENN_IMAGE_LIMITS
        .sharpenMaxPixels
  ) {
    applySimpleSharpen(
      context,
      canvas.width,
      canvas.height,
      settings.sharpness
    );
  }
}


/* =========================================================
   212. PHOTO ENHANCER LIVE PREVIEW STYLES
========================================================= */

function installPart6ImageStyles() {
  if (
    document.getElementById(
      "senn-part6-image-styles"
    )
  ) {
    return;
  }

  const style =
    document.createElement(
      "style"
    );

  style.id =
    "senn-part6-image-styles";

  style.textContent = `
    .enhancer-live-stage {
      display: grid;
      gap: 14px;
      width: 100%;
      margin-top: 20px;
    }

    .enhancer-comparison {
      position: relative;
      width: 100%;
      min-height: 260px;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      border:
        1px solid rgba(255,255,255,.09);
      border-radius: 18px;
      background: #090a0d;
      user-select: none;
      touch-action: none;
    }

    .enhancer-before,
    .enhancer-after {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }

    .enhancer-before {
      z-index: 1;
    }

    .enhancer-after {
      z-index: 2;
      width: 50%;
      border-right:
        2px solid rgba(104,228,255,.9);
    }

    .enhancer-before img,
    .enhancer-after canvas {
      position: absolute;
      inset: 0;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: #090a0d;
    }

    .enhancer-after canvas {
      max-width: none;
      max-height: none;
    }

    .enhancer-comparison-label {
      position: absolute;
      z-index: 4;
      top: 12px;
      padding: 6px 9px;
      border:
        1px solid rgba(255,255,255,.1);
      border-radius: 999px;
      background:
        rgba(5,8,12,.72);
      backdrop-filter:
        blur(10px);
      color: rgba(255,255,255,.82);
      font-size: 10px;
      font-weight: 800;
      letter-spacing: .08em;
      pointer-events: none;
    }

    .enhancer-label-before {
      left: 12px;
    }

    .enhancer-label-after {
      right: 12px;
      color:
        var(--accent, #68e4ff);
    }

    .enhancer-divider {
      position: absolute;
      z-index: 5;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 2px;
      transform:
        translateX(-1px);
      background:
        rgba(104,228,255,.95);
      box-shadow:
        0 0 18px
        rgba(104,228,255,.35);
      pointer-events: none;
    }

    .enhancer-divider::after {
      content: "↔";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 36px;
      height: 36px;
      display: grid;
      place-items: center;
      transform:
        translate(-50%, -50%);
      border:
        1px solid rgba(104,228,255,.45);
      border-radius: 50%;
      background:
        rgba(8,12,17,.92);
      color:
        var(--accent, #68e4ff);
      font-size: 15px;
      box-shadow:
        0 8px 25px
        rgba(0,0,0,.3);
    }

    .enhancer-compare-range {
      width: 100%;
      accent-color:
        var(--accent, #68e4ff);
    }

    .enhancer-preview-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px;
      color:
        rgba(255,255,255,.55);
      font-size: 11px;
    }

    .enhancer-preview-meta strong {
      color:
        rgba(255,255,255,.82);
      font-weight: 700;
    }

    .enhancer-reset-button {
      margin-left: auto;
    }

    .upscale-detail-note {
      margin-top: 4px;
    }

    @media (max-width: 720px) {
      .enhancer-comparison {
        min-height: 220px;
        aspect-ratio: 4 / 3;
      }

      .enhancer-preview-meta {
        align-items: flex-start;
        flex-direction: column;
      }

      .enhancer-reset-button {
        width: 100%;
        margin-left: 0;
      }
    }
  `;

  document.head.appendChild(
    style
  );
}

installPart6ImageStyles();


/* =========================================================
   213. PHOTO ENHANCER V2
   LIVE PREVIEW
========================================================= */

function renderPhotoEnhancerV2() {
  renderImageWorkspaceShell({
    title:
      "Enhance photo",

    description:
      "Adjust brightness, contrast, saturation, and sharpness with a live before/after preview.",

    actionText:
      "Export Enhanced Photo",

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

      <div class="tool-control full">

        <div class="tool-actions">

          <button
            class="tool-button enhancer-reset-button"
            type="button"
          >
            <i
              class="fa-solid fa-rotate-left"
            ></i>

            Reset Adjustments
          </button>

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

  const brightnessValue =
    workspaceContent.querySelector(
      ".enhance-brightness-value"
    );

  const contrastValue =
    workspaceContent.querySelector(
      ".enhance-contrast-value"
    );

  const saturationValue =
    workspaceContent.querySelector(
      ".enhance-saturation-value"
    );

  const sharpnessValue =
    workspaceContent.querySelector(
      ".enhance-sharpness-value"
    );

  const resetButton =
    workspaceContent.querySelector(
      ".enhancer-reset-button"
    );

  const processButton =
    workspaceContent.querySelector(
      ".process-image-button"
    );

  const downloadButton =
    workspaceContent.querySelector(
      ".download-image-button"
    );

  const previewArea =
    workspaceContent.querySelector(
      ".image-preview-area"
    );

  let sourceFile =
    null;

  let sourceImage =
    null;

  let sourceURL =
    null;

  let previewCanvas =
    null;

  let outputBlob =
    null;

  let previewFrame =
    null;


  function updateValueLabels() {
    brightnessValue.textContent =
      `${brightness.value}%`;

    contrastValue.textContent =
      `${contrast.value}%`;

    saturationValue.textContent =
      `${saturation.value}%`;

    sharpnessValue.textContent =
      `${sharpness.value}%`;
  }


  function getSettings() {
    return getEnhancedImageSettings(
      brightness,
      contrast,
      saturation,
      sharpness
    );
  }


  function renderLivePreview() {
    if (
      !sourceImage ||
      !previewCanvas
    ) {
      return;
    }

    if (previewFrame) {
      cancelAnimationFrame(
        previewFrame
      );
    }

    previewFrame =
      requestAnimationFrame(
        () => {
          previewFrame =
            null;

          try {
            drawEnhancedImageToCanvas(
              sourceImage,
              previewCanvas,
              getSettings(),
              {
                allowSharpen:
                  true
              }
            );
          } catch (error) {
            console.error(
              "[SENN TOOLS] Live enhancer preview:",
              error
            );
          }
        }
      );
  }


  function setComparisonPosition(
    percentage
  ) {
    const value =
      Math.max(
        0,
        Math.min(
          100,
          Number(
            percentage
          ) || 0
        )
      );

    const after =
      workspaceContent.querySelector(
        ".enhancer-after"
      );

    const divider =
      workspaceContent.querySelector(
        ".enhancer-divider"
      );

    if (after) {
      after.style.width =
        `${value}%`;
    }

    if (divider) {
      divider.style.left =
        `${value}%`;
    }
  }


  function installComparisonDrag() {
    const comparison =
      workspaceContent.querySelector(
        ".enhancer-comparison"
      );

    const compareRange =
      workspaceContent.querySelector(
        ".enhancer-compare-range"
      );

    if (
      !comparison ||
      !compareRange
    ) {
      return;
    }

    function updateFromClientX(
      clientX
    ) {
      const rect =
        comparison
          .getBoundingClientRect();

      if (!rect.width) {
        return;
      }

      const percentage =
        (
          (
            clientX -
            rect.left
          ) /
          rect.width
        ) *
        100;

      const safeValue =
        Math.max(
          0,
          Math.min(
            100,
            percentage
          )
        );

      compareRange.value =
        String(
          safeValue
        );

      setComparisonPosition(
        safeValue
      );
    }


    comparison.addEventListener(
      "pointerdown",
      (event) => {
        comparison.setPointerCapture?.(
          event.pointerId
        );

        updateFromClientX(
          event.clientX
        );
      }
    );


    comparison.addEventListener(
      "pointermove",
      (event) => {
        if (
          !comparison.hasPointerCapture?.(
            event.pointerId
          )
        ) {
          return;
        }

        updateFromClientX(
          event.clientX
        );
      }
    );


    compareRange.addEventListener(
      "input",
      () => {
        setComparisonPosition(
          compareRange.value
        );
      }
    );
  }


  async function prepareImage(
    file
  ) {
    sourceFile =
      file;

    outputBlob =
      null;

    downloadButton.disabled =
      true;

    try {
      sourceImage =
        await loadImageFromFile(
          file
        );

      if (sourceURL) {
        URL.revokeObjectURL(
          sourceURL
        );
      }

      sourceURL =
        URL.createObjectURL(
          file
        );

      const dimensions =
        calculatePreviewDimensions(
          sourceImage.naturalWidth,
          sourceImage.naturalHeight
        );

      previewArea.classList.remove(
        "tool-preview-grid"
      );

      previewArea.innerHTML = `
        <div class="enhancer-live-stage">

          <div
            class="enhancer-comparison"
          >

            <div
              class="enhancer-before"
            >
              <img
                src="${sourceURL}"
                alt="Original photo"
              >
            </div>

            <div
              class="enhancer-after"
            >
              <canvas
                class="enhancer-live-canvas"
                width="${dimensions.width}"
                height="${dimensions.height}"
              ></canvas>
            </div>

            <span
              class="enhancer-comparison-label enhancer-label-before"
            >
              BEFORE
            </span>

            <span
              class="enhancer-comparison-label enhancer-label-after"
            >
              AFTER
            </span>

            <div
              class="enhancer-divider"
            ></div>

          </div>

          <input
            class="enhancer-compare-range"
            type="range"
            min="0"
            max="100"
            value="50"
            aria-label="Before and after comparison"
          >

          <div
            class="enhancer-preview-meta"
          >
            <span>
              Live preview:
              <strong>
                ${dimensions.width}
                ×
                ${dimensions.height}
              </strong>
            </span>

            <span>
              Export:
              <strong>
                ${sourceImage.naturalWidth}
                ×
                ${sourceImage.naturalHeight}
              </strong>
            </span>
          </div>

        </div>
      `;

      previewCanvas =
        workspaceContent.querySelector(
          ".enhancer-live-canvas"
        );

      installComparisonDrag();

      setComparisonPosition(
        50
      );

      renderLivePreview();
    } catch (error) {
      console.error(
        error
      );

      showToast(
        "Image error",
        "Unable to prepare this image.",
        "error"
      );
    }
  }


  [
    brightness,
    contrast,
    saturation,
    sharpness
  ].forEach(
    (input) => {
      input.addEventListener(
        "input",
        () => {
          updateValueLabels();

          renderLivePreview();
        }
      );
    }
  );


  resetButton.addEventListener(
    "click",
    () => {
      brightness.value =
        "104";

      contrast.value =
        "108";

      saturation.value =
        "108";

      sharpness.value =
        "25";

      updateValueLabels();

      renderLivePreview();

      showToast(
        "Adjustments reset",
        "Enhancer controls returned to default.",
        "info"
      );
    }
  );


  bindImageWorkspaceFile(
    prepareImage
  );


  processButton.addEventListener(
    "click",
    async () => {
      const file =
        requireSelectedFile([
          "image"
        ]);

      if (
        !file ||
        !sourceImage
      ) {
        return;
      }

      const pixels =
        sourceImage.naturalWidth *
        sourceImage.naturalHeight;

      if (
        pixels >
        SENN_IMAGE_LIMITS
          .maxOutputPixels
      ) {
        showToast(
          "Image too large",
          "This image exceeds the safe full-resolution processing limit.",
          "warning"
        );

        return;
      }

      const originalHTML =
        processButton.innerHTML;

      processButton.disabled =
        true;

      processButton.innerHTML = `
        <i
          class="fa-solid fa-spinner fa-spin"
        ></i>

        Exporting...
      `;

      try {
        const canvas =
          document.createElement(
            "canvas"
          );

        canvas.width =
          sourceImage.naturalWidth;

        canvas.height =
          sourceImage.naturalHeight;

        drawEnhancedImageToCanvas(
          sourceImage,
          canvas,
          getSettings(),
          {
            allowSharpen:
              true
          }
        );

        outputBlob =
          await canvasToBlob(
            canvas,
            "image/png",
            1
          );

        downloadButton.disabled =
          false;

        addHistory(
          "photo-enhancer",
          {
            fileName:
              file.name
          }
        );

        showToast(
          "Enhancement ready",
          "Full-resolution enhanced photo is ready.",
          "success"
        );
      } catch (error) {
        console.error(
          "[SENN TOOLS] Photo Enhancer export:",
          error
        );

        showToast(
          "Enhancement failed",
          "The full-resolution image could not be processed.",
          "error"
        );
      } finally {
        processButton.disabled =
          false;

        processButton.innerHTML =
          originalHTML;
      }
    }
  );


  downloadButton.addEventListener(
    "click",
    () => {
      if (
        !outputBlob ||
        !sourceFile
      ) {
        return;
      }

      downloadBlob(
        outputBlob,
        `${getBasdownloadBlob(
  outputBlob,
  `${getBaseFileName(
    state.selectedFile?.name
  )}-upscaled.${outputExtension}`
);
    }
  );
}


/* =========================================================
   218. PART 6A RENDERER OVERRIDE
========================================================= */

const previousPart6RenderToolWorkspace =
  renderToolWorkspace;

renderToolWorkspace =
  function (
    toolId
  ) {
    if (
      toolId ===
      "photo-enhancer"
    ) {
      renderPhotoEnhancerV2();

      return;
    }

    if (
      toolId ===
      "image-upscaler"
    ) {
      renderImageUpscalerV2();

      return;
    }

    previousPart6RenderToolWorkspace(
      toolId
    );
  };


/* =========================================================
   219. PART 6A STATUS
========================================================= */

function getPart6AStatus() {
  return {
    liveEnhancer:
      typeof renderPhotoEnhancerV2 ===
      "function",

    beforeAfter:
      typeof calculatePreviewDimensions ===
      "function",

    standardUpscalerV2:
      typeof renderImageUpscalerV2 ===
      "function",

    progressiveScaling:
      typeof createProgressiveUpscaleCanvas ===
      "function",

    noPresetDownscale:
      typeof calculateStandardUpscaleTarget ===
      "function"
  };
}


console.log(
  "[SENN TOOLS] Part 6A ready.",
  getPart6AStatus()
);


/* =========================================================
   PART 6A END

   FIXED:
   ✓ Photo Enhancer LIVE preview
   ✓ Brightness live update
   ✓ Contrast live update
   ✓ Saturation live update
   ✓ Sharpness live update
   ✓ Before / After comparison
   ✓ Draggable comparison divider
   ✓ Reset adjustments
   ✓ Reduced-resolution realtime preview
   ✓ Full-resolution export
   ✓ Standard Image Upscaler V2
   ✓ Progressive scaling
   ✓ Controlled detail sharpening
   ✓ Presets never intentionally downscale
   ✓ 50 MP browser safety limit

   NEXT PART 6B:
   - Recommended Tools dark/glass color fix
   - Mobile card readability
   - Metadata Viewer layout cleanup
   - Responsive cleanup
   - Final JS syntax/runtime audit
   - Prepare AI Tools Beta entry point
========================================================= */
