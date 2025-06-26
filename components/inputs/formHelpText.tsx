import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CircleHelp } from 'lucide-react';
import { JSX } from 'react';

const formHelpText = (helpText: JSX.Element) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className='pb-2'>
                    <CircleHelp size={16} className='text-zinc-500' />
                </TooltipTrigger>
                <TooltipContent className='text-white bg-violet-900' align='start'>
                    {helpText}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export { formHelpText };
