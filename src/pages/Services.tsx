import {
  Stethoscope,
  Heart,
  Baby,
  Users,
  Microscope,
  Activity,
  Pill,
  Syringe,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description:
        'Comprehensive primary healthcare services for the diagnosis and treatment of common illnesses, chronic conditions, and preventive care.',
      features: [
        'Fever & Infections',
        'Cold & Flu Treatment',
        'Chronic Disease Management',
        'Health Checkups',
        'Preventive Care',
      ],
    },
    {
      icon: Activity,
      title: 'Diabetology',
      description:
        'Specialized diabetes care and management services to help patients maintain optimal blood sugar levels and prevent complications.',
      features: [
        'Type 1 & Type 2 Diabetes',
        'Blood Sugar Monitoring',
        'Diet & Lifestyle Counseling',
        'Insulin Management',
        'Complication Prevention',
      ],
    },
    {
      icon: Baby,
      title: 'Maternity Care',
      description:
        'Complete prenatal and postnatal care ensuring the health and safety of both mother and baby throughout pregnancy and childbirth.',
      features: [
        'Prenatal Checkups',
        'Normal & Cesarean Delivery',
        'High-Risk Pregnancy Care',
        'Postnatal Care',
        'Newborn Care',
      ],
    },
    {
      icon: Heart,
      title: 'Gynaecology',
      description:
        'Comprehensive womens health services covering preventive care, diagnosis, and treatment of gynecological conditions.',
      features: [
        'Menstrual Disorders',
        'PCOS Treatment',
        'Fibroids Management',
        'Gynec Cancer Screening',
        'Contraception Counseling',
      ],
    },
    {
      icon: Microscope,
      title: 'Infertility Treatment',
      description:
        'Advanced fertility treatments and reproductive medicine to help couples achieve their dream of parenthood.',
      features: [
        'Fertility Assessment',
        'IUI (Intrauterine Insemination)',
        'IVF (In Vitro Fertilization)',
        'Ovulation Induction',
        'Male Infertility Treatment',
      ],
    },
    {
      icon: Activity,
      title: 'Laparoscopic Surgery',
      description:
        'Minimally invasive surgical procedures using advanced laparoscopic techniques for faster recovery and minimal scarring.',
      features: [
        'Gallbladder Surgery',
        'Hernia Repair',
        'Appendix Removal',
        'Gynec Laparoscopy',
        'Diagnostic Laparoscopy',
      ],
    },
    {
      icon: Stethoscope,
      title: 'Gastroenterology',
      description:
        'Expert diagnosis and treatment of digestive system disorders, liver diseases, and gastrointestinal conditions.',
      features: [
        'Endoscopy & Colonoscopy',
        'Acid Reflux Treatment',
        'IBS Management',
        'Liver Disease Care',
        'Ulcer Treatment',
      ],
    },
    {
      icon: Syringe,
      title: 'Emergency Services',
      description:
        '24/7 emergency medical services with rapid response for all medical emergencies and critical care needs.',
      features: [
        '24/7 Emergency Care',
        'Critical Care Unit',
        'Ambulance Services',
        'Emergency Surgery',
        'Trauma Care',
      ],
    },
  ];

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
            Our Medical Services
          </h1>
          <p className="text-xl text-gray-100">
            Comprehensive Healthcare Solutions Under One Roof
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Vayuputra Multi Speciality Hospitals, we offer a wide range of medical services
              delivered by experienced specialists using state-of-the-art technology and
              equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-lg p-8 hover:border-secondary hover:shadow-xl transition-all"
              >
                <service.icon className="w-14 h-14 text-secondary mb-4" />
                <h3 className="font-heading font-bold text-2xl text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-3">
                    Services Include:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Excellence in healthcare delivery with patient satisfaction as our priority
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                  Expert Team
                </h3>
                <p className="text-sm text-gray-600">
                  Highly qualified doctors and healthcare professionals
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                  Modern Equipment
                </h3>
                <p className="text-sm text-gray-600">
                  State-of-the-art medical technology and facilities
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                  Compassionate Care
                </h3>
                <p className="text-sm text-gray-600">
                  Patient-centered approach with personalized attention
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Need Medical Assistance?
          </h2>
          <p className="text-white text-lg mb-8">
            Book an appointment or call us for immediate medical consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary text-lg font-medium rounded-lg hover:bg-gray-100 transition-all"
            >
              Book Appointment
            </a>
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

export default Services;
