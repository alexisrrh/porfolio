import Contact from "../components/Contact";
import Seo from "../components/Seo";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contacto | Alexis Rodríguez"
        description="Contacto profesional de Alexis Rodriguez: email, LinkedIn, GitHub, CV y WhatsApp."
      />
      <Contact />
    </>
  );
}
