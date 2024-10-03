"use client"
import { Button } from "@/components/ui/button"
import { Form,FormControl,FormField ,FormItem,FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { Smile } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"


const FormSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().optional(),
    email: z.string().email(),
    companyName: z.string(),
    message: z.string()
  })

const ContactForm = () => {

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          firstName: "",
          lastName: "",
          email: "",
          companyName: "",
          message : ""
        },
      });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
          setLoading(true);
          const res = await fetch("TO some api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
    
          if (!res.ok) {
            throw new Error("Something went wrong");
          }
    
          setSubmitted(true);
        } catch (error) {
           console.log(error)
        } finally {
          setLoading(false);
          setSubmitted(true)
        }
      }
    

    return (
        <div className="py-16">
             <div
  className="
    text-[#111019]
    md:text-center
    flex
    flex-col
    justify-center
    items-center
    md:text-8xl
    text-4xl
    gap-4
    font-bold
    tracking-tighter
    pb-10
    md:pb-20
  "
>
  <div>
 <span className="text-blue-500">Get</span> in touch
  </div>
</div>
        <Form {...form}>
        {!submitted ? (
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="
                md:w-1/2 
                space-y-6 
                border 
                p-10 
                mx-auto
                md:rounded-[20px]
                bg-[#d1d1f7]
                sm:overflow-hidden
                h-1/2
                "
                >
                    <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                        <FormItem className="items-center justify-center space-y-4 w-full">
                            <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                FIRST NAME *
                            </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                        </FormItem>
                    )}
                    />

                <FormField
                    control={form.control}
                    name='lastName'
                    render={({ field }) => (
                        <FormItem className="items-center justify-center space-y-4 w-full">
                            <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                LAST NAME *
                            </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                        </FormItem>
                    )}
                    />

                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem className="items-center justify-center space-y-4 w-full">
                            <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                WORK EMAIL *
                            </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                        </FormItem>
                    )}
                    />


                <FormField
                    control={form.control}
                    name='companyName'
                    render={({ field }) => (
                        <FormItem className="items-center justify-center space-y-4 w-full">
                            <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                COMPANY NAME *
                            </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                        </FormItem>
                    )}
                    />

        <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                        <FormItem className="items-center justify-center space-y-4 w-full">
                            <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                MESSAGE *
                            </FormLabel>
                                <FormControl>
                                    <Textarea  {...field} />
                                </FormControl>
                        </FormItem>
                    )}
                    />

                   <div className="flex items-center gap-4">
                    <Button type="submit" className="
                    p-6
                    bg-[#565add]
                    ml-auto
                    "
                    disabled={loading}
                    onClick={() => form.handleSubmit(onSubmit)}
                    >
                        Submit Form

                    </Button>

                   </div>
                
              
                </form>
        ) : (
            <div className="
        text-4xl 
        md:text-6xl 
        my-40 
        text-[#111019] 
        items-center 
        justify-center 
        text-center 
        font-medium
        px-10 
        mx-auto
        ">
            <div>
                {" "}
                Thank you for contacting us! We will get back to you soon.
                {" "}
                </div>
                <div className="mx-auto items-center justify-center flex py-40">
                    <Smile className=" text-[#4b42ad]" size={100} />
                    </div>
            </div>
      )}
    </Form>
    </div>
    )
}

export default ContactForm