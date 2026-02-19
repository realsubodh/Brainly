#### parse() vs safeParse() in Zod Validation Middleware
So, till now i am using a traditional way of using zod directly in controller routes but since I'm learning the production way so I have separated the routes, zod schemas, controllers, and middlewares.  
**parse()** fun directly returns the result, it directly throws the validated data. And it is used when :  
- You are using it in Middleware because try and catch blocks are already there, so the data will be passed accordinly to the success and error based on the validation and everything handles automatically. Thus makes the code more clean and easy to understand.  
**safeParse()** is a traditional way, it return the data in the form of object. And for handling the object you used the if(!success){returns something something}. 
- This method is used when you are directly using code in the controller or route file, making the code redundant and unecessary lengthy.
