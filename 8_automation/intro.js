const puppeteer = require("puppeteer");
let page;
const browserOpenPromise = puppeteer.launch({ 
    headless: false ,
    slowMo:true,
    defaultViewport:null 
});
browserOpenPromise
  .then(function (browser) {
    // console.log("Browser opened")
    //!currently open tab
    const pageArrpromise = browser.pages();
    return pageArrpromise;
  })
  .then(function (browerPages) {
    page = browerPages[0];
    const gotoPromise = page.goto("https://www.google.com/");
    return gotoPromise;
  })
  .then(function () {
      //!waiting for the the element to appear on the page
    let elementWaitPromise = page.waitForSelector(
      "input[type='text']",
      "pepcoding",
      { visible: true }
    );
    return elementWaitPromise;
  })
  .then(function () {
    //console.log("Reached google home page");
    //!type any element on that page -> selector
    let keyWillBeSendPromise = page.type("input[type='text']", "boat");
    return keyWillBeSendPromise;
  })
  .then(function () {
      //!page .keyborad to type special character
    let enterWillBePressed = page.keyboard.press("Enter");
    return enterWillBePressed;
  }).then(function(){
      let elementWaitPromise =page.waitForSelector(".CCgQ5.vCa9Yd.QfkTvb.MUxGbd.v0nnCb",{visible:true})
      return elementWaitPromise;
  }).then(function(){
    let keyWillBeSendPromise = page.click(".CCgQ5.vCa9Yd.QfkTvb.MUxGbd.v0nnCb");
    return keyWillBeSendPromise;
  })
  .catch(function (err) {
    console.log(err);
  });
console.log("After");
