export const scrollPage = () => {
    const links = document.querySelectorAll('header nav ul li .link');
    const sections = {};

    const pageTop = document.body.getBoundingClientRect().top;

    for(const link of links) {
        const nameOfSection = Object.keys(link.dataset)[0];
        const sectionElem = document.querySelector(`main .${nameOfSection}`) || undefined;

        console.log(nameOfSection);

        sections[nameOfSection] = {
            element: sectionElem,
            yPos: (sectionElem?.getBoundingClientRect().top || 0) - pageTop
        };

        link.addEventListener('click', () => {
            const top = sections[nameOfSection].yPos;
            scrollTo(0, top);
        });
    }
}