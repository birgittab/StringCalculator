function add(numbers)
{

	if(numbers == ""){
    	return 0;
	}

  	if(numbers.includes(",") || numbers.includes("\n"))
    {
        var numberArray = createArray(numbers);
        return sum(numberArray);
    }

    else
    {
    	if(numbers < 0)
    	{
    		throw "Negative numbers are not allowed: " + numbers;
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
    
  
	checkNegativity(numberArray);
    return numberArray;
    
}

function checkNegativity(numberArray)
{
	var negNumArray = [];
	for(var i = 0; i < numberArray.length; i++)
    {
        if(parseInt(numberArray[i]) < 0){
        	negNumArray.push(numberArray[i]);    	
        }
    }
 
    if(negNumArray.length > 0)
    {
      	throw "Negative numbers are not allowed: " + negNumArray.join(",");
    }
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
