import React from 'react';


const Subscrive = () => {
    return (
        <div className="container w-50 align-center bg-primary rounded-3 mt-5">
            <h1 className="mt-5 p-3 text-dark">Subscribe To Our Newsletter For Latest Update</h1>
            <form class="row g-1 ms-5">
  
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="email" class="form-control" placeholder="Enter Your Email"/>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-dark mb-3">Subscrive</button>
  </div>
</form>
            
  
            
        </div>
    );
};

export default Subscrive;