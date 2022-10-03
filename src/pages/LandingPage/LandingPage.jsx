import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className='landing-page-wrapper'>
      <div className='landing-page-card'>
        <div class='parent-positioning'>
          <img
            src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T110256Z&X-Amz-Expires=86400&X-Amz-Signature=a076a3717fb047fb6f3db9f4aeec7613381dc920fcef1d48ddfe61bae4301fbb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject'
            alt='random'
          />
        </div>
      </div>
      <div className='landing-page-header'>
        <div className='heading'>
          Imagine if <span className='snapchat'>Snapchat</span> had events.
        </div>
        <div className='para'>
          Easily host and share events with your friends across any social
          media.
        </div>
        <Link to='/create'>
          <button className='button login-button'>🎉 Create my event</button>
        </Link>
      </div>
    </div>
  );
};

export { LandingPage };
