const signUp = document.querySelector('#signup-form');


signUp.addEventListener('submit',(e) =>{
    e.preventDefault();
    document.getElementById("pgLoader").style.display="block";
//get input variable 
document.getElementById("verifyEmail").style.display = "block";
document.getElementById("verifyName").style.display = "block";
document.getElementById("verifySurname").style.display = "block";
document.getElementById("verifyContact").style.display = "block";
document.getElementById("verifygender").style.display = "block";
document.getElementById("verifyProvence").style.display = "block";

    const registryDate =new Date();
if(signUp['user-email'].value ==null  ){
  ///Erro
}else{

    const email = signUp['user-email'].value;
    const pass= signUp['user-password'].value;

      //first name
      var numbers = /[0-9]/g;
      if (signUp['first-name'].value.match(numbers) ) {
          alert('First name cannot include a number');
          document.getElementById("verifyName").innerHTML=`<p  >First name cannot include a number</b></p>`;
          document.getElementById("pgLoader").style.display="none";
      }else{
        document.getElementById("verifyName").innerHTML=`<p></p>`;
        // document.getElementById("verifyName").style.display = "none";
      
      
      //var numbers = /[0-9]/g;
      if ( signUp['last-name'].value.match(numbers) ) {
        document.getElementById("pgLoader").style.display="none";
          alert('Last name cannot include a number');
          document.getElementById("verifySurname").innerHTML=`<p  >First name cannot include a number</b></p>`;
        }else {
          document.getElementById("verifySurname").innerHTML=`<p></p>`;
        // document.getElementById("verifyName").style.display = "none";
        
         
          if(signUp['gender-type'].value=="select"){
            document.getElementById("pgLoader").style.display="none";
            document.getElementById("verifygender").innerHTML=`<p  >Please select your Gender</b></p>`;
          }else{
            document.getElementById("verifygender").innerHTML=`<p  ></b></p>`;

            if(signUp['province'].value=="select"){
              document.getElementById("pgLoader").style.display="none";
              document.getElementById("verifyProvence").innerHTML=`<p  >Please select your province</b></p>`;
            }else{
              document.getElementById("verifyProvence").innerHTML=`<p  ></b></p>`;
            
          
      //phone name
              /*var numbers = /[0-9]/g;
              if (signUp['phone-no'].value.m == signUp['phone-no'].value.match(numbers)) {  ///vise vasa
                alert('Phone number mustnot countain letters');
                document.getElementById("verifyContact").innerHTML=`<p>Invalid phone number</p>`;
            }else{
            document.getElementById("verifyContact").innerHTML=`<p></p>`;
                
            */
        
              if(signUp['phone-no'].value.length <10  || signUp['phone-no'].value.length >10 ){
                  alert('Phone number must be 10');
                  document.getElementById("verifyContact").innerHTML=`<p>Invalid phone number</p>`;
                  document.getElementById("pgLoader").style.display="none";
               } else{
              document.getElementById("verifyContact").innerHTML=`<p></p>`;
          


                    auth.createUserWithEmailAndPassword(email,pass).then(cred=>{
                      // console.log(cred.user);
                        //document.location.href="index.html";
                        //return db.collection('Users').doc(cred.user.uid).set({
                         
                        // console.log(cred.user);
                        //document.location.href="index.html";
                        //autoId=database.ref('Users').push().key;
                       // database.ref('Users').child(autoId).set({

                        const  userID = cred.user.uid ;
                         
                         UserRef.child(userID).set({
                            first_name : signUp['first-name'].value,
                            last_name :  signUp['last-name'].value,
                            province :  signUp['province'].value,
                            contact :  signUp['phone-no'].value,
                            gender :   signUp['gender-type'].value,
                            email : signUp['user-email'].value,
                            password :signUp['user-password'].value,
                            userId:userID,
                            dateRegistered : new Date()
                            //registryDate
                            
                        }).then(()=>{
                          signUp.reset();   
                          window.location='index.html';
                          //document.location.href="index.html";
                     // });
                    }); })
                        .catch(function(error){
                        document.getElementById("pgLoader").style.display="none";
                        
                        var errorCode = error.code;
                        var errorMessage = error.message;

                //first name
                if (signUp['phone-no'].value.match(numbers)) {  ///vise vasa
                  
                  document.getElementById("verifyContact").innerHTML=`<p></p>`;
              }else{
                alert('Phone number must not contain letters');
                document.getElementById("verifyContact").innerHTML=`<p>Invalid phone number</p>`;
              }
             
                //email name
                        if (errorCode == 'auth/email-already-in-use') {
                          document.getElementById("pgLoader").style.display="none";
                          alert('Email entered is already in use');
                          document.getElementById("verifyEmail").innerHTML=`<p>Email entered is already in use</p>`;
                        }
                    
                        if (errorCode == 'auth/invalid-email') {
                            alert('The please Enter a valid Email');
                            
                          } else {
                            alert(errorMessage);
                          }


                        
                    }) ;/*.then(()=>{
                        signUp.reset();   
                        window.location='index.html';
                        //document.location.href="index.html";
                   // });
                  });*/
                 
              }
          }
        }
      }
    }
  }
});


/*
https://www.google.com/maps/d/u/0/

*/


/*
firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});



https://firebase.google.com/docs/reference/js/firebase.auth.Auth


ERRO CODES=================
auth/email-already-in-use
Thrown if there already exists an account with the given email address.
auth/invalid-email
Thrown if the email address is not valid.
auth/operation-not-allowed
Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.
auth/weak-password


OTHER====================
confirmPasswordReset
confirmPasswordReset ( code :  string ,  newPassword :  string ) : Promise < void >
Completes the password reset process, given a confirmation code and new password.

Error Codes
auth/expired-action-code
Thrown if the password reset code has expired.
auth/invalid-action-code
Thrown if the password reset code is invalid. This can happen if the code is malformed or has already been used.
auth/user-disabled

Thrown if the user corresponding to the given password reset code has been disabled.
auth/user-not-found

Thrown if there is no user corresponding to the password reset code. This may have happened if the user was deleted between when the code was issued and when this method was called.
auth/weak-password
*/



/*  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


const signUp = document.querySelector('#signup-form');


var length = document.getElementById("length");
//comfirm password
var confirmPwd=document.getElementById("confrmPwd");
//verify name
var confirmName=document.getElementById("first-name");
//verify surname
var confirmSurname=document.getElementById("last-name");
//verify phone number
var confirmContact=document.getElementById("phone-no");

//verify gender
var confirmGender=document.getElementById("gender-type");
//verify Province
var confirmProvince=document.getElementById("province");


signUp.addEventListener('submit',(e) =>{
    e.preventDefault();
//get input variable 
    
    const registryDate =new Date();

    const email = signUp['user-email'].value;
    const pass= signUp['user-password'].value;

    auth.createUserWithEmailAndPassword(email,pass).then(cred=>{
       // console.log(cred.user);
        //document.location.href="index.html";
        return db.collection('Users').doc(cred.user.uid).set({
        
            first_name : signUp['first-name'].value,
            last_name :  signUp['last-name'].value,
            province :  signUp['province'].value,
            contact :  signUp['phone-no'].value,
            gender :   signUp['gender-type'].value,
            dateRegistred : registryDate
        });
    })    .catch(function(error){
        document.getElementById("pgLoader").style.display="none";
        
        var errorCode = error.code;
        var errorMessage = error.message;
//first name
        var numbers = /[0-9]/g;
        if (confirmName.value.match(numbers) && confirmSurname.confirmName.value.match(numbers) ) {
           document.getElementById("verifyName").innerHTML=`<p  >First name cannot include a number</b></p>`;
         }else{
           document.getElementById("verifyName").innerHTML=`<p></p>`;
          // document.getElementById("verifyName").style.display = "none";
         }


//last name

//phone name
                var numbers = /[0-9]/g;
                if (confirmContact.value.match(numbers)) {
                document.getElementById("verifyContact").innerHTML=`<p></p>`;
                }else{
                document.getElementById("verifyContact").innerHTML=`<p>Invalid phone number</p>`;
                }

//first name

//email name
        if (errorCode == 'auth/email-already-in-use') {
          alert('Email entered is already in use');
        } 
    
        if (errorCode == 'auth/invalid-email') {
            alert('The please Enter a valid Email');
          } else {
            alert(errorMessage);
          }
        
          
    
    
    }) .then(()=>{
        signUp.reset();   
        window.location='index.html';
        //document.location.href="index.html";
    });
});


/*
https://www.google.com/maps/d/u/0/

*/


/*
firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});



https://firebase.google.com/docs/reference/js/firebase.auth.Auth


ERRO CODES=================
auth/email-already-in-use
Thrown if there already exists an account with the given email address.
auth/invalid-email
Thrown if the email address is not valid.
auth/operation-not-allowed
Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.
auth/weak-password


OTHER====================
confirmPasswordReset
confirmPasswordReset ( code :  string ,  newPassword :  string ) : Promise < void >
Completes the password reset process, given a confirmation code and new password.

Error Codes
auth/expired-action-code
Thrown if the password reset code has expired.
auth/invalid-action-code
Thrown if the password reset code is invalid. This can happen if the code is malformed or has already been used.
auth/user-disabled

Thrown if the user corresponding to the given password reset code has been disabled.
auth/user-not-found

Thrown if there is no user corresponding to the password reset code. This may have happened if the user was deleted between when the code was issued and when this method was called.
auth/weak-password
*/