import React,{useState} from 'react'

export default function Contact() {

    const[data,setdata]= useState({
        fullName:'',
        Email:'',
        Number:'',
        Messege:''
    })
    

    const fromSubmit=(e)=>{
        e.preventDefault();
        alert( `${data.fullName} ${data.Email} ${data.Number} ${data.Messege}`)
    }
    const InputEvent= (event) =>{
        const {name, value}= event.target;

        setdata((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }

    return (
        <div className="con">
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-10 mx-auto">
                    <form onSubmit={fromSubmit}>
                            <div class="form-group mb-2">
                                <input type="text" name="fullName"  value={data.fullName} onChange={InputEvent} placeholder="Enter your fullName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> 
                            </div>
                            <div class="form-group mb-2">
                                <input type="text" name="Email"  value={data.Email} onChange={InputEvent} placeholder="Enter your Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> 
                            </div>
                            <div class="form-group mb-2">
                                <input type="number" name="Number" value={data.Number} onChange={InputEvent} placeholder="Enter your Phone Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> 
                            </div>
                            <div class="form-group mb-2">
                                <textarea type="text" name="Message"  value={data.Messege} onChange={InputEvent} placeholder="Message" class="form-control" id="exampleFormControlTextarea1" />
                            </div>
                           
                            <button type="submit" class="btn btn-outline-dark">Submit</button>
                     </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
