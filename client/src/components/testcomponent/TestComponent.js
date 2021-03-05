import react from 'react'
import './TestComponent.css'

export const TestComponent = (props) => {

    return (
        <>
            <h1 className="title">
                {props.name}
                {props.age}
                </h1>
        </>
    )
}