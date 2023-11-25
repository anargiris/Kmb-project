Some notes for the project:

1. I have used the **everything** API, therefore I had no access to the category value. Instead I used the **sortBy** query for filtering the results using a select dropdown.

Since I didn't have access to the category value, I showed the **author** value of each article at the bottom of each Article item.

2. For storing the current page and sortBy options in the URL I needed to search a bit on how to handle this functionality in NextJS. The implementation can be seen on the page.js file. I run a useEffect on page load that checks if the query parameters have valid values in them, then update the state. I think it works properly but there might be some bugs in it.

FYI this is the issue link based on I implement the solution:
https://github.com/vercel/next.js/discussions/47583

3. At around 4:44PM (2 hours and 44 mins of work time) the API hit its limits and required me to upgrade to a premium plan to continue using it. I used that time to refactor some of the code
