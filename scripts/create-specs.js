import fs from 'fs';
import path from 'path';
import gutil from 'gulp-util';
import R from 'ramda';
import { exec } from 'child_process';

const paths = {
    dataPath: './data/',
    imagePath: './img/',
};

const importModule = (index, max, modules, outputFolder, callback) => {
    if (index + 1 === max) {
        callback('done!');
        return;
    }

    const next = () => {
        importModule(index + 1, max, modules, outputFolder, callback);
    };

    const data = modules[index];
    gutil.log(gutil.colors.blue('import: ', data.path));
    import(data.path)
        .then(
        (module) => {
            const spec = JSON.stringify(module.default(paths));
            const file = path.join(outputFolder, data.name);

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
                gutil.log(gutil.colors.blue('export: ', file));
                next();
            });
        },
        (error) => {
            gutil.log(gutil.colors.red('[reject]', error));
            next();
        })
        .catch((error) => {
            gutil.log(gutil.colors.red('[catch]', error));
            next();
        });
};

const create = (folder, outputFolder = __dirname) => new Promise((resolve, reject) => {
    const files = R.map(file => path.join(folder, file), fs.readdirSync(folder));
    const modules = R.reduce((acc, value) => {
        const data = {
            path: value,
            name: `${path.basename(value, '.js')}.json`,
        };
        return [...acc, data];
    }, [], files);
    // console.log(outputFolder);
    // console.log(modules);
    const max = R.length(files);
    importModule(0, max, modules, outputFolder, resolve);
});

create(path.join(__dirname, '../src/specs'), path.join(__dirname, '../public/specs'))
    .then(data => gutil.log(gutil.colors.green(data)));
