

import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (

        <div className='footer'>
            <footer className="bg-dark text-center text-white">

                <div class="footer-container p-4 pb-0">

                    <section class="mb-4">

                        <a target='_blank'
                            class="btn   btn-floating m-1"

                            href="https://www.facebook.com/"
                            role="button" rel="noreferrer"
                        >
                            <img className='facebook' src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" alt="img" />
                        </a>


                        <a target='_blank'
                            class="btn btn-floating m-1"

                            href="https://twitter.com/?lang=en"
                            role="button" rel="noreferrer"
                        >
                            <img className='twitter' src="https://logos-download.com/wp-content/uploads/2016/02/Twitter_Logo_new.png" alt="img" />
                        </a>


                        <a target='_blank'

                            class="btn   btn-floating m-1"

                            href="https://www.google.com/"
                            role="button" rel="noreferrer"
                        >
                            <img className='google' src="https://bookassist.org/wp-content/uploads/elementor/thumbs/google-logo-pahn4ktunr3f9dmhvb0zbr0d3jczu21k3leynx4yts.jpg" alt="img" />
                        </a>


                        <a target='_blank'
                            class="btn   btn-floating m-1"

                            href="https://youtube.com/"
                            role="button" rel="noreferrer"
                        >
                            <img className='youtube' src="https://logowik.com/content/uploads/images/188_youtube.jpg" alt="img" />
                        </a>


                        <a target='_blank'
                            class="btn  btn-floating m-1"

                            href="https://github.com/"
                            role="button" rel="noreferrer"
                        >
                            <img className='github' src="https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757_960_720.png" alt="img" />
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