import { cn } from "@/lib/utils";
import Link from "next/link";

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  className?: string;
}

export function SocialIcon({ icon, href, className }: SocialIconProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all",
        "hover:bg-primary/20 hover:text-primary",
        "dark:bg-background dark:text-B2BFE2 dark:hover:bg-8C52FF/20 dark:hover:text-A7FFEB dark:hover:scale-110",
        className
      )}
    >
      {icon}
    </Link>
  );
}
