import multer from "multer";

export class UploadCrv {
    execult() {
        const upload = multer({
            dest: "./tmp",
        })

        return upload;
    }
}