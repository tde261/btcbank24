"use strict"
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

const headerBurger = document.querySelector('.header__burger');
if (headerBurger) {
    const headerMenu = document.querySelector('.header__menu');
    headerBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        headerBurger.classList.toggle('_active')
        headerMenu.classList.toggle('_active')

    })

}

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};
if (isMobile.any()) {
    document.body.classList.add("_touch");

    const menu__arrow = document.querySelector('.menu__arrow');
    if (headerBurger) {
        const menu__arrow = document.querySelector('.menu__arrow');
        menu__arrow.addEventListener("click", function (e) {
            menu__arrow.parentElement.classList.toggle('_active')


        })

    }
} else {
    document.body.classList.add("_pc");
}

  var goTopBtn = document.querySelector('.back_to_top');

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }
  trackScroll();

  function backToTop() {
    window.scrollTo(pageYOffset, 0);
  }

  

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);




async function load() {
    let url = `https://www.cbr-xml-daily.ru/daily_json.js`;
    let obj = await (await fetch(url)).json();
    let usd = obj.Valute.USD.Value.toFixed(2);

    let BTCurl = `https://api.binance.com/api/v3/ticker/price?symbol=BTCRUB`;
    let objBTC = await (await fetch(BTCurl)).json();
    let btc = parseFloat(objBTC.price).toFixed(0);
    console.log(btc)

    let USDTurl = `https://api.binance.com/api/v3/ticker/price?symbol=USDTRUB`;
    let objUSDT = await (await fetch(USDTurl)).json();
    let usdt = parseFloat(objUSDT.price).toFixed(2);
    console.log(usdt)

    let ETHurl = `https://api.binance.com/api/v3/ticker/price?symbol=ETHRUB`;
    let objETH = await (await fetch(ETHurl)).json();
    let eth = parseFloat(objETH.price).toFixed(0);

    let XMRurl = `https://api.binance.com/api/v3/ticker/price?symbol=XMRUSDT`;
    let objXMR = await (await fetch(XMRurl)).json();
    let xmr = parseFloat(objXMR.price).toFixed(0);

    let LTCurl = `https://api.binance.com/api/v3/ticker/price?symbol=LTCRUB`;
    let objLTC = await (await fetch(LTCurl)).json();
    let ltc = parseFloat(objLTC.price).toFixed(0);

    let uxmr = usd * xmr;
  if(document.getElementById('last_block_header') !== null) {
    let parent = document.querySelector('.sidebar_2')
    let curencyDiv = document.createElement('div');
    curencyDiv.innerHTML = '<h3 class="sidebar__title">Курс валют</h3><div class="sidebar__list"><p style="margin: 7px 0;"><img style="width: 25px;height:25px;" src="/img/btc.png" alt="btc"><span style="margin: 5px 0 0px 10px;display: inline-block;">' + btc + ' руб.</span></p><p style="margin: 7px 0;"><img style="width: 25px;" src="/img/eth.png" alt="eth"><span style="margin: 5px 0 0px 10px;display: inline-block;">' + eth + ' руб.</span></p><p style="margin: 7px 0;"><img style="width: 25px;" src="/img/xmr.png" alt="xmr"><span style="margin: 5px 0 0px 10px;display: inline-block;">' + Math.round(uxmr) + ' руб.</span></p><p style="margin: 7px 0;"><img style="width: 25px;" src="/img/ltc.png" alt="ltc"><span style="margin: 5px 0 0px 10px;display: inline-block;">' + ltc + ' руб.</span></p><p style="margin: 7px 0;"><img style="width: 25px;" src="/img/usdt.png" alt="usd"><span style="margin: 5px 0 0px 10px;display: inline-block;">' + usdt + ' руб.</span></p><p style="margin: 7px 0;"><img style="width: 25px;" src="/img/usd.png" alt="usd"><span style="margin: 5px 0 0px 10px;display: inline-block;">' + usd + ' руб.</span></p><div>';
    if(parent) { 
        parent.append(curencyDiv);
    }
  }
}
document.addEventListener("DOMContentLoaded", function(event) {
    load();
});







