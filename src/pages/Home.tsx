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
        <section className="container mx-auto px-4 py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <img 
              src={heroPets} 
              alt="Cachorro e gato felizes e bem cuidados no Mundo Pet" 
              className="w-full h-96 object-cover rounded-3xl pet-shadow mb-8"
            />
            
            <h2 className="text-5xl font-bold text-pet-blue mb-6">
              Bem-vindo(a) ao Mundo Pet!
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Onde o cuidado e o carinho com o seu melhor amigo são a nossa prioridade. 
              Oferecemos serviços de banho, tosa e cuidados veterinários com todo amor que seu pet merece.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/banho-tosa">
                <Button variant="hero" size="xl" className="w-full md:w-auto">
                  🛁 Agendar Banho & Tosa
                </Button>
              </Link>
              
              <Link to="/veterinario">
                <Button variant="hero" size="xl" className="w-full md:w-auto">
                  🩺 Agendar Consulta Veterinária
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="bg-pet-blue-light p-8 rounded-2xl mb-6">
                  <h3 className="text-2xl font-bold text-pet-blue mb-4">Banho & Tosa</h3>
                  <p className="text-muted-foreground">
                    Deixe seu pet ainda mais bonito e cheiroso com nossos serviços profissionais 
                    de banho e tosa. Cuidado especializado para cada raça e tipo de pelo.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-pet-blue-light p-8 rounded-2xl mb-6">
                  <h3 className="text-2xl font-bold text-pet-blue mb-4">Cuidados Veterinários</h3>
                  <p className="text-muted-foreground">
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