const moonPath="M26 54C26 83.8234 54 108 54 108C24.1766 108 0 83.8234 0 54C0 24.1766 24.1766 0 54 0C54 0 26 24.1766 26 54Z";
const sunPath="M108 54C108 83.8234 83.8234 108 54 108C24.1766 108 0 83.8234 0 54C0 24.1766 24.1766 0 54 0C83.8234 0 108 24.1766 108 54Z";


const darkMode=document.querySelector('#darkMode');

let toggle=false;

darkMode.addEventListener('click', ()=>{
    //anime.js
    const timeline=anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });

    timeline.add({
        targets: ".sun",
        d:[
           toggle ? {value:sunPath}:{value: moonPath}
        ]
    })
    .add({
        targets: "#darkMode",
        rotate: 320
    }, '-= 350')
    .add({
        targets: "section",
        backgroundColor: toggle ? 'rgb(20, 197, 228)':'rgb(22,22,22)',
        color: toggle ? 'rgb(22,22,22)':'rgb(20, 197, 228)'
    }, '-=700');

    //toggle
    if(!toggle){
        toggle=true;
    }else {
        toggle=false;
    }
})