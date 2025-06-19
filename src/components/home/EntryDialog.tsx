// EntryDialog.jsx
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

const EntryDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("hasVisited");
    if (!visited) {
      setOpen(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("hasVisited", "true");
    setOpen(false);
  };

  const handleCloseTab = () => {
    window.open("", "_self")?.close(); // closes the tab
  };

  return (
    <Dialog open={open} onOpenChange={handleCloseTab}>
      <DialogContent
        className="max-w-md text-black grid items-center bg-gradient-to-r from-white via-white to-red-100"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <XCircle className="text-red-500 size-16" />
          </div>
          <DialogTitle className="text-2xl font-bold text-center">
            Friendly reminder!
          </DialogTitle>
          <p className="text-sm text-black text-center">
            Just to avoid any confusion,{" "}
            <span className="text-akotex-red font-semibold">akotex.com</span> is
            dedicated to digital real estate investments, not gambling.
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-3 mt-6">
          <Button
            onClick={handleAgree}
            className="bg-gray-900 hover:bg-gray-700 w-full"
          >
            Let’s invest!
          </Button>
          <Button
            variant="outline"
            className="text-akotex-red hover:text-akotex-red/80 bg-transparent hover:bg-transparent border-none w-full"
            onClick={handleCloseTab}
          >
            Oops, wrong place!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EntryDialog;
