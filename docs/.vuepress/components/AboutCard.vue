<template>
  <div class="about-card">
    <object data="/Yuan_Changcheng_CV.pdf" type="application/pdf" width=97% height=950px>
      <embed src="/Yuan_Changcheng_CV.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it.</p>
      </embed>
    </object>
  </div>
</template>


<script>

export default {
  props: ['frontmatter'],
  computed: {
    data() {
      return this.frontmatter;
    }
  }
};

</script>

<style lang="stylus">
.about-card
  width 100%
  display: flex
  flex-direction column
  align-items center

  position relative
  top -75px
  padding-top 50px
  padding-bottom 25px
  padding-left -300px
  background #fff
  box-shadow 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius 0.3remF
  text-align center 
</style>
