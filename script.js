document.addEventListener("DOMContentLoaded", () => {
      const blogList = document.getElementById("blog-list");
      const blogElement = document.createElement("div");
      blogElement.classList.add("home-article");
      blogElement.innerHTML = `
        <a href="blogpost.html"><h3>${title}</h3></a>
        <span><br>~Anshika</span>
    ` ;
      blogList.appendChild(blogElement);
});

const blogForm = document.getElementById("blog-form");
    blogForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("blog-title").value;
        const content = document.getElementById("blog-content").value;
        clearBlogForm();

        function showBlogContent(blog) {
          const selectedBlog = document.getElementById("selected-blog");
          selectedBlog.innerHTML = `
              <h3>${blog.title}</h3>
              <p>${blog.content}</p>
          `;
      }

      function clearBlogForm() {
        document.getElementById("blog-title").value = "";
        document.getElementById("blog-content").value = "";
    }
});
  
