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
                  buildHookId: '5f311da71e3aa51f52032631',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-op21sjja',
                  apiId: 'f093c2e1-bcdb-4d23-9466-b023d1919d7b'
                },
                {
                  buildHookId: '5f311da7bed2688c7b7040b4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ewwjnipp',
                  apiId: 'd4cd50af-1550-4d7e-8cf7-08fc5b8433a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bayusoeryo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ewwjnipp.netlify.app', category: 'apps'}
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
