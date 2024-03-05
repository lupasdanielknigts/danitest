export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Elevate your night out with our cutting-edge club reservation app.</h2>
            <p className="text-xl text-gray-400">Experience the ultimate convenience in nightlife with ClubLife. Simplify your party planning with instant bookings, get VIP access, unlock exclusive deals, and tailor your nightlife journey to your music and ambiance preferences.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                {/* SVG content */}
              </svg>
              <h4 className="h4 mb-2">VIP Table Booking</h4>
              <p className="text-lg text-gray-400 text-center">Reserve the best tables in the house and skip the line. Enjoy premium service, exclusive bottle deals, and an unforgettable experience with just a few taps.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                {/* SVG content */}
              </svg>
              <h4 className="h4 mb-2">Live DJ Set Updates</h4>
              <p className="text-lg text-gray-400 text-center">Get real-time updates on DJ sets and live performances. Follow your favorite artists and never miss out on their shows in your city.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                {/* SVG content */}
              </svg>
              <h4 className="h4 mb-2">NFC Ticketing</h4>
              <p className="text-lg text-gray-400 text-center">At the club, simply scan your NFC-enabled device for quick and easy entry. Experience the future of club access today.</p>
            </div>

            {/* Additional items could include features like Drink Pre-Ordering, Event Schedules, Exclusive Membership Benefits, etc. */}

          </div>

        </div>
      </div>
    </section>
  )
}
