/* ==========================================================================
   Personal site behaviour
   - Light / dark theme (follows system until you click the toggle)
   - Project list with category + type filters, newest first
   - Highlights the current section in the table of contents
   - Contact form opens the visitor's email app
   Project data lives in projects.js; you shouldn't need to edit this file.
   ========================================================================== */
(function () {
  "use strict";
 
  const root = document.documentElement;
 
  /* ---------------------------- Theme ---------------------------- */
  const themeBtn = document.querySelector(".theme-toggle");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
 
  function savedTheme() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
 
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (!themeBtn) return;
    themeBtn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    themeBtn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
 
  applyTheme(savedTheme() || (systemDark.matches ? "dark" : "light"));
 
  if (themeBtn) themeBtn.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
 
  // If the visitor never chose, keep following their OS setting live.
  systemDark.addEventListener("change", function (e) {
    if (!savedTheme()) applyTheme(e.matches ? "dark" : "light");
  });
 
  /* ---------------------------- Projects ---------------------------- */
  const projects = (window.PROJECTS || []).slice();
  const CATEGORIES = window.CATEGORIES || {};
  const TYPES = window.PROJECT_TYPES || {};
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 
  const state = { category: "all", type: "all" };
 
  const grid = document.getElementById("project-grid");
  const catWrap = document.getElementById("category-filters");
  const typeWrap = document.getElementById("type-filters");
  const countEl = document.getElementById("results-count");
 
  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
 
  // "2026-04-05" or "2026-04" -> sortable number and "Apr 2026"
  function dateKey(d) {
    const p = String(d || "").split("-").map(Number);
    return (p[0] || 0) * 10000 + (p[1] || 0) * 100 + (p[2] || 0);
  }
  function formatDate(d) {
    const p = String(d || "").split("-").map(Number);
    if (!p[0]) return "";
    return p[1] ? MONTHS[p[1] - 1] + " " + p[0] : String(p[0]);
  }
 
  // Newest first, always
  projects.sort(function (a, b) { return dateKey(b.date) - dateKey(a.date); });
 
  function matches(p, category, type) {
    const catOk = category === "all" || (p.categories || []).indexOf(category) !== -1;
    const typeOk = type === "all" || p.type === type;
    return catOk && typeOk;
  }
 
  function makeChip(group, value, label, count) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.dataset.group = group;
    b.dataset.value = value;
    b.setAttribute("aria-pressed", String(state[group] === value));
    b.innerHTML = esc(label) + '<span class="count">' + count + "</span>";
    return b;
  }
 
  // Chip counts reflect the *other* filter, so you can see what's available.
  function renderFilters() {
    catWrap.innerHTML = "";
    catWrap.appendChild(makeChip("category", "all", "All",
      projects.filter(function (p) { return matches(p, "all", state.type); }).length));
    Object.keys(CATEGORIES).forEach(function (key) {
      const n = projects.filter(function (p) { return matches(p, key, state.type); }).length;
      catWrap.appendChild(makeChip("category", key, CATEGORIES[key], n));
    });
 
    typeWrap.innerHTML = "";
    typeWrap.appendChild(makeChip("type", "all", "All",
      projects.filter(function (p) { return matches(p, state.category, "all"); }).length));
    Object.keys(TYPES).forEach(function (key) {
      const n = projects.filter(function (p) { return matches(p, state.category, key); }).length;
      typeWrap.appendChild(makeChip("type", key, TYPES[key], n));
    });
  }
 
  const LINK_LABELS = { github: "View on GitHub", demo: "Live demo", devpost: "Devpost" };
  const GH_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3"/></svg>';
 
  function cardHTML(p) {
    const typeLabel = TYPES[p.type] || p.type || "";
    const links = p.links || {};
    const linkHTML = Object.keys(links).filter(function (k) { return links[k]; }).map(function (k) {
      const icon = k === "github" ? GH_ICON : "";
      return '<a class="link-' + esc(k) + '" href="' + esc(links[k]) + '" target="_blank" rel="noopener">' +
        icon + esc(LINK_LABELS[k] || k) + " ↗</a>";
    }).join("");
 
    return (
      '<article class="project-card">' +
        (p.image ? '<img class="project-img" src="' + esc(p.image) + '" alt="Screenshot of ' + esc(p.title) + '" loading="lazy" />' : "") +
        '<div class="project-body">' +
          '<div class="project-meta">' +
            '<time datetime="' + esc(p.date) + '">' + esc(p.dateLabel || formatDate(p.date)) + "</time>" +
            (typeLabel ? '<span class="badge badge-' + esc(p.type) + '">' + esc(typeLabel) + "</span>" : "") +
            (p.award ? '<span class="badge badge-award">🏆 ' + esc(p.award) + "</span>" : "") +
          "</div>" +
          "<h3>" + esc(p.title) + "</h3>" +
          (p.event ? '<p class="project-event">' + esc(p.event) + "</p>" : "") +
          '<p class="project-desc">' + esc(p.description) + "</p>" +
          '<div class="tag-row">' +
            (p.categories || []).map(function (c) {
              return '<span class="tag tag-cat">' + esc(CATEGORIES[c] || c) + "</span>";
            }).join("") +
            (p.tech || []).map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") +
          "</div>" +
          (linkHTML ? '<div class="project-links">' + linkHTML + "</div>" : "") +
        "</div>" +
      "</article>"
    );
  }
 
  function renderProjects() {
    if (!window.PROJECTS) {
      grid.innerHTML = '<div class="empty-state">Projects couldn\'t load. Check that <code>projects.js</code> is in the same folder as index.html, ' +
        'and open the browser console (F12 → Console) to see if it has a typo.</div>';
      countEl.textContent = "";
      return;
    }
    const list = projects.filter(function (p) { return matches(p, state.category, state.type); });
    grid.innerHTML = list.length
      ? list.map(cardHTML).join("")
      : '<div class="empty-state">No projects match these filters yet. Try another combination.</div>';
    // countEl.textContent = "Showing " + list.length + " of " + projects.length +
    //   " project" + (projects.length === 1 ? "" : "s") + ", newest first";
  }
 
  function onChipClick(e) {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    state[chip.dataset.group] = chip.dataset.value;
    renderFilters();
    renderProjects();
    // keep keyboard focus on the chip that was pressed
    const again = document.querySelector('.chip[data-group="' + chip.dataset.group + '"][data-value="' + chip.dataset.value + '"]');
    if (again) again.focus();
  }
  if (grid && catWrap && typeWrap && countEl) {
    catWrap.addEventListener("click", onChipClick);
    typeWrap.addEventListener("click", onChipClick);
    renderFilters();
    renderProjects();
  }
 
  /* ---------------------------- Skills ---------------------------- */
  const skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid) {
    skillsGrid.innerHTML = (window.SKILLS || []).map(function (group) {
      return '<div class="skill-group">' +
        "<h3>" + esc(group.title) + "</h3>" +
        '<ul class="skill-list">' +
          (group.skills || []).map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") +
        "</ul></div>";
    }).join("");
  }
 
  /* ---------------------- Active section in nav ---------------------- */
  const navLinks = document.querySelectorAll("[data-section]");
  const sections = document.querySelectorAll("main .section");
 
  function setActive(id) {
    navLinks.forEach(function (a) {
      const on = a.dataset.section === id;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  }
 
  function updateActive() {
    const offset = parseInt(getComputedStyle(root).getPropertyValue("--topbar-h"), 10) || 70;
    const line = offset + window.innerHeight * 0.25;
    let current = sections[0] && sections[0].id;
    sections.forEach(function (s) {
      if (s.getBoundingClientRect().top <= line) current = s.id;
    });
    // At the very bottom, highlight the last section
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
      current = sections[sections.length - 1].id;
    }
    setActive(current);
  }
 
  let ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () { updateActive(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });
  window.addEventListener("resize", updateActive);
  updateActive();
 
  /* ---------------------------- Contact ---------------------------- */
  const form = document.getElementById("contact-form");
  const emailLink = document.querySelector(".contact-email");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    const to = emailLink ? emailLink.getAttribute("href").replace(/^mailto:/, "") : "";
    const data = new FormData(form);
    const body = data.get("message") + "\n\n— " + data.get("name");
    window.location.href = "mailto:" + to +
      "?subject=" + encodeURIComponent(data.get("subject")) +
      "&body=" + encodeURIComponent(body);
  });
 
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
 