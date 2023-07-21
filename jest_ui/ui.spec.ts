
import { Builder, By, WebDriver } from "selenium-webdriver";

// describe('Test suit', () => {
//     test('Test 1', async () => {
//         let driver: WebDriver = await new Builder().forBrowser('chrome').build();
//         await driver.manage().window().maximize();
//         await driver.get('https://www.aviasales.ru/');
//         await driver.sleep(1000);
//         const size = await driver.manage().window().getSize();
//         console.log(size);

//         await driver.quit();
//     })
// })

// describe('Test suit', () => {
// test('Test 2', async () => {
//     let driver: WebDriver = await new Builder().forBrowser('chrome').build();
//     await driver.manage().window().maximize();
//     await driver.get('https://www.aviasales.ru/');
//     await driver.switchTo().newWindow('tab');
//     await driver.get('https://www.aviasales.ru/my/documents');
//    //const handles = await driver.getAllWindowHandles();
//    //await driver.switchTo().window(handles[0]);
//    await driver.sleep(1000);
//    expect(await driver.getCurrentUrl()).toBe('https://www.aviasales.ru/my/documents');
//     await driver.quit();
// })

//     test('Test 3', async () => {
//         let driver: WebDriver = await new Builder().forBrowser('chrome').build();
//         await driver.manage().window().maximize();
//         await driver.get('https://www.aviasales.ru/');
//         //const originInput = await driver.findElement(By.xpath("//input[@data-test-id='origin-autocomplete-field]"))
//         const originInput = await driver.findElement(By.id('origin'));
//         originInput.sendKeys('Moskow');
//         const destinationInput = await driver.findElement(By.id('destination'));
//         destinationInput.sendKeys('Erevan');
//         expect(await destinationInput.isDisplayed() ).toBeTruthy();
//         const searchButton = await driver.findElement(By.tagName('button'));
//         await driver.sleep(1000);
//         expect(await searchButton.isEnabled() ).toBeTruthy();
//         await driver.quit();
//     })
// })

describe("Test suite", () => {
    // test("Check tickets search", async () => {
    //     let driver: WebDriver = await new Builder().forBrowser("chrome").build();
    //     await driver.manage().window().maximize();
    //     await driver.get("https://www.aviasales.by/");
    //     const searchButton = await driver.findElement(By.xpath("//form[@class='avia-form --home']//button[@type='submit']"));
    //     expect(await searchButton.getText()).toBe('Найти билеты');
    //     await driver.quit();
    // });

    test("Check hotels search", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.get("https://www.aviasales.by/");
        const hotelsTab = await driver.findElement(By.xpath("//a[@data-goal='hotelTab']"));
        await hotelsTab.click();
        const searchButton = await driver.findElement(By.xpath("//form[@class='hotel-form --home']//button[@type='submit']"));
        expect(await searchButton.getText()).toBe('Найти отели');
        await driver.quit();
    });
});