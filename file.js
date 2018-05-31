<script>
function changeImage()
{
element=document.getElementById('myimage')
if (element.src.match("star-bath"))
  {
  element.src="images/star-first.png";
  }
else
  {
  element.src="images/star-bath.png";
  }
}
</script>

<p>Нажмите на звезду, чтобы изменить цвет!</p>

<img id="myimage" onclick="changeImage()"
src="images/star-first.png" width="256" height="256">