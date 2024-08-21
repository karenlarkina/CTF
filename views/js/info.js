const closeBtn = document.getElementById('close');
const widget = document.getElementById('widget2');
const wrong = document.getElementById('wrong')
const body = document.getElementById('body');
const cardContent = document.getElementById('cardContent');



closeBtn.addEventListener('click', () => {
    widget.style.display = 'none';
})

widget.addEventListener('click', (e) => {
    e.stopPropagation();
})

const openDecrypt1 = (event) => {
    event.stopPropagation();
    console.log("BOOP 4");
    widget.style.display = 'block';
    cardContent.innerHTML = `
        <div style="border-radius: 10px; box-shadow: 0 4px 8px rgba(45, 55, 72, 0.1);">
        <div style="text-align: center; color: black;">
            <h1 class="display-3">Flag={clever2}</h1>
            
        </div>
    `;
    widget.classList.remove('transparent-background');
};

const openDecrypt2 = (event) => {
    event.stopPropagation();
    console.log("BOOP 4");
    widget.style.display = 'block';
    cardContent.innerHTML = `
        <div style="border-radius: 10px; box-shadow: 0 4px 8px rgba(45, 55, 72, 0.1);">
        <div style="text-align: center; color: black;">
            <h1 class="display-3">Flag={SECRETS5}</h1>
            
        </div>
    `;
    widget.classList.remove('transparent-background');
};

// Method for card4
const openOfficeCard = (event) => {
    event.stopPropagation();
    console.log("BOOP 4");
    widget.style.display = 'block';
    cardContent.innerHTML = `
        <div style="border-radius: 10px; box-shadow: 0 4px 8px rgba(45, 55, 72, 0.1);">
        <div style="text-align: center; color: black;">
            <h1 class="display-3">Flag={sharp1}</h1>
            
        </div>
    `;
    widget.classList.remove('transparent-background');
};

// Method for card4
const openParksNdRecsCard = (event) => {
    event.stopPropagation();
    console.log("BOOP 4");
    widget.style.display = 'block';
    cardContent.innerHTML = `
        <div style="border-radius: 10px; box-shadow: 0 4px 8px rgba(45, 55, 72, 0.1);">
        <div style="text-align: center; color: black;">
            <h1 class="display-3">Flag={he}</h1>
            
        </div>
    `;
    widget.classList.remove('transparent-background');
};

const openLocation1 = (event) => {
    event.stopPropagation();
    console.log("BOOP 4");
    widget.style.display = 'block';
    cardContent.innerHTML = `
        <div style="border-radius: 10px; box-shadow: 0 4px 8px rgba(45, 55, 72, 0.1);">
        <div style="text-align: center; color: black;">
            <h1 class="display-3">Flag={SecretGroup5}</h1>
            
        </div>
    `;
    widget.classList.remove('transparent-background');
};

const openLocation2 = (event) => {
    // rogue access point, they need to
    event.stopPropagation();
    console.log("BOOP 4");
    widget.style.display = 'block';
    cardContent.innerHTML = `
        <div style="border-radius: 10px; box-shadow: 0 4px 8px rgba(45, 55, 72, 0.1);">
        <div style="text-align: center; color: black;">
            <h1 class="display-3">Flag={Free-LNU-WiFi 2}</h1>
            
        </div>
    `;
    widget.classList.remove('transparent-background');
};

const openMystery = (event) => {
    // rogue access point, they need to
    event.stopPropagation();
    console.log("BOOP 4");
    widget.style.display = 'block';
    cardContent.innerHTML = `
        <div style="border-radius: 10px; box-shadow: 0 4px 8px rgba(45, 55, 72, 0.1);">
        <div style="text-align: center; color: black;">
            <h1 class="display-3">Flag={Awesome}</h1>
            
        </div>
    `;
    widget.classList.remove('transparent-background');
};

// Method for card6
const openInstructionsCard = (event) => {
    event.stopPropagation();
    console.log("BOOP 4");
    widget.style.display = 'block';
    cardContent.innerHTML = `
        <div style="border-radius: 10px; box-shadow: 0 4px 8px rgba(45, 55, 72, 0.1);">
        <div style="text-align: center; color: black;">
            <h1 class="display-3">Flag={Awesome}</h1>
            
        </div>
    `;
    widget.classList.remove('transparent-background');
};

// Method for card2
const openLoginCard = (event) => {
    event.stopPropagation();
    console.log("BOOP 2");
    widget.style.display = 'block';

    // Set the initial content
    cardContent.innerHTML = `
        <div style="border-radius: 10px; box-shadow: 0 4px 8px rgba(45, 55, 72, 0.1);">
        <div style="text-align: center; color: black;">
            <h1 class="display-3">Flag={congrats3}</h1>
            
        </div>
    `;
    widget.classList.remove('transparent-background');
};

closeBtn.addEventListener('click', () => {
    widget.style.display = 'none';
});

body.addEventListener('click', () => {
    console.log("closing")
    widget.style.display = 'none';
    cardContent.innerText = 'Decrypt this gibberish halleluuja!!!!!!'
})
