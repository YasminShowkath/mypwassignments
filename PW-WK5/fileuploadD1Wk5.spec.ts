import test from '@playwright/test'
import path from 'node:path'
import { only } from 'node:test'

test("handling file upload", async({page})=>{

await page.goto("https://leafground.com/file.xhtml")
await page.locator("//input[@type='file']").first().setInputFiles("Data/Locators HomeWork.pdf")
await page.waitForTimeout(3000)

//set Promise
const downloadPromise = page.waitForEvent('download')
const download =  await page.locator("//span[text()='Download']").click()
const downloadfile =await downloadPromise

}
)

test ("File upload", async({page})=>
{

await page.goto("https://www.naukri.com/registration/createAccount")
await page.locator("//h2[contains(text(),'experienced')]").click()
await page.locator("#resumeUpload").first().setInputFiles("Data/Locators HomeWork.pdf")

await page.waitForTimeout(3000)

}
)
test.only("File upload by event listener", async({page})=>
{

await page.goto("https://www.naukri.com/registration/createAccount")
await page.locator("//h2[contains(text(),'experienced')]").click()

//create promise
const fileupload = page.waitForEvent('filechooser')

//perform an event

await page.locator("//button[text()='Upload Resume']").click()
const filechooser = await fileupload 

//resolve the promise
await filechooser.setFiles("Data/Locators HomeWork.pdf")

await page.waitForTimeout(3000)

}
)