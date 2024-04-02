Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: "home",
        label: "Host Home",
        icon: "home",
        viewUrl: "/views/host-home.html",
        children: [
          {
            pathSegment: "home",
            label: "Host 3000",
            icon: "nutrition-activity",
            viewUrl: "/views/host-home.html",
            loadingIndicator: {
              enabled: true,
            },
          },
        ],
      },
      {
        pathSegment: "remote1",
        label: "Remote1",
        icon: "home",
        viewUrl: "http://localhost:3002/",
        children: [
          {
            pathSegment: "home",
            label: "Remote Home",
            icon: "paper-plane",
            viewUrl: "http://localhost:3002/home",
            loadingIndicator: {
              enabled: false,
            },
          },
          {
            pathSegment: "sample1",
            label: "Remote Sample1",
            icon: "paper-plane",
            viewUrl: "http://localhost:3002/sample1",
            loadingIndicator: {
              enabled: false,
            },
          },
          {
            pathSegment: "sample2",
            label: "Remote Sample2",
            icon: "paper-plane",
            viewUrl: "/remote1/index.html#/sample1",
            loadingIndicator: {
              enabled: false,
            },
          },
          {
            label: "Back",
            link: "/",
            icon: "nav-back",
          },
        ],
      },
    ],
  },
  settings: {
    header: {
      title: "Luigi JavaScript",
      logo: "/logo.png",
      favicon: "/favicon.ico",
    },
    responsiveNavigation: "simpleMobileOnly",
    appLoadingIndicator: {
      hideAutomatically: true,
    },
  },
});