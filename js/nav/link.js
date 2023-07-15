import { cssVarFromElement } from '../utils/css.js';

const links = document.querySelectorAll('header nav ul li .link');
const sections = {};

// get css variables
const defTextColor = cssVarFromElement(document.body, '--txt-prime');
const hightLightText = cssVarFromElement(document.body, '--txt-highlight');

export const scrollPageCalc = () => {
    const pageTop = document.body.getBoundingClientRect().top;

    for(const link of links) {
        // get section names from nav links
        const nameOfSection = Object.keys(link.dataset)[0];
        const sectionElem = document.querySelector(`main .${nameOfSection}`) || undefined;

        // store section data
        sections[nameOfSection] = {
            element: sectionElem,
            yPos: (sectionElem?.getBoundingClientRect()?.top || 0) - pageTop,
            half: (sectionElem?.getBoundingClientRect()?.height || 0) / 2
        };
    }
}

export const scrollPage = () => {
    if(Object.keys(sections).length == 0) scrollPageCalc();
    for(const link of links) {
        // get section names from nav links
        const nameOfSection = Object.keys(link.dataset)[0];

        // click event
        link.addEventListener('click', () => {
            const top = sections[nameOfSection].yPos;
            scrollTo(0, top);

            setHighLightColor(link);
        });
    }
}

export const highLightNavLink = () => {
    for(const link of links) {
        const nameOfSection = Object.keys(link.dataset)[0];
        const sectionProps = sections[nameOfSection];
        const top = Math.abs(sectionProps?.element?.getBoundingClientRect()?.top);

        if(top < sectionProps.half) {
            setHighLightColor(link);
            break;
        }
    }
}

function setHighLightColor(link) {
    // set every nav links color to default
    for(const link of links) {
        link.style.color = defTextColor;
    }

    // set selected nav link color to hightlight
    link.style.color = hightLightText;
}