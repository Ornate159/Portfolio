import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { SOCIALS } from "../constants";

const links = [
  { href: SOCIALS.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: SOCIALS.github, icon: FaGithub, label: "GitHub" },
  { href: SOCIALS.facebook, icon: FaFacebook, label: "Facebook" },
  { href: SOCIALS.instagram, icon: FaInstagram, label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row lg:px-8">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Reeyad Ahmed Ornate
        </p>
        <div className="flex items-center gap-5 text-lg text-neutral-500">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="transition-colors duration-300 hover:text-violet-300"
            >
              <link.icon />
            </a>
          ))}
        </div>
        <a href="#top" className="text-sm text-neutral-500 transition-colors hover:text-neutral-200">
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
