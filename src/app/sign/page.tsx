'use client'
import {formDateFn} from "../forms/form";
import { useActionState } from "react";
import Form from 'next/form'
const Sign = () => {
    const[state,,isLoading] = useActionState(formDateFn, {query:""}
    );
return(
    <main className="flex justify-center items-center h-screen w-screen">
        <Form action="/posts" className="flex flex-col justify-center items-center border-4 border-white w-[50vw] h-[50vh]">
<input className="border-4 text-white border-white h-[5vh] w-[20vw] p-2 m-4" autoComplete="given-email" defaultValue={state.query?.toString() }placeholder="Query" name="query" />
<input className="border-4 text-white border-white h-[5vh] w-[20vw] p-2 m-4" value={isLoading ? "Loading..." : "Submit"} type="submit" />
{state && "fail"}
        </Form>
    </main>
    
)
}
export default Sign;