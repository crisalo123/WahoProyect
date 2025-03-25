
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseLayout } from "@/feature/core/ui/base-layout";

import { Spinner } from "../core";

import { useAuthStore } from '../contex/AuthContext';

import { CarruselHome } from "../core/component/carruselHome/carruselHome";
import { Promotion } from "../core/component/promotion";








export const HomePage = () => {

  const { isAuthenticated } = useAuthStore()
  const navigate = useNavigate();


   
  const [showNavBar, setShowNavBar] = useState(true);
   
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const handleResize = () => {
      setShowNavBar(window.innerWidth > 640); 
    };

    handleResize();
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  if (!isAuthenticated) return (
     <Spinner className='fixed inset-0 flex items-center justify-center text-red-300' />
  );

 

  return (
    <BaseLayout
    header
    navBar={true}  
    
  >
  <div className="p-0"> 
    <div> 
   <Promotion />
   </div>
   <div>
    <CarruselHome />
   </div>
  </div>
    </BaseLayout>
  )
}


