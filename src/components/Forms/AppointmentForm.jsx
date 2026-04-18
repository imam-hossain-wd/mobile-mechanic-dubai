"use client";

import { CalendarIcon, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format, addDays} from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  DrawerClose
} from "@/components/ui/drawer";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  service: z.string().min(1, {
    message: "Please select a service.",
  }),
  date: z.date({
    required_error: "Please select a date for your appointment.",
  }),
  time: z.string().min(1, {
    message: "Please select a time for your appointment.",
  }),
  message: z.string().optional(),
});

const services = [
  "Car AC Repair",
  "Battery Replacement",
  "Engine Diagnostic",
  "Radiator Repair",
  "Brake Service",
  "Oil Change",
  "Other",
];

const timeSlots = [
  "09:00 AM", "09:30 AM",
  "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM",
  "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM",
];

// Function to get available dates (next 30 days excluding weekends)
const getAvailableDates = () => {
  const availableDates = [];
  const today = new Date();
  
  for (let i = 0; i < 30; i++) {
    const date = addDays(today, i);
    const dayOfWeek = date.getDay();
    // Exclude weekends (0 = Sunday, 6 = Saturday)
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      availableDates.push(date);
    }
  }
  
  return availableDates;
};

export function AppointmentForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      date: undefined,
      time: "",
      message: "",
    },
  });

  const availableDates = getAvailableDates();

  // Function to check if a date is available
  const isDateAvailable = (date) => {
    return availableDates.some(availableDate => 
      availableDate.toDateString() === date.toDateString()
    );
  };

  function onSubmit(values) {
    console.log(values);
    // Here you would typically send the data to your backend
    alert(`Appointment booked successfully for ${format(values.date, 'PPP')} at ${values.time}`);
    form.reset();
  }

  return (
    <div className="relative">
      {/* Close Button for Drawer */}
      <DrawerClose className="absolute -top-2 right-2 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-6 w-6 text-gray-600" />
        <span className="sr-only">Close</span>
      </DrawerClose>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="md:col-span-1">
                  <FormLabel className="text-sm md:text-base">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
                      {...field} 
                      className="h-10 md:h-11 text-sm md:text-base"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="md:col-span-1">
                  <FormLabel className="text-sm md:text-base">Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="+971 50 123 4567" 
                      {...field} 
                      className="h-10 md:h-11 text-sm md:text-base"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="md:col-span-1">
                  <FormLabel className="text-sm md:text-base">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="your@email.com" 
                      {...field} 
                      className="h-10 md:h-11 text-sm md:text-base"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* Service Field */}
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem className="md:col-span-1">
                  <FormLabel className="text-sm md:text-base">Service Needed</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:h-11 md:text-base"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* Date Field - Fixed */}
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col md:col-span-1">
                  <FormLabel className="text-sm md:text-base">Appointment Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "h-10 pl-3 text-left font-normal text-sm md:h-11 md:text-base",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => !isDateAvailable(date)}
                        initialFocus
                        className="p-3"
                        modifiers={{
                          available: availableDates,
                        }}
                        modifiersStyles={{
                          available: {
                            fontWeight: 'bold',
                            color: 'green',
                          }
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* Time Field */}
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem className="md:col-span-1">
                  <FormLabel className="text-sm md:text-base">Preferred Time</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:h-11 md:text-base"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm md:text-base">Additional Information</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your car and any specific issues..."
                    className="resize-none min-h-[80px] text-sm md:text-base md:min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full h-12 text-sm md:text-base md:h-14 font-semibold bg-green-600 hover:bg-green-700"
          >
            Confirm Appointment
          </Button>
        </form>
      </Form>
    </div>
  );
}

