import { cn } from "@/lib/utils"

interface SkittleProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
}

const Skittle = ({imgSrc, className, dark = false,...props}: SkittleProps) => {

    return (<div className={cn(
        'relative pointer-events-none z-50 overflow-hidden', 
        className)}
        {...props}>
            <img src={dark ? "/skittle"}""className='pointer-events-none z-50 select-none'/>
        </div>
        )    
}

export default Skittle