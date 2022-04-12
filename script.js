console.log('loaded');
const accordionHeader = document.querySelectorAll('.accordion__header');
console.log(accordionHeader);
if (accordionHeader){
    accordionHeader.forEach((header) => {
        header.addEventListener('click', (event) => {
            console.log('click');
            const {target} = event;
            const parent = target.closest('.accordion__item');
            const content = parent.querySelector('.accordion__content');
            console.log(content);
            target.classList.toggle('toggled');
            content.classList.toggle('toggled');
        })
    })
}