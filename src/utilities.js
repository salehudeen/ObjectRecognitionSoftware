import { createContext } from "react";

export const drawRect = (detections, ctx) => {
  detections.forEach(prediction=>{
      // were getting our prediction results
      const [x,y,width,height] = prediction ['bbox'];
      const text = prediction['class'];
     
      //styling
      const color = 'red';
      ctx.strokeStyle = color
      ctx.font = "18px Arial"
      ctx.fillStyle = color

      //rectangle 
       ctx.beginPath()
       ctx.fillText(text,x,y)
       ctx.rect(x,y,width,height)
       ctx.stroke()
  }) 



}