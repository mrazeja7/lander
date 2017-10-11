export default class Ship
{
	constructor(screenWidth, screenHeight)
	{
		this.x = 10;
		this.y = screenHeight/2;
		this.angle = Math.PI/3;
	}

	render(ctx)
	{
		ctx.save();
		ctx.strokeStyle = 'black';
		ctx.beginPath();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.angle);
		ctx.moveTo(0, -5);
		ctx.lineTo(2, 5);
		ctx.lineTo(-2, 5);
		ctx.closePath();
		ctx.stroke();
		ctx.restore();
	}
}