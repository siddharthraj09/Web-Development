const puppeteer = require("puppeteer");
const loginLink = "https://www.hackerrank.com/auth/login";
const email = "ninowit782@snece.com";
const password = "sr123456789";
const codeFile = require("./code");

let browserOpen = puppeteer.launch({
  headless: false,
  slowMo: true,
  defaultViewport: null,
  args: ["--start-maximized"],
});

let page;

browserOpen
  .then(function (browserObj) {
    let browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;
  })
  .then(function (newtab) {
    page = newtab;
    let hackerRankOpenPromise = newtab.goto(loginLink);
    return hackerRankOpenPromise;
  })
  .then(function () {
    let emailIsEntered = page.type("input[type='text']", email, {
      delay: 50,
    });
    return emailIsEntered;
  })
  .then(function () {
    let passwordIsEntered = page.type("input[type='password']", password, {
      delay: 50,
    });
    return passwordIsEntered;
  })
  .then(function () {
    let loginButtonClicked = page.click(
      'button[data-analytics="LoginPassword"]',
      {
        delay: 50,
      }
    );
    return loginButtonClicked;
  })
  .then(function () {
    let elementWaitPromise = waitAndClick(
      '.topic-card a[data-attr1="algorithms"]',
      page
    );
    return elementWaitPromise;
  })
  .then(function () {
    let getToWarmupPromise = waitAndClick('input[value="warmup"]', page);
    return getToWarmupPromise;
  })
  .then(function () {
    //! $$ means query selector all
    let ChallengesArr = page.$$(
      ".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",
      { delay: 50 }
    );
    return ChallengesArr;
  })
  .then(function (questionsArr) {
    console.log("No of Qustions" + questionsArr.length);
    let questionWillBeSolved = questionSolver(
      page,
      questionsArr[0],
      codeFile.answers[0]
    );
  });

function waitAndClick(selector, cPage) {
  return new Promise(function (resolve, reject) {
    let waitForModalPromise = cPage.waitForSelector(selector);
    waitForModalPromise
      .then(function () {
        let clickModal = cPage.click(selector, { dealy: 50 });
        return clickModal;
      })
      .then(function () {
        resolve();
      })
      .catch(function () {
        reject();
      });
  });
}

function questionSolver(page, question, answer) {
  return new Promise(function (resolve, reject) {
    let questiionWillBeClickedPromise = question.click();
    questiionWillBeClickedPromise
      .then(function () {
        let waitForEditorPromise = waitAndClick(
          ".monaco-editor.no-user-select.vs",
          page
        );
        return waitForEditorPromise;
      })
      .then(function () {
        return waitAndClick('input[type="checkbox"]', page);
      })
      .then(function () {
        return page.waitForSelector(".text-area.custominput");
      })
      .then(function () {
        return page.type(".text-area.custominput", answer, { delay: 10 });
      })
      .then(function () {
        let ctrlIsPressedPromise = page.keyboard.down("Control");
        return ctrlIsPressedPromise;
      })
      .then(function () {
        let AisPressedPromise = page.keyboard.press("A", { delay: 10 });
        return AisPressedPromise;
      })
      .then(function () {
        let XisPressedPromise = page.keyboard.press("X", { delay: 10 });
      })
      .then(function () {
        let ctrlIsRealesedPromise = page.keyboard.up("Control");
        return ctrlIsRealesedPromise;
      })
      .then(function () {
        let waitForEditorPromise = waitAndClick(
          ".monaco-editor.no-user-select.vs",
          page
        );
        return waitForEditorPromise;
      })
      .then(function () {
        let ctrlIsPressedPromise = page.keyboard.down("Control");
        return ctrlIsPressedPromise;
      })
      .then(function () {
        let AisPressedPromise = page.keyboard.press("A", { delay: 10 });
        return AisPressedPromise;
      })
      .then(function () {
        let VisPressedPromise = page.keyboard.press(
          "V",
          { delay: 10 },
          { detlay: 20 }
        );
      })
      .then(function () {
        let ctrlIsRealesedPromise = page.keyboard.up("Control");
        return ctrlIsRealesedPromise;
      })
      .then(function () {
        return page.click(".hr-monaco__run-code", { delay: 20 });
      })
      .then(function () {
        resolve();
      })
      .catch(function (err) {
        console.log(err);
      });
  });
}
