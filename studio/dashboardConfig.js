export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5da025ee37ec494c6e7cd451',
                  title: 'Sanity Studio',
                  name: 'pfd-nw-studio',
                  apiId: 'fd5308be-ff7b-46f7-960b-925ae1d03a67'
                },
                {
                  buildHookId: '5da025eebb8aff4ab6b669b6',
                  title: 'Landing pages Website',
                  name: 'pfd-nw',
                  apiId: 'a91b2600-0c94-40a6-903a-dcefa52a24a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/buddhi-r/pfd-nw',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://pfd-nw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
