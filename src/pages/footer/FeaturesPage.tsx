
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-center">Features</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Discover all the powerful capabilities that make Fin AI the leading customer support solution.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-fin-light-beige rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-fin-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Omnichannel Support</h3>
            <p className="text-gray-600 mb-4">Meet your customers where they are with seamless support across all channels.</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>Website chat integration</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>Email support automation</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>Social media messaging</span>
              </li>
            </ul>
          </div>

          <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-fin-light-beige rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-fin-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Advanced Security</h3>
            <p className="text-gray-600 mb-4">Enterprise-grade security and compliance for peace of mind.</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>SOC 2 Type II compliant</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>GDPR and CCPA ready</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>End-to-end encryption</span>
              </li>
            </ul>
          </div>

          <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-fin-light-beige rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-fin-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Comprehensive Analytics</h3>
            <p className="text-gray-600 mb-4">Gain insights into your customer support performance and trends.</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>Real-time dashboards</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>Custom reporting</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>Customer satisfaction metrics</span>
              </li>
            </ul>
          </div>

          <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-fin-light-beige rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-fin-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Seamless Integration</h3>
            <p className="text-gray-600 mb-4">Easily connect Fin AI with your existing tech stack.</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>CRM integrations</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>Helpdesk software compatibility</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>E-commerce platform connections</span>
              </li>
            </ul>
          </div>

          <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-fin-light-beige rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-fin-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Transaction Support</h3>
            <p className="text-gray-600 mb-4">Help customers complete transactions and manage orders.</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>Order tracking</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>Payment processing</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>Returns and refunds</span>
              </li>
            </ul>
          </div>

          <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-fin-light-beige rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-fin-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Self-Learning AI</h3>
            <p className="text-gray-600 mb-4">Our AI continuously improves based on interactions and feedback.</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>Adaptive responses</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>Pattern recognition</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-fin-orange mr-2 mt-1 flex-shrink-0" />
                <span>Continuous improvement</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/chat" className="classic-button inline-flex items-center gap-2">
            Try Fin AI Today
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
