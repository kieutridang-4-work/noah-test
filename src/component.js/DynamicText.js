import { useState, useImperativeHandle, forwardRef } from 'react'

const DynamicText = forwardRef((_, ref) => {
    const [state, changeState] = useState()
    const updateText = (data) => {
        changeState(data)
    }
    useImperativeHandle(ref, () => {
        return {
            updateText
        }
    })

    return (
        <div>
            {state}
        </div>
    )
})

export default DynamicText