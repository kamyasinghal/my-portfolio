import { useState, useEffect } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const PROJECT_MAPPING: Record<string, Partial<Project>> = {
  'vibe-app': {
    title: 'Vibe App',
    description: 'A modern application for connecting and sharing experiences with friends.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop',
    liveUrl: 'https://vibe-app-teal.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
  },
  'brainbuddy': {
    title: 'BrainBuddy',
    description: 'Your AI Study Partner to help you make concise notes before your exams. An intelligent companion that helps students create effective study materials and organize their learning process.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop',
    liveUrl: 'https://brainbuddy-theta.vercel.app/',
    technologies: ['React', 'Node.js', 'AI/ML', 'Tailwind CSS']
  },
  'resume-analyzer': {
    title: 'Resume Analyzer',
    description: 'AI Powered resume analyzer to make your resume interview-ready. Provides comprehensive feedback, suggestions, and optimization tips for better job applications.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=300&fit=crop',
    liveUrl: 'https://kamyasinghal.github.io/resume-analyzer/',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  'my-portfolio': {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing my projects, skills, and achievements. Built with React and Tailwind CSS featuring dark theme, smooth animations, and clean design.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
  }
};

export const useGitHubRepos = (username: string) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const repos: GitHubRepo[] = await response.json();
        
        // Create a map of repo names to repo data for easy lookup
        const repoMap = new Map(
          repos.map(repo => [repo.name.toLowerCase(), repo])
        );

        // Always show all projects from PROJECT_MAPPING, overlay with GitHub data if available
        const formattedProjects: Project[] = Object.entries(PROJECT_MAPPING).map(([repoName, mapping]) => {
          const repo = repoMap.get(repoName);
          
          return {
            title: mapping?.title || repoName,
            description: mapping?.description || repo?.description || 'No description available',
            image: mapping?.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
            technologies: mapping?.technologies || (repo?.topics && repo.topics.length > 0 ? repo.topics : ['React', 'TypeScript']),
            githubUrl: repo?.html_url || `https://github.com/${username}/${repoName}`,
            liveUrl: mapping?.liveUrl || repo?.homepage || undefined
          };
        });

        setProjects(formattedProjects);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching repos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { projects, loading, error };
};
