
http://www.htmleaf.com/jQuery/Form/201805075108.html

简要教程
tagsinput是一款基于Bootstrap的自定义标签插件。该自定义标签插件提供api接口，可以将input和select元素转换为标签。并能和typehead.js插件结合，提供查询提示信息。

tagsinput.js自定义标签插件支持bootstrap 3 和 bootstrap 4。





一.使用方法
在页面中引入jquery和bootstrap相关文件 ，以及tagsinput.css和tagsinput.js文件。

<link href="bootstrap.css" rel="stylesheet">
<link href="tagsinput.css" rel="stylesheet">
<script src="jquery.min.js"></script>
<script src="bootstrap.min.js"></script>
<script src="typehead.min.js"></script>
<script src="tagsinput.js"></script>


二.HTML结构
使用<input>作为标签时，只需要添加data-role="tagsinput"属性即可。

<input type="text" data-role="tagsinput" value="jQuery,Script,Net">
使用<select>元素作为标签时，需要添加multiple data-role="tagsinput"属性。

<select multiple data-role="tagsinput">
  <option value="jQuery">jQuery</option>
  <option value="Angular">Angular</option>
  <option value="React">React</option>
  <option value="Vue">Vue</option>
</select>



三.初始化插件
你也可以动态的为input元添加标签。

$('input').tagsinput('add', { "value": 1 , "text": "jQuery"});
$('input').tagsinput('add', { "value": 2, "text": "Script"});
$('input').tagsinput('add', { "value": 3, "text": "Net"});



四.配置参数
该响应式圆形js轮播图插件的可用配置参数如下：

参数	描述
tagClass	标签的class名称，获者是一个返回classname的函数。
$('input').tagsinput({
  tagClass: 'big'
});
$('input').tagsinput({
  tagClass: function(item) {
    return (item.length > 10 ? 'big' : 'small');
  }
});


itemValue	当使用对象作为标签时，itemValue属性用于指明标签值的属性名称。
$('input').tagsinput({
    itemValue: 'id'
});
$('input').tagsinput({
  itemValue: function(item) {
    return item.id;
  }
});
itemText	当使用对象作为标签时，itemText属性用于指明标签名称的属性名称。
$('input').tagsinput({
  itemText: 'label'
});
$('input').tagsinput({
  itemText: function(item) {
    return item.label;
  }
});
confirmKeys	用于在输入框输入标签时通过什么按键来输出标签。默认为[13, 188]，代表回车和comma键。
$('input').tagsinput({
  confirmKeys: [13, 44]
});
maxTags	输入标签的最大数量。（如果设置了该参数）
$('input').tagsinput({
  maxTags: 3
});
maxChars	单个标签的最大字符数。（如果设置了该参数）。默认为undefined
$('input').tagsinput({
   maxChars: 8
});
trimValue	如果设置为true，会自动删除标签首尾的空白。默认为false
$('input').tagsinput({
   trimValue: true
});
allowDuplicates	如果设置为true，可以输入相同的标签。默认为false
$('input').tagsinput({
  allowDuplicates: true
});
focusClass	当输入框获得焦点时，参数指定的class会被应用到容器上。
$('input').tagsinput({
  focusClass: 'my-focus-class'
});
freeInput	允许不同该typeahead的数据源来创建标签。默认为true
$('input').tagsinput({
  typeahead: {
    source: ['Amsterdam', 'Washington', 'Sydney', 'Beijing', 'Cairo']
  },
  freeInput: true
});
typeahead	typeahead对象。
$('input').tagsinput({
  typeahead: {
    source: ['Amsterdam', 'Washington', 'Sydney', 'Beijing', 'Cairo']
  }
});
$('input').tagsinput({
  typeahead: {
    source: function(query) {
      return $.get('http://someservice.com');
    }
  }
});
cancelConfirmKeysOnEmpty	Boolean value controlling whether form submissions get processed when pressing enter in a field converted to a tagsinput (default: false).
$('input').tagsinput({
  cancelConfirmKeysOnEmpty: true
});
onTagExists	当视图添加一个已经存在的标签时的回调函数。默认是存在的标签隐藏然后淡入显示。
$('input').tagsinput({
  onTagExists: function(item, $tag) {
    $tag.hide().fadeIn();
  }
});



五.方法
该Bootstrap tagsinput自定义标签插件的可用方法有：

add：添加一个标签。
$('input').tagsinput('add', 'some tag');
$('input').tagsinput('add', { id: 1, text: 'some tag' });
你还可以添加第三个参数来控制添加标签的方法：

$('input').tagsinput('add', 'some tag', {preventPost: true});
$('#tags-input').on('beforeItemAdd', function(event) {
   var tag = event.item;
   // Do some processing here
 
   if (!event.options || !event.options.preventPost) {
      $.ajax('/ajax-url', ajaxData, function(response) {
         if (response.failure) {
            // Remove the tag since there was a failure
            // "preventPost" here will stop this ajax call from running when the tag is removed
            $('#tags-input').tagsinput('remove', tag, {preventPost: true});
         }
      });
   }
});
remove：删除一个标签。
$('input').tagsinput('remove', 'some tag');
$('input').tagsinput('remove', { id: 1, text: 'some tag' });
你还可以添加第三个参数来控制删除标签的方法：

$('input').tagsinput('remove', 'some tag', {preventPost: true});
$('#tags-input').on('beforeItemRemove', function(event) {
   var tag = event.item;
   // Do some processing here
 
   if (!event.options || !event.options.preventPost) {
      $.ajax('/ajax-url', ajaxData, function(response) {
         if (response.failure) {
            // Re-add the tag since there was a failure
            // "preventPost" here will stop this ajax call from running when the tag is added
            $('#tags-input').tagsinput('add', tag, {preventPost: true});
         }
      });
   }
});
removeAll：删除所有的标签。
$('input').tagsinput('removeAll');
focus：使标签输入框聚焦。
$('input').tagsinput('focus');
input：获取标签输入框对象。
var $elt = $('input').tagsinput('input');
refresh：刷新标签输入框。
$('input').tagsinput('refresh');
destroy：销毁插件。
$('input').tagsinput('destroy');



六.事件
该Bootstrap的标签输入框插件的可用事件有：

itemAddedOnInit：在初始化时，预加载的标签会触发该事件。
$('input').on('itemAddedOnInit', function(event) {
  // event.item: contains the item
});
beforeItemAdd：在添加一个标签之前会触发该事件。
$('input').on('beforeItemAdd', function(event) {
  // event.item: contains the item
  // event.cancel: set to true to prevent the item getting added
});
itemAdded：添加一个标签时会触发该事件。
$('input').on('itemAdded', function(event) {
  // event.item: contains the item
});
beforeItemRemove：在删除一个标签之前会触发该事件。
$('input').on('beforeItemRemove', function(event) {
  // event.item: contains the item
  // event.cancel: set to true to prevent the item getting removed
});
itemRemoved：删除一个标签时会触发该事件。
$('input').on('itemRemoved', function(event) {
  // event.item: contains the item
});




 该Bootstrap tagsinput自定义标签插件的github地址为：https://github.com/Nodws/bootstrap4-tagsinput