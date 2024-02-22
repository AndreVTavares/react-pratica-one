import { Check, X } from 'lucide-react'
import { Button } from "./ui/button";

export function CreateTagForm() {
    return (
        <form className='w-full space-y-6'>
            <div className='space-y-2'>
                <label htmlFor='name' className='text-sm font-medium block'>Tag name</label>
                <input
                    id='name'
                    type='text'
                    className='border border-zinc-800 rounded-lg px-3 py-2.5 text-sm bg-zinc-800/50 w-full'
                />
            </div>

            <div className='space-y-2'>
                <label htmlFor='slug' className='text-sm font-medium' >Slug</label>
                <input
                    id='slug'
                    type='text'
                    className='border border-zinc-800 rounded-lg px-3 py-2.5 text-sm bg-zinc-800/50 w-full'
                    readOnly
                />
            </div>

            <div className='flex items-center justify-end gap-2'>
                <Button>
                    <X className='size-3' />
                    Cancel
                </Button>
                <Button className='bg-teal-400 text-teal-950'>
                    <Check className='size-3' />
                    Save
                </Button>
            </div>
        </form>
    )
}