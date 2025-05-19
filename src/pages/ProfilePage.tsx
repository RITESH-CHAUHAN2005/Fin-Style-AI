
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { User, Mail, Phone, LogOut, Edit, Shield, Calendar } from "lucide-react";

type UserData = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const ProfilePage = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Get current user from localStorage
    const currentUserJson = localStorage.getItem("currentUser");
    if (currentUserJson) {
      setUser(JSON.parse(currentUserJson));
    } else {
      // Redirect to login if no user found
      navigate("/login");
    }
    
    // Listen for auth changes
    const handleAuthChange = () => {
      const updatedUser = localStorage.getItem("currentUser");
      if (!updatedUser) {
        navigate("/login");
      }
    };
    
    window.addEventListener("userAuthChanged", handleAuthChange);
    return () => {
      window.removeEventListener("userAuthChanged", handleAuthChange);
    };
  }, [navigate]);

  const handleLogout = () => {
    // Remove current user from localStorage
    localStorage.removeItem("currentUser");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('userAuthChanged'));
    navigate("/");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  if (!user) {
    return (
      <div className="min-h-screen pt-16 flex justify-center items-center">
        <div className="animate-pulse">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-10 bg-gradient-to-b from-fin-beige/50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-fin-orange/90 to-fin-orange/70 p-8 text-white relative">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative">
                <Avatar className="w-24 h-24 border-4 border-white">
                  <AvatarFallback className="bg-white text-fin-orange text-2xl font-bold">
                    {user.name ? getInitials(user.name) : "U"}
                  </AvatarFallback>
                  <AvatarImage src="" />
                </Avatar>
                <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-md">
                  <Edit size={14} className="text-fin-orange" />
                </button>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-serif font-medium">{user.name}</h1>
                <p className="opacity-90 flex items-center justify-center md:justify-start gap-2 mt-1">
                  <Shield size={16} />
                  <span>Premium Account Member</span>
                </p>
                <p className="text-sm mt-2 opacity-80 flex items-center justify-center md:justify-start gap-2">
                  <Calendar size={14} />
                  <span>Member since May 2025</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif font-medium">Personal Information</h2>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Edit size={14} />
                Edit Profile
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gradient-to-r from-white to-fin-light-beige/30 border border-gray-100 flex items-center gap-4 transition-all hover:shadow-md">
                <div className="w-10 h-10 rounded-full bg-fin-light-beige flex items-center justify-center text-fin-orange">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium">{user.name}</p>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-gradient-to-r from-white to-fin-light-beige/30 border border-gray-100 flex items-center gap-4 transition-all hover:shadow-md">
                <div className="w-10 h-10 rounded-full bg-fin-light-beige flex items-center justify-center text-fin-orange">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-gradient-to-r from-white to-fin-light-beige/30 border border-gray-100 flex items-center gap-4 transition-all hover:shadow-md">
                <div className="w-10 h-10 rounded-full bg-fin-light-beige flex items-center justify-center text-fin-orange">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <p className="font-medium">{user.phone}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t">
              <h3 className="font-medium text-lg mb-4">Account Settings</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="p-4 rounded-lg border border-gray-100 flex items-center gap-3 hover:bg-fin-light-beige/20 transition-colors text-left">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fin-orange"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  <div>
                    <p className="font-medium">Account Preferences</p>
                    <p className="text-sm text-gray-500">Manage your account settings</p>
                  </div>
                </button>
                
                <button className="p-4 rounded-lg border border-gray-100 flex items-center gap-3 hover:bg-fin-light-beige/20 transition-colors text-left">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fin-orange"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <div>
                    <p className="font-medium">Security</p>
                    <p className="text-sm text-gray-500">Update password and security</p>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="mt-8 flex gap-4">
              <Button variant="outline" className="flex-1 hover:bg-fin-light-beige/50">
                Delete Account
              </Button>
              <Button variant="outline" className="flex-1 hover:bg-fin-light-beige/50" onClick={handleLogout}>
                <LogOut size={16} className="mr-2" /> Logout
              </Button>
            </div>
            
            <div className="mt-6 text-center">
              <Link to="/" className="text-fin-orange hover:underline text-sm">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
