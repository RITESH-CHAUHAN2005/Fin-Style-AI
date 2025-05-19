
import { Check } from "lucide-react";

const LearnMoreSection = () => {
  return (
    <section id="learn-more" className="py-16 md:py-24 px-6 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">
            The future of customer support is here
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Fin AI combines advanced language models with your business knowledge to deliver 
            personalized, accurate, and efficient customer service at scale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-fin-light-beige rounded-full flex items-center justify-center text-fin-orange mb-6">
              <span className="font-serif font-bold text-xl">1</span>
            </div>
            <h3 className="font-serif text-xl font-medium mb-3">Your Brand Voice</h3>
            <p className="text-gray-600 mb-4">
              Fin captures your company's unique brand voice and communicates with customers exactly as you would.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mt-1 mr-2 flex-shrink-0" />
                <span>Personalized responses that match your tone</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mt-1 mr-2 flex-shrink-0" />
                <span>Consistent communication across all channels</span>
              </li>
            </ul>
          </div>
          
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-fin-light-beige rounded-full flex items-center justify-center text-fin-orange mb-6">
              <span className="font-serif font-bold text-xl">2</span>
            </div>
            <h3 className="font-serif text-xl font-medium mb-3">Advanced Knowledge Base</h3>
            <p className="text-gray-600 mb-4">
              Fin learns from your documentation and previous support interactions to provide accurate answers.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mt-1 mr-2 flex-shrink-0" />
                <span>Connect to your existing knowledge resources</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mt-1 mr-2 flex-shrink-0" />
                <span>Continuous learning from new interactions</span>
              </li>
            </ul>
          </div>
          
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-fin-light-beige rounded-full flex items-center justify-center text-fin-orange mb-6">
              <span className="font-serif font-bold text-xl">3</span>
            </div>
            <h3 className="font-serif text-xl font-medium mb-3">Smart Automation</h3>
            <p className="text-gray-600 mb-4">
              Automate routine inquiries while escalating complex issues to your human team when necessary.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mt-1 mr-2 flex-shrink-0" />
                <span>Intelligent triage of customer inquiries</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-fin-orange mt-1 mr-2 flex-shrink-0" />
                <span>Seamless handover to human agents when needed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-fin-light-beige rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4">
                How Fin AI works
              </h3>
              <p className="text-gray-700 mb-6">
                Our AI platform combines natural language processing, machine learning, and your business knowledge to deliver exceptional customer experiences.
              </p>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-fin-orange text-white flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Training</h4>
                    <p className="text-gray-600">Fin learns your products, policies, and communication style</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-fin-orange text-white flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Integration</h4>
                    <p className="text-gray-600">Deploy Fin across your website, email, and messaging platforms</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-fin-orange text-white flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Optimization</h4>
                    <p className="text-gray-600">Continuously improve with analytics and customer feedback</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-serif font-medium mb-4">Key Benefits</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check size={14} />
                  </div>
                  <div>
                    <h5 className="font-medium">24/7 Availability</h5>
                    <p className="text-sm text-gray-600">Support customers around the clock without staffing constraints</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check size={14} />
                  </div>
                  <div>
                    <h5 className="font-medium">Reduced Costs</h5>
                    <p className="text-sm text-gray-600">Lower support costs by up to 60% while improving quality</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check size={14} />
                  </div>
                  <div>
                    <h5 className="font-medium">Consistent Experience</h5>
                    <p className="text-sm text-gray-600">Deliver the same high-quality experience to every customer</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check size={14} />
                  </div>
                  <div>
                    <h5 className="font-medium">Scalable Solution</h5>
                    <p className="text-sm text-gray-600">Handle volume spikes without affecting quality or speed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMoreSection;
