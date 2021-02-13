i = 0
async function loadPage(){
    name_set = setInterval(function(){    
        i++;
        if(i > 999){
            document.getElementById('name').innerHTML = ["tailsjs", "<a href='./index.html'>teapot</a>"][window.location.href.includes('?418') ? 1 : 0]
            document.title = ["tailsjs.", "teapot."][window.location.href.includes('?418') ? 1 : 0]
            clearInterval(name_set);
            return;
        };
        document.getElementById('name').innerHTML =  "Loading... " + i / 10 + "%"
        document.title =  "Loading... " + i / 10 + "%"
    }, window.location.href.includes('?418') ? 500 : 5);
}


window.onload = loadPage