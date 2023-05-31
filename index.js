function showContactSection() {
    document.getElementById("profile").classList.add("hidden");
    setTimeout(function() {
      document.getElementById("profile").style.display = "none";
      document.getElementById("contact").style.display = "block";
      setTimeout(function() {
        document.getElementById("contact").classList.remove("hidden");
      }, 10);
    }, 500);
  }

  function showProfileSection() {
    document.getElementById("contact").classList.add("hidden");
    setTimeout(function() {
      document.getElementById("contact").style.display = "none";
      document.getElementById("profile").style.display = "block";
      setTimeout(function() {
        document.getElementById("profile").classList.remove("hidden");
      }, 10);
    }, 500);
  }