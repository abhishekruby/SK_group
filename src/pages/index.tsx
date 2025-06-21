import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Phone, 
  Truck, 
  Building2, 
  Car, 
  Warehouse, 
  Clock, 
  DollarSign, 
  Headphones, 
  Shield,
  Star,
  MapPin,
  Mail,
  ArrowRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Users,
  Award,
  CheckCircle,
  Image as ImageIcon
} from 'lucide-react';

export default function Home() {

    const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I'm ${formData.name}. Phone: ${formData.phone}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const whatsappQuote = () => {
    const message = "Hi! I would like to get a quote for packing and moving services.";
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
<div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Truck className="w-8 h-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">Mumbai Packers</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </button>
                <button
                  onClick={whatsappQuote}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Get Quote
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Contact
                </button>
                <button
                  onClick={whatsappQuote}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 mx-3 mt-2"
                >
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Trusted Packers &amp; Movers in{' '}
              <span className="text-orange-400">Mumbai</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional moving services with 15+ years of experience. Safe, reliable, and hassle-free relocation for your home and office.
            </p>
            <button
              onClick={whatsappQuote}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Get a Quote on WhatsApp
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive moving solutions tailored to meet all your relocation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck className="w-12 h-12 text-blue-600" />,
                title: "Home Shifting",
                description: "Complete household relocation with expert packing and safe transportation"
              },
              {
                icon: <Building2 className="w-12 h-12 text-blue-600" />,
                title: "Office Relocation",
                description: "Professional office moving services with minimal business downtime"
              },
              {
                icon: <Car className="w-12 h-12 text-blue-600" />,
                title: "Vehicle Transport",
                description: "Safe and secure transportation of cars and two-wheelers"
              },
              {
                icon: <Warehouse className="w-12 h-12 text-blue-600" />,
                title: "Warehouse & Storage",
                description: "Secure storage solutions with flexible terms and insurance coverage"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-center">
                  <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Mumbai Packers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted partner in making relocations seamless and stress-free
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With over 15 years of experience in the logistics industry, we are Mumbai&apos;s most trusted packers and movers, committed to providing seamless relocation services across India.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team of trained professionals ensures that every move is handled with utmost care and precision, making your relocation experience stress-free and efficient.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="text-2xl font-bold text-gray-900">10,000+</h4>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <Award className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h4 className="text-2xl font-bold text-gray-900">15+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why We&apos;re Different</h3>
                <div className="space-y-4">
                  {[
                    "99% customer satisfaction rate with zero damage guarantee",
                    "Trained and verified professionals for every move",
                    "Real-time tracking and 24/7 customer support",
                    "Comprehensive insurance coverage for all items"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work in Action</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we handle your precious belongings with care and professionalism
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=500",
                title: "Professional Packing",
                description: "Expert packing with high-quality materials"
              },
              {
                image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=500",
                title: "Safe Loading",
                description: "Careful loading with proper equipment"
              },
              {
                image: "https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=500",
                title: "Secure Transport",
                description: "Modern vehicles for safe transportation"
              },
              {
                image: "https://images.pexels.com/photos/4246083/pexels-photo-4246083.jpeg?auto=compress&cs=tinysrgb&w=500",
                title: "Office Moving",
                description: "Specialized office relocation services"
              },
              {
                image: "https://images.pexels.com/photos/4246113/pexels-photo-4246113.jpeg?auto=compress&cs=tinysrgb&w=500",
                title: "Home Shifting",
                description: "Complete household moving solutions"
              },
              {
                image: "https://images.pexels.com/photos/4246085/pexels-photo-4246085.jpeg?auto=compress&cs=tinysrgb&w=500",
                title: "Unpacking Service",
                description: "Professional unpacking and setup"
              }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ImageIcon className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through our commitment to quality and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-10 h-10 text-orange-500" />,
                title: "On-Time Delivery",
                description: "Punctual service with guaranteed delivery timelines"
              },
              {
                icon: <DollarSign className="w-10 h-10 text-orange-500" />,
                title: "Affordable Pricing",
                description: "Competitive rates with transparent pricing and no hidden costs"
              },
              {
                icon: <Headphones className="w-10 h-10 text-orange-500" />,
                title: "24x7 Support",
                description: "Round-the-clock customer support for all your queries"
              },
              {
                icon: <Shield className="w-10 h-10 text-orange-500" />,
                title: "Safe & Secure Shifting",
                description: "Insured moving with high-quality packing materials"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to move? Fill out the form below and we&apos;ll get back to you instantly
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your moving requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-3"
                >
                  Send Message via WhatsApp
                  <Phone className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
              <div className="mb-6">
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>123 Business District, Andheri East, Mumbai - 400069</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span>info@mumbaipackers.com</span>
                  </div>
                </div>
              </div>
              
              {/* Embedded Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mumbai Packers &amp; Movers Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Bandra, Mumbai",
                quote: "Excellent service! They moved my entire 3BHK home without a single item damaged. Highly professional team and very reasonable pricing.",
                rating: 5
              },
              {
                name: "Rajesh Kumar",
                location: "Andheri, Mumbai",
                quote: "Office relocation was completed in just one day with zero downtime. The team was efficient and handled all our IT equipment with care.",
                rating: 5
              },
              {
                name: "Meera Patel",
                location: "Powai, Mumbai",
                quote: "Best packers and movers in Mumbai! They were punctual, careful with our belongings, and the pricing was very transparent. Will definitely recommend!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Truck className="w-8 h-8 text-orange-400 mr-2" />
                <h3 className="text-2xl font-bold text-orange-400">Mumbai Packers & Movers</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Your trusted partner for safe and reliable relocation services across India. We provide professional moving solutions with 15+ years of experience.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-400 p-3 rounded-full transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 98765 43210
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@mumbaipackers.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Mumbai, Maharashtra
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-orange-400 transition-colors duration-200 cursor-pointer">Home Shifting</li>
                <li className="hover:text-orange-400 transition-colors duration-200 cursor-pointer">Office Relocation</li>
                <li className="hover:text-orange-400 transition-colors duration-200 cursor-pointer">Vehicle Transport</li>
                <li className="hover:text-orange-400 transition-colors duration-200 cursor-pointer">Warehouse & Storage</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Mumbai Packers & Movers. All rights reserved. | Designed with ❤️ for your moving needs.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
