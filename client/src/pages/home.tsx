import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import CarouselHero from "@/components/ui/carousel-hero";
import { HERO_IMAGES, SITE_CONFIG } from "@/lib/constants";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <CarouselHero images={HERO_IMAGES} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to <span className="text-accent">{SITE_CONFIG.name}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Experience luxury loft-style guest houses nestled in pristine forest surroundings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg">
                  Book Your Stay
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Why Choose {SITE_CONFIG.name}</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Two exceptional loft-style guest houses where modern design meets natural tranquility
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-accent text-4xl mb-4">
                <i className="fas fa-home"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Modern Loft Design</h3>
              <p className="text-gray-600">
                Designer renovations with industrial elements and contemporary comfort
              </p>
            </div>
            
            <div className="bg-neutral p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-accent text-4xl mb-4">
                <i className="fas fa-swimming-pool"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Heated Pools & Sauna</h3>
              <p className="text-gray-600">
                Private heated pools and saunas for year-round relaxation
              </p>
            </div>
            
            <div className="bg-neutral p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-accent text-4xl mb-4">
                <i className="fas fa-tree"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Forest Surroundings</h3>
              <p className="text-gray-600">
                Pristine forest location with wildlife and natural stream
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/about">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Discover More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
