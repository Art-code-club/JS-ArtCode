import{
    David
} from './David.js';

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        //여기까지 캔버스 그리고 크기 조정 완료.

        this.David = new David(this.stageWidth, this.stageHeight);

       //window.requestAnimationFrame(this.animate.bind(this));
        
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth *2;
        this.canvas.height = this.stageHeight *2;

        this.ctx.scale(2,2);
    }

    animation(t) {
        window.requestAnimationFrame(this.animate.bind(this));
        
        this.ctx.clearRect(0,0, this.stageWidth, this.stageHeight);
        this.David.Draw(this.ctx, this.stageWidth, this.stageHeight);

    }
}

window.onload = () => {
    new App();
};