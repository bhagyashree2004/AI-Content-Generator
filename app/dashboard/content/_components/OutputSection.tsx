"use client"
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PROPS{
  aiOutput : string;
}

function OutputSection({aiOutput}:PROPS) {

  const editorRef:any = useRef(null);

  useEffect(()=>{
      // const editorInstance = editorRef.current.getInstance();
      // editorInstance.setMarkdown(aiOutput);

      if (editorRef.current) {
        const editorInstance = editorRef.current.getInstance();
        // Update markdown in the editor
        editorInstance.setMarkdown(aiOutput || 'Your result will appear here');  // Default text if no output
      }
  },[aiOutput])

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Results</h2>
        <Button className='flex gap-2'> <Copy/> Copy </Button>
      </div>
      <Editor
      ref={editorRef}
      initialValue="Your result will appear here"
      initialEditType="wysiwyg"
      height="500px"
      useCommandShortcut={true}
      onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default OutputSection