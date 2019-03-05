function getContactDetails(obj){
	var result=$(obj).children();
	var contactHeader=result[1].innerHTML;
	document.getElementById("contactHeader").innerHTML=contactHeader;
	
	var contactImg=result[0].getAttribute('src');
	//alert(contactImg);
	
	document.getElementById("contactImg").setAttribute('src',contactImg);
	
}

function saveButtonHandler(obj){
	var form=$(obj).parentsUntil("article")[1];

	var formChildren=$(form).children();
	//var formElements=.children();
	//alert(formChildren[1].value);
	//var formElements=$(document.forms[0]).children();
	
	//alert(formElements[1].value);
	var name=formChildren[1].value;
	var phone=formChildren[3].value;
	$("#ul").append("<li><a href='#viewContact' data-transition='flip' onclick='getContactDetails(this)'><img src='Female.jpg'/> <p id='contactName'>"+name+"</p> <a href='tel:"+phone+"'><img src='call.png' id='callIcon'/></a> </a></li>");
}
