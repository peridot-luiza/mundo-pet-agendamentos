import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";

interface AppointmentData {
  serviceType: string;
  ownerName: string;
  phone: string;
  email: string;
  petName: string;
  species: string;
  breed?: string;
  age?: string;
  weight?: string;
  service?: string;
  reason?: string;
  observations?: string;
  date: string;
  time: string;
}

const Confirmacao = () => {
  const [appointmentData, setAppointmentData] = useState<AppointmentData | null>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("appointmentData");
    if (data) {
      setAppointmentData(JSON.parse(data));
    }
  }, []);

  if (!appointmentData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pet-blue-light to-white">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-md mx-auto">
            <CardContent className="text-center p-8">
              <p className="text-muted-foreground mb-4">Nenhum agendamento encontrado.</p>
              <Link to="/">
                <Button variant="pet">Voltar ao Início</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getSpeciesText = (species: string) => {
    return species === 'dog' ? 'Cão' : species === 'cat' ? 'Gato' : species;
  };

  const getServiceText = (service: string) => {
    const serviceMap: { [key: string]: string } = {
      'banho': 'Banho',
      'tosa': 'Tosa',
      'banho-tosa': 'Banho & Tosa Completo'
    };
    return serviceMap[service] || service;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pet-blue-light to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-pet-blue mb-4">
              Confirmação e Pagamento
            </h1>
            <p className="text-lg text-muted-foreground">
              Revise os dados do seu agendamento e finalize o pagamento
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Appointment Summary */}
            <Card className="pet-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-pet-blue">Resumo do Agendamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-pet-blue">Serviço</h4>
                  <p className="text-foreground">{appointmentData.serviceType}</p>
                  {appointmentData.service && (
                    <p className="text-sm text-muted-foreground">{getServiceText(appointmentData.service)}</p>
                  )}
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-pet-blue">Dados do Dono</h4>
                  <p className="text-foreground">{appointmentData.ownerName}</p>
                  <p className="text-sm text-muted-foreground">{appointmentData.phone}</p>
                  <p className="text-sm text-muted-foreground">{appointmentData.email}</p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-pet-blue">Dados do Pet</h4>
                  <p className="text-foreground">{appointmentData.petName}</p>
                  <p className="text-sm text-muted-foreground">
                    {getSpeciesText(appointmentData.species)}
                    {appointmentData.breed && ` • ${appointmentData.breed}`}
                    {appointmentData.age && ` • ${appointmentData.age}`}
                    {appointmentData.weight && ` • ${appointmentData.weight}`}
                  </p>
                </div>

                {appointmentData.reason && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-pet-blue">Motivo da Consulta</h4>
                      <p className="text-foreground">{appointmentData.reason}</p>
                    </div>
                  </>
                )}

                {appointmentData.observations && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-pet-blue">Observações</h4>
                      <p className="text-foreground">{appointmentData.observations}</p>
                    </div>
                  </>
                )}

                <Separator />

                <div>
                  <h4 className="font-semibold text-pet-blue">Data e Horário</h4>
                  <p className="text-foreground">{formatDate(appointmentData.date)}</p>
                  <p className="text-sm text-muted-foreground">{appointmentData.time}</p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="pet-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-pet-blue">Instruções de Pagamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground">
                  Para finalizar seu agendamento, realize o pagamento via Pix ou Depósito/Transferência bancária.
                </p>

                {/* PIX Payment */}
                <div className="bg-pet-blue-light p-4 rounded-xl">
                  <h4 className="font-semibold text-pet-blue mb-3">💳 Pagamento via PIX</h4>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">Chave PIX:</span>
                      <p className="text-sm bg-white p-2 rounded border font-mono">
                        mundopet@email.com
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded text-center">
                      <div className="w-32 h-32 bg-gray-200 rounded mx-auto flex items-center justify-center">
                        <span className="text-xs text-gray-500">QR Code PIX</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Escaneie o código ou use a chave PIX acima
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bank Transfer */}
                <div className="bg-pet-blue-light p-4 rounded-xl">
                  <h4 className="font-semibold text-pet-blue mb-3">🏦 Depósito/Transferência</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Banco:</span> Banco do Brasil
                    </div>
                    <div>
                      <span className="font-medium">Agência:</span> 1234-5
                    </div>
                    <div>
                      <span className="font-medium">Conta Corrente:</span> 12345-6
                    </div>
                    <div>
                      <span className="font-medium">Favorecido:</span> Mundo Pet Ltda
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Após realizar o pagamento, seu agendamento estará confirmado. 
                    Entraremos em contato para confirmar os detalhes.
                  </p>
                  
                  <Link to="/">
                    <Button variant="hero" size="lg" className="w-full">
                      ✅ Agendamento Confirmado
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Confirmacao;