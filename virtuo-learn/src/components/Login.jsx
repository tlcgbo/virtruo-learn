import { useState } from "react";
import picture from "../assets/picture.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import GoogleBtn from "./GoogleBtn";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const initialState = {
  email: '',
  password: '',
}

const Login = ({ setIsAuth }) => {

    const [formData, setFormData] = useState(initialState);

    const {email, password} = formData;

    let navigate = useNavigate();

    const validateForm = () => {
      if(!email || !password){
        toast.error("Please, fill in all input fields")
      }
    }

   const handleSubmit = async (e) => {
    e.preventDefault();

    validateForm();
    try{
      if(email && password) {
        const {user} = await signInWithEmailAndPassword(
          auth, email, password
        );
        localStorage.setItem('isAuth', true);
        toast.success('log in successfully');
        setIsAuth(true);
        navigate("/")
      }
    } catch (error) {
      toast.error('invalid credentials');
      console.log(error)
    }
   }

   const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
   };
    return(
        <>
             <div className="w-full min-h-screen flex flex-col md:flex-row items-start">
        
        <div className="relative w-full md:w-1/2 h-64 md:h-full flex flex-col">
          <img src={picture} className="w-full h-full object-cover" alt="" />
        </div>

        <motion.div
          className="w-full md:w-1/2 h-auto flex flex-col p-8 md:p-28 justify-between"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-xl md:text-4xl font-semibold mb-2">Login</h3>
              <p className="text-sm md:text-base mb-2">Welcome back, Great to see you again!</p>
            </div>

            <div className="w-full flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full text-white py-2 md:py-4 my-2 bg-transparent border-b border-white outline-none focus:outline-none"
                value={email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full text-white py-2 md:py-4 my-2 bg-transparent border-b border-white outline-none focus:outline-none"
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full flex flex-col my-4">
            <button className="w-full text-white bg-gradient-to-r  from-blue-600 to-blue-900 rounded-md py-3 md:py-4 text-center flex items-center justify-center">
              Login
            </button>
          </div>
          
          <GoogleBtn setIsAuth={setIsAuth} />

          <div className="w-full flex items-center justify-center">
            <p className="text-xs md:text-sm font-normal text-white">
              Don't have an account?<Link to="/signup" className="font-semibold underline underline-offset-2 cursor-pointer"> Click here</Link>
            </p>
          </div>
        </motion.div>
      </div>
        </>
    )

}

export default Login
  
