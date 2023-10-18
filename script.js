function threeSum(arr, target) {
  let ans=Number.MAX_VALUE;
	for(let i=0;i<arr.length;i++){

		for (let j = i+1; j <arr.length; j++) {
			 for (let k = j+1; k <arr.length; k++) {
			   let sum=arr[i]+arr[j]+arr[k];
				 let diff=Math.abs(sum-target);
				 if(diff<ans){
					 ans=sum;
				 }
			 }
		}
	}
	return ans;
  
}

module.exports = threeSum;
