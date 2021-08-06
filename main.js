
student_array = []
var a=1;

function submit()
{
    var names = document.getElementById("names").value;

    student_array.push(names)

    console.log(student_array)

    document.getElementById("display_to_guest").innerHTML = student_array
    document.getElementById("submit").style_display = "none";
    document.getElementById("Sort").style_display = "none";
}

function Sort()
{
    student_array.sort()
    console.log(student_array)
    document.getElementById("display_to_sort").innerHTML = student_array
}