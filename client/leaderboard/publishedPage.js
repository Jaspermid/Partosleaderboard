


/**
 * Created by Jasper on 28/04/15.
 */



Template.publishedPage.helpers ({
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
		if (this.description === "" || this.description === undefined){
			return "A description for this organisation has not been given. All we know is that they are awesome"
		}
		else{
			return this.description
		}
	}

})