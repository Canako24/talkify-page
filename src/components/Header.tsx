
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Mic className="h-6 w-6 text-indigo-500 mr-2" />
          <span className="text-xl font-bold text-gray-900">Talkify</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors">How It Works</a>
          <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
          <Button variant="outline" className="ml-4">Sign In</Button>
          <Button>Get Started</Button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 pb-4 space-y-4">
          <a 
            href="#features" 
            className="block text-gray-600 hover:text-indigo-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="block text-gray-600 hover:text-indigo-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#pricing" 
            className="block text-gray-600 hover:text-indigo-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <div className="flex flex-col space-y-2 pt-2">
            <Button variant="outline" className="w-full justify-center">Sign In</Button>
            <Button className="w-full justify-center">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
