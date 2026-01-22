import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import { ProjectService } from '../api/projectService';

export default function DashboardPage() {
  useEffect(() => {
    const data = ProjectService.getProjectsByUserId(
      1);
    console.log(data);
  }, []);

  return (
    <Navbar />
  );
}