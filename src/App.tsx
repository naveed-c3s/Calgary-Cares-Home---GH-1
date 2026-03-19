/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
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
  ChevronRight
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

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
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
              <a href="#stats" className="hover:text-blue-600 transition-colors">Impact</a>
              <a href="tel:+14034015122" className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-200 flex items-center gap-2">
                <Phone size={16} />
                Call Now
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
                <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group">
                  Book Free Consultation
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                  Our Services
                </button>
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
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all cursor-pointer">
                  <Users size={18} />
                </div>
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
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-10 border-t border-slate-200 text-slate-400 text-xs">
            &copy; {new Date().getFullYear()} Calgary Cares Community Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
