export default class Terrain
{
	constructor(screenWidth, screenHeight)
	{
		var x = 0;
		var y = Math.random() * screenHeight/2 + screenHeight/2 - 10;
		this.path = [];
		var dist = Math.random() * 20;

		function clampHeight(height)
		{	
			var newHeight = height;
			do
			{				
				var probability = Math.random();
				if (probability < 0.30)
				{
					newHeight -= Math.random() * 50;
				}
				else if (probability < 0.60)
				{
					newHeight += Math.random() * 50;
				}
			} while (newHeight < screenHeight/2 || newHeight > screenHeight - 10);
			return newHeight;
		} 
		while(x < screenWidth)
		{
			x = x + Math.random() * 50;
			y = clampHeight(y);
			this.path.push({x: x + dist, y: y});
		}
	}
	render(ctx)
	{		
		ctx.save();

		ctx.beginPath();
		ctx.strokeStyle = 'black';
		ctx.moveTo(this.path[0].x, this.path[0].y);
		for (var i = 0; i < this.path.length; i++) 
		{
			ctx.lineTo(this.path[i].x, this.path[i].y);
			ctx.stroke();
		}

		ctx.restore();
	}
}