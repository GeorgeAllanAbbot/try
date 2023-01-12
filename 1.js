document.writeln("<!DOCTYPE html>");
document.writeln("<html lang=\'zh-CN\'>");
document.writeln("  ");
document.writeln("  <head>");
document.writeln("    <meta charset=\'UTF-8\'>");
document.writeln("    <meta name=\'viewport\' content=\'width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no\'>");
document.writeln("    <title>Allan</title>");
document.writeln("    <script>document.addEventListener(\'visibilitychange\',");
document.writeln("      function() {");
document.writeln("        if (document.visibilityState == \'hidden\') {");
document.writeln("          normal_title = document.title;");
document.writeln("          document.title = \'网页已崩溃……\';");
document.writeln("        } else document.title = normal_title;");
document.writeln("      });</script>");
document.writeln("    <meta name=\'description\' content=\'This is Allan\'>");
document.writeln("    <meta name=\'keywords\' content=\'主页,博客\'>");
document.writeln("    <link rel=\'stylesheet\' type=\'text/css\' href=\'https://cdn.jsdelivr.net/gh/GeorgeAllanAbbot/try/1.css\'>");
document.writeln("    <link rel=\'stylesheet\' type=\'text/css\' href=\'https://cdn.jsdelivr.net/gh/GeorgeAllanAbbot/try/2.css\'>");
document.writeln("    <link rel=\'icon\' href=\'https://i.postimg.cc/rFGC6B2H/favicon.png\'>");
document.writeln("  </head>");
document.writeln("  ");
document.writeln("  <body>");
document.writeln("    <div id=\'box\'>");
document.writeln("      <!-- 个人资料卡片 -->");
document.writeln("      <div class=\'meBox\'>");
document.writeln("        <!-- 头像 -->");
document.writeln("        <div class=\'headPhoto\'>");
document.writeln("        </div>");
document.writeln("        <!-- 介绍 -->");
document.writeln("        <div class=\'meBox-title\'>");
document.writeln("          <p>I\'m Allan</p>");
document.writeln("          <div class=\'fg\'>");
document.writeln("          </div>");
document.writeln("        </div>");
document.writeln("        <div class=\'meBox-text\'>");
document.writeln("          <p>一条咸鱼");
document.writeln("            <img src=\'https://i.328888.xyz/2023/01/11/CTnYV.png\' alt=\'咸鱼\' style=\'width: 20px; vertical-align: middle;\'></p>");
document.writeln("          <p>爱好计算机</p>");
document.writeln("          <p>瞎折腾浪费时间最在行</p>");
document.writeln("        </div>");
document.writeln("        <!-- 两个按钮 -->");
document.writeln("        <div class=\'meBox-Button\'>");
document.writeln("          <a href=\'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=o5KXlpuSlpGQlJXj0tKNwMzO\'>contact</a>");
document.writeln("        </div>");
document.writeln("      </div>");
document.writeln("      <!-- 伪终端介绍 -->");
document.writeln("      <div id=\'cmdBox\'>");
document.writeln("        <!-- 第一个终端 -->");
document.writeln("        <div class=\'cmd\'>");
document.writeln("          <!-- 三个按钮 -->");
document.writeln("          <div class=\'click\'>");
document.writeln("            <div class=\'red\'>");
document.writeln("            </div>");
document.writeln("            <div class=\'yellow\'>");
document.writeln("            </div>");
document.writeln("            <div class=\'green\'>");
document.writeln("            </div>");
document.writeln("          </div>");
document.writeln("          <!-- 顶部标题 -->");
document.writeln("          <div class=\'title\'>");
document.writeln("            <span>Allan - bash</span>");
document.writeln("          </div>");
document.writeln("          <!-- 终端内文字 -->");
document.writeln("          <div class=\'cmdText\'>");
document.writeln("            <span style=\'color: rgb(0, 190, 0);\'>root@Allan</span>");
document.writeln("            <span style=\'color: blue;\'>~</span>");
document.writeln("            <span style=\'color: rgb(39, 39, 39);\'>./weather.sh</span>");
document.writeln("            <br />");
document.writeln("            <p>Peking");
document.writeln("              <p/>");
document.writeln("              <iframe scrolling=\'no\' src=\'https://tianqiapi.com/api.php?style=tc&skin=pitaya\' frameborder=\'0\' width=\'350\' height=\'24\' allowtransparency=\'true\'></iframe>");
document.writeln("              <br />");
document.writeln("              <span style=\'color: rgb(0, 190, 0);\'>root@Allan</span>");
document.writeln("              <span style=\'color: blue;\'>~</span>");
document.writeln("              <span style=\'color: rgb(39, 39, 39);\'>cat /me.txt</span>");
document.writeln("              <p>爱好计算机，会去自学自己感兴趣的一切东西</p>");
document.writeln("              <p>略懂H5，开发；爱好折腾去解决一切问题</p>");
document.writeln("              <span style=\'color: rgb(0, 190, 0);\'>root@Allan</span>");
document.writeln("              <span style=\'color: blue;\'>~</span>");
document.writeln("              <span style=\'color: rgb(39, 39, 39);\'>sudo rm -rf /myselfinthepast/*</span>");
document.writeln("          </div>");
document.writeln("        </div>");
document.writeln("        <!-- 第二个终端 -->");
document.writeln("        <div class=\'cmd cmd2\'>");
document.writeln("          <!-- 三个按钮 -->");
document.writeln("          <div class=\'click\'>");
document.writeln("            <div class=\'red\'>");
document.writeln("            </div>");
document.writeln("            <div class=\'yellow\'>");
document.writeln("            </div>");
document.writeln("            <div class=\'green\'>");
document.writeln("            </div>");
document.writeln("          </div>");
document.writeln("          <!-- 顶部标题 -->");
document.writeln("          <div class=\'title\'>");
document.writeln("            <span>Allan - bash</span>");
document.writeln("          </div>");
document.writeln("          <!-- 终端内文字 -->");
document.writeln("          <div class=\'cmdText\'>");
document.writeln("            <span style=\'color: rgb(0, 190, 0);\'>root@Allan</span>");
document.writeln("            <span style=\'color: blue;\'>~</span>");
document.writeln("            <span style=\'color: rgb(39, 39, 39);\'>./links.sh</span>");
document.writeln("            <p>友情链接</p>");
document.writeln("            <ul class=\'ul\'>");
document.writeln("              <li>");
document.writeln("                <a href=\'https://baidu.com\'>baidu</a>");
document.writeln("              </li>");
document.writeln("            </ul>");
document.writeln("            <span style=\'color: rgb(0, 190, 0);\'>root@Allan</span>");
document.writeln("            <span style=\'color: blue;\'>~</span>");
document.writeln("            <span style=\'color: rgb(39, 39, 39);\'>./yiyan.sh</span>");
document.writeln("            <br>");
document.writeln("            <iframe scrolling=\'no\' src=\'https://v.api.aa1.cn/api/yiyan/index.php\' frameborder=\'0\' width=\'900\' height=\'24\' allowtransparency=\'true\'>");
document.writeln("            </iframe>");
document.writeln("          </div>");
document.writeln("        </div>");
document.writeln("      </div>");
document.writeln("    </div>");
document.writeln("    <!-- 页脚 -->");
document.writeln("    <div id=\'footer\'>");
document.writeln("      <span id=\'runtime_span\'>");
document.writeln("      </span>");
document.writeln("      <script type=\'text/javascript\' src=\'https://cdn.jsdelivr.net/gh/GeorgeAllanAbbot/try/2.js\'>");
document.writeln("      </script>");
document.writeln("      <p>© 2023 Allan</p>");
document.writeln("    </div>");
document.writeln("  </body>");
document.writeln("");
document.writeln("</html>");
