import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, Github, ExternalLink, Calendar, UserCircle, FileText, Video, Presentation, Globe } from 'lucide-react';

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));

  const getReferenceIcon = (type: string) => {
    switch (type) {
      case 'paper':
        return <FileText className="h-5 w-5" />;
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'presentation':
        return <Presentation className="h-5 w-5" />;
      case 'demo':
        return <Globe className="h-5 w-5" />;
      default:
        return <ExternalLink className="h-5 w-5" />;
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">프로젝트를 찾을 수 없습니다</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <ArrowLeft className="mr-2" />
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <button
          onClick={() => navigate('/')}
          className="mb-8 text-gray-600 hover:text-gray-800 flex items-center"
        >
          <ArrowLeft className="mr-2" />
          돌아가기
        </button>

        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover rounded-xl shadow-lg mb-8"
        />

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-4 mb-6">
          {project.role && (
            <div className="flex items-center text-gray-600">
              <UserCircle className="w-5 h-5 mr-2" />
              <span>{project.role}</span>
            </div>
          )}
          {project.period && (
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{project.period}</span>
            </div>
          )}
        </div>

        <p className="text-xl text-gray-600 mb-8">{project.fullDescription}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">사용 기술</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">주요 기능</h2>
            <ul className="list-disc list-inside space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="h-5 w-5" />
                GitHub 저장소
              </a>
            )}
          </div>

          {project.references && project.references.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">참고 자료</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {project.references.map((reference, index) => (
                  <a
                    key={index}
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    {getReferenceIcon(reference.type)}
                    <div>
                      <div className="font-medium text-gray-900">{reference.title}</div>
                      <div className="text-sm text-gray-500 capitalize">{reference.type}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}