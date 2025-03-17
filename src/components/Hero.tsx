
import { Button } from "@/components/ui/button";
import { Mic, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block mb-2">Turn Your Speech Into</span>
            <span className="block text-indigo-600">Perfect Text, Instantly</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Advanced AI-powered speech recognition that transcribes your words with unmatched accuracy.
            Create documents, notes, and content hands-free — in real-time.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className="px-6 py-6 text-lg rounded-lg">
              Try It Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="px-6 py-6 text-lg rounded-lg">
              Watch Demo
            </Button>
          </div>
          
          {/* Waveform animation */}
          <div className="mt-16 flex justify-center">
            <div className="waveform">
              <div className="wave animate-wave-1"></div>
              <div className="wave animate-wave-2"></div>
              <div className="wave animate-wave-3"></div>
              <div className="wave animate-wave-4"></div>
              <div className="wave animate-wave-5"></div>
              <div className="wave animate-wave-4"></div>
              <div className="wave animate-wave-3"></div>
              <div className="wave animate-wave-2"></div>
              <div className="wave animate-wave-1"></div>
            </div>
          </div>
        </div>
        
        {/* Hero image or UI mockup */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-xl bg-gray-50/70 shadow-xl border border-gray-100 p-4 overflow-hidden">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Meeting Transcript</h3>
                <Mic className="h-5 w-5 text-indigo-500" />
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700"><span className="font-medium">Sarah:</span> I think we should focus on improving the user experience first.</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700"><span className="font-medium">John:</span> Good point. Our analytics show that users struggle with the navigation menu.</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700"><span className="font-medium">Sarah:</span> Let's simplify it and maybe add a tutorial for first-time users.</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg animate-pulse-slow">
                  <p className="text-sm text-gray-700"><span className="font-medium">John:</span> I like that idea. We could implement it by next sprint if...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
