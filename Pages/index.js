let time = document.getElementById("current-time")


setInterval(() => {
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString('en', { hour: 'numeric', minute: 'numeric',second:'numeric' , hour24: true}); },1000)