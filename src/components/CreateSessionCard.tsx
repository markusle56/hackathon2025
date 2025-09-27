"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Dropzone, DropzoneContent, DropzoneEmptyState } from "@/components/ui/shadcn-io/dropzone";

import * as React from "react";
import { JoinNotification } from "@/components/JoinNotification";
import type { Resolver } from "react-hook-form";

const formSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title too long"),
  description: z.string().min(1, "Description is required").max(500, "Description too long"),
  start_time: z.string().min(1, "Start time is required").regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
  end_time: z.string().min(1, "End time is required").regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
  capacity: z.coerce.number().min(1, "Capacity at least 1").max(50, "Capacity max 50"),
  tags: z.string().optional(),
  // files must be File instances (client-side)
  files: z.array(z.instanceof(File)).optional().refine(
    (files?: File[] | undefined) => !files || files.length <= 1,
    { message: "Only 1 image allowed" }
  ).refine(
    (files?: File[] | undefined) => !files || files.every((file: File) => typeof file.type === "string" && file.type.startsWith("image/")),
    { message: "Only image files allowed" }
  ),
  id: z.string().optional(), 
  lat: z.number().optional(),
  long: z.number().optional(),
  terminate: z.boolean().default(false), 
})
.refine((data) => {
  const toMinutes = (t?: string) => {
    if (!t) return NaN;
    const [h, m] = t.split(":").map((v) => Number(v));
    return h * 60 + m;
  };
  const s = toMinutes(data.start_time);
  const e = toMinutes(data.end_time);
  
  if (isNaN(s) || isNaN(e)) return true;
  return s < e;
}, {
  message: "Start time must be before end time",
  path: ["end_time"], 
});


type FormData = z.infer<typeof formSchema>;

type CreateSessionCardProps = { longitude?: number; latitude?: number, setMySession?: (postId: string) => void };

export function CreateSessionCard({ longitude = 0, latitude = 0, setMySession }: CreateSessionCardProps) {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<File[] | undefined>(undefined);
  const [notif, setNotif] = useState<string | null>(null);
  const form = useForm<FormData>({
    
    resolver: zodResolver(formSchema) as unknown as Resolver<FormData>,
    defaultValues: {
      title: "",
      description: "",
      start_time: "",
      end_time: "",
      capacity: 1,
      tags: "",
      files: undefined,
      id: undefined,
      lat: undefined,
      long: undefined,
      terminate: false,
    },
  });
  const handleNoti = () => {
    setNotif(null);
    setOpen(false);
    setFiles(undefined);
  }
  const handleDrop = (droppedFiles: File[]) => {
    setFiles(droppedFiles);
    form.setValue("files", droppedFiles as File[]);
  };
  async function onSubmit(values: FormData) {
    const submittedData = {
      ...values,
      id: values.id || `session_${Date.now()}`, 
      lat: values.lat || 0, 
      long: values.long || 0,
      terminate: values.terminate || false,
      tags: values.tags ? values.tags.split(",").map((tag) => tag.trim()).filter(Boolean) : [],
    };

    console.log("Submitted Data (in schema format):", submittedData);


    if (submittedData.files && submittedData.files.length > 0) {
      
      const formData = new FormData();
      formData.append("title", submittedData.title);
      formData.append("description", submittedData.description);
      formData.append("start_time", submittedData.start_time);
      formData.append("end_time", submittedData.end_time);
      formData.append("capacity", String(submittedData.capacity));
      formData.append("tags", submittedData.tags.join(","));
      formData.append("id", submittedData.id);
      formData.append("lat", String(latitude ?? 0));
      formData.append("long", String(longitude ?? 0));
      formData.append("terminate", submittedData.terminate.toString());
      formData.append("file", submittedData.files[0]);

      try {
        console.log(submittedData.start_time)
        const response = await fetch("/api/post/submit", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          const {postId} = await response.json();
          setMySession?.(String(postId));
          console.log("Session created successfully!");
          setNotif("Session created successfully!") 
          form.reset();
        } else {
          console.log("Error creating session");
          setNotif("Error creating session")
        }
      } catch (error) {
        console.error("Upload error:", error);
      }
    } else {
      const res = await fetch("/api/post/submit", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...submittedData,
          lat: String(submittedData.lat ?? latitude ?? 0),
          long: String(submittedData.long ?? longitude ?? 0),
        }),
       });
      if (!res.ok) {
        setNotif("Error creating session");
      }
      const {postId} = await res.json()
      setMySession?.(String(postId));
      form.reset();
      setNotif("Session created successfully!") 
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-white text-black">Create Study Session</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-2/3 md:h-1/2 h-2/3 overflow-auto bg-white">
        <DialogHeader>
          <DialogTitle className=" cursor-pointer text-black font-bold">Create Study Session</DialogTitle>

        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Session Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Calculus Study Group" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="What will you be studying?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Time & Capacity Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="start_time"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start Time</FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        step="60"
                        placeholder="08:00"
                        className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="end_time"
                render={({ field }) => (
                  <FormItem className="flex flex-col relative">
                    <FormLabel>End Time</FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        step="60"
                        placeholder="10:00"
                        className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        {...field}
                      />
                    </FormControl>
                    <div className="fixed top-4 right-4 z-50">
                      <FormMessage className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg animate-slide-in" />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="capacity"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Max Participants</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" max="50" placeholder="4" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>

            {/* Tags */}
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., math, calculus" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Dropzone for Images */}
            <FormField
              control={form.control}
              name="files"
              render={() => (
                <FormItem>
                  <FormLabel>Upload Image (Optional, 1 max)</FormLabel>
                  <FormControl>
                    <Dropzone
                      accept={{ "image/*": [] }}
                      onDrop={handleDrop}
                      onError={console.error}
                      src={files}
                    >
                      <DropzoneEmptyState />
                      <DropzoneContent />
                    </Dropzone>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DialogClose asChild>
                <Button type="button" variant="outline" onClick={() => form.reset()}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="bg-black text-white" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Creating..." : "Create Session"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
        {notif && <JoinNotification onClose={handleNoti} message={notif} />}
      </DialogContent>
    </Dialog>
  );
}