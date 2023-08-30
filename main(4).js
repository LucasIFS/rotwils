canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 90;

nasaMarsImageArray=[
	"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
	"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
	"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG",
	"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG",
	"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg",
	"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631300305227E03_DXXX.jpg"
    ]
	randomNumber= Math.floor(Math.random()*7);

backgroundImage = nasaMarsImageArray[randomNumber];

roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, onloading essa variável
	backgroundImgTag.src = backgroundImage;   // carregue a imagem

	roverImgTag = new Image(); //definindo uma variável com uma nova image
	roverImgTag.onload = uploadrover; // ajustando uma função, onloading essa variável
	roverImgTag.src = roverImage;   // carregue a imagem
}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}

		//Atividade Adicional
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		//Fim da Atividade Adicional
}
//Coberto na C85. 
function up()
{
	if(roverY >=0)
	{
		roverY = roverY - 10;
		console.log("Quando a seta para cima for pressionada,  x = " + roverX + " | y = " +roverY);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(roverY <=500)
	{
		roverY =roverY+ 10;
		console.log("Quando a seta para baixo for pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(roverX >= 0)
	{
		roverX =roverX - 10;
		console.log("When left arrow is pressed,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(roverX <= 700)
	{
		roverX =roverX + 10;
		console.log("When right arrow is pressed,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		uploadrover();
   }
}
	