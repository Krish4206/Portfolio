let navbar = document.getElementById("navbar");
window.onscroll = function(){
    if(window.scrollY>20){
        navbar.classList.add("scrolled");

    } else{
        navbar.classList.remove("scrolled");
    }
}
document.getElementById("git1Button").addEventListener("click",function(){
    window.open("https://github.com/Krish4206/HTML-CSS-Assignment-Final-Project", "_blank");
})
document.getElementById("deploy1Button").addEventListener("click",function(){
    window.open("https://krish4206.github.io/HTML-CSS-Assignment-Final-Project/", "_blank");
})

document.getElementById("git2Button").addEventListener("click",function(){
    window.open("https://github.com/Krish4206/Zee5-clone/tree/main/Zee5-main", "_blank");
})
document.getElementById("deploy2Button").addEventListener("click",function(){
    window.open("https://646cef345792164478c264cb--dainty-figolla-ee2d57.netlify.app/", "_blank");
})

document.getElementById("git3Button").addEventListener("click",function(){
    window.open("https://github.com/Krish4206/Shoplane-Clone", "_blank");
})
document.getElementById("deploy3Button").addEventListener("click",function(){
    window.open("https://shoplane-clone.netlify.app/", "_blank");
})

document.getElementById("git4Button").addEventListener("click",function(){
    window.open("https://github.com/Krish4206/IPL-Cricbuzz", "_blank");
})
document.getElementById("deploy4Button").addEventListener("click",function(){
    window.open("https://ipl-cricbuzz.netlify.app/", "_blank");
})

document.getElementById("instagram").addEventListener("click",function(){
    window.open("https://www.instagram.com/Krish_mahajan4206/")
})

document.getElementById("linkedin").addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/krishnat-mahajan-1a18821a3/");
})

document.getElementById("github").addEventListener("click",function(){
    window.open("https://github.com/Krish4206");
})

function SendMail(){
    let params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_ekj990b", "template_976hc43", params).then(function(res){
        if(res.status=200){
            alert("Message has been send successfully.");
            document.getElementById("fullName").value="";
            document.getElementById("email_id").value="";
            document.getElementById("subject").value="";
            document.getElementById("message").value="";
        }
    })
}

let nav_icon = document.querySelector('.nav_icon');
let line = document.querySelector('.line');
let nav_menu = document.querySelector('.nav_menu');
let nav_links = document.querySelectorAll('.nav_list');
let nav_length = nav_links.length;
nav_icon.addEventListener('click', () => {
  line.classList.toggle('active');
  nav_menu.classList.toggle('active');
  nav_links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `linkFadeIn 0.5s ease forwards ${
        index / nav_length + 0.2
      }s`;
    }
  });
});
let header = document.querySelector('.header');
let hero = document.querySelector('.hero');
let header_height = header.getBoundingClientRect().height;

let sticky = (entries) => {
  let [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};
let hero_observer = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${header_height}px`,
});
hero_observer.observe(hero);




const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', ()=>{
    const scrollY = window.pageYOffset;
    sectionAll.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('li  a[href*="'+ sectionId + '"]').classList.add('active');
        } else{
            document.querySelector('li  a[href*="'+ sectionId + '"]').classList.remove('active');
        }
    });
});



function myfunc(){
    
    let sr = document.getElementById("check").checked;

    if(sr){
        document.getElementById("navMenu").style.right = "-110%";
        document.getElementById("check").checked = false;
    } else{
        document.getElementById("navMenu").style.right = "0%";
    }
}

function mycheck(){
    let sr = document.getElementById("check").checked;

    if(sr){
        document.getElementById("navMenu").style.right = "0%";
    } else{
        document.getElementById("navMenu").style.right = "-110%";
    }
}

function resumeDownload(){
   
        window.open("files/Krishnat_Pandurang Mahajan_Resume.pdf","_blank");
      }
