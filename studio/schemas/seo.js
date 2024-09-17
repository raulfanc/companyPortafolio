export default {
    name: 'seo',
    title: 'SEO Metadata',
    type: 'object',
    fields: [
      {
        name: 'metaTitle',
        title: 'Meta Title',
        type: 'string',
        validation: Rule => Rule.max(60)
      },
      {
        name: 'metaDescription',
        title: 'Meta Description',
        type: 'text',
        rows: 3,
        validation: Rule => Rule.max(160)
      },
      {
        name: 'keywords',
        title: 'Keywords',
        type: 'array',
        of: [{ type: 'string' }]
      }
    ]
  }
  