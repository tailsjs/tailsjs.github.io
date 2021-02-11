

async function lp(){
    let canvas = document.getElementById('canv');
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.arc(64, 64, 64, 0, 2 * Math.PI, true);
    ctx.fill();
};

window.onload = lp()