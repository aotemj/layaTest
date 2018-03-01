// 文本对齐&自动换行练习
Laya.init(600,400);

var txt = new Laya.Text();

txt.text = "HelloLayaBoxHelloLayaBox";

txt.fontSize = 64;

txt.color = '#fff';

txt.bgColor = 'blue';

// 设置文本的宽高
txt.width = 500;
txt.height = 300;

// 设置文本水平对齐方式：
txt.align = "center";

// 设置文本垂直对齐方式：
txt.valign = "middle";

// 设置文本是否换行
txt.wordWrap = true;

Laya.stage.addChild(txt);
