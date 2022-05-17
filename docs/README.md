---
pageClass: home-page
# some data for the components

name: Changcheng Yuan
profile: images/profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/EricYJA
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com/in/changcheng-yuan-9212aa12a/
  - title: email
    icon: "/icons/email.svg"
    link: eric.yuan.cc@gmail.com

cv: "/CV/"
bio: MSCS Student at UC Davis
email: eric.yuan.cc@gmail.com
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

Currently a MSCS Student in UC Davis.
Interested in High Performance Computing, Computer Graphics. 
Passed the National Uniform Legal Profession Qualification Examination hold by the Ministry of Justice of the People's Republic of China.


## News

TODO


## Education & Experiences

TODO


## Projects


[→ Full list](/projects/)

TODO


## Awards & Honors



<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
