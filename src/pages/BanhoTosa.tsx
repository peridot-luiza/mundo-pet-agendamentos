import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import groomingPets from "@/assets/grooming-pets.jpg";

const BanhoTosa = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    email: "",
    petName: "",
    species: "",
    breed: "",
    age: "",
    weight: "",
    service: "",
    observations: "",
    date: "",
    time: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in sessionStorage to pass to confirmation page
    sessionStorage.setItem("appointmentData", JSON.stringify({
      ...formData,
      serviceType: "Banho & Tosa"
    }));
    navigate("/confirmacao");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pet-blue-light to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-pet-blue mb-4 md:mb-6">
              Agendamento de Banho & Tosa
            </h1>
            
            <img 
              src={groomingPets} 
              alt="Pets bem cuidados após banho e tosa" 
              className="w-full h-48 md:h-64 object-cover rounded-xl md:rounded-2xl pet-shadow mb-4 md:mb-6"
            />
            
            <p className="text-base md:text-lg text-muted-foreground px-4">
              Deixe seu pet ainda mais bonito e cheiroso! Preencha o formulário abaixo para agendar.
            </p>
          </div>

          <Card className="pet-shadow">
            <CardHeader className="px-4 md:px-6">
              <CardTitle className="text-xl md:text-2xl text-pet-blue">Dados para Agendamento</CardTitle>
            </CardHeader>
            <CardContent className="px-4 md:px-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Owner Information */}
                <div className="space-y-4">
                  <h3 className="text-base md:text-lg font-semibold text-pet-blue">Informações do Dono</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ownerName">Nome Completo *</Label>
                      <Input 
                        id="ownerName"
                        required
                        value={formData.ownerName}
                        onChange={(e) => handleInputChange("ownerName", e.target.value)}
                        className="transition-smooth"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="transition-smooth"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input 
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="transition-smooth"
                    />
                  </div>
                </div>

                {/* Pet Information */}
                <div className="space-y-4">
                  <h3 className="text-base md:text-lg font-semibold text-pet-blue">Informações do Pet</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="petName">Nome do Pet *</Label>
                      <Input 
                        id="petName"
                        required
                        value={formData.petName}
                        onChange={(e) => handleInputChange("petName", e.target.value)}
                        className="transition-smooth"
                      />
                    </div>
                    <div>
                      <Label htmlFor="species">Espécie *</Label>
                      <Select value={formData.species} onValueChange={(value) => handleInputChange("species", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a espécie" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dog">Cão</SelectItem>
                          <SelectItem value="cat">Gato</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="breed">Raça</Label>
                      <Input 
                        id="breed"
                        value={formData.breed}
                        onChange={(e) => handleInputChange("breed", e.target.value)}
                        className="transition-smooth"
                      />
                    </div>
                    <div>
                      <Label htmlFor="age">Idade Aproximada</Label>
                      <Input 
                        id="age"
                        placeholder="Ex: 2 anos"
                        value={formData.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                        className="transition-smooth"
                      />
                    </div>
                    <div>
                      <Label htmlFor="weight">Peso Aproximado</Label>
                      <Input 
                        id="weight"
                        placeholder="Ex: 15kg"
                        value={formData.weight}
                        onChange={(e) => handleInputChange("weight", e.target.value)}
                        className="transition-smooth"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-4">
                  <h3 className="text-base md:text-lg font-semibold text-pet-blue">Serviço Desejado</h3>
                  <div>
                    <Label htmlFor="service">Tipo de Serviço *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="banho">Banho</SelectItem>
                        <SelectItem value="tosa">Tosa</SelectItem>
                        <SelectItem value="banho-tosa">Banho & Tosa Completo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Date and Time */}
                <div className="space-y-4">
                  <h3 className="text-base md:text-lg font-semibold text-pet-blue">Data e Horário</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Data *</Label>
                      <Input 
                        id="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className="transition-smooth"
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Horário *</Label>
                      <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o horário" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="08:00">08:00</SelectItem>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Observations */}
                <div>
                  <Label htmlFor="observations">Observações Adicionais</Label>
                  <Textarea 
                    id="observations"
                    placeholder="Ex: medo de secador, alergia a shampoo..."
                    value={formData.observations}
                    onChange={(e) => handleInputChange("observations", e.target.value)}
                    className="transition-smooth"
                  />
                </div>

                <Button type="submit" variant="pet" size="lg" className="w-full">
                  Continuar para Confirmação
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BanhoTosa;