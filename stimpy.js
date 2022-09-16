/*	Stimpy Mouse */

function stimpy(  )	
{
	this.x;
	this.y;
	this.path;
	this.direction = 0;
	this.img = new Image(  );
		this.img.src = "../img/stimpy.png";

	
	this.spawn = function()	 {
		while( true )	{
			x = Math.floor( Math.random() * poleX );
			y = Math.floor( Math.random() * poleY );
				if( free( x, y ) )		{
					this.x = x;
					this.y = y;
							break;
										}
						}
							 }
			 
	this.spawn()
	
	this.walk = function()	{
		
		//обнуляем путь
		this.path = [ new xyz( this.x, this.y, 0, 0 ) ];
		
		if( this.direction == 0 )	{
			
			//задаем новое направление (если надо)
			while( true )	{

				zx = Math.floor( Math.random() * ( poleX ) );
				zy = Math.floor( Math.random() * poleY );
				
					if( free( zx, zy ) )		{
						this.direction = new xyz( zx, zy );
							break;
												}
							}
											
									}
		
		//кидаем кольца
		c = 0;
			for( i=0; i<this.path.length; i++ )		{
			 c++;
				if( !this.addPath( this.path[i].x + 1, this.path[i].y + 0, c, this.path[i].index ) )	
					{ this.reverse(); return; }		//r
						else{ c++; }
				if( !this.addPath( this.path[i].x + 0, this.path[i].y + 1, c, this.path[i].index ) )	
					{ this.reverse(); return; }		//d
						else{ c++; }
				if( !this.addPath( this.path[i].x - 1, this.path[i].y + 0, c, this.path[i].index ) )	
					{ this.reverse(); return; }		//l
						else{ c++; }
				if( !this.addPath( this.path[i].x + 0, this.path[i].y - 1, c, this.path[i].index ) )	
					{ this.reverse(); return; }		//u
						else{ c++; }
													}
		
							}
							
	this.reverse = function (  )			{

		this.path.reverse();

		//return;
			 Born = this.path[ 0 ].born;
			  zx = this.path[ 0 ].x;
			  zy = this.path[ 0 ].y;
			 
				for( i=0; i<this.path.length-1; i++ )		{	// -1 исключает точку на которой стоит Stimpy
				
					//console.log( this.path[ i ].index+ " , " +Born )
					
					if( this.path[ i ].index == Born )			{

						zx = this.path[ i ].x;
						zy = this.path[ i ].y;
							Born = this.path[ i ].born;
								this.path[ i ].marker = 1;

																}
					
															}

			this.x = zx;
			this.y = zy;
			
				if( this.x == this.direction.x && this.y == this.direction.y )		{ this.direction = 0; }
														
											}
							
	this.addPath = function( zx, zy, zIndex, zParent )		{		//убрал zi из входящих переменных
		if( this.inPath( zx, zy ) == -1 )		{
			if( zx >= 0 && zx < poleX && zy >= 0 && zy < poleY )		{
				if( matrix[zx][zy] == 0 )	{
				
					this.path[ this.path.length ] = new xyz( zx, zy, zIndex, zParent );
					
						//если нашел
						if( zx == this.direction.x && zy == this.direction.y )		{
							return false;
																					}
											}
																		}
												}
		return true;
															}
	
	this.inPath = function( zx, zy )	{
		for( p=0; p < this.path.length; p++ )		{
			if( this.path[ p ].x == zx && this.path[ p ].y == zy )		{ return p; }
													}
		return -1;
										}
	
}