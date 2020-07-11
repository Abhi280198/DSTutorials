//PouchDB

 function check()
 {
   var a=document.getElementById("fname").value;
   var b=document.getElementById("lname").value;
   var c=document.getElementById("email").value;
   var d=document.getElementById("Message").value;
   
   console.log(a);
   console.log(b);
   console.log(c);
   console.log(d);
   var db=new PouchDB('About');
   var doc={
   "_id":a,
   "alname":b,
   "bemail":c,
   "cmsg":d,
  };
 db.put(doc);
 }






function validateForm()
    {
        //First name validation
        var x = document.forms["myForm"]["fname"].value;
         if (x == "") {
        alert("First Name must be filled out");
        return false;
        }

    //Last name validation
    var y = document.forms["myForm"]["lname"].value;
         if (y == "") {
        alert("Last Name must be filled out");
        return false;
        }


    //email validation
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)

  }
    