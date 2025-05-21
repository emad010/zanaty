const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyC_63ZuBgB73jhhAE39kwciby_k7zQhUlA",
  authDomain: "zanaty-d69b8.firebaseapp.com",
  databaseURL: "https://zanaty-d69b8-default-rtdb.firebaseio.com",
  projectId: "zanaty-d69b8",
  storageBucket: "zanaty-d69b8.firebasestorage.app",
  messagingSenderId: "312673213750",
  appId: "1:312673213750:web:0e83b2dca248bd9d0c2797",
  measurementId: "G-BY2DSS2W1V"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var itemsRef = firebase.database().ref("data");


// load data in table direct
window.onload = readData;


function onOFF1()
{

	// get data and update
	
	var itemsRef = firebase.database().ref("onOFF1");	
	    itemsRef.once('value', function (snapshot) {
        snapshot.forEach(
		
		function (item_snapshot) {
			
			var name = item_snapshot.val().state;
			var newContactForm = firebase.database().ref('onOFF1/').child("-Myw4SZQ06DOspC6wtrA/");
			var state = "off";
			 if(name == "off")
				 state="on";
				 
			  newContactForm.set({
				  state: state,
			  }, (error) => {
				  if (error) {
					// The write failed...
					alert("فشل الاتصال...");
				  } else {
					// Data saved successfully!
					alert("تم الاتصال بنجاح");
					
					
				  }
				});
			

        });
    });
	

 
  
  
 
	
}



