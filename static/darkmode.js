function darkmode() {
    if (document.getElementById('darkSwitch').checked == true){
        var element = document.body;
        element.classList.toggle("dark-mode");
        document.querySelector('.jumbotron').style.backgroundColor = '#1e2125';
        window.localStorage.setItem('darkmode', 'true');
    }
    else {
        var elementoso = document.body;
        elementoso.classList.toggle("dark-mode",false);
        document.querySelector('.jumbotron').style.backgroundColor = '#E9ECEF';
        window.localStorage.setItem('darkmode', 'false');
    }
}