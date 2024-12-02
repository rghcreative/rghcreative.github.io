const translations = {
    UnchainedpepeText1: {
        en: "Pepe unchained raises <span style=\"color: yellow\">$51 Million</span>, buy now before exchange listings!",
        tr: "Pepe Unchained <span style=\"color: yellow\">$64+ Million</span> ulaştı, borsada listelenmeden önce satın alın!",
        de: "Pepe unchained erhebt <span style=\"color: yellow\">$64+ Millionen Dollar</span>, jetzt kaufen vor dem Börsengang!"
    },
    UnchainedpepeCta: {
        en: "Buy $PEPU",
        tr: "$PEPU Satın Al",
        de: "$PEPU kaufen"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const userLang = navigator.language.slice(0, 2);

    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        const translation = translations[key]?.[userLang] || translations[key]?.en || "Translation not available";

        if (translation) {
            element.innerHTML = translation;
        } else {
            console.warn(`No translation found for key: ${key}`);
        }
    });
});
