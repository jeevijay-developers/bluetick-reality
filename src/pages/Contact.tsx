import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

interface ContactProps {
  setCurrentPage: (page: string) => void;
}

export function Contact({ setCurrentPage }: ContactProps) {
  const handleViewProperties = () => {
    setCurrentPage("properties");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScheduleConsultation = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#DAEC8B] to-[#c8dc79]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Get In Touch
          </h1>
          <p className="text-[12px] sm:text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
            Have questions? We're here to help you find your dream property in
            Bhopal
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8">
                Contact Information
              </h2>
              <p className="text-[12px] sm:text-base md:text-lg text-gray-600 mb-6 md:mb-10 leading-relaxed">
                Reach out to us for any inquiries about properties, services, or
                to schedule a consultation. Our team is ready to assist you with
                all your real estate needs.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <MapPin size={18} className="text-gray-800 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-[11px] sm:text-sm md:text-base text-gray-600">
                      Third Floor, Plot No 155, Service Rd, Near Axis Bank,
                      Zone-I, Maharana Pratap Nagar, Bhopal, Madhya Pradesh
                      462011
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <Phone size={18} className="text-gray-800 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-[11px] sm:text-sm md:text-base text-gray-600">
                      +91 07809909978
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <Mail size={18} className="text-gray-800 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <p className="text-[11px] sm:text-sm md:text-base text-gray-600">
                      dealmakersindianar@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <Clock size={18} className="text-gray-800 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-[11px] sm:text-sm md:text-base text-gray-600">
                      Monday - Saturday: 10:00 AM - 7:00 PM
                    </p>
                    <p className="text-[11px] sm:text-sm md:text-base text-gray-600">
                      Sunday: 12:00 PM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="bg-gray-50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg"
                id="contact-form"
              >
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Send Us a Message
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 md:mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DAEC8B] focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 md:mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DAEC8B] focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 md:mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DAEC8B] focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 md:mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DAEC8B] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your requirements"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#DAEC8B] text-gray-900 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-[#c8dc79] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    Send Message
                    <Send size={16} className="ml-2 sm:w-5 sm:h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8 text-center">
            Our Location
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[400px] md:h-[500px] bg-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.198945397409!2d77.43201097532028!3d23.23584647902481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4352ce5e96bb%3A0xeb671e4d6d043464!2sBluetick%20Realty!5e0!3m2!1sen!2sin!4v1762170996204!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bhopal Map"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Start Your Property Journey?
          </h2>
          <p className="text-[12px] sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            Whether you're buying, selling, or renting, our expert team is here
            to guide you every step of the way.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            <button
              onClick={handleScheduleConsultation}
              className="bg-[#DAEC8B] text-gray-900 px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold text-[14px] sm:text-base md:text-lg hover:bg-[#c8dc79] transition-all transform hover:scale-105 shadow-lg"
            >
              Schedule a Consultation
            </button>
            <button
              onClick={handleViewProperties}
              className="bg-transparent border-2 border-white text-white px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold text-[14px] sm:text-base md:text-lg hover:bg-white hover:text-gray-900 transition-all"
            >
              View Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
