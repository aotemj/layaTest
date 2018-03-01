// textInput的单行输入&多行输入
Laya.init(640,800,Laya.WebGL);
// 设置画布背景色
Laya.stage.bgColor = "#efefef";

// 单行输入
Text_InputSingleline();
// 多行输入
Text_InputMultiline();

// 1.单行输入
function Text_InputSingleline(){
    //创建一个TextInput类的实例对象textInput
    var textInput = new Laya.TextInput("请在这里输入要填写的内容");
    textInput.color = "#fff";
    //设置输入文本框的自动换行 
    textInput.wordWrap = true;
    // 设置文本框的字体大小
    textInput.fontSize = 30;
    // 设置textInput对象的属性x的值，用于控制textInput对象的显示位置
    textInput.x = 0;
    // 设置textInput对象的属性y的值，用于控制textInput对象的显示位置
    textInput.y = 0;
    // 设置textInput的宽度
    textInput.width = 400;
    // 设置textInput的高度
    textInput.height = 300; 
    textInput.bgColor = "#c30c30";
    Laya.stage.addChild(textInput);
}

// 2.多行输入
function Text_InputMultiline(){
    var textInput = new Laya.TextInput("这里是多行输入文本框");
    textInput.color = "#fff";
    textInput.fontSize = 30;
    // 设置输入文本框自动换行
    textInput.wordWrap = true;

    // 设置输入文本框多行输入
    textInput.multiline = true;
    // 设置textInput对象的属性x的值，用于控制textInput对象的显示位置
    textInput.x = 0;
    // 设置textInput对象的属性y的值，用于控制textInput对象的显示位置
    textInput.y = 400;
    
    textInput.width = 400;
    textInput.height = 300;

    textInput.bgColor = "#c30c30";
    Laya.stage.addChild(textInput);

    

}