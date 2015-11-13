<div id="wmd-preview" class="wmd-preview"><div class="md-section-divider"></div><div class="md-section-divider"></div><h1 id="mongobro开发文档" data-anchor-id="suvc">MongoBro开发文档</h1><p data-anchor-id="j4mu"><code>Mongobro</code> <code>Databases</code> <code>MongoDB</code> <code>NoSQL</code></p><hr><p data-anchor-id="ntvx"><div class="toc"><div class="toc">
<ul>
<li><a href="#mongobro开发文档">MongoBro开发文档</a><ul>
<li><ul>
<li><a href="#1-mongobro-介绍">1. MongoBro 介绍</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#mongobro-可视化工具">MongoBro 可视化工具</a><ul>
<li><ul>
<li><a href="#1-终端">1. 终端</a></li>
<li><a href="#2-用户交互界面">2. 用户交互界面</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#mongobro-api">MongoBro API</a><ul>
<li><ul>
<li><a href="#api索引">API索引</a><ul>
<li><a href="#mongobro函数原型">mongoBro函数原型</a></li>
<li><a href="#broadcastmongodbupdated">broadcastMongoDbUpdated *</a></li>
<li><a href="#broadcastmongodbnoupdated">broadcastMongoDbNoUpdated *</a></li>
<li><a href="#getdatabases">getDatabases</a></li>
<li><a href="#getmongocount">getMongoCount</a></li>
<li><a href="#ismongonull">isMongoNull</a></li>
<li><a href="#getmongoobj">getMongoObj</a></li>
<li><a href="#isdbexists">isDbExists</a></li>
<li><a href="#writemongoobj">writeMongoObj *</a></li>
<li><a href="#createdb">createDB</a></li>
<li><a href="#updatedb">updateDB</a></li>
<li><a href="#isexists">isExists</a></li>
<li><a href="#use">use</a></li>
<li><a href="#getcurrentdbname">getCurrentDBName</a></li>
<li><a href="#setcurrentdbname">setCurrentDBName</a></li>
<li><a href="#removedb">removeDB</a></li>
<li><a href="#removealldatabases">removeAllDatabases</a></li>
<li><a href="#istablenull">isTableNull</a></li>
<li><a href="#writemongotabledb">writeMongoTableDB *</a></li>
<li><a href="#addtablelist">addTableList *</a></li>
<li><a href="#removetablelist">removeTableList *</a></li>
<li><a href="#removealltablelist">removeAlltableList *</a></li>
<li><a href="#updatetablelist">updateTableList *</a></li>
<li><a href="#gettablelist">getTableList *</a></li>
<li><a href="#istableupdated">isTableUpdated *</a></li>
<li><a href="#broadcastmongodbtableupdated">broadcastMongoDbTableUpdated *</a></li>
<li><a href="#broadcastmongodbtablenoupdated">broadcastMongoDbTableNoUpdated *</a></li>
<li><a href="#createtable">createTable</a></li>
<li><a href="#istableexists">isTableExists</a></li>
<li><a href="#updatetable">updateTable</a></li>
<li><a href="#removetable">removeTable</a></li>
<li><a href="#gettablebydbname">getTableByDBName</a></li>
<li><a href="#gettablecollection">getTableCollection</a></li>
<li><a href="#gettablecollectionby">getTableCollectionBy *</a></li>
<li><a href="#gettablecollectionbyid">getTableCollectionById *</a></li>
<li><a href="#removetablecollection">removeTableCollection</a></li>
<li><a href="#updatetablecollection">updateTableCollection</a></li>
<li><a href="#updatetcbyobject">updateTCByObject *</a></li>
<li><a href="#getobjlength">getObjLength *</a></li>
<li><a href="#inserttablecollection">insertTableCollection</a></li>
<li><a href="#getobjkey">getObjKey *</a></li>
<li><a href="#gettablekey">getTableKey *</a></li>
<li><a href="#addtablekey">addTableKey</a></li>
</ul>
</li>
<li><a href="#api使用示例">API使用示例</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#拓展阅读">拓展阅读</a><ul>
<li><ul>
<li><a href="#1-mongobro-官网">1. MongoBro 官网</a></li>
<li><a href="#2-mongobro-github-1">2. MongoBro GitHub</a></li>
<li><a href="#3-mongobro-开发者博客">3. MongoBro 开发者博客</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
</div>
</p><div class="md-section-divider"></div><h3 id="1-mongobro-介绍" data-anchor-id="lqfw">1. MongoBro 介绍</h3><blockquote class="white-blockquote" data-anchor-id="rfq4">
  <p>MongoBro是一个基于HTML5 localStorage技术的小型Web端数据库系统, 他的整体开发思想来源于MongoDB, 但并不完全是NoSQL类型数据库, 它同样支持传统数据库系统如MySQL中的表和字段. <br>
  MongoBro的核心代码仅<strong>729</strong>行,若加上设计器也仅<strong>3000</strong>行,非常简单易用.</p>
</blockquote><hr><div class="md-section-divider"></div><h1 id="mongobro-可视化工具" data-anchor-id="nq3m">MongoBro 可视化工具</h1><blockquote class="white-blockquote" data-anchor-id="1rur">
  <p>我们提供了一整套MongoBro的在线开发工具, 目前还在不断完善中</p>
</blockquote><dl data-anchor-id="x3d8">
<dt>主界面</dt>
<dd><img src="http://i13.tietuku.com/d3254cc456470835.png" alt="主界面" title=""></dd>
</dl><div class="md-section-divider"></div><h3 id="1-终端" data-anchor-id="hy1h">1. 终端</h3><blockquote class="white-blockquote" data-anchor-id="5u1l">
  <p>MongoBro的终端主要用来执行一些用户交互上起来比较麻烦的操作, 比如对表字段的增删查改, 对全部数据库的删除等. 基本上保持了和Linux命令行一致的体验, 当然个别地方还有待完善.</p>
</blockquote><dl data-anchor-id="5w4a">
<dt>终端界面</dt>
<dd><img src="http://i13.tietuku.com/c1d2284feff1f6ac.png" alt="终端主界面" title=""></dd>

<dt>终端使用</dt>
<dd>
<p>快捷键</p>

<pre><code>使用Ctrl + Alt + Space呼出终端, 再次按下关闭终端
</code></pre>
</dd>

<dd>
<p>右上角按钮</p>

<pre><code>右上角按钮有三种类型:
- 隐藏窗口
- 放大窗口
- 关闭窗口
</code></pre>
</dd>

<dd>
<p>标题栏</p>

<pre><code>双击标题栏即可放大终端窗口
</code></pre>
</dd>

<dt>终端命令</dt>
<dd>
<p>帮助指令</p>

<pre><code>- help 或 h : 输出系统当前支持的所有命令(有些命令为系统内部命令, 即使显示也不可使用)
- help [Command name] : 输出[Command name]的源代码
</code></pre>

<p><img src="http://i13.tietuku.com/a82b1a5e9a81a59a.png" alt="help" title=""> <br>
<img src="http://i13.tietuku.com/028a156a09f4e953.png" alt="helpCommand" title=""></p>
</dd>

<dd>
<p>数据库操作指令</p>

<pre><code>- add : 向指定数据库中的数据表添加字段, 用法如下:
        add key to TABLE_NAME in DBNAME set FIELDS_LIST values [VALUES_LIST]
        其中的TABLE_NAME为表名;DBNAME为数据库名; FIELDS_LIST为字段列表, 其格式为字段1, 字段2 ,字段3, ..., 字段N, FIELDS_LIST不可省略;VALUES_LIST为值列表, 格式为值1, 值2 ,值3, ..., 值N, VALUES_LIST可省略;
        如果我要在DBNAME为mongo的数据库中向TABLE_NAME为ivydom的表插入3个字段且默认值为fuck, 则其指令如下:
        add key to ivydom in mongo set f1,f2,f3 values v1,v2,v3

- remove : remove目前只有一个参数, all, 即删除所有数据库和数据表(慎用)
        remove all

- rollback : 如果您不小心删了数据库, 那么我们提供了rollback方法帮助您恢复数据(注意不是您原本的数据, 而是一些测试数据, 这个方法本是为了方便调试而开发的).
        rollback

- exit : 和linux ssh中的exit命令一样, 退出当前终端
        exit
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h3 id="2-用户交互界面" data-anchor-id="iln6">2. 用户交互界面</h3><dl data-anchor-id="tkvo">
<dt>主界面</dt>
<dd>
<p><img src="http://i13.tietuku.com/d3254cc456470835.png" alt="mongobro主界面" title=""></p>

<p><img src="http://img.anasit.com/uploads/2015/11/Q64D1$_2{_U_AR2I$OMWVOF.png" alt="mongobro主界面" title=""></p>

<p><img src="http://img.anasit.com/uploads/2015/11/w.png" alt="新建数据库" title=""></p>

<p><img src="http://img.anasit.com/uploads/2015/11/e.png" alt="编辑字段值" title=""></p>

<p><img src="http://img.anasit.com/uploads/2015/11/r.png" alt="右键菜单" title=""></p>
</dd>
</dl><hr><div class="md-section-divider"></div><h1 id="mongobro-api" data-anchor-id="3pgv">MongoBro API</h1><blockquote class="white-blockquote" data-anchor-id="asqy">
  <p>本部分将帮助您在实际应用中使用MongoBro, 以上内容只是帮助您体验MongoBro.</p>
</blockquote><div class="md-section-divider"></div><h3 id="api索引" data-anchor-id="x6uk">API索引</h3><blockquote class="white-blockquote" data-anchor-id="hzcm">
  <p>要使用MongBro, 只需要使用mongoBro类即可.MongoBro提供了42个方法供调用; <br>
  <strong><em>内部调用函数全部打*号,系统内部方法不建议调用,若不慎调用请使用removeAllDatabases恢复系统;</em></strong> <br>
  以下API全部继承自MongoBro; <br>
  <strong>mongoBro中的方法若无特殊说明则执行成功返回mongoBro自身(即支持链式调用),失败返回false</strong></p>
</blockquote><div class="md-section-divider"></div><h4 id="mongobro函数原型" data-anchor-id="ygwl"><strong>mongoBro函数原型</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="yl47" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="kwd">function</span><span class="pln"> mongoBro</span><span class="pun">(){</span></code></li><li class="L1"><code class="language-javascript"><span class="pln">    </span><span class="kwd">if</span><span class="pun">(!</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">isMongoNull</span><span class="pun">()){</span></code></li><li class="L2"><code class="language-javascript"><span class="pln">    </span><span class="pun">}</span><span class="kwd">else</span><span class="pun">{</span></code></li><li class="L3"><code class="language-javascript"><span class="pln">        localStorage</span><span class="pun">.</span><span class="typ">MongoBrowserDB</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="str">''</span><span class="pun">;</span></code></li><li class="L4"><code class="language-javascript"><span class="pln">    </span><span class="pun">}</span></code></li><li class="L5"><code class="language-javascript"><span class="pun">}</span></code></li></ol></pre><div class="md-section-divider"></div><h4 id="broadcastmongodbupdated" data-anchor-id="71j4"><strong>broadcastMongoDbUpdated *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="oxe3" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">broadcastMongoDbUpdated </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span></code></li></ol></pre><dl data-anchor-id="un1f">
<dt>功能</dt>
<dd>
<p>通知系统Mongobro的数据库已经更新</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="broadcastmongodbnoupdated" data-anchor-id="q230"><strong>broadcastMongoDbNoUpdated *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="qaod" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">broadcastMongoDbNoUpdated </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span></code></li></ol></pre><dl data-anchor-id="xya5">
<dt>功能</dt>
<dd>
<p>通知系统Mongobro的数据库已经更新完毕</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="getdatabases" data-anchor-id="hfpo"><strong>getDatabases</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="q6ow" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">getDatabases </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span></code></li></ol></pre><dl data-anchor-id="m7ic">
<dt>功能</dt>
<dd>获得系统中存在的所有数据库,返回数组,若无返回空数组</dd>
</dl><div class="md-section-divider"></div><h4 id="getmongocount" data-anchor-id="kaiu"><strong>getMongoCount</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="amdz" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">getMongoCount </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span></code></li></ol></pre><dl data-anchor-id="xpia">
<dt>功能</dt>
<dd>获得系统中所有数据库的个数</dd>
</dl><div class="md-section-divider"></div><h4 id="ismongonull" data-anchor-id="brez"><strong>isMongoNull</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="2d6j" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">isMongoNull </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span></code></li></ol></pre><dl data-anchor-id="kcja">
<dt>功能</dt>
<dd>判断系统中是否已有数据库</dd>
</dl><div class="md-section-divider"></div><h4 id="getmongoobj" data-anchor-id="7uue"><strong>getMongoObj</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="rvyv" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">getMongoObj </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span></code></li></ol></pre><dl data-anchor-id="rnvd">
<dt>功能</dt>
<dd>getDatabases的原型实现</dd>
</dl><div class="md-section-divider"></div><h4 id="isdbexists" data-anchor-id="flsa"><strong>isDbExists</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="zlpc" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">isDbExists </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="jum3">
<dt>功能</dt>
<dd>判断dbname是否存在,存在返回true,否则返回false</dd>
</dl><div class="md-section-divider"></div><h4 id="writemongoobj" data-anchor-id="tzko"><strong>writeMongoObj *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="b4fq" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">writeMongoObj </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">str</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="35pj">
<dt>功能</dt>
<dd>
<p>将str写回到localStorage中</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="createdb" data-anchor-id="yf71"><strong>createDB</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="8pqs" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">createDB </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="0ix2">
<dt>功能</dt>
<dd>创建数据库名为dbname的数据库</dd>
</dl><div class="md-section-divider"></div><h4 id="updatedb" data-anchor-id="wp2z"><strong>updateDB</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="nx6y" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">updateDB </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">original_name</span><span class="pun">,</span><span class="pln">new_name</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="admi">
<dt>功能</dt>
<dd>更改数据库名为original_name的数据库为original_name</dd>
</dl><div class="md-section-divider"></div><h4 id="isexists" data-anchor-id="0zhk"><strong>isExists</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="ats1" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">isExists </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span></code></li></ol></pre><dl data-anchor-id="ex7b">
<dt>功能</dt>
<dd>isDBExists的原型实现</dd>
</dl><div class="md-section-divider"></div><h4 id="use" data-anchor-id="1umx"><strong>use</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="5nd9" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">use </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="thc3">
<dt>功能</dt>
<dd>使用数据库dbname, 调用此函数后系统会记录当前数据库为用户指定的数据库</dd>
</dl><div class="md-section-divider"></div><h4 id="getcurrentdbname" data-anchor-id="tqm2"><strong>getCurrentDBName</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="m8n8" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">getCurrentDBName </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span></code></li></ol></pre><dl data-anchor-id="1h4u">
<dt>功能</dt>
<dd>获得当前的数据库名</dd>
</dl><div class="md-section-divider"></div><h4 id="setcurrentdbname" data-anchor-id="vtkt"><strong>setCurrentDBName</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="uu7x" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">setCurrentDBName </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="7l5n">
<dt>功能</dt>
<dd>
<p>设置当前数据库名,为use的底层实现</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="removedb" data-anchor-id="dhji"><strong>removeDB</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="jecr" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">removeDB </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="l6ec">
<dt>功能</dt>
<dd>删除数据库名为dbname的数据库</dd>
</dl><div class="md-section-divider"></div><h4 id="removealldatabases" data-anchor-id="jwuv"><strong>removeAllDatabases</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="2bwt" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">removeAllDatabases </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span></code></li></ol></pre><dl data-anchor-id="hbfa">
<dt>功能</dt>
<dd>清空系统中存在的所有数据库</dd>
</dl><div class="md-section-divider"></div><h4 id="istablenull" data-anchor-id="7ebf"><strong>isTableNull</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="q7mf" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">isTableNull </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span></code></li></ol></pre><dl data-anchor-id="no1a">
<dt>功能</dt>
<dd>判断当前数据表是否为空</dd>
</dl><div class="md-section-divider"></div><h4 id="writemongotabledb" data-anchor-id="fbje"><strong>writeMongoTableDB *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="urrk" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">writeMongoTableDB </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="32qx">
<dt>功能</dt>
<dd>
<p>将数据表数据写回到localStorage</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="addtablelist" data-anchor-id="oewe"><strong>addTableList *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="cp4a" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">addTableList </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">database</span><span class="pun">,</span><span class="pln">tableName</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="o3ig">
<dt>功能</dt>
<dd>
<p>系统内部记录当前的数据库,数据表信息</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="removetablelist" data-anchor-id="qtig"><strong>removeTableList *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="d8jq" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">removeTableList </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">database</span><span class="pun">,</span><span class="pln">tableName</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="9aqr">
<dt>功能</dt>
<dd>
<p>系统内部记录数据库,数据表信息的删除操作</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="removealltablelist" data-anchor-id="ff50"><strong>removeAlltableList *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="k8d4" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">removeAlltableList </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span></code></li></ol></pre><dl data-anchor-id="zz2i">
<dt>功能</dt>
<dd>
<p>删除系统内部数据库,数据表记录信息</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="updatetablelist" data-anchor-id="eysr"><strong>updateTableList *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="331v" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">updateTableList </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">,</span><span class="pln">oldName</span><span class="pun">,</span><span class="pln">newName</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="2azi">
<dt>功能</dt>
<dd>
<p>系统内部记录数据库,数据表信息的更新操作</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="gettablelist" data-anchor-id="l1hf"><strong>getTableList *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="6xwq" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">getTableList </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span></code></li></ol></pre><dl data-anchor-id="7d5a">
<dt>功能</dt>
<dd>
<p>获取系统内部记录数据库,数据表信息</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="istableupdated" data-anchor-id="d1af"><strong>isTableUpdated *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="rloh" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">isTableUpdated </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span></code></li></ol></pre><dl data-anchor-id="kvky">
<dt>功能</dt>
<dd>
<p>获得系统内部表是否更新</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="broadcastmongodbtableupdated" data-anchor-id="vbh4"><strong>broadcastMongoDbTableUpdated *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="7n7r" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">broadcastMongoDbTableUpdated </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span></code></li></ol></pre><dl data-anchor-id="oln2">
<dt>功能</dt>
<dd>
<p>通知系统数据表已更新</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="broadcastmongodbtablenoupdated" data-anchor-id="xe5q"><strong>broadcastMongoDbTableNoUpdated *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="fccz" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">broadcastMongoDbTableNoUpdated </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span></code></li></ol></pre><dl data-anchor-id="xr9b">
<dt>功能</dt>
<dd>
<p>通知系统数据表已更新完毕</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="createtable" data-anchor-id="mgpt"><strong>createTable</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="paif" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">createTable </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">,</span><span class="pln">tableName</span><span class="pun">,</span><span class="pln">data</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="hhki">
<dt>功能</dt>
<dd>创建数据库名为dbname,数据表为tableName,数据为data的数据表 <br>
dbanme: 数据库名 <br>
tableName: 数据表名 <br>
data: 要加入的数据(数组) <br>
如果dbname不存在, 则返回false; <br>
如果tableName为空, 则返回false; <br>
若执行成功, 则返回mongoBro</dd>
</dl><div class="md-section-divider"></div><h4 id="istableexists" data-anchor-id="s0pe"><strong>isTableExists</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="63lr" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">isTableExists </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">,</span><span class="pln">tableName</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="mx02">
<dt>功能</dt>
<dd>判断数据表是否存在,若存在则返回true,否则返回false</dd>
</dl><div class="md-section-divider"></div><h4 id="updatetable" data-anchor-id="ptzc"><strong>updateTable</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="rgtv" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">updateTable </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">,</span><span class="pln">oldName</span><span class="pun">,</span><span class="pln">newName</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="969j">
<dt>功能</dt>
<dd>更新数据库名 <br>
dbname: 数据库名 <br>
oldName: 旧名字 <br>
newName: 新名字 <br>
执行失败返回false,执行成功返回mongoBro</dd>
</dl><div class="md-section-divider"></div><h4 id="removetable" data-anchor-id="tzfn"><strong>removeTable</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="uemv" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">removeTable </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">,</span><span class="pln">tableName</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="fdij">
<dt>功能</dt>
<dd>删除数据表 <br>
dbane: 数据库名 <br>
tableName: 数据表名 <br>
执行失败返回false,执行成功返回mongoBro</dd>
</dl><div class="md-section-divider"></div><h4 id="gettablebydbname" data-anchor-id="qoxs"><strong>getTableByDBName</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="jai2" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">getTableByDBName </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbanme</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="05m1">
<dt>功能</dt>
<dd>获得某数据库下的所有数据表 <br>
dbname: 数据库名 <br>
执行失败返回false,执行成功返回数据表列表(数组)</dd>
</dl><div class="md-section-divider"></div><h4 id="gettablecollection" data-anchor-id="m2am"><strong>getTableCollection</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="bkd5" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">getTableCollection </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">tableName</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="qc9x">
<dt>功能</dt>
<dd>获得某数据表的所有记录 <br>
tableName: 数据表名 <br>
执行失败返回false,执行成功返回记录列表(数组)</dd>
</dl><div class="md-section-divider"></div><h4 id="gettablecollectionby" data-anchor-id="mi9j"><strong>getTableCollectionBy *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="hmbk" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">getTableCollectionBy </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">,</span><span class="pln"> tableName</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">,</span><span class="pln"> val</span><span class="pun">,</span><span class="pln"> like</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="w62s">
<dt>功能</dt>
<dd>
<p>查询数据表中的某字段 <br>
dbname: 数据库名 <br>
tableName: 数据表名 <br>
key: 要查询的字段 <br>
val: 字段对应的值 <br>
like: 是否启用模糊搜索 <br>
执行成功返回对应的数组,否则返回false</p>

<pre><code>    此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="gettablecollectionbyid" data-anchor-id="69jw"><strong>getTableCollectionById *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="uk6l" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">getTableCollectionById </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">,</span><span class="pln"> tableName</span><span class="pun">,</span><span class="pln"> val</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="jcrt">
<dt>功能</dt>
<dd>
<p>根据表ID查询数据表中的某字段 <br>
dbname: 数据库名 <br>
tableName: 数据表名 <br>
key: 要查询的字段 <br>
执行成功返回对应的数组,否则返回false</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="removetablecollection" data-anchor-id="y866"><strong>removeTableCollection</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="gsmm" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">removeTableCollection </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">,</span><span class="pln"> tableName</span><span class="pun">,</span><span class="pln"> id</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="opbw">
<dt>功能</dt>
<dd>删除某数据库中的某数据表中某id的记录 <br>
dbname: 数据库名 <br>
tableName: 数据表名 <br>
id: id值 <br>
执行成功返回mongoBro, 失败返回false</dd>
</dl><div class="md-section-divider"></div><h4 id="updatetablecollection" data-anchor-id="cvb7"><strong>updateTableCollection</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="hof1" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">updateTableCollection </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">,</span><span class="pln"> tableName</span><span class="pun">,</span><span class="pln"> id</span><span class="pun">,</span><span class="pln"> collectionName</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="xd1a">
<dt>功能</dt>
<dd>更新数据表中的某条记录 <br>
dbname: 数据库名 <br>
tableName: 数据表名 <br>
id: 主键值 <br>
collectionName: 字段名 <br>
value: 新的值</dd>
</dl><div class="md-section-divider"></div><h4 id="updatetcbyobject" data-anchor-id="ds1e"><strong>updateTCByObject *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="qnmi" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">updateTCByObject </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">,</span><span class="pln"> tableName</span><span class="pun">,</span><span class="pln"> id</span><span class="pun">,</span><span class="pln"> obj</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="y759">
<dt>功能</dt>
<dd>
<p>通过对象方式更新集合 <br>
dbname: 数据库名 <br>
tableName: 数据表名 <br>
id: 主键值 <br>
obj: 数组对象 <br>
执行成功返回mongoBro, 失败返回false</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="getobjlength" data-anchor-id="uu15"><strong>getObjLength *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="p6vz" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">getObjLength </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">o</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="elnd">
<dt>功能</dt>
<dd>
<p>当无法通过obj.length获取对象长度时调用此函数获得长度 <br>
o: 对象</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="inserttablecollection" data-anchor-id="a75t"><strong>insertTableCollection</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="kvp1" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">insertTableCollection </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">,</span><span class="pln"> tableName</span><span class="pun">,</span><span class="pln"> data</span><span class="pun">,</span><span class="pln"> isAddKey</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="iumu">
<dt>功能</dt>
<dd>向数据表中新增字段 <br>
dbname: 数据库名 <br>
tableName: 数据表明 <br>
data: 数据 <br>
isAddKey: 是否是新增字段 <br>
如果isAddkey为假则新增一条记录,否则只是更新字段 <br>
执行成功返回mongoBro, 失败返回false</dd>
</dl><div class="md-section-divider"></div><h4 id="getobjkey" data-anchor-id="sh5f"><strong>getObjKey *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="rn4v" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">getObjKey </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="058r">
<dt>功能</dt>
<dd>
<p>获得对象的键值(即字段名) <br>
obj: 对象</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="gettablekey" data-anchor-id="4p2e"><strong>getTableKey *</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="mdq3" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">getTableKey </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">tableCollection</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="d9cz">
<dt>功能</dt>
<dd>
<p>获得数据表数据中的所有键值 <br>
tableCollection: 数据表中的数据</p>

<pre><code>此函数为系统内部函数,用户了解即可
</code></pre>
</dd>
</dl><div class="md-section-divider"></div><h4 id="addtablekey" data-anchor-id="qkl4"><strong>addTableKey</strong></h4><div class="md-section-divider"></div><pre style="" data-anchor-id="y2va" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">addTableKey </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">dbname</span><span class="pun">,</span><span class="pln"> tableName</span><span class="pun">,</span><span class="pln"> keyList</span><span class="pun">,</span><span class="pln"> valueList</span><span class="pun">){}</span></code></li></ol></pre><dl data-anchor-id="qs7a">
<dt>功能</dt>
<dd>向表中增加字段 <br>
dbname: 数据库名 <br>
tableName: 数据表名 <br>
keyList: 键列表 <br>
valueList: 值列表 <br>
执行成功返回mongoBro,失败返回false</dd>
</dl><div class="md-section-divider"></div><h3 id="api使用示例" data-anchor-id="cmvi">API使用示例</h3><hr><div class="md-section-divider"></div><pre style="" data-anchor-id="xen3" class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><code class="language-javascript"><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">removeAllDatabases</span><span class="pun">();</span></code></li><li class="L1"><code class="language-javascript"></code></li><li class="L2"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">createDB</span><span class="pun">(</span><span class="str">'test'</span><span class="pun">).</span><span class="pln">getDatabases</span><span class="pun">());</span></code></li><li class="L3"><code class="language-javascript"></code></li><li class="L4"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">createDB</span><span class="pun">(</span><span class="str">'fuck'</span><span class="pun">).</span><span class="pln">getDatabases</span><span class="pun">());</span></code></li><li class="L5"><code class="language-javascript"></code></li><li class="L6"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">updateDB</span><span class="pun">(</span><span class="str">'fuck'</span><span class="pun">,</span><span class="str">'bitch'</span><span class="pun">).</span><span class="pln">getDatabases</span><span class="pun">());</span></code></li><li class="L7"><code class="language-javascript"></code></li><li class="L8"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">getCurrentDBName</span><span class="pun">());</span></code></li><li class="L9"><code class="language-javascript"></code></li><li class="L0"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">removeDB</span><span class="pun">(</span><span class="str">'bitch'</span><span class="pun">).</span><span class="pln">getDatabases</span><span class="pun">());</span></code></li><li class="L1"><code class="language-javascript"></code></li><li class="L2"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">use</span><span class="pun">(</span><span class="str">'test'</span><span class="pun">).</span><span class="pln">getCurrentDBName</span><span class="pun">());</span></code></li><li class="L3"><code class="language-javascript"></code></li><li class="L4"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">createTable</span><span class="pun">(</span><span class="str">'test'</span><span class="pun">,</span><span class="str">'person'</span><span class="pun">).</span><span class="pln">getTableCollection</span><span class="pun">(</span><span class="str">'person'</span><span class="pun">));</span></code></li><li class="L5"><code class="language-javascript"></code></li><li class="L6"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">getTableList</span><span class="pun">());</span></code></li><li class="L7"><code class="language-javascript"></code></li><li class="L8"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">createTable</span><span class="pun">(</span><span class="str">'test'</span><span class="pun">,</span><span class="str">'xieyang'</span><span class="pun">,</span></code></li><li class="L9"><code class="language-javascript"><span class="pln">    </span><span class="pun">[{</span></code></li><li class="L0"><code class="language-javascript"><span class="pln">    name </span><span class="pun">:</span><span class="pln"> </span><span class="str">'xieyang'</span><span class="pun">,</span></code></li><li class="L1"><code class="language-javascript"><span class="pln">    sex </span><span class="pun">:</span><span class="pln"> </span><span class="str">'malemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemalemale'</span><span class="pln"> </span></code></li><li class="L2"><code class="language-javascript"><span class="pun">},{</span></code></li><li class="L3"><code class="language-javascript"><span class="pln">    name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'lanjia'</span><span class="pun">,</span></code></li><li class="L4"><code class="language-javascript"><span class="pln">    sex</span><span class="pun">:</span><span class="pln"> </span><span class="str">'male'</span></code></li><li class="L5"><code class="language-javascript"><span class="pun">}]).</span><span class="pln">getTableCollection</span><span class="pun">(</span><span class="str">'xieyang'</span><span class="pun">));</span></code></li><li class="L6"><code class="language-javascript"></code></li><li class="L7"><code class="language-javascript"><span class="kwd">var</span><span class="pln"> tableInTest </span><span class="pun">=</span><span class="pln"> mongoBro</span><span class="pun">.</span><span class="pln">getTableByDBName</span><span class="pun">(</span><span class="str">'test'</span><span class="pun">);</span></code></li><li class="L8"><code class="language-javascript"></code></li><li class="L9"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">tableInTest</span><span class="pun">);</span></code></li><li class="L0"><code class="language-javascript"></code></li><li class="L1"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'输出test数据库中的表数据'</span><span class="pun">);</span></code></li><li class="L2"><code class="language-javascript"></code></li><li class="L3"><code class="language-javascript"><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> tableInTest</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code class="language-javascript"><span class="pln">    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">getTableCollection</span><span class="pun">(</span><span class="pln">tableInTest</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]));</span></code></li><li class="L5"><code class="language-javascript"><span class="pun">};</span></code></li><li class="L6"><code class="language-javascript"></code></li><li class="L7"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'向test表中插入数据'</span><span class="pun">);</span></code></li><li class="L8"><code class="language-javascript"></code></li><li class="L9"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">insertTableCollection</span><span class="pun">(</span><span class="str">'test'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'xieyang'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code class="language-javascript"><span class="pln">    name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'hh'</span><span class="pun">,</span></code></li><li class="L1"><code class="language-javascript"><span class="pln">    sex</span><span class="pun">:</span><span class="pln"> </span><span class="str">'233'</span></code></li><li class="L2"><code class="language-javascript"><span class="pun">}));</span></code></li><li class="L3"><code class="language-javascript"></code></li><li class="L4"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'更新test表数据库名为xieyang中主键为1的name字段'</span><span class="pun">);</span></code></li><li class="L5"><code class="language-javascript"></code></li><li class="L6"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">updateTableCollection</span><span class="pun">(</span><span class="str">'test'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'xieyang'</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="str">'name'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'xuqianying'</span><span class="pun">).</span><span class="pln">getTableList</span><span class="pun">());</span></code></li><li class="L7"><code class="language-javascript"></code></li><li class="L8"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'更新test表数据库名为xieyang中主键为2的name字段'</span><span class="pun">);</span></code></li><li class="L9"><code class="language-javascript"></code></li><li class="L0"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">updateTableCollection</span><span class="pun">(</span><span class="str">'test'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'xieyang'</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="str">'name'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'xieyang'</span><span class="pun">).</span><span class="pln">getTableList</span><span class="pun">());</span></code></li><li class="L1"><code class="language-javascript"></code></li><li class="L2"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'以对象的方式修改test表中数据库名为xieyang中主键为2的集合'</span><span class="pun">);</span></code></li><li class="L3"><code class="language-javascript"></code></li><li class="L4"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">updateTCByObject</span><span class="pun">(</span><span class="str">'test'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'xieyang'</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code class="language-javascript"><span class="pln">    name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'蛤蛤'</span><span class="pun">,</span></code></li><li class="L6"><code class="language-javascript"><span class="pln">    sex</span><span class="pun">:</span><span class="pln"> </span><span class="str">'LGBT'</span></code></li><li class="L7"><code class="language-javascript"><span class="pun">}));</span></code></li><li class="L8"><code class="language-javascript"></code></li><li class="L9"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'修改person表的名称'</span><span class="pun">);</span></code></li><li class="L0"><code class="language-javascript"></code></li><li class="L1"><code class="language-javascript"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">updateTable</span><span class="pun">(</span><span class="str">'test'</span><span class="pun">,</span><span class="str">'person'</span><span class="pun">,</span><span class="str">'person_edit2'</span><span class="pun">).</span><span class="pln">getTableList</span><span class="pun">());</span></code></li><li class="L2"><code class="language-javascript"></code></li><li class="L3"><code class="language-javascript"><span class="kwd">if</span><span class="pun">(</span><span class="pln">remove</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code class="language-javascript"><span class="pln">    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">mongoBro</span><span class="pun">.</span><span class="pln">removeTable</span><span class="pun">(</span><span class="str">'test'</span><span class="pun">,</span><span class="str">'person_edit2'</span><span class="pun">).</span><span class="pln">getTableList</span><span class="pun">());</span></code></li><li class="L5"><code class="language-javascript"><span class="pun">}</span></code></li></ol></pre><dl data-anchor-id="7brp">
<dt></dt>
<dt><blockquote class="white-blockquote">
  输出结果如下:
</blockquote></dt>
<dd><img src="http://img.anasit.com/uploads/2015/11/t.jpg" alt="console" title=""></dd>
</dl><div class="md-section-divider"></div><h1 id="拓展阅读" data-anchor-id="ldjj">拓展阅读</h1><blockquote class="white-blockquote" data-anchor-id="k4ve">
  <p>MongoBro刚问世,功能还在不断完善中,期待您的使用和建议!</p>
</blockquote><div class="md-section-divider"></div><h3 id="1-mongobro-官网" data-anchor-id="q241">1. <a target="_blank" href="http://mb.ivydom.com">MongoBro 官网</a></h3><div class="md-section-divider"></div><h3 id="2-mongobro-github-1" data-anchor-id="p95a">2. <a target="_blank" href="https://github.com/leinue/mongobro">MongoBro GitHub</a></h3><div class="md-section-divider"></div><h3 id="3-mongobro-开发者博客" data-anchor-id="038o">3. <a target="_blank" href="http://ivydom.com">MongoBro 开发者博客</a></h3></div>
