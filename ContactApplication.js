
var contactHeader;
function getContactDetails(obj){
	var result=$(obj).children();
	contactHeader=result[1].innerHTML;
	document.getElementById("contactHeader").innerHTML=contactHeader;
	
	var contactImg=result[0].getAttribute('src');

	
	document.getElementById("contactImg").setAttribute('src',contactImg);
	alert(result[2]);
	//var phone=result[2].getAttribute('href');
   
	//document.getElementById("callButton").setAttribute('href',phone);

	
}

function EditContactDetails(){
	//alert(contactHeader);
	document.getElementById("name").value=contactHeader;
	
	
}
