function getContactDetails(obj){
	var result=$(obj).children();
	var contactHeader=result[1].innerHTML;
	document.getElementById("contactHeader").innerHTML=contactHeader;
	
	var contactImg=result[0].getAttribute('src');
	//alert(contactImg);
	
	document.getElementById("contactImg").setAttribute('src',contactImg);
	
}
