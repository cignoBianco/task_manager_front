import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TestComponent } from '@/features/test';

export default function Home() {
  return (
    <div>
      <Button
        variant={"destructive"}
        size={"sm"}
      >
        Click me
      </Button>
      <TestComponent />
      <p className="text-red-500 font-semibold">
        AnA
      </p>
    </div>
  );
}
