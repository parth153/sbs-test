import {WIDTH_PROGRESS_20_SEC} from "./contants";

export class FrontEndTestHelper {
    static addSubSecondsFromTimeLapsedElementText(time: string, seconds: number, addSubstractOption: string): string {
        let mins = +time.split(":")[0];
        let secs = +time.split(":")[1];

        const totalSeconds = mins*60 + secs;

        const calcSecs = addSubstractOption === "forward" ? totalSeconds + seconds : totalSeconds - seconds;

        if (calcSecs < 0) {
            mins = 0;
            secs = 0;
        } else {
            mins = Math.floor(calcSecs/60);
            secs = calcSecs - mins*60;
        }

        const finalMins = ("0" + mins).slice(-2);
        const finalSecs = ("0" + secs).slice(-2);

        return (finalMins + ":" + finalSecs);
    }

    static calculateWidthProgressFor20Secs(currentWidthString: string, forwardRewindOption: string) {
        const currentWidth = +(currentWidthString.slice(0, -1));
        let widthProgress : number;

        if (forwardRewindOption === "forward") {
            widthProgress = currentWidth + WIDTH_PROGRESS_20_SEC;
        } else {
            widthProgress = currentWidth - WIDTH_PROGRESS_20_SEC;
        }

        return widthProgress.toFixed(5).slice(0, -1);
    }
}
