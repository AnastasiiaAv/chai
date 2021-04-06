class Homepage {
   
    get apiBtn() { return $('[class="navlist"] [href="/api"]'); }
    get assertBtn() { return $('[class="sidebar sticky"] [href="/api/assert/"]'); }
    get isOkBtn() { return $('[href="#method_isok"]'); }
    get pluginDirectoryBtn() { return $('[id="plugins"]'); }
    get chaijsBtn() { return $('[href="https://www.chaijs.com/plugins/chai-js-factories/"]'); }
    get resoursesBtn() { return $('[href="https://www.chaijs.com/guide/resources/"]'); }
    get platformSupportedTxt() { return $('[class="platform supported"]'); }
    get guideBtn() { return $('[href="/guide"]'); }
    get googlegroupBtn() { return $('[href="http://groups.google.com/group/chaijs"]'); }
    
  
    
    
    
    

    }


module.exports = new Homepage();