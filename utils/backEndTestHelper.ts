import JsMediaTags = require("jsmediatags");
const {I} = inject();


export class BackEndTestHelper {
    static getTagsFromMP3Link(mp3LInk: string): Promise<any> {
        return new Promise((resolve) => {
            new JsMediaTags.Reader(mp3LInk)
                .read({
                    onSuccess: (tag) => {
                        resolve(tag);
                    },
                    onError: (error) => {
                        I.assertEmpty(error, "Error in fetching mp3 tags");
                    },
                });
        });
    }
}
