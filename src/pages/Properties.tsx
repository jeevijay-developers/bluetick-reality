import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";

interface PropertiesProps {
  setCurrentPage: (page: string) => void;
}

export function Properties({ setCurrentPage }: PropertiesProps) {
  const handleContactClick = () => {
    setCurrentPage("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const properties = [
    {
      id: 1,
      name: "Luxurious Modern Villa",
      location: "Arera Colony, Bhopal",
      type: "Residential",
      price: "1.5 Cr",
      beds: 4,
      baths: 3,
      area: "3200",
      image: "106399",
    },
    {
      id: 2,
      name: "Premium Apartment",
      location: "MP Nagar, Bhopal",
      type: "Residential",
      price: "85 L",
      beds: 3,
      baths: 2,
      area: "1800",
      image: "1396122",
    },
    {
      id: 3,
      name: "Commercial Office Space",
      location: "New Market, Bhopal",
      type: "Commercial",
      price: "2.2 Cr",
      beds: 0,
      baths: 2,
      area: "4500",
      image: "323780",
    },
    {
      id: 4,
      name: "Elegant Duplex Villa",
      location: "Kolar Road, Bhopal",
      type: "Residential",
      price: "1.8 Cr",
      beds: 5,
      baths: 4,
      area: "4000",
      image: "1732414",
    },
    {
      id: 5,
      name: "Modern Apartment Complex",
      location: "Ayodhya Bypass, Bhopal",
      type: "Residential",
      price: "65 L",
      beds: 2,
      baths: 2,
      area: "1400",
      image: "2635038",
    },
    {
      id: 6,
      name: "Retail Shop Space",
      location: "DB City Mall Area, Bhopal",
      type: "Commercial",
      price: "1.5 Cr",
      beds: 0,
      baths: 1,
      area: "2200",
      image: "380768",
    },
    {
      id: 7,
      name: "Spacious Family Home",
      location: "Shahpura, Bhopal",
      type: "Residential",
      price: "95 L",
      beds: 4,
      baths: 3,
      area: "2500",
      image: "259588",
    },
    {
      id: 8,
      name: "Luxury Penthouse",
      location: "Hoshangabad Road, Bhopal",
      type: "Residential",
      price: "2.5 Cr",
      beds: 4,
      baths: 4,
      area: "3800",
      image: "1457842",
    },
    {
      id: 9,
      name: "Industrial Warehouse",
      location: "Mandideep Industrial Area",
      type: "Commercial",
      price: "3.2 Cr",
      beds: 0,
      baths: 2,
      area: "8000",
      image: "1267338",
    },
  ];

  return (
    <div>
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#DAEC8B] to-[#c8dc79]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Featured Properties
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
            Discover our handpicked selection of premium properties across
            Bhopal
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <button className="px-6 py-3 bg-[#DAEC8B] text-gray-900 rounded-full font-semibold hover:bg-[#c8dc79] transition-colors">
              All Properties
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition-colors border border-gray-200">
              Residential
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition-colors border border-gray-200">
              Commercial
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition-colors border border-gray-200">
              For Sale
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition-colors border border-gray-200">
              For Rent
            </button>
          </div> */}

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/${property.image}/pexels-photo-${property.image}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={property.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#DAEC8B] text-gray-900 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                    {property.type}
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-[16px] md:text-xl font-semibold mb-1 md:mb-2 text-gray-900">
                    {property.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3 md:mb-4">
                    <MapPin size={14} className="mr-1 md:w-4 md:h-4" />
                    <span className="text-[10px] md:text-sm">
                      {property.location}
                    </span>
                  </div>

                  <div className="mb-3 md:mb-4 pb-3 md:pb-4 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      {property.beds > 0 && (
                        <div className="flex items-center text-gray-600">
                          <Bed
                            size={16}
                            className="mr-1 md:w-[14px] md:h-[14px]"
                          />
                          <span className="text-[10px] md:text-sm">
                            {property.beds} Beds
                          </span>
                        </div>
                      )}
                      <div className="flex items-center text-gray-600">
                        <Bath
                          size={16}
                          className="mr-1 md:w-[18px] md:h-[18px]"
                        />
                        <span className="text-xs md:text-sm">
                          {property.baths} Baths
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Square
                        size={16}
                        className="mr-1 md:w-[14px] md:h-[14px]"
                      />
                      <span className="text-xs md:text-sm">
                        {property.area} sq ft
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs md:text-sm text-gray-600">
                        Price
                      </span>
                      <p className="text-xl md:text-2xl font-bold text-gray-900">
                        ₹{property.price}
                      </p>
                    </div>
                    <button
                      onClick={handleContactClick}
                      className="flex items-center text-[12px] md:text-base text-gray-900 font-semibold hover:text-[#DAEC8B] transition-colors"
                    >
                      Contact
                      <ArrowRight
                        size={16}
                        className="ml-1 md:w-[18px] md:h-[18px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-[12px] sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Our team has access to many more properties that match your specific
            requirements. Get in touch and let us help you find your perfect
            property.
          </p>
          <button
            onClick={handleContactClick}
            className="bg-[#DAEC8B] text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-[14px] md:text-lg hover:bg-[#c8dc79] transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
}
