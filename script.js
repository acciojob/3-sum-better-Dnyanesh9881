function threeSum(arr, target) {
  let ans=-2;
	let initialdiff=Number.MAX_VALUE;
	for(let i=0;i<arr.length-3;i++){

		for (let j = i+1; j <arr.length-2; j++) {
			 for (let k = j+1; k <arr.length-1; k++) {
			   let sum=arr[i]+arr[j]+arr[k];
				 let diff=Math.abs(sum-target);
				 if(diff<initialdiff){
					 ans=sum;
					 
				 }
			 }
		}
	}
	return ans;
  
}

module.exports = threeSum;
