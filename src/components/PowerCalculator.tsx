import { useState, useMemo } from 'react';
import { Zap, Calculator, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/whatsapp';

interface Equipment {
  id: string;
  name: string;
  power: number;
  icon: string;
}

const equipments: Equipment[] = [
  { id: 'ac', name: 'Ar Condicionado', power: 50, icon: '❄️' },
  { id: 'lighting', name: 'Iluminação de Evento', power: 30, icon: '💡' },
  { id: 'welder', name: 'Máquina de Solda', power: 80, icon: '🔥' },
  { id: 'compressor', name: 'Compressor de Ar', power: 60, icon: '🌬️' },
  { id: 'pump', name: 'Bomba d\'Água', power: 40, icon: '💧' },
  { id: 'tools', name: 'Ferramentas Elétricas', power: 25, icon: '🔧' },
  { id: 'refrigeration', name: 'Refrigeração', power: 70, icon: '🧊' },
  { id: 'computers', name: 'Computadores/Servidores', power: 20, icon: '💻' },
];

export const PowerCalculator: React.FC = () => {
  const [selectedEquipments, setSelectedEquipments] = useState<string[]>([]);

  const totalPower = useMemo(() => {
    return selectedEquipments.reduce((total, id) => {
      const equipment = equipments.find(eq => eq.id === id);
      return total + (equipment?.power || 0);
    }, 0);
  }, [selectedEquipments]);

  const estimatedKVA = Math.ceil(totalPower * 1.25); // Margem de segurança de 25%

  const toggleEquipment = (id: string) => {
    setSelectedEquipments(prev =>
      prev.includes(id)
        ? prev.filter(eqId => eqId !== id)
        : [...prev, id]
    );
  };

  const handleWhatsAppClick = () => {
    const selectedNames = selectedEquipments
      .map(id => equipments.find(eq => eq.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const message = `Olá! Calculei minha necessidade de energia no site e preciso de um gerador de aproximadamente ${estimatedKVA} kVA.\n\nEquipamentos selecionados: ${selectedNames}\n\nPoderia me ajudar com um orçamento?`;

    const link = buildWhatsAppLink(message);
    window.open(link, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-bg to-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-volt/10 border border-volt/20 mb-4">
              <Calculator size={16} className="text-volt" />
              <span className="text-volt text-sm font-medium">Calculadora de Potência</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Descubra o Gerador Ideal para Sua Necessidade
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
              Selecione os equipamentos que você precisa alimentar e calcularemos automaticamente a potência necessária em kVA.
            </p>
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {equipments.map((equipment) => {
              const isSelected = selectedEquipments.includes(equipment.id);
              return (
                <button
                  key={equipment.id}
                  type="button"
                  onClick={() => toggleEquipment(equipment.id)}
                  className={`
                    relative p-4 sm:p-6 rounded-xl border-2 transition-all duration-200
                    min-h-[100px] flex flex-col items-center justify-center gap-2
                    ${isSelected
                      ? 'border-volt bg-volt/10 shadow-lg shadow-volt/20'
                      : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                    }
                  `}
                  aria-pressed={isSelected}
                >
                  <span className="text-3xl sm:text-4xl">{equipment.icon}</span>
                  <span className="text-sm sm:text-base font-medium text-white text-center">
                    {equipment.name}
                  </span>
                  <span className="text-xs text-white/60">
                    {equipment.power} kVA
                  </span>
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-volt flex items-center justify-center">
                      <svg className="w-4 h-4 text-bg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Result Card */}
          {selectedEquipments.length > 0 && (
            <div className="bg-gradient-to-br from-volt/10 to-volt-dark/10 border-2 border-volt/30 rounded-2xl p-6 sm:p-8 mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <p className="text-white/70 text-sm sm:text-base mb-2">
                    Potência estimada necessária:
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-volt">
                      {estimatedKVA}
                    </span>
                    <span className="text-xl sm:text-2xl text-white/70">kVA</span>
                  </div>
                  <p className="text-white/60 text-xs sm:text-sm mt-2">
                    *Inclui margem de segurança de 25%
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="
                    gradient-btn w-full sm:w-auto
                    px-6 sm:px-8 py-4
                    rounded-full
                    text-white font-semibold text-base sm:text-lg
                    flex items-center justify-center gap-3
                    transition-all duration-200 hover:scale-105
                    min-h-[44px]
                  "
                >
                  <MessageCircle size={20} />
                  <span>Solicitar Orçamento para {estimatedKVA} kVA no WhatsApp</span>
                </button>
              </div>
            </div>
          )}

          {/* Helper Text */}
          {selectedEquipments.length === 0 && (
            <div className="text-center py-8">
              <Zap className="text-volt/50 mx-auto mb-3" size={32} />
              <p className="text-white/60 text-sm sm:text-base">
                Selecione pelo menos um equipamento para calcular a potência necessária
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
