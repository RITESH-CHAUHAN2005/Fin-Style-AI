
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight } from "lucide-react";

type ContactSalesDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ContactSalesDialog = ({ open, onOpenChange }: ContactSalesDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">Contact Sales</DialogTitle>
          <DialogDescription>
            Get in touch with our sales team to learn more about how Fin AI can help your business.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 space-y-4">
          <div className="flex items-center gap-4 p-4 bg-fin-light-beige rounded-xl">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-fin-orange">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="font-medium">Email Us</h3>
              <a href="mailto:sales@finai.com" className="text-fin-orange hover:underline">
                sales@finai.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-fin-light-beige rounded-xl">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-fin-orange">
              <Phone size={20} />
            </div>
            <div>
              <h3 className="font-medium">Call Us</h3>
              <a href="tel:+18005551234" className="text-fin-orange hover:underline">
                +1 (800) 555-1234
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-4 mt-4">
            <h3 className="font-medium mb-2">Fin AI Headquarters</h3>
            <address className="not-italic text-gray-600">
              123 AI Innovation Drive<br />
              San Francisco, CA 94105<br />
              United States
            </address>
          </div>
        </div>
        
        <DialogFooter>
          <Button className="classic-button w-full" onClick={() => onOpenChange(false)}>
            Schedule a Meeting
            <ArrowRight size={16} />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContactSalesDialog;
