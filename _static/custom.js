window.addEventListener("DOMContentLoaded", () => {
  function renameRightToc() {
    const tocDiv = document.querySelector('div.page-toc.tocsection.onthispage');
    if (!tocDiv) return false;

    // Najdeme textový uzel, který obsahuje "Obsah"
    for (const node of tocDiv.childNodes) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().startsWith("Obsah")) {
        node.textContent = node.textContent.replace("Obsah", "Obsah stránky");
        return true;
      }
    }
    return false;
  }

  let attempts = 0;
  const maxAttempts = 15;
  const interval = setInterval(() => {
    if (renameRightToc() || attempts >= maxAttempts) {
      clearInterval(interval);
    }
    attempts++;
  }, 50);
});
