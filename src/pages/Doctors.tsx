import { GraduationCap, Award, Calendar } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Rajesh Kumar',
      specialization: 'Gynaecologist & Obstetrician',
      qualification: 'MBBS, MD (OBG)',
      experience: '15+ Years',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['High-Risk Pregnancy', 'Laparoscopic Surgery', 'Infertility Treatment'],
    },
    {
      name: 'Dr. Priya Sharma',
      specialization: 'Gastroenterologist',
      qualification: 'MBBS, MD, DM (Gastro)',
      experience: '12+ Years',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Endoscopy', 'Liver Diseases', 'IBS Treatment'],
    },
    {
      name: 'Dr. Venkat Reddy',
      specialization: 'General Physician & Diabetologist',
      qualification: 'MBBS, MD (General Medicine)',
      experience: '10+ Years',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Diabetes Management', 'Hypertension', 'Preventive Care'],
    },
    {
      name: 'Dr. Lakshmi Devi',
      specialization: 'Infertility Specialist',
      qualification: 'MBBS, MS (OBG), Fellowship in IVF',
      experience: '14+ Years',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['IVF', 'IUI', 'PCOS Treatment'],
    },
    {
      name: 'Dr. Anil Kumar',
      specialization: 'Laparoscopic Surgeon',
      qualification: 'MBBS, MS (Surgery)',
      experience: '13+ Years',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Laparoscopic Surgery', 'Hernia Repair', 'Gallbladder Surgery'],
    },
    {
      name: 'Dr. Sowmya Reddy',
      specialization: 'Obstetrician',
      qualification: 'MBBS, MD (OBG)',
      experience: '11+ Years',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Normal Delivery', 'C-Section', 'Prenatal Care'],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(31, 78, 121, 0.85), rgba(31, 78, 121, 0.85)), url(https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Our Expert Doctors
          </h1>
          <p className="text-xl text-gray-100">
            Experienced Healthcare Professionals Dedicated to Your Wellbeing
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team of highly qualified and experienced doctors is committed to providing
              exceptional medical care. Each specialist brings years of expertise and a
              patient-centered approach to healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-primary mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-secondary font-medium mb-4">{doctor.specialization}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <GraduationCap className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      <span>{doctor.qualification}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      <span>{doctor.experience} Experience</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-start mb-2">
                      <Award className="w-4 h-4 mr-2 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-gray-700 mb-1">Expertise:</p>
                        <div className="flex flex-wrap gap-2">
                          {doctor.expertise.map((item, i) => (
                            <span
                              key={i}
                              className="text-xs bg-light text-primary px-2 py-1 rounded"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
            Book a Consultation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Schedule an appointment with our experienced doctors and receive personalized medical
            care tailored to your needs.
          </p>
          <a
            href="tel:9515379249"
            className="inline-flex items-center px-8 py-4 bg-secondary text-white text-lg font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
          >
            Call Now: 9515379249
          </a>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
