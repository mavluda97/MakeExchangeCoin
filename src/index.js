// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    if(currency<=0){
       
       return {};
    }

    else if(currency>10000){
       
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    else 
     {  
     	var n=currency;
    	var coin =[];
        var result;

        coin[0] = parseInt(n/50);

         

        n = n-(50*coin[0]);
        coin[1] = parseInt(n/25);

        
       	n = n-(25*coin[1]);
		coin[2] = parseInt(n/10);

		n = n-(10*coin[2]);
		coin[3] = parseInt(n/5);

		n = n-(5*coin[3]);
		coin[4] = n;

	      
        //with one coin
       if ((coin[0]!=0)&&(coin[1]==0)&&(coin[2]==0)&&(coin[3]==0)&&(coin[4]==0)){
       	result={"H":coin[0]}
       	return result;
       }

		else if ((coin[0]==0)&&(coin[1]!=0)&&(coin[2]==0)&&(coin[3]==0)&&(coin[4]==0)){
       	result={"Q":coin[1]}
       	return result;
       }

       else if ((coin[0]==0)&&(coin[1]==0)&&(coin[2]!=0)&&(coin[3]==0)&&(coin[4]==0)){
       	result={"D":coin[2]}
       	return result;
       }

       else if ((coin[0]==0)&&(coin[1]==0)&&(coin[2]==0)&&(coin[3]!=0)&&(coin[4]==0)){
       	result={"N":coin[3]}
       	return result;
       }

       
       else if ((coin[0]==0)&&(coin[1]==0)&&(coin[2]==0)&&(coin[3]==0)&&(coin[4]!=0)){
       	result={"P":coin[4]}
       	return result;
       }

       // with two coin


       else if ((coin[0]!=0)&&(coin[1]!=0)&&(coin[2]==0)&&(coin[3]==0)&&(coin[4]==0)){
       	result={"H":coin[0],"Q":coin[1]}
       	return result;
       }

       else if ((coin[0]!=0)&&(coin[1]==0)&&(coin[2]!=0)&&(coin[3]==0)&&(coin[4]==0)){
       	result={"H":coin[0],"D":coin[2]}
       	return result;
       }

       else if ((coin[0]!=0)&&(coin[1]==0)&&(coin[2]==0)&&(coin[3]!=0)&&(coin[4]==0)){
       	result={"H":coin[0],"N":coin[3]}
       	return result;
       }

       else if ((coin[0]!=0)&&(coin[1]==0)&&(coin[2]==0)&&(coin[3]==0)&&(coin[4]!=0)){
       	result={"H":coin[0],"P":coin[4]}
       	return result;
       }


       //*****

       else if ((coin[0]==0)&&(coin[1]!=0)&&(coin[2]!=0)&&(coin[3]==0)&&(coin[4]==0)){
       	result={"Q":coin[1],"D":coin[2]}
       	return result;
       }

       else if ((coin[0]==0)&&(coin[1]!=0)&&(coin[2]==0)&&(coin[3]!=0)&&(coin[4]==0)){
       	result={"Q":coin[1],"N":coin[3]}
       	return result;
       }

       else if ((coin[0]==0)&&(coin[1]!=0)&&(coin[2]==0)&&(coin[3]==0)&&(coin[4]!=0)){
       	result={"Q":coin[1],"P":coin[4]}
       	return result;
       }

       //****

       else if ((coin[0]==0)&&(coin[1]==0)&&(coin[2]!=0)&&(coin[3]!=0)&&(coin[4]==0)){
       	result={"D":coin[2],"N":coin[3]}
       	return result;
       }

       else if ((coin[0]==0)&&(coin[1]==0)&&(coin[2]!=0)&&(coin[3]==0)&&(coin[4]!=0)){
       	result={"D":coin[2],"P":coin[4]}
       	return result;
       }
        

       //****

       else if ((coin[0]==0)&&(coin[1]==0)&&(coin[2]==0)&&(coin[3]!=0)&&(coin[4]!=0)){
       	result={"N":coin[3],"P":coin[4]}
       	return result;
       }

       //with three coin

        else if ((coin[0]!=0)&&(coin[1]!=0)&&(coin[2]!=0)&&(coin[3]==0)&&(coin[4]==0)){
       	result={"H":coin[0],"Q":coin[1],"D":coin[2]}
       	return result;
       }

		else if ((coin[0]!=0)&&(coin[1]!=0)&&(coin[2]==0)&&(coin[3]!=0)&&(coin[4]==0)){
       	result={"H":coin[0],"Q":coin[1],"N":coin[3]}
       	return result;
       }

		else if ((coin[0]!=0)&&(coin[1]!=0)&&(coin[2]==0)&&(coin[3]==0)&&(coin[4]!=0)){
       	result={"H":coin[0],"Q":coin[1],"P":coin[4]}
       	return result;
       }

		else if ((coin[0]!=0)&&(coin[1]==0)&&(coin[2]!=0)&&(coin[3]!=0)&&(coin[4]==0)){
       	result={"H":coin[0],"D":coin[2],"N":coin[3]}
       	return result;
       }

		else if ((coin[0]!=0)&&(coin[1]==0)&&(coin[2]!=0)&&(coin[3]==0)&&(coin[4]!=0)){
       	result={"H":coin[0],"D":coin[2],"P":coin[4]}
       	return result;
       }

		else if ((coin[0]!=0)&&(coin[1]==0)&&(coin[2]==0)&&(coin[3]!=0)&&(coin[4]!=0)){
       	result={"H":coin[0],"N":coin[3],"P":coin[4]}
       	return result;
       }

		else if ((coin[0]==0)&&(coin[1]!=0)&&(coin[2]!=0)&&(coin[3]!=0)&&(coin[4]==0)){
       	result={"Q":coin[1],"D":coin[2],"N":coin[3]}
       	return result;
       }

		else if ((coin[0]==0)&&(coin[1]!=0)&&(coin[2]!=0)&&(coin[3]==0)&&(coin[4]!=0)){
       	result={"Q":coin[1],"D":coin[2],"P":coin[4]}
       	return result;
       }

		else if ((coin[0]==0)&&(coin[1]!=0)&&(coin[2]==0)&&(coin[3]!=0)&&(coin[4]!=0)){
       	result={"Q":coin[1],"N":coin[3],"P":coin[4]}
       	return result;
       }

		else if ((coin[0]==0)&&(coin[1]==0)&&(coin[2]!=0)&&(coin[3]!=0)&&(coin[4]!=0)){
       	result={"D":coin[2],"N":coin[3],"P":coin[4]}
       	return result;
       }


      //with four coin
       else if ((coin[0]!=0)&&(coin[1]!=0)&&(coin[2]!=0)&&(coin[3]!=0)&&(coin[4]==0)){
       	result={"H":coin[0],"Q":coin[1],"D":coin[2],"N":coin[3]}
       	return result;
       }

       else if ((coin[0]!=0)&&(coin[1]!=0)&&(coin[2]!=0)&&(coin[3]==0)&&(coin[4]!=0)){
       	result={"H":coin[0],"Q":coin[1],"D":coin[2],"P":coin[4]}
       	return result;
       }

       else if ((coin[0]!=0)&&(coin[1]!=0)&&(coin[2]==0)&&(coin[3]!=0)&&(coin[4]!=0)){
       	result={"H":coin[0],"Q":coin[1],"N":coin[3],"P":coin[4]}
       	return result;
       }

       else if ((coin[0]!=0)&&(coin[1]==0)&&(coin[2]!=0)&&(coin[3]!=0)&&(coin[4]!=0)){
       	result={"H":coin[0],"D":coin[2],"N":coin[3],"P":coin[4]}
       	return result;
       }

       else if ((coin[0]==0)&&(coin[1]!=0)&&(coin[2]!=0)&&(coin[3]!=0)&&(coin[4]!=0)){
       	result={"Q":coin[1],"D":coin[2],"N":coin[3],"P":coin[4]}
       	return result;
       }

     //with five coin

       else if ((coin[0]!=0)&&(coin[1]!=0)&&(coin[2]!=0)&&(coin[3]!=0)&&(coin[4]!=0)){
       	result={"H":coin[0],"Q":coin[1],"D":coin[2],"N":coin[3],"P":coin[4]}
       	return result;
       }


      


     }
      
}






