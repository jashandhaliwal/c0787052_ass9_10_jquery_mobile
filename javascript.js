
  function validation(){
    if(document.getElementById("fname").value==""){
         document.getElementById("err1").innerHTML="This field is required!";
         Go = false;
     }
     if(document.getElementById("lname").value==""){
         document.getElementById("err2").innerHTML="This field is required!";
         Go = false;
     }
     if(document.getElementById("pname").value==""){
         document.getElementById("err3").innerHTML="This field is required!";
         Go = false;
     }
     if(document.getElementById("email").value==""){
         document.getElementById("err4").innerHTML="Please Enter Valid Email Address!";
         Go = false;
     }
             if(document.getElementById("cpass").value==""){
         document.getElementById("err6").innerHTML="Please Enter Password Again!";
         Go = false;
     }
     if(document.getElementById("pass").value==""){
         document.getElementById("err5").innerHTML="This field is required!";
         Go = false;}
         if(document.getElementById("cpass").value !=document.getElementById("pass").value){
         document.getElementById("err6").innerHTML="Please Enter Same As Above!";
         Go = false;
     }
     
     if(document.getElementById("birthdate").value==""){
         document.getElementById("err7").innerHTML="Please Enter Valid Date Of Birth!";
         Go = false;
     }
              if(document.getElementById("province").value === ""){
         document.getElementById("err8").innerHTML="Please Select Your Province!";
         Go = false;
     }
     
 }