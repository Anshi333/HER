let signupbttn = document.getElementById("signupbtn");
        let loginbttn = document.getElementById("loginbtn");

        function func1(){
            var email = document.getElementById("email1").value;
            var pass = document.getElementById("pass1").value;

            if(email == "" && pass == ""){
                alert("Please enter email and password"); 
                return false; 
            }
            if(email == ""){
                alert("Please enter email"); 
                return false;
            }
            if(pass == ""){
                alert("Please enter password"); 
                return false; 
            }
            if(!alert("SignUp successfull!!")){
                var url = './index.html'; // pass your url here
                window.open(url, '_blank');
            }
            return true;
        }

        function func2(){
            var email = document.getElementById("email2").value; // Retrieving email value
            var pass = document.getElementById("pass2").value; // Retrieving password value
            
            if(email == "akasanks@gmail.com" && pass == "12345678"){
                if(!alert("Login successfull!!")){
                    var url = './index.html'; // pass your url here
                    window.open(url, '_blank');
                }
            return true;
            }
            else{
                alert("Invalid credentials. Please try again.");
                return false;
            }
        }