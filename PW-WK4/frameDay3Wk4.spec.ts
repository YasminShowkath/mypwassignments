import test, { expect } from '@playwright/test'

test("Handle frame",async({page})=> {

    page.once('dialog',alertType =>{
        alertType.accept("Yasmin")
    })

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt")
    await page.frameLocator('#iframeResult').locator("//button[text()='Try it']").click()

    const message= await page.frameLocator("#iframeResult").locator("#demo").innerText()
        console.log(message)
        expect(message).toEqual("Hello Yasmin! How are you today?")
        


}
)