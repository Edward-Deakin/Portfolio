// src/components/ProfileAvatar.tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

type Props = {
    src: string;
    alt?: string;
    fallback: string;
    className?: string;
};

export default function ProfileAvatar({ src, alt, fallback, className }: Props) {
    return (
        <Avatar className={className ?? "h-32 w-32 text-2xl"}>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    );
}