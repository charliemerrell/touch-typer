window.onload = function() {
    const target = document.getElementsByClassName('target')[0];
    document.onkeypress = function (e) {
        if (String.fromCharCode(e.keyCode) === target.innerHTML) {
            newCharacter();
        }
    };

    function newCharacter() {
        let r = Math.random().toString(36).substring(2,3);
        target.innerHTML === r ? newCharacter() : target.innerHTML = r;
    }

}


