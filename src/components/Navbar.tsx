
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }

    // Add event listener to update currentUser when localStorage changes
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem('currentUser');
      if (updatedUser) {
        setCurrentUser(JSON.parse(updatedUser));
      } else {
        setCurrentUser(null);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for login/logout
    window.addEventListener('userAuthChanged', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userAuthChanged', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    // Dispatch custom event to notify other components about the auth change
    window.dispatchEvent(new Event('userAuthChanged'));
    navigate('/');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 px-4 md:px-6 py-3 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={scrollToTop}>
          <div className="w-8 h-8 bg-fin-orange rounded-lg flex items-center justify-center">
            <span className="text-white font-serif font-bold text-xl">F</span>
          </div>
          <span className="font-serif text-2xl font-medium">Fin</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <Link to="/" className="font-medium hover:text-fin-orange transition-colors" onClick={scrollToTop}>Home</Link>
            <Link to="/chat" className="font-medium hover:text-fin-orange transition-colors" onClick={scrollToTop}>Chat</Link>
            <Link to="/inbox" className="font-medium hover:text-fin-orange transition-colors" onClick={scrollToTop}>Inbox</Link>
            <Link to="/dashboard" className="font-medium hover:text-fin-orange transition-colors" onClick={scrollToTop}>Dashboard</Link>
          </div>
          <div className="flex items-center gap-4">
            {currentUser ? (
              <Popover>
                <PopoverTrigger asChild>
                  <button className="flex items-center gap-2 py-2 px-3 rounded-full hover:bg-fin-light-beige transition-colors">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-fin-orange text-white">
                        {getInitials(currentUser.name)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{currentUser.name.split(' ')[0]}</span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-56" align="end">
                  <div className="space-y-2">
                    <div className="border-b pb-2">
                      <p className="font-medium">{currentUser.name}</p>
                      <p className="text-sm text-gray-500">{currentUser.email}</p>
                    </div>
                    <div className="pt-1">
                      <Link 
                        to="/profile" 
                        className="flex items-center gap-2 py-2 px-1 hover:text-fin-orange transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <User size={16} />
                        <span>Profile</span>
                      </Link>
                      <button 
                        className="flex w-full items-center gap-2 py-2 px-1 text-left hover:text-fin-orange transition-colors"
                        onClick={handleLogout}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <>
                <Link to="/login" className="px-4 py-2 hover:bg-fin-light-beige rounded-full transition-colors" onClick={scrollToTop}>Login</Link>
                <Link to="/chat" className="classic-button" onClick={scrollToTop}>Try Fin Free</Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden rounded-full p-2 hover:bg-fin-light-beige"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 px-4 py-5 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-4 mb-5">
            <Link to="/" className="font-medium py-2 hover:text-fin-orange transition-colors" onClick={() => {setIsMenuOpen(false); scrollToTop();}}>Home</Link>
            <Link to="/chat" className="font-medium py-2 hover:text-fin-orange transition-colors" onClick={() => {setIsMenuOpen(false); scrollToTop();}}>Chat</Link>
            <Link to="/inbox" className="font-medium py-2 hover:text-fin-orange transition-colors" onClick={() => {setIsMenuOpen(false); scrollToTop();}}>Inbox</Link>
            <Link to="/dashboard" className="font-medium py-2 hover:text-fin-orange transition-colors" onClick={() => {setIsMenuOpen(false); scrollToTop();}}>Dashboard</Link>
          </div>
          <div className="flex flex-col gap-3">
            {currentUser ? (
              <>
                <div className="flex items-center gap-3 py-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-fin-orange text-white">
                      {getInitials(currentUser.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{currentUser.name}</p>
                    <p className="text-xs text-gray-500">{currentUser.email}</p>
                  </div>
                </div>
                <Link 
                  to="/profile" 
                  className="px-4 py-2.5 text-center hover:bg-fin-light-beige rounded-full transition-colors"
                  onClick={() => {setIsMenuOpen(false); scrollToTop();}}
                >
                  My Profile
                </Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-2.5 text-center hover:bg-fin-light-beige rounded-full transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-4 py-2.5 text-center hover:bg-fin-light-beige rounded-full transition-colors" onClick={() => {setIsMenuOpen(false); scrollToTop();}}>Login</Link>
                <Link to="/chat" className="classic-button text-center" onClick={() => {setIsMenuOpen(false); scrollToTop();}}>Try Fin Free</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
