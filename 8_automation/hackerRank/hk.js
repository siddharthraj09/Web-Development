const puppeteer = require('puppeteer');
const loginLink="https://www.hackerrank.com/auth/login"
const email='xyz.com'
const password='123456'
let browserOpen = puppeteer.launch({
    headless:false,
    slowMo:true,
    defaultViewport:null,
    args:['--start-maximized'] 
})
let page
browserOpen.then(function(browserObj){
    let browserOpenPromise=browserObj.newPage()
    return browserOpenPromise;
}).then(function(newtab){
    page=newtab;
    let hackerRankOpenPromise = newtab.goto(loginLink);
    return hackerRankOpenPromise
}).then(function(){
    let emailIsEntered =page.type("input[type='text']",email,{delay:50})
    return emailIsEntered;
}).then(function(){
    let passwordIsEntered =page.type("input[type='password']",password,{delay:50})
    return passwordIsEntered;
}).then(function(){
    let loginButtonClicked=page.click('button[data-analytics="LoginPassword"]',{delay:50 })
    return loginButtonClicked
})