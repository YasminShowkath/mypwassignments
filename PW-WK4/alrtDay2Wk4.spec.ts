import test, { chromium } from '@playwright/test'

test("Handle Alert with Page.Once",async({page})=> {

    page.once('dialog',alertType=>{
     
        const type =alertType.type();
        console.log(type);

        const message=alertType.message();
        console.log(message)
//actions
    alertType.accept();

    }    )
    await page.goto("https://leafground.com/alert.xhtml");
    await page.locator("//span[text()='Show']").first().click();
    await page.waitForTimeout(5000);

  await page.goto("https://leafground.com/alert.xhtml");
  await page.locator("//span[text()='Show']").nth(1).click();
  await page.waitForTimeout(3000);

}
)