import Image from 'next/image'

// Import your screenshots
import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'
import FeatImage01 from '@/public/images/image-01.png'
import FeatImage02 from '@/public/images/image-02.png'
import FeatImage03 from '@/public/images/image-03.png'


export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 py-10 px-8 md:py-16 md:px-12 rounded-lg shadow-xl" data-aos="fade-up">

          {/* Background illustration */}
          <div className="absolute inset-0 overflow-hidden rounded-lg" aria-hidden="true">
            <svg className="absolute bottom-0 right-0 transform translate-x-1/3 mb-48" width="800" height="800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="newsletter-illustration" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFF" stopOpacity="0" />
                  <stop offset="1" stopColor="#FFF" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <circle cx="400" cy="400" r="400" fill="url(#newsletter-illustration)" fillOpacity=".1" transform="translate(-200 100)" />
            </svg>
          </div>

          <div className="relative">

            {/* CTA content */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-lg text-purple-200">Subscribe to our newsletter for the latest updates and offers.</p>
            </div>

            {/* CTA form */}
            <form className="mt-8 sm:flex justify-center">
              <div className="sm:max-w-md w-full">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input type="email" id="email-address" name="email" autoComplete="email" required className="w-full px-5 py-3 placeholder-gray-300 focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md" placeholder="Enter your email" />
              </div>
              <button type="submit" className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto px-5 py-3 bg-white text-purple-600 font-medium rounded-md shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300">Subscribe</button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
