import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex items-center text-blue-600 hover:text-blue-800">
          자세히 보기
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </div>
  );
}