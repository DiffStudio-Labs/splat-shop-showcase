
import { useToast } from "@/components/ui/use-toast";

type ComingSoonLinkProps = {
  href: string;
  linkName: string;
  children: React.ReactNode;
  className?: string;
};

const ComingSoonLink = ({ href, linkName, children, className = "" }: ComingSoonLinkProps) => {
  const { toast } = useToast();
  
  const handleUnavailableLink = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Coming Soon",
      description: `Our ${linkName} page is coming soon! We're just getting started.`,
      duration: 3000,
    });
  };

  return (
    <a href={href} onClick={handleUnavailableLink} className={className}>
      {children}
    </a>
  );
};

export default ComingSoonLink;
