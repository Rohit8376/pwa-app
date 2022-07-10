

export default function swDev(){
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`   
    navigator.serviceWorker.register(swUrl).then(rs=>{
    console.log(rs);
    }).catch(err=>{
        console.log(err);
    })
}