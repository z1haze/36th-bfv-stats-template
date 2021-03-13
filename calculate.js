var winp = document.getElementById('winp');
var bar = winp.querySelector('.bar')
var r = parseInt(bar.getAttribute('r'));
var c = Math.PI * (r*2);
var pct = ((100 - winp.dataset.pct) / 100) * c;

bar.style.strokeDashoffset = pct;