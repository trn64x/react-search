'use server'
export async function formDateFn(previousState:{query: FormDataEntryValue | null;}, formData: FormData){

    const query = formData.get("query");


return {query}
}
export default formDateFn;