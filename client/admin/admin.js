/**
 * Created by Jasper on 28/12/14.
 */
 Template.admin.rendered = function() {

    $('.published').addClass("active");
    Session.set ("Published", true);
    //var ministry = 

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
            "description": $('.publishing_org_description').val(),
            "logo": $('.publishing_org_logo').val(),
            "notes": $('.publishing_org_notes').val(),
            "date": $('.publishing_org_date').val(),
            "number": $('.publishing_org_number').val(),
            "file": $('.publishing_org_file').val(),
            "exclusion": $('.publishing_org_exclusion').val(),
            "schedule": $('.publishing_org_schedule').val(),
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
            name: $('.publishing_org_name_edit').val(),
            description: $('.publishing_org_description_edit').val(),
            logo: $('.publishing_org_logo_edit').val(),
            notes: $('.publishing_org_notes_edit').val(),
            date: $('.publishing_org_date_edit').val(),
            number: $('.publishing_org_number_edit').val(),
            file: $('.publishing_org_file_edit').val(),
            exclusion: $('.publishing_org_exclusion_edit').val(),
            schedule: $('.publishing_org_schedule_edit').val(),
            }
        });
    },

    'change .edit': function() {
        var e = document.getElementById("editorganisation");
        var selectedValue = e.options[e.selectedIndex].value;
        console.log (selectedValue)
        $('.publishing_org_name_edit').val(returnOrganisation(selectedValue, "name"))
        $('.publishing_org_description_edit').val(returnOrganisation(selectedValue, "description"))
        $('.publishing_org_logo_edit').val(returnOrganisation(selectedValue, "logo"))
        $('.publishing_org_notes_edit').val(returnOrganisation(selectedValue, "notes"))
        $('.publishing_org_date_edit').val(returnOrganisation(selectedValue, "date"))
        $('.publishing_org_number_edit').val(returnOrganisation(selectedValue, "number"))
        $('.publishing_org_file_edit').val(returnOrganisation(selectedValue, "file"))
        $('.publishing_org_exclusion_edit').val(returnOrganisation(selectedValue, "exclusion"))
        $('.publishing_org_schedule_edit').val(returnOrganisation(selectedValue, "schedule"))
    },

    'click .editimplementing': function(){
        var e = document.getElementById("editimplementingorganisation");
        var selectedValue = e.options[e.selectedIndex].value;
        Implementing.update({
            _id: selectedValue
        },
        {
            $set: {
            name: $('.publishing_org_name_edit').val(),
            description: $('.publishing_org_description_edit').val(),
            logo: $('.publishing_org_logo_edit').val(),
            notes: $('.publishing_org_notes_edit').val(),
            date: $('.publishing_org_date_edit').val(),
            number: $('.publishing_org_number_edit').val(),
            file: $('.publishing_org_file_edit').val(),
            exclusion: $('.publishing_org_exclusion_edit').val(),
            schedule: $('.publishing_org_schedule_edit').val(),
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

    

})