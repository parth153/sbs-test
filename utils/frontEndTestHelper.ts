import { WIDTH_PROGRESS_20_SEC } from "./contants";

export class FrontEndTestHelper{

    static addSubSecondsFromTimeLapsedElementText(time: string, seconds: number, addSubstractOption: string): string {
        let mins = +time.split(':')[0];
        let secs = +time.split(':')[1];

        let totalSeconds = mins*60 + secs;

        let calcSecs = addSubstractOption === 'forward' ? totalSeconds + seconds : totalSeconds - seconds;
        
        if (calcSecs < 0) {
            mins = 0;
            secs = 0;
        } else {
            mins = Math.floor(calcSecs/60);
            secs = calcSecs - mins*60;
        }

        let finalMins = ("0" + mins).slice(-2);
        let finalSecs = ("0" + secs).slice(-2);

        return (finalMins + ':' + finalSecs);
    }

    static calculateWidthProgressFor20Secs(currentWidthString: string, forwardRewindOption: string) {
        let currentWidth = +(currentWidthString.slice(0, -1));
        let widthProgress : number;

        if (forwardRewindOption === 'forward') {
            widthProgress = currentWidth + WIDTH_PROGRESS_20_SEC;
        } else {
            widthProgress = currentWidth - WIDTH_PROGRESS_20_SEC;
        }

        return widthProgress.toFixed(5).slice(0, -1);

    }

}