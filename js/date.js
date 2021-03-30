const copyrightEl = document.querySelector(".copyright");

copyrightEl.textContent = `Copyright ${new Date().toISOString().slice(0, 4)}`;
