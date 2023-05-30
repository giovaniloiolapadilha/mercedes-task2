import { BeforeAll } from '@wdio/cucumber-framework'
import home from '../pages/home.page.js'
import methods from '../methods.js'
import * as dotenv from 'dotenv' 
dotenv.config()

BeforeAll(async () => {
    await methods.setCleanFolder(process.env.PATH_EVIDENCES)
    await browser.setTimeout({ 'implicit': parseInt(process.env.TIMEOUT_IMPLICIT) })
    await browser.maximizeWindow()
    
    await browser.url(process.env.URL)
    await methods.setClick(home.btnAgreeCookies)
})
