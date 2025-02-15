import { Button } from "@/components/ui/button";
import Link from "next/link";
import { View } from "lucide-react";
import { ClipboardPlus } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const mySnippets = await prisma.snippets.findMany();
  

  return (
    <div>
      <h1 className="font-bold text-4xl">HomePage</h1>
      <div className="flex items-center justify-between">
        <h1>Snippetts</h1>
        <Link href={"/snippet/new"}>
          {" "}
          <Button variant="outline">
            <ClipboardPlus />
            New
          </Button>{" "}
        </Link>
      </div>
      {mySnippets.map((single) =>(
        <div key={single.id} className="flex items-center justify-between bg-gray-200 p-2 rounded-md my-2">
          <h1>{single.title}</h1>
          <Link href={`/snippet/${single.id}`}>
          <Button> <View/>View</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
