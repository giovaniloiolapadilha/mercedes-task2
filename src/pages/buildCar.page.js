import methods from "../methods.js"

class BuildCarPage {

    get btnFuelType() {
        return $("owcc-car-configurator").shadow$("fieldset > div > ccwb-multi-select").shadow$("button")
    }

    get optDieselFuelType() {
        return $("owcc-car-configurator").shadow$("ccwb-checkbox:nth-child(1)").shadow$("label > div")
    }

    get optPremiumFuelType() {
        return $("owcc-car-configurator").shadow$("ccwb-checkbox:nth-child(2)").shadow$("label > div")
    }

    get optSuperFuelType() {
        return $("owcc-car-configurator").shadow$("ccwb-checkbox:nth-child(3)").shadow$("label > div")
    }

    get searchResult() {
        return $("owcc-car-configurator").shadow$("cc-motorization-comparison > div > div")
    }

    get getValues() {
        return $("owcc-car-configurator").shadow$$("span.cc-motorization-header__price--with-environmental-hint")
    }

    async setFuelType(type) {
        await methods.setClick(this.btnFuelType)
        switch (type.toUpperCase()) {
            case "DIESEL":
                await methods.setClick(this.optDieselFuelType)
                break;
            case "PREMIUM":
                await methods.setClick(this.optPremiumFuelType)
                break;
            case "SUPER":
                await methods.setClick(this.optSuperFuelType)
                break;
        }
        await methods.setClick(this.btnFuelType)
        await methods.setClick(this.btnFuelType)
    }

    async getMinValue() {
        return await (this.getValues)[0].getText()
    }
    
    async getMaxValue() {
        let l = await this.getValues.length
        return await (this.getValues)[l-1].getText()
    }
    
}

export default new BuildCarPage()
