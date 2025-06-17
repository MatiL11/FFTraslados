import HeroSection from '../../components/Hero'
import ServicesSection from '../../components/Services'
import VehiclesSection from '../../components/Vehicles'
import TestimonialsSection from '../../components/Clients'
import ContactSection from '../../components/Contact'
import Footer from '../../components/Footer'

export default function HomeSection() {
    const handleNav = (id) => {
        setActive(id)
        const section = document.getElementById(id)
        if (section) {
          section.scrollIntoView()
        }
    }
    
    return (
        <main className="flex-grow">
            {/* Secciones */}
            <section id="home">
            <HeroSection onNav={handleNav} />
            </section>
            <section id="servicios">
            <ServicesSection onNav={handleNav} />
            </section>
            <section id="vehiculos">
            <VehiclesSection onNav={handleNav}/>
            </section>
            <section id="testimonios">
            <TestimonialsSection onNav={handleNav} />
            </section>
            <section id="contacto">
            <ContactSection onNav={handleNav} />
            </section>
            <Footer />
        </main>
    
    )
}