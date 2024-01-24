const Button = (props) =>{
    console.log(props);

    return(
        <button>{props.name}</button>
    )
}

Button.defaultProps ={
    name: "Hola",
    href: "/",
}

export default Button;