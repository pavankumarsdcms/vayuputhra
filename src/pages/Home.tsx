import { Link } from 'react-router-dom';
import {
  Stethoscope,
  Users,
  Clock,
  Shield,
  Award,
} from 'lucide-react';

import InteractiveSelector from '../components/ui/interactive-selector';
import TestimonialV2 from '../components/ui/testimonial-v2';

const Home = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Patients annually' },
    { icon: Award, value: '15+', label: 'Years of Clinical Excellence' },
    { icon: Stethoscope, value: '98%', label: 'Surgery Success Rate' },
    { icon: Clock, value: '24/7', label: 'Emergency Response' },
  ];

  const faqs = [
    {
      question: "What specialties does Vayuputra Multi Speciality Hospitals offer?",
      answer: "Vayuputra Hospitals in Guntur specializes in Gynaecology, Obstetrics, Gastroenterology, Diabetology, Infertility Treatment, and Laparoscopic Surgery. Our hospital provides comprehensive multispeciality care with 24/7 emergency services."
    },
    {
      question: "Is emergency care available 24/7 in Guntur?",
      answer: "Yes, Vayuputra Multi Speciality Hospitals provides round-the-clock emergency medical services in Guntur, staffed by expert trauma care specialists and experienced doctors."
    },
    {
      question: "Do you offer specialized infertility treatments?",
      answer: "We offer advanced infertility treatments in Guntur, including diagnostics, laparoscopic interventions, and personalized fertility care plans managed by expert gynaecologists."
    }
  ];


  return (
    <div className="min-h-screen">
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(31, 78, 121, 0.8), rgba(31, 78, 121, 0.7)), url(https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Vayuputra Multi Speciality Hospitals
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-4">
            24/7 Multi Speciality Healthcare in Guntur
          </p>
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Vayuputra Multi Speciality Hospitals is the leading healthcare provider in Guntur, specialized in <strong>Gynaecology</strong>, <strong>Obstetrics</strong>, <strong>Gastroenterology</strong>, <strong>Infertility Treatment</strong> and <strong>Laparoscopic Surgery</strong>. With a 98% success rate in surgical procedures and over 15 years of medical expertise, we ensure the highest standards of patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white text-lg font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              Book Appointment
            </Link>
            <a
              href="tel:9515379249"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary text-lg font-medium rounded-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-secondary mx-auto mb-3" />
                <div className="font-heading font-bold text-3xl text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
                About Vayuputra Multi Speciality Hospitals
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vayuputra Multi Speciality Hospitals is a trusted healthcare center in Guntur,
                Andhra Pradesh, dedicated to providing comprehensive medical services with
                compassion and excellence.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our state-of-the-art facility offers advanced treatments and patient-centered
                care across multiple specialties including General Medicine, Diabetology,
                Maternity Care, Gynaecology, Infertility Treatment, and Laparoscopic Surgery.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With experienced doctors, modern equipment, and 24/7 emergency services, we are
                committed to being your trusted healthcare partner.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-all"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hospital"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-lg shadow-xl">
                <Shield className="w-8 h-8 mb-2" />
                <div className="font-bold text-2xl">15+</div>
                <div className="text-sm">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveSelector />

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-opacity-90 transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Why Choose Vayuputra Hospitals?
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Your health and wellbeing are our top priorities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Expert Doctors</h3>
              <p className="text-gray-300 leading-relaxed">
                Highly qualified and experienced medical professionals dedicated to your care
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Modern Facilities</h3>
              <p className="text-gray-300 leading-relaxed">
                State-of-the-art medical equipment and comfortable patient environment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">24/7 Emergency</h3>
              <p className="text-gray-300 leading-relaxed">
                Round-the-clock emergency care for all medical emergencies
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialV2 />

      <section className="py-20 bg-white" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our hospital and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="font-heading font-semibold text-xl text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white text-lg mb-8">
            Book an appointment today and experience quality healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary text-lg font-medium rounded-lg hover:bg-gray-100 transition-all"
            >
              Book Appointment
            </Link>
            <a
              href="tel:9515379249"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-medium rounded-lg hover:bg-white hover:text-secondary transition-all"
            >
              Call: 9515379249
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
