import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:contact@inferagenix.com", label: "Email" },
  ];

  return (
    <div className="flex items-center space-x-6">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-muted-foreground hover:text-primary transition-colors duration-300 cosmic-glow hover:scale-110 transform"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;