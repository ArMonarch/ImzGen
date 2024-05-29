import {Formik} from "formik";
import { useState } from "react";

function PromptTextArea() {

  return (
    <div className="">
      <div className="flex justify-center">
        <div className="text-xl p-3 rounded-[26px] w-2/4 bg-[#414868]">
          
          <div className="flex flex-row">
            
            <div className="flex justify-center items-end rounded-full mx-1">
              <svg width="32px" height="32px" viewBox="-2.4 -2.4 28.80 28.80" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)" stroke="#000000">

                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#813d9c" strokeWidth="0.096"/>

                <g id="SVGRepo_iconCarrier"> <path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" stroke="currentcolor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></g>

              </svg>
            </div>

            <div className="flex-grow px-2">
              <textarea placeholder="Prompt ImzGen" rows={1} className="bg-transparent">
              </textarea>
            </div>

            <div className="flex justify-center items-end">
              <div className="flex justify-center items-end rounded-full mx-1 bg-[#16161E]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <path fill="currentColor" fillRule="evenodd" d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}


function App() {

  const [Generation, setGeneration] = useState([]);

  function pushGeneration (value) {
    setGeneration([...Generation, value])
  }

  async function handleFormSubmit(values, onSubmitProps){

    const requestBody = {
      "prompt": values.prompt,
      "negative_prompt":"(nsfw, naked, nude, deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, mutated hands and fingers:1.4), (deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, disconnected limbs, mutation, mutated, ugly, disgusting, amputation",
      "styles":[],
      "seed": -1,
      // "subseed": -1,
      // "subseed_strength": 0,
      // "seed_resize_from_h": -1,
      // "seed_resize_from_w": -1,

      // "batch_size": 1,
      // "n_iter": 1,
      
      "sampler_name": "DPM++ SDE",
      "scheduler": "Karras",
      
      "steps": 6,
      "cfg_scale": 1.5,

      "width": 512,
      "height": 768,

      // "restore_faces": null,
      // "tiling": null,
      // "do_not_save_samples": false,
      // "do_not_save_grid": false,
      // "eta": null,
      // "denoising_strength": null,
      // "s_min_uncond": null,
      // "s_churn": null,
      // "s_tmax": null,
      // "s_tmin": null,
      // "s_noise": null,
      // "override_settings": null,
      // "override_settings_restore_afterwards": true,
      // "refiner_checkpoint": null,
      // "refiner_switch_at": null,
      // "disable_extra_networks": false,
      // "firstpass_image": null,
      // "comments": null,
      // "enable_hr": false,
      // "firstphase_width": 0,
      // "firstphase_height": 0,
      // "hr_scale": 2.0,
      // "hr_upscaler": null,
      // "hr_second_pass_steps": 0,
      // "hr_resize_x": 0,
      // "hr_resize_y": 0,
      // "hr_checkpoint_name": null,
      // "hr_sampler_name": null,
      // "hr_scheduler": null,
      // "hr_prompt": "",
      // "hr_negative_prompt": "",
      // "force_task_id": null,
      // "sampler_index": "Euler",
      // "script_name": null,
      // "script_args": [],
      // "send_images": true,
      // "save_images": false,
      // "alwayson_scripts": {},
      // "infotext": null
    }
    console.log(requestBody)
    const request = await fetch("http://127.0.0.1:9000/sdapi/v1/txt2img", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(requestBody)
    })

    const response = await request.json()
    const image = response.images[0]

    pushGeneration(image)
  }

  return (
    <div className="flex flex-col h-[100vh]">
      
      {/* Nav Bar code Start */}
      <div className="flex flex-row justify-between items-center sticky px-3 py-1  bg-[#16161e]/70 backdrop-blur-sm">
        
        <div className="absolute text-4xl left-1/2 -translate-x-1/2">ImzGen</div>
        
        <div className="">Side-Bar</div>
        <div className="text-5xl rounded-full px-2 bg-[#414868]">P</div>
      </div>
      {/* Nav bar code End */}

      <div className="flex-1 overflow-y-auto" id="container">
         { Generation && Generation.map( (image, index) => (
          <div key={index}>
            <img src={`data:image/png;base64,${image}`} width={"512px"} height={"768px"} />
          </div>
         ) )}
      </div>

      {/* Prompt Bar code Start */}
      <div className="flex justify-center">
        <div className="text-xl m-4 p-3 rounded-[26px] w-2/4 bg-[#414868]"> 
          <Formik
          initialValues={{prompt:'', steps:5}}
          onSubmit={handleFormSubmit}
          >
            {({
              values,
              handleChange, 
              handleSubmit
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
                <textarea placeholder="Prompt ImzGen" rows={1} className="resize-none w-full bg-transparent outline-none" wrap="on" type="prompt" name="prompt" onChange={handleChange} value={values.prompt}>
                </textarea>
              </div>

              <div className="flex justify-center items-end">
                <button className="" type="submit" onClick={handleSubmit}>
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
      {/* Prompt Bar code end */}
    </div>
  )
}

export default App;
