var contactHeader;
var li=0;
var result;
var phone;
var email;
var contactImg;
var result;

function getContactDetails(obj){
	result=$(obj).children();
	contactHeader=result[1].innerHTML;
	document.getElementById("contactHeader").innerHTML=contactHeader;
	contactImg=result[0].getAttribute('src');
	document.getElementById("contactImg").setAttribute('src',contactImg);
	li=$(obj).parentsUntil("ul")[2];
	phone=result[2].innerHTML;
	email=result[3].innerHTML;
	document.getElementById("yourEmail").innerHTML=email;   
	//alert(phone);
	//alert(email); 
	document.getElementById("callButton").setAttribute('href',"tel:+"+phone);  //call button in view Contact	
}

function EditContactDetails(){
	//alert(contactHeader);
	document.getElementById("editedName").value=contactHeader;
	document.getElementById("editedPhone").value=phone;
	document.getElementById("editedEmail").value=email;
	if(contactImg=='Female.jpg')
		document.getElementById("editedSwitch").value='female';
	else
		document.getElementById("editedSwitch").value='male';
}

function saveChangesHandler(obj){
	var form=$(obj).parentsUntil("article")[1];
	var formChildren=$(form).children();
	var name=formChildren[1].value;
	var EditedPhone=formChildren[3].value;
	var editedEmail=formChildren[5].value;
	result[1].innerHTML=name;
	result[2].innerHTML=EditedPhone;
	result[3].innerHTML=editedEmail;
	window.location.href='#firstPage';
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
	var email=formChildren[5].value;
	if($("#switch").val()=="female"){
		$("#ul").append("<li><a href='#viewContact' data-transition='flip' onclick='getContactDetails(this)'><img src='Female.jpg'/> <p id='contactName'>"+name+"</p> <p>"+phone+"</p><p>"+email+"</p><a href='tel:"+phone+"'><img src='call.png' id='callIcon'/></a> </a></li>");
		$("#ul").listview("refresh");
	}

	else {
		$("#ul").append("<li><a href='#viewContact' data-transition='flip' onclick='getContactDetails(this)'><img src='male.jpg'/> <p id='contactName'>"+name+"</p> <p>"+phone+"</p><p>"+email+"</p><a href='tel:"+phone+"'><img src='call.png' id='callIcon'/></a> </a></li>");
		$("#ul").listview("refresh");	
	}
	window.location.href='#firstPage';
}

function deleteButtonHandler(){
	
	$("li").eq($(li).index()).remove();


}
