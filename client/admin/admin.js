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
            "file": $('.publishing_org_file').val(),
            "exclusion": $('.publishing_org_exclusion').val(),
            "schedule": $('.publishing_org_schedule').val(),
            "kvk": $('.publishing_org_identifier').val(),
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

// retrieves the information from organisation collection to display in the edit boxes. See lib/helpers.js for function

    'change .edit': function() {
        console.log("changed")
        var e = document.getElementById("editorganisation");
        var selectedValue = e.options[e.selectedIndex].value;
        console.log (selectedValue)
        $('.publishing_org_name_edit').val(returnOrganisation(selectedValue, "name", Published))
        $('.publishing_org_description_edit').val(returnOrganisation(selectedValue, "description", Published))
        $('.publishing_org_logo_edit').val(returnOrganisation(selectedValue, "logo", Published))
        $('.publishing_org_notes_edit').val(returnOrganisation(selectedValue, "notes", Published))
        $('.publishing_org_date_edit').val(returnOrganisation(selectedValue, "date", Published))
        $('.publishing_org_number_edit').val(returnOrganisation(selectedValue, "number", Published))
        $('.publishing_org_file_edit').val(returnOrganisation(selectedValue, "file", Published))
        $('.publishing_org_exclusion_edit').val(returnOrganisation(selectedValue, "exclusion", Published))
        $('.publishing_org_schedule_edit').val(returnOrganisation(selectedValue, "schedule", Published))
    },

    //Admin for implementing organisation

    
    
    //Implementing organisations

    'click .addimplementing': function(){

        Implementing.insert(
        {
            "name": $('.implementing_org_name').val(),
            "description": $('.implementing_org_description').val(),
            "logo": $('.implementing_org_logo').val(),
            "notes": $('.implementing_org_notes').val(),
            "date": $('.implementing_org_date').val(),
            "number": $('.implementing_org_number').val(),
            "file": $('.implementing_org_file').val(),
            "exclusion": $('.implementing_org_exclusion').val(),
            "schedule": $('.implementing_org_schedule').val(),
            "phase": $('.implementing_org_phase').val(),
        }

        )
    },


    'click .removeimplementing': function(){

        var e = document.getElementById("selectedimplementingorganisation");
        var selectedValue = e.options[e.selectedIndex].value;

        Implementing.remove(selectedValue)
    },

    'change .editimplementing': function() {


        var e = document.getElementById("editimplementingorganisation");
        var selectedValue = e.options[e.selectedIndex].value;
        console.log (selectedValue)
        $('.implementing_org_name_edit').val(returnOrganisation(selectedValue, "name", Implementing))
        $('.implementing_org_description_edit').val(returnOrganisation(selectedValue, "description", Implementing))
        $('.implementing_org_logo_edit').val(returnOrganisation(selectedValue, "logo", Implementing))
        $('.implementing_org_notes_edit').val(returnOrganisation(selectedValue, "notes", Implementing))
        $('.implementing_org_date_edit').val(returnOrganisation(selectedValue, "date", Implementing))
        $('.implementing_org_number_edit').val(returnOrganisation(selectedValue, "number", Implementing))
        $('.implementing_org_file_edit').val(returnOrganisation(selectedValue, "file", Implementing))
        $('.implementing_org_exclusion_edit').val(returnOrganisation(selectedValue, "exclusion", Implementing))
        $('.implementing_org_schedule_edit').val(returnOrganisation(selectedValue, "schedule", Implementing))
        $('.implementing_org_schedule_phase').val(returnOrganisation(selectedValue, "phase", Implementing))
    },

    'click .editimplementing': function(){
        var e = document.getElementById("editimplementingorganisation");
        var selectedValue = e.options[e.selectedIndex].value;
        Implementing.update({
            _id: selectedValue
        },
        {
            $set: {
            name: $('.implementing_org_name_edit').val(),
            description: $('.implementing_org_description_edit').val(),
            logo: $('.implementing_org_logo_edit').val(),
            notes: $('.implementing_org_notes_edit').val(),
            date: $('.implementing_org_date_edit').val(),
            number: $('.implementing_org_number_edit').val(),
            file: $('.implementing_org_file_edit').val(),
            exclusion: $('.implementing_org_exclusion_edit').val(),
            schedule: $('.implementing_org_schedule_edit').val(),
            phase: $('.implementing_org_phase_edit').val(),
            }
        });
    },


    

})