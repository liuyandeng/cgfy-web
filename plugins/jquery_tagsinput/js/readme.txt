https://www.jq22.com/jquery-info19906


使用方法
首先，将Javascript和CSS文件添加到您的标记中：

<script src="jquery.tagsinput.js"></script>
<link rel="stylesheet" type="text/css" href="jquery.tagsinput.css" />
在表单中创建一个包含以逗号分隔的标记列表的实际输入。您可以在value属性中放置任何默认或现有标记，并且可以正确处理它们。
<input name="tags" id="tags" value="foo,bar,baz" />

然后，只需在任何应被视为标记列表的字段上调用tagsInput函数。
$('#tags').tagsInput();

如果要使用jQuery.autocomplete，可以使用自动完成URL传递参数。
$('#tags').tagsInput({
  autocomplete_url:'http://*******.com/api/autocomplete'
});

如果您正在使用带有额外参数的低音jQuery.autocomplete，您还可以将选项发送到自动完成插件，如此处所述。
$('#tags').tagsInput({
  autocomplete_url:'http://myserver.com/api/autocomplete',
  autocomplete:{selectFirst:true,width:'100px',autoFill:true}
});

您可以通过调用addTag（）和removeTag（）函数来添加和删除标记。
$('#tags').addTag('foo');
$('#tags').removeTag('bar');

您可以使用importTags（）函数导入标签列表...
$('#tags').importTags('foo,bar,baz');

您还可以使用importTags（）重置标记列表...
$('#tags').importTags('');

你可以使用tagExist（）检查标签是否存在...
if ($('#tags').tagExist('foo')) { ... }

如果在添加或删除标记时需要其他功能，则可以通过onAddTag和onRemoveTag参数指定回调函数。两个函数都应该接受单个标记作为参数。

如果您不想提供添加标记的方法，或者您希望提供用于向框添加标记的备用界面，则可以将false传递给可选的“interactive”参数。
标签仍将按常规呈现，addTag和removeTag函数将按预期运行。

如果要在每次更新/删除标记时调用函数，请将其设置为“onChange”选项。

默认情况下，如果光标紧跟在标记之后，则按退格键将删除该标记。如果要覆盖它，请将“removeWithBackspace”选项设置为false。