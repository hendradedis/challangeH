(function() {
    var csv = [];
    csv.push('Name, Category,Price')
     csv.push('xiomi redme 4, smartphone,1199000')
     csv.push('macbook air, Laptop,137750')
     csv.push('samsung Galaxy, Smartphone,3549000')
     csv.push('Dell XPS, Laptop,26799000')
     csv.push('xiomi me 6, Smartphone,5399000')
     csv.push('LG v30pLUS, Smartphone ,1049990')

    console.log(csv);
        function jsonDataArray(array) {
            var headers = array[0].split(',');
            var jsonData = [];
            for ( var i = 1, length = array.length; i < length; i++ )
            {
                var row = array[i].split(',')
                var data = {};
                for ( var x = 0; x < row.length; x++)
                {
                    data[headers[x]] = row[x];
                }
                jsonData.push(data)
            }
            return jsonData;
        }
        console.log(jsonDataArray(csv))

})();