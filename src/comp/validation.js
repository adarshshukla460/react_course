const validation =(value) =>{
  
    let errors={};

    if(!value.fullname){
        errors.fullname="Name is required."
    }
    if(!value.email){
        errors.email="Email is required."
    } else if(!/\S+@\S+\.\S+/.test(value.email)){
        errors.email="Email is invalid."
    }
    if(!value.password){
        errors.password="Password is required."
    }else if(value.password.length <5){
        errors.password ="Password must be more than five characters."
    }
    
    return errors;
}

export default validation;