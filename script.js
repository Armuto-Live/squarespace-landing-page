let timeLine= gsap.timeline();
timeLine.from("#header img, #header h3,#header h4,#header button",{
    y:-100,
    duration:1,
    delay:.5,
    opacity:0,
    stagger:0.2
});

timeLine.from("#main h1",{
    y:120,
    opacity:0,
    stagger:.3
});

timeLine.from("#main img",{
    scale:0,
    opacity:0,
    stagger:.5,
});

timeLine.from("#main h5",{
    scale:0,
    opacity:0,
});

timeLine.to("#main h5",{
    y:20,
    repeat:-1,
    duration:1,
    yoyo:true,
});
