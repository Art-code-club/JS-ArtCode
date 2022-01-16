export class David {
    constructor(stageWidth, stageHeight){
        this.stageHeight = stageHeight;
        this.stageWidth =stageWidth;

        this.x = stageWidth/2;
        this.y = stageHeight/2;

        

    }


    Draw(ctx, stageWidth, stageHeight){
        
        for(var i=0; i<10; i++){
            this.Move();
        }

        ctx.drawImage(Davidimg, 700,100,200,200 );
    }
    Move(x,y){
        x+=10;
        y+=10;
    }

    Rotate(){
        var time = new Date();
        ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );

    }
}