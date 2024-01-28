// Sample data (replace with your actual data)
const hardwareData = [
    { name: "RAM", specifications: "8GB DDR4", image: "ram.jpg" },
    { name: "Monitor", specifications: "27-inch 4K", image: "monitor.jpg" },
    { name: "Laptop", specifications: "Intel i5, 256GB SSD", image: "laptop.jpg" },
    { name: "Server", specifications: "Xeon Processor, 32GB RAM", image: "server.jpg" },
    // Add more hardware components as needed
];

// Function to display hardware components
function displayHardware(hardwareList = hardwareData) {
    const hardwareContainer = document.getElementById("hardwareList");
    hardwareContainer.innerHTML = ""; // Clear previous content

    hardwareList.forEach(hardware => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = hardware.image;
        image.alt = hardware.name;

        const details = document.createElement("div");
        details.classList.add("details");
        details.innerHTML = `<h2>${hardware.name}</h2><p>${hardware.specifications}</p>`;

        card.appendChild(image);
        card.appendChild(details);
        hardwareContainer.appendChild(card);
    });
}

// Function to filter hardware components based on search input
function filterHardware() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredHardware = hardwareData.filter(hardware =>
        hardware.name.toLowerCase().includes(searchInput)
    );

    displayHardware(filteredHardware);
}

// Initial display
displayHardware();

// Event listener for search input
document.getElementById("searchInput").addEventListener("input", filterHardware);

