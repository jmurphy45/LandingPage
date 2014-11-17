function checkDate(){
	var date = new Date();
	var day = date.getDate();
	var hour = date.getHours();
	var active = "#659D32";
	var unactive = "#666666";
	
	
	if(day >= 1 && day <= 4){
		if(12 <= hour && hour <= 20){
			return active;
		}else if(12 > hour && hour > 20){
			return "#666666";
		}
	}else if(day == 5){
		if(12 <= hour && hour <= 22){
			return active;
		}else if(12 > hour && hour > 22){
			return "#666666";
		}
	}else if (day == 6){
		if(12 <= hour && hour <= 22){
			return active;
		}else if(12 > hour && hour > 22){
			return "#666666";
		}
	}else{
		if(12 <= hour && hour <= 16){
			return active;
		}else if(12 > hour && hour > 16){
			return "#666666";
		}
	}
	return "#666666";
	
}


var color = checkDate();

console.log(color);