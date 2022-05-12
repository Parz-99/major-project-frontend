import React from 'react'
import classes from './about.module.css'

const About = () => {
    return(<>
      <h1 style={{textAlign:"center",marginTop:"10px"}}>About Us</h1>
      <div class={classes["mission"]}>
          <h3 style={{textAlign:"center"}}>Mission</h3>
          <p>To provide a direct communication between farmer and a buyer to sell their crop</p>
      </div>
      <div className={classes["intro"]}>
          <p>Kisan - Jamm is an portal for farmers to sell their crops directly to the buyers.
             In this platform farmers can login, register, add crop, update crop, delete crop etc. 
             by using this website .And most of the villages are now filled with 4G devices where we can get into
              contact and locate the farmer by sending a simple friend through our app kisan - Jamm and buy the goods directly.
          </p>
      </div>
      <div className={classes["format"]}>
          <p style={{fontSize:'20px'}}>Farmers need to send the text message to 9999999999 in the following format: </p><br/>
          <ul>
              <li><b>Register</b> : (keyword number firstName secondName) keyword is register</li>
              <li><b>Add Crop</b> : (keyword number crop weight price /description/ /address/ pincode) keyword is addcrop</li>
              <li><b>Update Crop</b> : (keyword number cropId weight weight price price description /description/ address /address/ pincode /pincode/) keyword is updatecrop. User need to pass only the arguments that he/she want to update</li>
              <li><b>Delete Crop</b> : (keyword number cropId) keyword is delete crop</li>
          </ul>
      </div>
    </>)
}

// REGISTER
// keyword number firstName secondName

// ADD CROP
// keyword number crop weight price /description/ /address/ pincode

// UPDATE CROP
// keyword number cropId 
// weight weight
// price price
// description /description/
// address /address/
// pincode /pincode/

// DELETE CROP
// keyword number cropId

export default About;