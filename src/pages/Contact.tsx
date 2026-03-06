import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    doctor: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Appointment Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nDoctor: ${formData.doctor}\nDate: ${formData.date}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919515379249?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(31, 78, 121, 0.85), rgba(31, 78, 121, 0.85)), url(https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-100">
            Get in Touch for Appointments & Inquiries
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl text-primary mb-6">
                Book an Appointment
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible to confirm
                your appointment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="doctor"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Select Doctor/Department *
                  </label>
                  <select
                    id="doctor"
                    name="doctor"
                    required
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Choose a department</option>
                    <option value="General Medicine">General Medicine</option>
                    <option value="Diabetology">Diabetology</option>
                    <option value="Gynaecology">Gynaecology</option>
                    <option value="Maternity Care">Maternity Care</option>
                    <option value="Infertility Treatment">Infertility Treatment</option>
                    <option value="Laparoscopic Surgery">Laparoscopic Surgery</option>
                    <option value="Gastroenterology">Gastroenterology</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Any specific concerns or questions?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-lg"
                >
                  Submit Appointment Request
                </button>
              </form>
            </div>

            <div>
              <h2 className="font-heading font-bold text-3xl text-primary mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Library Centre, 1st Lane Koritepadu<br />
                      Near RCM School, Vinayak Nagar<br />
                      Guntur – 522007<br />
                      Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:9515379249"
                      className="text-gray-600 hover:text-secondary transition-colors"
                    >
                      9515379249
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@vayuputrahospitals.com"
                      className="text-gray-600 hover:text-secondary transition-colors"
                    >
                      info@vayuputrahospitals.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-600">
                      24/7 Emergency Services<br />
                      OPD: 9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/919515379249"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-secondary transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white rounded-lg p-6">
                <h3 className="font-heading font-bold text-xl mb-3">Emergency?</h3>
                <p className="text-gray-200 mb-4">
                  For medical emergencies, call us immediately or visit our emergency department.
                </p>
                <a
                  href="tel:9515379249"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Call Emergency: 9515379249
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-white">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.0!2d80.4365!3d16.3066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE4JzI0LjAiTiA4MMKwMjYnMTEuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hospital Location"
          ></iframe>
        </div>
      </section>

      <a
        href="https://wa.me/919515379249"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Contact;
