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
Interested in High Performance Computing, Computer Graphics. Looking for Research Opportunities related to parallel computing and distributed computing, especially with GPU involved.


## News

Taking courses on **Computer Graphics-Digital Fabrication** and **Computer Networks**


## Education & Experiences

### Undergraduate at The Chinese University of Hong Kong
- Coach undergraduate student joining the ASC(Asia Supercomputer Community) Student Supercomputer Challenge
  - Optimize industrial software using parallel intrrerface such as MPI, OpenMP, PThread
  - Set up the multi-socket cluster and find the optimal confuguration using HPL benchmark. 
- Teaching Assistant on Operating System
  - Reformed the assignment code base for better simulating the memory page swap using the CUDA
  - Implemented automated grading tools for better efficiency

### Exchange at UC Berkeley
- Coursed based program under EECS department
  - CS184 Computer Graphics - [Volume Rendering Using Multiple Layers of CT Scans](https://timzrz.github.io/CS184-final-project/final.html)
  - MATH170 Mathematical Methods For Optimization 
  - CS170 Efficient Algorithms and Intractable Problems
  - CS61B Data Structures


## Awards & Honors

- Legal professional qualification certificate by The Ministry of Justice of the People's Republic of China
- Certificate On FUNDAMENTALS OF ACCELERATED COMPUTING WITH CUDA C/C++ by Nvidia
- Undergraduate Dean's List Award 2018-2019 and 2019-2020


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
