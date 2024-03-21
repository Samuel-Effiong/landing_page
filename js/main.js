"use strict";

(() => {
    
    // HANDLES THE TAB PANEL
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContent = document.querySelectorAll('.tab-pane');

    tabItems.forEach( (item) => {
        item.addEventListener('click', function() {
            tabItems.forEach(function(item) {
                item.classList.remove('active');
            });

            tabContent.forEach(function(pane) {
                pane.classList.remove('active');
            });

            this.classList.add('active');
            const target = this.dataset.target;
            const contentPane = document.getElementById(target);
            contentPane.classList.add('active');
        });
    });

    // HANDLES THE CONTACT FORM

    const submit_contact = () => {
        const contact_input = document.getElementById('contact-input');
        const contact_value = contact_input.value.trim();

        // Check for empty value in the contact form
        if (!contact_value) {
            if (!contact_input.classList.contains('is-invalid')) {
                document.getElementById('feedback-message').textContent = "Whoops, can't submit an empty value"
                contact_input.classList.add('is-invalid');
            }
        }
        else {
            
            // check for invalid email in contact form
            // This is not meant to be a complex email validator
            if (contact_value.includes('@') && contact_value.includes('.')) {
                if (contact_input.classList.contains('is-invalid')) {
                    contact_input.classList.remove('is-invalid');
                }

                // Make your FETCH REQUEST HERE
                
            }
            else {
                document.getElementById('feedback-message').textContent = "Whoops, make sure it's an email";
                contact_input.classList.add('is-invalid');
                
            }

        }

    }
    
    const contact_button = document.getElementById('contact-button');
    contact_button.addEventListener('click', submit_contact)

    
})()