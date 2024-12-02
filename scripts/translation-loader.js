document.addEventListener("DOMContentLoaded", () => {
    const userLang = navigator.language.slice(0, 2); // Detect language
    console.log("Detected language:", userLang);

    const translations = window.bannerTranslations;
    console.log("Loaded translations:", translations);

    if (!translations) {
        console.error("Translations object not found!");
        return;
    }

    document.querySelectorAll("[data-translate-test]").forEach(element => {
        const key = element.getAttribute("data-translate-test");
        console.log("Processing key:", key);

        const translation = translations[key]?.[userLang] || translations[key]?.en || "Translation not available";
        console.log(`Translation for ${key} in ${userLang}:`, translation);

        if (translation) {
            element.innerHTML = translation; // Use innerHTML for HTML-rich translations
        } else {
            console.warn(`No translation found for key: ${key}`);
        }
    });
});


