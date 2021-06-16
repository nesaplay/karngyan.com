// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Nenad Radovanovic',
  domain: 'template.karngyan.com', // add without https:// , used in meta tags and share urls
  image: '/images/bigheadkarngyan.png',
  email: 'nash.radovanovich@com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'nesaplay',
    linkedin: 'nenadradovanovic',
    facebook: 'nesaplay',
    twitter: 'publicshone',
    instagram: '_ishone',
    codestats: 'nesaplay' // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: false,
    url: 'https://www.buymeacoffee.com/karngyan'
  },
  projects: {
    enabled: false,
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: false,
    pdfUrl: '/RESUME_GYAN_KARN_DARK.pdf' // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'Laptop', value: 'MacBook Pro (13-inch, 2017)'},
      {title: 'Keyboard', value: 'Logitech K380 Bluetooth'},
      {title: 'Mouse', value: 'Apple Magic Mouse 2'},
      {title: 'Stand', value: 'Nextstand K2'},
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      { name: 'SendPost', src: '/images/sendpost.png', url: 'https://sendpost.io' },
      { name: 'Amazon', src: '/images/amazon.png', url: 'https://amazon.in' },
      { name: 'InterviewReady', src: '/images/interviewready-io.png', url: 'https://get.interviewready.io' },
      { name: 'CrioDo', src: '/images/crio.png', url: 'https://crio.do' },
    ]
  },
  loadingIndicator: {
    name: 'wandering-cubes'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'read my blog',
        haveALook: 'this way',
        friendlyNeighborhood: 'Nenad Radovanovic',
        description: 'I build stuff. I travel. I build stuff while traveling. There are no stupid ideas, just let me know. React, Node, Jamstack... i wish i could speak Javascript.',
        words: ['developer', 'designer', 'entrepreneur', 'digital nomad'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'i try to write once in a while. let me know your thoughts in comments or mail@karngyan.com'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read'
      }
    }
  }
}
