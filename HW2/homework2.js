main = function() {
    var arr1=[[1,2],[3,4]];
	var arr2=[[5,6],[7,8]];
	mm(arr1, arr2);
	try{
		printArr(mm(arr1, arr2));
	}
	catch(Error){
		chalk.print(" "+Error);
	}
}
//Source for function mm: https://www.youtube.com/watch?v=x7zua7fhyIw
mm=function(m, n){
  if((m[0].length!=n.length)){
	  throw new Error("The dimensions of the Array aren't compatible");
  }
  else if(!Array.isArray(m) || !Array.isArray(n)){
  	throw new Error("First or Second Argument is not an array");
  }
  else{
	var final= new Array(m.length);
		for(var i=0; i<final.length; i++){
			final[i]= new Array(n[i].length);
			for(var j=0; j<m.length; j++){
				final[i][j]=0;
				for(var k=0; k< n.length; k++){
					final[i][j] += m[i][k]*n[k][j];
				}
			}
		}
		return final;
  }
	  
}

printArr=function(m){
	for(var l=0; l<m.length; ++l){
		for( var o=0; o<m[0].length; ++o){
			chalk.print(m[l][o].toString()+" ");
			
		}
		chalk.println("");
		
	}
}