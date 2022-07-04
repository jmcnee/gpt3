import React from 'react'
// Instead of importing the containers / components on multiple lines, here we are pointing the import to a folder (index.js isn't needed, since it will load it automatically, but we place the index.js here so we can understand the approach. This is one liner:)
import { Footer, Blog, Possibility, Features, Whatgpt3, Header} from './containers/index';
import { CTA, Brand, Navbar} from './components/index';
// Here is the other, mail overall .css file which will set our 'baseline' css, note that the main color palette will be contained in 'index.css'
import './App.css';
// Here is the main App that contains all our components and containers where they will be sourced via the function 'App' which is sent to the index.js where it will be rendered in the ID 'root'
const App = () => {
return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <Whatgpt3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
)
}

export default App
