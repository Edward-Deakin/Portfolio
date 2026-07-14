// src/components/SocialButton.tsx
import {buttonVariants} from "@/components/ui/button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/fontawesome-svg-core';

type Props = {
    href: string;
    icon: IconDefinition;
    label: string;
    variant?: "default" | "outline" | "ghost" | "secondary" | "destructive" | "link";
    size?: "default" | "sm" | "lg" | "icon";
};

export default function SocialButton({href, icon, label, variant = "outline", size = "icon"}: Props) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`${buttonVariants({
                variant,
                size
            })} !border !border-gray-300 dark:!border-gray-700 hover:bg-accent hover:text-accent-foreground transition-colors no-underline`}
        >
            <FontAwesomeIcon icon={icon}/>
        </a>
    );
}