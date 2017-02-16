<template>
  <div class="publichead">
    <div class="toolBar">
        <div class="main">
            <!--topNav Star -->
            <div class="topNav clearfix">
                <ul class="navList fl">
                    <li>
                        <div class="one">
                            <router-link :to="'/'">BTA</router-link>
                        </div>
                    </li>
                </ul>
                <div class="navUser mt5 fr" id=""></div>
            </div>
            <!--topNav End -->
        </div>
    </div>

    <div class="main clearfix">
        <div class="mtb10 clearfix">
            <div class="logo">
                <router-link :to="'/'"><img src="../assets/img/logo.png" /></router-link>
            </div>
        </div>
        <!-- 导航-->
        <DIV class="nav_top clearfix">
            <UL>
                <li><a><span></span></a></li>
            </UL>
        </DIV>

        <!--导航结束-->
        <div class="subnav clearfix">
            <ul>
                <!--<li><a title="javascript" target="_blank">javascript</a></li>-->
            </ul>
        </div>
    </div>
    <!--head End -->
    <div class="NavBar clearfix ptb10">
        <div class="fl w690">
            <div class="box mb15 mt10">
                <i class="icon"></i> 您的位置：
                <router-link :to="'/'">首页</router-link> → 
                <a>js</a> → 
                <a>javascript</a> → 
                正文内容
            </div>
        </div>
    </div>
  </div>
</template>
