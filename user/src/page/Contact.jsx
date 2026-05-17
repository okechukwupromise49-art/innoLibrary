import { Phone, MapPin, Mail, Clock, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions? Want to apply? We’re here to help you.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* CONTACT INFORMATION */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-lg">Phone Numbers</p>
                  <a href="tel:+2348037121524" className="text-gray-600 hover:text-blue-600 block mt-1">
                    +234 803 7121 524
                  </a>
                  <a href="tel:+2349055555607" className="text-gray-600 hover:text-blue-600 block">
                    +234 905 5555 607
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-lg">Email Address</p>
                  <a 
                    href="mailto:innovativecollegeofedukaru@gmail.com"
                    className="text-gray-600 hover:text-blue-600 break-all"
                  >
                    innovativecollegeofedukaru@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-lg">Our Location</p>
                  <p className="text-gray-600 leading-relaxed mt-1">
                    Along Ado-Kasa, Off Abuja-Keffi Express,<br />
                    New Karu, Karu LGA,<br />
                    Nasarawa State, Nigeria.
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-lg">Office Hours</p>
                  <p className="text-gray-600 mt-1">
                    Monday - Friday: 8:00 AM - 4:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Admission Info */}
            <div className="mt-12 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-xl mb-3">Admissions Open</h3>
              <p className="text-gray-700">
                Applications are invited from qualified candidates for admission into 
                <strong> NCE Programmes</strong> at Innovative College of Education, Karu.
              </p>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-medium transition">
                Apply Now
              </button>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-blue-500 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-blue-500 focus:outline-none"
                    placeholder="+234 800 000 0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-blue-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-blue-500 focus:outline-none"
                  placeholder="Admission Enquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows="6"
                  className="w-full px-5 py-3.5 rounded-3xl border border-gray-200 focus:border-blue-500 focus:outline-none resize-y"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:shadow-lg transition-all active:scale-[0.98]"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <footer className="bg-zinc-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm">
              © {new Date().getFullYear()} Innovative College of Education, Karu. All Rights Reserved.
            </p>
            
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            </div>

            <p className="text-xs text-gray-500">Developed by Zeon Global</p>
          </div>
        </div>
      </footer>
    </div>
  );
}