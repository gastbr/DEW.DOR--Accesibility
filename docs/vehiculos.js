document.addEventListener('DOMContentLoaded', () => {
    const vehicleContainer = document.getElementById('vehicle-container');

    // URL de la API de Star Wars
    const apiUrl = 'https://swapi.dev/api/vehicles/';

    // Función para obtener los vehículos de la API
    const fetchVehicles = async () => {
        try {
            let response = await fetch(apiUrl);
            let data = await response.json();

            // Recorrer los vehículos y crear un contenedor para cada uno
            data.results.forEach(vehicle => {
                // Crear un div contenedor para cada vehículo
                const vehicleDiv = document.createElement('div');
                vehicleDiv.classList.add('vehicle-div');  // Clase para cada contenedor de vehículo

                // Crear la tarjeta de vehículo
                const vehicleCard = document.createElement('div');
                vehicleCard.classList.add('vehicle-card');

                // Crear el contenido de la tarjeta
                vehicleCard.innerHTML = `
                    <div class="vehicle-card-body">
                        <h3>${vehicle.name}</h3>
                        <p><strong>Model:</strong> ${vehicle.model}</p>
                        <p><strong>Manufacturer:</strong> ${vehicle.manufacturer}</p>
                        <p><strong>Cost in credits:</strong> ${vehicle.cost_in_credits}</p>
                        <p><strong>Max speed:</strong> ${vehicle.max_atmosphering_speed} km/h</p>
                    </div>
                `;

                // Agregar la tarjeta al div contenedor
                vehicleDiv.appendChild(vehicleCard);

                // Agregar el div contenedor al contenedor principal
                vehicleContainer.appendChild(vehicleDiv);
            });
        } catch (error) {
            console.error('Error fetching data from the API:', error);
        }
    };

    // Llamar a la función para obtener los vehículos
    fetchVehicles();
});
