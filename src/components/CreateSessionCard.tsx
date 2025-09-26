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
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { ChevronDownIcon } from "lucide-react";

// Define Zod schema (matches your outline + code fields; adjust as needed)
const formSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title too long"),
  description: z.string().min(1, "Description is required").max(500, "Description too long"),
  start_time: z.string().min(1, "Start time is required").regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
  end_time: z.string().min(1, "End time is required").regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
  capacity: z.coerce.number().min(1, "Capacity at least 1").max(50, "Capacity max 50"),
  tags: z.string().optional().or(z.literal("")),
  files: z.instanceof(File).array().optional().or(z.literal(undefined)).refine(
    (files) => !files || files.length <= 1,
    { message: "Only 1 image allowed" }
  ).refine(
    (files) => !files || files.every((file) => file.type.startsWith("image/")),
    { message: "Only image files allowed" }
  ),
  id: z.string().optional(), 
  lat: z.number().optional(),
  long: z.number().optional(),
  terminate: z.boolean().default(false), 
});


type FormData = z.infer<typeof formSchema>;

export function CreateSessionCard() {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<File[] | undefined>(undefined);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
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

  const handleDrop = (droppedFiles: File[]) => {
    setFiles(droppedFiles);
    form.setValue("files", droppedFiles); 
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
      formData.append("capacity", submittedData.capacity.toString());
      formData.append("tags", submittedData.tags.join(","));
      formData.append("id", submittedData.id);
      formData.append("lat", submittedData.lat?.toString() || "0");
      formData.append("long", submittedData.long?.toString() || "0");
      formData.append("terminate", submittedData.terminate.toString());
      submittedData.files.forEach((file) => formData.append("images", file));

      try {
        const response = await fetch("/api/sessions", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          console.log("Session created successfully!");
          form.reset();
          setFiles(undefined);
          setOpen(false);
        } else {
          console.error("Error creating session");
        }
      } catch (error) {
        console.error("Upload error:", error);
      }
    } else {
      await fetch("/api/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submittedData),
      });
      form.reset();
      setFiles(undefined);
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create Study Session</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Study Session</DialogTitle>

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
                  <FormItem className="flex flex-col">
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
                    <FormMessage />
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
                    <FormMessage />
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
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Creating..." : "Create Session"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}