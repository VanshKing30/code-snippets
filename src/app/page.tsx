import { Button } from "@/components/ui/button";
import Link from "next/link";

import Image from "next/image";
import { ClipboardPlus } from "lucide-react";


export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-4xl">HomePage</h1>
      <div className="flex items-center justify-between">
        <h1>Snippetts</h1>
        <Link href={"/snippet/new"}> <Button variant="outline"><ClipboardPlus/>New</Button>  </Link>
      </div>
    </div>
  );
}
