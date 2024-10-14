"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form as UIForm,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

// Form validation schema
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <UIForm {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white bg-opacity-[6%] p-6 text-left"
      >
        <p className="text-green-400 text-sm">Need Some Help?</p>
        <h2 className="text-xl font-bold pb-2">Get In Touch</h2>
        <p className="text-sm mb-6">
          Whatever your question we are here to help
        </p>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Name"
                  {...field}
                  className="bg-white bg-opacity-[10%] text-white rounded-none border-none"
                />
              </FormControl>
              <br />
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className="bg-white bg-opacity-[10%] text-white rounded-none border-none"
                />
              </FormControl>
              <br />
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Message"
                className="bg-white bg-opacity-[10%] text-white rounded-none border-none"
              />
              <br />
            </FormItem>
          )}
        />
        <Button
          variant="gaming"
          type="submit"
          className="flex-1 font-bold bg-[#0BDB45] text-center rounded-none cursor-pointer w-full text-black "
        >
          SEND
        </Button>
      </form>
    </UIForm>
  );
}
