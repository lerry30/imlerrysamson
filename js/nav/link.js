import { cssVarFromElement } from '../utils/css.js';

export const scrollPage = () => {
    const links = document.querySelectorAll('header nav ul li .link');
    const sections = {};

    const pageTop = document.body.getBoundingClientRect().top;

    // get css variables
    const defTextColor = cssVarFromElement(document.body, '--txt-prime');
    const hightLightText = cssVarFromElement(document.body, '--txt-highlight');

    for(const link of links) {
        // get section names from nav links
        const nameOfSection = Object.keys(link.dataset)[0];
        const sectionElem = document.querySelector(`main .${nameOfSection}`) || undefined;

        // store section data
        sections[nameOfSection] = {
            element: sectionElem,
            yPos: (sectionElem?.getBoundingClientRect().top || 0) - pageTop
        };

        // click event
        link.addEventListener('click', () => {
            const top = sections[nameOfSection].yPos;
            scrollTo(0, top);

            // set every nav links color to default
            defaultColor(links, defTextColor);
            // set selected nav link color to hightlight
            link.style.color = hightLightText;
        });

        // mobile click event
        link.addEventListener('touchstart', (ev) => {
            ev.preventDefault();
            console.log('mobile touch triggered');
            alert('mobile touch triggered');
        });
    }
}

function defaultColor(links, color) {
    for(const link of links) {
        link.style.color = color;
    }
}