document.addEventListener("DOMContentLoaded", () => {
  // Equalize all project card heights
  function equalizeProjectHeights() {
    const cards = document.querySelectorAll(".project-card");
    if (!cards.length) return;

    let maxHeight = 0;
    cards.forEach(card => {
      card.style.height = "auto"; // reset first
      maxHeight = Math.max(maxHeight, card.offsetHeight);
    });

    cards.forEach(card => {
      card.style.height = maxHeight + "px";
    });
  }

  // Run after full load (images included)
  window.addEventListener("load", equalizeProjectHeights);
  window.addEventListener("resize", equalizeProjectHeights);

  // Smooth scroll for "View My Work" button
  const viewWorkBtn = document.querySelector("#hero button");
  const projectsSection = document.querySelector("#projects");

  if (viewWorkBtn && projectsSection) {
    viewWorkBtn.addEventListener("click", () => {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Back to Top button logic
  const backToTopBtn = document.getElementById("backToTop");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
