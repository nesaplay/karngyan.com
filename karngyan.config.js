// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Nenad Radovanovic',
  domain: 'nenad.xyz', // add without https:// , used in meta tags and share urls
  image: '/images/bigheadkarngyan.png',
  email: 'nash.radovanovich@com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: true
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
    enabled: true,
    pdfUrl: '/Profile.pdf' // add files in static folder
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
      { name: 'Marknadsinformation', src: '/images/mise.png', url: 'https://www.marknadsinformation.se/' },
      { name: 'SAP', src: '/images/sap.png', url: 'https://www.sap.com/westbalkans/about.html' },
      { name: 'Calidus Cloud', src: '/images/calidus-cloud.png', url: 'https://www.sap.com/acquired-brands/what-is-calliduscloud.html' },
      { name: 'Gentlebirth', src: '/images/gentlebirth.png', url: 'https://www.gentlebirth.com/' },
      { name: 'Computer Rock', src: '/images/computer-rock.png', url: 'https://computerrock.com/' },
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
        description: 'I build stuff. I travel. I build stuff while traveling. React, Node, Jamstack, Blockchain, DeFi, ETH, Polygon...',
        words: ['developer', 'designer', 'digital nomad', 'entrepreneur'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'coming soon'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'coming soon'
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
