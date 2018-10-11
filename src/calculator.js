function add(numbers)
{
	if(numbers == "" || numbers > 1000){
    	return 0;
	}

    var prefix = numbers.substring(0,2);
    if(prefix == "//")
    {
        var split = numbers.substr(0,numbers.indexOf("\n"));
        var split2 = numbers.substr(numbers.indexOf('\n')+1);

        var parameter = split.substring(2);
        console.log("parameters: " + parameter);

        var numbers = split2; 
        numbers = numbers.replace(parameter,",");
        console.log("numbers" + numbers);
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
    
    var numberArray = ignoreBig(numbers);
	checkNegativity(numberArray);
    return numberArray;
    
}

function ignoreBig(numbers)
{
	var tmpNumberArray = numbers.split(",");
    var numberArray = [];

   	for(var i = 0; i < tmpNumberArray.length; i++)
    {
        if(parseInt(tmpNumberArray[i]) <= 1000){
        	numberArray.push(tmpNumberArray[i]);
        }	
    }
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
