// js code for login page

document.getElementById("signIn-btn").
        addEventListener("click", function (event) {
                event.preventDefault();
                const userInput = document.getElementById("user-inp").value;
                const passwordInput = document.getElementById("password-inp").value;
                if ((userInput === "admin") && (passwordInput === "admin123")) {
                        window.location.assign("/home.html");
                }
                else {
                        alert("password or user name wrong")
                }

        })




