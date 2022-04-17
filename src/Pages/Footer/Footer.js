 
 
import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (

      <div className='footer'>
            <footer class="bg-dark text-center text-white">

<div class="container p-4 pb-0">

    <section class="mb-4">

        <a
            class="btn   btn-floating m-1"

            href="#!"
            role="button"
        > 
        <img className='facebook' src="http://logok.org/wp-content/uploads/2021/11/Facebook-Logo-2019-640x480.png" alt="" />
        </a>


        <a
            class="btn btn-floating m-1"

            href="#!"
            role="button"
        > 
        <img className='twitter' src="http://logok.org/wp-content/uploads/2014/08/Twitter-logo-bird_logo_2012-880x660.png" alt="" />
         </a>


        <a
            class="btn   btn-floating m-1"

            href="#!"
            role="button"
        > 
            <img className='google' src="http://logok.org/wp-content/uploads/2015/09/Google-logo-2015-G-icon-640x480.png" alt="" />
         </a>


        <a
            class="btn   btn-floating m-1"

            href="#!"
            role="button"
        > 
        <img className='youtube' src="http://logok.org/wp-content/uploads/2014/08/Youtube-logo-2017-640x480.png" alt="" />
        </a>


        <a
            class="btn  btn-floating m-1"

            href="#!"
            role="button"
        > 
        <img className='github' src="https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757_960_720.png" alt="" />
        </a>

       
    </section>

</div>


<div class="text-center p-3"  >
Copyright: © {year} 

</div>

</footer>

      </div>
    );
};

export default Footer;