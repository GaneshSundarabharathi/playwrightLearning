const {test,expect} = require('@playwright/test');

test("First test with browser fixture only", async ({browser})=>
{
    //our test goes here
    //await - used to avoid async nature of java script. Goes in combi with async
    // => instead of function use this. Unnamed/anonymous function. function() can be replaced with ()=>
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle('Google')
}
);

test("2nd test with page fixture only", async ({page})=> //test.only will run that TC skipping all other cases without .only
{
    //page fixture only takes default context and page definitions
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    console.log(await page.title());
    // await expect(page).toHaveTitle('Yahoo is part of the Yahoo family of brands') -- update with rahulshettty page title
    /*use css selector as locator
    if id presents tagname#id or #id
    if class presents tagname.class or .class
    if attribute value, then [attribute='value']
    */
    await page.locator("#username").fill("rahulshettyacademy"); //id used
    await page.locator("[name='password']").fill("learning"); //attribute used
    await page.locator("#terms").click();
    await page.locator("#signInBtn").click();
}
);

test("Invalid creds test", async ({page})=>
{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    console.log(await page.title());
    await page.locator("#username").fill("rahulshetty");
    await page.locator("[name='password']").fill("learning");
    await page.locator("#terms").click();
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent()); //to display the incorrect creds error message, message appears after few sec. Regex used in attribute
    //using assertion to validate the error message
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
}
);

//05-08
test.only("replace creds test & get item title from list of items", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    const userName = page.locator("#username");
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a")
    console.log(await page.title());
    await page.locator("#username").fill("rahulshetty");
    await page.locator("[name='password']").fill("learning");
    await page.locator("#terms").click();
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent()); 
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    await userName.fill("");//remove the previously filled value
    await userName.fill("rahulshettyacademy"); //will replace the previous value
    await signIn.click();
    // console.log(await page.locator(".card-body a").nth(2).textContent());//get third matching element as this css has 4 matching elements
    // console.log(await page.locator(".card-body a").last().textContent());//get last matching element
    // console.log(await page.locator(".card-body a").first().textContent()); //get first matching element
    const allTexts = await cardTitles.allTextContents(); //playwright doesn't have wait(declared in config file) for allTextContents method
    console.log(allTexts);

}
);