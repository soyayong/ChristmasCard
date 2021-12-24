function Toast(msg, duration) {
    duration = isNaN(duration) ? 3000 : duration;
    var m = document.createElement('div');
    var _h = 30
    if (msg.length >= 38) {
        msg1 = msg.slice(0, 38)
        msg2 = msg.slice(38)
        msg = msg1 + '</br>' + msg2
        _h = (_h * 2) + 'px'
    }
    m.innerHTML = msg;

    m.style.cssText = "width: 60%;min-width: 1.5rem;opacity: 0.7;height: " + _h + ";color: rgb(255, 255, 255);line-height: 30px;text-align: center;border-radius: 5px;position: fixed;bottom: 50%;left: 20%;z-index: 999999;background: rgb(0, 0, 0);font-size: 36px;";
    document.body.appendChild(m);
    setTimeout(function() {
        var d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function() {
            document.body.removeChild(m)
        }, d * 1000);
    }, duration);
}
