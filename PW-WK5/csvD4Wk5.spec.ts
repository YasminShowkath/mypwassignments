import test from '@playwright/test'
import {parse} from "csv-parse/sync"
import fs from 'fs'
const data:any[]=parse(fs.readFileSync("Data/Login.csv"),
{
    columns:true,
    skipEmptyLines:true
})
for( let val of data)
{
//let val=data[1]
test(`read from CSV File  ${val.testID}`,async({page})=>
{
await page.goto("https://parabank.parasoft.com/parabank/index.htm")
await page.getByRole("link",{name:"Register"}).click()
await page.locator("//input[@id='customer.firstName']").fill(val.firstName)
await page.locator("//input[@id='customer.lastName']").fill(val.lastName)
await page.locator("//input[@id='customer.address.city']").fill(val.city)
await page.locator("//input[@id='customer.address.state']").fill(val.state)

} )
}






