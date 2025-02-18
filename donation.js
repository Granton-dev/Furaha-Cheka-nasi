var modal = document.getElementById("donationFormContainer");

// Get the button that opens the modal
var donateButton = document.getElementById("donateButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
donateButton.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Donation amount selection
var amountButtons = document.querySelectorAll('.amount-button');
var customAmountInput = document.getElementById('customAmount');
var selectedAmount = 0;  // Store the selected amount

amountButtons.forEach(button => {
    button.addEventListener('click', function() {
        selectedAmount = parseFloat(this.dataset.amount);
        // Optionally, highlight the selected button
        amountButtons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        customAmountInput.value = ''; // Clear custom amount
    });
});

customAmountInput.addEventListener('input', function() {
    selectedAmount = parseFloat(this.value) || 0; // Handle empty or invalid input
    // Optionally, un-highlight amount buttons
    amountButtons.forEach(btn => btn.classList.remove('selected'));
});


// Form submission
var submitButton = document.getElementById('submitDonation');
var confirmationMessage = document.getElementById('donationConfirmation');


submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission (which would refresh the page)

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var frequency = document.querySelector('input[name="frequency"]:checked').value; // "monthly" or "annually"

    // Validation (basic example)
    if (!name || !email || !selectedAmount) {
        confirmationMessage.textContent = 'Please fill in all required fields and select an amount.';
        return;
    }

    // Basic email validation
    if (!email.includes('@')) {
      confirmationMessage.textContent = 'Please enter a valid email address.';
      return;
    }

    // **REPLACE WITH ACTUAL PAYMENT PROCESSING LOGIC**
    //  This is where you'd integrate with a payment gateway (Stripe, PayPal, etc.).
    //  You would send the data (name, email, amount, frequency) to the payment gateway.
    //  The gateway would handle the credit card details securely.
    //  Upon successful payment, the gateway would redirect back to your site (or provide a webhook).

    // Simulate successful donation (replace with actual gateway response)
    confirmationMessage.textContent = `Thank you, ${name}! Your donation of $${selectedAmount} per ${frequency} has been processed.`;
    modal.style.display = "none"; // Close the modal on success

    // Clear the form (optional)
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    customAmountInput.value = '';
    amountButtons.forEach(btn => btn.classList.remove('selected'));
    selectedAmount = 0;

});