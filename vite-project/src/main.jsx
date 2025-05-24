import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

// const reactElement = {
//     type : 'a',
//     props : {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     children: 'Click me to visit google'
// }

const ReactElement = React.createElement(
    'a',
    {href: 'https://www.google.com', target: '_blank'},
    'Click me to visit google'
)

const AnotherElement = (
    <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <MyApp />
    {AnotherElement}
    <br />
    {ReactElement}
    </>
    // We can use MyApp() and it works the same way as <MyApp /> also here we cannot call AnotherElement() because it is not a function but a JSX element.
)
