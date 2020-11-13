
'use strict';

let btnDecrease = document.getElementById('btn-decrease');
let btnIncrease = document.getElementById('btn-increase');
let dashboardsCount = document.getElementById('dashboards-count');

let currencySelectbox = document.getElementById('currency-selectbox');
let currency = document.querySelectorAll('.currency');



btnDecrease.addEventListener('click', decreaseDashboard);
btnIncrease.addEventListener('click', increaseDashboard);

currencySelectbox.addEventListener('change', function() {
    let $this = this;
    currency.forEach(function (e) {
        e.innerText = $this.value;
    })
});





function decreaseDashboard() {
    let num = parseInt(dashboardsCount.innerText);
    if (num <= 2)  dashboardsCount.innerText = 2;
    else dashboardsCount.innerText = num - 1;
}

function increaseDashboard() {
    let num = parseInt(dashboardsCount.innerText);
    dashboardsCount.innerText = num + 1;
}

