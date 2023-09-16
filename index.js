
document.querySelector('.read-more-button').addEventListener('click', function () {
    const content = document.querySelector('.content');
    const readMoreButton = document.querySelector('.read-more-button');
    const readMoreSection = document.querySelector('.read-more');

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        readMoreButton.textContent = 'Read More';
        readMoreSection.classList.remove('expanded');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        readMoreButton.textContent = 'Read Less';
        readMoreSection.classList.add('expanded');
    }
});

