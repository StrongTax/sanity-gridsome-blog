export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6275e143e8562b1de6a7fbb6',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-gsd3e7ar',
                  apiId: 'b9bf89fb-7f90-4f5d-b000-e29b2852b51b'
                },
                {
                  buildHookId: '6275e144878bf41fedf2214c',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-rw2ksy6d',
                  apiId: '2da4bdf4-b03c-4d8c-92a5-8e77e417fef0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StrongTax/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-rw2ksy6d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
