import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import {redirect} from "next/navigation";

const CreateSnippet = () => {

    
    async function createSnippet(formData :FormData){
        "use server"
        const title = formData.get("title") as string;
        const code = formData.get("code") as string;


        const snippet = await prisma.snippets.create({
            data : {
                title , 
                code
            }
        })
        console.log(snippet);

        redirect("/")

        
        
    }
  return (
    <form action={createSnippet}>
      <div>
        <div>
          <Label>Title</Label>
          <Input type="text" name="title" id="title"></Input>
        </div>
        <div>
          <Label>Code</Label>
          <Textarea name="code" id="code"></Textarea>
        </div>
        <Button type="submit" className="my-4">Save</Button>
      </div>
    </form>
  );
};
export default CreateSnippet;
