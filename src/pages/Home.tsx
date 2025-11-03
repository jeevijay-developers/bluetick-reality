import { ArrowRight, Home as HomeIcon, Building2, TrendingUp, Award } from 'lucide-react';

export function Home() {
  return (
    <div>
      <section className="relative h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Building Dreams, Brick by Brick in Bhopal
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Your trusted partner in finding the perfect property in Madhya Pradesh
          </p>
          <button className="bg-[#DAEC8B] text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#c8dc79] transition-all transform hover:scale-105 inline-flex items-center shadow-lg">
            Explore Properties
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Blue Tick Reality?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring expertise, transparency, and commitment to every real estate transaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-6">
                <HomeIcon size={32} className="text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">500+ Properties</h3>
              <p className="text-gray-600">
                Extensive portfolio of residential and commercial properties across Bhopal
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-6">
                <Building2 size={32} className="text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Bhopal's real estate market and neighborhoods
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-6">
                <TrendingUp size={32} className="text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Best Deals</h3>
              <p className="text-gray-600">
                Competitive pricing and negotiation expertise for optimal value
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-6">
                <Award size={32} className="text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Trusted Service</h3>
              <p className="text-gray-600">
                Years of experience delivering exceptional customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600">Discover our handpicked selection of premium properties</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="h-64 bg-gray-300 relative overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/${
                      i === 1 ? '106399' : i === 2 ? '1396122' : '323780'
                    }/pexels-photo-${
                      i === 1 ? '106399' : i === 2 ? '1396122' : '323780'
                    }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={`Property ${i}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {i === 1 ? 'Modern Villa' : i === 2 ? 'Luxury Apartment' : 'Commercial Space'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {i === 1 ? 'Arera Colony' : i === 2 ? 'MP Nagar' : 'New Market'}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#DAEC8B]">
                      ₹{i === 1 ? '1.5' : i === 2 ? '85' : '2.2'} {i === 2 ? 'L' : 'Cr'}
                    </span>
                    <button className="text-gray-900 font-semibold hover:text-[#DAEC8B] transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#DAEC8B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-xl text-gray-800 mb-8">
            Let us help you discover the perfect home or investment opportunity in Bhopal
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}
