window.onload = function() {
    const bellHooks = document.querySelector('.videoPlay');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const close = document.querySelector('.close');

    bellHooks.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    close.addEventListener('click', () => {
        const videoFrame = document.querySelector('iframe');
        modal.style.display = 'none';
        videoFrame.src = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
        modal.style.display = 'none';
        }
    });
}

