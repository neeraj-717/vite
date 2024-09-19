   import React, { useState } from 'react'
   import img1 from '../react in java script/img1.jpg'
   import img2 from '../react in java script/img2.jpg'
   import img3 from '../react in java script/img3.jpg'
   import img4 from '../react in java script/img4.jpg'
   import img5 from '../react in java script/img5.jpg'
   import img6 from '../react in java script/img6.jpg'
   function image_slider() {
      let imgarr = [img1, img2, img3, img4, img5, img6]
      let [count, setCount] = useState(0)
      function changenext(t) {
         

            setCount(count + 1)
        
      }
      function changeprivu() {
       

            setCount(count - 1)
        


      }
      function handleClick(imageindex) {
         setCount(imageindex)
      }

      return (
         <div >
            <div className=' border shedow rounded m-auto mt-5' style={{ width: "45vw" }}>
               <h1 className='text-center p-2 '>Image Slider</h1>
               <div className='m-auto w-50' style={{ width: '350px ', height: '200px', }} >
                  <img src={imgarr[count]} alt="" style={{ width: '350px ', height: '200px', borderRadius: '8px' }} />

               </div>
               <h5 className='text-center p-1'>Image No:-{count
                  + 1}</h5>
               <div className='text-center py-5 '>
                  <buttom Default={count>0} key="t" className=" btn btn-ms btn-outline-success border m-1 btn-hover " onClick={changeprivu}>Privu</buttom>
                  <buttom className="btn btn-ms btn-outline-warning m-1 btn-warning-hover" onClick={changenext}>Next</buttom>

               </div>
               <div className="imgs d-flex justify-content-center gap-2">
                  {

                     imgarr.map((v, i) => {

                        return (

                           <img className='imgs pb-5' src={v} onClick={() => handleClick(i)} style={{ width: '100px' }} />

                        )

                     })

                  }
               </div>
            </div>
         </div>
      )
   }

   export default image_slider


