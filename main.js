// ===== Quote of the Day Image Rotation =====
const qouteImg = [
  'tq.jpg',
  'tq1.jpg',
  'tq2.jpg',
  'tq3.jpg',
  'tq4.jpg',
  'tq5.jpg',
  'tq6.jpg',
  'tq7.jpg',
]

const today = new Date();
const index = today.getDate() % qouteImg.length;
const qotdImg = document.getElementById('qotd-img');
if(qotdImg){
  qotdImg.src = qouteImg[index];
}


// ===== Download Buttons =====
document.querySelectorAll('.download-img').forEach(btn => {
  btn.addEventListener('click', function() {
    const imgUrl = this.getAttribute('data-img');
    const link = document.createElement('a');
    link.href = imgUrl;
    link.download = imgUrl.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

// ===== Mobile Toggle Menu =====
const mainNav = document.getElementById('mainNav');
const toggleBtn = document.getElementById('toggleBtn');
if(toggleBtn){
  toggleBtn.addEventListener('click', () => {
    mainNav.classList.toggle('nav-open');
  });
}


// ===== Sidebar Filtering =====


window.addEventListener('DOMContentLoaded', () => {
  const sidebarItems = document.querySelectorAll('.sidebar li');
  const allQuotes = document.querySelectorAll('.quote-item');

  if (!sidebarItems.length || !allQuotes.length) {
    console.warn('⚠️ No sidebar items or quotes found!');
    return;
  }

  function showCategory(category) {
    console.log("👉 Showing category:", category);
    allQuotes.forEach(quote => {
      if (quote.dataset.category === category) {
        quote.style.display = "block";
      } else {
        quote.style.display = "none";
      }
    });
  }

  // Load default active
  const active = document.querySelector('.sidebar li.active');
  if (active) {
    console.log("🔄 Default active:", active.dataset.category);
    showCategory(active.dataset.category);
  }

  // Handle clicks
  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      sidebarItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      showCategory(item.dataset.category);
    });
  });
});
 
