import { scrollPageCalc, scrollPage, highLightNavLink } from './nav/link.js';
import { sendMessage } from './contact/message.js';
import Throttle from './utils/throttle.js';

scrollPageCalc();
scrollPage();
sendMessage();

const calcPagePosThrottle = Throttle(scrollPageCalc);
// const highLightNavLinkThrottle = Throttle(highLightNavLink);
addEventListener('resize', calcPagePosThrottle);
addEventListener('scroll', highLightNavLink);