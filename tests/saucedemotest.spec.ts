import { test, expect } from '@playwright/test';
import { getRandomValues } from 'crypto';

test('login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    var list_of_usernames = ['standard_user',/*'locked_out_user','problem_user','performance_glitch_user','error_user'*/,'visual_user'];
    var randomItem = list_of_usernames[Math.floor(Math.random()*list_of_usernames.length)];
    console.log(randomItem);
    // if locked out user, it should consider an error message

    // await page.getByPlaceholder('Username').fill(randomItem);
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByText('Login').click();

    await page.waitForLoadState('networkidle');
    
    var a = 'Sauce Labs Backpack';
    var b = 'Sauce Labs Bike Light';
    var c = 'Sauce Labs Bolt T-Shirt';
    var d = 'Sauce Labs Fleece Jacket';

    var elementToLookFora = await page.getByText(a);
    let elementHidea = elementToLookFora.isVisible(); 
    do {
        await page.keyboard.press('PageDown');
    }
    while (!elementHidea);
    elementToLookFora.click();
    console.log('i found %s!', a);
    
    var elementToLookForb = await page.getByText(b);
    let elementHideb = elementToLookForb.isVisible(); 
    do {
        await page.keyboard.press('PageDown');
    }
    while (!elementHideb);
    elementToLookForb.click();
    console.log('i found %s!', b);
    
    var elementToLookForc = await page.getByText(c);
    let elementHidec = elementToLookForc.isVisible(); 
    do {
        await page.keyboard.press('PageDown');
    }
    while (!elementHidec);
    elementToLookForc.click();
    console.log('i found %s!', c);
    
    var elementToLookFord = await page.getByText(d);
    let elementHided = elementToLookFord.isVisible(); 
    do {
        await page.keyboard.press('PageDown');
    }
    while (!elementHided);
    elementToLookFord.click();
    console.log('i found %s!', d);



    // await page.close();
})