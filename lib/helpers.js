returnOrganisation = function (id, property, type){

	var result = type.findOne({_id:id})

    return result[property];
}

