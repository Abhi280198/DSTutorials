//PouchDb


 function check()
 {
   var a=document.getElementById("uname").value;
   var b=document.getElementById("pass").value;
   var i,doc1;
   var usrnm=0;
   var passwrd=0;
   db.allDocs({
	   include_docs:true,
   }).then(function(doc){
	   console.log(doc.rows);
	   doc1=doc.rows;
	   console.log(doc1);
	   console.log(doc1[0].doc.uname);
	   console.log(doc1[0].doc.pass);
	   if(doc1[i].doc.uname==usrnm && doc1[i].doc.pass==passwrd)
	   {
		   usrnm=1;
		   passwrd=1;
	   }
   }
   if(usrnm===1 && passwrd===1)
   {
	   console.log("Login successful");
	   alert("Login Successful");
   }
   console.log(a);
   console.log(b);
   var db=new PouchDB('login');
   var doc={
   "_id":a,
   "pass":b,
  };
 db.put(doc);
 }
