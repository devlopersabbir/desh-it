import { Dialog, DialogContent } from "../ui/dialog";

type Props = {
  image: string;
  isOpen: boolean;
  onClose: (open: boolean) => void;
};

const PreviewDialog = ({ image, isOpen, onClose }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => onClose(open)}>
      <DialogContent className="max-w-2xl h-auto">
        <img className="w-full h-full" src={image} alt="image" />
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialog;
