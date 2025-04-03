import {ReactNode } from "react";

type props = {
    children: ReactNode,
}
const Li = ({children}:props) => {
    return(
        <li className="mx-2">{children}</li>
    )
}
export default Li;