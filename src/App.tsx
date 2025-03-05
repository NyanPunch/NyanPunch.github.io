import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { projects } from './data/projects';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetail } from './pages/ProjectDetail';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">프로젝트</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;