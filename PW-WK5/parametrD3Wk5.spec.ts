import test from "@playwright/test"

import logData from  "../login.json"

for(let log of logData){

//let log=logData[0]

test(`Json File ${log.TestID}`, async({page})=>
{
  await page.goto("https://login.salesforce.com/?locale=in")
  await page.locator('#username').fill(log.username)
  await page.locator('#password').fill(log.password)
  await page.locator('#Login').click()

} )
}