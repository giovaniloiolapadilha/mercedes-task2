class HomePage {

    get btnAgreeCookies(){
        return $("cmm-cookie-banner").shadow$("button.wb-button--accept-all")
    }
    
    get lnkOurModels () {
       return $("owc-header").shadow$("p.owc-header-navigation-topic__label")
    }

    get lnkHatchbacksModels(){
        return $("owc-header > vmos-flyout").shadow$("#app-vue > div > ul > li:nth-child(3) > ul > li:nth-child(4) > div")
    }
    
    get lnkAClassHatchback(){
        return $("owc-header > vmos-flyout").shadow$("owc-header-flyout > ul > li > ul > li:nth-child(1) > a")
    }
}

export default new HomePage()
