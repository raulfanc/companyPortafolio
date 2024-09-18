// studio/schemas/testimonial.js

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'customerName',
        maxLength: 96,
      },
    },
    {
      name: 'testimonialText',
      title: 'Testimonial Text',
      type: 'blockContent', 
    },
    {
      name: 'customerImage',
      title: 'Customer Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'includeInRotation',
      title: 'Include in Rotation',
      type: 'boolean',
      description: 'Include this testimonial in the homepage rotation?',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'testimonialText',
      media: 'customerImage',
    },
  },
}