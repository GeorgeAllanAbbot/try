document.addEventListener('visibilitychange',
      function() {
        if (document.visibilityState == 'hidden') {
          normal_title = document.title;
          document.title = '网页已崩溃……';
        } else document.title = normal_title;
      });
