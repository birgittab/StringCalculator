function add(number)
{
	if(number == ""){
    	return 0;
	}
  	
  	if(number.includes(","))
    {
        var numberArray = number.split(",");
        var total = 0;
        for(var i = 0; i < numberArray.length; i++)
        {
        	total += parseInt(numberArray[i]);
    	}
    	return total;
    }
    else
    {
        return parseInt(number);
    }
}

module.exports = add;