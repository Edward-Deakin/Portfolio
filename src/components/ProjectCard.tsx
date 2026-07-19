// src/components/ProjectCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';

type Props = {
    title: string;
    description: string;
    link: string;
    tags?: string[];
};

export default function ProjectCard({ title, description, link, tags = [] }: Props) {
    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 justify-end">
                <div className="flex gap-2 mb-3 flex-wrap">
                    {tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                {link !== '#' && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm underline">
                        View project →
                    </a>
                )}
            </CardContent>
        </Card>
    );
}