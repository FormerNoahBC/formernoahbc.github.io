(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Fortune_20Cookie_20Start_20V2_atlas_1", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"Fortune_20Cookie_20Start_20V2_atlas_2", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"Fortune_20Cookie_20Start_20V2_atlas_3", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"Fortune_20Cookie_20Start_20V2_atlas_4", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"Fortune_20Cookie_20Start_20V2_atlas_5", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"Fortune_20Cookie_20Start_20V2_atlas_6", frames: [[1282,0,441,377],[1725,0,292,374],[1565,589,260,353],[1565,944,255,346],[1282,589,281,371],[1282,379,565,208],[0,0,1280,720],[0,722,1280,720]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._01_whole_cookie = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._02_left_front = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._03_left_back = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._04_right_back = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._05_right_front = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._06_fortune_paper = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.burst00 = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.burst01 = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.burst02 = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.burst03 = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.burst04 = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.burst05 = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.burst06 = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.burst07 = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.burst08 = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.burst09 = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.burst10 = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.burst11 = function() {
	this.initialize(ss["Fortune_20Cookie_20Start_20V2_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WholeCookie = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._01_whole_cookie();
	this.instance.setTransform(-220.5,-188.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WholeCookie, new cjs.Rectangle(-220.5,-188.5,441,377), null);


(lib.WholeCook = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._01_whole_cookie();
	this.instance.setTransform(-220.5,-188.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WholeCook, new cjs.Rectangle(-220.5,-188.5,441,377), null);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.fortune_txt = new cjs.Text("Your Text goes here", "27px 'Arial'");
	this.fortune_txt.name = "fortune_txt";
	this.fortune_txt.textAlign = "center";
	this.fortune_txt.lineHeight = 32;
	this.fortune_txt.lineWidth = 466;
	this.fortune_txt.parent = this;
	this.fortune_txt.setTransform(0,-34);

	this.timeline.addTween(cjs.Tween.get(this.fortune_txt).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234.9,-36,469.9,72);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.fortune_txt = new cjs.Text("Your Text goes here", "27px 'Arial'");
	this.fortune_txt.name = "fortune_txt";
	this.fortune_txt.textAlign = "center";
	this.fortune_txt.lineHeight = 32;
	this.fortune_txt.lineWidth = 466;
	this.fortune_txt.parent = this;
	this.fortune_txt.setTransform(0,-34);

	this.timeline.addTween(cjs.Tween.get(this.fortune_txt).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234.9,-36,469.9,72);


(lib.ShadowRight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("At4BtQlwguAAg/QAAg+FwguQFxgtIHAAQIJAAFvAtQFxAuAAA+QAAA/lxAuQlvAtoJAAQoHAAlxgtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ShadowRight, new cjs.Rectangle(-125.7,-15.3,251.4,30.700000000000003), null);


(lib.ShadowLeft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AukB3QmCgxAAhGQAAhFGCgyQGDgwIhAAQIjAAGBAwQGDAyAABFQAABGmDAxQmBAyojgBQohABmDgyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ShadowLeft, new cjs.Rectangle(-131.9,-16.8,263.8,33.7), null);


(lib.RightFront = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._05_right_front();
	this.instance.setTransform(-140.5,-185.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RightFront, new cjs.Rectangle(-140.5,-185.5,281,371), null);


(lib.RightBack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._04_right_back();
	this.instance.setTransform(-127.5,-173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RightBack, new cjs.Rectangle(-127.5,-173,255,346), null);


(lib.ResetButton2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Try Again", "35px 'Neutraface 2 Text Book'");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 183;
	this.text.parent = this;
	this.text.setTransform(-1.1,-21.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#323232").ss(1,1,1).p("AtLlQIaXAAQCLAABjBiQBjBjAACLIAAAAQAACMhjBiQhjBjiLAAI6XAAQiLAAhjhjQhjhiAAiMIAAAAQAAiLBjhjQBjhiCLAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AtLFRQiLAAhjhjQhjhiAAiMIAAAAQAAiLBjhjQBjhiCLAAIaXAAQCLAABjBiQBjBjAACLIAAAAQAACMhjBiQhjBjiLAAg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ResetButton2, new cjs.Rectangle(-119,-34.7,238.1,69.5), null);


(lib.LeftFront = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._02_left_front();
	this.instance.setTransform(-160.85,-174.35,1,1,-4.7167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LeftFront, new cjs.Rectangle(-160.8,-198.3,321.70000000000005,396.70000000000005), null);


(lib.LeftBack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._03_left_back();
	this.instance.setTransform(-130,-176.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LeftBack, new cjs.Rectangle(-130,-176.5,260,353), null);


(lib.FortuneTextClip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.fortune_txt = new cjs.Text("test text", "35px 'Neutra Text TF'");
	this.fortune_txt.name = "fortune_txt";
	this.fortune_txt.textAlign = "center";
	this.fortune_txt.lineHeight = 43;
	this.fortune_txt.lineWidth = 398;
	this.fortune_txt.parent = this;
	this.fortune_txt.setTransform(0,-35.6);

	this.timeline.addTween(cjs.Tween.get(this.fortune_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FortuneTextClip, new cjs.Rectangle(-201.1,-37.6,402.2,75.2), null);


(lib.FortunePaper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._06_fortune_paper();
	this.instance.setTransform(-282.5,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FortunePaper, new cjs.Rectangle(-282.5,-104,565,208), null);


// stage content:
(lib.FortuneCookieStartV2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,4,5,57,58];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// Reference to the main timeline
		var root = this;
		
		// List of possible fortunes
		var fortunes = [
		    "Rabbi Rodich, is this what you wanted?",
		    "your bagel order is what?!?!.",
		    "Man... That Noah is a special guy.'.",
		    "Temple specific messaging.",
		    "oof, it's not looking good.'.",
		    "Today is full of dissapointments.",
		    "Something wonderful is happening to someone else."
		];
		
		// Selected fortune
		root.selectedFortune = "";
		
		// Make cookie clickable
		root.cookie_btn.cursor = "pointer";
		
		// Clear any previous listener
		root.cookie_btn.removeAllEventListeners("click");
		
		// When the cookie is clicked...
		root.cookie_btn.addEventListener("click", function() {
		
		    // Choose a random fortune
		    var index = Math.floor(
		        Math.random() * fortunes.length
		    );
		
		    root.selectedFortune = fortunes[index];
		
		    // Play the animation
		    root.play();
		
		});
	}
	this.frame_4 = function() {
		playSound("messagepopupsocialnetwork2SBA300463497");
	}
	this.frame_5 = function() {
		this.textClip.fortune_txt.text = this.selectedFortune;
	}
	this.frame_57 = function() {
		this.textClip.fortune_txt.text = this.selectedFortune;
	}
	this.frame_58 = function() {
		this.stop();
		
		var root = this;
		
		this.reset_btn.cursor = "pointer";
		
		this.reset_btn.addEventListener("click", function() {
		
		    // Return to the first frame
		    root.gotoAndStop(1);
		
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(52).call(this.frame_57).wait(1).call(this.frame_58).wait(2));

	// Reset_Button
	this.reset_btn = new lib.ResetButton2();
	this.reset_btn.name = "reset_btn";
	this.reset_btn.setTransform(610.65,622.55);
	this.reset_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.reset_btn).wait(58).to({_off:false},0).wait(2));

	// Crack
	this.instance = new lib.burst00();

	this.instance_1 = new lib.burst01();

	this.instance_2 = new lib.burst02();

	this.instance_3 = new lib.burst03();

	this.instance_4 = new lib.burst04();

	this.instance_5 = new lib.burst05();

	this.instance_6 = new lib.burst06();

	this.instance_7 = new lib.burst07();

	this.instance_8 = new lib.burst08();

	this.instance_9 = new lib.burst09();

	this.instance_10 = new lib.burst10();

	this.instance_11 = new lib.burst11();
	this.instance_11.setTransform(-24,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(45));

	// Whole_Cookie
	this.cookie_btn = new lib.WholeCook();
	this.cookie_btn.name = "cookie_btn";
	this.cookie_btn.setTransform(610.5,357.5);

	this.instance_12 = new lib.WholeCookie();
	this.instance_12.setTransform(610.5,357.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cookie_btn}]}).to({state:[{t:this.instance_12}]},4).to({state:[]},1).to({state:[]},1).wait(54));

	// Left_Front
	this.leftfront = new lib.LeftFront();
	this.leftfront.name = "leftfront";
	this.leftfront.setTransform(493.1,375);
	this.leftfront._off = true;

	this.timeline.addTween(cjs.Tween.get(this.leftfront).wait(5).to({_off:false},0).wait(1).to({rotation:-1.8291,x:470.0776,y:378.3588},0).wait(1).to({rotation:-3.6747,x:446.8477,y:381.7478},0).wait(1).to({rotation:-5.4881,x:424.0242,y:385.0775},0).wait(1).to({rotation:-7.2236,x:402.18,y:388.2643},0).wait(1).to({rotation:-8.8456,x:381.765,y:391.2427},0).wait(1).to({rotation:-10.3311,x:363.0678,y:393.9704},0).wait(1).to({rotation:-11.6694,x:346.2224,y:396.428},0).wait(1).to({rotation:-12.8596,x:331.2422,y:398.6135},0).wait(1).to({rotation:-13.9069,x:318,y:400.5},0).wait(1).to({rotation:-14.9345,x:305.0511,y:402.3801},0).wait(1).to({rotation:-15.823,x:293.854,y:404.0059},0).wait(1).to({rotation:-16.5847,x:284.2553,y:405.3996},0).wait(1).to({rotation:-17.2313,x:276.107,y:406.5827},0).wait(1).to({rotation:-17.7738,x:269.2715,y:407.5752},0).wait(1).to({rotation:-18.2219,x:263.6239,y:408.3952},0).wait(1).to({rotation:-18.5847,x:259.0522,y:409.059},0).wait(1).to({rotation:-18.8701,x:255.4566,y:409.5811},0).wait(1).to({rotation:-19.085,x:252.7486,y:409.9743},0).wait(1).to({rotation:-19.2356,x:250.85,y:410.25},0).to({_off:true},35).wait(1));

	// Right_Front
	this.rightfront = new lib.RightFront();
	this.rightfront.name = "rightfront";
	this.rightfront.setTransform(769.5,365.5);
	this.rightfront._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rightfront).wait(5).to({_off:false},0).wait(1).to({rotation:2.4695,x:793.3455,y:368.3826},0).wait(1).to({rotation:4.9612,x:817.4059,y:371.2911},0).wait(1).to({rotation:7.4094,x:841.0453,y:374.1487},0).wait(1).to({rotation:9.7525,x:863.6706,y:376.8838},0).wait(1).to({rotation:11.9423,x:884.8154,y:379.4399},0).wait(1).to({rotation:13.9479,x:904.1811,y:381.7809},0).wait(1).to({rotation:15.7548,x:921.6287,y:383.89},0).wait(1).to({rotation:17.3616,x:937.1445,y:385.7657},0).wait(1).to({rotation:18.7756,x:950.75,y:387.4},0).wait(1).to({rotation:20.163,x:964.1327,y:389.0005},0).wait(1).to({rotation:21.3627,x:975.705,y:390.3845},0).wait(1).to({rotation:22.3911,x:985.6253,y:391.5709},0).wait(1).to({rotation:23.2642,x:994.0466,y:392.5781},0).wait(1).to({rotation:23.9966,x:1001.1111,y:393.423},0).wait(1).to({rotation:24.6017,x:1006.9479,y:394.1211},0).wait(1).to({rotation:25.0915,x:1011.6729,y:394.6862},0).wait(1).to({rotation:25.4768,x:1015.3891,y:395.1306},0).wait(1).to({rotation:25.7669,x:1018.1878,y:395.4653},0).wait(1).to({rotation:25.9703,x:1020.15,y:395.7},0).to({_off:true},35).wait(1));

	// fortuneText
	this.textClip = new lib.FortuneTextClip();
	this.textClip.name = "textClip";
	this.textClip.setTransform(639.4,372.1,0.4816,1);
	this.textClip._off = true;

	this.timeline.addTween(cjs.Tween.get(this.textClip).wait(5).to({_off:false},0).to({scaleX:1,x:636.15,y:339.55},19).to({_off:true},35).wait(1));

	// Fortune_Paper
	this.instance_13 = new lib.FortunePaper();
	this.instance_13.setTransform(630.55,373.1,0.5603,1,0,0,0,0.1,0.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).to({regX:0,regY:0,scaleX:1,x:638.15,y:348.45},19).to({_off:true},35).wait(1));

	// Left_Back
	this.leftback = new lib.LeftBack();
	this.leftback.name = "leftback";
	this.leftback.setTransform(524,374.5);
	this.leftback._off = true;

	this.timeline.addTween(cjs.Tween.get(this.leftback).wait(5).to({_off:false},0).to({rotation:-19.2356,x:279.9,y:399.6},19,cjs.Ease.quadOut).to({_off:true},35).wait(1));

	// Right_Back
	this.rightback = new lib.RightBack();
	this.rightback.name = "rightback";
	this.rightback.setTransform(728.25,360);
	this.rightback._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rightback).wait(5).to({_off:false},0).to({regX:0.1,regY:0.1,rotation:25.9703,x:985.5,y:372.8},19,cjs.Ease.quadOut).to({_off:true},35).wait(1));

	// fortune_txt
	this.fortune_txt = new lib.Tween7("synched",0);
	this.fortune_txt.name = "fortune_txt";
	this.fortune_txt.setTransform(639.4,370.5);
	this.fortune_txt._off = true;

	this.instance_14 = new lib.Tween8("synched",0);
	this.instance_14.setTransform(639.4,342.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.fortune_txt}]},5).to({state:[{t:this.instance_14}]},19).to({state:[]},35).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.fortune_txt).wait(5).to({_off:false},0).to({_off:true,y:342.6},19).wait(36));

	// Shadow_Left
	this.instance_15 = new lib.ShadowLeft();
	this.instance_15.setTransform(510.7,605.7);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(5).to({_off:false},0).to({x:290.6},19,cjs.Ease.quadOut).wait(36));

	// Full_Shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("A2cCoQpThGAAhiQAAhhJThGQJThGNJAAQNKAAJTBGQJTBGAABhQAABipTBGQpTBGtKAAQtJAApThGg");
	this.shape.setTransform(634.1,609.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:true},1).wait(55));

	// Shadow_Right
	this.instance_16 = new lib.ShadowRight();
	this.instance_16.setTransform(758.2,604.2,1.2076,1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(5).to({_off:false},0).to({scaleX:1.2319,x:969.8,y:604.15},19,cjs.Ease.quadOut).wait(36));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(616,360,664,360);
// library properties:
lib.properties = {
	id: '7CBC7933DF0212429316C4EFBCEE6F04',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#3366CC",
	opacity: 1.00,
	manifest: [
		{src:"images/Fortune_20Cookie_20Start_20V2_atlas_1.png", id:"Fortune_20Cookie_20Start_20V2_atlas_1"},
		{src:"images/Fortune_20Cookie_20Start_20V2_atlas_2.png", id:"Fortune_20Cookie_20Start_20V2_atlas_2"},
		{src:"images/Fortune_20Cookie_20Start_20V2_atlas_3.png", id:"Fortune_20Cookie_20Start_20V2_atlas_3"},
		{src:"images/Fortune_20Cookie_20Start_20V2_atlas_4.png", id:"Fortune_20Cookie_20Start_20V2_atlas_4"},
		{src:"images/Fortune_20Cookie_20Start_20V2_atlas_5.png", id:"Fortune_20Cookie_20Start_20V2_atlas_5"},
		{src:"images/Fortune_20Cookie_20Start_20V2_atlas_6.png", id:"Fortune_20Cookie_20Start_20V2_atlas_6"},
		{src:"sounds/messagepopupsocialnetwork2SBA300463497.mp3", id:"messagepopupsocialnetwork2SBA300463497"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7CBC7933DF0212429316C4EFBCEE6F04'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;