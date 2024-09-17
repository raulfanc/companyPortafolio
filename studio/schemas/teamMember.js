export default {
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Full Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'role',
        title: 'Role/Position',
        type: 'string'
      },
      {
        name: 'bio',
        title: 'Biography',
        type: 'blockContent'
      },
      {
        name: 'portrait',
        title: 'Portrait Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'role',
        media: 'portrait'
      }
    }
  }
  