	var fs = require('fs');
	var data = require('./districts');
	var areasql = '';
	var citysql='';
	var provincesql='';
	var provinces = data[100000];
	for(var key in provinces) {
		if(provinces.hasOwnProperty(key)) {
			var cities = data[key];
			for(var k in cities){
				if(cities.hasOwnProperty(k)) {
					var areas = data[k];
					if(areas!=null){
						for(ka in areas) {
							if(areas.hasOwnProperty(ka)) {
								areasql+= 'INSERT INTO `areas` VALUES ('+ka+','+ '\''+areas[ka]+'\''+','+k+');'+'\n';
							}
						}

						}
						citysql+= 'INSERT INTO `cities` VALUES ('+k+','+'\''+cities[k]+'\''+','+key+');'+'\n';
					}
				}
			}
			provincesql+= 'INSERT INTO `provinces` VALUES ('+key+','+'\''+provinces[key]+'\''+');'+'\n';
		}
		var sql = provincesql + citysql + areasql;
		fs.writeFile('./test.sql',sql, function (err) {
			 if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
		})