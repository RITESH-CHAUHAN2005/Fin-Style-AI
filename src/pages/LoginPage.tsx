
import { useState } from "react";
import { ArrowRight, Mail, Lock, User, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

type LoginFormData = {
  email: string;
  password: string;
};

type SignupFormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState<LoginFormData>({ email: "", password: "" });
  const [signupData, setSignupData] = useState<SignupFormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if the user exists in localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: any) => u.email === loginData.email && u.password === loginData.password);
    
    if (user) {
      // Store the logged in user
      localStorage.setItem("currentUser", JSON.stringify(user));
      // Dispatch custom event to notify components about login
      window.dispatchEvent(new Event('userAuthChanged'));
      
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
      navigate("/");
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords match
    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: "Signup failed",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    // Get existing users or initialize empty array
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Check if email already exists
    if (users.some((user: any) => user.email === signupData.email)) {
      toast({
        title: "Signup failed",
        description: "Email already exists",
        variant: "destructive",
      });
      return;
    }
    
    // Add new user
    const newUser = {
      id: Date.now(),
      name: signupData.name,
      email: signupData.email,
      phone: signupData.phone,
      password: signupData.password,
    };
    
    users.push(newUser);
    
    // Save updated users array
    localStorage.setItem("users", JSON.stringify(users));
    
    toast({
      title: "Signup successful",
      description: "You can now login with your credentials",
    });
    
    // Auto-login after successful signup
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    // Dispatch custom event to notify components about login
    window.dispatchEvent(new Event('userAuthChanged'));
    
    // Navigate to home
    navigate("/");
  };

  return (
    <div className="min-h-screen pt-16 pb-10 flex justify-center items-center bg-fin-beige">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg animate-fade-in">
        <div className="flex items-center justify-center mb-6">
          <div className="w-10 h-10 bg-fin-orange rounded-lg flex items-center justify-center">
            <span className="text-white font-serif font-bold text-2xl">F</span>
          </div>
          <span className="font-serif text-2xl font-medium ml-2">Fin</span>
        </div>
        
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 transition-colors ${
              isLogin ? "border-b-2 border-fin-orange text-fin-orange font-medium" : "text-gray-500"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 transition-colors ${
              !isLogin ? "border-b-2 border-fin-orange text-fin-orange font-medium" : "text-gray-500"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        
        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400">
                  <Mail size={18} />
                </span>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fin-orange/50"
                  required
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400">
                  <Lock size={18} />
                </span>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fin-orange/50"
                  required
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" />
                Remember me
              </label>
              <a href="#" className="text-fin-orange hover:underline">Forgot password?</a>
            </div>
            
            <Button type="submit" className="classic-button w-full">
              Login
              <ArrowRight size={16} />
            </Button>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400">
                  <User size={18} />
                </span>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fin-orange/50"
                  required
                  value={signupData.name}
                  onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400">
                  <Mail size={18} />
                </span>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fin-orange/50"
                  required
                  value={signupData.email}
                  onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400">
                  <Phone size={18} />
                </span>
                <input
                  type="tel"
                  placeholder="+1 (123) 456-7890"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fin-orange/50"
                  required
                  value={signupData.phone}
                  onChange={(e) => setSignupData({...signupData, phone: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400">
                  <Lock size={18} />
                </span>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fin-orange/50"
                  required
                  value={signupData.password}
                  onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400">
                  <Lock size={18} />
                </span>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fin-orange/50"
                  required
                  value={signupData.confirmPassword}
                  onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                />
              </div>
            </div>
            
            <Button type="submit" className="classic-button w-full">
              Sign Up
              <ArrowRight size={16} />
            </Button>
          </form>
        )}
        
        <div className="mt-6 text-center text-sm">
          <Link to="/" className="text-fin-orange hover:underline">
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

