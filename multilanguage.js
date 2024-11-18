// Translations object
const translations = {
    en: {
        skip: {
            main: "Skip to main content",
            nav: "Skip to navigation"
        },
        brand: "Star Wars Universe",
        nav: {
            characters: "Characters",
            planets: "Planets",
            vehicles: "Vehicles"
        },
        hero: {
            title: "Welcome to Star Wars Universe",
            subtitle: "Explore the galaxy far, far away...",
            cta: "Start Your Journey"
        },
        characters: {
            title: "Featured Characters",
            luke: "A farm boy who became one of the greatest Jedi."
        },
        media: {
            title: "Featured Media",
            unsupported: "Your browser does not support the video tag."
        },
        footer: {
            quickLinks: "Quick Links",
            home: "Home",
            legal: "Legal",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            accessibility: "Accessibility Statement"
        },
        accessibility: {
            contrast: "Toggle high contrast",
            fontSize: "Increase font size",
            reader: "Toggle screen reader"
        }
    },
    es: {
        skip: {
            main: "Ir al contenido principal",
            nav: "Ir a la navegación"
        },
        brand: "Universo Star Wars",
        nav: {
            characters: "Personajes",
            planets: "Planetas",
            vehicles: "Vehículos"
        },
        hero: {
            title: "Bienvenido al Universo Star Wars",
            subtitle: "Explora la galaxia muy, muy lejana...",
            cta: "Comienza tu Viaje"
        },
        characters: {
            title: "Personajes Destacados",
            luke: "Un granjero que se convirtió en uno de los mejores Jedi."
        },
        media: {
            title: "Contenido Destacado",
            unsupported: "Tu navegador no soporta el elemento de video."
        },
        footer: {
            quickLinks: "Enlaces Rápidos",
            home: "Inicio",
            legal: "Legal",
            privacy: "Política de Privacidad",
            terms: "Términos de Servicio",
            accessibility: "Declaración de Accesibilidad"
        },
        accessibility: {
            contrast: "Alternar alto contraste",
            fontSize: "Aumentar tamaño de fuente",
            reader: "Alternar lector de pantalla"
        }
    },
    de: {
        skip: {
            main: "Zum Hauptinhalt springen",
            nav: "Zur Navigation springen"
        },
        brand: "Star Wars Universum",
        nav: {
            characters: "Charaktere",
            planets: "Planeten",
            vehicles: "Fahrzeuge"
        },
        hero: {
            title: "Willkommen im Star Wars Universum",
            subtitle: "Erkunde die weit, weit entfernte Galaxie...",
            cta: "Starte deine Reise"
        },
        characters: {
            title: "Beliebte Charaktere",
            luke: "Ein Farmjunge, der zu einem der größten Jedi wurde."
        },
        media: {
            title: "Ausgewählte Medien",
            unsupported: "Ihr Browser unterstützt das Video-Tag nicht."
        },
        footer: {
            quickLinks: "Schnellzugriff",
            home: "Startseite",
            legal: "Rechtliches",
            privacy: "Datenschutz",
            terms: "Nutzungsbedingungen",
            accessibility: "Barrierefreiheit"
        },
        accessibility: {
            contrast: "Hochkontrast umschalten",
            fontSize: "Schriftgröße erhöhen",
            reader: "Bildschirmleser umschalten"
        }
    }
};

// Function to update text content based on selected language
function updateContent(lang) {
    document.documentElement.lang = lang;
    document.querySelector('.current-language').textContent =
        lang === 'en' ? 'English' :
            lang === 'es' ? 'Español' :
                'Deutsch';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = translations[lang];
        for (const key of keys) {
            value = value[key];
        }
        element.textContent = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const keys = element.getAttribute('data-i18n-aria').split('.');
        let value = translations[lang];
        for (const key of keys) {
            value = value[key];
        }
        element.setAttribute('aria-label', value);
    });
}

// Event listeners for language switching
document.querySelectorAll('[data-lang]').forEach(button => {
    button.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        updateContent(lang);
    });
});

// Initialize with English
document.addEventListener('DOMContentLoaded', () => {
    updateContent('en');
});