var cryptosquare = function(sentence) {
	var result = sentence.replace(/[^A-Za-z]/g, "").toLowerCase();
	var columns = Math.ceil(Math.sqrt(result.length));
	var n = 0;
	var i = 0;
	var rows = Math.ceil(result.length / columns);
	var firstSplit = new Array();
	while(i < rows) {
		var j = 0;
		var temp = new Array();
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
	
	return encryptedString;
};

// $(document).ready(function () {
// 	$("form#factorial").submit(function(event) {
		
// 		var n = parseInt($("input#n").val());
// 		var answer = factorial(n);
		
// 		$(".n").text(n);
// 		$(".answer").text(answer);

		
// 		$("#result").show();
// 		event.preventDefault();
// 	});
// });