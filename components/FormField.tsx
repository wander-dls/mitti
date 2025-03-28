import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { Control, Controller, FieldValues, Path, useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
    username: z.string().min(2).max(50),
  })

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    label: string
    placeholder?: string
    type?: "text" | "email" | "password" | "file"
}


const FormField = ({ control, name, label, placeholder, type="text"}: FormFieldProps<T>) => (
    <>
       <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem>
                  <FormLabel className='label'>{label}</FormLabel>
                  <FormControl>
                    <Input className='input' placeholder={placeholder} {...field} type={type}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
            )}
          />
          
    </>
)

export default FormField