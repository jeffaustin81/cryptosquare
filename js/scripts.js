var cryptosquare = function(sentence) {
	var result = sentence.replace(/[^A-Za-z]/g, "").toLowerCase();
	var columns = Math.ceil(Math.sqrt(result.length));
	var n = 0;
	var i = 0;
	var rows = Math.ceil(result.length / columns);
	var firstSplit = [];
	
	while(i < rows) {
		var j = 0;
		var temp = [];
		
		while(j < columns) {
			if(n < result.length) {
				temp.push(result[n]);
			}
			j++;
			n++;
		}
		firstSplit.push(temp);
		i++;
	}

	var last_index = firstSplit.length - 1;

	if (firstSplit[last_index].length < columns) {
		while (firstSplit[last_index].length < columns) {
			firstSplit[last_index].push("!");
		}
	}


	var encryptedString = "";
	var columnIndex = 0;
	
	while(columnIndex < columns) {
		var rowIndex = 0;
		
		while(rowIndex < rows) {
			if(firstSplit[rowIndex][columnIndex] !== null) {
				encryptedString += firstSplit[rowIndex][columnIndex];
			}
			rowIndex++;
		}
		columnIndex++;
	}
	
	var imploded_string = encryptedString.replace(/[^A-Za-z]/g, "");
    
	return imploded_string.match(/.{1,5}/g);
};

$(document).ready(function () {
	$("form#encryption").submit(function(event) {

		var message = $("input#message").val();
		var encrypted_array = cryptosquare(message);
		var encrypted_string = encrypted_array.toString();
		var encrypted = encrypted_string.replace(/[^A-Za-z]/g, " ");
		
		$(".message").text(message);
		$(".encrypted").text(encrypted);

		
		$("#result").show();
		event.preventDefault();
	});
});
