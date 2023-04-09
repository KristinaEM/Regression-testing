const {Builder, By, Key} = require("selenium-webdriver");

async function login () {

    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("https://qa-task.immedis.com/")


    await driver.findElement(By.name("username")).sendKeys("admin");

    await driver.findElement(By.name("password")).sendKeys("123456");
    await driver.findElement(By.xpath("/html/body/form/div/a[1]/div")).click();

    await driver.quit();
}

login()
