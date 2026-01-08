 import {
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRegEnvelope,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

import defaultLogo from "../assets/logo.jpeg";
import { useSettings } from "../context/SettingsContext";

export default function Footer() {
  const { settings } = useSettings();

  /* -------- LOGO -------- */
  const logoUrl = defaultLogo;

  /* -------- DEFAULT VALUES -------- */
  const defaultEmail = "info@gentleheartshha.com";
  const defaultPhone = "+1 (508) 873-5711";
  const defaultAddress =
    "231 Main Street, Cherry Valley, MA 01611, United States";

  /* -------- SOCIAL LINKS -------- */
  const instagram =
    "https://www.instagram.com/gentleheartshomecareagency/";
  const twitter = "https://x.com/gentle_hom33244";

  const facebook = settings?.facebook || "";
  const tiktok = settings?.tiktok || "";

  /* -------- CONTACT DATA -------- */
  const address = settings?.address || defaultAddress;
  const addressLink = `https://maps.google.com/?q=${encodeURIComponent(
    address
  )}`;

  const phone = settings?.phone || defaultPhone;
  const phoneHref = `tel:${phone.replace(/[^0-9+]/g, "")}`;

  const email = settings?.email || defaultEmail;
  const cleanedEmail = email.replace(/(<([^>]+)>)/gi, "").trim();

  return (
    <footer className="bg-[#AF3059] text-white relative pt-24 pb-10">
      <div className="absolute top-0 left-0 w-full h-1 bg-white/80" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-16">
        {/* LOGO */}
        <div>
          <img
            src={logoUrl}
            alt="Gentle Hearts Logo"
            className="w-32 rounded-2xl mb-4"
          />
          <p className="text-sm text-white/85 leading-relaxed">
            Providing compassionate, private-pay in-home health care focused on
            dignity, trust, and clinical excellence.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/85">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about-us" className="hover:underline">About Us</a></li>
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
            <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-white/85">
            <li><a href="/services/stroke-recovery-neuro-rehab" className="hover:underline">Stroke Recovery & Neuro-Rehab</a></li>
            <li><a href="/services/dementia-alzheimers-care" className="hover:underline">Dementia & Alzheimer’s Care</a></li>
            <li><a href="/services/post-surgical-recovery" className="hover:underline">Post-Surgical Recovery</a></li>
            <li><a href="/services/comprehensive-care-coordination" className="hover:underline">Care Coordination</a></li>
            <li><a href="/services/concierge-add-ons" className="hover:underline">Concierge & White-Glove Care</a></li>
            <li><a href="/services/private-pay-model" className="hover:underline">Private-Pay Model</a></li>
          </ul>
        </div>

        {/* CONTACT (FIXED ICON ALIGNMENT) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <ul className="space-y-4 text-sm text-white/85">
            {/* LOCATION */}
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-lg flex-shrink-0" />
              <a
                href={addressLink}
                target="_blank"
                rel="noreferrer"
                className="leading-relaxed hover:underline"
              >
                {address}
              </a>
            </li>

            {/* PHONE */}
            <li className="flex items-center gap-3">
              <FaPhone className="text-lg flex-shrink-0" />
              <a href={phoneHref} className="hover:underline">
                {phone}
              </a>
            </li>

            {/* EMAIL */}
           <li className="flex items-start gap-3 min-w-0">
  <FaRegEnvelope className="text-lg mt-1 flex-shrink-0" />
  <a
    href={`mailto:${cleanedEmail}`}
    className="
      hover:underline
      break-all
      sm:break-normal
      sm:whitespace-nowrap
    "
  >
    {cleanedEmail}
  </a>
</li>

          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-3">
            {facebook && (
              <a
                href={facebook}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/10 rounded-md hover:bg-white hover:text-[#AF3059]"
              >
                <FaFacebookF />
              </a>
            )}

            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-md hover:bg-white hover:text-[#AF3059]"
            >
              <FaInstagram />
            </a>

            <a
              href={twitter}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-md hover:bg-white hover:text-[#AF3059]"
            >
              <FaTwitter />
            </a>

            {tiktok && (
              <a
                href={tiktok}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/10 rounded-md hover:bg-white hover:text-[#AF3059]"
              >
                <SiTiktok />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20 mt-16 pt-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Gentle Hearts Home Health Care Agency.  
        {" "}Developed by{" "}
        <a
          href="https://www.webieapp.com/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          WebieApp
        </a>
      </div>
    </footer>
  );
}
