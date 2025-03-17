
import { Mic, Laptop, FileText, Share2 } from "lucide-react";

const steps = [
  {
    name: "Speak Naturally",
    description: "Just start talking in your natural voice. No need to speak slowly or clearly — our AI adapts to you.",
    icon: Mic,
  },
  {
    name: "Watch It Transform",
    description: "See your words appear on screen in real-time with our lightning-fast processing.",
    icon: Laptop,
  },
  {
    name: "Review & Edit",
    description: "Make quick adjustments to your transcript with our intuitive editor.",
    icon: FileText,
  },
  {
    name: "Export & Share",
    description: "Download your transcript in multiple formats or share it directly with others.",
    icon: Share2,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How Talkify Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From speech to perfect text in seconds — it's that simple.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
            {steps.map((step, index) => (
              <div key={step.name} className="text-center">
                <div className="relative mb-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                    <step.icon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 left-full -ml-3 hidden h-0.5 w-full sm:block bg-gradient-to-r from-indigo-500/60 to-indigo-500/10"></div>
                  )}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">{step.name}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
