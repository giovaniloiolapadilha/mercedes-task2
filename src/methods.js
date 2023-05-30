import * as fs from 'node:fs'

class Methods {

    async setClick(element) {
        await element.waitForDisplayed()
        await element.waitForClickable()
        await element.click()
    }

    async setCleanFolder(path){
        if(!fs.existsSync(path)){
            fs.mkdirSync(path)
        }else{
            fs.rmSync(path, { recursive: true, force: true });
            fs.mkdirSync(path)
        }
    }
}

export default new Methods()
