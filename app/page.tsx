import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Your Property Management System
        </h1>
        <p className="mt-3 text-2xl">
          Manage your properties, track rent payments, and handle maintenance requests.
        </p>
        <div className="flex mt-6">
          <Link href="/dashboard" passHref>
            <Button>Go to Dashboard</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}