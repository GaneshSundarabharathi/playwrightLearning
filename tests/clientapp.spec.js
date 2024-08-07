const {test,expect} = require('@playwright/test');

test("Client app test with wait", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client");
    const userEmail = page.locator("#userEmail");
    const userPwd = page.locator("#userPassword");
    const signIn = page.locator("[value='Login']");
    const prodTitle = page.locator(".card-body b");
    await userEmail.fill("ganesh.sundarabharathi@gmail.com");
    await userPwd.fill("Tester@123");
    await signIn.click();
    await page.waitForLoadState('networkidle'); //network wait until all service calls are done but discourage by playwright
    // await prodTitle.first().waitFor(); //waitfor method to wait until element visible
    const allTexts = await prodTitle.allTextContents();
    console.log(allTexts);
//npx playwright test tests/clientapp.spec.js --> to run specific js test file
}
);

//07/08
test.only("dropdown and radio button", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    await page.locator("#username").fill("rahulshetty");
    await page.locator("[name='password']").fill("learning");
    const terms = page.locator("#terms");
    const dropDown = page.locator("select.form-control");
    const blinkingText= page.locator("[href*='documents-request']");
    await dropDown.selectOption("consult"); //to select values from dropdown
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").last()).toBeChecked(); //assertion to check that radiobutton is selected, will fail if it is not selected
    // await page.pause();
    await terms.click();
    await expect(terms).toBeChecked(); //assertion to check that checkbox is checked, will fail if it is not checked
    console.log(await terms.isChecked()); //returns boolean value 
    await terms.uncheck(); //to uncheck the checkbox
    expect(await terms.isChecked()).toBeFalsy(); //await depends on where the action is. Here action isChecked is in inside expect so await is inside expect
    await expect(blinkingText).toHaveAttribute("class","blinkingText"); //to validate a dom attribute
    
}
);