import Image from 'next/image';

// Import your screenshots
import DashboardScreenshot from '@/public/images/dashboard-screenshot.jpg';
import ReservationsScreenshot from '@/public/images/reservations-screenshot.jpg';
import SettingsScreenshot from '@/public/images/settings-screenshot.jpg';

export default function AdminAppFeatures() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Admin App for Club Table Bookings</h2>
            <p className="text-xl text-gray-400">Explore the seamless management features designed for club administrators.</p>
          </div>

          {/* Features */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">

            {/* 1st feature - Dashboard */}
            <div className="feature-item flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <Image className="rounded-lg mb-4" src={DashboardScreenshot} width={400} height={300} alt="Dashboard screenshot" />
              <h3 className="text-lg text-white mb-2">Dashboard Overview</h3>
              <p className="text-lg text-gray-400">Monitor club activities through an intuitive dashboard, displaying real-time data on bookings, revenues, and more.</p>
            </div>

            {/* 2nd feature - Reservations */}
            <div className="feature-item flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="100">
              <Image className="rounded-lg mb-4" src={ReservationsScreenshot} width={400} height={300} alt="Reservations screenshot" />
              <h3 className="text-lg text-white mb-2">Efficient Table Reservations</h3>
              <p className="text-lg text-gray-400">Streamline your booking process with detailed views of table availability, customer details, and reservation statuses.</p>
            </div>

            {/* 3rd feature - Settings */}
            <div className="feature-item flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
            <Image className="rounded-lg mb-4" src={SettingsScreenshot} width={400} height={300} alt="Check-In Process screenshot" />
            <h3 className="text-lg text-white mb-2">Check-In Process</h3>
            <p className="text-lg text-gray-400">Streamline your event's entry process with our intuitive ticket scanning feature. Easily verify attendance and manage guest lists in real-time, ensuring a smooth and efficient check-in for your club events.</p>
          </div>

          </div>

        </div>
      </div>
    </section>
  );
}
