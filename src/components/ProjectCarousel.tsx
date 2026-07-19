// src/components/ProjectCarousel.tsx
import ProjectCard from './ProjectCard';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';

type Project = {
    title: string;
    description: string;
    link: string;
    tags?: string[];
};

type Props = {
    projects: Project[];
};

export default function ProjectCarousel({ projects }: Props) {
    return (
        <Carousel opts={{ align: 'start' }} className="w-full">
            <CarouselContent>
                {projects.map((project) => (
                    <CarouselItem key={project.title} className="basis-full sm:basis-1/2 lg:basis-1/3 h-auto">
                        <ProjectCard {...project} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}