import React from "react"

const ThemeContext=React.createContext('light');

export default ThemeContext;

/*
Context Creation: First, you create a context using React.createContext(). This is like setting up a global store for values you want to share.

Provider: You use a Provider component to wrap the parts of your app where you want to share the context. 
The Provider takes a value prop that you want to be accessible by other components.

useContext Hook: In any component inside the Provider, you can use the useContext hook to access the value stored in the context. */