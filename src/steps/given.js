import { Given } from '@wdio/cucumber-framework';
import hatch from '../pages/hatchbackAClass.page.js';
import home from '../pages/home.page.js';
import methods from '../methods.js';

Given("I am on the Hatchbacks A Class - Build Your Car page", async () => {
    await methods.setClick(home.lnkOurModels)
    await methods.setClick(home.lnkHatchbacksModels)
    await methods.setClick(home.lnkAClassHatchback)
    await methods.setClick(hatch.btnBuildYourCar) 
});
