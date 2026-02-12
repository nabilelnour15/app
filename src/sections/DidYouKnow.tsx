import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, RefreshCw } from 'lucide-react';

const facts = [
  {
    id: 1,
    question: "Did you know about the ancient library?",
    answer: "The Great Library of Alexandria was the largest in the ancient world, housing up to 400,000 scrolls and attracting scholars from everywhere.",
    icon: "📚"
  },
  {
    id: 2,
    question: "Who founded the city?",
    answer: "Alexander the Great founded Alexandria in 331 BC, but he never saw the city completed. He died before its major buildings were finished.",
    icon: "🏛️"
  },
  {
    id: 3,
    question: "What about the Lighthouse?",
    answer: "The Lighthouse of Alexandria (Pharos) was one of the Seven Wonders of the Ancient World, standing over 100 meters tall.",
    icon: "💡"
  }
];

export default function DidYouKnow() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleFlip = (id: number) => {
    if (flippedCards.includes(id)) {
      setFlippedCards(flippedCards.filter(cardId => cardId !== id));
    } else {
      setFlippedCards([...flippedCards, id]);
    }
  };

  return (
    <section className="alex-section bg-gradient-to-b from-white to-[#f8fafc] relative overflow-hidden">
      <div className="alex-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="alex-section-tag mb-4 inline-block">
            Fun Facts
          </span>
          <h2 className="font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d1623] mb-4">
            Did You Know?
          </h2>
          <p className="text-[#5d6c7b] text-lg">
            Discover fascinating stories and secrets from Alexandria's rich history.
            Click a card to reveal the answer!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facts.map((fact) => (
            <div 
              key={fact.id} 
              className="relative h-[300px] perspective-1000 group cursor-pointer"
              onClick={() => handleFlip(fact.id)}
            >
              <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-500"
                animate={{ rotateY: flippedCards.includes(fact.id) ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center border-2 border-transparent hover:border-[#0068c8]/30 transition-colors">
                  <div className="w-16 h-16 bg-[#e6f1fc] rounded-full flex items-center justify-center mb-6 text-4xl">
                    {fact.icon}
                  </div>
                  <h3 className="font-['Montserrat'] text-xl font-bold text-[#0d1623] mb-4">
                    {fact.question}
                  </h3>
                  <div className="mt-auto flex items-center text-[#0068c8] text-sm font-semibold">
                    <span>Tap to Reveal</span>
                    <RefreshCw className="w-4 h-4 ml-2" />
                  </div>
                </div>

                {/* Back of Card */}
                <div 
                  className="absolute inset-0 backface-hidden bg-[#0068c8] rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center rotate-y-180 text-white"
                >
                  <Lightbulb className="w-12 h-12 mb-4 text-yellow-300" />
                  <p className="text-lg leading-relaxed font-medium">
                    {fact.answer}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
