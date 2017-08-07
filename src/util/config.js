export default () => {
    let dataPath = `${window.location.protocol}//${window.location.host}/data/`;
    let imagePath = `${window.location.protocol}//${window.location.host}/img/`;

    if (window.location.hostname === 'github') {
        dataPath = `${window.location.protocol}//${window.location.host}/vega-specs/data/`;
        imagePath = `${window.location.protocol}//${window.location.host}/vega-specs/img/`;
    } else if (window.location.hostname === 'abumarkub') {
        dataPath = `${window.location.protocol}//${window.location.host}/fffact/data/`;
        imagePath = `${window.location.protocol}//${window.location.host}/fffact/img/`;
    }

    return {
        dataPath,
        imagePath,
    };
};

