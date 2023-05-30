class HatchbacksAClassPage {

    get btnBuildYourCar(){
        return $("owc-stage").shadow$("a.owc-stage-cta-buttons__button--secondary")
    }
}

export default new HatchbacksAClassPage()
