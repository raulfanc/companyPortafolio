export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Service Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'URL Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Service Description',
        type: 'blockContent'
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'seo',
        title: 'SEO Metadata',
        type: 'seo'
      }
    ],
    preview: {
      select: {
        title: 'title',
        media: 'icon'
      }
    }
  }
  