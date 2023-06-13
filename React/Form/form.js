import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../Form.css";

export const Form = () => {
  
  const schema = yup.object().shape({
    //you can pass the error message in the each function 
    fullName: yup.string().required("Your Full Name is Required"),//if the user submit empty show message
    email: yup.string().email("it needs to be an email").required(),
    age: yup.number().positive().integer().min(18).required(),
    //positive()=so the input must be positive number , interger()= so its not a fraction, min() to add age limit
    password: yup.string().min(4).max(20).required(),
    //the user need to  make password with minimum 4 char and max char if 20
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password dont match").required(),
    //to check if its the same as the password
    
  })
  
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data) 
  }
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      {/* to show error message see the message above on the schema you can also style the error message in css*/}
      <input type="text" placeholder="Email..." {...register("email")}/>
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age..." {...register("age")}/>
      <p>{errors.age?.message}</p>
      <input type="password" placeholder="Password..." {...register("password")}/>
      <p>{errors.password?.message}</p>
      <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
      <p>{errors.confirmPassword?.message}</p>
      <input className="submit" type="submit" />
    </form>
  );
};
