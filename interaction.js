window.onload = function() {
    // Select all elements with the class "wrapper"
    const wrappers = document.querySelectorAll(".wrapper");

    // Loop through each wrapper element
    wrappers.forEach(wrapper => {
        // Select all elements with the class "tab-button" and "content" within the current wrapper element
        const tabButton = wrapper.querySelectorAll(".tab-button");
        const contents = wrapper.querySelectorAll(".content");

        // Add an event listener for the "click" event to the current wrapper element
        wrapper.onclick = e => {
            // Get the value of the "data-id" attribute of the clicked element
            const id = e.target.dataset.id;
            // Check if the clicked element has a "data-id" attribute
            if (id) {
                // Loop through all tab buttons within the current wrapper element and remove the "active" class
                tabButton.forEach(btn => {
                    btn.classList.remove("active");
                });
                // Add the "active" class to the clicked element
                e.target.classList.add("active");

                // Loop through all content elements within the current wrapper element and remove the "active" class
                contents.forEach(content => {
                    content.classList.remove("active");
                });
                // Select the content element with the same id as the value of the "data-id" attribute of the clicked element and add the "active" class
                const element = wrapper.querySelector(`#${id}`);
                element.classList.add("active");
            }
        }
    });

    const bellHooks = document.querySelector('.videoPlay');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const close = document.querySelector('.close');
    const videoFrame = document.querySelector('iframe');
    let videoSrc = videoFrame.src;

    bellHooks.addEventListener('click', () => {
        modal.style.display = 'block';
        videoFrame.src = videoSrc;
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        videoFrame.src = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            videoFrame.src = '';
        }
    });
}