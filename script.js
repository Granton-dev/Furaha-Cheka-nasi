// script.js

function donate() {
    // Show the donation form
    const donationForm = `
        <div class="form-container" id="donationForm">
            <h3>Donation Form</h3>
            <form id="donation-form">
                <label for="donorName">Name:</label>
                <input type="text" id="donorName" name="donorName" required><br><br>
                <label for="donorEmail">Email:</label>
                <input type="email" id="donorEmail" name="donorEmail" required><br><br>
                <label for="donationAmount">Amount:</label>
                <input type="number" id="donationAmount" name="donationAmount" required><br><br>
                <button type="button" onclick="submitDonation()">Submit Donation</button>
                <button type="button" onclick="closeForm()">Close</button>
            </form>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', donationForm);
}

function submitDonation() {
    const name = document.getElementById('donorName').value;
    const email = document.getElementById('donorEmail').value;
    const amount = document.getElementById('donationAmount').value;

    // Here you can handle the donation submission logic (e.g., send to server)
    console.log(`Donation submitted: Name: ${name}, Email: ${email}, Amount: $${amount}`);
    alert(`Thank you, ${name}! Your donation of $${amount} has been received.`);

    // Clear the form fields
    document.getElementById('donorName').value = '';
    document.getElementById('donorEmail').value = '';
    document.getElementById('donationAmount').value = '';

    // Close the form
    closeForm();
}

function closeForm() {
    const formContainer = document.getElementById('donationForm');
    if (formContainer) {
        formContainer.remove();
    }
}