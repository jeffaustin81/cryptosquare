describe('cryptosquare', function() {
	// it("takes a string and outputs only the letters", function() {
	// 	expect(cryptosquare("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat a tellus bibendum rhoncus.")).to.equal("loremipsumdolorsitametconsecteturadipiscingelitduisfeugiatatellusbibendumrhoncus");	
	// });
	
	// it("takes a string and outputs only lower case letters", function() {
	// 	expect(cryptosquare("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat a tellus bibendum rhoncus.")).to.equal("loremipsumdolorsitametconsecteturadipiscingelitduisfeugiatatellusbibendumrhoncus");	
	// });	
	it("takes a string an encryption", function() {
		expect(cryptosquare("don't compare yourself to others, compare yourself to the person you were yesterday")).to.equal("drfcuhotoetoreuenyomspwrtoopeeedcutalrraorhrfseymseetoyperyonealsotys");	
	});	
});