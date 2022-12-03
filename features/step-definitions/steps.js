const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I open the home page", async () => {
    await browser.url(`https://www.newegg.com`);
    
});

Given("I close the promo banner if it appears", async () => {
    try {
        const closeButton = await $('#modal-Website > div.modal-dialog.modal-dialog-centered > div > button');
        await closeButton.click();
    } catch (e) {
        console.log(e);    
    }
 
});

When('I enter the word "Windows" in the search bar', async () => {
    const bar = $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-box.auto-flex > input[type=search]');
    await bar.addValue('Windows');
});

When('I click the search', async () => {
    const searchButton = $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-button > button');
     await searchButton.click();
 });


Then('I should see at least one item appears', async () => {
    const item = $('#app > div.page-content > section > div > div > div.row-body > div > div > div > div.row-body > div.row-body-inner > div.list-wrap > div:nth-child(3)')
    await expect(item).toBeExisting();
});



When('I open "Today\'s Best Deals" tab', async () => {
    const dealsTab = $('#trendingBanner_720202 > span');
    await dealsTab.click();
});

When('I click on the Internet shop logo top right corner', async () => {
    const logo = $('.header2021-logo-img');
     await logo.click();
 });

Then('I should see that the main page is open', async () => {
    await expect(browser).toHaveUrl('https://www.newegg.com/')
});

