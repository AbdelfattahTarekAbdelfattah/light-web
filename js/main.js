const btn = document.getElementById('btn');
const light = document.getElementById('light');

btn.addEventListener("click", () => {
    btn.classList.toggle('active');
    light.classList.toggle('on');
});