import { When } from '@wdio/cucumber-framework';
import build from '../pages/buildCar.page.js';
import * as fs from 'node:fs/promises'

When("I filter by fuel type {string}", async (type) => {
    await build.setFuelType(type)  
});

When("I take a screenshoot of the results with name {string}", async (fileName) => {
    let path = process.env.PATH_EVIDENCES + fileName
    await (build.searchResult).scrollIntoView({ block: 'end' })
    await browser.saveScreenshot(path);
});

When("I create a text file with the highest and lowest price results with name {string}", async (fileName) => {
    let path = process.env.PATH_EVIDENCES + fileName
    let min = await build.getMinValue()
    let max = await build.getMaxValue()
    let txt = await min + "\n" + await max

    await fs.writeFile(path, txt);
});