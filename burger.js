const burgerBtn = document.getElementById("burgerBtn");
const drawer = document.getElementById("drawer");
const drawerClose = document.getElementById("drawerClose");
const backdrop = document.getElementById("backdrop");

function openMenu() {
  burgerBtn.classList.add("active");
  drawer.classList.add("open");
  backdrop.classList.add("open");

  burgerBtn.setAttribute("aria-expanded", "true");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  burgerBtn.classList.remove("active");
  drawer.classList.remove("open");
  backdrop.classList.remove("open");

  burgerBtn.setAttribute("aria-expanded", "false");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

burgerBtn.addEventListener("click", () => {
  drawer.classList.contains("open") ? closeMenu() : openMenu();
});

drawerClose.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// закрывать при клике на любую ссылку внутри меню
drawer.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", closeMenu);
});
// ================= FAQ Accordion =================
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq__question");

  btn.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    // если хочешь чтобы открывался только один — оставь этот блок:
    faqItems.forEach((el) => {
      el.classList.remove("open");
      const b = el.querySelector(".faq__question");
      b.setAttribute("aria-expanded", "false");
    });

    // открываем текущий, если был закрыт
    if (!isOpen) {
      item.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});
// ================= VFAQ Accordion =================
(() => {
  const items = document.querySelectorAll(".vfaq__item");
  if (!items.length) return;

  items.forEach((item) => {
    const btn = item.querySelector(".vfaq__question");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // чтобы был открыт только один пункт
      items.forEach((el) => {
        el.classList.remove("open");
        const b = el.querySelector(".vfaq__question");
        if (b) b.setAttribute("aria-expanded", "false");
      });

      // открыть текущий
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
})();
// ================= SPECFAQ Accordion =================
(() => {
  const items = document.querySelectorAll(".specfaq__item");
  if (!items.length) return;

  items.forEach((item) => {
    const btn = item.querySelector(".specfaq__question");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // открыть только один (как FAQ)
      items.forEach((el) => {
        el.classList.remove("open");
        const b = el.querySelector(".specfaq__question");
        if (b) b.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
})();
// ===== Drawer submenu: "Студенту" =====
(() => {
  const item = document.querySelector(".drawer__item--has-sub");
  if (!item) return;

  const toggle = item.querySelector(".drawer__toggle");
  const sub = item.querySelector(".drawer__sub");

  toggle.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    item.classList.toggle("open", !isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
    if (sub) sub.setAttribute("aria-hidden", String(isOpen));
  });
})();
