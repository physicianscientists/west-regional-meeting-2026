document.addEventListener('DOMContentLoaded', function() {
    const profileContainers = document.querySelectorAll('.profile-container');
    const modals = document.querySelectorAll('.modal');
    
    profileContainers.forEach((container, index) => {
        const button = container.querySelector('.description-button');
        const modal = modals[index];

        button.onclick = function() {
            // Hide all modals first
            modals.forEach(modal => {
                modal.style.display = "none";
            });

            // Show the corresponding modal
            modal.style.display = "block";
        };

        // Close button for each modal
        const closeSpan = modal.querySelector('.close');
        closeSpan.onclick = function() {
            modal.style.display = "none";
        };
    });

    window.onclick = function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    };
});