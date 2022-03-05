const test = () => {

    // 로컬 시간
    const curr = new Date();

    // utc 시간
    const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);

    // utc랑 한국이랑 9시간 차이
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;

    // 한국이랑 미국이랑 13시간 차이
    const KR_US_DIFF = 13 * 60 * 60 * 1000;

    // UTC 시간
    const utc_curr = new Date(utc);

    // 한국 시간
    const kr_curr = new Date(utc + KR_TIME_DIFF + KR_TIME_DIFF);
    // 미국 시간
    const us_curr = new Date(utc + KR_TIME_DIFF + KR_TIME_DIFF + KR_US_DIFF);

    console.log('utc: ', utc_curr);
    console.log('KR: ', kr_curr);
    console.log('US: ', us_curr);


}
test();