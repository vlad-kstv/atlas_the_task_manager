import { useEffect } from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ProjectService } from '../api/projectService';

const ProjectCard = ({ delay }: { delay: number }) => (
  <Card className="mx-auto w-full max-w-sm group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-l-slate-400 hover:border-l-blue-500 animate-in fade-in slide-in-from-bottom-2" style={{
    animationDelay: `${delay}ms`,
  }}>
    <CardHeader className="pb-3">
      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">Project Name</CardTitle>
      <CardDescription className="text-sm">
        Last updated 2 days ago
      </CardDescription>
    </CardHeader>
    <CardContent className="pb-3">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span className="text-xs text-slate-600">5 active tasks</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-1.5">
          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
        </div>
        <p className="text-xs text-slate-500">65% complete</p>
      </div>
    </CardContent>
    <CardFooter className="pt-2">
      <Button
        variant="outline"
        size="sm"
        className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors"
      >
        Open Project
      </Button>
    </CardFooter>
  </Card>
);

export default function DashboardPage() {
  useEffect(() => {
    const data = ProjectService.getProjectsByUserId();
    console.log(data);
  }, []);

  return (
    <>
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-2px); }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    `}</style>
    <div className="w-full">
      <div className="px-6 py-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2 animate-float">
            Welcome back
          </h1>
          <p className="text-slate-600">Here are your recent projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard delay={0} />
          <ProjectCard delay={100} />
          <ProjectCard delay={200} />
        </div>
      </div>
    </div>
    </>
  )
}
