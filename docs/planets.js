// script.js
document.addEventListener("DOMContentLoaded", () => {
    // URL de la API de Star Wars
    const apiUrl = "https://swapi.dev/api/planets/";

    // Función para cargar los planetas desde la API
    const loadPlanets = async () => {
        try {
            let response = await fetch(apiUrl);
            let data = await response.json();
            displayPlanets(data.results);
        } catch (error) {
            console.error("Error al cargar los planetas:", error);
        }
    };

    // Función para mostrar los planetas en la página
    const displayPlanets = (planets) => {
        const planetsContainer = document.getElementById("planets-container");

        planets.forEach(planet => {
            const card = document.createElement("div");
            card.classList.add("card");

            // Crear la estructura del contenido de la carta
            const cardContent = `
                <div class="card-body">
                    <img src="${urlPlaneta(planet.name)}" 
                        alt="${planet.name}" 
                        class="card-img-top img-fluid mb-3" 
                        onerror="this.onerror=null; this.src='path/to/default-planet-image.jpg';">
                    <h5 class="card-title">${planet.name}</h5>
                    <p class="card-text">Clima: ${planet.climate}</p>
                    <p class="card-text">Terreno: ${planet.terrain}</p>
                    <p class="card-text">Población: ${planet.population}</p>
                </div>
            `;
            card.innerHTML = cardContent;
            planetsContainer.appendChild(card);
        });
    };

    function urlPlaneta(nombre) {
        if (nombre == "Tatooine") {
            return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed97b542-8697-4d5c-a783-0dd8185c89d0/d15sn9h-b91d0d97-8378-4b8c-b943-dd1b39a21a84.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkOTdiNTQyLTg2OTctNGQ1Yy1hNzgzLTBkZDgxODVjODlkMFwvZDE1c245aC1iOTFkMGQ5Ny04Mzc4LTRiOGMtYjk0My1kZDFiMzlhMjFhODQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TbpQRH5usavAhtJl_KJ7Tg7eyJBgiVM7fwz7iddfc_4"
        } else if (nombre == "Alderaan") {
            return "https://pm1.aminoapps.com/5770/7acdc10d95131fb090d886466d0031fee64ab6ae_hq.jpg"
        } else if (nombre == "Yavin IV") {
            return "data:image/jpeg;base64,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"
        } else if (nombre == "Hoth") {
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHa7gitw8riaKbv8rWThAC50Ifw5ct6CmHNDVBTnioh7hOgmbBeopMRNW73AFio9Kjrc&usqp=CAU"
        } else if (nombre == "Dagobah") {
            return "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/6/68/Dagobah_2.jpg"
        } else if (nombre == "Bespin") {
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GkXCpwG6X9Fm_lWtMZfkipwi-BvFTqiCwg&s"
        } else if (nombre == "Endor") {
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4Ron0Xy3MIoAM-8cMiTZxE8M_KZNI4vx-v3nPDM7fLT8nPrlppaV6xhvHfxKNLtlrFI&usqp=CAU"
        } else if (nombre == "Naboo") {
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmI_fl4K0KcnbgERRxoMwV0aD9W6Eul17QGlewMcHnBz6bTcxq1Ma_ziG-AtiIh2dco0&usqp=CAU"
        } else if (nombre == "Coruscant") {
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzEg39KKF7NmSZxO4wH8H7Hy0NMH2bf0Ze7MBWjAT-moae1opJ22fTBHR9AEQ7TDZwbtQ&usqp=CAU"
        } else if (nombre == "Kamino") {
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1i1ZFI8MAqXqtrBz6v8fuZwhXwty-5zoV8WSHInObTKOXW5pfVYajj9HnXXQZp70rIA&usqp=CAU"
        }
    }

    // Cargar los planetas al iniciar
    loadPlanets();
});
