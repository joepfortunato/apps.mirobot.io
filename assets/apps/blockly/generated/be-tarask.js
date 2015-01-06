// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">Асяродзьдзе віртуальнага праграмаваньня</span><span id="blocklyMessage">Blockly (Блоклі)</span><span id="codeTooltip">Глядзі згенераваны код JavaScript.</span><span id="linkTooltip">Захаваць і зьвязаць з блёкамі.</span><span id="runTooltip">Запусьціце праграму, вызначаную блёкамі ў працоўнай вобласьці.</span><span id="runProgram">Запусьціць праграму</span><span id="resetProgram">Скасаваць</span><span id="dialogOk">OK</span><span id="dialogCancel">Скасаваць</span><span id="catLogic">Лёгіка</span><span id="catLoops">Петлі</span><span id="catMath">Матэматычныя формулы</span><span id="catText">Тэкст</span><span id="catLists">Сьпісы</span><span id="catColour">Колер</span><span id="catVariables">Зьменныя</span><span id="catProcedures">Функцыі</span><span id="httpRequestError">Узьнікла праблема з запытам.</span><span id="linkAlert">Падзяліцца Вашым блёкам праз гэтую спасылку:\n\n%1</span><span id="hashError">Прабачце, \'%1\' не адпавядае ніводнай захаванай праграме.</span><span id="xmlError">Не атрымалася загрузіць захаваны файл. Магчыма, ён быў створаны з іншай вэрсіяй Блёклі?</span><span id="listVariable">сьпіс</span><span id="textVariable">тэкст</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Перамясьціць чарапахка наперад або назад на зададзеную адлегласьць.</span><span id="Turtle_moveForward">рухацца наперад на</span><span id="Turtle_moveBackward">рухацца назад на</span><span id="Turtle_turnTooltip">Павярнуць чарапаху налева ці направа на паданую колькасьць градусаў.</span><span id="Turtle_turnRight">павярнуць направа на</span><span id="Turtle_turnLeft">павярнуць налева на</span><span id="Turtle_widthTooltip">Зьмена шырыні пяра.</span><span id="Turtle_setWidth">усталяваць шырыню</span><span id="Turtle_colourTooltip">Зьмяніць колер пяра.</span><span id="Turtle_setColour">усталяваць колер</span><span id="Turtle_penTooltip">Паднімае або апускае пяро, каб спыніць або пачаць маляваць.</span><span id="Turtle_penUp">падняць пяро</span><span id="Turtle_penDown">апусьціць пяро</span><span id="Turtle_turtleVisibilityTooltip">Зрабіць чарапаху (круг і стрэлка) бачнай або нябачнай.</span><span id="Turtle_hideTurtle">схаваць чарапаху</span><span id="Turtle_showTurtle">паказаць чарапаху</span><span id="Turtle_printHelpUrl">https://be-x-old.wikipedia.org/wiki/Друкарства</span><span id="Turtle_printTooltip">Малюе тэкст у кірунку чарапахі ад яе знаходжаньня.</span><span id="Turtle_print">друк</span><span id="Turtle_fontHelpUrl">https://be-x-old.wikipedia.org/wiki/Шрыфт</span><span id="Turtle_fontTooltip">Вызначае шрыфт, які выкарыстоўваецца друку блёку.</span><span id="Turtle_font">шрыфт</span><span id="Turtle_fontSize">памер шрыфту</span><span id="Turtle_fontNormal">звычайны</span><span id="Turtle_fontBold">тлусты</span><span id="Turtle_fontItalic">курсіў</span><span id="Turtle_unloadWarning">Закрыцьцё гэтай старонкі, прывядзе да страты вашай працы.</span></div>';
};


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return turtlepage.messages(null, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="/assets/apps/blockly/media/icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /></svg><!-- Fast icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="/assets/apps/blockly/media/icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></svg></td><td style="text-align: right"><button id="simButton" class="primary"><img src="/assets/apps/blockly/media/1x1.gif" class="run icon21"> Simulate Program</button><button id="resetButton" class="primary" style="display: none"><img src="/assets/apps/blockly/media/1x1.gif" class="stop icon21"> Reset Simulation</button></td></tr><tr><td><button id="codeButton" title="Глядзі згенераваны код JavaScript."><img src=\'/assets/apps/blockly/media/1x1.gif\' class="code icon21">View JS Code</button></td><td style="text-align: right"><button id="runButton" class="primary" title="Чарапашка зробіць тое, што скажуць блёкі."><img src="/assets/apps/blockly/media/1x1.gif" class="run icon21">Run on Mirobot</button><button id="stopButton" class="primary" style="display: none"><img src="/assets/apps/blockly/media/1x1.gif" class="stop icon21"> Stop Mirobot</button></td></tr></table><button class="secondary" onclick="Blockly.getMainWorkspace().clear()">Clear Program</button><p id="lang">Language: <select id="languageMenu"></select></p><script type="text/javascript" src="/assets/apps/blockly/' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="/assets/apps/blockly/js/common.js"><\/script><script type="text/javascript" src="/assets/apps/blockly/js/turtle.js"><\/script>' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Чарапашка"><block type="draw_move"><value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><field name="NUM">90</field></block></value></block><block type="draw_pen"></block></category><category name="Лёгіка"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Петлі"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Матэматычныя формулы"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_float"></block></category><category name="Сьпісы"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><field name="NUM">5</field></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">сьпіс</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">сьпіс</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">сьпіс</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">сьпіс</field></block></value></block></category><category name="Зьменныя" custom="VARIABLE"></category><category name="Функцыі" custom="PROCEDURE"></category></xml>';
};
