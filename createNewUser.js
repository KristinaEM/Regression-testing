const {Builder, By, Key} = require("selenium-webdriver");

async function createNewUser () {

    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("https://qa-task.immedis.com/Users/Create");

    await driver.findElement(By.id("Name")).sendKeys("New user", Key.RETURN);

    await driver.quit();
}

createNewUser()