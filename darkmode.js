if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.getElementById('darkmode').media = "all";
}

if (localStorage.getItem('darkmode') == "true") {
  document.getElementById('darkmode').media = "all";
} else if (localStorage.getItem('darkmode') == "false") {
  document.getElementById('darkmode').media = "none";
}

var navigation = document.getElementById("top_navigation");
var ul = navigation.getElementsByTagName("ul")[0];

var li = document.createElement("li");
var dark_style = document.getElementById("darkmode");

if (dark_style.media === "all") {
  li.innerHTML = "<a onclick='toggleTheme();'>Light Mode</a>";
} else {
  li.innerHTML = "<a onclick='toggleTheme();'>Dark Mode</a>";
}

var last_li = ul.getElementsByTagName("li")[ul.getElementsByTagName("li").length - 1];

ul.insertBefore(li, last_li);

function toggleTheme() {
  if (dark_style.media === "all") {
    dark_style.media = "none";
    li.innerHTML = "<a onclick='toggleTheme();'>Dark Mode</a>";
    localStorage.setItem('darkmode', 'false');
  } else {
    dark_style.media = "all";
    li.innerHTML = "<a onclick='toggleTheme();'>Light Mode</a>";
    localStorage.setItem('darkmode', 'true');
  }
}
