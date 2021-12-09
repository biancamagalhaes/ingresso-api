const format = (timestamp: string) => {
    const date = new Date(timestamp);
    if(date.getMonth()+1 > 10){
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }else{
        return `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()}`;
    }
};

export default format;