import test  from '@playwright/test'
import dotenv from 'dotenv' 

dotenv.config({path:`Data/LT_LoginQA.env`})

test("Test Single Env file", async({page})=>
{

    let url = process.env.LT_Url as string
    let username = process.env.LT_Username as string
    let password = process.env.LT_Password as string
  await page.goto(url)
  await page.locator('#username').fill(username)
  await page.locator('#password').fill(password)
  await page.locator('#Login').click()
}


)