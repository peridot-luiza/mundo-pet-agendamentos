import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import vetCare from "@/assets/vet-care.jpg";

const Veterinario = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    email: "",
    petName: "",
    species: "",
    breed: "",
    age: "",
    reason: "",
    date: "",
    time: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in sessionStorage to pass to confirmation page
    sessionStorage.setItem("appointmentData", JSON.stringify({
      ...formData,
      serviceType: "Consulta Veterinária"
    }));
    navigate("/confirmacao");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pet-blue-light to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-pet-blue mb-6">
              Agendamento de Consulta Veterinária
            </h1>
            
            <img 
              src={vetCare} 
              alt="Veterinário cuidando de pet com carinho" 
              className="w-full h-64 object-cover rounded-2xl pet-shadow mb-6"
            />
            
            <p className="text-lg text-muted-foreground">
              Cuidamos da saúde do seu melhor amigo com todo carinho e profissionalismo.
            </p>
          </div>

          <Card className="pet-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-pet-blue">Dados para Consulta</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Owner Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-pet-blue">Informações do Dono</h3>
                  <div className="grid md:grid-cols-2 gap-4">
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
                  <h3 className="text-lg font-semibold text-pet-blue">Informações do Pet</h3>
                  <div className="grid md:grid-cols-2 gap-4">
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
                  
                  <div className="grid md:grid-cols-2 gap-4">
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
                  </div>
                </div>

                {/* Reason for Consultation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-pet-blue">Motivo da Consulta</h3>
                  <div>
                    <Label htmlFor="reason">Descreva o motivo da consulta *</Label>
                    <Textarea 
                      id="reason"
                      required
                      placeholder="Ex: vacinação, check-up anual, consulta de rotina, sintomas de dor..."
                      value={formData.reason}
                      onChange={(e) => handleInputChange("reason", e.target.value)}
                      className="transition-smooth min-h-[100px]"
                    />
                  </div>
                </div>

                {/* Date and Time */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-pet-blue">Data e Horário</h3>
                  <div className="grid md:grid-cols-2 gap-4">
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
                          <SelectItem value="08:30">08:30</SelectItem>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="09:30">09:30</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="10:30">10:30</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="14:30">14:30</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="15:30">15:30</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="16:30">16:30</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
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

export default Veterinario;