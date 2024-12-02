document.addEventListener("DOMContentLoaded", () => {
    const userLang = navigator.language.slice(0, 2); // Detect user's browser language (e.g., 'en', 'tr')
    const translations = window.bannerTranslations;

    // Find all elements with the `data-translate` attribute
    document.querySelectorAll("[data-translate-test]").forEach(element => {
        const translationKey = element.getAttribute("data-translate-test");
        const translation = translations[translationKey]?.[userLang] ||
            translations[translationKey]?.en ||
            "Translation not available";

        // Update the element's HTML content
        element.innerHTML = translation;
    });
});

