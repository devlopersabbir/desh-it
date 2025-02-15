import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { X } from 'lucide-react'

type Props = {
  image: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

function PreviewDialog({ image, open, onOpenChange }: Props) {
  console.log('open: ', open)
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-3xl lg:p-5 p-2.5">
        <AlertDialogHeader>
          <AlertDialogTitle className="hidden">Are</AlertDialogTitle>
          <AlertDialogDescription className="hidden">This</AlertDialogDescription>
        </AlertDialogHeader>
        <X size={30} className="cursor-pointer text-dark_green absolute right-2 top-2" />
        <img alt="image" className="w-full" src={image || '/placeholder.svg'} />
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default PreviewDialog
