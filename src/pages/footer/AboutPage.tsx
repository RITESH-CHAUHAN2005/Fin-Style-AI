
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-center">About Fin AI</h1>
          <p className="text-lg text-gray-600 text-center">
            We're building the future of customer support through the power of artificial intelligence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-serif font-medium mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Fin AI, we believe that exceptional customer service shouldn't be limited by human capacity. 
              Our mission is to transform customer support by combining the best of artificial intelligence 
              with human empathy and expertise.
            </p>
            <p className="text-gray-600 mb-4">
              Founded in 2023, we've built a platform that helps businesses of all sizes provide 
              instant, accurate, and personalized support to their customers around the clock.
            </p>
            <p className="text-gray-600">
              Our AI agents learn your business, speak in your brand voice, and deliver consistent support 
              experiences that build customer loyalty and trust.
            </p>
          </div>
          <div className="bg-fin-light-beige rounded-2xl p-8">
            <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                alt="Fin AI Team" 
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="font-serif text-xl font-medium mb-2">Founded on principles</h3>
            <p className="text-gray-600">
              Our founding team brings together expertise from AI research, customer experience design, 
              and enterprise software to create a truly revolutionary support platform.
            </p>
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-medium mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-fin-light-beige rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fin-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Innovation First</h3>
              <p className="text-gray-600">
                We're constantly pushing the boundaries of what AI can do in customer service, investing heavily in research and development.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-fin-light-beige rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fin-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Customer Obsessed</h3>
              <p className="text-gray-600">
                We measure our success by our customers' success. Everything we build is designed to help businesses better serve their customers.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-fin-light-beige rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fin-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Ethical AI</h3>
              <p className="text-gray-600">
                We're committed to building AI systems that are transparent, fair, and respectful of privacy, with humans always in the loop.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-fin-light-beige rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-serif font-medium mb-4">Leadership Team</h2>
              <p className="text-gray-600 mb-6">
                Our diverse team brings together expertise from AI research, customer experience,
                and enterprise software to create a truly revolutionary support platform.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                    alt="CEO" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Sarah Chen</h4>
                    <p className="text-sm text-gray-600">CEO & Co-Founder</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                    alt="CTO" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Michael Rodriguez</h4>
                    <p className="text-sm text-gray-600">CTO & Co-Founder</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                    alt="COO" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Priya Patel</h4>
                    <p className="text-sm text-gray-600">Chief Customer Officer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-serif text-xl font-medium mb-4">Join Our Team</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals who are passionate about AI, customer experience,
                and building products that make a difference.
              </p>
              <Link to="#" className="classic-button inline-flex items-center gap-2">
                View Open Positions
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
