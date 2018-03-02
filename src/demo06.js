// 显示图片与切换
// 初始化舞台
// // 1.0显示图片
// Laya.init(1344,800);
// Laya.stage.bgColor="#fff";

// var img = new Laya.Sprite();

// img.loadImage('../libs/res/monkey01.jpg',0,0,400,400);

// // 将图片添加到舞台
// Laya.stage.addChild(img);

// 2.0切换图片
Laya.init(1334,800);
// 设置要切换的图片路径
this.monkey01 = '../libs/res/monkey01.jpg';
this.monkey02 = '../libs/res/monkey02.jpg';

var img = new Laya.Sprite();

// 图片切换状态
this.flag = false;

// 显示图片
switchImg();

img.on(Laya.Event.CLICK,this,switchImg);

function switchImg(){
    // 清空画布
    this.img.graphics.clear();
    var imgUrl = (this.flag ==true ) ?this.monkey01:this.monkey02;
    // 获取图片资源：
    var texture = Laya.loader.getRes(imgUrl);

    // 绘制纹理
    this.img.graphics.drawTexture(texture);

    // 设置纹理宽高
    this.img.size(texture.width,texture.height);

    
    // Laya.stage.addChild(img); 
}