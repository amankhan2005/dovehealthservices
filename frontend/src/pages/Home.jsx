 import React from 'react';
  import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import ServicesGrid from '../components/ServicesGrid';
 import FAQPreview from '../components/FAQPreview';
import ContactForm from '../components/ContactSection';
 import Footer from '../components/Footer';


export default function Home(){
return (
<div>
 
<Hero />
<AboutPreview />
<ServicesGrid />
 <FAQPreview />
 <ContactForm />
  
</div>
);
}