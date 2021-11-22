import React from "react";

function Regpage(){
    return(
        <div class="container">
        <div class="title">Registration</div>
        <div class="content">
          <form action="#"/>
            <div class="user-details">
              <div class="input-box">
                <span class="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required/>
              </div>
              <div class="input-box">
                <span class="details">Username</span>
                <input type="text" placeholder="Enter your username" required/>
              </div>
              <div class="input-box">
                <span class="details">Email</span>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required/>
              </div>
              <div class="input-box">
                <span class="details">Password</span>
                <input type="text" placeholder="Enter your password" required/>
              </div>
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input type="text" placeholder="Confirm your password" required/>
              </div>
              <div class="input-box">
              <span class="details">RollNo</span>
                <input type="text" placeholder="Enter your Roll Number" required/>
            </div>
            <div class="input-box">
              <span class="details">College</span>
                <input type="text" placeholder="Enter your college name" required/></div>
                <div class="input-box">
              <span class="details">Qualifcation</span>
                <input type="text" placeholder="Enter your Qualifcation degree" required/></div>
                <div class="input-box">
              <span class="details">Year Of Graduation</span>
                <input type="date" value="" placeholder="Enter your Year of Graduation" required/></div>
                </div>
    
            <div class="gender-details">
              <input type="radio" name="gender" id="dot-1"/>
              <input type="radio" name="gender" id="dot-2"/>
              <input type="radio" name="gender" id="dot-3"/>
              <span class="gender-title">Gender</span>
              <div class="category">
                <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Female</span>
              </label>
              <label for="dot-3">
                <span class="dot three"></span>
                <span class="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
             <div class="button">
              <input type="submit" value="Register"/>
            </div>
            <div class="button">
              <input type="submit" value="Reset All"/>
            </div>
          <form/>
        </div>
      </div>

    )
}
export default Regpage;