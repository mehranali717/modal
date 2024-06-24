document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (event) => {
        const target = event.target;
        if (target.matches("[data-modal-target]")) {
            const modal = document.querySelector(target.dataset.modalTarget);
            showModal(modal);
        } else if (target.matches("[data-close]")) {
            const modal = target.closest(".modal");
            closeModal(modal);
        } else if (target.matches("[data-modal]")) {
            closeModal(target);
        }
    });

    function showModal(modal) {
        if (modal == null) return;
        modal.style.display = "flex";
        setTimeout(() => {
            modal.classList.add("show");
        }, 10);
    }

    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove("show");
        modal.addEventListener("transitionend", () => {
            modal.style.display = "none";
        }, { once: true });
    }
});
