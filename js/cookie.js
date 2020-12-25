/*cookie start*/
var Cookie=new function(){
    //添加cookie
    this.add=function(name,value,hours){
        var life=new Date().getTime();
        life+=hours*1000*60;
        var cookieStr=name+"="+escape(value)+";expires="+new Date(life).toGMTString();
        document.cookie=cookieStr;
    };
    //获取cookie值
    this.get=function(name){
        var cookies = document.cookie.split(";");
        if(cookies.length>0){
            var cookie=cookies[0].split("=");
            if(cookie[0]==name)
                return unescape(cookie[1]);
        }
        return null;
    };
    //删除cookie
    this.remove=function(name){
        var cookieStr=name+"="+escape('null')+";expires="+new Date().toGMTString();
        document.cookie=cookieStr;
    };
}
/*cookie end*/
