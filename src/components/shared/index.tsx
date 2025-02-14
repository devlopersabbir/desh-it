import { Dialog, DialogClose, DialogContent } from "../ui/dialog";

type Props = {
  image: string;
  isOpen: boolean;
  onClose: (open: boolean) => void; // Expecting the state setter function from the parent
};

const PreviewDialog = ({ image, isOpen, onClose }: Props) => {
  const handleDialogClose = (open: boolean) => {
    onClose(open);
  };
  return (
    <Dialog open={isOpen} onOpenChange={handleDialogClose}>
      <DialogContent className="w-full h-auto">
        <img className="w-full h-full" src={image} alt="image" />
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialog;
