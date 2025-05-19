
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSalesDialog from '../components/ContactSalesDialog';
import LearnMoreSection from '../components/LearnMoreSection';

const HomePage = () => {
  const [isSalesDialogOpen, setIsSalesDialogOpen] = useState(false);

  const scrollToLearnMore = () => {
    const learnMoreSection = document.getElementById('learn-more');
    if (learnMoreSection) {
      learnMoreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pt-16 pb-10">
      {/* Hero Section */}
      <section className="art-bg min-h-[80vh] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-20 z-20 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 bg-black/5 rounded-full">
            <div className="w-2 h-2 bg-fin-orange rounded-full mr-2"></div>
            <span className="text-sm font-medium">AI Agent</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
            Fin handles all your frontline support with human-quality service
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Transform your customer experience with our AI-powered support platform that delivers instant, accurate responses with a human touch.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="#learn-more" className="classic-button flex items-center gap-2" onClick={() => {
              const element = document.getElementById('learn-more');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Try Fin AI
              <ArrowRight size={16} />
            </Link>
            <button 
              onClick={scrollToLearnMore}
              className="px-5 py-2.5 border border-gray-200 hover:border-gray-300 rounded-full transition-all"
            >
              Learn more
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <img 
            src="https://imageio.forbes.com/specials-images/imageserve/66dfc76d1200d731675094e9/Businessman-touching-the-brain-working-of-Artificial-Intelligence--AI---Automation-/960x0.jpg?format=jpg&width=960" 
            alt="Serene classical landscape" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24 px-6">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Exceptional AI-powered service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fin's technology delivers human-quality customer support across all your channels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="p-6 bg-fin-light-beige rounded-2xl animate-fade-in" style={{animationDelay: "0.1s"}}>
              <h3 className="font-serif text-xl font-medium mb-3">Knowledge</h3>
              <p className="text-gray-600">
                Fin uses all of your support knowledge to generate accurate answers.
              </p>
            </div>
            <div className="p-6 bg-fin-light-beige rounded-2xl animate-fade-in" style={{animationDelay: "0.2s"}}>
              <h3 className="font-serif text-xl font-medium mb-3">Behaviour</h3>
              <p className="text-gray-600">
                Fin speaks in your tone of voice, and follows your policies and procedures.
              </p>
            </div>
            <div className="p-6 bg-fin-light-beige rounded-2xl animate-fade-in" style={{animationDelay: "0.3s"}}>
              <h3 className="font-serif text-xl font-medium mb-3">Actions</h3>
              <p className="text-gray-600">
                Fin personalizes every interaction and takes actions on behalf of customers.
              </p>
            </div>
            <div className="p-6 bg-fin-light-beige rounded-2xl animate-fade-in" style={{animationDelay: "0.4s"}}>
              <h3 className="font-serif text-xl font-medium mb-3">Insights</h3>
              <p className="text-gray-600">
                AI-generated insights give you full visibility and trust in Fin's performance.
              </p>
            </div>
          </div>

          <div className="art-bg rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-8 md:p-12 z-20">
                <div className="inline-flex items-center px-3 py-1.5 mb-6 bg-black/5 rounded-full">
                  <div className="w-2 h-2 bg-fin-orange rounded-full mr-2"></div>
                  <span className="text-sm font-medium">For customers</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                  Instant service, exceptional experiences.
                </h2>
                <ul className="feature-list mb-8">
                  <li>
                    <Check size={20} className="text-fin-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Fin AI Agent</h4>
                      <p className="text-gray-600">Forget AI chatbots, Fin can handle your entire frontline support with human quality service.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={20} className="text-fin-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Omnichannel</h4>
                      <p className="text-gray-600">Deliver exceptional experiences wherever your customers are.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={20} className="text-fin-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Help Center</h4>
                      <p className="text-gray-600">Help your customers find accurate answers through any channel.</p>
                    </div>
                  </li>
                </ul>
                <Link to="/chat" className="classic-button inline-flex items-center gap-2">
                  Learn more
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="w-full md:w-1/2 h-80 md:h-auto relative">
                <img 
                  src="data:image/jpeg;base64,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" 
                  alt="Foggy mountain landscape" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <LearnMoreSection />

      {/* CTA */}
      <section className="py-16 bg-gradient-to-tr from-[#fdfcfb] to-[#e2d1c3]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Ready to transform your customer support?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join leading companies using Fin AI to deliver exceptional customer experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/chat" className="classic-button flex items-center gap-2">
              Get started today
              <ArrowRight size={16} />
            </Link>
            <button 
              onClick={() => setIsSalesDialogOpen(true)}
              className="px-5 py-2.5 border border-gray-200 hover:border-gray-300 rounded-full transition-all"
            >
              Contact sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-fin-beige py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif font-medium text-lg mb-4">Product</h3>
              <ul className="space-y-3">
                <li><Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
                <li><Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Case Studies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif font-medium text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif font-medium text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">API Reference</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Guides</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif font-medium text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Security</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-fin-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">F</span>
              </div>
              <span className="font-serif text-xl font-medium">Fin AI</span>
            </div>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Fin AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Sales Contact Dialog */}
      <ContactSalesDialog open={isSalesDialogOpen} onOpenChange={setIsSalesDialogOpen} />
    </div>
  );
};

export default HomePage;
