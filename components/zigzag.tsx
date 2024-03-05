import Image from 'next/image';

// Update these imports to reflect the features of your client application
import UserExperienceFeature from '@/public/images/image-01.png';
import BookingProcessFeature from '@/public/images/image-02.png';
import ClubExplorationFeature from '@/public/images/image-03.png';

export default function ClientAppFeatures() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Experience the Difference</div>
            <h1 className="h2 mb-4">Client Application Features</h1>
            <p className="text-xl text-gray-400">Designed for an effortless booking experience and personalized club discovery.</p>
          </div>

          {/* Features Showcase */}
          <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">

            {/* User Experience Feature */}
            <div className="feature-item" data-aos="fade-up">
              <Image src={UserExperienceFeature} width={350} height={450} alt="User Experience Feature" className="rounded-lg mb-4" />
              <h3 className="h3 mb-3 text-purple-600">Seamless User Experience</h3>
              <p className="text-lg text-gray-400">Enjoy a smooth and intuitive user interface designed to make your club exploration and booking process as simple as possible.</p>
            </div>

            {/* Booking Process Feature */}
            <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
              <Image src={BookingProcessFeature} width={350} height={450} alt="Booking Process Feature" className="rounded-lg mb-4" />
              <h3 className="h3 mb-3 text-purple-600">Easy Booking Process</h3>
              <p className="text-lg text-gray-400">Book your next club visit with just a few taps. Select your date, choose your table, and confirm your reservation in moments.</p>
            </div>

            {/* Club Exploration Feature */}
            <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
              <Image src={ClubExplorationFeature} width={350} height={450} alt="Club Exploration Feature" className="rounded-lg mb-4" />
              <h3 className="h3 mb-3 text-purple-600">Discover New Clubs</h3>
              <p className="text-lg text-gray-400">Explore clubs in your area or worldwide. View detailed information, photos, and reviews to find your perfect nightlife spot.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
