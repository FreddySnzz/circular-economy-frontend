import { FaGithub } from "react-icons/fa";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  type?: "default" | "sidebar";
};

export default function Footer({ className, type = "default" }: FooterProps) {
  const baseStyles = type === "sidebar" 
    ? "Feito por"
    : "Desenvolvido por";

  return (
    <footer 
      className={`
        bg-green-700 text-white p-6 text-center mt-auto
        ${className}
      `}
    >
      <div className="container mx-auto">
        &copy; 2025 Economia Circular. Todos os direitos reservados.
        <div className="flex justify-center items-center mt-4">
          <span>{baseStyles}</span>
          <a
            href="https://github.com/FreddySnzz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 justify-center items-center ml-2 hover:text-green-200 transition-colors"
          >
            <FaGithub className="text-lg" /> FreddySnzz
          </a>
        </div>
      </div>
    </footer>
  );
};