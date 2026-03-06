import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stethoscope,
  Users,
  Clock,
  Shield,
  Award,
  ChevronRight,
  Plus,
  Minus,
  HelpCircle,
  Phone,
  Calendar,
  CheckCircle2,
  Syringe,
  Microscope,
  Baby,
} from 'lucide-react';

import InteractiveSelector from '../components/ui/interactive-selector';
import TestimonialV2 from '../components/ui/testimonial-v2';

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    { icon: Users, value: '10,000+', label: 'Total Patients annually', color: 'bg-blue-500' },
    { icon: Award, value: '15+', label: 'Years of Experience', color: 'bg-orange-500' },
    { icon: Stethoscope, value: '98%', label: 'Surgery Success', color: 'bg-blue-600' },
    { icon: Clock, value: '24/7', label: 'Emergency Support', color: 'bg-orange-600' },
  ];

  const faqs = [
    {
      question: "What specialties does Vayuputra Multi Speciality Hospitals offer?",
      answer: "Vayuputra Hospitals in Guntur specializes in General Medicine, Diabetology, Maternity, Gynaecology, Infertility Treatment, and Laparoscopic Surgery. We also provide comprehensive diagnostic laboratory services."
    },
    {
      question: "What laboratory tests are available at Vayuputra Hospitals?",
      answer: "We offer a wide range of diagnostic tests including CBP, HbA1c, Thyroid profile, Liver & Kidney Function Tests, Viral screenings (HIV, HCV, HBsAg), and specialized tests like D-Dimer, IL-6, and Serum Electrolytes."
    },
    {
      question: "Is home sample collection available for lab tests?",
      answer: "Yes, Vayuputra Clinic offers home sample collection services for selected diagnostic tests to ensure patient convenience and safety."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[100vh] lg:h-[110vh] flex items-center overflow-hidden">
        {/* Background Image with Ken Burns Effect */}
        <motion.div
          className="absolute inset-0 z-0 scale-110"
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear" }}
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Dynamic Overlay Gradient - More subtle on the right to show hospital */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/30" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />

        {/* Floating Decorative Photo (Top-Left) */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -15 }}
          animate={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="absolute top-32 left-8 lg:left-16 z-30 hidden 2xl:block"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-secondary rounded-[3rem] blur-2xl opacity-15 group-hover:opacity-30 transition-opacity"></div>
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
              alt="Healthcare Excellence"
              className="w-52 h-64 object-cover rounded-[3rem] border-4 border-white/20 shadow-2xl transform transition-transform group-hover:scale-105"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 25}`} alt="Patient" />
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-black tracking-tighter text-primary leading-tight uppercase">Trusted By <br />10,000+ Patients</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center pt-16 pb-24 lg:pt-20 lg:pb-32">
          <div className="max-w-5xl text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-3 px-6 py-2.5 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full text-white font-extrabold text-[10px] uppercase tracking-[0.4em] mb-12 shadow-2xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span>24/7 Guntur's Family Clinic</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading font-black text-2xl md:text-5xl lg:text-7xl text-white mb-8 leading-[1.05] tracking-tight drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              Vayuputra Multi <br /> <span className="text-secondary drop-shadow-none">Speciality</span> Hospitals
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-white/90 mb-12 max-w-3xl leading-relaxed font-bold italic flex items-center justify-center text-center px-4"
            >
              <span className="h-px w-10 bg-orange-500/30 mr-6 hidden md:block"></span>
              "Your Trusted Partner in Advanced Healthcare, Specialized in Laparoscopic Surgery, Infertility Treatment, and Maternity Care"
              <span className="h-px w-10 bg-orange-500/30 ml-6 hidden md:block"></span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center w-full max-w-3xl px-4"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-14 py-7 bg-secondary text-white text-xl font-black rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(242,116,41,0.8)] active:scale-95 overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <Calendar className="mr-3 w-7 h-7" />
                Book Consultant
              </Link>
              <a
                href="tel:9515379249"
                className="inline-flex items-center justify-center px-14 py-7 bg-white/10 backdrop-blur-3xl border-2 border-white/40 text-white text-xl font-black rounded-3xl transition-all hover:bg-white hover:text-primary active:scale-95 shadow-2xl w-full sm:w-auto"
              >
                <Phone className="mr-3 w-7 h-7" />
                Call Now
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Positioned relative to centered content */}
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 text-white/70 hidden lg:flex flex-col items-center space-y-2"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1.5 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-secondary rounded-full shadow-lg"
            />
          </div>
        </motion.div>

        {/* Hero Section Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-20" />
      </section>

      {/* --- DOCTOR SPOTLIGHT --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-gray-50 bg-gray-100 group">
                <img
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Y.S. Triveni Reddy"
                  className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-50 rounded-full -z-0 blur-3xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-50 rounded-full -z-0 blur-3xl opacity-60"></div>

              <div className="absolute bottom-10 right-10 z-20 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/40 max-w-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">★</div>
                  <div>
                    <div className="font-heading font-black text-primary">Chief Surgeon</div>
                    <div className="text-sm text-gray-600">Clinical Leadership</div>
                  </div>
                </div>
                <p className="text-gray-700 font-medium italic">"Commitment to patient safety and surgical excellence is our core philosophy."</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-5 py-2 bg-blue-50 text-primary font-black rounded-full text-sm tracking-widest uppercase mb-6">Expert Consultation</div>
              <h2 className="font-heading font-black text-4xl md:text-6xl text-primary mb-8 leading-tight">
                Dr. Y.S. Triveni Reddy <br />
                <span className="text-blue-500 text-3xl md:text-4xl">M.B.B.S., DNB, OBG</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                A renowned expert in <span className="text-primary font-bold">General, Infertility & Laparoscopic Surgery</span>. With over a decade of surgical excellence, Dr. Triveni Reddy leads our clinical team with precision and patient-first care.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  "Specialist in Infertility & Laparoscopy",
                  "Expert in High-Risk Maternity Care",
                  "Advanced Minimal Invasive Surgeries",
                  "Compassionate Women's Health Care"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <span className="text-lg font-bold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/doctors"
                className="inline-flex items-center space-x-3 text-secondary font-black text-xl hover:translate-x-2 transition-transform"
              >
                <span>View Full Medical Profile</span>
                <ChevronRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SELECTOR SECTION --- */}
      <section className="py-12 bg-gray-50/50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveSelector />
        </div>
      </section>

      {/* --- LABORATORY SECTION (NEAT & CLEAN) --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm"
            >
              <Microscope className="w-3.5 h-3.5" />
              <span>Diagnostic Precision</span>
            </motion.div>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-primary mb-6 leading-tight">
              In-House <span className="text-secondary">Pathology Lab</span>
            </h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-8 rounded-full opacity-90 shadow-sm" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-bold leading-relaxed">
              Equipped with fully automated high-end diagnostic machines for accurate and rapid clinical testing results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Core Tests",
                icon: Microscope,
                desc: "CBP, HbA1c, Thyroid Profile, LFT, RFT, and comprehensive viral screenings.",
                list: ["2-Hour Results", "Automation", "NABL Standards"],
                color: "text-blue-600",
                bgColor: "bg-blue-50"
              },
              {
                title: "Home Collection",
                icon: Syringe,
                desc: "Skip the travel. Our professional phlebotomists collect samples from your doorstep.",
                list: ["Expert Staff", "Safety First", "Prompt Pickup"],
                color: "text-orange-600",
                bgColor: "bg-orange-50"
              },
              {
                title: "Maternity Panels",
                icon: Baby,
                desc: "Specialized screenings for expectant mothers and neonatal health monitoring.",
                list: ["Specialized Panels", "Early Detection", "Expert Guidance"],
                color: "text-primary",
                bgColor: "bg-blue-50"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Accent Corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-[4rem]`}></div>

                <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-8 transform transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>

                <h3 className="text-2xl font-heading font-black text-primary mb-4 group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-bold text-sm">{item.desc}</p>

                <div className="space-y-4">
                  {item.list.map((listItem, j) => (
                    <div key={j} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-secondary' : 'bg-primary'}`} />
                      <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest">{listItem}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="group inline-flex items-center px-10 py-5 bg-primary text-white text-lg font-black rounded-2xl hover:bg-secondary transition-all transform hover:scale-105 shadow-xl"
            >
              <span>Learn More About Testing</span>
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <TestimonialV2 />

      {/* --- FAQ SECTION --- */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-20">
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <div className="inline-flex items-center px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs uppercase tracking-widest mb-4">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Support
                </div>
                <h2 className="font-heading font-black text-4xl md:text-5xl text-primary mb-8 leading-tight">
                  Everything You <br />Need to Know
                </h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                  We are transparent about our processes. Find answers to common hospital inquiries.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center font-black text-secondary text-lg hover:translate-x-2 transition-transform"
                >
                  Still have questions? Contact Us <ChevronRight className="ml-2 w-6 h-6" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  className={`border-2 rounded-[2rem] transition-all duration-500 overflow-hidden ${openFaq === index
                    ? 'border-secondary bg-white shadow-[0_30px_60px_-15px_rgba(242,116,41,0.2)]'
                    : 'border-gray-50 bg-gray-50 hover:border-blue-100 hover:bg-white'
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-8 md:px-10 flex items-center justify-between text-left group"
                  >
                    <span className={`font-heading font-black text-xl md:text-2xl transition-colors ${openFaq === index ? 'text-secondary' : 'text-primary'
                      }`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 ml-6 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openFaq === index ? 'bg-secondary text-white' : 'bg-primary/5 text-primary'
                      }`}>
                      {openFaq === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-8 pb-10 md:px-10">
                          <div className="h-px bg-gray-100 mb-8"></div>
                          <p className="text-gray-600 text-lg leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto rounded-[4rem] bg-primary relative overflow-hidden p-12 md:p-24 shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10 mx-auto text-center">
            <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-8">
              Experience Healthcare Excellence Today
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 font-medium">
              Join the 10,000+ happy patients who trust Vayuputra Hospitals for their family's health.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-12 py-5 bg-secondary text-white text-xl font-black rounded-2xl hover:scale-105 transition-transform shadow-2xl"
              >
                Book Appointment
              </Link>
              <a
                href="tel:9515379249"
                className="inline-flex items-center justify-center px-12 py-5 border-2 border-white/30 text-white text-xl font-black rounded-2xl hover:bg-white hover:text-primary transition-all shadow-2xl"
              >
                Emergency: 95153 79249
              </a>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
};

export default Home;
