import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import React from "react";
import Link from "next/link";
import { deleteSnippet } from "@/actions";

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

  if (!myCode) {
    return <h1>Code not Found</h1>;
  }

  const deleteSnippetAction = deleteSnippet.bind(null, myCode.id);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{myCode.title}</h1>
        <div className="flex items-center gap-2">
          <Link href={`/snippet/${myCode.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button variant="destructive" type="submit">Delete</Button>
          </form>
        </div>
      </div>
      <pre className="p-3 bg-gray-200 rounded border-gray-200">
        <code>{myCode.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailPage;
