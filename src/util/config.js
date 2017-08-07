export default () => {
    let dataPath = `${window.location.protocol}//${window.location.host}/data/`;
    let imagePath = `${window.location.protocol}//${window.location.host}/img/`;

    if (window.location.hostname.indexOf('github') !== -1) {
        dataPath = `${window.location.protocol}//${window.location.host}/vega-specs/data/`;
        imagePath = `${window.location.protocol}//${window.location.host}/vega-specs/img/`;
    } else if (window.location.hostname.indexOf('abumarkub') !== -1) {
        dataPath = `${window.location.protocol}//${window.location.host}/fffact/data/`;
        imagePath = `${window.location.protocol}//${window.location.host}/fffact/img/`;
    }

    return {
        dataPath,
        imagePath,
    };
};

