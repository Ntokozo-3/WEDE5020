document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Clear previous messages
    document.getElementById('success-message').classList.add('hidden');
    document.getElementById('error-message').classList.add('hidden');

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const messageType = document.getElementById('message-type').value;
    const message = document.getElementById('message').value;

    // Validate form fields
    if (name && email && messageType && message) {
        // If form is valid, simulate sending email
        const emailRecipient = 'bakery@example.com';  // Change to the desired email address

        // Simulate email content (this part can be handled server-side)
        const emailSubject = `Message from ${name} - ${messageType}`;
        const emailBody = `Name: ${name}\nEmail: ${email}\nMessage Type: ${messageType}\n\nMessage:\n${message}`;

        console.log('Sending email to:', emailRecipient);
        console.log('Subject:', emailSubject);
        console.log('Body:', emailBody);

        // Show success message
        document.getElementById('success-message').classList.remove('hidden');
    } else {
        // If form is invalid, show error message
        document.getElementById('error-message').classList.remove('hidden');
    }
});


document.getElementById(inquiryForm).addEventListener("submit", function(e) {
    e.preventDefault();

    let name=
    document.getElementById("name").value.trim() ;
    let email=
    document.getElementById("email").value.trim();
    let type=
    document.getElementById("type").value ;
    let message=
    document.getElementById("message").value.trim();
    let response=
    document.getElementById("response");

    if (name === "" || email === "" || type === "" || message ===""){
        response.style.display= "block";
        response.innerHTML = "Please fill out all fields";
        return;
    }
             let responseMessage = '';
    
    switch (enquiryType) {
        case 'product':
            responseMessage = `Thank you for enquiring about our products, ${name}. We will get back to you soon with more details about availability and pricing.`;
            break;
        case 'service':
            responseMessage = `Thanks for reaching out about our services, ${name}. We'll provide you with information on how we can best serve your needs.`;
            break;
        case 'volunteer':
            responseMessage = `Thank you, ${name}, for your interest in volunteering! We appreciate your offer and will send you further details about how you can help.`;
            break;
        case 'sponsor':
            responseMessage = `We appreciate your interest in sponsoring our bakery, ${name}. We will send you more information about sponsorship opportunities shortly.`;
            break;
        default:
            responseMessage = 'Something went wrong. Please try again.';
    }

    // Display the response message
    displayResponse(responseMessage, 'success');
});

function displayResponse(message, type) {
    const responseDiv = document.getElementById('response');
    responseDiv.textContent = message;
    
    if (type === 'error') {
        responseDiv.style.backgroundColor = '#ffdddd';
        responseDiv.style.color = '#d8000c';
    } else if (type === 'success') {
        responseDiv.style.backgroundColor = '#d4edda';
        responseDiv.style.color = '#155724';
    }
}

let slideIndex = 1;

function openLightbox(n) {
    document.getElementById("lightboxModal").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightboxModal").style.display = "none";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("lightbox-slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}