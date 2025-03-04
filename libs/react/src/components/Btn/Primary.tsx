import { FC } from "react"

interface BtnPrimaryProps {
    label?: string
}

const Primary:FC<BtnPrimaryProps> = ({
    label = 'Primary'
}) => {
    return (
        <button>{label}</button>
    )
}

export default Primary