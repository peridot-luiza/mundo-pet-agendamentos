import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import heroPets from "@/assets/hero-pets.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pet-blue-light to-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8 md:py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <img 
              src={heroPets} 
              alt="Cachorro e gato felizes e bem cuidados no Mundo Pet" 
              className="w-full h-64 md:h-96 object-cover rounded-2xl md:rounded-3xl pet-shadow mb-6 md:mb-8"
            />
            
            <h2 className="text-3xl md:text-5xl font-bold text-pet-blue mb-4 md:mb-6 px-4">
              Bem-vindo(a) ao Mundo Pet!
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              Onde o cuidado e o carinho com o seu melhor amigo são a nossa prioridade. 
              Oferecemos serviços de banho, tosa e cuidados veterinários com todo amor que seu pet merece.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center px-4">
              <Link to="/banho-tosa" className="w-full md:w-auto">
                <Button variant="hero" size="xl" className="w-full md:w-auto text-sm md:text-lg">
                  🛁 Agendar Banho & Tosa
                </Button>
              </Link>
              
              <Link to="/veterinario" className="w-full md:w-auto">
                <Button variant="hero" size="xl" className="w-full md:w-auto text-sm md:text-lg">
                  🩺 Agendar Consulta Veterinária
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="text-center">
                <div className="bg-pet-blue-light p-6 md:p-8 rounded-2xl mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-pet-blue mb-4">Banho & Tosa</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Deixe seu pet ainda mais bonito e cheiroso com nossos serviços profissionais 
                    de banho e tosa. Cuidado especializado para cada raça e tipo de pelo.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-pet-blue-light p-6 md:p-8 rounded-2xl mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-pet-blue mb-4">Cuidados Veterinários</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Consultas, vacinação, check-ups e cuidados médicos com profissionais 
                    experientes. A saúde do seu pet em primeiro lugar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;