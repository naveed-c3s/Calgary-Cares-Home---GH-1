/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  Home, 
  Stethoscope, 
  UserPlus, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users, 
  Handshake,
  ChevronRight,
  Star,
  Send,
  CheckCircle,
  X
} from "lucide-react";

const services = [
  {
    title: "Nursing Care",
    description: "Professional medical support including medication management and wound care in the comfort of your home.",
    icon: Stethoscope,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Light Homemaking",
    description: "Assistance with daily chores, meal preparation, and light cleaning for a safe living environment.",
    icon: Home,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Personal Care & Respite",
    description: "Dignified assistance with personal hygiene and daily living, providing essential breaks for family caregivers.",
    icon: Heart,
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "Specialty Care",
    description: "Tailored care plans for complex needs, including dementia care and post-operative recovery.",
    icon: UserPlus,
    color: "bg-amber-50 text-amber-600"
  }
];

const team = [
  {
    name: "Hira Muneeb",
    role: "Co-Founder & Clinical Lead",
    bio: "Hira leads the clinical direction, ensuring every client receives compassionate, high-standard nursing care.",
    image: "https://picsum.photos/seed/hira/400/400"
  },
  {
    name: "Naveed ul Islam",
    role: "Co-Founder & Operations Director",
    bio: "Naveed oversees strategic operations and community partnerships, focusing on service excellence.",
    image: "https://picsum.photos/seed/naveed/400/400"
  }
];

const stats = [
  { label: "Care Hours", value: "9.5K+", icon: Clock },
  { label: "Client Retention", value: "98%", icon: Users },
  { label: "Active Partners", value: "40+", icon: Handshake }
];

const testimonials = [
  {
    quote: "Calgary Cares has been a blessing for our family. The nursing care is top-notch and the staff is incredibly compassionate.",
    author: "Sarah J.",
    role: "Family Member",
    stars: 5
  },
  {
    quote: "Professional, reliable, and truly caring. They helped my father recover after his surgery with such dignity.",
    author: "Michael R.",
    role: "Client",
    stars: 5
  },
  {
    quote: "The best home care service in Calgary. Their attention to detail and personalized care plans are unmatched.",
    author: "Linda M.",
    role: "Family Member",
    stars: 5
  }
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState<"privacy" | "terms" | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1500);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">C</div>
              <span className="font-bold text-xl tracking-tight text-blue-900">Calgary Cares</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
              <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-200 flex items-center gap-2">
                <Phone size={16} />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                Professional Home Care
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                Improving Lives, <br />
                <span className="text-blue-600">One Client at a Time.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                Providing high-quality, compassionate care with those who care. 
                We are dedicated to supporting your comfortable living in Calgary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group">
                  Book Free Consultation
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#services" className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all text-center">
                  Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 -z-10 rounded-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10" />
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <stat.icon className="text-blue-400" size={32} />
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-slate-400 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Our Key Services</h2>
            <p className="text-lg text-slate-600">
              We offer a comprehensive range of home care services tailored to meet the unique needs of every individual.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Meet Our Founders</h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Calgary Cares was founded on the principle of providing care that we would want for our own families. 
                Our leadership combines clinical expertise with operational excellence.
              </p>
              <div className="space-y-10">
                {team.map((member, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-24 h-24 rounded-2xl object-cover shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                      <div className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wider">{member.role}</div>
                      <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/care/800/800" 
                  alt="Caregiving" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <Heart fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Certified Care</div>
                    <div className="text-sm text-slate-500">Professional Standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">What Our Clients Say</h2>
            <p className="text-lg text-slate-400">
              Real stories from families we've had the privilege to serve in the Calgary community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-blue-400 text-blue-400" />
                  ))}
                </div>
                <p className="text-lg italic text-slate-300 mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-200 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white">
              <h2 className="text-4xl font-bold mb-8 tracking-tight">Ready to Start Your Care Journey?</h2>
              <p className="text-blue-100 text-lg mb-12 leading-relaxed">
                Contact us today for a free, no-obligation consultation. We'll discuss your needs and create a personalized care plan that works for you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm uppercase tracking-widest font-bold">Call Us</div>
                    <div className="text-xl font-bold">+1 (403) 401-5122</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm uppercase tracking-widest font-bold">Email Us</div>
                    <div className="text-xl font-bold">info@calgarycares.ca</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm uppercase tracking-widest font-bold">Visit Us</div>
                    <div className="text-xl font-bold">Calgary, Alberta</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-12 lg:p-20">
              {formStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. A member of our team will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Interested In</label>
                    <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all appearance-none">
                      <option>Nursing Care</option>
                      <option>Light Homemaking</option>
                      <option>Personal Care & Respite</option>
                      <option>Specialty Care</option>
                      <option>Other / General Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={formStatus === "submitting"}
                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">C</div>
                <span className="font-bold text-xl tracking-tight text-blue-900">Calgary Cares</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-8">
                Providing professional home care and community services in Calgary. 
                Improving lives, one client at a time.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all cursor-pointer">
                  <Users size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Contact Us</h5>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-blue-600" />
                  +1 (403) 401-5122
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-blue-600" />
                  info@calgarycares.ca
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-blue-600" />
                  Calgary, Alberta
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h5>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="#services" className="hover:text-blue-600">Our Services</a></li>
                <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
                <li><button onClick={() => setIsModalOpen("privacy")} className="hover:text-blue-600">Privacy Policy</button></li>
                <li><button onClick={() => setIsModalOpen("terms")} className="hover:text-blue-600">Terms of Service</button></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-10 border-t border-slate-200 text-slate-400 text-xs">
            &copy; {new Date().getFullYear()} Calgary Cares Community Services. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[80vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="text-2xl font-bold text-slate-900">
                  {isModalOpen === "privacy" ? "Privacy Policy" : "Terms of Service"}
                </h3>
                <button 
                  onClick={() => setIsModalOpen(null)}
                  className="w-10 h-10 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-8 overflow-y-auto text-slate-600 leading-relaxed space-y-6">
                {isModalOpen === "privacy" ? (
                  <>
                    <p className="font-bold text-slate-900">Last Updated: March 2026</p>
                    <p>At Calgary Cares, your privacy is our priority. This policy outlines how we collect, use, and protect your personal information.</p>
                    <h4 className="font-bold text-slate-900">1. Information Collection</h4>
                    <p>We collect information you provide directly to us through our contact forms, including name, email, and health-related inquiries to provide tailored care services.</p>
                    <h4 className="font-bold text-slate-900">2. Use of Information</h4>
                    <p>Your data is used solely for service delivery, communication, and improving our care standards. We never sell your personal data to third parties.</p>
                    <h4 className="font-bold text-slate-900">3. Data Security</h4>
                    <p>We implement industry-standard security measures to protect your sensitive health information and personal details.</p>
                  </>
                ) : (
                  <>
                    <p className="font-bold text-slate-900">Last Updated: March 2026</p>
                    <p>By accessing our services, you agree to the following terms and conditions.</p>
                    <h4 className="font-bold text-slate-900">1. Service Agreement</h4>
                    <p>Calgary Cares provides home care services based on agreed-upon care plans. We reserve the right to modify services based on clinical assessments.</p>
                    <h4 className="font-bold text-slate-900">2. Client Responsibilities</h4>
                    <p>Clients are responsible for providing accurate health information and maintaining a safe environment for our care providers.</p>
                    <h4 className="font-bold text-slate-900">3. Liability</h4>
                    <p>While we strive for excellence, Calgary Cares is not liable for outcomes beyond our reasonable control or resulting from undisclosed medical conditions.</p>
                  </>
                )}
              </div>
              <div className="p-8 border-t border-slate-100 bg-slate-50 text-right">
                <button 
                  onClick={() => setIsModalOpen(null)}
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
