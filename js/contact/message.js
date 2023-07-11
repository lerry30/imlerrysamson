export const sendMessage = () => {
    const form = document.querySelector('.contact .contact-form');
    const name = form.querySelector('.name');
    const email = form.querySelector('.email');
    const message = form.querySelector('.message');
    const formButton = form.querySelector('.send-btn');

    const url = 'https://lerrysamsonbackend.cyclic.app/newmessage';
    
    formButton.addEventListener('click', async (ev) => {
        ev.preventDefault();

        const data = { 
            name: name.value, 
            email: email.value, 
            message: message.value 
        };

        const result = await send(url, data);
        console.log(result);
    });
}

async function send(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    });

    return response.json();
}