<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<dynamic>"%>
<!DOCTYPE HTML>
<meta charset=utf-8>
<title>聖誕威廉祝你聖誕快樂！</title>
<meta name=viewport content='width=device-width, initial-scale=1, user-scalable=0'>
<script>
  document.getElementsByTagName('html')[0].style.fontSize = innerWidth / 7.2 + 'px'
  document._create = document.createElement
  document.createElement = function(e) {
    return document._create(e == 'script' ? e.includes(location.host) ? e : 'i' : e)
  }
</script>
<link rel=stylesheet href=content/css/reset.mine.css>
<link rel=stylesheet href="content/css/animate.css">
<link rel=stylesheet href=content/css/clever.min.css>
<link rel=stylesheet href=content/css/common.css?1>
<link rel=stylesheet href="content/css/first.css?0011">
<link rel=stylesheet href="content/css/second.css?0011">
<link rel=stylesheet href="content/css/style.css">
<%=ViewData["weixinJs"]%>
<%=ViewData["weixinJs_Share"]%>


<div id=app v-cloak v-on:click.once=Music>

  <div id=cubeTransition is=cp-page name=card>
    <!-- 第一张贺卡 -->
    <div class='first page1'>

      <div id="snow"></div>
      <img class=cherry src=content/img/first/cherry.png v-suit=153,119 />

      <div class=box v-suit=456,603>
        <!-- 圣诞树 -->
        <img class='tree animated zoomInUp' src=content/img/first/tree.png />
        <!-- 星星 -->
        <img class=star src=content/img/first/star_1.png v-suit=167,142 />
        <img class='star star_2' src=content/img/first/star_2.png v-suit=193,23 />
        <img class='star star_3' src=content/img/first/star_3.png v-suit=101,28 />
        <img class='star star_4' src=content/img/first/star_4.png v-suit=245,18 />

        <!-- 女孩 -->
        <div class='people animated fadeIn' v-suit=269,275>
          <img src=content/img/first/body.png />
          <img class=head src=content/img/first/head.png v-suit=225,184 />
        </div>
        <!-- 老鼠 -->
        <img class='mouse animated fadeIn' src=content/img/first/mouse.png v-suit=314,443 />
        <!-- 麋鹿 -->
        <img class='deer animated fadeIn' src=content/img/first/deer.png v-suit=278,425 />
        <!-- 老人 -->
        <div class='oldMan animated fadeIn' v-suit=313,541>
          <img src=content/img/first/old_man_1.png v-suit=313,541 />
          <img class=leftHand src=content/img/first/left_hand.png v-suit=160,159 />
          <img class=rightHand src=content/img/first/right_hand.png v-suit=169,153 />
        </div>
      </div>
      <img class="logo" src=content/img/logo.png v-suit=90,127 />

      <div class=upwardBox>
        <span>向</span>
        <span>上</span>
        <span>滑</span>
        <span>動</span>
        <img class=upward freedom src=content/img/upward.png v-suit=21,28 />
      </div>
    </div>

    <!-- 第二、三张贺卡 -->
    <div class='second page2'>
      <img class="logo" src=content/img/logo.png v-suit=90,127 />
      <div class=upwardBox>
        <span>向</span>
        <span>上</span>
        <span>滑</span>
        <span>動</span>
        <img class=upward freedom src=content/img/upward.png v-suit=21,28 />
      </div>
      <div class='box' v-suit=520,549>
        <!-- 花圈 -->
        <img class=wreath src=content/img/wreath.png />
        <!-- 老人 -->
        <img class='oldMan p_center animated' src=content/img/old_man.png v-suit=421,310 />

        <!-- 樱桃 -->
        <img class=cherry src=content/img/second/cherry.png v-suit=156,110 />
        <!-- 帽子 -->
        <img class=cap src=content/img/second/cap.png v-suit=111,82 />
        <!-- 树叶 -->
        <img class='leaf leaf_1' src=content/img/second/leaf_1.png v-suit=115,122 />
        <img class='leaf leaf_2' src=content/img/second/leaf_2.png v-suit=98,110 />
        <img class='leaf leaf_3' src=content/img/second/leaf_3.png v-suit=115,122 />
        <img class='leaf leaf_4' src=content/img/second/leaf_2.png v-suit=98,110 />
        <img class='leaf leaf_5' src=content/img/second/leaf_4.png v-suit=98,110 />


        <!-- 标题 -->
        <img :class="is_show ? 'title st_title animated bounce': 'title st_title animated zoomOut' " src=content/img/second/title.png v-suit=518,234 />
        <img :class="is_show == false ? 'th_title title animated bounce' : 'th_title title animated zoomOut'" src=content/img/third/title.png v-suit=429,223 />
      </div>

      <div class='btoBox animated fadeIn'>
        <img class=cloud src=content/img/cloud.png />
        <img class=house src=content/img/second/house.png />
        <img class=light src=content/img/second/light.png />
        <img class=lighter src=content/img/second/lighter.png />
        <img class=bottomTree src=content/img/bottom_tree.png />
      </div>
    </div>
  </div>
</div>
<!-- <script src=//cdn.jsdelivr.net/npm/eruda></script>
<script>eruda.init()</script> -->
<script src='http://res.wx.qq.com/open/js/jweixin-1.2.0.js'></script>
<script src=scripts/vue.min.js></script>
<script src=scripts/clever.min.js></script>
<script src=scripts/index.js?101000110></script>
<script src=scripts/jquery.min.js charset="utf-8"></script>
<script src=scripts/jquery.touchswipe.js></script>
<script src=scripts/mousewheel.js></script>
<script src=scripts/cubetransition.js></script>
<script src=scripts/totas.js></script>
<script src=scripts/function.js?1100></script>
