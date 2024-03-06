import Image from 'next/image';

// Import your images
import VideoThumb from '@/public/images/hero-image-01.jpg';
import FeatImage01 from '@/public/images/image-01.png';
import FeatImage02 from '@/public/images/image-05.png';
import FeatImage03 from '@/public/images/image-03.png';

export default function Hero() {
  return (
    <section className="hero bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Hero content */}
        <div className="pt-32 pb-10 md:pt-48 md:pb-20 text-center">
          <h1 className="text-6xl md:text-9xl font-extrabold mb-4" data-aos="zoom-out">
            Knigts˚
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-aos="zoom-out" data-aos-delay="200">
            NightClub Reservation Tool
          </h2>
          <p className="text-xl text-gray-300 mb-8" data-aos="zoom-out" data-aos-delay="400">
            Empower Your Business with Cutting-Edge Mobile Web App Solutions
          </p>
          {/* <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-out" data-aos-delay="600">
            <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Contact Us for Demo</a>
            <a className="btn text-white bg-gray-800 hover:bg-gray-900 w-full sm:w-auto sm:ml-4" href="#0">Learn More</a>
          </div> */}
        </div>

        {/* Image gallery */}
        <div className="grid gap-8 md:grid-cols-3 items-center mt-20">
          <div className="md:col-span-1" data-aos="fade-up" data-aos-delay="800">
            <Image className="rounded-lg transform hover:scale-105 transition duration-500 ease-in-out" src={FeatImage01} width={350} height={450} alt="Feature 1" />
          </div>
          <div className="md:col-span-1" data-aos="fade-up" data-aos-delay="1000">
            <Image className="rounded-lg transform hover:scale-105 transition duration-500 ease-in-out" src={FeatImage02} width={350} height={450} alt="Feature 2" />
          </div>
          <div className="md:col-span-1" data-aos="fade-up" data-aos-delay="1200">
            <Image className="rounded-lg transform hover:scale-105 transition duration-500 ease-in-out" src={FeatImage03} width={350} height={450} alt="Feature 3" />
          </div>
        </div>

      </div>
    </section>
  );
}
