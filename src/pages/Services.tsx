import { useState } from 'react';
import {
  Stethoscope,
  Activity,
  Baby,
  Heart,
  Thermometer,
  Wind,
  Droplets,
  FlaskConical,
  Beaker,
  Phone,
  Calendar,
  Home,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  User,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [language, setLanguage] = useState<'en' | 'te'>('en');

  const medicalServices = {
    en: [
      {
        icon: Activity,
        title: 'Diabetes and its complications',
        description: 'Comprehensive diabetes screening, management, and treatment for related various complications.',
      },
      {
        icon: ShieldCheck,
        title: 'Infectious diseases',
        description: 'Expert care for various infectious diseases with rapid diagnosis and effective treatment protocols.',
      },
      {
        icon: Droplets,
        title: 'Anemia',
        description: 'Diagnosis and management of various types of anemia and iron deficiency disorders.',
      },
      {
        icon: Heart,
        title: 'Blood Pressure (BP)',
        description: 'Management of hypertension and related cardiovascular complications for long-term health.',
      },
      {
        icon: Activity,
        title: 'Thyroid disorders',
        description: 'Comprehensive evaluation and treatment for hypothyroidism, hyperthyroidism, and other thyroid issues.',
      },
      {
        icon: Baby,
        title: 'Medical care during pregnancy',
        description: 'Expert prenatal support and medical monitoring for a healthy pregnancy and safe delivery.',
      },
      {
        icon: Stethoscope,
        title: 'Liver and abdominal diseases',
        description: 'Specialized diagnosis and treatment for liver, stomach, and digestive system disorders.',
      },
      {
        icon: Thermometer,
        title: 'Viral fevers',
        description: 'Effective treatment and management protocols for viral fevers and potential complications.',
      },
      {
        icon: Wind,
        title: 'Lung diseases',
        description: 'Advanced care for respiratory conditions like Pneumonia, Asthma, and Tuberculosis.',
      },
    ],
    te: [
      {
        icon: Activity,
        title: 'మధుమేహం మరియు దాని సమస్యలు',
        description: 'మధుమేహం యొక్క స్క్రీనింగ్ మరియు దానికి సంబంధించిన అన్ని రకాల సమస్యలకు చికిత్స.',
      },
      {
        icon: ShieldCheck,
        title: 'అంటు వ్యాధులు',
        description: 'అన్ని రకాల అంటు వ్యాధులకు వేగవంతమైన రోగ నిర్ధారణ మరియు సమర్థవంతమైన చికిత్స.',
      },
      {
        icon: Droplets,
        title: 'రక్తహీనత (అనీమియా)',
        description: 'రక్తహీనత మరియు ఐరన్ లోపం సమస్యలకు సమగ్ర చికిత్స.',
      },
      {
        icon: Heart,
        title: 'రక్తపోటు (బిపి)',
        description: 'రక్తపోటు మరియు దానికి సంబంధించిన గుండె సమస్యల నివారణ మరియు చికిత్స.',
      },
      {
        icon: Activity,
        title: 'థైరాయిడ్ సమస్యలు',
        description: 'థైరాయిడ్ గ్రంధి సమస్యలకు నిపుణులైన వైద్య చికిత్స.',
      },
      {
        icon: Baby,
        title: 'గర్భధారణ సమయంలో వైద్య చికిత్సలు',
        description: 'గర్భిణీ స్త్రీలకు మరియు శిశువు ఆరోగ్యానికి నిపుణుల పర్యవేక్షణ.',
      },
      {
        icon: Stethoscope,
        title: 'కాలేయ మరియు ఉదర సంబంధ వ్యాధులు',
        description: 'కాలేయ మరియు పొత్తికడుపు సంబంధిత వ్యాధుల నిర్ధారణ మరియు చికిత్స.',
      },
      {
        icon: Thermometer,
        title: 'విష జ్వరాలు',
        description: 'వివిధ రకాల విష జ్వరాలు మరియు వాటి వల్ల కలిగే సమస్యలకు తక్షణ చికిత్స.',
      },
      {
        icon: Wind,
        title: 'ఊపిరితిత్తుల వ్యాధులు',
        description: 'న్యూమోనియా, అస్థమా, క్షయ వంటి ఊపిరితిత్తుల వ్యాధులకు అధునాతన చికిత్స.',
      },
    ],
  };

  const conditions = [
    'BP (Blood Pressure)',
    'Diabetes / Sugar',
    'Thyroid Disorders',
    'Heart Diseases',
    'Typhoid',
    'Malaria',
    'Asthma',
    'Swine Flu',
    'Arthritis',
    'Pneumonia',
    'Tuberculosis',
  ];

  const labTests = [
    'CBP', 'HB%', 'TC', 'DC', 'ESR', 'Platelet Count', 'Blood Group', 'HbA1c',
    'HIV', 'HCV', 'HBsAg', 'VDRL', 'D-Dimer', 'S-Ferritin', 'IL-6', 'LDH',
    'CRP', 'RFT', 'LFT', 'Serum Electrolytes'
  ];

  const additionalTestsContent = {
    en: 'Sugar, Thyroid, Typhoid, Malaria, Dengue, Jaundice, Kidney tests, Liver tests, Cholesterol tests, Urine tests and Stool tests are also available.',
    te: 'షుగర్, థైరాయిడ్, టైఫాయిడ్, మలేరియా, డెంగ్యూ, కామెర్లు, కిడ్నీ, లివర్, కొలెస్ట్రాల్, మూత్రం మరియు మలము పరీక్షలు కూడా చేయబడును.'
  };

  return (
    <div className="min-h-screen pt-20 bg-light">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(31, 78, 121, 0.9), rgba(31, 78, 121, 0.9)), url(https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="text-center px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 drop-shadow-lg"
          >
            Our Medical Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto drop-shadow-md"
          >
            Vayuputra Clinic provides comprehensive healthcare solutions under expert supervision.
          </motion.p>
        </div>
      </section>

      {/* Intro & Doctor Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full font-semibold text-sm">
                Expert Healthcare
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
                Trusted Medical Care in Guntur
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Vayuputra Multi Speciality Hospital/Clinic provides comprehensive healthcare services
                including general medicine, women’s health, diabetes management, and advanced diagnostic testing.
                Our goal is to provide accurate diagnosis and quality treatment under expert medical supervision.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'General Medicine', 'Diabetology', 'Maternity',
                  'Gynaecology', 'Infertility', 'Laparoscopy Centre'
                ].map((spec) => (
                  <div key={spec} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700 font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-primary/5 border-2 border-primary/10 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full"></div>
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-primary text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                  <User className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-primary mb-1">
                    Dr. Y.S. Triveni Reddy
                  </h3>
                  <p className="text-secondary font-semibold text-lg mb-2">
                    M.B.B.S., DNB, OBG
                  </p>
                  <p className="text-gray-600 font-medium leading-tight">
                    General, Infertility & Laparoscopic Surgeon
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="bg-white px-3 py-1 rounded-lg text-sm font-semibold border shadow-sm">Obstetrics</span>
                    <span className="bg-white px-3 py-1 rounded-lg text-sm font-semibold border shadow-sm">Infertility Specialist</span>
                    <span className="bg-white px-3 py-1 rounded-lg text-sm font-semibold border shadow-sm">Laparoscopy</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Toggle */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="font-heading font-bold text-3xl text-primary mb-2">Our Specialized Care</h2>
              <p className="text-gray-600">Explore our range of clinical services tailored for your wellbeing.</p>
            </div>

            {/* Language Toggle */}
            <div className="flex bg-white p-1.5 rounded-xl border-2 border-gray-200 shadow-sm self-start">
              <button
                onClick={() => setLanguage('en')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${language === 'en'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-500 hover:text-primary hover:bg-primary/5'
                  }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('te')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${language === 'te'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-500 hover:text-primary hover:bg-primary/5 font-telugu'
                  }`}
              >
                తెలుగు
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={language}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {medicalServices[language].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-secondary shadow-sm hover:shadow-xl transition-all group relative"
                >
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-white" />
                  </div>
                  <h3 className={`font-heading font-bold text-xl text-primary mb-3 ${language === 'te' ? 'font-telugu' : ''}`}>
                    {service.title}
                  </h3>
                  <p className={`text-gray-600 leading-relaxed ${language === 'te' ? 'font-telugu' : ''}`}>
                    {service.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Conditions We Treat</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-2xl flex items-center space-x-4 hover:bg-white/20 transition-all cursor-default"
              >
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-lg tracking-tight">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic & Laboratory Tests */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center">
                <FlaskConical className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
                Diagnostic & Laboratory Tests
              </h2>
              <p className="text-gray-600 text-lg">
                We provide essential diagnostic laboratory testing to support accurate medical diagnosis and treatment planning.
              </p>

              {/* Home Collection Highlight */}
              <div className="bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-6 flex items-start space-x-4 shadow-sm">
                <div className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Home Sample Collection</h4>
                  <p className="text-gray-700 text-sm mt-1">Request lab sample collection from your doorstep for selected tests.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-light rounded-3xl p-8 border border-gray-200">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {labTests.map((test) => (
                    <div key={test} className="bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-center font-bold text-primary group hover:border-primary transition-colors">
                      <Beaker className="w-4 h-4 text-secondary mr-2 opacity-50 group-hover:opacity-100" />
                      {test}
                    </div>
                  ))}
                </div>

                <div className="bg-white p-6 rounded-2xl border-l-4 border-secondary shadow-sm">
                  <h4 className="font-bold text-primary mb-3 flex items-center">
                    <ChevronRight className="w-5 h-5 text-secondary mr-1" />
                    {language === 'en' ? 'Additional Tests Available' : 'అదనపు పరీక్షలు'}
                  </h4>
                  <p className={`text-gray-700 leading-relaxed font-medium ${language === 'te' ? 'font-telugu' : ''}`}>
                    {additionalTestsContent[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Quality Healthcare is Just a Call Away
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Need an expert consultation or a specific diagnostic test? Our dedicated staff is ready to assist you round the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:9515379249"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-secondary text-lg font-bold rounded-2xl hover:bg-primary hover:text-white transition-all shadow-xl hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Call Clinic
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-bold rounded-2xl hover:bg-white hover:text-primary transition-all shadow-xl hover:-translate-y-1 border-2 border-primary"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Book Consultation
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-2xl hover:bg-white hover:text-secondary transition-all shadow-lg hover:-translate-y-1"
            >
              <FlaskConical className="w-5 h-5 mr-3" />
              Book Lab Test
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

