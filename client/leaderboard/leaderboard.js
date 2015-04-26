/**
 * Created by Jasper on 28/12/14.
 */

Template.leaderboard.rendered = function (){

    $('.sort_by_score').addClass("active");
    Session.set ("sort_by_score", true)
    $('.published').addClass("active");
    Session.set ("Published", true)

}


Template.leaderboard.helpers ({
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
            }



    }


);

Template.leaderboard.events ({

    'click .published': function (){
        Session.set ("Published", true)
    },

    'click .implementing': function (){
        Session.set ("Published", false)
    },


    'click .sort_by_score': function (){
        Session.set ("sort_by_score", true)
    },

    'click .sort_by_name': function (){
        Session.set ("sort_by_score", false)
    }

})