import {
  ArrowRight,
  Home as HomeIcon,
  Building2,
  TrendingUp,
  Award,
} from "lucide-react";

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export function Home({ setCurrentPage }: HomeProps) {
  const handleContactClick = () => {
    setCurrentPage("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExploreClick = () => {
    setCurrentPage("properties");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        {/* Subtle tilted overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Building Dreams, Brick by Brick in Bhopal
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200">
            Your trusted partner in finding the perfect property in Madhya
            Pradesh
          </p>
          <button
            onClick={handleExploreClick}
            className="bg-[#DAEC8B] text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-[#c8dc79] transition-all transform hover:scale-105 inline-flex items-center shadow-lg"
          >
            Explore Properties
            <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Choose Bluetick Reality?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We bring expertise, transparency, and commitment to every real
              estate transaction
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <HomeIcon
                  size={20}
                  className="text-gray-800 sm:w-6 sm:h-6 md:w-8 md:h-8"
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 md:mb-3 text-gray-900">
                500+ Properties
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Extensive portfolio of residential and commercial properties
                across Bhopal
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <Building2
                  size={20}
                  className="text-gray-800 sm:w-6 sm:h-6 md:w-8 md:h-8"
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 md:mb-3 text-gray-900">
                Local Expertise
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Deep knowledge of Bhopal's real estate market and neighborhoods
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <TrendingUp
                  size={20}
                  className="text-gray-800 sm:w-6 sm:h-6 md:w-8 md:h-8"
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 md:mb-3 text-gray-900">
                Best Deals
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Competitive pricing and negotiation expertise for optimal value
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <Award
                  size={20}
                  className="text-gray-800 sm:w-6 sm:h-6 md:w-8 md:h-8"
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 md:mb-3 text-gray-900">
                Trusted Service
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Years of experience delivering exceptional customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Featured Properties
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Discover our handpicked selection of premium properties
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="h-48 sm:h-56 md:h-64 bg-gray-300 relative overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/${
                      i === 1
                        ? "106399"
                        : i === 2
                        ? "1396122"
                        : i === 3
                        ? "323780"
                        : i === 4
                        ? "1732414"
                        : i === 5
                        ? "2635038"
                        : "259588"
                    }/pexels-photo-${
                      i === 1
                        ? "106399"
                        : i === 2
                        ? "1396122"
                        : i === 3
                        ? "323780"
                        : i === 4
                        ? "1732414"
                        : i === 5
                        ? "2635038"
                        : "259588"
                    }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={`Property ${i}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-[16px] md:text-xl font-semibold mb-1 md:mb-2 text-gray-900">
                    {i === 1
                      ? "Modern Villa"
                      : i === 2
                      ? "Luxury Apartment"
                      : i === 3
                      ? "Commercial Space"
                      : i === 4
                      ? "Elegant Duplex"
                      : i === 5
                      ? "Modern Apartment"
                      : "Spacious Family Home"}
                  </h3>
                  <p className="text-[12px] md:text-base text-gray-600 mb-3 md:mb-4">
                    {i === 1
                      ? "Arera Colony"
                      : i === 2
                      ? "MP Nagar"
                      : i === 3
                      ? "New Market"
                      : i === 4
                      ? "Kolar Road"
                      : i === 5
                      ? "Ayodhya Bypass"
                      : "Shahpura"}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl md:text-2xl font-bold text-[#6f7944]">
                      ₹
                      {i === 1
                        ? "1.5"
                        : i === 2
                        ? "85"
                        : i === 3
                        ? "2.2"
                        : i === 4
                        ? "1.8"
                        : i === 5
                        ? "65"
                        : "95"}{" "}
                      {i === 2 || i === 5 || i === 6 ? "L" : "Cr"}
                    </span>
                    <button
                      onClick={handleContactClick}
                      className="text-sm md:text-base text-gray-900 font-semibold hover:text-[#DAEC8B] transition-colors"
                    >
                      contact →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#DAEC8B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 md:mb-8">
            Let us help you discover the perfect home or investment opportunity
            in Bhopal
          </p>
          <button
            onClick={handleContactClick}
            className="bg-gray-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}
