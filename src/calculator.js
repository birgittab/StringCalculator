function add(numbers)
{
	if(numbers == ""){
    	return 0;
	}

	/*if(numbers.includes("-"))
	{
		throw "Negative numbers are not allowed";
	}*/
  	
  	if(numbers.includes(",") || numbers.includes("\n"))
    {
        var numberArray = createArray(numbers);
        return sum(numberArray);
    }

    else
    {
    	if(numbers < 0)
    	{
    		throw "Negative numbers are not allowed"
    	}
        return parseInt(numbers);
 	}
}

function createArray(numbers)
{
	if(numbers.includes("\n"))
    {
    	numbers = numbers.replace(/\n/g,",");
    }
    
    var numberArray = numbers.split(",");

    for(var i = 0; i < numberArray.length; i++)
    {
        if(numberArray[i] < 0){
        	console.log("true");
        	throw "Negative numbers are not allowed"
        }
    }
    return numberArray;
    
}

function sum(numberArray)
{
	var total = 0;
    for(var i = 0; i < numberArray.length; i++)
    {
       	total += parseInt(numberArray[i]);
    }
    return total;
}

module.exports = add;
