import { Formik } from "formik";
import generateImage from "./utils/generateImage";
import getRandomInt from "./utils/getRandomInt";

function PromptBar({PushGeneratedImage}){

    async function handleformsubmit(values){
        const generatedImage = await generateImage(values).then((value) => {PushGeneratedImage(value)});
        
    }

    return(
        <>
            <div className="flex justify-center">
                <div className="text-xl m-4 p-3 rounded-[26px] w-2/4 bg-[#414868]"> 
                    <Formik
                    initialValues={{
                        prompt: ''
                    }}
                    onSubmit={
                        (value, {setSubmitting}) => {
                            handleformsubmit(value);
                            // console.log(getRandomInt(3,7)*40+20);
                            setSubmitting(false);
                        }}
                    >
                        {({
                        values,
                        handleBlur,
                        handleChange, 
                        handleSubmit,
                        isSubmitting
                        }) => (
                        <div className="flex flex-row">
                        
                        <div className="flex justify-center items-end rounded-full mx-1">
                            <svg width="32px" height="32px" viewBox="-2.4 -2.4 28.80 28.80" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)" stroke="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#813d9c" strokeWidth="0.096"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" stroke="currentcolor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></g>
                            </svg>
                        </div>

                        <div className="flex-grow px-2">
                            <textarea placeholder="Prompt ImzGen" rows={1} className="resize-none w-full bg-transparent outline-none" wrap="on" type="prompt" name="prompt" onBlur={handleBlur} onChange={handleChange} value={values.prompt}>
                            </textarea>
                        </div>

                        <div className="flex justify-center items-end">
                            <button className="" type="submit" onClick={handleSubmit} disabled={isSubmitting}>
                            <div className="flex justify-center items-end rounded-full mx-1 bg-[#16161E] hover:bg-white hover:text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                                <path fill="currentColor" fillRule="evenodd" d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            </button>
                        </div>

                        </div>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default PromptBar;