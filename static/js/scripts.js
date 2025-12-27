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

// order trip variants
addEventListener('load', () => {
    const variants = document.querySelector('.card--page .custom-variants');
    const cardContent = document.querySelector('.card--page .card__content');
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    // reverse order of trips if it's past september in odd year or before october in even year
    const reverseOrder = (year % 2 === 1 && month > 9) || (year % 2 === 0 && month <= 9);

    if (variants && reverseOrder) {
        variants.style.flexDirection = 'column-reverse';
    }

    if (cardContent) cardContent.style.display = 'block';
})