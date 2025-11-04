import { Target, Eye, CheckCircle } from "lucide-react";

export function About() {
  return (
    <div>
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#DAEC8B] to-[#c8dc79]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            About Bluetick Reality
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
            Your trusted partner in real estate since inception, serving Bhopal
            with dedication and expertise
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Who We Are
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Bluetick Reality is a premier real estate agency based in the
                heart of Bhopal, Madhya Pradesh. We specialize in residential
                and commercial property transactions, helping individuals and
                businesses find their perfect space.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                With deep roots in the local community and an extensive
                understanding of Bhopal's real estate landscape, we pride
                ourselves on delivering personalized service that meets the
                unique needs of each client.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Our team of experienced professionals is committed to
                transparency, integrity, and excellence in every transaction. We
                don't just help you buy or sell property – we help you build
                your future.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-64 md:h-full">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Target size={24} className="text-gray-800 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                To empower our clients with exceptional real estate solutions
                through honest guidance, local expertise, and unwavering
                commitment to their dreams. We aim to make property transactions
                seamless, transparent, and rewarding for everyone involved.
              </p>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Eye size={24} className="text-gray-800 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                To become the most trusted and preferred real estate partner in
                Bhopal and across Madhya Pradesh, known for our integrity,
                innovation, and customer-first approach. We envision a future
                where every family finds their perfect home through our
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 mx-auto">
                <CheckCircle
                  size={24}
                  className="text-gray-800 sm:w-7 sm:h-7 md:w-9 md:h-9"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 md:mb-3 text-gray-900">
                Integrity
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Honest and transparent dealings in every transaction
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 mx-auto">
                <CheckCircle
                  size={24}
                  className="text-gray-800 sm:w-7 sm:h-7 md:w-9 md:h-9"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 md:mb-3 text-gray-900">
                Expertise
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Deep local knowledge and market understanding
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 mx-auto">
                <CheckCircle
                  size={24}
                  className="text-gray-800 sm:w-7 sm:h-7 md:w-9 md:h-9"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 md:mb-3 text-gray-900">
                Trust
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Building lasting relationships through reliability
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#DAEC8B] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 mx-auto">
                <CheckCircle
                  size={24}
                  className="text-gray-800 sm:w-7 sm:h-7 md:w-9 md:h-9"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 md:mb-3 text-gray-900">
                Excellence
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Commitment to delivering superior service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users size={48} className="mx-auto mb-6 text-[#DAEC8B]" />
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A dedicated group of professionals committed to your real estate success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Kumar', role: 'Founder & CEO', image: '2379004' },
              { name: 'Priya Sharma', role: 'Sales Director', image: '3756679' },
              { name: 'Amit Patel', role: 'Property Consultant', image: '3760514' },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#DAEC8B]">
                  <img
                    src={`https://images.pexels.com/photos/${member.image}/pexels-photo-${member.image}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-[#DAEC8B]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
