

export default function (icon = "./jelly.png" as string){
    
let  link = document.querySelector("link[rel~='icon']") as HTMLLinkElement ||null 
    if (!link) {
        link = document.createElement('link') 
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
link.href = icon
}