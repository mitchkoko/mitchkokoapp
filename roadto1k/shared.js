function toggleTheme(){
    const body=document.body;
    const current=body.getAttribute('data-theme');
    const next=current==='light'?'dark':'light';
    body.setAttribute('data-theme',next);
    try{ localStorage.setItem('theme',next); }catch(e){}
}

document.addEventListener('DOMContentLoaded',()=>{
    let theme='light';
    try{
        const saved=localStorage.getItem('theme');
        const systemDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
        theme=saved || (systemDark?'dark':'light');
    }catch(e){}
    document.body.setAttribute('data-theme',theme);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',(e)=>{
    try{
        if(!localStorage.getItem('theme')){
            document.body.setAttribute('data-theme', e.matches?'dark':'light');
        }
    }catch(e){}
});
