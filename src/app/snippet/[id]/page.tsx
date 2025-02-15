import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { AArrowDown, ArrowDownAZ } from "lucide-react";
import React from "react";

type SnippetDetailsProps = {
  params: Promise<{ id: string }>;
};

const SnippetDetailPage: React.FC<SnippetDetailsProps> = async ({ params }) => {
  const id = parseInt((await params).id);

  const myCode = await prisma.snippets.findUnique({
    where: {
      id,
    },
  });

  if(!myCode){
    return <h1>Code not Found</h1>
  }

  return (
    <div>
        <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl">{myCode.title}</h1>
            <div className="flex items-center gap-2">
                <Button>Edit</Button>
                <Button variant="destructive">Delete</Button>
            </div>
        </div>
        <pre>
            <code>{myCode.code}</code>
        </pre>
    </div>
  )
};

export default SnippetDetailPage;
