import {
  Home,
  Building2,
  Key,
  FileText,
  TrendingUp,
  Users,
  Briefcase,
} from "lucide-react";

export function Services() {
  return (
    <div>
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#DAEC8B] to-[#c8dc79]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Services
          </h1>
          <p className="text-[12px] sm:text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your needs in Bhopal
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl h-64 md:h-full">
                <img
                  src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Property buying"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Home size={24} className="text-gray-800 md:w-8 md:h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Property Buying & Selling
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Whether you're looking to buy your dream home or sell your
                current property, we provide end-to-end support throughout the
                process. Our expert team handles everything from property search
                and valuation to negotiation and documentation.
              </p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0">
                    <span className="text-gray-800 text-xs md:text-sm font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">
                    Extensive property database across Bhopal
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0">
                    <span className="text-gray-800 text-xs md:text-sm font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">
                    Professional property valuation services
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0">
                    <span className="text-gray-800 text-xs md:text-sm font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">
                    Expert negotiation for best deals
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0">
                    <span className="text-gray-800 text-xs md:text-sm font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">
                    Complete legal documentation support
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
            <div className="flex flex-col justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Key size={24} className="text-gray-800 md:w-8 md:h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Rental & Leasing
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Find the perfect rental property or tenant with our
                comprehensive leasing services. We manage the entire rental
                process, ensuring smooth transactions and satisfied clients on
                both sides.
              </p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0">
                    <span className="text-gray-800 text-xs md:text-sm font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">
                    Tenant screening and verification
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0">
                    <span className="text-gray-800 text-xs md:text-sm font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">
                    Rental agreement preparation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0">
                    <span className="text-gray-800 text-xs md:text-sm font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">
                    Property inspection and maintenance coordination
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0">
                    <span className="text-gray-800 text-xs md:text-sm font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">
                    Rent collection and dispute resolution
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-64 md:h-full">
                <img
                  src="https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?s=612x612&w=0&k=20&c=SFybbpGMB0wIoI0tJotFqptzAYK_mICVITNdQIXqnyc="
                  alt="Rental services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl h-64 md:h-full">
                <img
                  src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Property consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-4 md:mb-6">
                <FileText size={24} className="text-gray-800 md:w-8 md:h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Property Consultation
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Get expert advice on all aspects of real estate investment and
                transactions. Our experienced consultants provide personalized
                guidance to help you make informed decisions that align with
                your goals and budget.
              </p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0">
                    <span className="text-gray-800 text-xs md:text-sm font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">
                    Market analysis and investment advice
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0">
                    <span className="text-gray-800 text-xs md:text-sm font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">
                    Property portfolio management
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0">
                    <span className="text-gray-800 text-xs md:text-sm font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">
                    Legal and financial guidance
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0">
                    <span className="text-gray-800 text-xs md:text-sm font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">
                    Personalized property recommendations
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Additional Services
            </h2>
            <p className="text-[12px] sm:text-lg md:text-xl text-gray-600">
              Comprehensive solutions for all your real estate needs
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <Building2
                  size={20}
                  className="text-gray-800 sm:w-6 sm:h-6 md:w-7 md:h-7"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-gray-900">
                Commercial Properties
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Specialized services for commercial real estate including
                offices, retail spaces, and industrial properties in prime
                Bhopal locations.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <TrendingUp
                  size={20}
                  className="text-gray-800 sm:w-6 sm:h-6 md:w-7 md:h-7"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-gray-900">
                Investment Advisory
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Strategic investment guidance for maximizing returns on real
                estate investments with detailed market insights and analysis.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <Users
                  size={20}
                  className="text-gray-800 sm:w-6 sm:h-6 md:w-7 md:h-7"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-gray-900">
                Property Management
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Complete property management solutions including maintenance,
                tenant relations, and administrative support for property
                owners.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <Briefcase
                  size={20}
                  className="text-gray-800 sm:w-6 sm:h-6 md:w-7 md:h-7"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-gray-900">
                Legal Assistance
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Expert legal support for property documentation, title
                verification, and registration processes to ensure smooth
                transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-[12px] sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            Let our experts guide you through your real estate journey in Bhopal
          </p>
          <button className="bg-[#DAEC8B] text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-[14px] md:text-lg hover:bg-[#c8dc79] transition-all transform hover:scale-105 shadow-lg">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
