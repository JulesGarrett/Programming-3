main = function() {
    for (var i=0; i<7; i++){
		for(var j=0; j<7; j++){
			if(i==0 || i==6 || j==6 || j==0){
				chalk.print("*");
			}
			else{
				chalk.print("\xa0");
			}
			
		}
		chalk.newline();
	}
}