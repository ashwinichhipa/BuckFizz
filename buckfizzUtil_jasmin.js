describe("buckfizzUtil", function() {
	describe("multiple_of_3", function(){
		it("should print Fizz for multiple of 3", function(){
			expect(buckfizzUtil.multiple_of_3([1,2,3]).toBe([1,2,"Fizz"])
		});
	});
	describe("multiple_of_5", function(){
		it("should print Buck for multiple of 5", function(){
			expect(buckfizzUtil.multiple_of_5([4,5,6]).toBe([4,"Buck",6])
		});
	});
	describe("multiple_of_3n5", function(){
		it("should print BuckFizz for multiple of 3n5", function(){
			expect(buckfizzUtil.multiple_of_3([12,13,14,15]).toBe(["Fizz",13,14,"BuckFizz"])
		});
	});
});


var buckfizzUtil = {
	multiple_of_3 : function(params) {
		var data = []
		for (i=0; i<params.length; i++) {
			if(params[i]%3 == 0) {
				data[i]="Fizz";
			} else {
				data[i]=params[i];
			}
		}
		return data;
	},
	multiple_of_5 : function(params) {
		var data = []
		for (i=0; i<params.length; i++) {
			if(params[i]%5 == 0) {
				data[i]="Buck";
			} else {
				data[i]=params[i];
			}
		}
		return data;
	}
	multiple_of_3n5 : function(params) {
		var data = []
		for (i=0; i<params.length; i++) {
			if(params[i]%3 == 0 && params[i]%5 == 0) {
				data[i]="BuckFizz";
			} else {
				data[i]=params[i];
			}
		}
		return data;
	}
};
		