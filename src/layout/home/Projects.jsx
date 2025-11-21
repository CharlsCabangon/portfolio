import Heading from '@/components/Heading';
import Card from '@/components/ui/Card';

export default function Projects() {
  // mock data
  const projects = [
    {
      id: 1,
      title: 'Greptile',
      description: 'Developer tool website',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=672&h=494&fit=crop',
      link: '',
    },
    {
      id: 2,
      title: 'CodeRabbit',
      description: 'AI code review platform',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=672&h=494&fit=crop',
      link: '',
    },
    {
      id: 3,
      title: 'Shopify',
      description: 'Ecommerce platform website',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=672&h=494&fit=crop',
      link: '',
    },
    {
      id: 4,
      title: 'Base UI',
      description: 'Documentation website',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=672&h=494&fit=crop',
      link: '',
    },
    {
      id: 5,
      title: 'Graphite',
      description: 'Developer tool website',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=672&h=494&fit=crop',
      link: '',
    },
  ];

  return (
    <section className="space-y-sm">
      <div className="ml-sm">
        <Heading level="h4">works</Heading>
      </div>
      <div className="w-full">
        <div className="mx-auto w-full max-w-7xl">
          <div className="gap-sm grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
