function threeSum(arr, target) {
  let ans=0;
	let initialdiff=Number.MIN_VALUE;
	for(let i=0;i<=arr.length-3;i++){

		for (let j = i+1; j<=arr.length-2; j++) {
			 for (let k = j+1; k<=arr.length-1; k++) {
			   let sum=arr[i]+arr[j]+arr[k];
				 let diff=Math.abs(sum-target);
				 if(initialdiff>diff){
					 ans=sum;
				 }
			 }
		}
	}
	return ans;
}

module.exports = threeSum;
