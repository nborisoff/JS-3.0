let btn = document.getElementsByClassName('btn')[0];

function myAnimation(draw, duration) {
    let start = performance.now();

    requestAnimationFrame(function myAnimation(time) {
    let timePassed = time - start;

    if (timePassed > duration) timePassed = duration;
    draw(timePassed);

    if (timePassed < duration) {
          requestAnimationFrame(myAnimation);
    }
    });
};

btn.addEventListener('click', function() {
    myAnimation(function(timePassed) {
        let circle = document.getElementsByClassName('circle')[0];
        circle.style.transform = 'rotate('+ timePassed + 'deg)';
    }, 1000);
});