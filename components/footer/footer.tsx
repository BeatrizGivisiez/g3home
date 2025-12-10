"use client";
import {
  EnvelopeSimpleIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  BookOpenIcon,
} from "@phosphor-icons/react/dist/ssr";
import {
  brandInfo,
  projectsLinks,
  menuLinks,
  politicasLinks,
  livroReclamacoesLink,
  contactInfo,
  socialLinks,
  copyrightText,
} from "./constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-montserrat font-extrabold text-xl">
                  {brandInfo.name}
                </span>
              </div>
              <span className="font-montserrat text-xl font-extrabold">
                {brandInfo.fullName}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              {projectsLinks.map((project) => (
                <p key={project.url} className="text-foreground/70">
                  {project.label}{" "}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    {project.url}
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">
              Menu
            </h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">
              Políticas
            </h4>
            <ul className="space-y-3">
              {politicasLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={livroReclamacoesLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm group"
                >
                  <BookOpenIcon
                    size={18}
                    className="group-hover:text-primary"
                  />
                  {livroReclamacoesLink.label}
                </a>
              </li>
            </ul>
          </div>

          {/* Contactos & Informações */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">
              Contactos
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={contactInfo.phone.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm group"
                >
                  <PhoneIcon
                    size={18}
                    className="group-hover:text-primary shrink-0"
                  />
                  {contactInfo.phone.label}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.email.href}
                  className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm group"
                >
                  <EnvelopeSimpleIcon
                    size={18}
                    className="group-hover:text-primary shrink-0"
                  />
                  {contactInfo.email.label}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-foreground/60 text-sm">
                  <ClockIcon size={18} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs">{contactInfo.schedule.label}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2 text-foreground/60 text-sm">
                  <MapPinIcon size={18} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs">{contactInfo.address.line1}</p>
                    <p className="text-xs">{contactInfo.address.line2}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-foreground/60 text-sm">
            © {currentYear} {copyrightText}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-sm border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
