/**
 * Created by Jasper on 28/12/14.
 */
Template.admin.rendered = function() {

    $('.published').addClass("active");
Session.set ("Published", true)

}

Template.admin.helpers ({

    published: function(){
      return Session.get('Published')
    },



    publishedorganisation: function (){
        return Published.find({}, {sort: [
            ["name", "asc"]
        ]});
    },

    implementingorganisation: function (){
        return Implementing.find({}, {sort: [
            ["name", "asc"]
        ]});
    }

})


Template.admin.events ({


    'click .published': function (){
        Session.set ("Published", true)
    },

    'click .implementing': function (){
        Session.set ("Published", false)
    },

    'click .add': function(){


        Published.insert(
            {
                "name": $('.publishing_org_name').val(),
                "score": $('.publishing_org_score').val()
            }

        )
    },

    'click .remove': function(){

        var e = document.getElementById("selectedorganisation");
        var selectedValue = e.options[e.selectedIndex].value;

       Published.remove(selectedValue)
    },

    'click .edit': function(){
        var e = document.getElementById("editorganisation");
        var selectedValue = e.options[e.selectedIndex].value;
        Published.update({
                _id: selectedValue
            },
            {
                $set: {
                    score: $('.publishing_org_score_edit').val()
                }
            });
    },


    //Implementing organisations

    'click .addimplementing': function(){


        Implementing.insert(
            {
                "name": $('.implementing_org_name').val(),
                "score": $('.implementing_org_score').val()
            }

        )


    },

    'click .removeimplementing': function(){

        var e = document.getElementById("selectedimplementingorganisation");
        var selectedValue = e.options[e.selectedIndex].value;

        Implementing.remove(selectedValue)
    },

    'click .editimplementing': function(){
        var e = document.getElementById("editimplementingorganisation");
        var selectedValue = e.options[e.selectedIndex].value;
        Implementing.update({
                _id: selectedValue
            },
            {
                $set: {
                    score: $('.implementing_org_score_edit').val()
                }
            });
    },

})