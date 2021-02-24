// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
  on:{
    init: function(){
      $(document).on('page:afterin', function (e, page) {
        $(".page-current").find("script").each(function (el) {
          if ($(this).attr('src')) {
            var s = document.createElement('script');
            s.src = $(this).attr('src');
            $('head').append(s);
          } else {
            eval($(this).text());
          }
        });
      });

      $(document).on('page:init', function (e, page) {
        console.log('init')
      });
    }
  }
});



