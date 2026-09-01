import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import Section from "./Section";
import { CONTACT, SOCIALS } from "../constants";

const Contact = () => {
  const items = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: CONTACT.phoneNo,
      href: `tel:${CONTACT.phoneNo.replace(/\s|-/g, "")}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: CONTACT.address,
      href: null,
    },
  ];

  return (
    <Section id="contact" eyebrow="Say hello" title="Get in touch">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glass-card relative overflow-hidden p-8 lg:p-12"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="relative">
          <p className="max-w-2xl font-display text-2xl leading-snug text-white lg:text-3xl">
            Open to roles in <span className="gradient-text">AI quality, operations, and data analytics</span>. Happy to talk about a role, a project, or anything in between.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {items.map((item) => {
              const content = (
                <>
                  <item.icon className="text-lg text-violet-300" />
                  <span className="mt-3 block text-xs uppercase tracking-[0.18em] text-neutral-500">
                    {item.label}
                  </span>
                  <span className="mt-1 block break-words text-sm text-neutral-200">
                    {item.value}
                  </span>
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-violet-400/40 hover:bg-white/[0.05]"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  {content}
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_30px_-6px_rgba(167,139,250,0.8)]"
            >
              <FaEnvelope className="text-xs" />
              Email me
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-neutral-200 transition-colors duration-300 hover:border-white/30 hover:bg-white/5"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-neutral-200 transition-colors duration-300 hover:border-white/30 hover:bg-white/5"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;
