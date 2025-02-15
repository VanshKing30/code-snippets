import EditSnippet from '@/components/EditSnippet'
import { prisma } from '@/lib/prisma';
import React from 'react'

const EditPageSnippet = async({params}: {params:Promise<{id:string}>}) => {
    const id = parseInt((await params).id);
    const myCode = await prisma.snippets.findUnique({
        where : {
            id
        }
    })

    if(!myCode){
        return <h1>Snippet Not Found</h1>
    }
  return (
    <EditSnippet myCode = {myCode}/>
  )
}

export default EditPageSnippet