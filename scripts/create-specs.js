import fs from 'fs';
import path from 'path';
import gutil from 'gulp-util';
import R from 'ramda';
import { exec } from 'child_process';


const paths = {
    dataPath: 'http://localhost:9001/data/',
    imagePath: 'http://localhost:9001/img/',
};

const create = folder => new Promise((resolve, reject) => {
    // const files = R.map(file => path.join(folder, file), fs.readdirSync(folder));
    // const max = R.length(files);

    import('../src/specs/spec4a.js')
    .then(
        (module) => {
            const spec = JSON.stringify(module.default(paths));
            const file = path.join(__dirname, '../specs/spec4a.json');

            exec(`echo  '${spec}' | python -m json.tool > ${file}`, (error, stdout, stderr) => {
                if (R.isNil(stdout) === false && stdout !== '') {
                    gutil.log(gutil.colors.blue('stdout: ', stdout));
                }
                if (R.isNil(stderr) === false && stderr !== '') {
                    gutil.log(gutil.colors.red('stderr: ', stderr));
                }
                if (R.isNil(error) === false) {
                    gutil.log(gutil.colors.red('exec error: ', error));
                }
                // callback();
            });
        },
        (err) => {
            reject(err);
        },
    )
    .catch((error) => {
        console.log(error);
    });
});

// export default create;
create();
