'use client';

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/ui/shadcn-io/dropzone';
import { useState } from 'react';

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


export function CreateSessionCard() {

  const [files, setFiles] = useState<File[] | undefined>();
  const handleDrop = (files: File[]) => {
    console.log(files);
    setFiles(files);
  };

  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Create Study Session</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Study Session</DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-4">

            <div className="grid gap-3">
              <Label htmlFor="session_title">Session Title:</Label>
              <Input id="session_title" name="name" placeholder="e.g., Calculus Study Group" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="session_description">Description:</Label>
              <Input id="session_description" name="name" placeholder="What will you be studying?" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* <div className="flex flex-col">
                <Label htmlFor="start_time" className="mb-2">Start Time</Label>
                <Input id="start_time" placeholder="13:00" />
              </div> */}

              {/* <div className="flex flex-col">
                <Label htmlFor="end_time" className="mb-2">End Time</Label>
                <Input id="end_time" placeholder="16:00" />
              </div> */}

              <div className="flex flex-col" >
                <Label htmlFor="start_time" className="px-1 mb-2">
                  Start Time
                </Label>
                <Input
                  type="time"
                  id="start_time"
                  step="60"
                  placeholder="08:00:00"
                  required
                  className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
              </div>

              <div className="flex flex-col" >
                <Label htmlFor="end_time" className="px-1 mb-2">
                  End Time:
                </Label>
                <Input
                  type="time"
                  id="end_time"
                  step="60"
                  placeholder="10:00:00"
                  required
                  className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
              </div>

              <div className="flex flex-col">
                <Label htmlFor="capacity" className="mb-2">Max Participants</Label>
                <Input id="capacity" placeholder="4" type="number" min="1" max="50"/>
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="tags">Tags</Label>
              <Input id="tags" name="username"/>
            </div>

          </div>

          <Dropzone
            // can only upload 1 image atm
            accept={{ 'image/*': [] }}
            onDrop={handleDrop}
            onError={console.error}
            src={files}
          >
            <DropzoneEmptyState />
            <DropzoneContent />
          </Dropzone>
          
          <DialogFooter className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create Session</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
