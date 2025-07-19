
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Code, Laptop, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Cross-Platform App Development',
    description: 'Build modern, elegant, and scalable apps using Flutter for Android and iOS.',
    icon: Smartphone
  },
  {
    title: 'Backend Integration',
    description: 'Integrate powerful backends using Firebase, Supabase, and Node.js.',
    icon: Code
  },
  {
    title: 'UI/UX Excellence',
    description: 'Craft smooth, responsive, and user-friendly interfaces with Flutter’s widget system.',
    icon: Laptop
  },
  {
    title: 'End-to-End Deployment',
    description: 'Deploy apps to Google Play Store and backend services on Firebase, AWS, Render, and Vercel.',
    icon: Rocket
  }
];


const AboutSection = () => {
  return (
    <section id="about" className="section bg-muted/30">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
          <p className="text-lg mb-4">
  I'm a passionate Flutter developer focused on building elegant, scalable, and 
  modern cross-platform mobile experiences with Flutter.
</p>
<p className="mb-4">
  Currently exploring advanced UI patterns, state management, and backend integration using 
  Firebase, Supabase, and Node.js. I enjoy sharing my learning journey and dev insights with the Flutter community.
</p>
<p>
  When I'm not coding, you can find me exploring new technologies, contributing to open source, 
  or experimenting with the latest tools in the Flutter ecosystem — and diving into DevOps out of curiosity.
</p>

          </div>
          <div className="flex flex-col justify-center">
            <Card>
              <CardHeader>
                <CardTitle>What I Do</CardTitle>
                <CardDescription>My core services and expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="mt-0.5 bg-primary/10 p-2 rounded-md text-primary">
                        <service.icon size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{service.title}</h3>
                        <p className="text-xs text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
