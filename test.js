alert("Hello in who i am try to guess ok ?")

var question = confirm("Do You Fly ? yes or no   ")
let result;
if (question == true) 
{
    result = confirm("ok ... Are you wild  yes or no ? ");

  if(result == true)
  {
   result = console.log("So the wild is Eagle ")
  }
  else
  {
    result = console.log("So the wild is Parrot")
  }
}
else if (question == false)
{
    question = confirm("Do you live under the sea ? yes or no ?!")
if (question == true)
            {
                
                question = confirm("are you wild ? ")
                if(question == true)
                {
                    result = console.log("so this is a Shark")
                }
                else
                {
                    result == console.log("so this is a Dolphin")
                }
            }
            if (question == false)
            {
                question = confirm("are you wild ? ")
                if(question == true)
                {
                    result = console.log("so this is a lion")
                }
                else
                {
                    console.log("so this is a Cat ")
                }
            }
            
            
} 
