    import React, { useEffect } from 'react'
    import { useState } from "react";
    function fromvalid() {

      const [Name, setName] = useState("");
      const [Email, setEmail] = useState("");
      const [password, setpassword] = useState("");
      const [cpassword, setcpassword] = useState("");
      const [Submit, setSubmit] = useState("Submit")
      const [arr, setarr] = useState([])
      const [erros, setErros] = useState({})
      const [EditFrom, setEditFrom] = useState(false)
      const [editindex, seteditindex] = useState()


      const ClikSubmit = (e) => {
        e.preventDefault();

       if (verify()) {

         let copyobj =
         {
            name: Name,
            email: Email,
            password: password,
            confpassword:cpassword
          }
          if (EditFrom) {
            // alert("Edit submit")
            
            const updatedArr = [...arr];  
            updatedArr[editindex] = copyobj;
            setarr(updatedArr);
            localStorage.setItem('userInfo', JSON.stringify(updatedArr));

            setName("")
            setEmail("")
            setpassword("")
            setcpassword("")

            setEditFrom (false); 
            seteditindex(null);
            // clearinput()
            setSubmit("Submit")
          }else{
        
 let getLocalarr = JSON.parse(localStorage.getItem('userInfo'))
 getLocalarr.push(copyobj)
 localStorage.setItem('userInfo',JSON.stringify(getLocalarr))
//  console.log(getLocalarr)
 
 setarr(getLocalarr)
          }
                  
        }
      
      };
      
     
      
      useEffect(() => {
        let getLocalarr = JSON.parse(localStorage.getItem('userInfo'))
      setarr(getLocalarr)
        
      
      },[])
      
      

      const handleChangeName = (e) => {
        setName(e.target.value);

      }
      const handleEmail = (e) => {
        setEmail(e.target.value);

      }
      const handlepassword = (e) => {
        setpassword(e.target.value);

      }
      const handlecpassword = (e) => {
        setcpassword(e.target.value);

      }
      let regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
      function verify(params) {
        let valid = true
        let errobj = {};
        if (!Name) {
          valid = false
          errobj.name = "Name is required";

        }
        if (!Email) {
          valid = false
          errobj.email = "email is required";
        } else if (!regx.test(Email)) {
          valid = false

          errobj.email = "invalid email formate";
        }
        if (!password) {
          valid = false
          errobj.password = "4-digits password required"
        } else if (!(password.length > 4)) {
          valid = false
          errobj.password = "4-digits password required"
        }


        if (!(password === cpassword)) {
          valid = false
          errobj.cpassword = " Password is not matched"
        }
        setErros(errobj)
        setTimeout(() => {
          setErros(false)

        }, 1000)
        return valid
      }

      const clearinput = (r) => {
        r.preventDefault();
        setName("")
        setEmail("")
        setpassword("")
        setcpassword("")
      }
      
      const editsubmit=(v,i)=>{
        setEditFrom(true)
        setSubmit("Edit")
      seteditindex(i)
      setName(v.name)
      setEmail(v.email)
      setpassword(v.password)
      setcpassword(v.confpassword)

    }

    const deletecard =(i )=>{
      let getLocalstorage = JSON.parse(localStorage.getItem('userInfo'))
      getLocalstorage.splice(i, 1)
      localStorage.setItem('userInfo', JSON.stringify(getLocalstorage))
      setarr(getLocalstorage)
    }


      
      return (
        <div className=' w-50 border dorder-2 p-5 m-auto'>
          <form action="">
            <label className="w-25 text-center" htmlFor="Nam">Name:-</label>
            <input
              type="text" id="Nam" value={Name} onChange={handleChangeName} className="w-50"
            />
            {true && <p className='text-center' style={{ color: "red" }}>{erros.name}</p>}



            <label className="w-25 text-center" htmlFor="em" >Email:-</label>
            <input type="email" id="em" className="w-50" value={Email} onChange={handleEmail} />
            {true && <p className='text-center' style={{ color: "red" }}>{erros.email}</p>}
            {/* {true && <p style={{color:"black"}}>{erros.email}</p>} */}


            <label className="w-25 text-center" htmlFor="pass">Password:-</label>
            <input type="password" className="w-50" value={password} onChange={handlepassword} id="pass" />
            {true && <p className='text-center ' style={{ color: "red" }} >{erros.password}</p>}

            <label className="w-25 text-center" htmlFor="pass2">CPassword:-</label>
            <input type="password" className="w-50" value={cpassword} onChange={handlecpassword} id="pass2" />
            {true && <p className='text-center ' style={{ color: "red" }}>{erros.cpassword}</p>}
            <div className='m-auto text-center'>
              <button className=' button btn-ms  m-1 text-center' onClick={ClikSubmit} > {Submit}</button>
              <button className='button btn-ms  m-1 text-center' onClick={clearinput}>Clear input</button>
            </div>
          </form>
          <hr />
          <table className='table'>
            <thead >
              <tr >
                <th  scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Gmail</th>
                <th scope="col">Password</th>
                <th scope="col">ConfPassword</th>
                <th scope="col">Tools</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((v, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{v.name}</td>
                    <td>{v.email}</td>
                    <td>{v.password}</td>
                    <td>{v.confpassword}</td>
                    <td className='d-flex'>
                      <button  style={{width:"100px",height:"40px" , borderRadius:"15px"}}  onClick={()=>editsubmit(v,i)} className="btn btn-sm ">Edit</button>
                      <button style={{width:"80px" , borderRadius:"15px"}} onClick={()=>deletecard(i)} className="btn btn-ms ms-2">delete</button>
                    </td>
                  </tr>

                )
              })}

            </tbody>
          </table>
        </div>

      )
    }

  export default fromvalid


