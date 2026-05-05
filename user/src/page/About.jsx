import { BookOpen, Users, Globe, Award, Zap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Transforming Education Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Access to Knowledge
              </span>
            </h1>
            <p className="text-xl text-blue-100">
              An innovative digital library built for students - accessible anytime, anywhere, 
              with premium quality academic resources.
            </p>
          </div>
        </div>
      </div>

      {/* MISSION */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe every student deserves equal access to quality educational resources, 
              regardless of location or financial background. 
              <strong>Innovative-Library</strong> is an innovative collage of education -
              combining technology, curated academic content, and seamless access 
              to empower the next generation of thinkers and leaders.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold">Knowledge Without Barriers</h3>
            </div>
            <p className="text-gray-600">
              Access thousands of textbooks, research papers, novels, and academic materials 
              from anywhere in the world with a simple subscription.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURES / INNOVATION */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why InnovativeLibrary?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are not just another eLibrary  we are building the future of education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Access Anywhere",
                desc: "Learn from campus, home, village, or while traveling. Our platform works seamlessly across all devices."
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Innovative Learning",
                desc: "Smart recommendations, reading progress tracking, offline access, and interactive study tools."
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Premium & Verified",
                desc: "Curated collection of high-quality books and academic materials from trusted publishers and institutions."
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Student First",
                desc: "Built by educators and students, for students. Affordable subscription plans with flexible payments."
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Quality Over Quantity",
                desc: "We focus on academic excellence, not just volume. Every book is carefully selected."
              },
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Diverse Collection",
                desc: "From engineering, medicine, law, arts, to fiction and self-development — we cover it all."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 
                           p-8 rounded-3xl transition-all duration-300 hover:shadow-xl group"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <div className="max-w-6xl mx-auto px-6 py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Founded in 2025, Innovative-Library was born from a simple frustration: 
            students in Nigeria and across Africa struggling to get quality academic books. 
            We started as a small college project and have grown into a powerful digital 
            education platform that makes learning accessible, affordable, and enjoyable.
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Today, we serve thousands of students who can now read world-class books 
            from the comfort of their rooms - breaking the barriers of cost and location.
          </p>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Learning Journey?
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Join thousands of students already learning better with InnoLibrary
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-2xl hover:bg-gray-100 transition text-lg"
                onClick={() => navigate("/book")}>
              Browse Books
            </button>
            <button className="border-2 border-white font-semibold px-10 py-4 rounded-2xl hover:bg-white/10 transition text-lg"
               onClick={() => navigate("/")}>
              Choose a Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}