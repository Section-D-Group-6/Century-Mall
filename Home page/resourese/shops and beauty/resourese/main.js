
const amaza = function(){
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/Amaza.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section1').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll'
}

const ambasader = function () {
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/Ambasador.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section1').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll'
}

const baby = function () {
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/baby.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section1').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll'
}

const beri = function () {
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/Beri.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section1').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll'
}
const gulit = function () {
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/Gulit.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section2').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll';
}

const fresh = function () {
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/Fresh.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section2').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll';
}

const guwaro = function () {
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/Guwaro.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section2').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll';
}

const modern = function () {
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/Modern.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section2').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll';
}

const galaxy = function () {
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/Galaxy.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section3').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll';
}

const t7 = function () {
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/T-7.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section3').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll';
}

const habesha = function () {
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/Habesha.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section3').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll';
}

const birhana = function () {
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/Birhana.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section3').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll';
}

const massage = function () {
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/Massage.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section5').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll';
}

const spa = function () {
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/Spa.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section5').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll';
}

const treatment = function () {
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/Treatment.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section5').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll';
}

const cosmotics = function () {
    const div = document.createElement('div');
    div.classList.add('shop-popup');
    div.innerHTML = `<iframe src="./Shops/Cosmotics.html" frameborder="0"></iframe><span onclick="cancel()" id="cancel">Cancel</span>`;
    document.getElementById('section5').insertAdjacentElement('afterbegin', div);
    document.body.style.overflow = 'scroll';
}

function cancel(){
    document.querySelector('.shop-popup').style.display = 'none';
    document.body.style.overflow = 'scroll';
}