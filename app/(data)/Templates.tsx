const templates = [ 
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates blog title based on your blog content',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/5393/5393225.png',
        aiPrompt: 'Give me 5 blog idea',
        slug: 'generate-blog-title',
        form: [
          {
            label: 'Enter your blog niche',
            field: 'input',
            name: 'niche',
            required: true,
          },
          {
            label: 'Enter blog outline',
            field: 'textarea',
            name: 'outline',
          },
        ],
      },
      {
        name: 'Instagram Hashtags',
        desc: 'Generates popular Instagram hashtags based on your post',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733558.png',
        aiPrompt: 'Generate top 10 trending hashtags for',
        slug: 'generate-instagram-hashtags',
        form: [
          {
            label: 'Enter post description',
            field: 'textarea',
            name: 'description',
            required: true,
          },
        ],
      },
      {
        name: 'Code Status Message',
        desc: 'Creates commit or status messages for your code updates',
        category: 'Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/1828/1828911.png',
        aiPrompt: 'Generate a code commit message for the following changes',
        slug: 'generate-code-status',
        form: [
          {
            label: 'Describe your code changes',
            field: 'textarea',
            name: 'codeChanges',
            required: true,
          },
        ],
      },
      {
        name: 'Birthday Wish',
        desc: 'Creates a customized birthday message',
        category: 'Wishes',
        icon: 'https://cdn-icons-png.flaticon.com/128/3595/3595455.png',
        aiPrompt: 'Write a sweet and creative birthday message for',
        slug: 'generate-birthday-wish',
        form: [
          {
            label: 'Recipient name',
            field: 'input',
            name: 'name',
            required: true,
          },
          {
            label: 'Relationship (e.g. friend, brother)',
            field: 'input',
            name: 'relation',
          },
          {
            label: 'Any special note?',
            field: 'textarea',
            name: 'note',
          },
        ],
      },
      {
        name: 'Instagram Caption',
        desc: 'Generate engaging captions for Instagram posts',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384015.png',
        aiPrompt: 'Write a creative caption for an Instagram post about',
        slug: 'generate-instagram-caption',
        form: [
          {
            label: 'Describe your post',
            field: 'textarea',
            name: 'postDescription',
            required: true,
          },
          {
            label: 'Tone (funny, professional, cute, etc.)',
            field: 'input',
            name: 'tone',
          },
        ],
      },
      {
        name: 'YouTube Video Script',
        desc: 'Generates a script for your YouTube video based on the topic',
        category: 'Content Creation',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Write a YouTube video script for the topic',
        slug: 'generate-youtube-script',
        form: [
          {
            label: 'Enter your video topic',
            field: 'input',
            name: 'topic',
            required: true,
          },
          {
            label: 'Preferred video length (in minutes)',
            field: 'input',
            name: 'length',
          },
        ],
      },
      {
        name: 'Product Description',
        desc: 'Creates a compelling product description for ecommerce listings',
        category: 'Ecommerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/3145/3145765.png',
        aiPrompt: 'Write a product description for',
        slug: 'generate-product-description',
        form: [
          {
            label: 'Product name',
            field: 'input',
            name: 'productName',
            required: true,
          },
          {
            label: 'Product features',
            field: 'textarea',
            name: 'features',
          },
        ],
      },
      {
        name: 'Tweet Generator',
        desc: 'Generates a short, punchy tweet based on your topic or idea',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733579.png',
        aiPrompt: 'Write a tweet about',
        slug: 'generate-tweet',
        form: [
          {
            label: 'Tweet topic or idea',
            field: 'input',
            name: 'idea',
            required: true,
          },
          {
            label: 'Tone (sarcastic, motivational, casual, etc.)',
            field: 'input',
            name: 'tone',
          },
        ],
      },
      {
        name: 'SEO Meta Description',
        desc: 'Generate an SEO-friendly meta description for your webpage',
        category: 'SEO',
        icon: 'https://cdn-icons-png.flaticon.com/128/1828/1828919.png',
        aiPrompt: 'Create an SEO meta description for the webpage about',
        slug: 'generate-meta-description',
        form: [
          {
            label: 'Webpage title or topic',
            field: 'input',
            name: 'topic',
            required: true,
          },
          {
            label: 'Target keywords',
            field: 'input',
            name: 'keywords',
          },
        ],
      },
      {
        name: 'Business Name Ideas',
        desc: 'Get creative and catchy name ideas for your business or brand',
        category: 'Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/1034/1034431.png',
        aiPrompt: 'Suggest business name ideas for',
        slug: 'generate-business-name',
        form: [
          {
            label: 'Business niche or idea',
            field: 'input',
            name: 'niche',
            required: true,
          },
          {
            label: 'Keywords to include (optional)',
            field: 'input',
            name: 'keywords',
          },
        ],
      }
]

export default templates;