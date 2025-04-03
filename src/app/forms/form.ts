'use server'
export async function formDateFn(previousState:{email: FormDataEntryValue | null;}, formData: FormData){

    const email = formData.get("email");


return {email}
}
export default formDateFn;