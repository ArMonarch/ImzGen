import getRandomInt from "./getRandomInt";

async function generateImage(values){
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
        
        "steps": 10,
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
      const request = await fetch("http://127.0.0.1:9000/sdapi/v1/txt2img", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(requestBody)
      })
  
      const response = await request.json();

      const generationResponse = {
        image: response.images[0],
        width: response.parameters.width,
        height: response.parameters.height,
        margin:{
          left: `${(getRandomInt(12,32)*5)+10}px`,
          right: ``,
          top: `${getRandomInt(1,4)*10}px`,
          bottom: ``,
        },
      };

      return generationResponse;

}

export default generateImage;