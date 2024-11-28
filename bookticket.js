function generateTicketJPG() {
    // Fetch form data
    const fullName = document.getElementById("fullName").value;
    const batch = document.getElementById("batch").value;
    const eventName = document.getElementById("eventName").value;
    const price = document.getElementById("price").value;
    const location = document.getElementById("location").value;

    // Check if any field is empty
    if (!fullName || !batch || !eventName || !price || !location) {
        alert("Please fill in all the fields before submitting.");
        return; // Stop the function if any field is empty
    }

    // Ticket content creation with background image
    const ticketContent = `
        <div style="width: 300px; padding: 20px; text-align: center; font-family: Arial; background:url('./fm/ticketbackground'); background-size: cover; background-position: center; color: #fff; border-radius: 10px;">
            <h2 style="margin: 0;">🎫 Event Ticket 🎫</h2>
            <p style="font-size: 18px;">Event: <strong>${eventName}</strong></p>
            <p style="font-size: 16px;">Name: ${fullName}</p>
            <p style="font-size: 16px;">Batch: ${batch}</p>
            <p style="font-size: 16px;">Location: ${location}</p>
            <p style="font-size: 16px;">Price: ${price}</p>
            <p>✨ Thank you for booking! ✨</p>
        </div>
    `;

    const ticketContainer = document.createElement("div");
    ticketContainer.innerHTML = ticketContent;
    document.body.appendChild(ticketContainer);

    // Using html2canvas to capture the ticket as an image
    html2canvas(ticketContainer, { scale: 2 }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/jpeg", 1.0);
        link.download = "Event_Ticket.jpg";
        link.click();
        document.body.removeChild(ticketContainer); // Clean up

        // Success alert
        alert("Ticket generated successfully! 🎉");

        // Reset the form after success
        resetTicketForm();  // Calling the reset function
    });
}

// Function to reset the form fields
function resetTicketForm() {
    const ticketForm = document.getElementById("ticketForm");
    ticketForm.reset();  // This will reset all fields in the form
}
