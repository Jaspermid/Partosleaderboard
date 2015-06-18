
/**
 * Created by Jasper on 28/04/15.
 */

Template.implementingPage.rendered = function (template) {
    
  
    $('.step'+this.data.phase).addClass("step"+this.data.phase+"-red")

}


Template.implementingPage.helpers({

	phasenumber: function(){	
		return this.phase

	},

	phasename:function(){
		
		return phases[parseInt(this.phase)]

	},	

	logo:function(){

		if (this.logo === ""){
			return "/img/iati_logo.png"
		}
		else{
			return this.logo
		}
	},

	description: function(){
		console.log (this.description)
		if (this.description === ""){
			return "A description for this organisation has not been given. All we know is that they are awesome"
		}
		else{
			return this.description
		}
	}

})
