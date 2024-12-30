import AuthorCard from "@/components/authorcard";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Mega from "@/components/mega";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Feature />
      <Mega />
      <AuthorCard />  
      <Footer /> 
    
    </div>
  );
}
