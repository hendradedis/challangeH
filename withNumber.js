

function number() {
    var  Number = 2
    while (Number<100)

    {
        var count=0;
        for(var i = 0; i <=Number; i++)

        {
                if(Number%i===0)
                {
                    count++;
                }
        }
        if(count < 3)
        {
            console.log(Number+ '<br>')
        }

            Number = Number+1;
    }

}

console.log(Number);





