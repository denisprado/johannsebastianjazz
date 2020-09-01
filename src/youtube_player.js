var data = {
  videoAtual: [],
  videos: [
    {
      thumb: "https://img.youtube.com/vi/bb-Y9Kn3OVs/0.jpg",
      title: "Preludio en Do Mayor",
      src: "https://www.youtube.com/embed/SlNBW2D5jZ0?rel=0&amp;showinfo=0"
    },
    {
      thumb: "https://img.youtube.com/vi/SlNBW2D5jZ0/0.jpg",
      title: "Joplin meets Bach",
      src:
        "https://www.youtube.com/embed/bb-Y9Kn3OVs?rel=0&amp;controls=0&amp;showinfo=0"
    },
    {
      thumb: "https://img.youtube.com/vi/hlDqUl_vdI4/0.jpg",
      title: "Aria de la Suite Nº3 en Re Mayor",
      src:
        "https://www.youtube.com/embed/hlDqUl_vdI4?rel=0&amp;controls=0&amp;showinfo=0"
    }
  ]
};

var octopus = {
  init: function() {
    // set o video atual como o primeiro da matriz de videos
    data.videoAtual = data.videos[0];

    // realiza as primeiras renderizações
    videoMenuView = viewVideoMenu.init();
    videoView = viewVideo.init();
  },
  getVideos: function() {
    return data.videos;
  },
  getAtualVideo: function() {
    return data.videoAtual;
  },
  setCurrentVideo: function(video) {
    data.videoAtual = video;
  }
};

/* Views */

var viewVideoMenu = {
  init: function() {
    this.menu = document.getElementById("menu");
    viewVideoMenu.render();
  },
  render: function() {
    var video, i, elem;
    var videoAtual = octopus.getAtualVideo();
    var videos = octopus.getVideos();

    this.menu.innerHTML = "";

    ul = document.createElement("ul");
    ul.classList = "list-unstyled m-2";

    this.menu.appendChild(ul);

    for (i = 0; i < videos.length; i++) {
      video = videos[i];

      li = document.createElement("li");
      li.classList =
        "media border-top-0 border-right-0 border-left-0 border border-secondary  mr-4";
      div = document.createElement("div");
      div.classList = "media-body";
      img = document.createElement("img");
      img.src = video.thumb;

      img.classList = "w-50 img-fluid p-1 mx-2";

      li.appendChild(img);

      elem = document.createElement("h3");
      elem.classList = "";
      if (video.src == videoAtual.src) {
        li.classList += " active ";
      }
      elem.classList += "text-left pt-4 pr-2 text-white";
      elem.textContent = video.title;

      div.appendChild(elem);

      li.addEventListener(
        "click",
        (function(videoCopy) {
          return function() {
            octopus.setCurrentVideo(videoCopy);
            var list = document.getElementsByClassName("media");
            for (z = 0; z < list.length; z++) {
              item = list[z];
              item.classList="media border-top-0 border-right-0 border-left-0 border border-secondary  mr-4";
            }
            
            this.classList += " active ";

            viewVideo.render();
          };
        })(video)
      );

      li.appendChild(div);

      this.menu.appendChild(li);
    }
  }
};

var viewVideo = {
  init: function() {
    var show;
    show = document.getElementById("show");
    viewVideo.render();
  },
  render: function() {
    show.innerHTML = "";
    var videoAtual = octopus.getAtualVideo();
    elem = document.createElement("iframe");
    elem.src = videoAtual.src;
    elem.frameborder = "0";
    elem.allowfullscreen = true;
    elem.classList = "embed-responsive-item";
    elem.width = "960px";
    elem.height = "480px";
    show.appendChild(elem);
  }
};

octopus.init();
