import { AMENITIES } from "@/lib/constants";

export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            О La Villa Pine
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Откройте для себя два исключительных гостевых дома в стиле лофт, где
            современный дизайн встречается с природным спокойствием. Каждый дом
            имеет дизайнерский ремонт, частные сауны и подогреваемые бассейны,
            все это на фоне чистого леса, где белки и птицы создают симфонию
            природы.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {AMENITIES.map((amenity, index) => (
            <div
              key={index}
              className="bg-neutral p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
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
              src="/images/amenities/interior.jpg"
              alt="Modern loft interior with industrial design"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Дизайнерские интерьеры</h3>
            <p className="text-lg text-gray-600 mb-6">
              Каждый гостевой дом имеет тщательно спроектированные интерьеры,
              которые сочетают индустриальную эстетику лофта с современным
              комфортом. Высокие потолки, открытые элементы и современная мебель
              создают атмосферу изысканного расслабления.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                Открытые жилые пространства с высокими потолками
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                Премиальная мебель и современная техника
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                Окна от пола до потолка с видом на лес
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                Полностью оборудованная кухня и столовая
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
