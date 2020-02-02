//Meredith Marcinko


$(document).ready(function(){
		$("input.order").click(function(){
			//the text in the textarea
			var str = document.getElementById("textarea").value;
			//does not matter if the word vegan is case sensitive
			var word = /vegan/i
			//looks for the word vegan
			var n = str.search(word);
			//variables for each type of cheesecake
			var plain = document.getElementById("plain");
			var cherry = document.getElementById("cherry");
			var choc = document.getElementById("chocolate");
			//variable for the amount of cheesecakes
			var num = document.getElementById("amount");
			//if the textarea contains the word vegan, have pop up window saying
			//there is dairy in the cheesecakes
			if(n>-1){
				alert("Warning! The Cheesecakes have dairy!");
			}
			else
			{
				//check to see if a radio button is selected
				if(plain.checked || cherry.checked || choc.checked){
					//remove submission forms
					$("table").remove();
					$("textarea").remove();
					$("input").remove();
					//add text to comfirm submission
					$("p").text("Thank you! Your order has been placed!");
					$("p").append("<li>You ordered:");
					//for each radio button that is selected and the amount they ordered
					if(plain.checked)
					{
						$("p").append(num.value + " cheesecake(s) that are ");
						$("p").append(plain.value);
						
					}
					else if(cherry.checked)
					{
						$("p").append(num.value + " cheesecake(s) with ");
						$("p").append(cherry.value + " toppings");
					}
					else if(choc.checked)
					{
						$("p").append(num.value + " cheesecake(s) with ");
						$("p").append(choc.value + " toppings");
					}
					
				}
				else
				{
					//have pop up window if there is no topping selected
					alert("You have not picked a topping");	
				}
		
			}
		});
	
		//this is for the hover drop down menu and selecting the month
		$(".month").click(function(){
			$("#drop").html($(this).html());
		});
		
	});