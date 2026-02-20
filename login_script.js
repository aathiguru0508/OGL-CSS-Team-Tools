// ----------------------------
// USERS & PASSWORDS
// ----------------------------
const users = {
  "aathish.r@oracle.com": "Welcome@123",
  "mubashreen.kousar@oracle.com": "Welcome@123",
  "mohammed.ibrahim.s.shariff@oracle.com": "Welcome@123"
  "priya.gk@oracle.com": "Welcome@123"
  "shreya.kamplikar@oracle.com": "Welcome@123"
  "mohan.raj.d@oracle.com": "Welcome@123"
  "mubashreen.kousar@oracle.com": "Welcome@123"
  "nagashirisha.maddukuri@oracle.com": "Welcome@123"
  "srinivasan.anna.venkataramana@oracle.com": "Welcome@123"
  "rajath.khoday.rajesh@oracle.com": "Welcome@123"
  "poorvika.h.u@oracle.com": "Welcome@123"
  "greeshma.a@oracle.com": "Welcome@123"
  "jaishankar.kumar@oracle.com": "Welcome@123"
  "soumya.s.soumya@oracle.com": "Welcome@123"
};
// Add new users manually here

// ----------------------------
// LOGIN FUNCTION
// ----------------------------
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  // Email empty check
  if (!email || !password) {
    msg.style.color = "red";
    msg.textContent = "Please enter both email and password";
    return;
  }

  // Email format validation: must end with @oracle.com
  const emailPattern = /^[a-zA-Z0-9._%+-]+@oracle\.com$/;
  if (!emailPattern.test(email)) {
    msg.style.color = "red";
    msg.textContent = "Invalid email format. Use example@oracle.com";
    return;
  }

  // Check credentials
  if (users[email] && users[email] === password) {
    msg.style.color = "green";
    msg.textContent = "Login successful! Redirecting...";

    setTimeout(() => {
      window.location.href = "OGL.html"; // replace with your page
    }, 1200);
  } else {
    msg.style.color = "red";
    msg.textContent = "Invalid email or password";
  }
}
function requestAccess() {
      // Ask user for their email 
      const userEmail = prompt("Enter your email to request access:");

      if (userEmail) {
        const subject = encodeURIComponent("Request for OGL Tools Access");
        const body = encodeURIComponent(`Hello Aathish,\n\nI would like to access your OGL tools.\nMy email is: ${userEmail}\n\nThank you.`);
        const mailtoLink = `mailto:aathish.r@oracle.com?subject=${subject}&body=${body}`;
        
        // Open default email client
        window.location.href = mailtoLink;
      } else {
        alert("Please enter your email to send the request.");
      }
    }
