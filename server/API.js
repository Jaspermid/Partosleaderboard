        if (Meteor.isServer) {

            Published.find({}).forEach(function(obj){
                Meteor.http.get("http://dashboard.iatistandard.org/comprehensiveness_summary.csv", function (error, result) {
                    if(error) {
                        console.log('http get FAILED!');
                    } else {
                        console.log('http get SUCCES');
                        if (result.statusCode === 200) {
                            console.log('Status code = 200!');
                           // console.log(result.content)  
                           console.log (obj.name)
                           comprehensiveness = Papa.parse(result.content)
                           console.log (comprehensiveness)
                       }
                   }
               });    

                Meteor.http.get("http://www.oipa.nl/api/v3/activities/?format=json&reporting_organisation__in="+obj.kvk, function (error, result) {
                    if(error) {
                        console.log('http get FAILED!');
                    } else {
                        console.log('http get SUCCES');
                        if (result.statusCode === 200) {
                            console.log('Status code = 200!');
                            iati = JSON.parse(result.content);
                            if (iati.meta.total_count === ""){
                                console.log("empty")
                            }
                            console.log (iati.meta.total_count)
                            console.log (iati.objects)              

                            Published.update({
                                _id: obj._id
                            },
                            {
                                $set: {

                                    total_count: iati.meta.total_count,
                                }
                            });


                            ;

                        }
                    }
                });

            // Retrieve JSON IATI Information for every organisation added

        })  
        //Set schedule task to get API information from OIPA 
        SyncedCron.add({
          name: 'Retrieving IATI information from OIPA',
          schedule: function(parser) {  
            return parser.text('at 06:00 am');
        },


        job: function() {
            console.log ("Calling OIPA API")
            Published.find({}).forEach(function(obj){


            // Retrieve JSON IATI Information for every organisation added

        })  
        }
    });

        SyncedCron.start();




    }