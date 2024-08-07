const {test,expect} = require('@playwright/test');

test("EOpen test", async ({page})=>
{
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://asos.staging.e2open.com");
    console.log(await page.title());
    await expect(page).toHaveTitle('e2open');
    await page.locator("#accept-button").click();
    const homeDropDown = page.locator("#dropdownlist");
    const selectDropDown = page.locator("[value='staging-idp.staging.e2open.com']");
    await page.selectOption('#dropdownlist','staging-idp.staging.e2open.com');
    await page.locator("[value='Select']").click();
    //await page.waitForTimeout(5000);
    await page.locator("#username").fill('elamathipandian');
    await page.locator("#password").fill('June@2024');
    await page.locator("#submit").click();
    await page.locator("//span[normalize-space()='ASOS SCC']").click(); //used xpath
    await page.locator('#c669d0ab-c85e-4446-a1f9-d5c2d78d9353').click();
    await page.locator('.eto-header__menu-toggle').click();
    await page.locator('[title="DDP, WIP & Tools"]').click();
    await page.locator('a[title="View List"] span[class="item-label"]').click();
    await page.locator('[title ="ASOS Order Search"]').click();
    await page.locator('#searchparam_apppoitem_UDF_Text_5_input').fill("");
    await page.locator('#searchparam_apppoitem_UDF_Text_5_input').fill("42352200427962");

    //await page.locator("//a[normalize-space()='ASOS order Search']").click(); from saved shortcut in UI
    
    await page.waitForTimeout(5000);
    
}   
);