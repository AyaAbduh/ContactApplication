
var contactHeader;
<<<<<<< HEAD
var result;

var li=0;
=======
>>>>>>> parent of ae05731... added the delete function, inhanced the view
function getContactDetails(obj){
	result=$(obj).children();
	contactHeader=result[1].innerHTML;
	document.getElementById("contactHeader").innerHTML=contactHeader;
	
	var contactImg=result[0].getAttribute('src');

	
	document.getElementById("contactImg").setAttribute('src',contactImg);
<<<<<<< HEAD
	//alert(result.length); 2
	var phone=result[2].getAttribute('href');

	li=$(obj).parentsUntil("ul")[2];
	
	//alert(result[2]);
=======
	alert(result[2]);
>>>>>>> parent of ae05731... added the delete function, inhanced the view
	//var phone=result[2].getAttribute('href');

   
	//document.getElementById("callButton").setAttribute('href',phone);

	
}
function saveChangesHandler(obj){
	var form=$(obj).parentsUntil("article")[1];
	var formChildren=$(form).children();
	var name=formChildren[1].value;
	result[1].innerHTML=name;
	window.location.href='#firstPage';
}

function EditContactDetails(){
	//alert(contactHeader);
	document.getElementById("name").value=contactHeader;
	
	
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
