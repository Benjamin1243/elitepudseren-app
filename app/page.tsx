import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import MainWrapper from "@/components/mainWrapper";
import PartnersShow from "@/components/PartnersShow";
import TextBackgroundSection from "@/components/TextBackgroundSection";
import TextImageSection from "@/components/TextImageSection";
import Image from "next/image";

export default function Home() {
  const inputs = [{"name": "name", "placeholder": "Navn "}, {"name": "adress", "placeholder": "Adresse"}, {"name": "telephone", "placeholder": "Telefonn"}]
  return (
    <>
   <Hero></Hero> 
  <Form inputs={inputs}></Form>
  <MainWrapper>
  <PartnersShow></PartnersShow>
    <TextImageSection></TextImageSection>

  </MainWrapper>
    <TextBackgroundSection></TextBackgroundSection>
   


  </>
  );
}
