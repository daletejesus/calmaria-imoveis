import { h2 } from "framer-motion/client"

type Props = {
    text: string
}

export function GeneralTitle({text}: Props) {
    return (
        <h2 className="font-bold text-2xl">{text}</h2>
    )
}

export function PageTextH2({text}: Props) {
    return (
        <h2 className="text-4xl text-black">{text}</h2>
    )
}