import React from 'react';

function AboutUs(props) {
    return(

        <div className = "Homepage">
            
<br></br>
        <h2>All about us: </h2>
        <div className = "About-Container" >
              <p>Buzy Mom Recipes was inspired by a newly divorced
                mother of 3 who enjoys cooking for her 3 beautiful
                children, ages 5, 10, and soon to be 15. With a variety of appetites
                between the 3, finding different things to cook each day
                became challenging. 

                Everyday I would text a group of friends and we would
                share different recipes and pics between each other. 
                This interactive app will allow other mothers with the 
                love of cooking to sign-up and share recipes. Enjoy!
                <div className="FamilyPic">
           
            <img src={require('../images/fam.jpg')} alt="Family"/>
            
          </div>
              </p>
          </div>
        
        
     
      
         
      
            
        </div>

    )
}

export default AboutUs;