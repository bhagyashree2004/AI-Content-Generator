// import React from 'react'
// import Formsection from '../_components/Formsection'
// import OutputSection from '../_components/OutputSection'
// import { TEMPLATE, Templates } from '../../_components/TemplateListSection'

// interface PROPS{
//     params:{
//         'template-slug' : string
//     }
    
// }

// function CreateNewContent(props:PROPS) {
//     // console.log(props.params['template-slug']);

//     const selectedTemplate: TEMPLATE | undefined = Templates?.find(
//       (item) => item.slug === props.params['template-slug']
//     )
    
//   return (
//     <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
//         {/* FormSection */}

//         <Formsection selectedTemplate = {selectedTemplate}/>


//         {/* OutputSection */}

//         <OutputSection/>
//     </div>
//   )
// }

// export default CreateNewContent

"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection' // Make sure 'Templates' is exported
import templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { generateContentFromGemini } from '@/utils/AiModal'
import { useParams } from 'next/navigation';

interface PROPS {
  params: {
    'template-slug': string
  }
}

function CreateNewContent(props: PROPS) {

  const params = useParams(); // ✅ Using useParams() to get dynamic route params
  const slug = params['template-slug'] as string; // ✅ Extract 'template-slug' from params

  const selectedTemplate: TEMPLATE | undefined = templates?.find(
    // (item) => item.slug === props.params['template-slug']
    (item) => item.slug === slug // ✅ Using slug to find the selected template
  )

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');

  const GenerateAIContent = async(formData:any)=>{

      setLoading(true);
      const SelectedPrompt = selectedTemplate?.aiPrompt;
  
      const FinalAIPrompt = JSON.stringify(formData)+", "+SelectedPrompt;

      // const result = await generateContentFromGemini(FinalAIPrompt);

      // console.log(result.response.text);

      try {
        const result = await generateContentFromGemini(FinalAIPrompt);
        console.log(result);
        setAiOutput(result);
    
        // If using useState to show in OutputSection, call setAiOutput(result);
      } catch (error) {
        console.error("Error generating AI content:", error);
      }

      
      setLoading(false);
      
  }

  return (
    <div className='p-10'>
      <Link href={"/dashboard"} > <Button> <ArrowLeft/> Back</Button></Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
      {/* FormSection */}
      <FormSection 
      selectedTemplate={selectedTemplate} 
      userFormInput={(v:any)=>GenerateAIContent(v)} 
      loading = {loading}
        />

      {/* OutputSection */}
      <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
      </div>
     
    </div>
    </div>
  )
}

export default CreateNewContent
