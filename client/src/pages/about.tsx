import { AMENITIES } from "@/lib/constants";

export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About La Villa Pine</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover two exceptional loft-style guest houses where modern design meets natural tranquility. 
            Each house features designer renovations, private saunas, and heated pools, all set against 
            the backdrop of a pristine forest where squirrels and birds create a symphony of nature.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {AMENITIES.map((amenity, index) => (
            <div key={index} className="bg-neutral p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-accent text-4xl mb-4">
                <i className={amenity.icon}></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern loft interior with industrial design" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Designer Interiors</h3>
            <p className="text-lg text-gray-600 mb-6">
              Each guest house features meticulously designed interiors that blend industrial 
              loft aesthetics with modern comfort. High ceilings, exposed elements, and 
              contemporary furnishings create an atmosphere of sophisticated relaxation.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                Open-plan living spaces with high ceilings
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                Premium furnishings and modern appliances
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                Floor-to-ceiling windows with forest views
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                Fully equipped kitchen and dining areas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
