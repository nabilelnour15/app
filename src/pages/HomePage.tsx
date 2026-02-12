import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Features from '../sections/Features';
import Visit from '../sections/Visit';
import Invest from '../sections/Invest';
import Explore from '../sections/Explore';
import News from '../sections/News';
import DidYouKnow from '../sections/DidYouKnow';
import CTA from '../sections/CTA';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <Services isTeaser />
                <Features />
                <Explore />
                <Visit isTeaser />
                <Invest isTeaser />
                <News isTeaser />
                <DidYouKnow />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
