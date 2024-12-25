const images = document.querySelectorAll('.card--page [target="calligraphy-image"]');
const modal = document.getElementById("myModal");
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const modalClose = document.getElementById("modal-close");
const captionText = document.getElementById("caption");
images?.forEach(item => {
    item.addEventListener('click', (element) => {
        modal.style.display = "block";
        modalImg.src = element.target.src;
        captionText.innerHTML = element.target.alt;
        document.body.classList.add('overflow-hidden');
        element.preventDefault();
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = "none";
    modalImg.src = '';
    document.body.classList.remove('overflow-hidden');
    captionText.innerHTML = '';
});
