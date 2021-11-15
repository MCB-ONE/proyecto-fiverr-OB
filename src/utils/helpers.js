import moment from 'moment';

export const generatePostDate = (date) => {
    const given = moment(date).format('YYYY-MM-DD');
    const current = moment().startOf('day');
    const postDate = current.diff(given, 'days');
    console.log(given);
    return postDate;
};

export const techIcons = [
    { src: '../images/tecnologies_icons/angular_logo.png' },
    { src: '../images/tecnologies_icons/css_logo.png' },
    { src: '../images/tecnologies_icons/html_logo.png' },
    { src: '../images/tecnologies_icons/java_logo.png' },
    { src: '../images/tecnologies_icons/js_logo.png' },
    { src: '../images/tecnologies_icons/react_logo.png' },
  ];
