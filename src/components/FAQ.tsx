import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"  

export function FAQ() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="bg-white size-8 absolute top-2 right-2">❓</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">FAQs</AlertDialogTitle>
          <AlertDialogDescription>

            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
                >
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-semibold cursor-pointer">🧑‍💻 What is NexusS and who can use it?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4">
                        <p>
                            Developed for primarily UoA and UniSA students, NexusS is a web app that helps students find or host nearby study sessions.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className="font-semibold cursor-pointer">🔐 Do I need an account?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4">
                        <p>
                            Not yet — just open the app to browse nearby sessions or host one. (Profiles coming soon.)
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className="font-semibold cursor-pointer">🔍 How do I find sessions?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Enable location access; sessions appear on the map automatically.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className="font-semibold cursor-pointer">⭐ How do I host one?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4">
                    <p>
                        Enable location access, tap Create Study Session, fill in details, and post.
                    </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger className="font-semibold cursor-pointer">📍 Is my location shared?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Yes, but only your chosen location is visible to other students.
                        </p>
                    </AccordionContent>
                </AccordionItem>    


            </Accordion>

          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="cursor-pointer bg-black text-white w-full hover:bg-gray-950 items-center">Got it!</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
