/**
 * Created by Jasper on 28/12/14.
 */

Template.leaderboard.rendered = function (){

    $('.sort_by_score').addClass("active");
    Session.set ("sort_by_score", true)
    $('.published').addClass("active");

    if (Session.get('Published') === undefined){
        Session.set ("Published", true)
    }


    if (Session.get('Published')){
        $('.published').addClass("selected")
    }
    else {
        $('.implementing').addClass("selected")

    }

}


Template.leaderboard.helpers ({

    number: function(){
        console.log (this.name)
        return this.phase
    },

        published: function(){
            return Session.get('Published')
        },

    organisation: function () {
        if (Session.get('sort_by_score')) {

            if (Session.get('Published')) {
                return Published.find({}, {sort: {score: -1}});
            }
            else {
                return Implementing.find({}, {sort: {score: -1}});
            }
        }

        else {
                if (Session.get('Published')) {
                    return Published.find({}, {sort: [
                        ["name", "asc"]
                    ]});
                }
                else {

                    return Implementing.find({}, {sort: [
                        ["name", "asc"]
                    ]});
                }
            }
            },


        type: function () {
            return "publishedPage";
        }

    }



);

Template.leaderboard.events ({

    'click .published': function (){
        Session.set ("Published", true)
        $('.implementing').removeClass("selected")
        $('.published').addClass("selected")
    },

    'click .implementing': function (){
        Session.set ("Published", false)
        $('.implementing').addClass("selected")
        $('.published').removeClass("selected")
    },


    'click .sort_by_score': function (){
        Session.set ("sort_by_score", true)
    },

    'click .sort_by_name': function (){
        Session.set ("sort_by_score", false)
    }

})