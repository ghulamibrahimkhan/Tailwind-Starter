import ServiceSection from "./service-section"
import { Camera } from 'lucide-react';


export default function ServiceSections() {
   return (
      <>
         <div className="flex justify-between max-w-7xl flex-wrap ">
            <ServiceSection heading="Photo Shoot" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet velit mollitia tempora" camera=<Camera /> />
            <ServiceSection heading="Photo Shoot" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet velit mollitia tempora" camera=<Camera /> />
            <ServiceSection heading="Photo Shoot" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet velit mollitia tempora" camera=<Camera /> />
            <ServiceSection heading="Photo Shoot" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet velit mollitia tempora" camera=<Camera /> />
            <ServiceSection heading="Photo Shoot" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet velit mollitia tempora" camera=<Camera /> />
            <ServiceSection heading="Photo Shoot" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet velit mollitia tempora" camera=<Camera /> />
         </div>
      </>
   )
}
