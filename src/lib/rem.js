(function (d,w) {
    const  screen = w.screen,
           wid = screen.width > 750 ? 750 : screen.width,
           rem = wid * 2 / 16;

    function render() {
        d.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
    }
    render();
    w.addEventListener('resize',render);
})(document,window);