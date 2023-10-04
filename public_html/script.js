// Function to calculate the total price based on user selections
function calculatePrice() {
    // Get selected processor value
    const processor = document.getElementById("processor").value;

    // Calculate base price based on processor
    let basePrice = 0;
    if (processor === "i3") {
        basePrice = 300;
    } else if (processor === "i5") {
        basePrice = 500;
    } else if (processor === "i7") {
        basePrice = 800;
    }

    // Calculate additional components price
    let additionalPrice = 0;
    if (document.getElementById("dvd").checked) {
        additionalPrice += 50;
    }
    if (document.getElementById("soundCard").checked) {
        additionalPrice += 100;
    }

    // Get selected options for speed, memory, and hard drive
    const speed = parseFloat(document.getElementById("speed").value);
    const memory = parseInt(document.getElementById("memory").value);
    const hardDriveSize = parseInt(document.getElementById("hardDrive").value);

    // Calculate additional prices for speed, memory, and hard drive
    const speedPrice = speed * 50;
    const memoryPrice = memory * 20;
    const hardDrivePrice = hardDriveSize * 0.1;

    // Calculate total price
    const totalPrice = basePrice + additionalPrice + speedPrice + memoryPrice + hardDrivePrice;

    // Display total price
    document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
}

// Function to generate and display the invoice upon checkout
function checkout() {
    const totalPrice = parseFloat(document.getElementById("totalPrice").textContent);
    const salesTaxRate = 0.07; // Assuming 7% sales tax
    const salesTax = totalPrice * salesTaxRate;
    const totalPriceWithTax = totalPrice + salesTax;

    // Generate the invoice HTML
    const invoice = `
        <h2>Invoice</h2>
        <p>Base Price: $${totalPrice.toFixed(2)}</p>
        <p>Sales Tax/IVU: $${salesTax.toFixed(2)}</p>
        <p>Total Price with Tax/IVU: $${totalPriceWithTax.toFixed(2)}</p>
    `;

    // Display the invoice
    document.getElementById("configurator").innerHTML = invoice;
}