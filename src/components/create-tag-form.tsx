import { Check, X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "./ui/button";
import * as Dialog from '@radix-ui/react-dialog'

const createTagSchema = z.object({
    name: z.string().min(3, { message: 'Minimum 3 characters' }),
    slug: z.string(),
})

type CreateTagSchema = z.infer<typeof createTagSchema>

function getSlugFromString(input: string): string {
    return  input
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-');
  }

export function CreateTagForm() {
    const { register, handleSubmit, watch } = useForm<CreateTagSchema>({
        resolver: zodResolver(createTagSchema)
    })

    function createTag(data: CreateTagSchema) {
        console.log(data)
    }

    const slug = watch('name') 
    ? getSlugFromString(watch('name')) 
    : ''

    return (
        <form onSubmit={handleSubmit(createTag)} className='w-full space-y-6'>
            <div className='space-y-2'>
                <label htmlFor='name' className='text-sm font-medium block'>Tag name</label>
                <input
                    {...register('name')}
                    id='name'
                    type='text'
                    className='border border-zinc-800 rounded-lg px-3 py-2.5 text-sm bg-zinc-800/50 w-full'
                />
            </div>

            <div className='space-y-2'>
                <label htmlFor='slug' className='text-sm font-medium' >Slug</label>
                <input
                    {...register('slug')}
                    id='slug'
                    type='text'
                    value={slug}
                    className='border border-zinc-800 rounded-lg px-3 py-2.5 text-sm bg-zinc-800/50 w-full'
                    readOnly
                />
            </div>

            <div className='flex items-center justify-end gap-2'>
                <Dialog.Close asChild>
                    <Button>
                        <X className='size-3' />
                        Cancel
                    </Button>
                </Dialog.Close>

                <Button className='bg-teal-400 text-teal-950'>
                    <Check className='size-3' />
                    Save
                </Button>
            </div>
        </form>
    )
}