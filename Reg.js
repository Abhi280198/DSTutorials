//PouchDb
 function check()
 {
   var a=document.getElementById("name").value;
   var b=document.getElementById("email").value;
   var c=document.getElementById("cont").value;
   var d=document.getElementById("user").value;
   var e=document.getElementById("pass").value;
   var f=document.getElementById("confirm").value;

   
   console.log(a);
   console.log(b);
   console.log(c);
   console.log(d);
   console.log(e);
   console.log(f);
   var db=new PouchDB('register');
   var doc={
   "_id":a,
   "aemail":b,
   "bcont":c,
   "cuser":d,
   "dpass":e,
   "econfirm":f
   
  };
 db.put(doc);
 }


    function validateForm()
    {
        //Name validation
        var x = document.forms["myForm"]["name"].value;
         if (x == "") {
        alert("Name must be filled out");
        return false;
        }

    //email validation
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))
  {
    return (true)
  }
  else{
    alert("You have entered an invalid email address!")
    return (false)
    }
      //Username validation
    var y = document.forms["myForm"]["user"].value;
         if (y == "") {
        alert("Username must be filled out");
        return false;
        }

     } 

     //Password

function ValidatePass()
{
//Password validation


        var password = document.getElementById("pass").value;
        var confirmPassword = document.getElementById("confirm").value;
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            
        }


} 