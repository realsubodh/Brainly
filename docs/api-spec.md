#### Signup Endpoint  
POST api/v1/signup  
**Constraints**  
1. Username should have 3-10 letters
2. Password should have min 8 characters and max 16 chars, should have atleast one uppercase, one lowercase, one special char and one special number.  
**Response**  
1. Status 200 - Signed Up.
2. Status 411 - Error in inputs.
3. Status 403 - User already exists in database.
4. Status 500 - Server error.  

#### Signin Endpoint 
POST api/v1/signin  
if user gets 200 status code then server also return a **JWT_Token**.  

#### Add new content Endpoint  
POST api/v1/content  
{  
    "type":"document | video | etc",  
    "link":"url",  
    "title:"something..",  
    "tags":["productivity", "entertainment",....]  
}  
Note: Tags are **dynamic** here, the list will grow automatically as the user preferences grow.  

#### Fetching all existing content (No Pagination)  
POST api/v1/content  
{  
    "contentID":[
        {
            "id":1,  
            "link":"url",  
            "title:"something..",  
            "tags":["productivity", "entertainment",....] 
        }
    ]  
}  

#### Deleting a content
POST api/v1/delete  
{  
    "contentID":1  
}  

#### Sharing the whole brain  
POST api/v1/brain/share  
{  
    "share": true
}  
returns
{
    "link":"link_to_open_brain" 
}   

#### Fetch another user's shared brain content endpoint  
GET /api/v1/brain/:shareLink  
**Returns**
200: Returns username and array of content.  
404: If the share link is invalid or sharing is diabled.  








