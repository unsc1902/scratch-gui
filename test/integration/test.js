import path from 'path';
import SeleniumHelper from '../helpers/selenium-helper';

const {
    clickText,
    clickButton,
    clickXpath,
    findByXpath,
    getDriver,
    getLogs
} = new SeleniumHelper();

const uri = path.resolve(__dirname, '../../build/index.html');

const errorWhitelist = [
    'The play() request was interrupted by a call to pause()'
];

let driver;

describe('costumes, sounds and variables', () => {
    beforeAll(() => {
        driver = getDriver();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Adding a costume', async () => {
        await driver.get(`file://${uri}`);
        await clickText('Costumes');
        await clickText('Add Costume');
        const el = await findByXpath("//input[@placeholder='what are you looking for?']");
        await el.sendKeys('abb');
        await clickText('abby-a'); // Should close the modal, then click the costumes in the selector
        await clickText('costume1');
        await clickText('abby-a');
        const logs = await getLogs(errorWhitelist);
        await expect(logs).toEqual([]);
    });

    test('Adding a sound', async () => {
        await driver.get(`file://${uri}`);
        await clickText('Sounds');
        await clickText('Add Sound');
        const el = await findByXpath("//input[@placeholder='what are you looking for?']");
        await el.sendKeys('chom');
        await clickText('chomp'); // Should close the modal, then click the sounds in the selector
        await clickText('meow');
        await clickText('chomp');
        await clickXpath('//button[@title="Play"]');
        await clickText('meow');
        await clickXpath('//button[@title="Play"]');

        await clickText('Louder');
        await clickText('Softer');
        await clickText('Faster');
        await clickText('Slower');
        await clickText('Robot');
        await clickText('Echo');
        await clickText('Reverse');

        const logs = await getLogs(errorWhitelist);
        await expect(logs).toEqual([]);
    });

    test('Load a project by ID', async () => {
        const projectId = '96708228';
        await driver.get(`file://${uri}#${projectId}`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await clickXpath('//img[@title="Go"]');
        await new Promise(resolve => setTimeout(resolve, 2000));
        await clickXpath('//img[@title="Stop"]');
        const logs = await getLogs(errorWhitelist);
        await expect(logs).toEqual([]);
    });

    test('Creating variables', async () => {
        await driver.get(`file://${uri}`);
        await clickText('Blocks');
        await clickText('Data');
        await clickText('Create variable...');
        let el = await findByXpath("//input[@placeholder='']");
        await el.sendKeys('score');
        await clickButton('OK');
        await clickText('Create variable...');
        el = await findByXpath("//input[@placeholder='']");
        await el.sendKeys('second variable');
        await clickButton('OK');
        const logs = await getLogs(errorWhitelist);
        await expect(logs).toEqual([]);
    });
});
