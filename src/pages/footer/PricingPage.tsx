
import { Check, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PricingPage = () => {
  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-center">Transparent Pricing</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Choose the plan that's right for your business, with no hidden fees or long-term commitments.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="border border-gray-200 rounded-2xl p-8 relative hover:shadow-md transition-all">
            <div className="mb-8">
              <h3 className="text-xl font-serif font-medium mb-2">Starter</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-500 mb-1">/month</span>
              </div>
              <p className="text-gray-600">Perfect for small businesses just getting started with AI support.</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Up to 1,000 AI conversations/month</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Email and chat support</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Basic analytics</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>2 team members</span>
              </li>
              <li className="flex items-start">
                <X size={18} className="text-gray-300 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Custom branding</span>
              </li>
              <li className="flex items-start">
                <X size={18} className="text-gray-300 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">API access</span>
              </li>
            </ul>
            
            <Button variant="outline" className="w-full mb-4">Choose Starter</Button>
            <p className="text-sm text-center text-gray-500">No credit card required</p>
          </div>

          <div className="border-2 border-fin-orange rounded-2xl p-8 relative hover:shadow-md transition-all">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-fin-orange text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-serif font-medium mb-2">Professional</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-gray-500 mb-1">/month</span>
              </div>
              <p className="text-gray-600">Ideal for growing businesses with moderate support volume.</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Up to 5,000 AI conversations/month</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Priority email and chat support</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>10 team members</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Custom branding</span>
              </li>
              <li className="flex items-start">
                <X size={18} className="text-gray-300 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">API access</span>
              </li>
            </ul>
            
            <Button className="classic-button w-full mb-4">Choose Professional</Button>
            <p className="text-sm text-center text-gray-500">14-day free trial</p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 relative hover:shadow-md transition-all">
            <div className="mb-8">
              <h3 className="text-xl font-serif font-medium mb-2">Enterprise</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-gray-600">For large organizations with high volume and custom needs.</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Unlimited AI conversations</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Custom analytics and reporting</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Unlimited team members</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Custom branding</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Full API access</span>
              </li>
            </ul>
            
            <Button variant="outline" className="w-full mb-4">Contact Sales</Button>
            <p className="text-sm text-center text-gray-500">Custom implementation</p>
          </div>
        </div>
        
        <div className="bg-fin-light-beige rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Got questions about our pricing or features? Find answers to common questions below.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-lg mb-2">Can I upgrade or downgrade my plan?</h4>
              <p className="text-gray-600">Yes, you can change your plan at any time. Changes take effect at the start of your next billing cycle.</p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-2">What happens if I exceed my conversation limit?</h4>
              <p className="text-gray-600">You'll be notified when you approach your limit. You can choose to upgrade or pay for additional conversations.</p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-2">Is there a long-term commitment?</h4>
              <p className="text-gray-600">No, all plans are billed monthly and you can cancel at any time without penalty.</p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-2">Do you offer non-profit or educational discounts?</h4>
              <p className="text-gray-600">Yes, we offer special pricing for non-profits and educational institutions. Contact our sales team for details.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/chat" className="classic-button inline-flex items-center gap-2">
              Start Your Free Trial
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
