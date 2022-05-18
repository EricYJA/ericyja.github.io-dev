---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /profile.jpg
head: 'Harry Potter'
info: 'Student at Hogwarts School'
interests: 'Interests: Quidditch and Wizard chess.'
socials:
- title: github
  link: https://github.com/mtobeiyf
- title: linkedin
  link: https://www.linkedin.com
- title: instagram
  link: https://www.instagram.com
- title: email
  link: 'mailto:harry[at]gmail.com'
# actions:
# - text: Projects
#   link: /projects/
# - text: Blog
#   link: https://github.com/mtobeiyf
# - text: CV
#   link: /article/
---

<AboutCard :frontmatter="$page.frontmatter" >

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>