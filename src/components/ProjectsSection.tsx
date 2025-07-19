import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Github, Link } from 'lucide-react';

// Image Slider Component for auto-sliding images
const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative h-48 overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const androidProjects = [
  {
    title: 'Mindraft - AI Notes Taking App',
    description: '🚀 Mindraft AI – The Smartest Note-Taking App!',
    longDesc: 'Built a cross-platform AI note app with Flutter, Supabase, Google Gemini API, and AssemblyAI. Converts text, images, PDFs, voice, and YouTube into markdown notes. Includes OCR, voice-to-text, Google Sign-In, offline mode, and real-time backend.',
    images: ['/m1.jpeg', '/m2.jpeg', '/m3.jpeg'], // Multiple images for auto-sliding
    tags: ['Flutter', 'Supabase', 'Gemini API', 'AssemblyAI', 'OCR', 'Markdown', 'AI Notes'],
    github: 'https://github.com/codewithkd77/Mindraft-AI',
    download: 'https://play.google.com/store/apps/details?id=com.project.mindraft',
    hasImageSlider: true // Flag to indicate this project uses image slider
  },
  {
    title: 'TechBuzz - News App.',
    description: 'Built a Flutter news app with AI scraping, real-time updates, and offline reading.',
    longDesc: 'Developed a cross-platform tech news app using Flutter, featuring real-time updates, offline reading, bookmarking, and sharing. Integrated an AI-powered web scraper for automated content fetching, backed by a Node.js and MongoDB system to manage users, articles, and bookmarks efficiently.',
    image: '/tbbanner.jpeg',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'AI Web Scraping', 'REST API', 'Custom UI', 'Cross-Platform', 'Offline Support', 'Bookmarking'],

    github: 'https://github.com/codewithkd77/technews-flutter',
    download: 'https://github.com/codewithkd77/technews-flutter/releases/download/v1.0.0/app-release.apk'
  },

  /*{
    title: 'Breezy — Forecasts that feel light',
    description: 'Simple weather forecast app with a clean interface and location-based updates.',
    longDesc: 'Displays real-time weather data via OpenWeatherMap API and much more',
    image: '/Breezy.png',
    tags: ['Jetpack Compose', 'State Management', 'ViewModel', 'Kotlin', 'geocoder', 'material3'],
    github: 'https://github.com/Dev-Aditya-More/BreezyTheApp',
    download: 'https://github.com/Dev-Aditya-More/BreezyTheApp/releases/download/v1.0.0/app-debug.apk'
  },

  {
    title: 'TicTacToe Game',
    description: 'Simple and clean TicTacToe game with Compose.',
    longDesc: 'Classic two-player game with a responsive Compose UI. Showcases logic separation, UI states, and win/draw detection.',
    image: 'https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Jetpack Compose', 'State Handling', 'Game Logic', 'Kotlin'],
    github: 'https://github.com/Dev-Aditya-More/TicTacToeGame',
  },
  {
    title: 'QR Code Scanner',
    description: 'Android app to scan QR codes using ML Kit and CameraX.',
    longDesc: 'Lightweight scanner using Google ML Kits Barcode API, with real-time decoding and camera control using CameraX. Kotlin-based implementation.',
    image: 'https://images.unsplash.com/photo-1595079676714-d804bc1095b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['CameraX', 'ML Kit', 'QR Scanner', 'Kotlin', 'Jetpack'],
    github: 'https://github.com/Dev-Aditya-More/QRcodeScanner',
  },
  */
  {
    title: 'More soon',
    description: 'More Flutter projects coming soon!',
    longDesc: 'Exciting new projects are on the way. Stay tuned!',
    image: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?q=80&w=1170&auto=format&fit=crop',
    tags: ['Coming Soon'],
    github: null,
  }
];

const devopsProjects = [
  {

    title: 'coming soon',
    description: 'DevOps projects in development!',
    longDesc: 'Working on advanced DevOps automation, cloud-native solutions, and infrastructure optimization projects. Stay tuned for updates!',
    image: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?q=80&w=1170&auto=format&fit=crop',
    tags: ['Coming Soon'],
    github: null,

  }
];

const ProjectGrid = ({ projects, githubUrl }) => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {projects.map((project, index) => (
        <Card key={index} className="project-card flex flex-col h-full">
          {project.hasImageSlider ? (
            <ImageSlider images={project.images} />
          ) : (
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          )}
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground mb-4">{project.longDesc}</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.tags.map((tag, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">{tag}</Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            {project.github && (
              <Button variant="outline" size="sm" asChild className="flex-1">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-1" /> GitHub
                </a>
              </Button>
            )}

            {project.download && (
              <Button variant="default" size="sm" asChild className="flex-1">
                <a href={project.download} target="_blank" rel="noopener noreferrer">
                  {project.title.includes('Mindraft') ? 'Google Play Store' : 'Download APK'}
                </a>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>

    <div className="text-center">
      <p className="text-muted-foreground mb-4">
        Want to see more of my work?
      </p>
      <Button variant="outline" asChild>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Github size={18} className="mr-2" /> View All Projects
        </a>
      </Button>
    </div>
  </>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="section bg-muted/30">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <Tabs defaultValue="android" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="android">Android Development</TabsTrigger>
            <TabsTrigger value="devops">DevOps & Infrastructure</TabsTrigger>
          </TabsList>

          <TabsContent value="android">
            <ProjectGrid
              projects={androidProjects}
              githubUrl="https://github.com/codewithkd77"
            />
          </TabsContent>

          <TabsContent value="devops">
            <ProjectGrid
              projects={devopsProjects}
              githubUrl="https://github.com/codewithkd77"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
