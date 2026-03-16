import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VirtualTourModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VirtualTourModal = ({ open, onOpenChange }: VirtualTourModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] max-h-[90vh] w-full h-[85vh] p-0 border-none overflow-hidden rounded-2xl bg-black">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
          aria-label="Close virtual tour"
        >
          <X className="w-5 h-5 text-white" />
        </button>
        {open && (
          <iframe
            src="https://cybozom.com/360/hitechmedicity/"
            title="Hitech Medicity Virtual Tour"
            className="w-full h-full"
            allowFullScreen
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default VirtualTourModal;
