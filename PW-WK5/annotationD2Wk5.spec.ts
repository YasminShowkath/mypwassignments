import test from '@playwright/test'
import { title } from 'node:process'

test.describe('Smoke testing',()=>{

    test.describe.configure({mode:'parallel',retries:1})
test("Login to teatleaf",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill("DemoSalesManager")
    await page.locator('#password').fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator(`text='CRM/SFA'`).click()
    
}
)


test.skip("Test skip",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill("DemoSalesManager")
    }
)

test.fail("Test fail ",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill("DemoSnager")
    await page.locator('#password').fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
   }
)

test("Test slow",async({page})=>{
 test.slow()
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill("DemoSalesManager")
    await page.locator('#password').fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    
    await page.locator(`text='CRM/SFA'`).click()
    
}
)

test("Test info",async({page})=>{
 
  test.info().annotations.push({type:'smoke',description:'Check the Login fucntion working'},
        {type:'Author',description:'dilip'}
    )
    
  await page.goto("https://www.amazon.in/")
   
}
)
}
)