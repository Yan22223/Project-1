// Activate current nav link by URL
document.addEventListener("DOMContentLoaded", () => {
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navbar .nav-link").forEach(a => {
        const href = a.getAttribute("href");
        if ((path === "" && href.endsWith("index.html")) || href.endsWith(path)) {
            a.classList.add("active");
            a.setAttribute("aria-current", "page");
        }
    });
});

// Simple form handler (client-side only for the assignment)
function handleQuoteSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
    }
    // Fake success message
    const toast = document.getElementById("quoteSuccess");
    toast.classList.remove("d-none");
    form.reset();
    form.classList.remove("was-validated");
}