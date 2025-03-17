
import { AudioWaveform, MessageSquare, FilePlus, RotateCcw, Users, Lock } from "lucide-react";

const features = [
  {
    name: "High Accuracy Transcription",
    description: "Industry-leading precision with advanced AI that understands context, accents, and specialized terminology.",
    icon: AudioWaveform,
  },
  {
    name: "Real-time Processing",
    description: "See your words transform into text instantly as you speak, with minimal latency.",
    icon: MessageSquare,
  },
  {
    name: "Smart Formatting",
    description: "Automatic punctuation, capitalization, and paragraph breaks for perfectly formatted documents.",
    icon: FilePlus,
  },
  {
    name: "Unlimited Edits",
    description: "Easily review and edit your transcriptions with our intuitive interface.",
    icon: RotateCcw,
  },
  {
    name: "Multi-speaker Recognition",
    description: "Automatically identify and label different speakers in conversations and meetings.",
    icon: Users,
  },
  {
    name: "Secure & Private",
    description: "Enterprise-grade security and privacy. Your data is encrypted and never shared.",
    icon: Lock,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features for Perfect Transcription
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Talkify combines cutting-edge AI with thoughtful design to deliver the best speech-to-text experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="group relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-fade-in">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 group-hover:bg-indigo-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-7 text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
