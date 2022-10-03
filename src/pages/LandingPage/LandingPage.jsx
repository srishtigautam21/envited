import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className='landing-page-wrapper'>
      <div className='landing-page-card'>
        <div class='parent-positioning'>
          <img src='../../Assets/Images/card-photo.jpg' alt='random' />
          <div class='inside-container '>
            <h3 class='child-positioning'>Off White Poncho</h3>
            <span class='card-content child-positioning'>Women's apparel</span>
            <p class='card-item-cost'>Rs.799</p>
            <button class='button card-button'>Add to Cart</button>

            {/* <i class='fa fa-heart-o icon-btn icon-size icon-overlay'></i> */}
          </div>
        </div>
      </div>
      <div className='landing-page-header'>
        <div className='heading'>
          Imagine if <span>Snapchat</span> had events.
        </div>
        <div className='para'>
          Easily host and share events with your friends across any social
          media.
        </div>
        <button>🎉 Create my event</button>
      </div>
    </div>
  );
};

export { LandingPage };
