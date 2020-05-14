export default {
  widgets: [
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
                  buildHookId: '5ebd12c4482f2baf101bbee5',
                  title: 'Sanity Studio',
                  name: 'sanitydemo-studio',
                  apiId: 'd17a96e8-89c1-471b-b223-703186c2ffcc'
                },
                {
                  buildHookId: '5ebd12c40210293b27007a02',
                  title: 'Blog Website',
                  name: 'sanitydemo',
                  apiId: 'f311f108-07c3-483d-af56-16885a7ea853'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mjp6/sanitydemo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanitydemo.netlify.app', category: 'apps'}
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
