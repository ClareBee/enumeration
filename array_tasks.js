var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = [];
		return newArray.concat(arr1, arr2);

	},

	insertAt: function (arr, itemToAdd, index) {
		 arr.splice(index, 0, itemToAdd);
		 return arr;
	},

	square: function (arr) {
		var newArray = arr.map(function(element){
			return element * element;
		});
		return newArray;
	},

	sum: function (arr) {
		var sum = arr.reduce(function(total, element){
			return total + element;
		});
		return sum;
	},

	findDuplicates: function (arr) {
		var duplicatedArray = arr.slice().sort();
		var duplicateValues = [];
		duplicatedArray.forEach(function(index){
			 if((duplicatedArray[index + 1] === duplicatedArray[index]) && (!duplicateValues.includes(duplicatedArray[index])))
			 {
				 duplicateValues.push(duplicatedArray[index]);
			 }
		});
		return duplicateValues;
	},

	removeAndClone: function (arr, valueToRemove) {
		var results = [];
		arr.forEach(function(item){
			if(item !== valueToRemove){
				results.push(item);
			}
		});
		return results;
	},

	findIndexesOf: function (arr, itemToFind) {
			var indexList = [];
			arr.forEach(function(item, index){
				if(item === itemToFind){
					indexList.push(index);
				}
			});
			return indexList;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var toMultiply = [];
  	arr.forEach(function(item){
			if(item % 2 == 0){
				toMultiply.push(item * item);
			}
		});
		var total = this.sum(toMultiply);
		return total;
	}
}

module.exports = arrayTasks
