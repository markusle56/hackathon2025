import SessionCard from '@/components/SessionCard';
import { CreateSessionCard } from '@/components/CreateSessionCard';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <CreateSessionCard/> */}
      <SessionCard/>
    </div>
  );
}