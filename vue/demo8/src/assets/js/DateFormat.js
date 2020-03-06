function dateFormatNow(format){

  const date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  if (!format || format === ''){
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + seconds;
  }else if(format === 'yyyy-mm-dd'){
    return year + '-' + month + '-' + day;
  }
}

function dateFormat(datee, format){

  let date = new Date(datee)
  
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  if (!format || format === ''){
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + seconds;
  }else if(format === 'yyyy-mm-dd'){
    return year + '-' + month + '-' + day;
  }
}

export default{
  dateFormatNow: dateFormatNow,
  dateFormat: dateFormat
}
