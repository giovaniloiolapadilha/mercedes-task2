import { Then } from '@wdio/cucumber-framework';
import build from '../pages/buildCar.page.js';
import * as fs from 'node:fs'

Then("there is a {string} in folder", async (fileName) => {
    let path = process.env.PATH_EVIDENCES + fileName
    let existFile = fs.existsSync(path)

    expect(existFile).toBe(true)
})


Then("there is a {string} in folder with the highest and lowest price results", async (fileName) => {
    let path = process.env.PATH_EVIDENCES + fileName
    let fileText = fs.readFileSync(path, 'utf8')
    let containsMin = fileText.includes(await build.getMinValue())
    let containsMax = fileText.includes(await build.getMinValue())

    expect(containsMin).toBe(true)
    expect(containsMax).toBe(true)
})

